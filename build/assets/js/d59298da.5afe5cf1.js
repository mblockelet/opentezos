"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[6714],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"introduction",title:"Introduction",slug:"/baking",authors:"Maxime Sallerin"},l=void 0,c={unversionedId:"baking/introduction",id:"baking/introduction",title:"Introduction",description:"In this module, we will see how baking works for the Tezos blockchain. More precisely, we will see the different actors involved, from creating new blocks to their validation. We will then see the associated reward system, and how to deploy your own baker. Finally, we will present a list of existing bakers and the criteria to evaluate them.",source:"@site/docs/baking/introduction.md",sourceDirName:"baking",slug:"/baking",permalink:"/opentezos/baking",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/baking/introduction.md",tags:[],version:"current",lastUpdatedBy:"Aymeric",lastUpdatedAt:1627830816,formattedLastUpdatedAt:"8/1/2021",frontMatter:{id:"introduction",title:"Introduction",slug:"/baking",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Exam",permalink:"/opentezos/dapp/exam"},next:{title:"How baking works?",permalink:"/opentezos/baking/baking_explained"}},p=[{value:"Tezos is a proof-of-stake blockchain",id:"tezos-is-a-proof-of-stake-blockchain",children:[{value:"What is baking?",id:"what-is-baking",children:[],level:3},{value:"What is delegating?",id:"what-is-delegating",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this module, we will see how baking works for the Tezos blockchain. More precisely, we will see the different actors involved, from creating new blocks to their validation. We will then see the associated reward system, and how to deploy your own baker. Finally, we will present a list of existing bakers and the criteria to evaluate them."),(0,a.kt)("h2",{id:"tezos-is-a-proof-of-stake-blockchain"},"Tezos is a proof-of-stake blockchain"),(0,a.kt)("p",null,"To achieve its consensus, Tezos uses ",(0,a.kt)("a",{parentName:"p",href:"/tezos-basics/liquid-proof-of-stake"},"Liquid Proof of Stake (LPoS)"),". That is to say that the validators/bakers of the network temporarily lock a part of their tokens (which they cannot use anymore) to obtain the right to create a block. The ",(0,a.kt)("strong",{parentName:"p"},"creator")," of the next block is called the ",(0,a.kt)("strong",{parentName:"p"},"baker")," and is chosen randomly among all the candidates, based on the number of tokens locked. In exchange for his work, the baker receives a ",(0,a.kt)("strong",{parentName:"p"},"reward")," in Tez."),(0,a.kt)("h3",{id:"what-is-baking"},"What is baking?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Baking")," is the act of creating, signing and, publishing new blocks to the Tezos blockchain. Bakers are a crucial component of the Tezos ",(0,a.kt)("em",{parentName:"p"},"Liquid Proof-of-Stake")," consensus as they ensure that all transactions in a block are correct and that the order of transactions is agreed upon.\nNote that a baker also has to accept to play the role of ",(0,a.kt)("em",{parentName:"p"},"Endorser"),", which means taking part in the validation of blocks created by other bakers."),(0,a.kt)("p",null,"To bake blocks, a baker needs to participate in the network, which requires:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a minimum of 8,000\ua729 (i.e., one roll)"),(0,a.kt)("li",{parentName:"ul"},"a dedicated infrastructure (e.g., a server or a raspberry pi) with enough CPU power and memory space"),(0,a.kt)("li",{parentName:"ul"},"An internet connexion")),(0,a.kt)("p",null,"The more rolls of Tez a baker owns, the higher his chances to bake blocks and earn baking rewards."),(0,a.kt)("h3",{id:"what-is-delegating"},"What is delegating?"),(0,a.kt)("p",null,"If a Tez holder does not have 8,000\ua729 or does not want to set up a computing infrastructure to bake blocks, they may delegate their coins to a baker. Delegating lets coin holders (i.e., ",(0,a.kt)("strong",{parentName:"p"},"delegators"),') "lend" their coins to a baker (i.e., a ',(0,a.kt)("strong",{parentName:"p"},"delegate"),"), giving the baker a higher probability of being selected to bake and endorse blocks. In turn, bakers share the additional revenue generated from the delegated tokens with the delegators, in proportion to their participation. Note that this process does not transfer ownership of coins. Hence bakers cannot spend or control the Tez delegated to them, ensuring that bakers cannot appropriate the delegators funds."),(0,a.kt)("p",null,"With ",(0,a.kt)("em",{parentName:"p"},"LPoS")," the number of bakers is unlimited (everyone can participate), and delegation is optional."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"[1]"," ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/baking"},"https://wiki.tezosagora.org/learn/baking")))}u.isMDXComponent=!0}}]);