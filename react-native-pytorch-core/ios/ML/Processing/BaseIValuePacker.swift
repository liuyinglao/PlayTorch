/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Foundation
import SwiftyJSON

class BaseIValuePacker {

    enum BaseIValuePackerError: Error {
        case ImageUnwrapError
        case InvalidImageToImageName
        case InvalidImageToTensorName
        case InvalidTransformType
        case InvalidPackType
        case InvalidUnpackType
        case InvalidParam
        case InvalidDType
        case JSONToStringError
        case StringToJSONError
    }

    func pack(params: NSDictionary, modelSpec: JSON) throws -> IValue? {
        let modelSpecification: JSON
        do {
            modelSpecification = try applyParams(modelSpec: modelSpec, params: params)
        } catch {
            throw error
        }

        guard let type = modelSpec["pack"]["type"].string else {
            throw BaseIValuePackerError.InvalidPackType
        }
        switch type {
        case "tensor_from_image":
            return try packImage(modelSpec: modelSpecification, params: params)
        default:
            throw BaseIValuePackerError.InvalidTransformType
        }
    }

    func unpack(ivalue: IValue, modelSpec: JSON) throws -> Any? {
        let unpack = modelSpec["unpack"]

        guard let type = unpack["type"].string,
              let key = unpack["key"].string else {
            throw BaseIValuePackerError.InvalidUnpackType
        }
        var value : Any? = nil
        switch type {
        case "tensor":
            value = try unpackTensor(ivalue: ivalue, unpack: unpack)
        case "argmax":
            value = try unpackArgmax(ivalue: ivalue, unpack: unpack)
        default:
            throw BaseIValuePackerError.InvalidUnpackType
        }
        return [key: value]
    }

    private func packImage(modelSpec: JSON, params: NSDictionary) throws -> IValue? {
        do {
            if let imageId = (params["image"] as? NSDictionary)?["ID"] as? String, let image = try ImageModule.unwrapImage(imageId).getBitmap() {
                let transforms: JSON = modelSpec["pack"]["transforms"]
                guard let tensor = try doImageTransforms(transforms: transforms.arrayValue, image: image) else {
                  throw BaseIValuePackerError.ImageUnwrapError
                }
                return IValue.fromTensor(tensor)
            } else {
                throw BaseIValuePackerError.ImageUnwrapError
            }
        } catch {
            throw BaseIValuePackerError.ImageUnwrapError
        }
    }

    private func doImageTransforms(transforms: Array<JSON>, image: CGImage) throws -> Tensor? {
        var newImage = image
        var tensor: Tensor? = nil
        for transform in transforms {
            let type = transform["type"].string
            let name = transform["name"].string

            switch type {
            case "image_to_image":
                var transformer: IImageTransform
                switch name {
                case "center_crop":
                    transformer = try CenterCropTransform.parse(transform: transform)
                case "scale":
                    transformer = try ScaleTransform.parse(transform: transform)
                default:
                    throw BaseIValuePackerError.InvalidImageToImageName
                }
                newImage = try transformer.transform(bitmap: newImage)
            case "image_to_tensor":
                var transformer: IImageToTensorTransform
                switch name{
                case "rgb_norm":
                    transformer = try RGBNormTransform.parse(transform: transform)
                case "greyscale_norm":
                    transformer = try GreyScaleNormTransform.parse(transform: transform)
                default:
                    throw BaseIValuePackerError.InvalidImageToTensorName
                }
                tensor = transformer.transform(bitmap: newImage)
            default:
                throw BaseIValuePackerError.InvalidTransformType
            }
        }
        return tensor
    }

    private func applyParams(modelSpec: JSON, params: NSDictionary) throws -> JSON {
        guard var specSrc = modelSpec.rawString() else {
            throw BaseIValuePackerError.JSONToStringError
        }

        for (key, value) in params {
            if let key = key as? String, let value = value as? String ?? (value as? NSNumber)?.stringValue {
                specSrc = specSrc.replacingOccurrences(of: "$\(key)", with: value)
            } else {
                if let key = key as? String {
                    if key != "image" {
                        throw BaseIValuePackerError.InvalidParam
                    }
                } else {
                    throw BaseIValuePackerError.InvalidParam
                }
            }
        }

        do {
            let spec = try JSON(data: Data(specSrc.utf8))
            return spec
        } catch {
            throw BaseIValuePackerError.StringToJSONError
        }
    }

    private func unpackTensor(ivalue: IValue, unpack: JSON) throws -> [Any] {
        let dtype = unpack["dtype"].string
        switch dtype {
        case "float":
            return ivalue.toTensor()?.getDataAsArray() ?? []
        default:
            throw BaseIValuePackerError.InvalidDType
        }
    }

    private func argmax(array: [Any]?, dtype: PTMTensorType?) -> Int {
        guard let array = array, let dtype = dtype else {
            return 0
        }

        switch dtype {
        case .float:
            var max = -MAXFLOAT;
            var ret = -1;
            for (i, item) in array.enumerated() {
                let num = item as! Float32
                if (num > max) {
                  ret = i;
                  max = num;
                }
            }
            return ret;
        default:
            return 0
        }
    }

    private func unpackArgmax(ivalue: IValue, unpack: JSON) throws -> Int {
        let dtype = unpack["dtype"].string
        switch dtype {
        case "float":
            let tensor = ivalue.toTensor()
            let array = tensor?.getDataAsArray()
            return argmax(array: array, dtype: tensor?.dtype)
        default:
            throw BaseIValuePackerError.InvalidDType
        }
    }
}
