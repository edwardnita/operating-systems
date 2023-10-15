"use strict";(self.webpackChunkos=self.webpackChunkos||[]).push([[3068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Setting up the Lab Environment",p={unversionedId:"Lab/lab-setup",id:"Lab/lab-setup",title:"Setting up the Lab Environment",description:"If you have already cloned the repository, make sure it is updated:",source:"@site/docs/Lab/lab-setup.md",sourceDirName:"Lab",slug:"/Lab/lab-setup",permalink:"/operating-systems/317/Lab/lab-setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Lab",permalink:"/operating-systems/317/Lab/"},next:{title:"Data",permalink:"/operating-systems/317/Lab/Data/"}},i={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-the-lab-environment"},"Setting up the Lab Environment"),(0,a.kt)("p",null,"If you have already cloned the repository, make sure it is updated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ cd operating-systems\n\nstudent@os:~/operating-systems$ git pull --rebase\n")),(0,a.kt)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, stash your changes, retry, and pop the stash:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/operating-systems$ git stash\n\nstudent@os:~/operating-systems$ git pull --rebase\n\nstudent@os:~/operating-systems$ git stash pop\n")),(0,a.kt)("p",null,"If you haven't already cloned the repository, do so and then enter the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ git clone https://github.com/open-education-hub/operating-systems\n\nstudent@os:~$ cd operating-systems\n")),(0,a.kt)("p",null,"Navigate to a chapter's lab directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/operating-systems$ cd content/chapters/<chapter-name>/lab/\n")),(0,a.kt)("p",null,"The possible options are: ",(0,a.kt)("inlineCode",{parentName:"p"},"software-stack"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"compute"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"io")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"app-interact"),"."),(0,a.kt)("p",null,"If you're using the OS-runner Docker container, you can use the following shortcuts:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-ss"),"       - changes directory to Software Stack lab"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-data"),"     - changes directory to Data lab"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-compute"),"  - changes directory to Compute lab"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-io"),"       - changes directory to IO lab"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-appInt"),"   - changes directory to App Interaction lab"))}d.isMDXComponent=!0}}]);