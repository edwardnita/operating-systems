"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[93020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(r),u=a,d=h["".concat(c,".").concat(u)]||h[u]||m[u]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},s="Benchmarks",i={unversionedId:"Lab/Compute/Processes/content/benchmarks",id:"Lab/Compute/Processes/content/benchmarks",title:"Benchmarks",description:"The main criterion we use to rank CPUs is their computation power, i.e. their ability to crunch numbers and do math.",source:"@site/docs/Lab/Compute/Processes/content/benchmarks.md",sourceDirName:"Lab/Compute/Processes/content",slug:"/Lab/Compute/Processes/content/benchmarks",permalink:"/operating-systems/Lab/Compute/Processes/content/benchmarks",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"The Role of the Operating System",id:"the-role-of-the-operating-system",level:2}],l={toc:p},h="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks"},"Benchmarks"),(0,a.kt)("p",null,"The main criterion we use to rank CPUs is their ",(0,a.kt)("em",{parentName:"p"},"computation power"),", i.e. their ability to crunch numbers and do math.\nNumerous benchmarks exist out there and they are publicly displayed on sites such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.cpubenchmark.net/"},"CPUBenchmark"),"."),(0,a.kt)("p",null,"For example, a benchmark can measure the performance of the computer's CPU in a variety of scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"its ability to perform integer operations"),(0,a.kt)("li",{parentName:"ul"},"its speed in floating point arithmetic"),(0,a.kt)("li",{parentName:"ul"},"data encryption and compression"),(0,a.kt)("li",{parentName:"ul"},"sorting algorithms and others")),(0,a.kt)("p",null,"You can take a look at what exactly is measured using ",(0,a.kt)("a",{parentName:"p",href:"https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+Threadripper+PRO+5995WX"},"this link"),".\nIt displays the scores obtained by a high-end CPU.\nApart from the tests above, other benchmarks might focus on different performance metrics such as branch prediction or prefetching."),(0,a.kt)("p",null,"Other approaches are less artificial, measuring performance on real-world applications such as compile times and performance in the latest (and most resource-demanding) video games.\nThe latter metric revolves around how many average FPS (frames per second) a given CPU is able to crank out in a specific video game.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gamersnexus.net/guides/3577-cpu-test-methodology-unveil-for-2020-compile-gaming-more"},"This article")," goes into more detail regarding the methodology of running CPU benchmarks on real-world applications."),(0,a.kt)("p",null,"Most benchmarks, unfortunately, are not open source, especially the more popular ones, such as ",(0,a.kt)("a",{parentName:"p",href:"https://browser.geekbench.com/processor-benchmarks"},"Geekbench 5"),".\nDespite this shortcoming, benchmarks are widely used to compare the performance of various computer ",(0,a.kt)("strong",{parentName:"p"},"hardware"),", CPUs included."),(0,a.kt)("h2",{id:"the-role-of-the-operating-system"},"The Role of the Operating System"),(0,a.kt)("p",null,'As you\'ve seen so far, the CPU provides the "muscle" required for fast computation, i.e. the highly optimised hardware and multiple ALUs, FPUs\nand cores necessary to perform those computations.\nHowever, it is the ',(0,a.kt)("strong",{parentName:"p"},"operating system"),' that provides the "brains" for this computation.\nSpecifically, modern CPUs have the capacity to run multiple tasks in parallel.\nBut they do not provide a means to decide which task to run at each moment.\nThe OS comes as an ',(0,a.kt)("em",{parentName:"p"},"orchestrator")," to ",(0,a.kt)("strong",{parentName:"p"},"schedule")," the way these tasks (that we will later call threads) are allowed to run and use the CPU's resources.\nThis way, the OS tells the CPU what code to run on each CPU core so that it reaches a good balance between high throughput (running many instructions) and fair access to CPU cores."),(0,a.kt)("p",null,"It is cumbersome for a user-level application to interact directly with the CPU.\nThe developer would have to write hardware-specific code which is not scalable and is difficult to maintain.\nIn addition, doing so would leave it up to the developer to isolate their application from the others that are present on the system.\nThis leaves applications vulnerable to countless bugs and exploits."),(0,a.kt)("p",null,"To guard apps from these pitfalls, the OS comes and mediates interactions between regular programs and the CPU by providing a set of ",(0,a.kt)("strong",{parentName:"p"},"abstractions"),".\nThese abstractions offer a safe, uniform and also isolated way to leverage the CPU's resources, i.e. its cores.\nThere are 2 main abstractions: ",(0,a.kt)("strong",{parentName:"p"},"processes")," and ",(0,a.kt)("strong",{parentName:"p"},"threads"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interaction between applications, OS and CPU",src:r(70377).Z,width:"772",height:"772"})),(0,a.kt)("p",null,"As we can see from the image above, an application can spawn one or more processes.\nEach of these is handled and maintained by the OS.\nSimilarly, each process can spawn however many threads, which are also managed by the OS.\nThe OS decides when and on what CPU core to make each thread run.\nThis is in line with the general interaction between an application and the hardware: it is always mediated by the OS."))}m.isMDXComponent=!0},70377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/app-os-cpu-interaction-ca7fbdbb7da380e0992c95467ef267ce.svg"}}]);