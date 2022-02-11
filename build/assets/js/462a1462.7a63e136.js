"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[5098],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2912:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o="root_2W3B",i=function(e){var t=e.children;return n.createElement("div",{className:o},t)}},1013:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return p},default:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),s=a(2912),r=["components"],l={id:"proof-of-work",disable_pagination:!0,title:"Proof-of-work",author:"Aymeric Bethencourt"},c=void 0,h={unversionedId:"blockchain-basics/proof-of-work",id:"blockchain-basics/proof-of-work",title:"Proof-of-work",description:"Proof-of-work was the first fully functional blockchain consensus mechanism ever created. It is still in use by Bitcoin and many other blockchains. It requires its users to mine to get a chance to earn a reward for validating blocks of transactions. In this chapter, we will look into the technical side of things and how mining works.",source:"@site/docs/blockchain-basics/proof-of-work.md",sourceDirName:"blockchain-basics",slug:"/blockchain-basics/proof-of-work",permalink:"/blockchain-basics/proof-of-work",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/blockchain-basics/proof-of-work.md",tags:[],version:"current",lastUpdatedBy:"Aymeric",lastUpdatedAt:1628108608,formattedLastUpdatedAt:"8/4/2021",frontMatter:{id:"proof-of-work",disable_pagination:!0,title:"Proof-of-work",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:'Main properties of the first "blockchain"',permalink:"/blockchain-basics/main-properties"},next:{title:"Introduction to other consensus algorithms",permalink:"/blockchain-basics/other-consensuses"}},p=[{value:"Hash",id:"hash",children:[],level:2},{value:"Block",id:"block",children:[],level:2},{value:"Blockchain",id:"blockchain",children:[],level:2},{value:"Distributed",id:"distributed",children:[],level:2},{value:"Transactions&#39; immutable history",id:"transactions-immutable-history",children:[],level:2},{value:"Coinbase &amp; Mining",id:"coinbase--mining",children:[],level:2},{value:"Keys inside Transactions inside Blocks",id:"keys-inside-transactions-inside-blocks",children:[],level:2},{value:"Signatures inside Transactions inside Blocks",id:"signatures-inside-transactions-inside-blocks",children:[],level:2},{value:"Transaction Data",id:"transaction-data",children:[],level:2},{value:"Complete PoW blockchain",id:"complete-pow-blockchain",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"About Energy consumption",id:"about-energy-consumption",children:[],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Proof-of-work")," was the first fully functional blockchain consensus mechanism ever created. It is still in use by Bitcoin and many other blockchains. It requires its users to ",(0,i.kt)("em",{parentName:"p"},"mine")," to get a chance to earn a reward for validating blocks of transactions. In this chapter, we will look into the technical side of things and how mining works."),(0,i.kt)("p",null,"We will see that blockchain technology is a brilliant assembly of cryptographic technical bricks that already existed for many years or even several decades for some. The beauty of the blockchain is to have been able to organize these bricks in a coherent way to create a decentralized and secure data exchange system."),(0,i.kt)("h2",{id:"hash"},"Hash"),(0,i.kt)("p",null,"Let's start with the basics: the ",(0,i.kt)("strong",{parentName:"p"},"hash"),". A hash is a hexadecimal number calculated from a set of data. In a way, it is similar to a unique fingerprint used to identify the initial data quickly. There are several hash functions. The most common is ",(0,i.kt)("em",{parentName:"p"},"SHA256"),", used among others by Bitcoin. The ",(0,i.kt)("em",{parentName:"p"},"SHA256"),' algorithm transforms any string of characters into a hexadecimal number of 64 characters (or 256 bits). For example, fig. 1 shows the hash of the small string "Cake" and fig. 2 shows the hash of a longer string. Note that the two hashes are completely different, but both are 64 characters long.'),(0,i.kt)("p",null,"In the same way, you could enter all the books from a library or nothing at all (empty string), and you would still get a hash of 64 hexadecimal characters. Note that you will always have the same hash for two identical strings. You will always have two different hashes for two different strings except for very few statistically improbable collisions. This allows you to quickly verify that the initial data has not been modified, or else the hash would have changed. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5014).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 1: The hash of a small string of characters"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5766).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 2: The hash of a large string"),(0,i.kt)(s.Z,{mdxType:"NotificationBar"},(0,i.kt)("p",null,(0,i.kt)("p",null,"You have probably already used a hash in your life without knowing it. Indeed, when you download a file on your computer, some browsers check the hash of the downloaded file and compare it to the hash announced by the source before download. If the two hashes match, it means that the file you have downloaded is a perfect match to the one intended to be sent by the source. If the hashes don't match, your download has been corrupted. You can try this out manually by downloading the latest release of ",(0,i.kt)("em",{parentName:"p"},"Ubuntu"),", computing the hash of the downloaded file, and comparing it to the one announced on ",(0,i.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/how-to-verify-ubuntu#5-verify-the-sha256-checksum"},"their website"),"."))),(0,i.kt)("h2",{id:"block"},"Block"),(0,i.kt)("p",null,"A block is simply a structure containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"its block number"),(0,i.kt)("li",{parentName:"ul"},"some data"),(0,i.kt)("li",{parentName:"ul"},"an arbitrary number called ",(0,i.kt)("em",{parentName:"li"},"NONCE")," (diminutive of ",(0,i.kt)("em",{parentName:"li"},"Number used ONCE")," )"),(0,i.kt)("li",{parentName:"ul"},"and the hash of all these data")),(0,i.kt)("p",null,'Fig. 3 shows an example of a block. Notice that the hash of the block starts with "',(0,i.kt)("em",{parentName:"p"},"d8ca"),'". So far, this block is considered ',(0,i.kt)("em",{parentName:"p"},"invalid"),". There are different rules for validating a block depending on the chosen blockchain. Most blockchains use ",(0,i.kt)("em",{parentName:"p"},"Proof-of-Work"),", which consists in proving that validation's work has been done on the block."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8787).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 3: The hash of DATA, NONCE and block number does not start with 000: The block is invalid."),(0,i.kt)("p",null,"For example, a widely used validation rule is that the hash must start with ",(0,i.kt)("em",{parentName:"p"},"000"),'. Therefore, the block will have to be "mined"; that is to say, it will be necessary to find a suitable ',(0,i.kt)("em",{parentName:"p"},"NONCE")," such that the hash of the block (including the ",(0,i.kt)("em",{parentName:"p"},"NONCE"),") starts with ",(0,i.kt)("em",{parentName:"p"},"000"),". Note that this problem is arbitrary. Other consensus mechanisms choose to use a hash starting with ",(0,i.kt)("em",{parentName:"p"},"123")," or that the hash in base 10 is lower than 1000 (in the case of Ethereum). You just need a rule that proves that a validation work has been done on the block and that allows for the finding of one validator in the world (i.e., the first one to find a valid ",(0,i.kt)("em",{parentName:"p"},"NONCE"),"). When the rule is validated, the block is then valid."),(0,i.kt)("p",null,"In fig. 4, we have repeatedly incremented ",(0,i.kt)("em",{parentName:"p"},"NONCE"),' and calculated the hash of the block until we got a hash starting with "000". The duration of this process can vary significantly because each NONCE is ',(0,i.kt)("em",{parentName:"p"},"equally probable"),". In this case, we have incremented the ",(0,i.kt)("em",{parentName:"p"},"NONCE")," up to 29258. The block is now valid."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6232).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 4: The hash of DATA, NONCE and block number starts with 000, the block is signed"),(0,i.kt)(s.Z,{mdxType:"NotificationBar"},(0,i.kt)("p",null,(0,i.kt)("p",null,"  As a miner, you might want to try out random NONCE instead of incrementing it. As everyone in the world is in competition, anyone with a faster machine would always beat you to it. But when using random guesses, your chances are proportional to the amount of ",(0,i.kt)("em",{parentName:"p"},"hashing power")," you have compared to the rest of the world."))),(0,i.kt)("p",null,"Therefore, mining consists in calculating the hash of a block repeatedly until the validation rule is validated. This is why it is possible to create ",(0,i.kt)("em",{parentName:"p"},"ASICs")," (Application Specific Integrated Circuit) optimized for mining. For Bitcoin, ASICs integrate chips specifically designed to do only SHA256 and to find ",(0,i.kt)("em",{parentName:"p"},"NONCE")," very quickly ",(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[5]"),". "),(0,i.kt)("p",null,'Finally, note that if you try to modify anything in a validated block, it loses its validity because you change the hash of the block, and you would have to mine the block again to find a new hash starting with "000".'),(0,i.kt)("h2",{id:"blockchain"},"Blockchain"),(0,i.kt)("p",null,'You now have all the elements to understand what a blockchain is. It is simply a list of blocks where each block contains a reference to the previous block: a hash. They are, therefore, "chained". In fig. 5, you can see that block #2 contains all previously mentioned information in addition to ',(0,i.kt)("em",{parentName:"p"},"PREVH"),', the hash of the previous block, i.e., the hash of block #1. To validate block #2, you have to mine it to find a hash starting with "000"; then this hash is used in "',(0,i.kt)("em",{parentName:"p"},"PREVH"),'" in block #3, etc.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1920).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 5: A valid blockchain (all blocks are signed)"),(0,i.kt)("p",null,'If we change anything in a block, this block and all the following blocks lose their validity. Why? Because, if I change "good" by "bad" in block #2, the hash of block #2 changes, which changes "',(0,i.kt)("em",{parentName:"p"},"PREVH"),'" inside block #3, changing its own hash; would in turn changes "',(0,i.kt)("em",{parentName:"p"},"PREVH"),'" in block #4, changing its hash, and so on... This invalidates the whole blockchain after block #2. Therefore, it is straightforward to know if any information on a blockchain has been changed and in which block.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5566).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 6: An invalid blockchain (some blocks are not signed because of the data modification)"),(0,i.kt)("p",null,"Now you may be wondering: why not ",(0,i.kt)("em",{parentName:"p"},"re-hash all the invalidated blocks"),"? It is indeed possible to re-mine these blocks from the last valid block and revalidate the entire chain (see fig. 7)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2102).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 7: A valid blockchain again (all the blocks following the modification have been signed again)"),(0,i.kt)("p",null,"So can the blockchain be altered? No. Why?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Firstly, because mining a block requires a lot of computing power. For Bitcoin, it would take several ",(0,i.kt)("strong",{parentName:"p"},"years")," for your desktop computer to mine ",(0,i.kt)("strong",{parentName:"p"},"a few blocks"),", and the more you go back in time and modify an old block, the more blocks you would have to mine. Remember the previous chapter on data structure ",(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/main-properties#chained-data-structure"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Secondly, ",(0,i.kt)("em",{parentName:"p"},"and most importantly"),", the distributed nature of the blockchain makes it statistically impossible to rewrite its history: You would need to control more than half of the BFT network and go against the MAD property (see ",(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/main-properties#agreements-and-deflation"},"previous chapter"),")."))),(0,i.kt)("h2",{id:"distributed"},"Distributed"),(0,i.kt)("p",null,"Any blockchain needs to be distributed to be secured; that is to say that all the valid blocks have to be replicated on enough network nodes."),(0,i.kt)("p",null,"Like everyone else, you can use your computer as a node and mine with it. To do this, you need to download all the valid blocks so far. For Bitcoin, this already represents more than 330GB ",(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[6]"),"."),(0,i.kt)("p",null,"When any node in the world validates a new block (first to find a valid ",(0,i.kt)("em",{parentName:"p"},"NONCE"),"), ",(0,i.kt)("strong",{parentName:"p"},"it is added to the blockchain of all the other nodes using a ",(0,i.kt)("em",{parentName:"strong"},"gossip protocol")),(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[7]"),", ",(0,i.kt)("strong",{parentName:"p"},"so every node has an up-to-date blockchain"),". There are many nodes in the world, and they all have a complete copy of the blockchain."),(0,i.kt)("p",null,"Let's consider that a node decides to fraudulently modify a block. Fig. 8 shows a network of 3 nodes (",(0,i.kt)("em",{parentName:"p"},"A"),", ",(0,i.kt)("em",{parentName:"p"},"B"),", and ",(0,i.kt)("em",{parentName:"p"},"C"),'), which all have a copy of the blockchain. If "',(0,i.kt)("em",{parentName:"p"},"C"),' " decides to modify some data on the blockchain, this can be seen immediately by the other nodes (',(0,i.kt)("em",{parentName:"p"},"A")," and ",(0,i.kt)("em",{parentName:"p"},"B"),"), because the hash of the last block in their chain (",(0,i.kt)("em",{parentName:"p"},"000969..."),') is different from the hash of the last block of "',(0,i.kt)("em",{parentName:"p"},"C"),'" (',(0,i.kt)("em",{parentName:"p"},"dec59db..."),")."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4814).Z})),(0,i.kt)("small",{className:"figure"},'FIGURE 8: The blockchain is identical on all the nodes of the network except when a hacker tries to modify it. We see here that node "',(0,i.kt)("em",null,"C"),'" tries to modify the data of block #2'),(0,i.kt)("p",null,'Even if node "',(0,i.kt)("em",{parentName:"p"},"C"),'" ',(0,i.kt)("em",{parentName:"p"},"validated all of its blocks again")," as shown in fig. 9, the final hash (",(0,i.kt)("em",{parentName:"p"},"0004de..."),") is still different from the other nodes (",(0,i.kt)("em",{parentName:"p"},"000969..."),"). There is no way to change the data of a block while preserving the same final hash as the rest of the network. The incorrect blockchain no longer corresponds to the majority of the other nodes. This block will become an orphan and will not be integrated into the general ledger."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6280).Z})),(0,i.kt)("small",{className:"figure"},'FIGURE 9: Even if "',(0,i.kt)("em",null,"C"),'" re-mines all its block following its modification, the hash of the latest block still does not match the rest of the network.'),(0,i.kt)("p",null,'The only known way to corrupt Proof-of-Work is through the infamous "51% attack" ',(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[8]"),", which consists, for an attacker, to obtain more than 50% of the world's mining power, allowing him to rewrite the history (the technical details are explained ",(0,i.kt)("a",{parentName:"p",href:"https://hackernoon.com/ethereum-classic-attacked-how-does-the-51-attack-occur-a5f3fa5d852e"},"here"),")."),(0,i.kt)("p",null,"Fortunately, getting 51% of the world's mining power for a popular blockchain is very difficult. For instance, it would cost several billion in the case of Bitcoin. However, for less popular blockchains (with fewer nodes), this is quite doable and happens quite regularly ",(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[9]"),". Some blockchains are trying to solve this problem by implementing different consensus algorithms. This is the case for Tezos, as we will show in the following chapters."),(0,i.kt)("h2",{id:"transactions-immutable-history"},"Transactions' immutable history"),(0,i.kt)("p",null,'When we talk about "blockchains", we do not necessarily talk about "cryptocurrencies". "Blockchain" has been used for many non-financial applications ',(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[10]"),". Note that until now, the data stored in the blocks of our examples were simple strings. You can store any type of data: identities, electronic documents, insurance contracts, etc. Whenever it is necessary to have an ",(0,i.kt)("strong",{parentName:"p"},"immutable record"),", or a system of secure exchanges between parties without trust, or on an unsecured network, you should ask yourself whether or not a blockchain can and should be used."),(0,i.kt)("p",null,'In the case of a crypto-currency, we use the "DATA" field to store financial transactions, among other things. Figures 10 and 11 respectively show a block and a blockchain with transactions in "',(0,i.kt)("em",{parentName:"p"},"TX"),'" instead of "',(0,i.kt)("em",{parentName:"p"},"DATA"),'" (e.g., ',(0,i.kt)("em",{parentName:"p"},"$13 from John to Chris"),"). By ",(0,i.kt)("em",{parentName:"p"},'"',"$",'"'),', we denote a monetary value that is not necessarily dollars, but which could be any "coin" or "token", such as Bitcoin (BTC), Ethereum (ETH), etc.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3598).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 10: A block containing financial transactions (this is a simplified representation)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1491).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 11: A blockchain containing financial transactions"),(0,i.kt)("p",null,"However, in our example, how do we know that John has enough money to send Chris $13?"),(0,i.kt)("p",null,"The Bitcoin blockchain does not contain a ledger showing the balance of each account at all times. Instead, when John attempts to complete a transaction, the process will check history on the blockchain and calculate the difference between his ",(0,i.kt)("em",{parentName:"p"},"inbound")," transactions against all of his ",(0,i.kt)("em",{parentName:"p"},"outbound")," transactions and deduce how much money John can spend."),(0,i.kt)("h2",{id:"coinbase--mining"},"Coinbase & Mining"),(0,i.kt)("p",null,"You now understand how the blockchain can calculate each person's balance and whether or not to authorize their transactions. However, where does all this money come from in the first place? If we were to completely trace the blockchain all the way back to its first block, there would be a point where the money had to be created. If the users' balances are only calculated from transactions between users, there would be no creation of new tokens. Therefore there would be 0 bitcoin."),(0,i.kt)("p",null,'New bitcoins are generated by the blockchain itself when a new block is validated by Proof-of-Work. New tokens are created and given to the miner of the block. In fig. 12, assume that Chris is mining the block. You can see that $100 are created from scratch and given to Chris to thank him for investing his computational power and electricity into mining a block. This is called the "',(0,i.kt)("em",{parentName:"p"},"reward"),'" or "',(0,i.kt)("em",{parentName:"p"},"coinbase"),'" ("',(0,i.kt)("em",{parentName:"p"},"coinbase reward"),'" and "',(0,i.kt)("em",{parentName:"p"},"coinbase transaction"),'" are also used). Chris can then spend this money in the next block as if he had received it from another user. This process allows new tokens to be put into circulation in the same way that a central bank can print new banknotes. The advantage of a blockchain over a central bank is that the process is entirely autonomous, decentralized, and unalterable. Inflation on Bitcoin is fully known in advance, and it is not possible to have over-inflation. Currently, 17 million Bitcoin have been minted, namely offered as a coinbase. The maximum is 21 million, at which point the source code of Bitcoin shows that no more coinbase will ever be offered. The source of income for miners will then only be the transaction fees, but there is still some time as this will happen around 2140 due to the ever-increasing difficulty of mining ',(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[11]"),". Indeed, the Bitcoin protocol states that a new block must be mined on average every 10 minutes. As the total computational power put into bitcoin increased with more miners and more technological advancements, the average time to mine a block naturally lowers. Bitcoin compensates for this by increasing the mining difficulty. E.g., instead of finding a ",(0,i.kt)("em",{parentName:"p"},"nonce")," such that the hash of the block starts with three zeros, it may increase it to 4 zeros, making the whole process much longer and more difficult for the hardware.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2008).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 12: Block A gives a coinbase of $100 to Chris, which allows him to spend it in the next block"),(0,i.kt)(s.Z,{mdxType:"NotificationBar"},(0,i.kt)("p",null,"Note that the first block has no previous hash. Thus the ",(0,i.kt)("em",null,"PREVH")," is set to a series of zeros. The first block of any blockchain is called the ",(0,i.kt)("b",null,"genesis block"),".")),(0,i.kt)("p",null,"There is still one big issue in our blockchain schema so far. Please take a minute and try to identify it."),(0,i.kt)("p",null,"[...]"),(0,i.kt)("p",null,"Did you find it? Consider how the transactions are authenticated."),(0,i.kt)("p",null,"[...]"),(0,i.kt)("p",null,"Knowing that Chris has a positive balance of ","$",'100, could Jane add the transaction "',"$"," 40 from Chris to Jane\" herself in a new block without Chris ever giving his consent? At this point of the chapter, anyone seems to be able to spend anyone else's money!"),(0,i.kt)("h2",{id:"keys-inside-transactions-inside-blocks"},"Keys inside Transactions inside Blocks"),(0,i.kt)("p",null,'It is essential for the proper functioning of the crypto-money that only Chris can send the transaction "$40 from Chris to Jane". For that, we need to use one of the bases of modern cryptography, the ',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},(0,i.kt)("em",{parentName:"a"},"Public Key Cryptography"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},(0,i.kt)("em",{parentName:"a"},"Asymmetric Key Algorithm")),", which consists in a private key and a public key."),(0,i.kt)("p",null,"Fig. 13 shows a pair of keys. The private key is a very long, randomly generated number (you could create that number yourself by flipping a coin randomly a large number of times). A public key is a hexadecimal number that is calculated from the private key. It is possible to calculate the public key from the private key, but it is practically impossible to find the private key from the public key."),(0,i.kt)("p",null,"As the name suggests, ",(0,i.kt)("strong",{parentName:"p"},"the private key must be kept private"),". You should ",(0,i.kt)("strong",{parentName:"p"},"never")," share it with anyone. On the other hand, the public key can be accessible to anyone that wants to send you money (but keep in mind that this public key can then be linked to your data. You should use other generated public keys whenever possible)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7234).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 13: A private key that has been randomly generated and its associated public key computed from the asymetric key algorithm"),(0,i.kt)("h2",{id:"signatures-inside-transactions-inside-blocks"},"Signatures inside Transactions inside Blocks"),(0,i.kt)("p",null,"Now what's great with a ",(0,i.kt)("strong",{parentName:"p"},"private key")," is that you can sign a message that can be ",(0,i.kt)("strong",{parentName:"p"},"authenticated")," using only your ",(0,i.kt)("strong",{parentName:"p"},"public key and signature"),'. Indeed, fig. 14 shows first a signature generated by our private key for the message "I like cake!". Notice that if we change the message, the signature changes.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9824).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 14: Signing some data with a private key"),(0,i.kt)("p",null,"Let's send our message and signature to someone. That person can verify the authenticity of the message simply by finding our public key and applying the ",(0,i.kt)("em",{parentName:"p"},"cryptographic verification algorithm")," on the message and its signature."),(0,i.kt)("p",null,"Remember that the person ",(0,i.kt)("strong",{parentName:"p"},"does not have access to the private key"),', but using only the public key, the cryptographic algorithm will tell this person (see fig. 15): "Yes, this message has been written by the person that owns the private key, and the message has not been altered in any way".'),(0,i.kt)("p",null,'Or, in case of attempted identity theft or corrupted message (see fig. 16): "No, the signature is invalid, meaning that either the message has been altered or it\'s not the person that owns the corresponding private key that signed this message".'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3278).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 15: Thanks to the public key and the signature, anyone can verify that this data has indeed been sent by the holder of the private key associated with this public key..."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4781).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 16: ... Or inversely, that the data has been altered or does not come from the holder of the private key associated with this public key."),(0,i.kt)("h2",{id:"transaction-data"},"Transaction Data"),(0,i.kt)("p",null,'Instead of using a simple string of characters in the "DATA" field, let\'s use transactions and public keys. So, from now on, note that instead of using names, our transactions will use ',(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"public key")," of the sender"),", and ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"public key")," of the recipient"),'. Instead of "',"$",' 50 from Chris to Jane", we now have "',"$",' 50 from 0x4cf6... to 0x2f1f...".'),(0,i.kt)("p",null,"The sender then signs the transaction with his private key. See fig. 17 as an example."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9380).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 17: We sign our transaction with our private key"),(0,i.kt)("p",null,"Miners can now verify that the private key owner has indeed sent a transaction and that the amount and recipient have not been altered by any third party (fig. 18). Otherwise, the signature would be invalid."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(681).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 18: Miners verify that this transaction has been sent by the owner of the private key"),(0,i.kt)(s.Z,{mdxType:"NotificationBar"},(0,i.kt)("p",null,(0,i.kt)("p",null,"  Note that transactions do not actually use public keys in the ",(0,i.kt)("em",{parentName:"p"},"from")," and ",(0,i.kt)("em",{parentName:"p"},"to")," fields. They use ",(0,i.kt)("strong",{parentName:"p"},"addresses"),", which are hashed versions of the public keys. Because the public key is made up of an extremely long string of numbers, it is compressed and shortened to form the public address. That way, it is more easily readable and more secured as nobody can know your public key from your address."),(0,i.kt)("p",null,"  To sum up, the private key generates the public key, which, in turn, generates the public address."))),(0,i.kt)("h2",{id:"complete-pow-blockchain"},"Complete PoW blockchain"),(0,i.kt)("p",null,'Let\'s now modify our "insecure" blockchain diagram fig. 10 and add the signatures of each sender to their transaction.'),(0,i.kt)("p",null,"If a hacker tries to change anything, e.g., the value of the amount of a transaction, two things happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the block is no longer valid because the hash has changed, as seen previously")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the signature is no longer valid"))),(0,i.kt)("p",null,"The hacker could mine the block again to make it valid. However, he has no way of signing the transaction again without the private key of the sender. "),(0,i.kt)("p",null,"This is how transactions in the blockchain are protected by only allowing the sender to sign their transactions, and it works perfectly."),(0,i.kt)("p",null,"To recap, here is a complete schema of a block, a blockchain, and a blockchain network."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9199).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 19: A complete block"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1094).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 20: A complete blockchain"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2142).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 21: A complete and distributed blockchain network"),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"You can now understand why a PoW blockchain works so well for a fully secured system without the need for a bank or any centralized entity. All you need is a random number to create a private key and then a public key, and start receiving money. Note that public keys are pseudonymous and not anonymous: compare them to bank accounts numbers. We can still associate them with your official identity at some point. For instance, you will need to associate your public key or address with your identity documents if you want to exchange a cryptocurrency for fiat and transfer some money to your bank account."),(0,i.kt)("h2",{id:"about-energy-consumption"},"About Energy consumption"),(0,i.kt)("p",null,"You also now know that mining is nothing more than repeatedly trying random ",(0,i.kt)("em",{parentName:"p"},"nonce")," to solve a very arbitrary problem in the first place and obtain the coinbase reward. Everyone is basically in competition, and the more computational power and the electricity you use, the better your chances. This, unfortunately, has a detrimental effect on the environment. Bitcoin mining has recently passed 100 TWh ",(0,i.kt)("a",{parentName:"p",href:"/blockchain-basics/proof-of-work#references"},"[2]")," in energy consumption, more than entire countries like Switzerland (56 TWh) or Finland (84 TWh). All this just to find an arbitrary number that does nothing except selecting a person in the world to be the next validator. Isn't there a better alternative? Isn't there a consensus mechanism that would be more cooperative and less competitive? We're going to see in the next chapter a few examples of the so-called ",(0,i.kt)("em",{parentName:"p"},'"next generation" consensus algorithms')," (including the current consensus mechanism used by Tezos) that work just as well as ",(0,i.kt)("em",{parentName:"p"},"PoW")," but with much lower energy consumption."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"[1]"," ",(0,i.kt)("a",{parentName:"p",href:"https://andersbrownworth.com/blockchain/"},"https://andersbrownworth.com/blockchain/")),(0,i.kt)("p",null,"[2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://digiconomist.net/bitcoin-energy-consumption"},"https://digiconomist.net/bitcoin-energy-consumption")),(0,i.kt)("p",null,"[3]"," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_countries_by_electricity_consumption"},"https://en.wikipedia.org/wiki/List_of_countries_by_electricity_consumption")),(0,i.kt)("p",null,"[4]"," ",(0,i.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/how-to-verify-ubuntu#5-verify-the-sha256-checksum"},"https://ubuntu.com/tutorials/how-to-verify-ubuntu#5-verify-the-sha256-checksum")),(0,i.kt)("p",null,"[5]"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.bitmain.com/"},"https://www.bitmain.com/")),(0,i.kt)("p",null,"[6]"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.statista.com/statistics/647523/worldwide-bitcoin-blockchain-size/"},"https://www.statista.com/statistics/647523/worldwide-bitcoin-blockchain-size/")),(0,i.kt)("p",null,"[7]"," ",(0,i.kt)("a",{parentName:"p",href:"https://academy.bit2me.com/en/what-is-gossip-protocol/"},"https://academy.bit2me.com/en/what-is-gossip-protocol/")),(0,i.kt)("p",null,"[8]"," ",(0,i.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/what-is-a-51-percent-attack"},"https://academy.binance.com/en/articles/what-is-a-51-percent-attack")),(0,i.kt)("p",null,"[9]"," ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/hackernoon/the-history-of-51-attacks-and-the-implications-for-bitcoin-ec1aa0f20b94"},"https://medium.com/hackernoon/the-history-of-51-attacks-and-the-implications-for-bitcoin-ec1aa0f20b94")),(0,i.kt)("p",null,"[10]"," ",(0,i.kt)("a",{parentName:"p",href:"https://builtin.com/blockchain/blockchain-applications"},"https://builtin.com/blockchain/blockchain-applications")),(0,i.kt)("p",null,"[11]"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.blockchain.com/charts/difficulty"},"https://www.blockchain.com/charts/difficulty")))}d.isMDXComponent=!0},5766:function(e,t,a){t.Z=a.p+"assets/images/big_hash-d0296c8944f7588514d03523890e3fde.svg"},2008:function(e,t,a){t.Z=a.p+"assets/images/coinbase-9772177b916b2996def150c1892bae49.svg"},9199:function(e,t,a){t.Z=a.p+"assets/images/complete_block-c1906ebc1603cee3432bbbb668bc8037.svg"},1094:function(e,t,a){t.Z=a.p+"assets/images/complete_chain-31f83aac979b93b728325b768651e60a.svg"},2142:function(e,t,a){t.Z=a.p+"assets/images/complete_network-7f3329edde00d9f496822cbd9dff7150.svg"},8787:function(e,t,a){t.Z=a.p+"assets/images/invalid_block-4fb4828ecd8559173f0811aca2854358.svg"},5566:function(e,t,a){t.Z=a.p+"assets/images/invalid_chain-0df2f33a77666b8ebb1c1548e0f49b3d.svg"},4814:function(e,t,a){t.Z=a.p+"assets/images/invalid_node-39be357fe20548f5db2447e52bebec2a.svg"},6280:function(e,t,a){t.Z=a.p+"assets/images/invalid_node_remined-e17a2c80b14be46906adfb35b8648ccd.svg"},7234:function(e,t,a){t.Z=a.p+"assets/images/keys-58074539e05b6407a56a47c2c057e212.svg"},9824:function(e,t,a){t.Z=a.p+"assets/images/signature-9b9bd485a59a7bdcb65b7a72628e6d98.svg"},4781:function(e,t,a){t.Z=a.p+"assets/images/signature_false-33800d489060e658c214313ca2d7e329.svg"},3278:function(e,t,a){t.Z=a.p+"assets/images/signature_true-4ff9a0eb93ab387441cd2f9e01dc4c61.svg"},5014:function(e,t,a){t.Z=a.p+"assets/images/small_hash-7eb36b4ecb0a59a7eab03d5705e6aa2a.svg"},3598:function(e,t,a){t.Z=a.p+"assets/images/tx_block-0cecf8a674ce67fed3bba2df5df8bcba.svg"},1491:function(e,t,a){t.Z=a.p+"assets/images/tx_chain-aa9fa3b094684fd79cba03ae0d5bbacd.svg"},9380:function(e,t,a){t.Z=a.p+"assets/images/tx_signature-61135c75c9f95755d76ef04861a8bfab.svg"},681:function(e,t,a){t.Z=a.p+"assets/images/tx_signature_true-1bb27aea4ee53117b856031dc8c3b5f2.svg"},6232:function(e,t,a){t.Z=a.p+"assets/images/valid_block-3cf7e31279d8ae7e12d124955d725323.svg"},1920:function(e,t,a){t.Z=a.p+"assets/images/valid_chain-c490951867c49b9d06d73a68651c9c39.svg"},2102:function(e,t,a){t.Z=a.p+"assets/images/valid_chain_again-a25dccbb710f120e1ac40cf43268e79d.svg"}}]);