/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <jsi/jsi.h>

#include "../../torchlive.h"

namespace torchlive {
namespace torch {

using namespace facebook;

class JSI_EXPORT TorchHostObject : public facebook::jsi::HostObject {
  facebook::jsi::Function arange_;
  facebook::jsi::Function empty_;
  facebook::jsi::Function fromBlob_;
  facebook::jsi::Function mul_;
  facebook::jsi::Function permute_;
  facebook::jsi::Function rand_;
  facebook::jsi::Function randint_;
  facebook::jsi::Function softmax_;
  facebook::jsi::Function sub_;
  facebook::jsi::Function tensor_;
  facebook::jsi::Function topk_;
  facebook::jsi::Function zeros_;

 public:
  TorchHostObject(
      facebook::jsi::Runtime& runtime,
      torchlive::RuntimeExecutor runtimeExecutor);

  facebook::jsi::Value get(
      facebook::jsi::Runtime&,
      const facebook::jsi::PropNameID& name) override;
  std::vector<facebook::jsi::PropNameID> getPropertyNames(
      facebook::jsi::Runtime& rt) override;

 private:
  torchlive::RuntimeExecutor runtimeExecutor_;
  static facebook::jsi::Function createArange(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createEmpty(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createFromBlob(
      facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createMul(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createPermute(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createRand(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createRandint(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createSoftmax(facebook::jsi::Runtime& runtime);
  static facebook::jsi::Function createSub(facebook::jsi::Runtime& runtime);
  static jsi::Function createTensor(jsi::Runtime& runtime);
  static jsi::Function createTopK(jsi::Runtime& runtime);
  static jsi::Function createZeros(jsi::Runtime& runtime);
};

} // namespace torch
} // namespace torchlive
