"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[42457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={},a="Parent of `sleep` Processes",i={unversionedId:"Lab/Compute/Overview/quiz/parent-of-sleep-processes",id:"Lab/Compute/Overview/quiz/parent-of-sleep-processes",title:"Parent of `sleep` Processes",description:"Question Text",source:"@site/docs/Lab/Compute/Overview/quiz/parent-of-sleep-processes.md",sourceDirName:"Lab/Compute/Overview/quiz",slug:"/Lab/Compute/Overview/quiz/parent-of-sleep-processes",permalink:"/operating-systems/Lab/Compute/Overview/quiz/parent-of-sleep-processes",draft:!1,tags:[],version:"current",frontMatter:{}},p={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parent-of-sleep-processes"},"Parent of ",(0,o.kt)("inlineCode",{parentName:"h1"},"sleep")," Processes"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Who is the parent of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," processes?\nWhy?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py")," because it is the one who created them")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bash")," because it is ",(0,o.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," because this is the default process that adopts orphans")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," because it is ",(0,o.kt)("inlineCode",{parentName:"li"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"When a process dies without waiting for the termination of all its children, those processes are now orphans.\nThen the ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," process adopts those orphan processes by default.\nOn older Linux systems, it was the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," process who adopted orphans."))}u.isMDXComponent=!0}}]);