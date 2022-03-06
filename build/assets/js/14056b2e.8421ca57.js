"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[2722],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,u=m["".concat(c,".").concat(d)]||m[d]||h[d]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"introduction",disable_pagination:!0,title:"Introduction",slug:"/blockchain-basics",authors:"Aymeric Bethencourt and Thomas Zoughebi"},c=void 0,l={unversionedId:"blockchain-basics/introduction",id:"blockchain-basics/introduction",title:"Introduction",description:"Before we start digging into Tezos itself, let's review the basics of blockchain and cryptocurrencies. This module will present a brief history of the blockchain, its main components, consensus' mechanisms and introduce the notion of smart contract (smart contracts will be more detailed in the dedicated chapter of the \"Tezos Basics\" module). All these notions will later be helpful in the following modules to understand how Tezos works and how it goes beyond Bitcoin and Ethereum to become part of a new generation of blockchains.",source:"@site/docs/blockchain-basics/introduction.md",sourceDirName:"blockchain-basics",slug:"/blockchain-basics",permalink:"/opentezos/blockchain-basics",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/blockchain-basics/introduction.md",tags:[],version:"current",lastUpdatedBy:"Lost Punk",lastUpdatedAt:1646497818,formattedLastUpdatedAt:"3/5/2022",frontMatter:{id:"introduction",disable_pagination:!0,title:"Introduction",slug:"/blockchain-basics",authors:"Aymeric Bethencourt and Thomas Zoughebi"},sidebar:"docs",previous:{title:"Paths",permalink:"/opentezos/paths"},next:{title:'Main properties of the first "blockchain"',permalink:"/opentezos/blockchain-basics/main-properties"}},p=[{value:"A brief history of blockchain",id:"a-brief-history-of-blockchain",children:[{value:"The tipping points",id:"the-tipping-points",children:[],level:3},{value:"And then came Bitcoin",id:"and-then-came-bitcoin",children:[],level:3},{value:"What is Bitcoin?",id:"what-is-bitcoin",children:[],level:3},{value:"The 2nd generation of blockchains",id:"the-2nd-generation-of-blockchains",children:[],level:3}],level:2},{value:"Terminology",id:"terminology",children:[],level:2},{value:"References",id:"references",children:[],level:2}],h={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before we start digging into Tezos itself, let's review the basics of blockchain and cryptocurrencies. This module will present a brief history of the blockchain, its main components, consensus' mechanisms and introduce the notion of ",(0,o.kt)("em",{parentName:"p"},"smart contract")," (smart contracts will be more detailed in ",(0,o.kt)("a",{parentName:"p",href:"/tezos-basics/smart-contracts"},'the dedicated chapter of the "',(0,o.kt)("em",{parentName:"a"},"Tezos Basics"),'" module'),"). All these notions will later be helpful in the following modules to understand how Tezos works and how it goes beyond Bitcoin and Ethereum to become part of a new generation of blockchains."),(0,o.kt)("h2",{id:"a-brief-history-of-blockchain"},"A brief history of blockchain"),(0,o.kt)("h3",{id:"the-tipping-points"},"The tipping points"),(0,o.kt)("p",null,"In 2005, Greece imposed restrictions on the amount people could withdraw from their bank account in an attempt to prevent banks from failing, as talks between the government and bailout creditors appeared to be on the verge of collapse."),(0,o.kt)("p",null,"In 2008, the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Subprime_mortgage_crisis"},"subprime mortgage crisis")," triggered a ",(0,o.kt)("em",{parentName:"p"},"global")," financial crisis. ",(0,o.kt)("em",{parentName:"p"},"Lehman Brothers")," went bankrupt and many more banks and financial institutions across the world required to be bailed out by governments. "),(0,o.kt)("p",null,"These events and many others of the same kind exposed the fragility of the modern financial system and the fact that banks and other financial institutions could present a risk for people's savings and money."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fractional-reserve_banking"},"Fractional reserve banking"),", the most common form of banking practised by commercial banks worldwide, is the embodiment of such issue. When you give a bank $1,000, the bank does not keep that amount in reserve for you. It legally only needs to keep $100 in reserves (generally around 10%) and can spend $900 of your money in various investments. At this point, not only are you not able to withdraw your $1,000 if the bank doesn't have enough reserves from other depositors, but they risk losing your money altogether if its investments fail or the bank goes bankrupt. If a bank has a net deposit of a billion dollars, it only needs to keep around 100 million on hand at any given time. This usually works fine when bank customers don't withdraw all their money, altogether at once. However, the moment customers start to question the bank's financial stability and decide to withdraw their money, the bank can rapidly lose its reserve, and things can go sour very quickly."),(0,o.kt)("p",null,"On another note, one of the solutions to a crisis often used by governments is to create more of their national ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fiat_money"},"fiat currency")," (e.g., US Dollar, Euro, etc.) to pay for recovery plans. This leads to inflation or ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyperinflation"},"hyperinflation")," of the fiat currency and the devaluation of people's holdings. Fiat currencies are entirely controlled in their supply and creation by the national government and are backed by nothing but faith in the government. Many countries such as Venezuela have experienced hyperinflation to the point that their fiat currency is now only worth a small fraction of its past value."),(0,o.kt)("p",null,"All these factors, the lack of faith in governments to protect their fiat currencies, the lack of trust in banks to protect people's holdings, and so on, led to a  question about the modern financial system: ",(0,o.kt)("em",{parentName:"p"},"Is there a better alternative?")),(0,o.kt)("h3",{id:"and-then-came-bitcoin"},"And then came Bitcoin"),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"October 31st, 2008"),", under the ",(0,o.kt)("em",{parentName:"p"},"pseudonym"),' of "Satoshi Nakamoto", the ',(0,o.kt)("a",{parentName:"p",href:"https://bitcoin.org/bitcoin.pdf"},"Bitcoin whitepaper")," was discretely released. From its very title and abstract, one could understand that the aim of ",(0,o.kt)("em",{parentName:"p"},"his"),' invention was to create an "electronic cash system", an alternative to fiat currency, able to function free of control or manipulation from a centralized entity.'),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"January 3rd, 2009"),', this "blockchain" went live, and the first ',(0,o.kt)("em",{parentName:"p"},"block"),' was created, called the "Genesis Block" (you will learn about what a ',(0,o.kt)("em",{parentName:"p"},"block"),' is, in the next chapter). The Genesis block contained the first few exchanges of this newly created electronic currency called Bitcoin and some data. It is indeed possible to store some raw data inside a block, and Satoshi Nakamoto included in the first block a message saying: "',(0,o.kt)("em",{parentName:"p"},"Chancellor on the brink of second bailout for banks"),'", the title of ',(0,o.kt)("em",{parentName:"p"},"The Times")," newspaper of the day describing the second bank bailout following the subprime crisis."),(0,o.kt)("p",null,"This message clearly showed the intention of Satoshi Nakamoto and his Bitcoin to trigger the so-called ",(0,o.kt)("strong",{parentName:"p"},"de-centralization of money"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9111).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: ",(0,o.kt)("em",null,"The Times")," newspaper from January 3rd, 2009"),(0,o.kt)("h3",{id:"what-is-bitcoin"},"What is Bitcoin?"),(0,o.kt)("p",null,"Bitcoin is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decentralized_network_protocol"},"decentralized network protocol")," made of various cryptographic components (e.g., asymmetric cryptography, hash functions, proof-of-work, etc.), ensuring its functionality and security. This is why the Bitcoin currency and other digital coins are referred to as ",(0,o.kt)("strong",{parentName:"p"},"crypto-currencies"),"."),(0,o.kt)("p",null,"Contrary to popular belief, Bitcoin wasn't the first attempt at creating a crypto-currency. ",(0,o.kt)("em",{parentName:"p"},"Digicash")," (1989), ",(0,o.kt)("em",{parentName:"p"},"CyberCash")," (1994), ",(0,o.kt)("em",{parentName:"p"},"E-gold")," (1996), ",(0,o.kt)("em",{parentName:"p"},"HashCash")," (from Adam Back in 1997), ",(0,o.kt)("em",{parentName:"p"},"Bit Gold")," (1998) and ",(0,o.kt)("em",{parentName:"p"},"B-money")," (from Wei Dai in 1998) were all very close to such a goal, but all failed because of technical or security issues. ",(0,o.kt)("em",{parentName:"p"},"Bit Gold")," and ",(0,o.kt)("em",{parentName:"p"},"B-money")," even used a decentralized database for transactions and an older version of Bitcoin's ",(0,o.kt)("em",{parentName:"p"},"Proof-of-Work")," (consensus mechanism which will be detailed in the ",(0,o.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work"},'"',(0,o.kt)("em",{parentName:"a"},"Proof-of-Work"),'"')," chapter). But Bitcoin was the first to have components assembled in such a way that made it viable."),(0,o.kt)("p",null,'The key concepts underlying Bitcoin were not new either and were based on technologies used for years before that. Bitcoin relies on a lot of "old" Information Technologies (IT). Some from as far back as 1973 and up until the Genesis Block in 2009.'),(0,o.kt)("p",null,"Bitcoin's system was actually born from 36 years of research, trials, experiments, and failures. It wouldn't be useful to know the precise history, but to understand that Bitcoin didn't come from thin air, here are some key elements:"),(0,o.kt)("p",null,"First of all, Bitcoin relies on the Internet, which itself has been relying on ",(0,o.kt)("em",{parentName:"p"},"TCP/IP")," since 1974."),(0,o.kt)("p",null,"Bitcoin also relies heavily on ",(0,o.kt)("em",{parentName:"p"},"Modern Cryptography"),", e.g., the Diffie-Hellman protocol (1976, in collaboration with Ralph Merkle), the Merkle Tree (1979), and the RSA (Rivest\u2013Shamir\u2013Adleman) public-key cryptosystem (1977)."),(0,o.kt)("p",null,"The blocks of data are cryptographically chained with ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)"},"Cipher Block Chaining (CBC)")," a principle, from 1976. The aim and the creation of this chain of blocks will be explained in the following chapters (",(0,o.kt)("a",{parentName:"p",href:"/blockchain-basics/main-properties"},'"',(0,o.kt)("em",{parentName:"a"},"Main Properties of the First Blockchain"),'"')," and ",(0,o.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work"},'"',(0,o.kt)("em",{parentName:"a"},"Proof-of-Work"),'"'),")."),(0,o.kt)("p",null,"From there, countless reflections and research on ethics in technologies, and of course cryptography have taken place: Email traceability and privacy in 1981, Elliptic Curve Cryptography in 1985 (used for ",(0,o.kt)("em",{parentName:"p"},"Public Key Cryptography"),' in most blockchains), PGP in 1991 (developed for privacy providing authentication and encryption), etc. Even "smart contracts" were pre-existing, having been first conceptualized by Nick Szabo in 1997.'),(0,o.kt)("p",null,"In 2001, the ",(0,o.kt)("em",{parentName:"p"},"Bittorent")," client provided more support to the peer-to-peer networks experimental research: An essential opening towards enabling further decentralization."),(0,o.kt)("p",null,'Finally, before the bankruptcy of Lehman Brothers and the global financial crisis in 2008, Hal Finney (1956-2014), a developer at PGP, released his "Reusable Proof-of-Work" in 2004. Later on, he became one of the first people to exchange Bitcoins with Satoshi Nakamoto.'),(0,o.kt)("h3",{id:"the-2nd-generation-of-blockchains"},"The 2nd generation of blockchains"),(0,o.kt)("p",null,"Following the success of Bitcoin, many forked its code and started creating new blockchains with differentiating features or capabilities."),(0,o.kt)("p",null,"Note here that Bitcoin's transactions are, to a certain degree programmable. One can program how funds are spent using scripts. However, only a small set of basic uses is possible in practice as Bitcoin's underlying scripting language is very limited."),(0,o.kt)("p",null,"In 2011, Vitalik Buterin discovered Bitcoin, and two years later (October 2013) began work on a proposal for an extension of ",(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150627031414/http://vbuterin.com/ultimatescripting.html"},(0,o.kt)("em",{parentName:"a"},"Mastercoin")),", a protocol with more programmable capabilities than Bitcoin."),(0,o.kt)("p",null,"However, the team at ",(0,o.kt)("em",{parentName:"p"},"Mastercoin")," didn't want to go in this direction, and Vitalik Buterin began to re-work his proposal into another project named ",(0,o.kt)("em",{parentName:"p"},"Ethereum")," (December 2013). The interest into ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decentralized_autonomous_organization"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("strong",{parentName:"em"},"D"),"ecentralized ",(0,o.kt)("strong",{parentName:"em"},"A"),"utonomous ",(0,o.kt)("strong",{parentName:"em"},"O"),"rganizations")),' (or DAO) drove the need for even more complex scripts. A "DAO" is a form of investor-directed venture capital fund that no blockchain could so far implement. It was also in December 2013 that Gavin Wood (protocol-side) and Jeffrey Wilcke (client-side) joined forces with Vitalik Buterin to work on Ethereum, and a ',(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/whitepaper/"},"white paper was first published in January 2014"),"."),(0,o.kt)("p",null,"In April 2014, Gavin Wood published a ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow paper"),". A yellow paper is a document containing research that has not yet been formally accepted or published in an academic journal. It usually contains unannotated statements with sufficient details to implement an idea. A white paper is an authoritative report or guide that informs readers concisely about a complex issue and presents the issuing body's philosophy on the matter."),(0,o.kt)("p",null,'Crowdfunding in bitcoins during the same summer took place, and Ethereum was launched on July 30th, 2015, with its own cryptocurrency called "',(0,o.kt)("em",{parentName:"p"},"Ether"),'".'),(0,o.kt)("p",null,"Ethereum was a revolution, a new generation of blockchain, thanks to its ",(0,o.kt)("strong",{parentName:"p"},"EVM")," (",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"Ethereum Virtual Machine"),"), a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Turing_completeness"},"Turing Complete"),' system able to solve any computation problem using its new low-level scripting language called "',(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/whitepaper/#code-execution"},(0,o.kt)("em",{parentName:"a"},"EVM Code")),'". Ethreum also provided a high-level language called "',(0,o.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},(0,o.kt)("em",{parentName:"a"},"Solidity")),'".'),(0,o.kt)("p",null,'The first DAO on Ethereum, simply called "',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/The_DAO_(organization)"},(0,o.kt)("em",{parentName:"a"},"The DAO")),'" was created, and more than 150 million US Dollars in Ethers were raised in June 2016. However, an error in a ',(0,o.kt)("em",{parentName:"p"},"smart contract")," (a program that was written in the Solidity language) ",(0,o.kt)("a",{parentName:"p",href:"https://www.nytimes.com/2016/06/18/business/dealbook/hacker-may-have-removed-more-than-50-million-from-experimental-cybercurrency-project.html"},"permitted a hacker to steal 50 million"),'. To recover the stolen funds, it was decided to modify the history of transactions. This decision was not approved by the entire community and it created a split of the history (this is called a "',(0,o.kt)("em",{parentName:"p"},"hard fork"),'", we will explain this concept later on) into two different blockchains: ',(0,o.kt)("em",{parentName:"p"},"Ethereum")," and ",(0,o.kt)("em",{parentName:"p"},"Ethereum Classic"),". The various technologies protect the history of a blockchain. It should be immutable (find more about this in the next chapter ",(0,o.kt)("a",{parentName:"p",href:"/blockchain-basics/main-properties#chained-data-structure"},"here"),"). Hence, the disapproval of a part of the community. ",(0,o.kt)("em",{parentName:"p"},"Ethereum Classic")," users chose to respect this immutability and so ",(0,o.kt)("strong",{parentName:"p"},"kept the theft")," in their blockchain history."),(0,o.kt)("p",null,"Today, Bitcoin and Ethereum remain the two main protocols with the most adoption, but many exciting alternatives have been created, notably Tezos in 2018."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A non-hexaustive timeline",src:n(6303).Z,title:"A non-exhaustive timeline"})),(0,o.kt)("small",{className:"figure"},"FIGURE 2: A non-exhaustive timeline"),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"blockchain")," is a particular type of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Distributed_ledger"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("strong",{parentName:"em"},"D"),"istributed ",(0,o.kt)("strong",{parentName:"em"},"L"),"edger ",(0,o.kt)("strong",{parentName:"em"},"T"),"echnology"))," (DLT), a consensus on replicated, shared, and synchronized digital information, geographically spread across multiple sites."),(0,o.kt)("p",null,"Not all blockchains are cryptocurrencies. For instance, ",(0,o.kt)("a",{parentName:"p",href:"https://www.corda.net/"},"Corda")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.hyperledger.org/use/fabric"},"Fabric")," are blockchains often used for immutable and cryptographically verified storage of data in various domains: Secure sharing of medical data, music royalties tracking, personal identity security, supply chain, logistics monitoring or voting mechanism, etc."),(0,o.kt)("p",null,"It is important not to confuse a cryptocurrency (first made to exchange value) with its supporting component: a ",(0,o.kt)("em",{parentName:"p"},"blockchain"),". Note that ",(0,o.kt)("strong",{parentName:"p"},"originally"),', the word "',(0,o.kt)("em",{parentName:"p"},"blockchain"),'" did ',(0,o.kt)("strong",{parentName:"p"},"not")," designate a technology, but the name of the ",(0,o.kt)("strong",{parentName:"p"},"data-structure")," used to store the data (find more about this in the next chapter ",(0,o.kt)("a",{parentName:"p",href:"/blockchain-basics/main-properties#chained-data-structure"},"here"),")."),(0,o.kt)("p",null,'The exact word "blockchain" doesn\'t even appear in the Bitcoin whitepaper but it ',(0,o.kt)("strong",{parentName:"p"},"now reflects the technology")," used to arrange and chain data to ensure ",(0,o.kt)("em",{parentName:"p"},"immutability")," and ",(0,o.kt)("em",{parentName:"p"},"cryptographic verifiability"),"."),(0,o.kt)("p",null,"Crypto-currencies have many essential characteristics of a currency:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They are scarce"),(0,o.kt)("li",{parentName:"ul"},"They can be accepted as units of account"),(0,o.kt)("li",{parentName:"ul"},"They can be accepted as stores of value"),(0,o.kt)("li",{parentName:"ul"},"They can be accepted as mediums of exchange")),(0,o.kt)("p",null,"However, exchanges of the units of account are directly programmable by a user."),(0,o.kt)("p",null,"To really create a distributed currency without a central authority, Satoshi Nakamoto had to solve the problem of double-spending ",(0,o.kt)("strong",{parentName:"p"},"in a large distributed environment")," which was no easy task, as we will see in the following chapters."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@noogin/the-financial-crisis-and-history-of-bitcoin-27ebdb932b99"},"https://medium.com/@noogin/the-financial-crisis-and-history-of-bitcoin-27ebdb932b99")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Subprime_mortgage_crisis"},"https://en.wikipedia.org/wiki/Subprime_mortgage_crisis")),(0,o.kt)("p",null,"[3]"," ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fractional-reserve_banking"},"https://en.wikipedia.org/wiki/Fractional-reserve_banking")),(0,o.kt)("p",null,"[4]"," ",(0,o.kt)("a",{parentName:"p",href:"https://bitcoin.org/bitcoin.pdf"},"https://bitcoin.org/bitcoin.pdf")),(0,o.kt)("p",null,"[5]"," ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/whitepaper/"},"https://ethereum.org/en/whitepaper/")))}m.isMDXComponent=!0},9111:function(e,t,n){t.Z=n.p+"assets/images/the-times-f72c1b1eced71f16223309aa147e954d.png"},6303:function(e,t,n){t.Z=n.p+"assets/images/timeline-38e1168dd53cae2ab5b8ae6a43c37511.svg"}}]);