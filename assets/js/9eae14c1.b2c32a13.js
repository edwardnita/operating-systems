"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[72011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s="Modern Software Stacks",i={unversionedId:"Lab/Software-Stack/App Investigation/content/modern-sw-stack",id:"Lab/Software-Stack/App Investigation/content/modern-sw-stack",title:"Modern Software Stacks",description:"Most modern computing systems use a software stack such as the one in the figure below:",source:"@site/docs/Lab/Software-Stack/App Investigation/content/modern-sw-stack.md",sourceDirName:"Lab/Software-Stack/App Investigation/content",slug:"/Lab/Software-Stack/App Investigation/content/modern-sw-stack",permalink:"/operating-systems/Lab/Software-Stack/App Investigation/content/modern-sw-stack",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modern-software-stacks"},"Modern Software Stacks"),(0,r.kt)("p",null,"Most modern computing systems use a software stack such as the one in the figure below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modern Software Stack",src:n(82426).Z,width:"542",height:"512"})),(0,r.kt)("p",null,"This modern software stack allows fast development and provides a rich set of applications to the user."),(0,r.kt)("p",null,"The basic software component is the ",(0,r.kt)("strong",{parentName:"p"},"operating system")," (OS) (technically the operating system ",(0,r.kt)("strong",{parentName:"p"},"kernel"),").\nThe OS provides the fundamental primitives to interact with hardware (read and write data) and to manage the running of applications (such as memory allocation, thread creation, scheduling).\nThese primitives form the ",(0,r.kt)("strong",{parentName:"p"},"system call API")," or ",(0,r.kt)("strong",{parentName:"p"},"system API"),".\nAn item in the system call API, i.e. the equivalent of a function call that triggers the execution of a functionality in the operating system, is a ",(0,r.kt)("strong",{parentName:"p"},"system call"),"."),(0,r.kt)("p",null,"The system call API is well defined, stable and complete: it exposes the entire functionality of the operating system and hardware.\nHowever, it is also minimalistic with respect to features and it provides a low-level (close to hardware) specification, making it cumbersome to use and ",(0,r.kt)("strong",{parentName:"p"},"not portable"),"."),(0,r.kt)("p",null,"Due to the downsides of the system call API, a basic library, the ",(0,r.kt)("strong",{parentName:"p"},"standard C library")," (also called ",(0,r.kt)("strong",{parentName:"p"},"libc"),"), is built on top of it.\nBecause the system call API uses an OS-specific calling convention, the standard C library typically wraps each system call into an equivalent function call, following a portable calling convention.\nMore than these wrappers, the standard C library provides its own API that is typically portable.\nPart of the API exposed by the standard C library is the ",(0,r.kt)("strong",{parentName:"p"},"standard C API"),", also called ",(0,r.kt)("strong",{parentName:"p"},"ANSI C")," or ",(0,r.kt)("strong",{parentName:"p"},"ISO C"),";\nthis API is typically portable across all platforms (operating systems and hardware).\nThis API, going beyond system call wrappers, has several advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"portability: irrespective of the underlying operating system (and system call API), the API is the same"),(0,r.kt)("li",{parentName:"ul"},"extensive features: string management, I/O formatting"),(0,r.kt)("li",{parentName:"ul"},"possibility of increased efficiency with techniques such as buffering, as we show later")))}u.isMDXComponent=!0},82426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modern-sw-stack-4a2427d07a59c3a6599305b8eedc43dd.svg"}}]);