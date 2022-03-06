"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[5439],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,d=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3964:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"introduction",title:"Introduction",slug:"/formal-verification",authors:"Frank Hillard"},s=void 0,l={unversionedId:"formal-verification/introduction",id:"formal-verification/introduction",title:"Introduction",description:"The Tezos blockchain has several advantages over its concurrents. One of them is the formal verification of smart contract. This module shows a brief overview of how Tezos smart contracts can be formally verified.",source:"@site/docs/formal-verification/introduction.md",sourceDirName:"formal-verification",slug:"/formal-verification",permalink:"/opentezos/formal-verification",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/formal-verification/introduction.md",tags:[],version:"current",lastUpdatedBy:"Frank Hillard",lastUpdatedAt:1622032096,formattedLastUpdatedAt:"5/26/2021",frontMatter:{id:"introduction",title:"Introduction",slug:"/formal-verification",authors:"Frank Hillard"},sidebar:"docs",previous:{title:"Exam",permalink:"/opentezos/defi/exam"},next:{title:"Generalities",permalink:"/opentezos/formal-verification/general"}},f=[],p={toc:f};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Tezos blockchain has several advantages over its concurrents. One of them is the ",(0,a.kt)("strong",{parentName:"p"},"formal verification of smart contract"),". This module shows a brief overview of how Tezos smart contracts can be formally verified. "),(0,a.kt)("p",null,"We will first define in the ",(0,a.kt)("a",{parentName:"p",href:"/formal-verification/general"},"Generalities")," section what is the formal verification of a Tezos smart contract, and its benefits and how proof assistants (and tools) can make this task possible."),(0,a.kt)("p",null,"An explained ",(0,a.kt)("a",{parentName:"p",href:"/formal-verification/modeling-theorem"},"example")," (",(0,a.kt)("em",{parentName:"p"},"Vote")," smart contract) will be used to illustrate the formal specification of a Tezos smart contract, and its proof."),(0,a.kt)("p",null,"The schema below describes the process for performing formal verification on Tezos smart contract."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2392).Z})),(0,a.kt)("small",{className:"figure"},"FIGURE 5: Overview of the formal verification process on smart contract."),"For mathematicians and very curious developers, an extra [theoretical](/formal-verification/gadt-coq) section will introduce some basic concepts of the _Type theory_ such as _GADT_ which allows inductive types on the _Calculus of Inductive Construction_ (CiC). The proof assistant _Coq_, which is based on the CiC, can be used for proving theorems.",(0,a.kt)("p",null,"This extra ",(0,a.kt)("a",{parentName:"p",href:"/formal-verification/gadt-coq"},"theoretical")," section will also introduce ",(0,a.kt)("em",{parentName:"p"},"Coq")," and the ",(0,a.kt)("em",{parentName:"p"},"Mi-Cho-Coq")," library (used by ",(0,a.kt)("em",{parentName:"p"},"Coq"),") to formalize a smart contract as a logical object (theorem). This theorem is formalized in ",(0,a.kt)("em",{parentName:"p"},"Gallina")," (Term) language, which follows the CiC principles. The script for proving the theorem is written in ",(0,a.kt)("em",{parentName:"p"},"Gallina")," (Vernacular), which provides ",(0,a.kt)("em",{parentName:"p"},"tactics")," and will be executed by the inference engine (Coq)."))}m.isMDXComponent=!0},2392:function(e,t,r){t.Z=r.p+"assets/images/FormalVerification_overview_intro-a5addcb382b185363a985d4f4b115d08.svg"}}]);