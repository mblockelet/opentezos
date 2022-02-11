"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[1605],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2912:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r="root_2W3B",o=function(e){var t=e.children;return a.createElement("div",{className:r},t)}},4664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(2912),s=["components"],l={id:"private-indexer",disable_pagination:!0,title:"Private indexer",authors:"Benjamin Pilia"},p=void 0,c={unversionedId:"explorer/private-indexer",id:"explorer/private-indexer",title:"Private indexer",description:"The tools presented in this module so far are fully public: everyone can use them. However, they are meant",source:"@site/docs/explorer/private-indexer.md",sourceDirName:"explorer",slug:"/explorer/private-indexer",permalink:"/explorer/private-indexer",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/explorer/private-indexer.md",tags:[],version:"current",lastUpdatedBy:"Aymeric",lastUpdatedAt:1627830816,formattedLastUpdatedAt:"8/1/2021",frontMatter:{id:"private-indexer",disable_pagination:!0,title:"Private indexer",authors:"Benjamin Pilia"},sidebar:"docs",previous:{title:"Checkout your smart contract on TzStats",permalink:"/explorer/tzstats-smart-contract"},next:{title:"Exam",permalink:"/explorer/exam"}},d=[{value:"Installing the prerequisites",id:"installing-the-prerequisites",children:[],level:2},{value:"Launching Ganache",id:"launching-ganache",children:[],level:2},{value:"Migrating the <em>Raffle</em> contracts",id:"migrating-the-raffle-contracts",children:[],level:2},{value:"Watching activity on <em>TzStats</em>",id:"watching-activity-on-tzstats",children:[{value:"About big maps",id:"about-big-maps",children:[],level:3}],level:2},{value:"Watching activity from <em>TzIndex</em>",id:"watching-activity-from-tzindex",children:[],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The tools presented in this module so far are fully public: everyone can use them. However, they are meant\nfor public networks, and the user is dependent on the infrastructure and configuration of these services. Some\norganizations are more interested in deploying their private Tezos network, either for private testing before going\npublic or for entirely private use. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/private"},"Private blockchain module")," for more info. Therefore, it is\npossible to use an indexer on private networks."),(0,o.kt)("p",null,"Fortunately, many public developments on Tezos are open-source and can easily be adapted for a private network, i.e. an indexer can be deployed and configured to watch a private network."),(0,o.kt)("p",null,"In this chapter, we will see how the source code of ",(0,o.kt)("em",{parentName:"p"},"TzIndex")," and ",(0,o.kt)("em",{parentName:"p"},"TzStats")," can be used to make a private indexer,\neither for use on a private network or a public network."),(0,o.kt)("p",null,"This chapter is divided into three parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"how to quickly set up a private network."),(0,o.kt)("li",{parentName:"ul"},"how to install and configure these tools"),(0,o.kt)("li",{parentName:"ul"},"how to use them")),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We will simulate a private network that will be indexed by ",(0,o.kt)("em",{parentName:"p"},"TzIndex"),". Therefore, this private network should hold the basic expected elements on any network:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a few funded accounts"),(0,o.kt)("li",{parentName:"ul"},"a smart contract"),(0,o.kt)("li",{parentName:"ul"},"some operations")),(0,o.kt)("p",null,"Let's start by setting up a private network. The process is quite difficult as it requires starting and configuring\nTezos nodes (please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/private"},"Private Blockchain module")," for more info). Instead, let's choose an easier\nway by only simulating a private network using ",(0,o.kt)("em",{parentName:"p"},"Ganache"),", a node module used for tests and simulations of Tezos and\nEthereum blockchains. ",(0,o.kt)("em",{parentName:"p"},"Ganache")," launches the ",(0,o.kt)("a",{parentName:"p",href:"https://assets.tqtezos.com/docs/setup/2-sandbox/"},"Flextesa docker image"),", which runs Tezos nodes, bakers and endorsers in a sandbox environment.\nIt also provides ten funded accounts from the start."),(0,o.kt)("p",null,"Let's use the ",(0,o.kt)("em",{parentName:"p"},"Raffle")," smart contract from the ",(0,o.kt)("a",{parentName:"p",href:"/ligo/contracts-ligo"},"LIGO module")," and migrate it onto our private\nnetwork using the ",(0,o.kt)("em",{parentName:"p"},"Truffle")," configuration from the ",(0,o.kt)("a",{parentName:"p",href:"/dapp"},"Build a Dapp module"),"."),(0,o.kt)("h2",{id:"installing-the-prerequisites"},"Installing the prerequisites"),(0,o.kt)("p",null,"The complete source code of the raffle contract can be\nfound ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bepi-octo/raffle-smart-contract.git"},"here"),"."),(0,o.kt)("p",null,"It contains a ganache configuration (with predefined accounts), three smart contracts and their associated migrations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the first contract holds a big map and does not do anything. This dummy contract is used to bypass a ",(0,o.kt)("em",{parentName:"li"},"TzStats")," bug\nregarding big maps: the first big map (whose index is 0) is not fetched by the frontend."),(0,o.kt)("li",{parentName:"ol"},"a raffle contract using a map"),(0,o.kt)("li",{parentName:"ol"},"a raffle using a big map")),(0,o.kt)("p",null,"The second and third smart contracts will highlight the difference between the way maps and big maps are handled by indexers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd examples/explorer\n$ npm install -g truffle@tezos\n$ npm install \n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzIndex")," is written in ",(0,o.kt)("em",{parentName:"p"},"Go"),", a statically typed compiled programming language developed by ",(0,o.kt)("em",{parentName:"p"},"Google"),". Install it using\nthe instructions at ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"golang.org/doc/install"),"."),(0,o.kt)("p",null,"The next action is to install the docker images of ",(0,o.kt)("em",{parentName:"p"},"TzIndex"),". Install ",(0,o.kt)("em",{parentName:"p"},"Docker")," using the instructions\nat ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docs.docker.com/get-docker/"),"."),(0,o.kt)("h2",{id:"launching-ganache"},"Launching Ganache"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", one script is defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n"start-sandbox": "ganache-cli --flavor tezos --seed alice"\n}\n')),(0,o.kt)(i.Z,{mdxType:"NotificationBar"},(0,o.kt)("p",null,"The npm repository of ganache can be found ",(0,o.kt)("a",{href:"https://www.npmjs.com/package/ganache-cli/v/6.4.2"},"here"),": There are several versions of `ganache-cli`. Only the versions suffixed by `-tezos` support the Tezos blockchain (you can find them under the versions tab). The specific version used in the project can be found in the `devDependencies` section in `package.json`. When this article was written, the version was ",(0,o.kt)("a",{href:"https://www.npmjs.com/package/ganache-cli/v/6.12.1-tezos.0"},"6.12.1-tezos.0"))),(0,o.kt)("p",null,"This script starts a simulated private Tezos blockchain with ",(0,o.kt)("em",{parentName:"p"},"ganache"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run start-sandbox\nGanache CLI v6.12.1-tezos.0 (ganache-core: 2.13.2-tezos.2)\n\nAvailable Accounts\n==================\nalice 100 TEZ\n  pk: edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn\n  pkh: tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\nbob 100 TEZ\n  pk: edpkurPsQ8eUApnLUJ9ZPDvu98E8VNj4KtJa1aZr16Cr5ow5VHKnz4\n  pkh: tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6\neve 100 TEZ\n  pk: edpku9qEgcyfNNDK6EpMvu5SqXDqWRLuxdMxdyH12ivTUuB1KXfGP4\n  pkh: tz1MnmtP4uAcgMpeZN6JtyziXeFqqwQG6yn6\nmallory 100 TEZ\n  pk: edpkujwsG5JMrWVXQwmRMBoR9yJkokRbn6wy3monpQKBpnZTs1ogRR\n  pkh: tz1R2oNqANNy2vZhnZBJc8iMEqW79t85Fv7L\ntrent 100 TEZ\n  pk: edpkukjpYWLPEavoTXid8KqfYAY4J1rqtbWHWrzp22FgdRQqzaRkDD\n  pkh: tz1TfRXkAxbQ2BFqKV2dF4kE17yZ5BmJqSAP\nmarketa 100 TEZ\n  pk: edpktiaGKkt8Yu6m4Gse2GhMdJCVdCtcrjtqATn3y3sf7xTBDj5g2a\n  pkh: tz1fhigafd7PQAh3JBvq7efZ9g6cgBkaimJX\neulalie 100 TEZ\n  pk: edpkvCvic2obeedM7oMJaeyapEafg4dSdYuWvkZigKbcvc64q6ZKM7\n  pkh: tz1fEqJ6rD3mfQjVat7G6XJP522V6V8wWTP2\nstella 100 TEZ\n  pk: edpkvRuciP6vZeoXn1KJtBuEEtaD2SpHW59wbbCGt1SEDBL94W7AUE\n  pkh: tz1i3eqdPNs9zjpavVBFcF8JarJUgEErfsUK\ncarline 100 TEZ\n  pk: edpktxefxf3dtJEQLVb72MjV8yMiLh6DfCgNJQUV81rnsYJoZhbnK8\n  pkh: tz1PQP815EzZRktgLaEhtDCR22kiRrcQEurw\ntabbie 100 TEZ\n  pk: edpkvXobE6tQLdsm3kPu3MYT2z2XrgVchfkK2WPB9tniNXdWSRyud3\n  pkh: tz1WP3xUvTP6vUWLRnexxnjNTYDiZ7QzVdxo\n\n<...>\n")),(0,o.kt)("p",null,"Notice all the funded accounts created by ",(0,o.kt)("em",{parentName:"p"},"Ganache"),"."),(0,o.kt)("h2",{id:"migrating-the-raffle-contracts"},"Migrating the ",(0,o.kt)("em",{parentName:"h2"},"Raffle")," contracts"),(0,o.kt)("p",null,"The contracts can be migrated onto the private network. More details can be found about the ",(0,o.kt)("em",{parentName:"p"},"Truffle")," tool in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/dapp"},"Build a Dapp module"),"."),(0,o.kt)("p",null,"First, the private network has to be defined in the ",(0,o.kt)("em",{parentName:"p"},"truffle-config.js")," file. A ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," subsection should be found\nunder the ",(0,o.kt)("inlineCode",{parentName:"p"},"networks")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    development: {\nhost: "http://localhost",\nport: 8732,\nnetwork_id: "*",\nsecretKey: alice.sk,\ntype: "tezos"\n}\n')),(0,o.kt)("p",null,"It defines a localhost network, matching the ganache private network."),(0,o.kt)("p",null,"We're going to use the accounts from the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/sandbox/account.js")," file. Our three contracts can now be migrated with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ truffle migrate --network development\n")),(0,o.kt)("p",null,"Three contracts are now deployed onto our private network:"),(0,o.kt)("p",null,"The migration files also include some operations to open a raffle and buy a ticket automatically once the contracts are\ndeployed."),(0,o.kt)(i.Z,{mdxType:"NotificationBar"},(0,o.kt)("p",null,"The same smart contract is deployed twice: one with _maps_ and the other with _big maps_. Later on, these two smart contracts will be used to highlight the difference between the processing of _maps_ and _big maps_ by _TzStats_.")),(0,o.kt)("h1",{id:"setting-up-a-private-indexer-tzindex"},"Setting up a private indexer (",(0,o.kt)("em",{parentName:"h1"},"TzIndex"),")"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzIndex")," is an open-source indexer: it can freely be used and modified. The source code is available\nat ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockwatch-cc/tzindex"},"github.com/blockwatch-cc/tzindex")),(0,o.kt)("p",null,"To start the application, proceed as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/blockwatch-cc/tzindex\n$ cd tzindex\n$ make build\n$ ls tzindex\n")),(0,o.kt)("p",null,'The last command should output "tzindex" (to check if a tzindex has indeed been built)\nA ',(0,o.kt)("em",{parentName:"p"},"TzIndex")," binary is created in the same directory. The indexer can now watch the private network with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./tzindex run --rpcurl 127.0.0.1:8732 --notls --enable-cors\n")),(0,o.kt)("p",null,"Note the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"--rpcurl"),": url of the ganache private network rpc node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"--notls"),": option to use ",(0,o.kt)("em",{parentName:"li"},"http")," instead of ",(0,o.kt)("em",{parentName:"li"},"https")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"--enable-cors"),": ",(0,o.kt)("em",{parentName:"li"},"TzIndex")," API will be queried by ",(0,o.kt)("em",{parentName:"li"},"Tzstat")," (exposed on a different port): CORS need to be enabled")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzIndex")," now exposes its API on http://localhost:8000."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"db/")," folder is created when launching ",(0,o.kt)("em",{parentName:"p"},"TzIndex")," for the first time: it contains all the data indexed about the\nprivate network."),(0,o.kt)(i.Z,{mdxType:"NotificationBar"},(0,o.kt)("p",null,"When restarting ganache, a blank new network is created. The `db/` folder, containing the old data has to be removed in order to make _TzIndex_ index the new network.")),(0,o.kt)("h1",{id:"setting-up-a-private-explorer-tzstats"},"Setting up a private explorer (",(0,o.kt)("em",{parentName:"h1"},"TzStats"),")"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzStats")," is the open-source frontend made to display the data from ",(0,o.kt)("em",{parentName:"p"},"TzIndex"),". The source code is available\nat ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockwatch-cc/tzstats"},"github.com/blockwatch-cc/tzstats")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzStats")," can interact with ",(0,o.kt)("em",{parentName:"p"},"TzIndex")," by setting the ",(0,o.kt)("em",{parentName:"p"},"TZSTATS_API_URL")," variable to the url of the ",(0,o.kt)("em",{parentName:"p"},"TzIndex")," API."),(0,o.kt)("p",null,"The application can be launched with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/blockwatch-cc/tzstats\n$ cd tzstats\n$ echo 'TZSTATS_API_URL=http://localhost:8000' > development.env\n$ npm install\n$ yarn start\n")),(0,o.kt)(i.Z,{mdxType:"NotificationBar"},(0,o.kt)("p",null,'An error might occur during the npm install: ```shell /bin/sh: 1: sass: not found ``` If so, modify the `sass` field under `scripts` in the `package.json` file as follows: ```json "sass": "npx sass src/styles/scss/index.scss:src/styles/css/index.css" ``` Then run `npm install` again.')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzStats")," will now launch in your web browser."),(0,o.kt)("h1",{id:"interacting-with-the-private-explorer"},"Interacting with the private explorer"),(0,o.kt)("p",null,"At this point, the working context is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a simulated private network running through Ganache"),(0,o.kt)("li",{parentName:"ul"},"three migrated contracts"),(0,o.kt)("li",{parentName:"ul"},"two contract calls"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"TzIndex")," indexing the private network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"TzStats")," connected to ",(0,o.kt)("em",{parentName:"li"},"TzIndex"),", and running")),(0,o.kt)("p",null,"This means that there has already been some activity that we can watch on our network."),(0,o.kt)("h2",{id:"watching-activity-on-tzstats"},"Watching activity on ",(0,o.kt)("em",{parentName:"h2"},"TzStats")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TzStats")," is running at http://localhost:3000:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1290).Z,title:"Welcome page of a private tzstats"})),(0,o.kt)("p",null,"Notice that the frontend is different from its public version on ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/"},"TzStats.com")," but the inner\nworkings are the same."),(0,o.kt)("p",null,"On top, the search bar allows you to search for transactions, blocks, addresses, etc. The left panel contains various information displayed, such as the number of baked blocks."),(0,o.kt)("p",null,"Click on it to get more info on that block:\n",(0,o.kt)("img",{src:n(7993).Z,title:"Block details page"})),(0,o.kt)("p",null,"Many block details are displayed; most of them can be clicked on for even more info. The block above only contains one\noperation, which is a call to our smart contracts. Click the hash to open the operation page:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4958).Z,title:"Smart contract call details page"})),(0,o.kt)("p",null,"The sender does match Alice's ",(0,o.kt)("inlineCode",{parentName:"p"},"pkh")," from ",(0,o.kt)("em",{parentName:"p"},"scripts/sandbox/account.js"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"pkh")," means public key hash: it is an address on a Tezos network.\nNotice the contract address matches the returned address from the migration output logs."),(0,o.kt)("p",null,"Click on the address to inspect the smart contract:\n",(0,o.kt)("img",{src:n(8473).Z,title:"Smart contract details page"})),(0,o.kt)("p",null,"You can see the history of calls, the entrypoints, the storage, etc. Notice the two calls made by ",(0,o.kt)("em",{parentName:"p"},"Truffle"),": the\norigination of the contract and the purchase of a ticket."),(0,o.kt)("p",null,"The storage page displays the storage definition, the type of each field and their associated current value. Note that\none participant is registered in the raffle and the contract holds one Tez (from selling one ticket).\n",(0,o.kt)("img",{src:n(813).Z,title:"Smart contract storage page"})),(0,o.kt)("h3",{id:"about-big-maps"},"About big maps"),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("em",{parentName:"p"},"sold_tickets")," ",(0,o.kt)("em",{parentName:"p"},"big map")," should hold an ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," as value, but it displays ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," in the storage. Indeed,\nsince ",(0,o.kt)("em",{parentName:"p"},"big maps")," are meant to hold unbounded lists of data, they cannot be loaded directly into the storage (out of\nperformance concerns). Each ",(0,o.kt)("em",{parentName:"p"},"big map")," is indexed and the number ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," being displayed is the index number of the ",(0,o.kt)("em",{parentName:"p"},"big map"),"\n. Its data can actually be accessed by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bigmap 1")," section."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6628).Z,title:"Big map section"})),(0,o.kt)("p",null,"Regular ",(0,o.kt)("em",{parentName:"p"},"maps")," are meant to be used with limited data size as the data is directly retrieved from the storage section.\nYou can see an example of such a ",(0,o.kt)("em",{parentName:"p"},"map")," in the second migrated smart contract (baked in the fourth block):"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8255).Z,title:"Storage page"})),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"TzStats")," interface is user-friendly and every piece of information can easily be read by clicking on each\nelement. Remember that all this information is coming from the data retrieved by the indexer: ",(0,o.kt)("em",{parentName:"p"},"TzStats")," just displays\nthem."),(0,o.kt)("h2",{id:"watching-activity-from-tzindex"},"Watching activity from ",(0,o.kt)("em",{parentName:"h2"},"TzIndex")),(0,o.kt)("p",null,"The same pieces of information can be retrieved without the frontend by just using the ",(0,o.kt)("em",{parentName:"p"},"TzIndex")," API. For each page\nopened on ",(0,o.kt)("em",{parentName:"p"},"TzStats"),", an API call is made to ",(0,o.kt)("em",{parentName:"p"},"TzIndex"),". Each API call can be seen in the network explorer by pressing F12\nin the network section."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6244).Z,title:"Retrieving the API call"})),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"request URL")," shows the called API endpoints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ GET http://127.0.0.1:8000/explorer/contract/KT1HJ8VJ9rHkoi4FfzHPburSe1VdYn8AU4AF?\n{\n  "address": "KT1HJ8VJ9rHkoi4FfzHPburSe1VdYn8AU4AF",\n  "manager": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",\n  "delegate": "",\n  "height": 6,\n  "fee": 0.003939,\n  "gas_limit": 12826,\n  "gas_used": 12726,\n  "gas_price": 0.30952,\n  "storage_limit": 2654,\n  "storage_size": 2397,\n  "storage_paid": 2397,\n  "is_funded": true,\n  "is_vesting": false,\n  "is_spendable": false,\n  "is_delegatable": false,\n  "is_delegated": false,\n  "first_in": 7,\n  "first_out": 0,\n  "last_in": 7,\n  "last_out": 0,\n  "first_seen": 6,\n  "last_seen": 7,\n  "delegated_since": 0,\n  "first_in_time": "2021-04-17T17:06:27Z",\n  "first_out_time": "0001-01-01T00:00:00Z",\n  "last_in_time": "2021-04-17T17:06:27Z",\n  "last_out_time": "0001-01-01T00:00:00Z",\n  "first_seen_time": "2021-04-17T17:06:26Z",\n  "last_seen_time": "2021-04-17T17:06:27Z",\n  "delegated_since_time": "0001-01-01T00:00:00Z",\n  "n_ops": 1,\n  "n_ops_failed": 0,\n  "n_tx": 1,\n  "n_delegation": 0,\n  "n_origination": 0,\n  "token_gen_min": 1,\n  "token_gen_max": 1,\n  "bigmap_ids": [\n    1\n  ],\n  "op_l": 3,\n  "op_p": 0,\n  "op_i": 0,\n  "iface_hash": "d30a2146",\n  "call_stats": [\n    1,\n    0,\n    0\n  ]\n}\n\n\n')),(0,o.kt)("p",null,"A lot of information is displayed, such as the contract's address, but some data is also missing, like the storage.\nAnother API call has to be made for that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ GET http://127.0.0.1:8000/explorer/contract/KT1HJ8VJ9rHkoi4FfzHPburSe1VdYn8AU4AF/storage?\n{\n  "meta": {\n    "contract": "KT1HJ8VJ9rHkoi4FfzHPburSe1VdYn8AU4AF",\n    "time": "2021-04-17T17:06:27Z",\n    "height": 7,\n    "block": "BLwCojKb2fv7Ph88kxMoYXeTRYdtavvzCNh3ZzsJNpfFgqq5ey8"\n  },\n  "value": {\n    "admin": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",\n    "close_date": "1618679185827",\n    "contract_name": "Raffle smart contract with big map",\n    "description": "",\n    "jackpot": "100",\n    "players": [\n      "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb"\n    ],\n    "raffle_is_open": "true",\n    "sold_tickets": "1",\n    "winning_ticket_number_hash": "00"\n  }\n}\n\n')),(0,o.kt)("p",null,"All the available endpoints can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#explorer-endpoints"},"tzstats.com/docs/api#explorer-endpoints")),(0,o.kt)("h1",{id:"setting-up-a-private-indexer-for-a-public-network"},"Setting up a private indexer for a public network"),(0,o.kt)("p",null,"If you don't want your infrastructure to rely on third-party public indexers to monitor public networks, you can also use a local indexer. It just has to monitor a node: either a local node, or a public node (listed at ",(0,o.kt)("a",{parentName:"p",href:"https://tezostaquito.io/docs/rpc_nodes/"},"tezostaquito.io/docs/rpc_nodes"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./tzindex run --rpcurl <node_url> --notls --enable-cors\n")),(0,o.kt)("p",null,"There are three operation modes, which retrieve more or less data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Full regular"),": all indexes are built (default mode)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Light light-weight"),": consensus and governance indexes are not built (use ",(0,o.kt)("em",{parentName:"li"},"--light")," in the CLI)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Validate"),": state validation mode for checking accounts and balances at each block/cycle (use ",(0,o.kt)("em",{parentName:"li"},"--validate")," in the CLI)")),(0,o.kt)("p",null,"Note that whichever mode your choose, indexing a public network will take a significant amount of time due to the size of data to be\nfetched. "),(0,o.kt)("p",null,"According to the ",(0,o.kt)("em",{parentName:"p"},"Tzstats")," team, it is possible to index 13 000 blocks per minute from a local node connected to the mainnet (",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/"},"Cost and benefice section from this tzstats post"),"). When indexing the mainnet from a public node (",(0,o.kt)("em",{parentName:"p"},"Smartpy")," node on our case), we could index about 10 blocks per seconde. "),(0,o.kt)("p",null,"The mainnet was about 1 400 000 blocks, so to index the mainnet, it should take:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"about an hour and fifty minutes from a local node"),(0,o.kt)("li",{parentName:"ul"},"about a day and a half from a public node. ")),(0,o.kt)("p",null,"Of course, these figures depend on your network connectivity and hardware."),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Running a private network does not condemn its user to be blind to whatever is happening on their network: private\nindexers and explorers can be set up to index and monitor a private network."),(0,o.kt)("p",null,"Public networks (mainnet, testnets) are indexed by public tools (","[https://tzstats.com/]"," for instance). However, some use cases may required not to rely on third party services: private indexers and explorers can be used to that purpose."),(0,o.kt)("p",null,"Finally, indexers, since they expose a complete API, can be used to replace libraries (such as ",(0,o.kt)("a",{parentName:"p",href:"https://tezostaquito.io/"},"Taquito"),") or\nwallets. Decentralised apps can take advantage of these API calls to fetch data from a Tezos network, especially when it comes down to big maps."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://assets.tqtezos.com/docs/setup/2-sandbox/"},"https://assets.tqtezos.com/docs/setup/2-sandbox/")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#explorer-endpoints"},"https://tzstats.com/docs/api#explorer-endpoints")),(0,o.kt)("p",null,"[3]"," ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"https://golang.org/doc/install")),(0,o.kt)("p",null,"[4]"," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,o.kt)("p",null,"[5]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tezostaquito.io/docs/rpc_nodes/"},"https://tezostaquito.io/docs/rpc_nodes/")),(0,o.kt)("p",null,"[6]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tezostaquito.io/"},"https://tezostaquito.io/")),(0,o.kt)("p",null,"[7]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/"},"https://tzstats.com/")),(0,o.kt)("p",null,"[8]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/"},"https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/")))}h.isMDXComponent=!0},1290:function(e,t,n){t.Z=n.p+"assets/images/tzstat-1-5333ef49d7554b152eb60a528dcf233b.png"},7993:function(e,t,n){t.Z=n.p+"assets/images/tzstat-2-b5c281fa7c09fb6b1fd98579e5b09dd4.png"},4958:function(e,t,n){t.Z=n.p+"assets/images/tzstat-3-730c9078e8851ade4c545b5e2b8f0717.png"},8473:function(e,t,n){t.Z=n.p+"assets/images/tzstat-4-e878a50eb58f6ea2a85bb999e9e4c4b1.png"},813:function(e,t,n){t.Z=n.p+"assets/images/tzstat-5-5b336bee4b019288dcb1d8cc9c44046b.png"},6628:function(e,t,n){t.Z=n.p+"assets/images/tzstat-6-7ed14329238212ca4432bfbd38d362eb.png"},8255:function(e,t,n){t.Z=n.p+"assets/images/tzstat-7-65e1d75e00f7f72205da60973a5f0a35.png"},6244:function(e,t,n){t.Z=n.p+"assets/images/tzstat-8-09e22e1251e10ac3034d2a8a00a2d7ee.png"}}]);