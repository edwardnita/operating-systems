"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[70572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),u=i,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[f]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="File Mappings",p={unversionedId:"Lab/I/O/Redirections/content/file-mappings",id:"Lab/I/O/Redirections/content/file-mappings",title:"File Mappings",description:"Mapping a file to the VAS of a process is similar to how shared libraries are loaded into the same VAS.",source:"@site/docs/Lab/I/O/Redirections/content/file-mappings.md",sourceDirName:"Lab/I/O/Redirections/content",slug:"/Lab/I/O/Redirections/content/file-mappings",permalink:"/operating-systems/Lab/I/O/Redirections/content/file-mappings",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"The Return of <code>mmap()</code>",id:"the-return-of-mmap",level:2},{value:"Practice: Copy a File",id:"practice-copy-a-file",level:3},{value:"Practice: I Am Speed",id:"practice-i-am-speed",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-mappings"},"File Mappings"),(0,i.kt)("p",null,"Mapping a file to the VAS of a process is similar to how shared libraries are loaded into the same VAS.\nIt's a fancier way of saying that the contents of a file are copied from a given offset within that file to a given address.\nWhat's nice about this is that the OS handles all offsets, addresses and memory allocations on its own, with a single highly versatile syscall: ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()"),"."),(0,i.kt)("h2",{id:"the-return-of-mmap"},"The Return of ",(0,i.kt)("inlineCode",{parentName:"h2"},"mmap()")),(0,i.kt)("p",null,"Remember that the ",(0,i.kt)("inlineCode",{parentName:"p"},".text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".rodata")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".data")," sections of libraries are present in the VAS of any Linux process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ sleep 1000 &  # start a `sleep` process in the background\n[1] 17579\n\nstudent@os:~$ cat /proc/$(pidof sleep)/maps\n55b7b646f000-55b7b6471000 r--p 00000000 103:07 6423964                   /usr/bin/sleep\n55b7b6471000-55b7b6475000 r-xp 00002000 103:07 6423964                   /usr/bin/sleep\n55b7b6475000-55b7b6477000 r--p 00006000 103:07 6423964                   /usr/bin/sleep\n55b7b6478000-55b7b6479000 r--p 00008000 103:07 6423964                   /usr/bin/sleep\n55b7b6479000-55b7b647a000 rw-p 00009000 103:07 6423964                   /usr/bin/sleep\n55b7b677c000-55b7b679d000 rw-p 00000000 00:00 0                          [heap]\n7fe442f61000-7fe44379d000 r--p 00000000 103:07 6423902                   /usr/lib/locale/locale-archive\n7fe44379d000-7fe4437bf000 r--p 00000000 103:07 6432810                   /usr/lib/x86_64-linux-gnu/libc-2.31.so\n7fe4437bf000-7fe443937000 r-xp 00022000 103:07 6432810                   /usr/lib/x86_64-linux-gnu/libc-2.31.so\n7fe443937000-7fe443985000 r--p 0019a000 103:07 6432810                   /usr/lib/x86_64-linux-gnu/libc-2.31.so\n7fe443985000-7fe443989000 r--p 001e7000 103:07 6432810                   /usr/lib/x86_64-linux-gnu/libc-2.31.so\n7fe443989000-7fe44398b000 rw-p 001eb000 103:07 6432810                   /usr/lib/x86_64-linux-gnu/libc-2.31.so\n7fe44398b000-7fe443991000 rw-p 00000000 00:00 0\n7fe4439ad000-7fe4439ae000 r--p 00000000 103:07 6429709                   /usr/lib/x86_64-linux-gnu/ld-2.31.so\n7fe4439ae000-7fe4439d1000 r-xp 00001000 103:07 6429709                   /usr/lib/x86_64-linux-gnu/ld-2.31.so\n7fe4439d1000-7fe4439d9000 r--p 00024000 103:07 6429709                   /usr/lib/x86_64-linux-gnu/ld-2.31.so\n7fe4439da000-7fe4439db000 r--p 0002c000 103:07 6429709                   /usr/lib/x86_64-linux-gnu/ld-2.31.so\n7fe4439db000-7fe4439dc000 rw-p 0002d000 103:07 6429709                   /usr/lib/x86_64-linux-gnu/ld-2.31.so\n7fe4439dc000-7fe4439dd000 rw-p 00000000 00:00 0\n7ffd07aeb000-7ffd07b0c000 rw-p 00000000 00:00 0                          [stack]\n7ffd07b8b000-7ffd07b8e000 r--p 00000000 00:00 0                          [vvar]\n7ffd07b8e000-7ffd07b8f000 r-xp 00000000 00:00 0                          [vdso]\nffffffffff600000-ffffffffff601000 --xp 00000000 00:00 0                  [vsyscall]\n")),(0,i.kt)("p",null,"How does the content of those files get there?\nBelow you can see how libc is loaded, i.e. mapped into the VAS of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~$ strace ls\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3\n[...]\nmmap(NULL, 2037344, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7fb313c9c000\nmmap(0x7fb313cbe000, 1540096, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x22000) = 0x7fb313cbe000\nmmap(0x7fb313e36000, 319488, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x19a000) = 0x7fb313e36000\nmmap(0x7fb313e84000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1e7000) = 0x7fb313e84000\n')),(0,i.kt)("p",null,"For a quick reminder about ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()"),", its 5th argument is the file descriptor from where we want to copy the data to the RAM.\nThe 6th argument is the offset within the file from where to start copying."),(0,i.kt)("h3",{id:"practice-copy-a-file"},"Practice: Copy a File"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()")," is good for copying files, let's use it like this.\nNavigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"support/file-mappings/mmap_cp.c"),".\nIt copies the contents of a file to another by ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()"),"-ing each of them to its VAS and then simply copying the bytes from one mapping to another as if copying the contents of 2 arrays."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"TODO"),"s so that the program correctly copies the contents of the input file to the output file.\nUse ",(0,i.kt)("inlineCode",{parentName:"li"},"make test-file")," to generate a 1MB file with random data.\nYou can use this for debugging and ",(0,i.kt)("inlineCode",{parentName:"li"},"diff")," to test whether the input and output files differ (they shouldn't):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/file-mappings$ ./mmap_cp test-file.txt output.txt\n\nstudent@os:/.../support/file-mappings$ diff test-file.txt output.txt\n\nstudent@os:/.../support/file-mappings$\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Uncomment the calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"wait_for_input()")," and rerun the program.\nWhile the program is waiting, open another terminal and run ",(0,i.kt)("inlineCode",{parentName:"li"},"cat /proc/$(pidof mmap_cp)/maps")," and see the mapped files.")),(0,i.kt)("h3",{id:"practice-i-am-speed"},"Practice: I Am Speed"),(0,i.kt)("p",null,"Now we can copy files using ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()"),".\nThe code is rather short and convenient to write.\nIt's disadvantage is that we have to ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()")," the 2 files entirely of the VAS of the process.\nWhile this may be alright for small files, for larger ones we simply may not have enough RAM.\nWhat if we had to copy a 500GB file?"),(0,i.kt)("p",null,"Let's look at what the ",(0,i.kt)("inlineCode",{parentName:"p"},"cp")," tool uses for copying."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Redirections/quiz/syscalls-cp"},"Quiz 1")),(0,i.kt)("p",null,"OK, so we have a competition: our ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap_cp")," versus ",(0,i.kt)("inlineCode",{parentName:"p"},"cp"),".\nRun the script ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmark_cp.sh")," to measure which of the 2 implementations is faster."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Redirections/quiz/mmap-read-write-benchmark"},"Quiz 2")),(0,i.kt)("p",null,"Now take a look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmark_cp.sh")," script.\nYou might get a little confused about the following command: ",(0,i.kt)("inlineCode",{parentName:"p"},"echo 3 > /proc/sys/vm/drop_caches"),".\nHead over to ",(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Redirections/content/arena#to-drop-or-not-to-drop"},"this section in the Arena")," to find out what it's about."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"So by using ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap()"),", we pay the price for loading the file into memory ",(0,i.kt)("strong",{parentName:"p"},"once"),", but then all ",(0,i.kt)("inlineCode",{parentName:"p"},"read()"),"s, ",(0,i.kt)("inlineCode",{parentName:"p"},"write()"),"s and especially ",(0,i.kt)("inlineCode",{parentName:"p"},"seek()"),"s will be faster.\nThis is akin to treating the file as a regular byte array.\nSo file mappings are especially useful for randomly accessing file data.\nAccessing the i-th byte in a file becomes the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"mapping[i]"),", which is obviously more efficient than calling ",(0,i.kt)("inlineCode",{parentName:"p"},"lseek()"),".\nFile mappings are also useful when we have to overwrite existing data multiple times or when we read certain chunks multiple times."))}m.isMDXComponent=!0}}]);