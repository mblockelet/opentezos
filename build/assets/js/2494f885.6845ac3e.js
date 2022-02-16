"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[6487],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"introduction",title:"Introduction",slug:"/archetype",authors:"Benoit Rognier"},p=void 0,c={unversionedId:"archetype/introduction",id:"archetype/introduction",title:"Introduction",description:"This section presents the Archetype Smart Contract language .",source:"@site/docs/archetype/introduction.md",sourceDirName:"archetype",slug:"/archetype",permalink:"/archetype",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/archetype/introduction.md",tags:[],version:"current",lastUpdatedBy:"Mathias Hiron",lastUpdatedAt:1644867462,formattedLastUpdatedAt:"2/14/2022",frontMatter:{id:"introduction",title:"Introduction",slug:"/archetype",authors:"Benoit Rognier"},sidebar:"docs",previous:{title:"Exam",permalink:"/explorer/exam"},next:{title:"Completium",permalink:"/archetype/completium"}},s=[{value:"Business logic",id:"business-logic",children:[],level:2},{value:"Explicit execution conditions",id:"explicit-execution-conditions",children:[],level:2},{value:"Rich Storage API",id:"rich-storage-api",children:[],level:2},{value:"State Machine",id:"state-machine",children:[],level:2},{value:"Formal Specification",id:"formal-specification",children:[],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section presents the ",(0,i.kt)("a",{parentName:"p",href:"https://archetype-lang.org"},"Archetype")," Smart Contract language ."),(0,i.kt)("p",null,"Archetype is an elegant high-level generic purpose language to develop Smart Contracts on the Tezos blockchain. It supports all Michelson features, and also provides new types (rational, duration) and design concepts (state machine ...) that ease the development and maintenance of smart contracts."),(0,i.kt)("p",null,"It also enables formal verification of contracts by transcoding to the ",(0,i.kt)("a",{parentName:"p",href:"http://why3.lri.fr/"},"Why3")," language."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/getting-started-1"},"How to install Archetype.")),(0,i.kt)("h2",{id:"business-logic"},"Business logic"),(0,i.kt)("p",null,"Besides standard ",(0,i.kt)("a",{parentName:"p",href:"/michelson"},"Michelson")," types, Archetype provides ",(0,i.kt)("inlineCode",{parentName:"p"},"rational"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," types to make business logic easy to express."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype business_logic(holder : address, value : tez, deadline : date)\n\nentry pay () {\n  transfer ((1 + 7% * (now - deadline) / 1d) * value) to holder\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pay")," entrypoint applies a penalty fee to the value transferred to ",(0,i.kt)("em",{parentName:"p"},"holder"),", of 7% per day beyond the deadline ."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/archetype-language/numbers#rationals"},"Learn more about Rationals in Archetype...")),(0,i.kt)("h2",{id:"explicit-execution-conditions"},"Explicit execution conditions"),(0,i.kt)("p",null,"Archetype provides a specific syntax to establish execution conditions so that the contract is easy to read and check."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype exec_cond_demo(admin : address, value : nat)\n\nentry setvalue (v : nat) {\n  called by admin\n  require {\n    r1: transferred > value otherwise "Invalid transferred amount";\n    r2: now < 2023-01-01    otherwise "Too late";\n  }\n  effect {\n    value := v;\n  }\n}\n')),(0,i.kt)("p",null,"The entrypoint ",(0,i.kt)("inlineCode",{parentName:"p"},"setvalue")," only executes if the sender is ",(0,i.kt)("em",{parentName:"p"},"admin"),", if the transferred amount is greater than ",(0,i.kt)("em",{parentName:"p"},"value")," and if it is called before 2022."),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/archetype-language/action#sections"},"Learn more about the sections of an Archetype contract...")),(0,i.kt)("h2",{id:"rich-storage-api"},"Rich Storage API"),(0,i.kt)("p",null,"The exclusive ",(0,i.kt)("inlineCode",{parentName:"p"},"asset")," data container provides a rich API to access and manipulate collections of records:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"addupate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"remove"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"removeif")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contains"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sort"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"select")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"head"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tail")),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype asset_demo\n\nasset vehicle {\n  vin          : string;\n  nbrepairs    : nat  = 0;\n  dateofrepair : date = now;\n}\n\nentry repair_oldest () {\n  for v in vehicle.sort(dateofrepair).select(the.nbrepairs = 0).head(3) do\n    vehicle.update(v, { nbrepairs += 1; dateofrepair = now })\n  done\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"repair_oldest")," entrypoint increments the ",(0,i.kt)("em",{parentName:"p"},"nbrepairs")," field of the 3 vehicles with the oldest dates of repair, and with a number of repairs equal to zero."),(0,i.kt)("p",null,"An asset collection provides a rich API to read/write data (add, remove, update, addupdate, ...), and to iterate over the collection (select, sort, sum, head, tail, ...)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/archetype-language/data-model"},"Learn more about assets...")),(0,i.kt)("h2",{id:"state-machine"},"State Machine"),(0,i.kt)("p",null,"With Archetype, it is possible  to design the contract as a state machine. Transitions may have guard conditions (like ",(0,i.kt)("em",{parentName:"p"},"initialize"),") and effect on the storage (like ",(0,i.kt)("em",{parentName:"p"},"terminate"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype state_machine_demo(value : tez, holder : address)\n\nstates =\n| Created initial\n| Initialized\n| Terminated\n\ntransition initialize () {\n  from Created to Initialized\n  when { transferred > value }\n}\n\ntransition terminate () {\n  from Initialized to Terminated\n  effect { transfer balance to holder }\n}\n")),(0,i.kt)("p",null,"State machines help make the overall process clear and transparent."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/archetype-language/state-machine"},"Learn more about state machines...")),(0,i.kt)("h2",{id:"formal-specification"},"Formal Specification"),(0,i.kt)("p",null,"Archetype provides a full-featured specification language for contract invariants and entry point postconditions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"specification entry repair_oldest () {\n  postcondition p1 {\n    0 <= vehicle.sum(nbrepairs) - before.vehicle.sum(nbrepairs) <= 3\n  }\n}\n")),(0,i.kt)("p",null,"The postcondition ",(0,i.kt)("inlineCode",{parentName:"p"},"p1")," of repair_oldest entry point specifies that the difference between the total number of repairs after the entry point's execution and before, is less or equal to 3."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/archetype-language/contract-specification"},"Learn more about formal specification...")))}u.isMDXComponent=!0}}]);