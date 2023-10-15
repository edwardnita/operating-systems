"use strict";(self.webpackChunkos=self.webpackChunkos||[]).push([[522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},l="libs",o={unversionedId:"Software Stack/Libraries/questions/libs",id:"Software Stack/Libraries/questions/libs",title:"libs",description:"Static Executables",source:"@site/docs/Software Stack/Libraries/questions/libs.md",sourceDirName:"Software Stack/Libraries/questions",slug:"/Software Stack/Libraries/questions/libs",permalink:"/operating-systems/317/Software Stack/Libraries/questions/libs",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Static Executables",id:"static-executables",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Dynamic Libraries",id:"dynamic-libraries",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"libs"},"libs"),(0,i.kt)("h2",{id:"static-executables"},"Static Executables"),(0,i.kt)("h3",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Which of the following tools has no influence over statically-linked executables? (choose 2 answers)"),(0,i.kt)("h3",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ltrace"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"strace"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nm")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ldd"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rm"))),(0,i.kt)("h3",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ldd")," are used to capture connections to dynamic libraries.\nThey have no effect on statically-linked executables."),(0,i.kt)("h2",{id:"dynamic-libraries"},"Dynamic Libraries"),(0,i.kt)("h3",{id:"question-text-1"},"Question Text"),(0,i.kt)("p",null,"Which of the following is a dynamic library?"),(0,i.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libc.a"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libc.so"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"libc.exe"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"libc.c")))),(0,i.kt)("h3",{id:"feedback-1"},"Feedback"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".so")," (",(0,i.kt)("em",{parentName:"p"},"shared object"),") extension is used for dynamic libraries in Linux."))}d.isMDXComponent=!0}}]);