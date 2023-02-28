"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[40741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Client-Server Number of Copies",l={unversionedId:"Lab/I/O/Local I/O in Action/quiz/server-copies",id:"Lab/I/O/Local I/O in Action/quiz/server-copies",title:"Client-Server Number of Copies",description:"Question Text",source:"@site/docs/Lab/I/O/Local I/O in Action/quiz/server-copies.md",sourceDirName:"Lab/I/O/Local I/O in Action/quiz",slug:"/Lab/I/O/Local I/O in Action/quiz/server-copies",permalink:"/operating-systems/Lab/I/O/Local I/O in Action/quiz/server-copies",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-server-number-of-copies"},"Client-Server Number of Copies"),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"The server in the image below uses regular TCP sockets to handle the connection and ",(0,i.kt)("inlineCode",{parentName:"p"},"send()")," to send the data.\nHow many times are the contents of the file copied by the server while being sent to the client?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Client-Server Steps",src:n(57500).Z,width:"502",height:"752"})),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"3")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"Rembember double buffering!\nWhen the app calls ",(0,i.kt)("inlineCode",{parentName:"p"},"read()"),", the server's kernel will first save the file to an internal buffer destined for reading.\nThen the app will copy the file to its own buffer.\nFollowing this step, the app will call ",(0,i.kt)("inlineCode",{parentName:"p"},"send()"),", which will first copy the file to a buffer in the kernel.\nFrom this buffer, the kernel itself will copy the file to another buffer on the NIC (Network Interface Card).\nIn total, there the file is copied ",(0,i.kt)("strong",{parentName:"p"},"4 times"),", as outlined in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Server Copies - Read-Send",src:n(9154).Z,width:"572",height:"652"})))}f.isMDXComponent=!0},57500:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-server-file-c21c08a102e6557188be7f080092a12c.svg"},9154:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-copies-normal-7e82d53d42a478d0313cb85917335f94.svg"}}]);