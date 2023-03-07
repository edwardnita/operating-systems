"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2255],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return a?l.createElement(b,o(o({ref:t},p),{},{components:a})):l.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=a(87462),n=(a(67294),a(3905));const r={},o="Library calls vs system calls",s={unversionedId:"Lab/Software-Stack/Basic System Calls/content/libcall-syscall",id:"Lab/Software-Stack/Basic System Calls/content/libcall-syscall",title:"Library calls vs system calls",description:"The standard C library has primarily two uses:",source:"@site/docs/Lab/Software-Stack/Basic System Calls/content/libcall-syscall.md",sourceDirName:"Lab/Software-Stack/Basic System Calls/content",slug:"/Lab/Software-Stack/Basic System Calls/content/libcall-syscall",permalink:"/operating-systems/Lab/Software-Stack/Basic System Calls/content/libcall-syscall",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[{value:"Practice",id:"practice",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"library-calls-vs-system-calls"},"Library calls vs system calls"),(0,n.kt)("p",null,"The standard C library has primarily two uses:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"wrapping system calls into easier to use C-style library calls, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"open()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"write()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"read()")),(0,n.kt)("li",{parentName:"ol"},"adding common functionality required for our program, such as string management (",(0,n.kt)("inlineCode",{parentName:"li"},"strcpy"),"), memory management (",(0,n.kt)("inlineCode",{parentName:"li"},"malloc()"),") or formatted I/O (",(0,n.kt)("inlineCode",{parentName:"li"},"printf()"),")")),(0,n.kt)("p",null,"The first use means a 1-to-1 mapping between library calls and system calls: one library call means one system call.\nThe second group doesn't have a standard mapping.\nA library call could be mapped to no system calls, one system call, two or more system calls or it may depend (a system call may or may not happen)."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"support/libcall-syscall/")," folder stores the implementation of a simple program that makes different library calls.\nLet's build the program and then trace the library calls (with ",(0,n.kt)("inlineCode",{parentName:"p"},"ltrace"),") and the system calls (with ",(0,n.kt)("inlineCode",{parentName:"p"},"strace"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/libcall-syscall$ make\ncc -Wall   -c -o call.o call.c\ncc   call.o   -o call\ncc -Wall   -c -o call2.o call2.c\ncc   call2.o   -o call2\n\nstudent@os:~/.../lab/support/libcall-syscall$ ltrace ./call\nfopen("a.txt", "wt")                                                                                             = 0x556d57679260\nstrlen("Hello, world!\\n")                                                                                        = 14\nfwrite("Hello, world!\\n", 1, 14, 0x556d57679260)                                                                 = 14\nstrlen("Bye, world!\\n")                                                                                          = 12\nfwrite("Bye, world!\\n", 1, 12, 0x556d57679260)                                                                   = 12\nfflush(0x556d57679260)                                                                                           = 0\n+++ exited (status 0) +++\n\nstudent@os:~/.../lab/support/libcall-syscall$ strace ./call\n[...]\nopenat(AT_FDCWD, "a.txt", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3\nfstat(3, {st_mode=S_IFREG|0664, st_size=0, ...}) = 0\nwrite(3, "Hello, world!\\nBye, world!\\n", 26) = 26\nexit_group(0)                           = ?\n+++ exited with 0 +++\n')),(0,n.kt)("p",null,"We have the following mappings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"fopen()")," library call invokes the ",(0,n.kt)("inlineCode",{parentName:"li"},"openat")," and the ",(0,n.kt)("inlineCode",{parentName:"li"},"fstat")," system calls."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"fwrite()")," library call invokes no system calls."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"strlen()")," library call invokes no system calls."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"fflush()")," library call invokes the ",(0,n.kt)("inlineCode",{parentName:"li"},"write")," system call.")),(0,n.kt)("p",null,"This all seems to make sense.\nThe main reason for ",(0,n.kt)("inlineCode",{parentName:"p"},"fwrite()")," not making any system calls is the use of a standard C library buffer.\nCalls the ",(0,n.kt)("inlineCode",{parentName:"p"},"fwrite()")," end up writing to that buffer to reduce the number of system calls.\nActual system calls are made either when the standard C library buffer is full or when an ",(0,n.kt)("inlineCode",{parentName:"p"},"fflush()")," library call is made."),(0,n.kt)("p",null,"Note that on some systems, ",(0,n.kt)("inlineCode",{parentName:"p"},"ltrace")," ",(0,n.kt)("strong",{parentName:"p"},"does not work")," as expected, due to ",(0,n.kt)("strong",{parentName:"p"},"now binding"),".\nTo avoid this behaviour, you can force the ",(0,n.kt)("strong",{parentName:"p"},"lazy binding")," (based on which ",(0,n.kt)("inlineCode",{parentName:"p"},"ltrace")," is constructed to work).\nAn example can be found in ",(0,n.kt)("inlineCode",{parentName:"p"},"support/libcall-syscall/Makefile"),", however for system binaries, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ls")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"pwd"),", the only alternative is to add the ",(0,n.kt)("inlineCode",{parentName:"p"},'-x "*"')," argument to force the command to trace all symbols in the symbol table:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~$ ltrace -x "*" ls\n')),(0,n.kt)("p",null,"You can always choose what library functions ",(0,n.kt)("inlineCode",{parentName:"p"},"ltrace")," is investigating, by replacing the wildcard with their name:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~$ ltrace -x "malloc" -x "free" ls\nmalloc@libc.so.6(5)                                                    = 0x55c42b2b8910\nfree@libc.so.6(0x55c42b2b8910)                                         = <void>\nmalloc@libc.so.6(120)                                                  = 0x55c42b2b8480\nmalloc@libc.so.6(12)                                                   = 0x55c42b2b8910\nmalloc@libc.so.6(776)                                                  = 0x55c42b2b8930\nmalloc@libc.so.6(112)                                                  = 0x55c42b2b8c40\nmalloc@libc.so.6(1336)                                                 = 0x55c42b2b8cc0\nmalloc@libc.so.6(216)                                                  = 0x55c42b2b9200\nmalloc@libc.so.6(432)                                                  = 0x55c42b2b92e0\nmalloc@libc.so.6(104)                                                  = 0x55c42b2b94a0\nmalloc@libc.so.6(88)                                                   = 0x55c42b2b9510\nmalloc@libc.so.6(120)                                                  = 0x55c42b2b9570\n[...]\n')),(0,n.kt)("p",null,"If you would like to know more about ",(0,n.kt)("strong",{parentName:"p"},"lazy binding"),", ",(0,n.kt)("strong",{parentName:"p"},"now binding")," or ",(0,n.kt)("strong",{parentName:"p"},"PLT")," entries, check out ",(0,n.kt)("a",{parentName:"p",href:"https://maskray.me/blog/2021-09-19-all-about-procedure-linkage-table"},"this blog post"),"."),(0,n.kt)("h2",{id:"practice"},"Practice"),(0,n.kt)("p",null,"Enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"support/libcall-syscall/")," folder and go through the practice items below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check library calls and system calls for the ",(0,n.kt)("inlineCode",{parentName:"p"},"call2.c")," file.\nUse ",(0,n.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"strace"),"."),(0,n.kt)("p",{parentName:"li"},"Find explanations for the calls being made and the library call to system call mapping."))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software-Stack/Basic%20System%20Calls/quiz/libcall-syscall"},"Quiz")))}d.isMDXComponent=!0}}]);