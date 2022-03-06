"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[6318],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"introduction",title:"Introduction",slug:"/deploy-a-node",authors:"Maxime Sallerin and Thomas Zoughebi"},l=void 0,p={unversionedId:"deploy-a-node/introduction",id:"deploy-a-node/introduction",title:"Introduction",description:"This module will guide you through the complete installation and setup of your own Tezos node on Ubuntu and on Mac OS.",source:"@site/docs/deploy-a-node/introduction.md",sourceDirName:"deploy-a-node",slug:"/deploy-a-node",permalink:"/opentezos/deploy-a-node",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/deploy-a-node/introduction.md",tags:[],version:"current",lastUpdatedBy:"Theotime-Akeare",lastUpdatedAt:1626083991,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"introduction",title:"Introduction",slug:"/deploy-a-node",authors:"Maxime Sallerin and Thomas Zoughebi"},sidebar:"docs",previous:{title:"Exam",permalink:"/opentezos/tezos-basics/exam"},next:{title:"Installation",permalink:"/opentezos/deploy-a-node/installation"}},c=[{value:"What is a node?",id:"what-is-a-node",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This module will guide you through the complete installation and setup of your own Tezos node on Ubuntu and on Mac OS."),(0,a.kt)("p",null,"In this chapter, the reader will also grasp what a node is and how important it is in a Blockchain network."),(0,a.kt)("h2",{id:"what-is-a-node"},"What is a node?"),(0,a.kt)("p",null,"The node is the main actor of the Tezos blockchain and has two main functions: running the ",(0,a.kt)("em",{parentName:"p"},"gossip network")," and updating the ",(0,a.kt)("em",{parentName:"p"},"context"),".",(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("em",{parentName:"p"},"gossip network")," is where all Tezos nodes exchange blocks and operations (see the ",(0,a.kt)("em",{parentName:"p"},"Admin Client")," to monitor P2P connections). On this peer-to-peer network, an operation is spreading through the network and then baked into a block.",(0,a.kt)("br",{parentName:"p"}),"\n","The shell receives blocks from the gossip network and uses them to keep the current ",(0,a.kt)("em",{parentName:"p"},"context")," up-to-date: ",(0,a.kt)("em",{parentName:"p"},"A full state of the blockchain")," shared by all peers. Approximately every minute, a new block is created. When the shell receives it, it applies each operation to its ",(0,a.kt)("em",{parentName:"p"},"current context")," and computes a ",(0,a.kt)("em",{parentName:"p"},"new context"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"last block"),' received on a chain, is also called the "',(0,a.kt)("em",{parentName:"p"},"head"),'" of that chain. Each new head is then advertised by the node to its peers, disseminating this information to build a ',(0,a.kt)("em",{parentName:"p"},"consensus")," across the network."),(0,a.kt)("p",null,'Other than passively observing the network, your node can inject its own new operations when instructed by the "',(0,a.kt)("inlineCode",{parentName:"p"},"tezos-client"),'" application and even register as a delegate to bake new blocks with the "',(0,a.kt)("inlineCode",{parentName:"p"},"tezos-baker-"),'" prefix. The node also has a view of the multiple chains that may exist concurrently and selects the best one based on its fitness (see ',(0,a.kt)("a",{parentName:"p",href:"/tezos-basics/liquid-proof-of-stake"},(0,a.kt)("em",{parentName:"a"},"Liquid Proof-of-Stake"))," chapter in ",(0,a.kt)("a",{parentName:"p",href:"/tezos-basics/introduction"},(0,a.kt)("em",{parentName:"a"},"Tezos Basics"))," module)."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"[1]"," ",(0,a.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/introduction/howtouse.html#node"},"https://tezos.gitlab.io/introduction/howtouse.html#node")))}u.isMDXComponent=!0}}]);