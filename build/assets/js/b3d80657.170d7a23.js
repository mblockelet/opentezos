"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[6202],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2912:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o="root_2W3B",r=function(e){var t=e.children;return a.createElement("div",{className:o},t)}},2706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(2912),i=["components"],l={id:"token-standards",title:"Token Standards",author:"Aymeric Bethencourt"},c=void 0,p={unversionedId:"defi/token-standards",id:"defi/token-standards",title:"Token Standards",description:"In the Blockchain ecosystem, any digitally transferable asset between two people is called a token. Tokens can be native to a blockchain, e.g., BTC is the native token of Bitcoin or tokens can also be created and hosted on an existing blockchain via a smart contract. Some tokens, called stablecoins, follow the price of fiat currencies (e.g., USD, EUR). Others, called NFT, can represent collectables or art pieces. Finally, tokens can represent rights of ownership of real-world estates or companies (i.e., stock tokens). In this chapter, we will see the main types of token and the token standards on Tezos.",source:"@site/docs/defi/token-standards.md",sourceDirName:"defi",slug:"/defi/token-standards",permalink:"/defi/token-standards",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/defi/token-standards.md",tags:[],version:"current",lastUpdatedBy:"w1nt3r-eth",lastUpdatedAt:1638075678,formattedLastUpdatedAt:"11/28/2021",frontMatter:{id:"token-standards",title:"Token Standards",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Introduction",permalink:"/defi"},next:{title:"Decentralized Exchanges",permalink:"/defi/dexs"}},d=[{value:"Token standard",id:"token-standard",children:[],level:2},{value:"Fungible &amp; Non-Fungible Tokens",id:"fungible--non-fungible-tokens",children:[],level:2},{value:"Token standards on Tezos",id:"token-standards-on-tezos",children:[],level:2},{value:"Regulations",id:"regulations",children:[],level:2},{value:"Risks",id:"risks",children:[],level:2},{value:"Resources on Tezos",id:"resources-on-tezos",children:[],level:2},{value:"To go further",id:"to-go-further",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:d};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the Blockchain ecosystem, any digitally transferable asset between two people is called a ",(0,r.kt)("strong",{parentName:"p"},"token"),". Tokens can be native to a blockchain, e.g., BTC is the native token of Bitcoin or tokens can also be created and hosted on an existing blockchain via a smart contract. Some tokens, called ",(0,r.kt)("a",{parentName:"p",href:"/defi/stablecoins"},"stablecoins"),", follow the price of fiat currencies (e.g., USD, EUR). Others, called ",(0,r.kt)("em",{parentName:"p"},"NFT"),", can represent collectables or art pieces. Finally, tokens can represent rights of ownership of real-world estates or companies (i.e., ",(0,r.kt)("a",{parentName:"p",href:"https://www.binance.com/en/stock-token"},"stock tokens"),"). In this chapter, we will see the main types of token and the token standards on Tezos."),(0,r.kt)(s.Z,{mdxType:"NotificationBar"},(0,r.kt)("p",null,'"Everything will be tokenized and connected by a blockchain one day."',(0,r.kt)("br",null),"Fred Ehrsam (Co-founder of Coinbase)")),(0,r.kt)("h2",{id:"token-standard"},"Token standard"),(0,r.kt)("p",null,"A token standard is an interface, and a set of rules, that a smart contract must respect to be compatible with the common standards. Typically, token standards define how tokens can be transferred and how to keep a consistent record of those transfers on the Tezos network."),(0,r.kt)("p",null,"Multiple implementations of a standard can co-exist, but they must all respect the interface and rules of the standard. Standards ensure that smart contracts remain compatible, so for instance, when a new project issues a token, it remains compatible with the existing decentralized exchanges, wallets, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9748).Z})),(0,r.kt)("small",{className:"figure"},"FIGURE 1: Illustration of 2 implementations of the same token standard"),(0,r.kt)("h2",{id:"fungible--non-fungible-tokens"},"Fungible & Non-Fungible Tokens"),(0,r.kt)("p",null,"The most basic token is the ",(0,r.kt)("em",{parentName:"p"},"Fungible Token"),", i.e., a class of identical, interchangeable tokens. For instance, two ",(0,r.kt)("em",{parentName:"p"},"XTZ")," tokens are identical and interchangeable, just like a US dollar is identical and interchangeable with another US dollar. Both are exactly the same as the other."),(0,r.kt)("p",null,"However, a token can represent much more than a fungible asset. For instance, a concert ticket in the front row is obviously not equivalent to a concert ticket in the last row. These tickets are part of the same class (i.e., concert tickets), but they are not interchangeable: they are non-fungible. Two pieces of art are also non-fungible. The ownership of these assets can be coded with a ",(0,r.kt)("em",{parentName:"p"},"Non-Fungible Token")," (or ",(0,r.kt)("em",{parentName:"p"},"NFT")," for short) and then bought, sold, exchanged, etc., just like any other token. NFTs are particularly interesting as collectables as their scarcity can be demonstrated and proven by the blockchain (i.e., an owner can prove that he has the only copy in the whole world.)"),(0,r.kt)("h2",{id:"token-standards-on-tezos"},"Token standards on Tezos"),(0,r.kt)("p",null,"On Tezos, the latest token standard is ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"FA2")," (standing for ",(0,r.kt)("em",{parentName:"p"},"Financial Application 2"),"). It supports a wide range of token types: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fungible (equivalent to ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/"},"ERC-20")," on Ethereum),"),(0,r.kt)("li",{parentName:"ul"},"non-fungible (equivalent to ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/"},"ERC-721")," on Ethereum),"),(0,r.kt)("li",{parentName:"ul"},"non-transferable (equivalent to ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/"},"ERC-1238")," on Ethereum),"),(0,r.kt)("li",{parentName:"ul"},"as well as multi-asset contracts (equivalent to ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/"},"ERC-1155")," on Ethereum).")),(0,r.kt)("p",null,"As you can see, FA2 is a very powerful standard that allows for many forms of tokens. It aims to provide significant expressivity to contract developers, allowing them to create new types of tokens while maintaining a common interface standard for wallet integrators and external developers. A variety of transfer permission policies can also be defined, such as how most tokens can be transferred, who can perform a transfer, and who can receive tokens. A token contract can be designed to support a single token type or multiple token types to optimize batch transfers and atomic swaps. A particular FA2 implementation may include hybrid implementations where multiple token kinds (fungible, non-fungible, non-transferable etc) can coexist (e.g. in a fractionalized NFT contract) ",(0,r.kt)("a",{parentName:"p",href:"/defi/token-standards#references"},"[2]"),"."),(0,r.kt)("p",null,"Note that FA2 is the successor to ",(0,r.kt)("a",{parentName:"p",href:"https://assets.tqtezos.com/docs/token-contracts/fa12/1-fa12-intro/"},"FA1.2")," that only supports fungible tokens, it is still widely used in the Tezos ecosystem. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9702).Z})),(0,r.kt)("small",{className:"figure"},"FIGURE 2: Illustration of the multi-purposes aspect of the _FA2_ token standard."),(0,r.kt)("p",null,"To learn more on how to implement FA2 tokens, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"official documentation"),"."),(0,r.kt)("h2",{id:"regulations"},"Regulations"),(0,r.kt)("p",null,"If you plan to create a token, make sure to check the regulations in your country. There are rules to respect depending on the type of token you are creating, its representation, and the taxes to be paid. ",(0,r.kt)("a",{parentName:"p",href:"http://thinkblocktank.org/wp-content/uploads/2019/08/thinkBLOCKtank-Token-Regulation-Paper-v1.0-Part-C.pdf"},"Here is an example of regulations in Europe.")),(0,r.kt)("h2",{id:"risks"},"Risks"),(0,r.kt)("p",null,"Always be cautious as anyone can create tokens on Tezos. Before purchasing a token, make sure to question its value. Is the smart contract of the token open-source? Has it been audited? Is there a hard cap? Indeed, any rule regarding creating tokens or their transfer can be coded into the smart contract. For instance, uncapped tokens could be infinitely minted by their author, rendering their value null."),(0,r.kt)(s.Z,{mdxType:"NotificationBar"},(0,r.kt)("p",null,"Keep in mind that holding a token in your wallet doesn't, in itself, guarantee that your token is safe. Indeed, holding a token means that the token's smart contract holds a record that associates your public address with a balance. If the smart contract is malicious or has bugs, that record could be altered, erased, or frozen, making your tokens unusable even if they are in your wallet.")),(0,r.kt)("h2",{id:"resources-on-tezos"},"Resources on Tezos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"FA2")),": The latest token standard as explained above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tqtezos/nft-tutorial"},"tzNFT")),": A tutorial showing users how to originate and interact with the FA2 NFT contract implementation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-21/tzip-21.md"},"TZIP-21")),": an emerging contract multimedia metadata standard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://kalamint.io/"},"Kalamint")),": A community owned NFT marketplace on Tezos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tqtezos/minter"},"OpenMinter")),": A reusable Dapp that allows anyone to create and collect NFTs on Tezos.\n",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://gitlab.com/equisafe/nyx"},"NyX Standard")),": A set of digital contracts standards, designed for issuers and buyers of financial instruments to be used on the Tezos blockchain.")),(0,r.kt)("h2",{id:"to-go-further"},"To go further"),(0,r.kt)("p",null,"Check out the article on ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/uses-of-tezos/nft"},"NFTs on Tezos Agora")," and about ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/uses-of-tezos/tokenization"},"Tokenization")," to learn more."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"[1]"," ",(0,r.kt)("a",{parentName:"p",href:"https://finematics.com/what-are-nfts-and-how-can-they-be-used-in-defi/"},"https://finematics.com/what-are-nfts-and-how-can-they-be-used-in-defi/")),(0,r.kt)("p",null,"[2]"," ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md")),(0,r.kt)("p",null,"[3]"," ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/uses-of-tezos/nft"},"https://wiki.tezosagora.org/learn/uses-of-tezos/nft")),(0,r.kt)("p",null,"[4]"," ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/uses-of-tezos/tokenization"},"https://wiki.tezosagora.org/learn/uses-of-tezos/tokenization")),(0,r.kt)("p",null,"[5]"," ",(0,r.kt)("a",{parentName:"p",href:"https://www.binance.com/en/stock-token"},"https://www.binance.com/en/stock-token")))}h.isMDXComponent=!0},9748:function(e,t,n){t.Z=n.p+"assets/images/standards-ab6ecef45d49db7b9dc0ccd8560695d9.svg"},9702:function(e,t,n){t.Z=n.p+"assets/images/tokens-2c3a742857c22690de66907d57299ff5.svg"}}]);