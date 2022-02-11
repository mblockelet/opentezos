"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[3862],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9124:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],l={id:"completium",title:"Completium",authors:"Benoit Rognier"},i=void 0,p={unversionedId:"archetype/completium",id:"archetype/completium",title:"Completium",description:"CLI",source:"@site/docs/archetype/completium.md",sourceDirName:"archetype",slug:"/archetype/completium",permalink:"/archetype/completium",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/archetype/completium.md",tags:[],version:"current",lastUpdatedBy:"Benoit Rognier",lastUpdatedAt:1639503361,formattedLastUpdatedAt:"12/14/2021",frontMatter:{id:"completium",title:"Completium",authors:"Benoit Rognier"},sidebar:"docs",previous:{title:"Introduction",permalink:"/archetype"},next:{title:"Contract Templates",permalink:"/archetype/examples"}},m=[{value:"CLI",id:"cli",children:[],level:2},{value:"JS library",id:"js-library",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],u={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://completium.com/docs/cli"},"Completium CLI")," enables to deploy and interact with contracts from the command line."),(0,o.kt)("p",null,"For example, the following command deploys the contract ",(0,o.kt)("em",{parentName:"p"},"escrow.arl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli deploy escrow.arl --as alice\n")),(0,o.kt)("p",null,"The following command calls the entrypoint ",(0,o.kt)("em",{parentName:"p"},"init"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli call escrow --entry init --amount 5tz --as alice\n")),(0,o.kt)("h2",{id:"js-library"},"JS library"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://completium.com/docs/cli"},"Completium JS library")," enables to interact with smart contracts from a JS script."),(0,o.kt)("p",null,"It is used to develop test scenarios that make sure the contract behaves as it is intended to."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { deploy, getBalance, checkBalanceDelta } = require('@completium/completium-cli')\n\nconst test = async () => {\n  // Scenario\n  var [escrow, _] = await deploy('escrow.arl')\n\n  checkBalanceDelta(alice, 0, async () => {\n    await escrow.init({ amount: '5tz' }, { as: alice })\n    await escrow.inc_value({ as: alice })\n    await escrow.inc_value({ as: alice })\n    await escrow.complete({ as: alice })\n  })\n}\n\ntest()\n")),(0,o.kt)("p",null,"Learn more about Completium's ",(0,o.kt)("a",{parentName:"p",href:"https://completium.com/docs/cli/jslibrary"},"JS API"),"."))}s.isMDXComponent=!0}}]);