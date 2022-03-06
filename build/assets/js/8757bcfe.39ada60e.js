"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[1582],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2912:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i="root_2W3B",r=function(e){var t=e.children;return a.createElement("div",{className:i},t)}},7219:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(2912),o=["components"],s={id:"1-raffle-contract",title:"Raffle contract",authors:"Maxime Sallerin and Benjamin Pilia"},p=void 0,c={unversionedId:"ligo/write-contract-ligo/1-raffle-contract",id:"ligo/write-contract-ligo/1-raffle-contract",title:"Raffle contract",description:"The language used in smart contracts on Tezos is Michelson, a stack-based language. However, this kind of language is not commonly used by developers and as the code becomes complex and longer, it gets increasingly harder to keep readable and clean code in Michelson. However, the Tezos ecosystem provides a number of high level languages, which make smart contracts development as easy as any application development. LIGO is one of these languages.",source:"@site/docs/ligo/write-contract-ligo/1-raffle-contract.md",sourceDirName:"ligo/write-contract-ligo",slug:"/ligo/write-contract-ligo/1-raffle-contract",permalink:"/opentezos/ligo/write-contract-ligo/1-raffle-contract",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/ligo/write-contract-ligo/1-raffle-contract.md",tags:[],version:"current",lastUpdatedBy:"Damien ZONDA",lastUpdatedAt:1646498958,formattedLastUpdatedAt:"3/5/2022",sidebarPosition:1,frontMatter:{id:"1-raffle-contract",title:"Raffle contract",authors:"Maxime Sallerin and Benjamin Pilia"},sidebar:"docs",previous:{title:"Installation",permalink:"/opentezos/ligo/installation"},next:{title:"Launch raffle",permalink:"/opentezos/ligo/write-contract-ligo/2-launch-raffle"}},d=[{value:"Raffle smart contract",id:"raffle-smart-contract",children:[],level:2},{value:"Prerequisites for smart contracts development",id:"prerequisites-for-smart-contracts-development",children:[],level:2},{value:"Smart contract initialization",id:"smart-contract-initialization",children:[{value:"LIGO concepts used in this part",id:"ligo-concepts-used-in-this-part",children:[{value:"Types",id:"types",children:[{value:"Built-in types",id:"built-in-types",children:[],level:5},{value:"Type aliases",id:"type-aliases",children:[],level:5}],level:4},{value:"Constants &amp; Variables declaration",id:"constants--variables-declaration",children:[{value:"Constants",id:"constants",children:[],level:5},{value:"Variables",id:"variables",children:[],level:5}],level:4},{value:"Introduction to functions",id:"introduction-to-functions",children:[],level:4},{value:"Main function",id:"main-function",children:[],level:4},{value:"LIGO compilation",id:"ligo-compilation",children:[],level:4}],level:3},{value:"Raffle storage initialization",id:"raffle-storage-initialization",children:[],level:3},{value:"Raffle parameter initialization",id:"raffle-parameter-initialization",children:[],level:3},{value:"Raffle code definition",id:"raffle-code-definition",children:[],level:3},{value:"Summing-up",id:"summing-up",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The language used in smart contracts on Tezos is ",(0,r.kt)("a",{parentName:"p",href:"/michelson/introduction"},"Michelson"),", a stack-based language. However, this kind of language is not commonly used by developers and as the code becomes complex and longer, it gets increasingly harder to keep readable and clean code in Michelson. However, the Tezos ecosystem provides a number of high level languages, which make smart contracts development as easy as any application development. LIGO is one of these languages."),(0,r.kt)("p",null,"In this chapter, we will focus on smart contract development with the LIGO language (and particularly the ",(0,r.kt)("em",{parentName:"p"},"PascaLigo")," syntax). The most important aspects of LIGO will be covered here."),(0,r.kt)("p",null,"If you want to learn the complete LIGO syntax, you can take a look at:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://ligolang.org/docs/intro/introduction"},"The official Ligolang documentation"),": a complete reference maintained by the developing team."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://tezosacademy.io/"},"Tezos Academy"),": a gamified interactive tutorial with 30 examples. ")),(0,r.kt)("p",null,"This chapter has been written with a smart contract development approach. Each part starts with an explanation of the LIGO syntax (called ",(0,r.kt)("em",{parentName:"p"},"LIGO prerequisite")," sections) that are later used for smart contract development."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"LIGO prerequisite")," parts can be skipped if you do not want to learn the ",(0,r.kt)("em",{parentName:"p"},"PascaLigo")," syntax."),(0,r.kt)(l.Z,{mdxType:"NotificationBar"},(0,r.kt)("p",null,(0,r.kt)("p",null,"DISCLAIMER: This smart contract is meant for educational purpose only, and is not suitable for any other use. OpenTezos cannot be held responsible for any other use."))),(0,r.kt)("h2",{id:"raffle-smart-contract"},"Raffle smart contract"),(0,r.kt)("p",null,"In this chapter, a simple ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Raffle"},"raffle")," example is considered. A raffle is a gambling game, where players buy tickets. The winning ticket is then drawn. In our case, a raffle will be developed in a smart contract with those rules: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An administrator (with his public address) wants to organize a raffle, which reward is some Tez."),(0,r.kt)("li",{parentName:"ul"},"The administrator pays the reward to the winner with his own funds. "),(0,r.kt)("li",{parentName:"ul"},"Anyone can participate in the raffle, and the participation fee is the same for everyone. However, each address can participate only once."),(0,r.kt)("li",{parentName:"ul"},"Each ticket has the same probability of being picked."),(0,r.kt)("li",{parentName:"ul"},"After a given time, defined at the beginning of the raffle, the administrator will close the raffle, and send the reward to the winner.")),(0,r.kt)("p",null,"This raffle can be divided into three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A raffle is opened, with a reward, for a given time."),(0,r.kt)("li",{parentName:"ol"},"During the allowed time, anyone can buy a raffle ticket."),(0,r.kt)("li",{parentName:"ol"},"The raffle is closed, the winner is randomly selected and rewarded with the prize.")),(0,r.kt)("p",null,"Only one raffle session can be ongoing."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Some choices have been made for educational purposes.")),(0,r.kt)(l.Z,{mdxType:"NotificationBar"},(0,r.kt)("p",null,(0,r.kt)("p",null,"About the word ",(0,r.kt)("strong",{parentName:"p"},"ticket"),":\nA ticket is a reserved word in Michelson and LIGO, introduced by the Edo protocol.\nIn this chapter, the word ticket only refers to a raffle ticket. "))),(0,r.kt)("h2",{id:"prerequisites-for-smart-contracts-development"},"Prerequisites for smart contracts development"),(0,r.kt)("p",null,"When developing smart contracts, two tools are extremely useful:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a LIGO syntax support for your IDE"),(0,r.kt)("li",{parentName:"ol"},"a LIGO compiler")),(0,r.kt)("p",null,"These two tools will point out syntax errors and type-checking errors. However, it is recommended to compile aLigosmart contract as often as possible. The compilation will detect errors that the IDE linter won't. Thus, errors will be found early and should be more easily addressed."),(0,r.kt)("h2",{id:"smart-contract-initialization"},"Smart contract initialization"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We're about to see everything that is required to create an empty smart contract:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Types, built-in types"),(0,r.kt)("li",{parentName:"ul"},"Constants, Variables"),(0,r.kt)("li",{parentName:"ul"},"Introduction to functions"),(0,r.kt)("li",{parentName:"ul"},"main function\n-Ligocompilation"))),(0,r.kt)("p",null,"A Tezos smart contract has three parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"parameter"),": possible invocations (function calls) of the smart contract."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"storage"),": persistent on-chain data structure. Note that anyone can read this, but only the contract can change it."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"code"),": a sequence of Michelson instructions to be executed when invoking a smart contract.")),(0,r.kt)("p",null,"Compiling a LIGO smart contract will provide us all three parts."),(0,r.kt)("p",null,"Let's get started! The first step is to create a ",(0,r.kt)("em",{parentName:"p"},".ligo")," file. Let's create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"raffle.ligo")," which will contain a minimaly viable contract."),(0,r.kt)("h3",{id:"ligo-concepts-used-in-this-part"},"LIGO concepts used in this part"),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"LIGO is strongly and statically typed. This means that the compiler checks how a contract processes data, ensuring that each function's expectations are met.\nIf it passes the test, the contract will not fail at run-time due to some inconsistent assumptions on the data. This is called type-checking."),(0,r.kt)("p",null,"LIGO types are built on top of the Michelson's type system."),(0,r.kt)("h5",{id:"built-in-types"},"Built-in types"),(0,r.kt)("p",null,"LIGO supports all Michelson types, from basic primitives (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),") to composite types (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"), including contract-specific types (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tez"),")."),(0,r.kt)("p",null,"You can find all built-in types on the ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/ligolang/ligo/-/blob/dev/src/environment/environment.ml"},"LIGO gitlab"),"."),(0,r.kt)("p",null,"Below is a table of the most used built-in types. Most of them will be used in the raffle smart contract:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unit")),(0,r.kt)("td",{parentName:"tr",align:null},"carries no information"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Unit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"option")),(0,r.kt)("td",{parentName:"tr",align:null},"value of some type or none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'Some ("this string is defined")'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(None: option string)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of character"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"This is a string"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Address of an implicit account"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address)'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Positive or negative integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-5"),",  ",(0,r.kt)("inlineCode",{parentName:"td"},"int(1n)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nat")),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0n"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"abs (1)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tez"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"tz"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mutez")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in tz or mutez"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5mutez"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"10tez"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean: true or false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"False"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp (bakers are responsible for providing the given current timestamp)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'("2000-01-01T10:10:10Z" : timestamp)'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Tezos.now"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of bytes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x12e4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list (type)")),(0,r.kt)("td",{parentName:"tr",align:null},"List definition. The same element can be found several times in a list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list [1; 2; 2]"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set (type)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set definition. The same element cannot be found several times in a list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set []"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"set [3; 2; 2; 1]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type1 * type2 ... * typeN")),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple definition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'("Alice", 5n, True)'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(keyType, valueType) map")),(0,r.kt)("td",{parentName:"tr",align:null},"Map an element of type ",(0,r.kt)("inlineCode",{parentName:"td"},"keyType")," to an element of type ",(0,r.kt)("inlineCode",{parentName:"td"},"valueType"),". Meant for finite maps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Map.empty"),", ",(0,r.kt)("inlineCode",{parentName:"td"},'Map.literal [(("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address), (1,2)); (("tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN" : address), (0,3))]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(keyType, valueType) big_map")),(0,r.kt)("td",{parentName:"tr",align:null},"Map an element of type ",(0,r.kt)("inlineCode",{parentName:"td"},"keyType")," to an element of type ",(0,r.kt)("inlineCode",{parentName:"td"},"valueType"),". Meant for huge maps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Big_map.empty"),", ",(0,r.kt)("inlineCode",{parentName:"td"},'Big_map.literal [(("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address), (1,2)); (("tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN" : address), (0,3))]'))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As you may have noticed, there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," type. Indeed, ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," is not deterministic as its precision depends on the hardware that it runs on.")),(0,r.kt)("h5",{id:"type-aliases"},"Type aliases"),(0,r.kt)("p",null,"Type aliasing consists in giving a new name to a given type when the context calls for a more precise name."),(0,r.kt)("p",null,"It can be used to express our intent more clearly: for instance, a ",(0,r.kt)("inlineCode",{parentName:"p"},"coordinates")," type defined by a tuple of two integers is meaningful than just using a tuple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type coordinates is (int * int)\nconst my_position : coordinates = (2, 1)\n")),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuples")," will be explained later."),(0,r.kt)("p",null,"It is also helpful to define a type for complex structures, such as the expected input and return of a function or the contract storage."),(0,r.kt)("h4",{id:"constants--variables-declaration"},"Constants & Variables declaration"),(0,r.kt)("h5",{id:"constants"},"Constants"),(0,r.kt)("p",null,"Constants are by design immutable, which means they can only be assigned once, at their declaration. A constant is defined by a name, a type, and a value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const age : int = 25\n")),(0,r.kt)("h5",{id:"variables"},"Variables"),(0,r.kt)("p",null,"Variables, unlike constants, are mutable. They cannot be declared in a global scope, but they can be declared and used within functions or as function parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var c: int := 2 + 3\nc := c - 3\n")),(0,r.kt)("p",null,"\u26a0\ufe0f The assignment operator is different: ",(0,r.kt)("inlineCode",{parentName:"p"},":=")," for variables, instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," for constants."),(0,r.kt)("h4",{id:"introduction-to-functions"},"Introduction to functions"),(0,r.kt)("p",null,"As in many other language, LIGO allows to create functions. There are several ways to define a function, but the header is always the same:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function <functionName> (const param1 : <param2Type>, const param2 : <param2Type>, ...): <returnType> is\n    <code>\n")),(0,r.kt)("p",null,"Functions will be detailed below. At this point, since the main function does nothing, it will use a ",(0,r.kt)("a",{parentName:"p",href:"/ligo/write-contract-ligo/2-launch-raffle#blockless-functions"},"blockless function")," definition."),(0,r.kt)("h4",{id:"main-function"},"Main function"),(0,r.kt)("p",null,"Every LIGO smart contract must define a ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function. This ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function defines ",(0,r.kt)("em",{parentName:"p"},"operations")," and updates the contract ",(0,r.kt)("em",{parentName:"p"},"storage"),", depending on the contract parameter. It takes two parameters, the ",(0,r.kt)("strong",{parentName:"p"},"contract parameter")," and the ",(0,r.kt)("strong",{parentName:"p"},"on-chain storage"),", and returns a pair made of a ",(0,r.kt)("strong",{parentName:"p"},"list of operations")," and a ",(0,r.kt)("strong",{parentName:"p"},"(new) on-chain storage"),". "),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9463).Z})),(0,r.kt)("small",{className:"figure"},"FIGURE 1: Main function"),(0,r.kt)("br",null),(0,r.kt)("p",null,"The contract parameter and storage type are up to the contract designer, but the type for the list of operations is not."),(0,r.kt)("p",null,"The return type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function is as follows (assuming that the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage")," type has already been defined elsewhere)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type storage is ...  // Any name, any type\ntype returnMainFunction is list (operation) * storage\n")),(0,r.kt)("h4",{id:"ligo-compilation"},"LIGO compilation"),(0,r.kt)("p",null,"The Ligo code above should now compile with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ligo compile contract <ligoFile>\n")),(0,r.kt)("p",null,"If the compilation is successful, the output will be the Michelson code of the contract."),(0,r.kt)("p",null,"It is recommended to run this command as often as possible to check the code syntax and the types."),(0,r.kt)("h3",{id:"raffle-storage-initialization"},"Raffle storage initialization"),(0,r.kt)("p",null,"Now that we have introduced some basic LIGO concepts (",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constant"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"variable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function), let's design our ",(0,r.kt)("em",{parentName:"p"},"Raffle")," smart contract."),(0,r.kt)("p",null,"The first step is to define the storage. Contract storage holds the contract data: it can be a single value or a complex structure. The storage definition is a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," instruction. First, the storage will be as simple as possible: ",(0,r.kt)("em",{parentName:"p"},"empty"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type storage is unit\n")),(0,r.kt)("p",null,"\u26a0\ufe0f The word ",(0,r.kt)("em",{parentName:"p"},"unit")," is a reserved word of the language and represents an ",(0,r.kt)("em",{parentName:"p"},"empty type"),"."),(0,r.kt)("h3",{id:"raffle-parameter-initialization"},"Raffle parameter initialization"),(0,r.kt)("p",null,"The parameter definition lists all the entrypoints of a smart contract, i.e., the names of the functions that can be called from the exterior."),(0,r.kt)("p",null,"At this point, the parameter definition will be skipped. It will be defined later on in this chapter."),(0,r.kt)("p",null,"To define a smart contract without any parameter definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type raffleEntrypoints is unit\n")),(0,r.kt)("h3",{id:"raffle-code-definition"},"Raffle code definition"),(0,r.kt)("p",null,"The last part of a smart contract is the code definition. A smart contract can execute no instruction, but it must always return two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a list of operations"),(0,r.kt)("li",{parentName:"ol"},"the storage")),(0,r.kt)("p",null,"The Ligo compiler expects the smart contract to have at least one function, which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function. It does not have to be named that way but it is good practice to do so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type storage is unit\ntype raffleEntrypoints is unit\n\nfunction main (const action : raffleEntrypoints; const store : storage): list (operation) * storage is\n    ((nil: list(operation)), store)\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function returns return an empty list of operations and the same storage as provided as input."),(0,r.kt)("p",null,"The raffle smart contract can now be compiled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ligo compile contract raffle.ligo\n")),(0,r.kt)("h3",{id:"summing-up"},"Summing-up"),(0,r.kt)("p",null,"The three Michelson parts have an equivalence in LIGO."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Michelson"),(0,r.kt)("th",{parentName:"tr",align:null},"LIGO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type raffleEntrypoints is"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type storage is"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function main (const action : raffleEntrypoints; const store : storage): list (operation) * storage is ((nil: list(operation)), store)"))))))}u.isMDXComponent=!0},9463:function(e,t,n){t.Z=n.p+"assets/images/main_function-def6ca332b38507cc42b237cc24c24fc.svg"}}]);