"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[2415],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7649:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"wrapped-assets",title:"Wrapped Assets",author:"Aymeric Bethencourt"},p=void 0,l={unversionedId:"defi/wrapped-assets",id:"defi/wrapped-assets",title:"Wrapped Assets",description:"Wrapped XTZ",source:"@site/docs/defi/wrapped-assets.md",sourceDirName:"defi",slug:"/defi/wrapped-assets",permalink:"/opentezos/defi/wrapped-assets",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/defi/wrapped-assets.md",tags:[],version:"current",lastUpdatedBy:"Aymeric",lastUpdatedAt:1628108608,formattedLastUpdatedAt:"8/4/2021",frontMatter:{id:"wrapped-assets",title:"Wrapped Assets",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Decentralized Exchanges",permalink:"/opentezos/defi/dexs"},next:{title:"Cross-chain Swaps",permalink:"/opentezos/defi/cross-chain-swaps"}},c=[{value:"Wrapped XTZ",id:"wrapped-xtz",children:[],level:2},{value:"Properties of wXTZ",id:"properties-of-wxtz",children:[],level:2},{value:"Other wrapped assets",id:"other-wrapped-assets",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:c};function u(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"wrapped-xtz"},"Wrapped XTZ"),(0,o.kt)("p",null,"Let's consider the following facts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tez (XTZ) is the native currency built on the Tezos blockchain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When a dApp (decentralized application) is built from the Tezos Blockchain, it usually either implements its own form of token or needs to work with existing tokens, both are based on ",(0,o.kt)("a",{parentName:"p",href:"/defi/token-standards"},"FA standards"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("em",{parentName:"p"},"FA1.2")," and ",(0,o.kt)("em",{parentName:"p"},"FA2")," standards define how tokens are transferred and how to keep a consistent record of those token transfers in the Tezos network. FA standards were developed after the release of the XTZ."))),(0,o.kt)("p",null,"Now here is the issue: ",(0,o.kt)("strong",{parentName:"p"},"XTZ doesn't conform to its own FA standards"),". "),(0,o.kt)("p",null,"Indeed, XTZ is the proto-token of the Tezos Blockchain, i.e., it was built before the FA standards existed. This makes XTZ not compliant with the FA standards used by most Dapps, e.g., DEXs, NFT marketplaces, etc. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4416).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: XTZ can't interact with FA tokens"),(0,o.kt)("p",null,"One solution consists in ",(0,o.kt)("em",{parentName:"p"},"wrapping")," XTZ into an FA-compliant token called ",(0,o.kt)("em",{parentName:"p"},"wXTZ"),". Wrapping XTZ allows you to trade them directly with alt tokens. You need wXTZ to trade XTZ for other FA tokens on decentralized platforms like ",(0,o.kt)("em",{parentName:"p"},"Dexter")," and ",(0,o.kt)("em",{parentName:"p"},"Quipuswap"),". Because decentralized platforms running on Tezos use smart contracts to facilitate trades, directly between users, every user needs to have the same standardized format for the tokens they trade. This ensures tokens don't get lost."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8754).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 2: Wrapping XTZ and unwrapping wXTZ"),(0,o.kt)("p",null,'When you "wrap" XTZ, you aren\'t really wrapping so much as trading XTZ for an equal token called wXTZ via a smart contract. If you want to get plain XTZ back you need to "unwrap" it, i.e., trade it back for XTZ.'),(0,o.kt)("p",null,"In practice, when wrapping, your XTZ are stored in a smart contract, and an equal amount of wXTZ is minted by the contract and transferred to you. When unwrapping, your wXTZ are burned (a.k.a. destroyed), and some XTZ are released and sent back to you.  "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7516).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 3: wXTZ can interact with other FA tokens"),(0,o.kt)("h2",{id:"properties-of-wxtz"},"Properties of wXTZ"),(0,o.kt)("p",null,"wXTZ has been developed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stove-labs"},"Stove Labs")," with the following properties ",(0,o.kt)("a",{parentName:"p",href:"/defi/wrapped-assets#references"},"[1]"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Liquid"),": wXTZ are liquid and may be used as a standard developer building block (FA1.2) for Tezos DeFi and to participate in DeFi systems on Tezos.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Collaterized"),": Each wXTZ token is collateralized with 1 Tez (XTZ).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rewards"),": Locked XTZ generates staking rewards from baking.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Secure"),": The suite of wXTZ contracts is audited by ",(0,o.kt)("a",{parentName:"p",href:"https://www.trailofbits.com/"},"Trail of Bits")," and managed by ",(0,o.kt)("a",{parentName:"p",href:"https://www.stakerdao.com/"},"StakerDAO"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fees"),": Interacting with wXTZ has no fee from ",(0,o.kt)("a",{parentName:"p",href:"https://www.stakerdao.com/"},"StakerDAO")," during the launch phase (contracts interaction requires only the standard network fees on the Tezos network). Changes to the fee structure will be managed by the ",(0,o.kt)("em",{parentName:"p"},"StakerDAO")," governance process.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-custodial"),": XTZ locked in the smart contract to mint wXTZ are only redeemable by the user himself. No one can move or touch these tokens until the user burns its wXTZ and gets his or her XTZ back."))),(0,o.kt)("p",null,"Please refer to their ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/stakerdao/the-wrapped-tezos-wxtz-beta-guide-6917fa70116e"},"medium article")," to learn more about wXTZ and get started."),(0,o.kt)("h2",{id:"other-wrapped-assets"},"Other wrapped assets"),(0,o.kt)("p",null,"wXTZ is not the only wrapped asset on Tezos, one may want to interact with Ethereum or Bitcoin from a Tezos Smart contract. A wrapped asset can bridge an asset from a different native public blockchain network to the one in which it is wrapping itself. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stable.tech/"},"StableTech")," has created ",(0,o.kt)("a",{parentName:"p",href:"https://decrypt.co/51860/wrapped-eth-comes-to-tezos-as-it-takes-on-ethereum-defi-market"},"Wrapped ETH (ETHtz)")," which is an FA1.2 token with a price pegged to ETH. ETHtz can be used on Tezos for exchanges or DeFi service while taking advantage of Tezos's much lower fees than Ethereum."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tzbtc.io/"},"Wrapped Bitcoin (tzBTC)")," is another wrapped asset on Tezos pegged to BTC. tzBTC is also implemented using the FA1.2 asset standard on Tezos."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.benderlabs.io/wrap"},"Bender Labs")," will soon offer to wrap ERC-20 and ERC-721 tokens from Ethereum to Tezos. This work by locking the token into a smart contract an Ethereum then minting the corresponding tokens on a smart contract on Tezos. Both contracts can communique with each other using an ",(0,o.kt)("a",{parentName:"p",href:"/defi/oracles"},"oracle")," bridge. When the token is burned on Tezos, the oracle informs the smart contract on Ethereum to release the corresponding it's tokens."),(0,o.kt)("p",null,"This way, one can use the consensus mechanism and the specific infrastructure of Tezos to use assets or information stored with both Tezos and Ethereum."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Wrapped assets not only improve the functionality and usability of the asset it wraps, it also opens up a wide array of higher-level financial services that wouldn't be available otherwise. "),(0,o.kt)("p",null,"On Tezos, we've seen the addition of ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/stakerdao/the-wrapped-tezos-wxtz-beta-guide-6917fa70116e"},"Wrapped XTZ (wXTZ)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tzbtc.io/"},"Wrapped Bitcoin (tzBTC)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://decrypt.co/51860/wrapped-eth-comes-to-tezos-as-it-takes-on-ethereum-defi-market"},"Wrapped ETH (ETHtz)")," and the addition of ERC-20 and ERC-721 assets from ",(0,o.kt)("a",{parentName:"p",href:"http://www.benderlabs.io/"},"Bender Labs")," coming in the ",(0,o.kt)("a",{parentName:"p",href:"https://cryptoslate.com/20-ethereum-erc-20-tokens-will-be-coming-to-tezos-xtz-defi-in-q1-2021/"},"near future"),"."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/stakerdao/the-wrapped-tezos-wxtz-beta-guide-6917fa70116e"},"https://medium.com/stakerdao/the-wrapped-tezos-wxtz-beta-guide-6917fa70116e")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://decrypt.co/51860/wrapped-eth-comes-to-tezos-as-it-takes-on-ethereum-defi-market"},"https://decrypt.co/51860/wrapped-eth-comes-to-tezos-as-it-takes-on-ethereum-defi-market")),(0,o.kt)("p",null,"[3]"," ",(0,o.kt)("a",{parentName:"p",href:"https://cryptoslate.com/20-ethereum-erc-20-tokens-will-be-coming-to-tezos-xtz-defi-in-q1-2021/"},"https://cryptoslate.com/20-ethereum-erc-20-tokens-will-be-coming-to-tezos-xtz-defi-in-q1-2021/")),(0,o.kt)("p",null,"[4]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzbtc.io/"},"https://tzbtc.io/")))}u.isMDXComponent=!0},7516:function(e,t,a){t.Z=a.p+"assets/images/compliant-f35a1b050e34cf1e60ba3f08e24bd7b1.svg"},4416:function(e,t,a){t.Z=a.p+"assets/images/non-compliant-fdfac223f5cce87377997a29e2f43f63.svg"},8754:function(e,t,a){t.Z=a.p+"assets/images/wrap-520f03cb22ce7e6ff4f28614541baa66.svg"}}]);