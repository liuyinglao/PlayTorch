"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5597],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return s},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),m=function(e){return function(n){var t=p(n.components);return i.createElement(e,l({},n,{components:t}))}},p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(t),s=a,h=m["".concat(r,".").concat(s)]||m[s]||u[s]||l;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37783:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(67294),a="tableOfContentsInline_3fWc",l=t(25002);var r=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return i.createElement("div",{className:a},i.createElement(l.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},25002:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(83117),a=t(80102),l=t(67294),r=t(16681),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function d(e){var n=e.toc,t=e.className,i=e.linkClassName,a=e.isChild;return n.length?l.createElement("ul",{className:a?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:i}))}))):null}function c(e){var n=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,p=void 0===m?"table-of-contents__link":m,s=e.linkActiveClassName,u=void 0===s?void 0:s,h=e.minHeadingLevel,v=e.maxHeadingLevel,x=(0,a.Z)(e,o),N=(0,r.useThemeConfig)(),g=null!=h?h:N.tableOfContents.minHeadingLevel,f=null!=v?v:N.tableOfContents.maxHeadingLevel,y=(0,r.useTOCFilter)({toc:n,minHeadingLevel:g,maxHeadingLevel:f}),b=(0,l.useMemo)((function(){if(p&&u)return{linkClassName:p,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:f}}),[p,u,g,f]);return(0,r.useTOCHighlight)(b),l.createElement(d,(0,i.Z)({toc:y,className:c,linkClassName:p},x))}},24085:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var i=t(83117),a=t(80102),l=(t(67294),t(3905)),r=t(37783),o=["components"],d={id:"cli"},c="CLI",m={unversionedId:"api/cli",id:"api/cli",title:"CLI",description:"The PyTorch Live CLI (i.e., torchlive-cli) provides a set of commands to help you install build dependencies, initialize new PyTorch Live projects, build and deploy them to emulator or physical devices.",source:"@site/docs/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/live/docs/next/api/cli",editUrl:"https://github.com/pytorch/live/edit/main/website/docs/api/cli.md",tags:[],version:"current",frontMatter:{id:"cli"},sidebar:"api",previous:{title:"Transforms",permalink:"/live/docs/next/api/core/interfaces/torchlive_vision.transforms"},next:{title:"Model Specification",permalink:"/live/docs/next/api/model-spec"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Index",id:"index",children:[],level:2},{value:"PyTorch Live CLI commands",id:"torchlive-cli-commands",children:[{value:"Options",id:"options",children:[],level:4},{value:"<code>npx torchlive-cli setup-dev</code>",id:"torchlive-cli-setup-dev",children:[],level:3},{value:"<code>npx-torchlive-cli init [options] [name]</code>",id:"torchlive-cli-init",children:[{value:"Options",id:"torchlive-cli-init-options",children:[],level:4}],level:3},{value:"<code>npx torchlive-cli run-android [options]</code>",id:"torchlive-cli-run-android",children:[{value:"Options",id:"torchlive-cli-run-android-options",children:[],level:4}],level:3},{value:"<code>npx torchlive-cli run-ios</code>",id:"torchlive-cli-run-ios",children:[],level:3},{value:"<code>npx torchlive-cli emulator [options]</code>",id:"torchlive-cli-emulator",children:[],level:3},{value:"<code>npx torchlive-cli clean</code>",id:"torchlive-cli-clean",children:[],level:3},{value:"<code>npx torchlive-cli emulator</code>",id:"torchlive-cli-emulator",children:[],level:3},{value:"<code>npx torchlive-cli doctor</code>",id:"torchlive-cli-doctor",children:[],level:3},{value:"<code>npx torchlive-cli log</code>",id:"torchlive-cli-log",children:[],level:3},{value:"<code>npx torchlive-cli help [command]</code>",id:"torchlive-cli-help",children:[],level:3}],level:2}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"cli"},"CLI"),(0,l.mdx)("div",{className:"tutorial-page"},(0,l.mdx)("p",null,"The PyTorch Live CLI (i.e., ",(0,l.mdx)("inlineCode",{parentName:"p"},"torchlive-cli"),") provides a set of commands to help you install build dependencies, initialize new PyTorch Live projects, build and deploy them to emulator or physical devices."),(0,l.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Node.js"),": If you don't have it already, you can download Node.js LTS ",(0,l.mdx)("a",{parentName:"li",href:"https://nodejs.org/"},"from its website")," or install via ",(0,l.mdx)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")," (ie, ",(0,l.mdx)("inlineCode",{parentName:"li"},"brew install node"),").")),(0,l.mdx)("h2",{id:"index"},"Index"),(0,l.mdx)(r.Z,{toc:p[1].children,mdxType:"TOCInline"}),(0,l.mdx)("h2",{id:"torchlive-cli-commands"},"PyTorch Live CLI commands"),(0,l.mdx)("p",null,"Below is a list of PyTorch Live CLI commands and their usages:"),(0,l.mdx)("h4",{id:"options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"--version")),(0,l.mdx)("td",{parentName:"tr",align:null},"Prints the CLI version")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"--help")),(0,l.mdx)("td",{parentName:"tr",align:null},"Shows the CLI help")))),(0,l.mdx)("h3",{id:"torchlive-cli-setup-dev"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli setup-dev")),(0,l.mdx)("p",null,"The PyTorch Live CLI provides a setup routine to install all required build dependencies including tooling like Yarn, Watchman, and CocoaPods, SDKs like OpenJDK, Android SDK, Android SDK Manager, Android Virtual Device Manager, and an Android Emulator, and it installs a default emulator device ready to be used with PyTorch Live projects."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli setup-dev\n")),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"The command may require ",(0,l.mdx)("inlineCode",{parentName:"p"},"sudo")," access for installing the different dependencies and can take approximately 20 minutes to complete. This depends on your laptop configuration, internet speed, and what dependencies have been installed previously."))),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"You only need to run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"npx torchlive-cli setup-dev")," command once and it is not necessary to run the command every time before you start a new project. However, it is recommended to re-run this command once in a while to update development dependencies over time."))),(0,l.mdx)("p",null,"If everything goes well, the terminal will looks similar to the following output."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"\u279c  npx torchlive-cli setup-dev\n  _                 _     _ _\n | |_ ___  _ __ ___| |__ | (_)_   _____\n | __/ _ \\| '__/ __| '_ \\| | \\ \\ / / _ \\\n | || (_) | | | (__| | | | | |\\ V /  __/\n  \\__\\___/|_|  \\___|_| |_|_|_| \\_/ \\___|\n\ntorchlive version 0.0.2-alpha.19\n\u2714 Homebrew (3.3.3)\n\u2714 OpenJDK (1.8.0)\n\u2714 Watchman (null)\n\u2193 Node (16.13.0) [SKIPPED]\n\u2714 Yarn (1.22.15)\n\u2714 Android SDK\n\u2714 Android SDK Manager\n\u2714 Android Emulator\n\u2714 CocoaPods (1.11.2)\n")),(0,l.mdx)("h3",{id:"torchlive-cli-init"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx-torchlive-cli init [options] [name]")),(0,l.mdx)("p",null,"Initialize a new PyTorch Live project."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli init MyFirstProject\n")),(0,l.mdx)("h4",{id:"torchlive-cli-init-options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Default"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"--template")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"react-native-template-pytorch-live")),(0,l.mdx)("td",{parentName:"tr",align:null},"Specifies the template used to generate a new project")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"--skip-install")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Skips dependencies installation step")))),(0,l.mdx)("h3",{id:"torchlive-cli-run-android"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli run-android [options]")),(0,l.mdx)("p",null,"Runs the PyTorch Live project on an Android emulator. It will run the project on a physical device if it is connected."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli run-android\n")),(0,l.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"If you want to deploy the app on your own device, you have to put it into developer mode."),(0,l.mdx)("blockquote",{parentName:"div"},(0,l.mdx)("p",{parentName:"blockquote"},"On Android 4.1 and lower, the Developer options screen is available by default. On Android 4.2 and higher, you must enable this screen. To enable developer options, tap the Build Number option 7 times.")),(0,l.mdx)("p",{parentName:"div"},"More details are on the Android ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"configure on-device developer options"),"."))),(0,l.mdx)("h4",{id:"torchlive-cli-run-android-options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Default"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"--name"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"-n")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},'"pytorch_live"')),(0,l.mdx)("td",{parentName:"tr",align:null},"Run PyTorch Live project on a specific Android Virtual Device (AVD)")))),(0,l.mdx)("h3",{id:"torchlive-cli-run-ios"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli run-ios")),(0,l.mdx)("p",null,"Runs the PyTorch Live project on an iOS simulator."),(0,l.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"In order to run a PyTorch Live project on an iOS simulator or a physical iOS device, you need to install Xcode from the Apple App Store on your macOS device. PyTorch Live currently supports Xcode version 12.5 or later."))),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli run-ios\n")),(0,l.mdx)("h3",{id:"torchlive-cli-emulator"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli emulator [options]")),(0,l.mdx)("p",null,'Starts the "pytorch_live" Android Virtual Device emulator.'),(0,l.mdx)("h3",{id:"torchlive-cli-clean"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli clean")),(0,l.mdx)("p",null,"Cleans the build files and directories."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli clean\n")),(0,l.mdx)("h3",{id:"torchlive-cli-emulator"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli emulator")),(0,l.mdx)("p",null,"Starts the emulator without building, deploying, and running the PyTorch Live project."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli emulator\n")),(0,l.mdx)("h3",{id:"torchlive-cli-doctor"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli doctor")),(0,l.mdx)("p",null,"Runs health checks to verify if all necessary dependencies are installed."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli doctor\n")),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"npx torchlive-cli setup-dev")," command if any of the health checks fail."))),(0,l.mdx)("h3",{id:"torchlive-cli-log"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli log")),(0,l.mdx)("p",null,"Prints the PyTorch Live CLI logs to the terminal."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli log\n")),(0,l.mdx)("h3",{id:"torchlive-cli-help"},(0,l.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli help [command]")),(0,l.mdx)("p",null,"Shows additional help for a command."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli help init\n"))))}u.isMDXComponent=!0}}]);