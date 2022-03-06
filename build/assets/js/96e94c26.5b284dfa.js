"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[8952],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6935:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"indexer-explained",title:"How Indexers Work?",authors:"Maxime Sallerin"},c=void 0,s={unversionedId:"explorer/indexer-explained",id:"explorer/indexer-explained",title:"How Indexers Work?",description:"This chapter aims to describe the functioning of a typical indexer and its components.",source:"@site/docs/explorer/indexer-explained.md",sourceDirName:"explorer",slug:"/explorer/indexer-explained",permalink:"/opentezos/explorer/indexer-explained",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/explorer/indexer-explained.md",tags:[],version:"current",lastUpdatedBy:"Maxime Sallerin",lastUpdatedAt:1622627280,formattedLastUpdatedAt:"6/2/2021",frontMatter:{id:"indexer-explained",title:"How Indexers Work?",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Introduction",permalink:"/opentezos/explorer"},next:{title:"Available Tezos Explorers",permalink:"/opentezos/explorer/available-tezos-indexers"}},p=[{value:"Typical Blockchain Explorer Backends",id:"typical-blockchain-explorer-backends",children:[],level:2},{value:"Focus on BlockWatch Indexer (TzIndex)",id:"focus-on-blockwatch-indexer-tzindex",children:[],level:2},{value:"To go further",id:"to-go-further",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter aims to describe the functioning of a typical indexer and its components.\nWe will then take the example of ",(0,o.kt)("strong",{parentName:"p"},"BlockWatch Indexer")," used for the ",(0,o.kt)("strong",{parentName:"p"},"TzStats explorer"),"."),(0,o.kt)("h2",{id:"typical-blockchain-explorer-backends"},"Typical Blockchain Explorer Backends"),(0,o.kt)("p",null,"Indexers are node operators that extract, transform and load data into a database by mapping the data into a pre-defined schema of tables with referential integrity\nin order to provide indexing and query processing services via an ",(0,o.kt)("strong",{parentName:"p"},"API"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Indexing")," is a data structure technique to efficiently retrieve records from the database based on some attributes on which the indexing has been done.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Tezos Node")," is the heart of the blockchain. It manages the protocol. Here the Archive node is responsible for fetching all the data from the network that will be used and made available by the indexer/explorer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ETL")," stands for ",(0,o.kt)("em",{parentName:"li"},"extract, transform, and load"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API")," is the acronym for ",(0,o.kt)("em",{parentName:"li"},"Application Programming Interface"),",\nwhich is a software intermediary that allows two applications to talk to each other.")),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3570).Z})),(0,o.kt)("small",{align:"center",className:"figure"},"FIGURE 1: Typical Blockchain Explorer Backends")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"focus-on-blockwatch-indexer-tzindex"},"Focus on BlockWatch Indexer (TzIndex)"),(0,o.kt)("p",null,"The Blockwatch Indexer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockwatch-cc/tzindex"},"TzIndex")," is used for the ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/"},"TzStats explorer"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Blockwatch indexer")," uses a high-performance columnar database that allows for extremely fast analytical queries."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Columnar database")," is a column-oriented storage for database.\nIt is optimized for fast retrieval of data columns,\nfor example, for analytical applications.\nIt significantly reduces the overall disk I/O requirements\nand limits the amount of data you need to load from the disk.")),(0,o.kt)("p",null,"It's a custom-made database for blockchain analytics. Avoiding the storage bottleneck allows for more complex data processing."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Storage bottleneck")," is a situation where the flow of data gets impaired\nor stopped completely due to bad performance or lack of resources.")),(0,o.kt)("p",null,"State updates happen at each block, which means all the balance updates are always verified,\nand the indexer will follow chain reorganizations in real-time."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9702).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 2: Blockwatch Indexer"),(0,o.kt)("h2",{id:"to-go-further"},"To go further"),(0,o.kt)("p",null,"To learn more on the subject, please refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/"},"TzStats blog post")," and this ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2I9mmA0GzMk"},"video")," that illustrates the inner workings of an indexer."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/"},"https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2I9mmA0GzMk"},"https://www.youtube.com/watch?v=2I9mmA0GzMk")))}u.isMDXComponent=!0},9702:function(e,t,n){t.Z=n.p+"assets/images/blockwatch_indexer-114ea14b99d3f20b39d238e0e3332b25.svg"},3570:function(e,t,n){t.Z=n.p+"assets/images/traditional_indexer-e934ceebc46d23cdcacd0a94ea44b3b3.svg"}}]);