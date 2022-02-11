"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[3917],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,h=m["".concat(p,".").concat(f)]||m[f]||l[f]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7977:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],a={id:"report-issue",title:"Report an issue",authors:"Aymeric Bethencourt"},p=void 0,u={unversionedId:"contribute/report-issue",id:"contribute/report-issue",title:"Report an issue",description:"The simplest way to contribute is to report issues you may encounter while using Tezos or its related platforms.",source:"@site/docs/contribute/report-issue.md",sourceDirName:"contribute",slug:"/contribute/report-issue",permalink:"/contribute/report-issue",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/contribute/report-issue.md",tags:[],version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1620327772,formattedLastUpdatedAt:"5/6/2021",frontMatter:{id:"report-issue",title:"Report an issue",authors:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Introduction",permalink:"/contribute"},next:{title:"Contribute to OpenTezos",permalink:"/contribute/opentezos"}},c=[],l={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The simplest way to contribute is to report issues you may encounter while using Tezos or its related platforms. "),(0,i.kt)("p",null,"The first step is to find out the repository of the platform you encountered the issue on. ",(0,i.kt)("strong",{parentName:"p"},"All developments on Tezos are open source")," so there will always be a public repository associated with the platform, either on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"Github"),", ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com"},"Gitlab"),", ",(0,i.kt)("a",{parentName:"p",href:"https://bitbucket.com"},"Bitbucket")," or so on."),(0,i.kt)("p",null,"For instance, if you encounter an issue with the ",(0,i.kt)("em",{parentName:"p"},"Tezos core protocol"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/tezos/tezos"},"gitlab.com/tezos/tezos"),". If you find a mistake on ",(0,i.kt)("em",{parentName:"p"},"OpenTezos"),", refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/octo-technology/OpenTezos"},"github.com/octo-technology/OpenTezos"),". If you see an issue on ",(0,i.kt)("em",{parentName:"p"},"OpenMinter"),", refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tqtezos/minter"},"github.com/tqtezos/minter"),"."),(0,i.kt)("p",null,"Once you are on the repository, click the ",(0,i.kt)("em",{parentName:"p"},"issues")," tab. Use the search field to make sure there isn't already an opened issue on the subject. If there are none, open a new issue and enter a title and description explaining the problem with as much detail as possible. The repository maintainers will then be notified of your submission and usually reply within a couple of days."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(9867).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 1: The _issues_ tab of the _Tezos core protocol_ repository. Click _New issue_ in the upper right corner to report an issue."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8714).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 2: The _issues_ tab of the _OpenMinter_ repository. Click _New issue_ in the upper right corner to report an issue."),(0,i.kt)("p",null,"Reporting issues is essential as it helps developers identify breaking bugs and potential security threats. By reporting issues, you are helping the whole ecosystem."))}m.isMDXComponent=!0},8714:function(e,t,r){t.Z=r.p+"assets/images/github-minter-133976f39c12555a9dc2cdf903f74535.png"},9867:function(e,t,r){t.Z=r.p+"assets/images/gitlab-tezos-cc4f782690cc32c83afb2c6722e4e00f.png"}}]);