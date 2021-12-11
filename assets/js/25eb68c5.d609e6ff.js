"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8668],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return r?l.createElement(f,i(i({ref:t},d),{},{components:r})):l.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}p.displayName="MDXCreateElement"},215:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var l=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],a={id:"mobilemodelmodule.modelresult",title:"Interface: ModelResult<T>",sidebar_label:"ModelResult",custom_edit_url:null},c=void 0,u={unversionedId:"api/core/interfaces/mobilemodelmodule.modelresult",id:"api/core/interfaces/mobilemodelmodule.modelresult",isDocsHomePage:!1,title:"Interface: ModelResult<T>",description:"MobileModelModule.ModelResult",source:"@site/docs/api/core/interfaces/mobilemodelmodule.modelresult.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/mobilemodelmodule.modelresult",permalink:"/live/docs/api/core/interfaces/mobilemodelmodule.modelresult",editUrl:null,version:"current",frontMatter:{id:"mobilemodelmodule.modelresult",title:"Interface: ModelResult<T>",sidebar_label:"ModelResult",custom_edit_url:null},sidebar:"api",previous:{title:"MobileModel",permalink:"/live/docs/api/core/interfaces/mobilemodelmodule.mobilemodel"},next:{title:"ModelResultMetrics",permalink:"/live/docs/api/core/interfaces/mobilemodelmodule.modelresultmetrics"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"metrics",id:"metrics",children:[]},{value:"result",id:"result",children:[]}]}],s={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/live/docs/api/core/modules/mobilemodelmodule"},"MobileModelModule"),".ModelResult"),(0,o.kt)("p",null,"Result of model inference. Each model result has the inference time and the\nmodel result. The model result depends on the model and is therefore\nspecified as a generic type (i.e., template)."),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Model result type")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"metrics"),": ",(0,o.kt)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/mobilemodelmodule.modelresultmetrics"},"ModelResultMetrics")),(0,o.kt)("p",null,"The model result metrics, e.g., including inference time in milliseconds."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/MobileModelModule.ts#L97"},"MobileModelModule.ts:97")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"result"},"result"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"result"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"T")),(0,o.kt)("p",null,"The model result."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/MobileModelModule.ts#L92"},"MobileModelModule.ts:92")))}p.isMDXComponent=!0}}]);