"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[6162],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=s,u=h["".concat(o,".").concat(d)]||h[d]||m[d]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1547:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),i=["components"],l={id:"stablecoins",title:"Stablecoins",author:"Aymeric Bethencourt"},o=void 0,c={unversionedId:"defi/stablecoins",id:"defi/stablecoins",title:"Stablecoins",description:"A stablecoin is a cryptocurrency whose price is fixed to another asset. Most stablecoins are pegged (fixed) to fiat currencies (currencies issued by the central bank of a sovereign state) like the US Dollar.",source:"@site/docs/defi/stablecoins.md",sourceDirName:"defi",slug:"/defi/stablecoins",permalink:"/defi/stablecoins",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/defi/stablecoins.md",tags:[],version:"current",lastUpdatedBy:"trollgee",lastUpdatedAt:1634900813,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"stablecoins",title:"Stablecoins",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"On-chain Oracles",permalink:"/defi/oracles"},next:{title:"Synthetics",permalink:"/defi/synthetics"}},p=[{value:"How it works",id:"how-it-works",children:[{value:"Fiat-Collateralized Stablecoins",id:"fiat-collateralized-stablecoins",children:[{value:"Principle",id:"principle",children:[],level:4},{value:"Example",id:"example",children:[],level:4},{value:"Risks",id:"risks",children:[],level:4}],level:3},{value:"Crypto-Collateralized Stablecoins",id:"crypto-collateralized-stablecoins",children:[{value:"Example",id:"example-1",children:[],level:4},{value:"Risks",id:"risks-1",children:[],level:4}],level:3},{value:"Non-Collateralized (algorithmic) Stablecoins",id:"non-collateralized-algorithmic-stablecoins",children:[{value:"Example",id:"example-2",children:[],level:4},{value:"Risks",id:"risks-2",children:[],level:4}],level:3}],level:2},{value:"On Tezos",id:"on-tezos",children:[],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:p};function h(e){var t=e.components,l=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"stablecoin")," is a cryptocurrency whose price is fixed to another asset. Most stablecoins are pegged (fixed) to fiat currencies (currencies issued by the central bank of a sovereign state) like the US Dollar. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7770).Z})),(0,r.kt)("small",{className:"figure"},"FIGURE 1: Illustration of a stablecoin volatility compared to his pegged asset (e.g. USD)."),(0,r.kt)("p",null,"Stablecoins have gained traction as they attempt to offer the best of both worlds: the instant processing, security, and privacy of cryptocurrencies, and the ",(0,r.kt)("strong",{parentName:"p"},"volatile free")," stable valuations of fiat currencies."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Stablecoins achieve their price stability via ",(0,r.kt)("strong",{parentName:"p"},"collateralization")," (backing) or through ",(0,r.kt)("strong",{parentName:"p"},"algorithmic mechanisms")," of buying and selling the reference asset or its derivatives. There are three types of stablecoins:"),(0,r.kt)("h3",{id:"fiat-collateralized-stablecoins"},"Fiat-Collateralized Stablecoins"),(0,r.kt)("h4",{id:"principle"},"Principle"),(0,r.kt)("p",null,"Fiat-collateralized stablecoins are backed by centralized entities that guarantee an exchange rate at the same price as the asset (minus potential fees). They mint new stablecoins when they receive fiat and burn stablecoins when they give fiat back. These centralized entities guarantee that you can always exchange 1 stable-USD against 1 USD, and the other way around. These entities are regularly audited to ensure that they always have enough reserves to match the minted tokens. However, these entities are single points of failure, as they are not decentralized."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"If Alice wants 100 stable-USD, she needs to send 100 USD to the entity's bank account. The entity will, in turn, mint 100 stable-USD and send it to Alice. Note that to exchange with these entities, you will need to pass a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Know_your_customer"},"KYC")," (Know-Your-Customer) as illustrated in Fig. 2. Alice can then use the stable-USD for any operation, such as sending them to Bob. Bob may then want to exchange the 100 stable-USD against some USD. Bob passes a KYC with the entity and then sends them the 100 stable-USD. The company burns the tokens and sends 100 USD from their bank account to Bob's bank account, usually minus a small convergence fee."),(0,r.kt)("h4",{id:"risks"},"Risks"),(0,r.kt)("p",null,"As shown above, these entities must keep as much USD in their bank account as they have minted stable-USD. A malicious company could spend or invest the USD from their bank account and therefor not be able to pay back users in case of a massive exchange of stable-USD to USD. (Note that this problem is similar to the practice of ",(0,r.kt)("em",{parentName:"p"},"fractional reserve banking")," as presented ",(0,r.kt)("a",{parentName:"p",href:"/blockchain-basics/introduction"},"in the first module"),")"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9367).Z})),(0,r.kt)("small",{className:"figure"},"FIGURE 2: Exchanging stable coins against fiat currencies (or the other way around) is secured by a KYC. Exchanging stable coins between users do not require a KYC (i.e. as long as it stays inside the world of crypto)"),(0,r.kt)("h3",{id:"crypto-collateralized-stablecoins"},"Crypto-Collateralized Stablecoins"),(0,r.kt)("p",null,"Crypto-collateralized stablecoins are stablecoins that are backed by other cryptocurrencies. The stablecoins are minted or burned by automated smart contracts knowns as ",(0,r.kt)("em",{parentName:"p"},"Collateralized Debt Position"),' (CDP). However, since the reserve cryptocurrency may also prone to be high volatility, such stablecoins are "over-collateralized", meaning a much larger value of tokens is maintained as reserve, compared to the provided stablecoin value. These models are not capital efficient.'),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Alice wants 100 stable-USD. She opens a CDP. Consider that the CDP is backed by XTZ and that the current value of XTZ is 5 USD. The typical minimum CDP collateralization is 150%, meaning that Alice needs to send at least ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"100"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mn",{parentName:"mrow"},"5"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"20")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"100 / 5 = 20")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," XTZ to the CDP. In practice, Alice must send much more than that, to stay accurate if the price of XTZ slightly moves downward, her collateralization would go below 150%, and her CDP would be liquidated. To keep it safe, Alice would sends 40 XTZ to the CDP, making her collateral worth $200."),(0,r.kt)("p",null,"Alice can now instruct the CDP to mint and transfer her 100 stable-USD. The CDP locks her XTZ until she repays the 100 stable-USD, thus the term ",(0,r.kt)("strong",{parentName:"p"},"debt")," in CDP. "),(0,r.kt)("p",null,"If XTZ goes up, the value of her collateral increases. She can either withdraw some XTZ from the CDP or mint some more stable-USD, as long as the collateral stays above 150%."),(0,r.kt)("p",null,"If XTZ go below ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"150"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mn",{parentName:"mrow"},"40"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"3.75")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"150 / 40 = 3.75")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord"},"7"),(0,r.kt)("span",{parentName:"span",className:"mord"},"5")))))," USD, her collateral would go below 150%. If Alice doesn't send more XTZ to the CDP to compensate, before it reaching 150%, her CDP would be liquidated, meaning that the contract is closed, and her XTZ are sold publicly to other traders. Alice still has the 100 stable-USD, but she just lost $150 worth of XTZ."),(0,r.kt)("h4",{id:"risks-1"},"Risks"),(0,r.kt)("p",null,"The greatest threat to a crypto-collateralized stablecoin is a massive crash of the collateral cryptocurrency ",(0,r.kt)("a",{parentName:"p",href:"/defi/stablecoins#references"},"[4]"),". When a CDP gets liquidated, other traders must buy the collateral to make up for the debt in stable-USD. They make a nice profit as they usually buy it just below 150% of valuation. Now, if a crypto crashes significantly and so fast that liquidated CDPs' collateral drops below 100% of their debt, then nobody will want to buy them. This would ultimately make CDPs worthless and derail the stable-USD off its peg."),(0,r.kt)("p",null,"The most popular crypto-collateralized stablecoin is ",(0,r.kt)("a",{parentName:"p",href:"https://makerdao.com/"},"DAI from MakerDAO")," on Ethereum. Their white paper can be found ",(0,r.kt)("a",{parentName:"p",href:"https://makerdao.com/whitepaper/DaiDec17WP.pdf"},"here"),"."),(0,r.kt)("h3",{id:"non-collateralized-algorithmic-stablecoins"},"Non-Collateralized (algorithmic) Stablecoins"),(0,r.kt)("p",null,"Non-collateralized stablecoins don't use any reserve but rely on an algorithm that will automatically burn tokens when supply is high (to increase the price) or mint new tokens when supply is low (to decrease the price). This is similar to what central banks are doing to maintain the valuations of a fiat currency. It can be achieved by implementing a smart contract on a decentralized platform that can run autonomously."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"For example, assume a stablecoin is priced at $1. When the price drops to $0.80, an algorithm recognizes that an imbalance between supply and demand exists and automatically sets a market order to buy, pushing the price back up. If the price goes above $1, the algorithm sells assets to maintain the price on the predefined level that keeps the peg. "),(0,r.kt)("h4",{id:"risks-2"},"Risks"),(0,r.kt)("p",null,"When the price goes below $1, things get complicated. If the price is below a dollar, the algorithm must reduce supply. A common way for uncollateralized stablecoins to reduce supply is through offering ",(0,r.kt)("strong",{parentName:"p"},"bonds"),"."),(0,r.kt)("p",null,"These bonds are sold on an open market for less than $1. They are paid for in the stablecoin and promise to return 1 stablecoin at an unspecified time in the future. For example, a buyer pays 0.9 stable-USD for 1 Bond token. This lowers the existing supply and should theoretically bring the price of the stablecoin back to $1."),(0,r.kt)("p",null,"The issue here is that buyers need to be confident that the bonds will payout. Bonds are paid out when the supply increases (the stablecoin price goes above $1). Just as with the shares, the bonds rely on increasing demand for the stablecoin. If demand growth slows or stops, bonds may not be paid out."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(302).Z})),(0,r.kt)("small",{className:"figure"},"FIGURE 3: Recapitulation of the 3 types of stablecoins."),(0,r.kt)("h2",{id:"on-tezos"},"On Tezos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kolibri.finance/"},"Kolibri (kUSD)"),", which uses CDPs (referred to as an ",(0,r.kt)("inlineCode",{parentName:"li"},"Oven"),") backed by XTZ to collateralize a soft pegged USD-stable value asset, ",(0,r.kt)("strong",{parentName:"li"},"kUSD")," and is available on the mainnet with more than 6.5m ",(0,r.kt)("strong",{parentName:"li"},"kUSD")," in existence (at the time of writing). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.stably.io/"},"Stably (USDS)"),", which is available on the mainnet and is fully backed by fiat reserves and regulated by ",(0,r.kt)("em",{parentName:"li"},"Prime Trust"),", a Nevada-chartered trust company that also acts as the regulated administrator of USDS. ")),(0,r.kt)("p",null,"There are currently no crypto-collateralized or algorithmic stablecoins on Tezos."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"[1]"," ",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/s/stablecoin.asp"},"https://www.investopedia.com/terms/s/stablecoin.asp")),(0,r.kt)("p",null,"[2]"," ",(0,r.kt)("a",{parentName:"p",href:"https://kolibri.finance/"},"https://kolibri.finance/")),(0,r.kt)("p",null,"[3]"," ",(0,r.kt)("a",{parentName:"p",href:"https://www.stably.io/"},"https://www.stably.io/")),(0,r.kt)("p",null,"[4]"," ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@MakerDAO/single-collateral-dai-source-code-and-security-reviews-523e1a01a3c8"},"https://medium.com/@MakerDAO/single-collateral-dai-source-code-and-security-reviews-523e1a01a3c8")))}h.isMDXComponent=!0},9367:function(e,t,a){t.Z=a.p+"assets/images/stablecoin-kyc-335e18267097a9d7fcbadeacaea072c6.svg"},302:function(e,t,a){t.Z=a.p+"assets/images/stablecoin-types-defc44fbb95ceae0b418c74ca4f33804.svg"},7770:function(e,t,a){t.Z=a.p+"assets/images/stablecoin-07ce180208b6134e5edd77d73a0784f8.svg"}}]);