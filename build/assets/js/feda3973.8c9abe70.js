/*! For license information please see feda3973.8c9abe70.js.LICENSE.txt */
(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[4507],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7235:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(3919),i=n(4184),o=n.n(i),a=n(5697),s=n.n(a),c=n(7294),l=n(4996),u="root_1Xw6",g="disabled_wasc",p="overlay_33Re",m="children_1_FY",d="hasRoundedCorners_3EvO",h="hasShadow_t4g5",f="selected_1Eo_",v=function(e){var t,n=e.children,i=e.className,a=e.hasShadow,s=e.hasRoundedCorners,v=e.overlay,b=e.to,y=e.onClick,E=e.selected;return c.createElement("a",{className:o()(u,(t={},t[g]=void 0===b,t[h]=a,t[d]=s,t[f]=E,t)),href:(0,l.Z)(b),target:(0,r.Z)(b)?"_self":"_blank"},c.createElement("div",{className:o()(m,i),onClick:y},n),v&&c.createElement("div",{className:p},c.createElement("p",null,v)))};v.propTypes={onClick:s().func,className:s().string,hasShadow:s().bool,selected:s().bool,hasRoundedCorners:s().bool,overlay:s().string,to:s().string},v.defaultProps={hasRoundedCorners:!0,hasShadow:!0};var b=v},2228:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(5697),o=n.n(i),a={"large-tablet-breakpoint-query":"(min-width: calc(1024 * 1px))","mobile-breakpoint-max-query":"(max-width: calc( (420 - 1) * 1px ))",root:"root_3CJ0",rowOf2:"rowOf2_2EXQ",rowOf4:"rowOf4_3pU6"},s=function(e){var t=e.cardsPerRow,n=e.children,i=e.title;return r.createElement(r.Fragment,null,i&&r.createElement("h2",null,i),r.createElement("div",{className:a.root+" "+a["rowOf"+t]},n))};s.propTypes={cardsPerRow:o().number,title:o().string},s.defaultProps={cardsPerRow:3};var c=s},8924:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r,i=n(7294),o=n(5697),a=n.n(o),s=n(7235),c=n(9902),l="root_2lEe",u="contents_21WY",g="circleOverlay_23XL",p="image_3n2e",m="textContainer_d_6i",d="title_7Kea",h="description_2G7r",f=function(e){var t=e.description,n=e.icon,r=e.iconDark,o=e.overlay,a=e.title,f=e.to;return i.createElement(s.Z,{className:l,overlay:o,to:f},i.createElement("div",{className:g}),i.createElement("div",{className:u},i.createElement(c.Z,{className:p,imageLight:n,imageDark:r}),i.createElement("div",{className:m},i.createElement("span",{className:d},a),i.createElement("p",{className:h},t))))};f.propTypes=((r={description:a().string,icon:a().string.isRequired,iconDark:a().string,overlay:a().string}).overlay=a().string,r.title=a().string.isRequired,r.to=a().string,r);var v=f},2912:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i="root_2W3B",o=function(e){var t=e.children;return r.createElement("div",{className:i},t)}},9902:function(e,t,n){"use strict";var r=n(7462),i=n(3366),o=n(7294),a=n(5697),s=n.n(a),c=n(4996),l=n(5350),u=["children","className","imageDark","imageDarkHover","imageLight","imageLightHover","tag"],g=0,p=function(e){var t=e.children,n=e.className,a=e.imageDark,s=e.imageDarkHover,p=e.imageLight,m=e.imageLightHover,d=e.tag,h=(0,i.Z)(e,u),f=(0,o.useState)(!1),v=f[0],b=f[1],y=[a,s,p,m],E=function(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];if(!i)return"";var a=(0,l.Z)().isDarkTheme,s=a&&n?n:i,u=a&&r?r:o;u=u||s;var g=t?u:s;return(0,c.Z)(g)}(y,v),k=E?{backgroundImage:"url('"+E+"')"}:{},w=y.filter((function(e){return e})).map((function(e){return(0,c.Z)(e)}));return(0,o.useEffect)((function(){var e=w.map((function(e){var t=new Image;return t.src=e,t}));window.preloadedImages=window.preloadedImages||[],window.preloadedImages[g++]=e}),[]),o.createElement(d,(0,r.Z)({className:n,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},style:k},h),t)};p.propTypes={children:s().oneOfType([s().element,s().string]),imageDark:s().string,imageDarkHover:s().string,imageLight:s().string,imageLightHover:s().string,tag:s().oneOfType([s().string,s().func])},p.defaultProps={tag:"div"},t.Z=p},407:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return C},default:function(){return Z},frontMatter:function(){return O},metadata:function(){return P},toc:function(){return S}});var r=n(7462),i=n(3366),o=n(7294),a=n(3905),s=n(5068),c=n(2228),l=n(8924),u=n(4184),g=n.n(u),p=n(5697),m=n.n(p),d=n(9902),h=n(7235),f="root_1r-n",v="image_1-hF",b="smaller_vHjJ",y="title_2lmF",E="bolded_3lOl",k=function(e){var t,n,r=e.bolded,i=e.icon,a=e.iconDark,s=e.overlay,c=e.smallerImage,l=e.title,u=e.to,p=e.onClick;return o.createElement(h.Z,{selected:r,className:f,overlay:s,to:u,onClick:p},o.createElement(d.Z,{className:g()(v,(t={},t[b]=c,t)),imageLight:i,imageDark:a}),o.createElement("span",{className:g()(y,(n={},n[E]=r,n))},l))};k.propTypes={onClick:m().func,bolded:m().bool,icon:m().string.isRequired,iconDark:m().string,overlay:m().string,smallerImage:m().bool,title:m().string.isRequired,to:m().string};var w=k,L=(n(2912),{ALL:"All",DEV:"Developer",SCIENTIST:"Scientist",C_LEVEL:"C-Level (CEO, CTO, etc.)",STARTUPPER:"Startupper"}),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={path:L.ALL},n}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this;return console.log(this.state.path),o.createElement("div",null,o.createElement("h2",null,"Available paths"),o.createElement(c.Z,null,Object.keys(L).map((function(t,n){return o.createElement(w,{key:t,onClick:function(){return e.setState({path:L[t]})},icon:"img/icons/"+t+"-light.svg",iconDark:"img/icons/"+t+"-dark.svg",title:L[t],bolded:e.state.path===L[t]})}))),o.createElement("h2",null,"Modules in path"),o.createElement(c.Z,null,[L.ALL,L.DEV,L.SCIENTIST,L.C_LEVEL,L.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"What is a blockchain and how it works.",icon:"img/icons/blockchain-big-light.svg",iconDark:"img/icons/blockchain-big-dark.svg",title:"Blockchain Basics",to:"/blockchain-basics"}),[L.ALL,L.DEV,L.SCIENTIST,L.C_LEVEL,L.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"What is Tezos and how it works.",icon:"img/icons/tezos-big-light.svg",iconDark:"img/icons/tezos-big-dark.svg",title:"Tezos Basics",to:"/tezos-basics"}),[L.ALL,L.DEV,L.SCIENTIST].includes(this.state.path)&&o.createElement(l.Z,{description:"How to deploy your own Tezos node.",icon:"img/icons/node-big-light.svg",iconDark:"img/icons/node-big-dark.svg",title:"Deploy a node",to:"/deploy-a-node"}),[L.ALL,L.DEV,L.DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn to use and interact with a Tezos explorer.",icon:"img/icons/explorer-big-light.svg",iconDark:"img/icons/explorer-big-dark.svg",title:"How to use an Explorer",to:"/explorer"}),[L.ALL,L.DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the Archetype smart contract language.",icon:"img/icons/archetype-big-light.svg",iconDark:"img/icons/archetype-big-dark.svg",title:"Archetype",to:"/archetype"}),[L.ALL,L.DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the SmartPy smart contract language.",icon:"img/icons/smartpy-big-light.svg",iconDark:"img/icons/smartpy-big-dark.svg",title:"SmartPy",to:"/smartpy"}),[L.ALL,L.DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the LIGO smart contract language.",icon:"img/icons/ligo-big-light.svg",iconDark:"img/icons/ligo-big-dark.svg",title:"LIGO",to:"/ligo"}),[L.ALL,L.SCIENTIST].includes(this.state.path)&&o.createElement(l.Z,{description:"Learn the basics of the native Tezos smart contract language.",icon:"img/icons/michelson-big-light.svg",iconDark:"img/icons/michelson-big-dark.svg",title:"Michelson",to:"/michelson"}),[L.ALL,L.DEV,L.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"Everything you need to build your first Tezos Dapp.",icon:"img/icons/dapp-big-light.svg",iconDark:"img/icons/dapp-big-dark.svg",title:"Build a Dapp",to:"/dapp"}),[L.ALL,L.DEV,L.SCIENTIST,L.C_LEVEL,L.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"What is baking and how it works.",icon:"img/icons/baking-big-light.svg",iconDark:"img/icons/baking-big-dark.svg",title:"Baking",to:"/baking"}),[L.ALL,L.DEV,L.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"How to deploy your own bakers.",icon:"img/icons/baker-big-light.svg",iconDark:"img/icons/baker-big-dark.svg",title:"Deploy Bakers",to:"/baker"}),[L.ALL,L.DEV,L.C_LEVEL,L.STARTUPPER].includes(this.state.path)&&o.createElement(l.Z,{description:"Automated market maker, stablecoins, flash loans, synthetics, etc.",icon:"img/icons/defi-big-light.svg",iconDark:"img/icons/defi-big-dark.svg",title:"DeFi",to:"/defi"}),[L.ALL,L.SCIENTIST].includes(this.state.path)&&o.createElement(l.Z,{description:"Introduction to the concepts of formal verifications.",icon:"img/icons/formal-big-light.svg",iconDark:"img/icons/formal-big-dark.svg",title:"Formal Verification",to:"/formal-verification"}),[L.ALL].includes(this.state.path)&&o.createElement(l.Z,{description:"Create your own private Tezos network.",icon:"img/icons/private-big-light.svg",iconDark:"img/icons/private-big-dark.svg",title:"Private Blockchain",to:"/private"}),[L.ALL,L.DEV,L.DEV].includes(this.state.path)&&o.createElement(l.Z,{description:"Contribute to the Tezos ecosystem.",icon:"img/icons/contribute-big-light.svg",iconDark:"img/icons/contribute-big-dark.svg",title:"How to contribute",to:"/contribute"})))},t}(o.Component),T=["components"],O={id:"paths",disable_pagination:!0,title:"Paths",slug:"/paths",authors:"Aymeric Bethencourt"},C=void 0,P={unversionedId:"welcome/paths",id:"welcome/paths",title:"Paths",description:"Choose your own path",source:"@site/docs/welcome/paths.md",sourceDirName:"welcome",slug:"/paths",permalink:"/opentezos/paths",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/welcome/paths.md",tags:[],version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623407844,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"paths",disable_pagination:!0,title:"Paths",slug:"/paths",authors:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Modules",permalink:"/opentezos/"},next:{title:"Introduction",permalink:"/opentezos/blockchain-basics"}},S=[{value:"Choose your own path",id:"choose-your-own-path",children:[],level:3}],A={toc:S};function Z(e){var t=e.components,n=(0,i.Z)(e,T);return(0,a.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"choose-your-own-path"},"Choose your own path"),(0,a.kt)("p",null,"OpenTezos is a complete encyclopedia of Tezos, with more than 700 pages. Depending on your interests, you may not want to read everything. Here you can select a profile and be guided toward the only modules on that path."),(0,a.kt)(D,{mdxType:"Paths"}))}Z.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);