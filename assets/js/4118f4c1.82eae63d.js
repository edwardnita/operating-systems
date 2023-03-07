"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[25855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},s="Scheduling",o={unversionedId:"Lab/Compute/Scheduling/content/scheduling",id:"Lab/Compute/Scheduling/content/scheduling",title:"Scheduling",description:"Up to now we know that the OS decides which thread (not process) runs on each CPU core at each time.",source:"@site/docs/Lab/Compute/Scheduling/content/scheduling.md",sourceDirName:"Lab/Compute/Scheduling/content",slug:"/Lab/Compute/Scheduling/content/scheduling",permalink:"/operating-systems/Lab/Compute/Scheduling/content/scheduling",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Synchronization",permalink:"/operating-systems/Lab/Compute/Synchronization/content/synchronization"},next:{title:"Arena",permalink:"/operating-systems/Lab/Compute/Arena/content/arena"}},l={},u=[{value:"User-Level vs Kernel-Level Threads",id:"user-level-vs-kernel-level-threads",level:2},{value:"Practice: User-Level Threads Scheduler",id:"practice-user-level-threads-scheduler",level:2},{value:"Thread Control Block",id:"thread-control-block",level:2},{value:"Scheduling - How is it done?",id:"scheduling---how-is-it-done",level:2},{value:"Cooperative Scheduling",id:"cooperative-scheduling",level:3},{value:"Preemptive Scheduling",id:"preemptive-scheduling",level:3},{value:"Practice: Another Time Slice",id:"practice-another-time-slice",level:3}],h={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduling"},"Scheduling"),(0,r.kt)("p",null,"Up to now we know that the OS decides which ",(0,r.kt)("strong",{parentName:"p"},"thread")," (not process) runs on each CPU core at each time.\nNow we'll learn about the component that performs this task specifically: ",(0,r.kt)("strong",{parentName:"p"},"the scheduler"),"."),(0,r.kt)("p",null,"There are thousands of threads running at any time in a modern OS.\nThe job of the scheduler is to run and pause threads as well as allocate them to the CPU cores, with the following goals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fairness"),": we do want all threads to get the same chance to run, i.e. run for about the same amount of time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"throughput"),": we want to run as many threads to completion so as to complete as many tasks as we can")),(0,r.kt)("p",null,"To do this, the scheduler must decide, at given times, to suspend a thread, save its current state and let another one run in its place.\nThis event is called a ",(0,r.kt)("strong",{parentName:"p"},"context switch"),".\nA context switch means changing the state of one thread (the replaced thread) from RUNNING to WAITING and the state of the replacement thread from READY / WAITING to RUNNING."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quiz?")),(0,r.kt)("h2",{id:"user-level-vs-kernel-level-threads"},"User-Level vs Kernel-Level Threads"),(0,r.kt)("p",null,"There are two types of threads.\nThe threads you've used so far are ",(0,r.kt)("strong",{parentName:"p"},"kernel-level threads (KLT)"),".\nThey are created and scheduled in the kernel of the OS.\nOne of the most important of their features is that they offer true parallelism.\nWith KLTs, we can truly run a program on all the cores of our CPU at once.\nBut we must pay a price for this: scheduling them is very complex and context switches are costly (in terms of time), especially when switching threads belonging to different processes."),(0,r.kt)("p",null,"By contrast, ",(0,r.kt)("strong",{parentName:"p"},"user-level threads (ULT)")," are managed by the user space.\nMore of the ULTs created by a program are generally mapped to the same kernel thread.\nIf a process only creates ULTs, then they will all be mapped to the single, main kernel thread of the process.\nSo if we cannot run code in parallel with ULTs, then why use them?\nWell, programs that create many context switches may suffer from the larger overhead if they use kernel-level threads.\nIn such cases, user-level threads may be useful as context switches bring less overhead between user-level threads."),(0,r.kt)("h2",{id:"practice-user-level-threads-scheduler"},"Practice: User-Level Threads Scheduler"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/libult"),".\nIt contains a minimalist ",(0,r.kt)("strong",{parentName:"p"},"user-level threads")," scheduler.\nCompiling it produces a shared library called ",(0,r.kt)("inlineCode",{parentName:"p"},"libult.so"),".\nYou can also consult its ",(0,r.kt)("a",{parentName:"p",href:"https://www.schaertl.me/posts/a-bare-bones-user-level-thread-library/"},"documentation"),".\nIt explains the API as well as its implementation.\nThe API exposed by the scheduling library is very simple.\nIt is only made up of 3 functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threads_create()")," creates a new ULT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threads_exit()")," moves the current ULT to the COMPLETED state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threads_join()")," waits for a given thread to end and saves its return value in the ",(0,r.kt)("inlineCode",{parentName:"li"},"result")," argument")),(0,r.kt)("p",null,"Look inside ",(0,r.kt)("inlineCode",{parentName:"p"},"support/libult/threads.c"),".\nHere you will find the 3 functions mentioned above."),(0,r.kt)("p",null,"The scheduler only uses 3 states: RUNNING, READY, COMPLETED."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/number-of-running-ults"},"Quiz")),(0,r.kt)("p",null,"The threads in the READY and COMPLETED states are kept in 2 separate queues.\nWhen the scheduler wants to run a new thread, it retrieves it from the READY queue.\nWhen a thread ends its execution, it is added to the COMPLETED queue, together with its return value."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/why-use-completed-queue"},"Quiz")),(0,r.kt)("h2",{id:"thread-control-block"},"Thread Control Block"),(0,r.kt)("p",null,"Let's dissect the ",(0,r.kt)("inlineCode",{parentName:"p"},"threads_create()")," function a bit.\nIt first initialises its queues and the timer for preemption.\nWe'll discuss preemption ",(0,r.kt)("a",{parentName:"p",href:"#scheduling---how-is-it-done"},"in the next section"),".\nAfter performing initialisations, the function creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"TCB")," object.\nTCB stands for ",(0,r.kt)("strong",{parentName:"p"},"Thread Control Block"),"."),(0,r.kt)("p",null,"During the ",(0,r.kt)("a",{parentName:"p",href:"../../lecture/"},"lecture"),", you saw that the kernel stores one instance of a ",(0,r.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v5.19.11/source/include/linux/sched.h#L726"},(0,r.kt)("inlineCode",{parentName:"a"},"task_struct"))," for each thread.\nRemember that its most important fields are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"struct task_struct {\n    unsigned int                    __state;\n\n    void                           *stack;\n\n    unsigned int                    flags;\n\n    int                             on_cpu;\n    int                             prio;\n\n    /* Scheduler information */\n    struct sched_entity             se;\n    const struct sched_class        *sched_class;\n\n    /* The VAS: memory mappings */\n    struct mm_struct                *mm;\n\n    int                             exit_state;\n    int                             exit_code;\n\n    pid_t                           pid;\n\n    struct task_struct __rcu        *parent;\n\n    /* Child processes */\n    struct list_head                children;\n\n    /* Open file information */\n    struct files_struct             *files;\n};\n")),(0,r.kt)("p",null,"As you can see, this ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," stores ",(0,r.kt)("em",{parentName:"p"},"metadata")," regarding a given thread.\nThe same is true about the ",(0,r.kt)("inlineCode",{parentName:"p"},"TCB")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"libult.so"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct {\n    int id;\n    ucontext_t context;\n    bool has_dynamic_stack;\n    void *(*start_routine) (void *);\n    void *argument;\n    void *return_value;\n} TCB;\n")),(0,r.kt)("p",null,"It stores the thread ID (tid - ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"), similar to the PID of a process.\nIt stores a pointer to the function passed as argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"threads_create()")," (",(0,r.kt)("inlineCode",{parentName:"p"},"start_routine"),"), as well as the argument (",(0,r.kt)("inlineCode",{parentName:"p"},"argument"),") and the returned value (",(0,r.kt)("inlineCode",{parentName:"p"},"return_value"),") of said function."),(0,r.kt)("p",null,"In addition, the ",(0,r.kt)("inlineCode",{parentName:"p"},"TCB")," stores a ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),".\nFrom the ",(0,r.kt)("a",{parentName:"p",href:"https://pubs.opengroup.org/onlinepubs/7908799/xsh/ucontext.h.html"},"man page of the ",(0,r.kt)("inlineCode",{parentName:"a"},"ucontext.h")," header"),", we can see this type is a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," that stores a pointer to the stack of the current thread (",(0,r.kt)("inlineCode",{parentName:"p"},"uc_stack"),").\nThis is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"stack")," pointer in the ",(0,r.kt)("inlineCode",{parentName:"p"},"task_struct")," above.\nIn short, we can say a context defines an execution unit, such as a thread.\n",(0,r.kt)("strong",{parentName:"p"},"This is why changing the running thread is called a context switch.")),(0,r.kt)("p",null,"Let's compare this context with another thread implementation, from ",(0,r.kt)("a",{parentName:"p",href:"https://unikraft.org/"},"Unikraft"),".\nWe'll look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unikraft/unikraft/blob/9bf6e63314a401204c02597834fb02f63a29aaf4/lib/uksched/include/uk/thread.h#L55-L76"},(0,r.kt)("inlineCode",{parentName:"a"},"uk_thread"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),", which is the TCB used in Unikraft:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"struct uk_thread {\n    const char *name;\n    void *stack;\n    void *tls;\n    void *ctx;\n    UK_TAILQ_ENTRY(struct uk_thread) thread_list;\n    uint32_t flags;\n    __snsec wakeup_time;\n    bool detached;\n    struct uk_waitq waiting_threads;\n    struct uk_sched *sched;\n    void (*entry)(void *);\n    void *arg;\n    void *prv;\n};\n")),(0,r.kt)("p",null,"There are some visible similarities between the two TCBs."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/tcb-libult-unikraft"},"Quiz")),(0,r.kt)("p",null,"Therefore, the workflow for creating and running a thread goes like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"main thread\n    |\n    `--\x3e threads_create()\n            |\n        |--\x3e tcb_new()\n            `--\x3e makecontext()\n                |\n            `--\x3e handle_thread_start() - called using the context\n                    |\n                |--\x3e start_routine() - the thread runs\n                            `--\x3e threads_exit()\n")),(0,r.kt)("p",null,"Compile and run the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/libult/test_ult.c"),".\nIf you encounter the following error when running ",(0,r.kt)("inlineCode",{parentName:"p"},"test_ult"),", remember what you learned about the loader and using custom shared libraries in the ",(0,r.kt)("a",{parentName:"p",href:"../../software-stack/lab"},"Software Stack lab"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./test_ult: error while loading shared libraries: libult.so: cannot open shared object file: No such file or directory\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hint: Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH")," variable.")),(0,r.kt)("p",null,"Notice that the threads run their code and alternatively, because their prints appear interleaved.\n",(0,r.kt)("a",{parentName:"p",href:"#scheduling---how-is-it-done"},"In the next section"),", we'll see how this is done."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/ult-thread-ids"},"Quiz")),(0,r.kt)("h2",{id:"scheduling---how-is-it-done"},"Scheduling - How is it done?"),(0,r.kt)("p",null,"There are two types of schedulers: ",(0,r.kt)("strong",{parentName:"p"},"preemptive")," and ",(0,r.kt)("strong",{parentName:"p"},"cooperative"),".\nWhen discussing this distinction, we need to first define the notion of ",(0,r.kt)("strong",{parentName:"p"},"yielding"),".\nYielding the CPU means that a thread suspends its own execution and enters the WAITING or READY state, either as a result of a blocking call (I/O operations or calling the scheduler's ",(0,r.kt)("inlineCode",{parentName:"p"},"yield()")," function directly).\nSo, yielding the CPU triggers a context switch whereby the current thread stops running and another one resumes or starts running in its place."),(0,r.kt)("h3",{id:"cooperative-scheduling"},"Cooperative Scheduling"),(0,r.kt)("p",null,"Cooperative scheduling relies on the fact that threads themselves would yield the CPU at some point.\nIf threads don't abide by this convention, they end up monopolising the CPU (since there is no one to suspend them) and end up starving the others.\nYou can get a feel of this behaviour by running the cooperative ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unikraft/unikraft/blob/staging/lib/ukschedcoop/schedcoop.c"},"scheduler from Unikraft")," in the ",(0,r.kt)("a",{parentName:"p",href:"../../lecture/demo/cooperative-scheduling"},"lecture demos"),"."),(0,r.kt)("p",null,'This type of schedulers have the advantage of being lightweight, thus resulting in less overhead caused by context switches.\nHowever, as we\'ve already stated, they rely on the "good will" of threads to yield the CPU at some point.'),(0,r.kt)("h3",{id:"preemptive-scheduling"},"Preemptive Scheduling"),(0,r.kt)("p",null,"Preemptive scheduling solves the issue stated above by leaving the task of suspending the currently RUNNING thread and replacing it with another one from the READY queue up to the scheduler.\nThis increases its complexity and the duration of context switches, but threads now are not required to worry about yielding themselves and can focus on running their code and performing the task for which they are created."),(0,r.kt)("p",null,"Preemptive schedulers allow threads to run only for a maximum amount of time, called ",(0,r.kt)("strong",{parentName:"p"},"time slice")," (usually a few milliseconds).\nThey use timers which fire when a new time slice passes.\nThe firing of one such timer causes a context switch whereby the currently RUNNING thread is ",(0,r.kt)("em",{parentName:"p"},"preempted")," (i.e. suspended) and replaced with another one."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/type-of-scheduler-in-libult"},"Quiz")),(0,r.kt)("p",null,"Look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"init_profiling_timer()")," function.\nIt creates a timer that generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGPROF")," signal and then defines a handler (the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_sigprof()")," function) that is executed whenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGPROF")," signal is received."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/time-slice-value"},"Quiz")),(0,r.kt)("p",null,"It is this handler that performs the context switch per se.\nLook at its code.\nIt first saves the context of the currernt thread:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"ucontext_t *stored = &running->context;\nucontext_t *updated = (ucontext_t *) context;\n\nstored->uc_flags = updated->uc_flags;\nstored->uc_link = updated->uc_link;\nstored->uc_mcontext = updated->uc_mcontext;\nstored->uc_sigmask = updated->uc_sigmask;\n")),(0,r.kt)("p",null,"Then it places current thred in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ready")," queue and replaces it with the first thread in the same queue.\nThis algorithm (that schedules the first thread in the READY queue) is called ",(0,r.kt)("em",{parentName:"p"},"Round-Robin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"if (queue_enqueue(ready, running) != 0) {\n    abort();\n}\n\nif ((running = queue_dequeue(ready)) == NULL) {\n    abort();\n}\n")),(0,r.kt)("p",null,"The new ",(0,r.kt)("inlineCode",{parentName:"p"},"running")," thread is resumed upon setting the current context to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"if (setcontext(&running->context) == -1) {\n    abort();\n}\n")),(0,r.kt)("p",null,"This is how scheduling is done!"),(0,r.kt)("h3",{id:"practice-another-time-slice"},"Practice: Another Time Slice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the time slice set to the timer to 2 seconds.\nRe-run the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/libult/test_ult.c"),".\nNotice that now no context switch happens between the 2 created threads because they end before the timer can fire.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now change the ",(0,r.kt)("inlineCode",{parentName:"p"},"printer_thread()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"test_ult.c")," to make it run for more than 2 seconds.\nSee that now the prints from the two threads appear intermingled.\nAdd prints to the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_sigprof()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/libult/threads.c")," to see the context switch happen."))))}p.isMDXComponent=!0}}]);