"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7397],{3905:function(e,r,t){t.r(r),t.d(r,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),m=function(e){return function(r){var t=u(r.components);return n.createElement(e,o({},r,{components:t}))}},u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,s=m["".concat(i,".").concat(p)]||m[p]||f[p]||o;return t?n.createElement(s,l(l({ref:r},d),{},{components:t})):n.createElement(s,l({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8593:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],l={id:"torchlive_torch.module",title:"Interface: Module",sidebar_label:"Module",custom_edit_url:null},c=void 0,d={unversionedId:"api/core/interfaces/torchlive_torch.module",id:"api/core/interfaces/torchlive_torch.module",title:"Interface: Module",description:"torchlive/torch.Module",source:"@site/docs/api/core/interfaces/torchlive_torch.module.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/torchlive_torch.module",permalink:"/live/docs/api/core/interfaces/torchlive_torch.module",editUrl:null,tags:[],version:"current",frontMatter:{id:"torchlive_torch.module",title:"Interface: Module",sidebar_label:"Module",custom_edit_url:null},sidebar:"api",previous:{title:"IValue",permalink:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},next:{title:"Tensor",permalink:"/live/docs/api/core/interfaces/torchlive_torch.tensor"}},m=[{value:"Methods",id:"methods",children:[{value:"forward",id:"forward",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"forwardSync",id:"forwardsync",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:m};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torch"},"torchlive/torch"),".Module"),(0,o.mdx)("h2",{id:"methods"},"Methods"),(0,o.mdx)("h3",{id:"forward"},"forward"),(0,o.mdx)("p",null,"\u25b8 ",(0,o.mdx)("strong",{parentName:"p"},"forward"),"(...",(0,o.mdx)("inlineCode",{parentName:"p"},"input"),"): ",(0,o.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},"IValue"),">"),(0,o.mdx)("p",null,"Module forward function."),(0,o.mdx)("h4",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"...input")),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("a",{parentName:"td",href:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},"IValue"),"[]"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Module input.")))),(0,o.mdx)("h4",{id:"returns"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},"IValue"),">"),(0,o.mdx)("h4",{id:"defined-in"},"Defined in"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/bb3eb3c/react-native-pytorch-core/src/torchlive/torch.ts#L35"},"torchlive/torch.ts:35")),(0,o.mdx)("hr",null),(0,o.mdx)("h3",{id:"forwardsync"},"forwardSync"),(0,o.mdx)("p",null,"\u25b8 ",(0,o.mdx)("strong",{parentName:"p"},"forwardSync"),"(...",(0,o.mdx)("inlineCode",{parentName:"p"},"input"),"): ",(0,o.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},"IValue")),(0,o.mdx)("p",null,"Synchronous module forward function."),(0,o.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"...input")),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("a",{parentName:"td",href:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},"IValue"),"[]"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Module input.")))),(0,o.mdx)("h4",{id:"returns-1"},"Returns"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.ivalue"},"IValue")),(0,o.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/bb3eb3c/react-native-pytorch-core/src/torchlive/torch.ts#L41"},"torchlive/torch.ts:41")))}p.isMDXComponent=!0}}]);