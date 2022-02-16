"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[1289],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return b}});var c=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,c,n=function(e,a){if(null==e)return{};var t,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var f=c.createContext({}),d=function(e){var a=c.useContext(f),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},i=function(e){var a=d(e.components);return c.createElement(f.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},p=c.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,f=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,u=p["".concat(f,".").concat(b)]||p[b]||s[b]||r;return t?c.createElement(u,l(l({ref:a},i),{},{components:t})):c.createElement(u,l({ref:a},i))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var f in a)hasOwnProperty.call(a,f)&&(o[f]=a[f]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return c.createElement.apply(null,l)}return c.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5926:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return f},metadata:function(){return d},toc:function(){return i},default:function(){return p}});var c=t(7462),n=t(3366),r=(t(7294),t(3905)),l=["components"],o={id:"unit-test",title:"Testing",authors:"Benoit Rognier"},f=void 0,d={unversionedId:"archetype/raffle-example/unit-test",id:"archetype/raffle-example/unit-test",title:"Testing",description:"This section presents the testing of the raffle contract.",source:"@site/docs/archetype/raffle-example/test.md",sourceDirName:"archetype/raffle-example",slug:"/archetype/raffle-example/unit-test",permalink:"/archetype/raffle-example/unit-test",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/archetype/raffle-example/test.md",tags:[],version:"current",lastUpdatedBy:"Mathias Hiron",lastUpdatedAt:1644867462,formattedLastUpdatedAt:"2/14/2022",frontMatter:{id:"unit-test",title:"Testing",authors:"Benoit Rognier"},sidebar:"docs",previous:{title:"Raffle contract",permalink:"/archetype/raffle-example/raffle-contract"},next:{title:"Contract Templates",permalink:"/archetype/examples"}},i=[{value:"Test scenario",id:"test-scenario",children:[],level:2},{value:"Mockup mode",id:"mockup-mode",children:[],level:2},{value:"Accounts",id:"accounts",children:[],level:2},{value:"Mockup time",id:"mockup-time",children:[],level:2},{value:"Raffle key chest",id:"raffle-key-chest",children:[],level:2},{value:"Test script",id:"test-script",children:[{value:"Deploy contract",id:"deploy-contract",children:[],level:3},{value:"Call an entrypoint",id:"call-an-entrypoint",children:[],level:3},{value:"Expect to fail",id:"expect-to-fail",children:[],level:3},{value:"Check Balance",id:"check-balance",children:[],level:3}],level:2}],s={toc:i};function p(e){var a=e.components,t=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,c.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section presents the testing of the raffle contract."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The code source of the raffle contract and the test scenario are available in this ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/completium/archetype-raffle"},"repository"),"."))),(0,r.kt)("h2",{id:"test-scenario"},"Test scenario"),(0,r.kt)("p",null,"The first time, run the following command to install the ",(0,r.kt)("a",{parentName:"p",href:"https://completium.com/docs/cli/jslibrary"},"Completium")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mocha"},"mocha")," libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,r.kt)("p",null,"Run the test with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,r.kt)("p",null,"The test scenario is made of 14 steps. Below is the trace returned by the command above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  Deploy\n    \u2714 Raffle\n\n  Open Raffle\n    \u2714 The unauthorized user Alice unsuccessfully calls 'open' entrypoint.\n    \u2714 Admin unsuccessfully calls 'open' entrypoint with wrong 'close_date'.\n    \u2714 Admin unsuccessfully calls 'open' entrypoint by sending not enough tez to the contract.\n    \u2714 Admin successfully calls 'open' entrypoint.\n    \u2714 Admin unsuccessfully calls 'open' entrypoint because a raffle is already open.\n\n  Test 'buy' entrypoint (at this point a raffle is open)\n    \u2714 Alice unsuccessfully calls 'buy' by sending a wrong amount of tez.\n    \u2714 Alice unsuccessfully calls 'buy' entrypoint because raffle is closed.\n    \u2714 Alice successfully calls 'buy' entrypoint.\n    \u2714 Alice unsuccessfully calls 'buy' entrypoint because she has already bought one.\n    \u2714 Jack successfully calls 'buy' entrypoint.\n\n  Test 'transfer_jackpot' entrypoint (at this point a raffle is open and two players participated)\n    \u2714 Alice unsuccessfully calls 'transfer_jackpot' entrypoint because it is before the 'close_date'.\n    \u2714 Alice unsuccessfully calls 'transfer_jackpot' entrypoint because of an invalid chest key.\n    \u2714 Alice successfully calls 'transfer_jackpot' entrypoint.\n    \u2714 Alice unsuccessfully calls 'transfer_jackpot' entrypoint because jackpot is already transferred.\n\n\n  15 passing (30s)\n")),(0,r.kt)("h2",{id:"mockup-mode"},"Mockup mode"),(0,r.kt)("p",null,"The Completium library allows running contracts on any network (mainnet, testnet, sandbox) but also in mockup mode."),(0,r.kt)("p",null,"Mockup mode runs contracts locally and quickly, so it is suitable for testing contracts. The following JS instruction activates the mockup mode within the test script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setEndpoint('mockup')\n")),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"The mockup mode comes with a set of preconfigured test accounts. You can add any test account with the ",(0,r.kt)("inlineCode",{parentName:"p"},"import faucet")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"generate")," CLI command."),(0,r.kt)("p",null,"Declare handlers to the required test accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const owner = getAccount('bootstrap1');\nconst alice = getAccount('alice');\nconst jack  = getAccount('bootstrap2');\n")),(0,r.kt)("h2",{id:"mockup-time"},"Mockup time"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setMockupNow")," function to set the contract 'now' value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const now = Math.floor(Date.now() / 1000)\nsetMockupNow(now)\n")),(0,r.kt)("h2",{id:"raffle-key-chest"},"Raffle key chest"),(0,r.kt)("p",null,"The raffle key used in this test is the integer ",(0,r.kt)("inlineCode",{parentName:"p"},"123456"),". The value is first packed (turned into bytes) before being timlocked with a number of iterations of 3600."),(0,r.kt)("p",null,"The following tezos client command packs the value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tezos-client-hangzhou hash data '123456' of type nat\nWarning:\n\n                 This is NOT the Tezos Mainnet.\n\n           Do NOT use your fundraiser keys on this network.\n\nRaw packed data: 0x050080890f\n")),(0,r.kt)("p",null,"We then use the Completium ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/completium/timelock-utils"},"timelock-utils")," tool to timelock the packed data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ timelock-utils --lock --data 050080890f --time 3600\n{\n  "chest":\n    "c5ecdde89eb8c1e7aaeb85abb8f5e5cef3b4fa80c4aee2fccbf0a78ce0debaa5e9ddede3ddfbd9abdea28cc7dc99e6d3a9baf3cbae9adaaabc89cbc39e97e2c7a6cba99197d19ba09ddfd181afc997ffbcc5acb2d29ecbb698c2cacbdd83d1b4ced0bffe9cd78295b3fba4d9f9d5f4d4ec9ad3c7e1a8eeb9dba5cbd8a2dbf29af8e4a4c1e4b1edacf98fccefaef9fea4f0bacdd38ecbfe81c3f9839b9e9ab8fbf5f1eabac48a9f8ca7c588eefe94d1f18bd9bcee9aecde8dd285cf9098f4e1a7eec787f3a0e0ff9cd0ce8ec5a2a4e5ecb08fce899eb5baa397fabf90de9397cebc81bbdfb386e6b4da9fd8fdd19ed9f8d684c782b0aacfeebae4f6e7d1c5c1e6a093c68081cf83b991b4ecd7b38aee92deddcad79eb9abe0a0a0c6b5909dc58495f69445fff5ae9cefe8b8beb2fb86ccf5c9ad91989bdad8a3cfbedaffa2de8bf19dc6ac8cbc8a9584fa9f85f9ba958fc6bbc09ac8e7d5f0fdb98b86c1c7d59ad7c6dfc2d2cefaf5d9db909bf0e3acd3ccc792bc9bccbab4a4febda9b685dbc39ea2a4a7b69990d3abd8b9b3d7dbc581b984f3e08a98f7f7f0e697cc8dfd88edc8c3ca8dc3b2a9ccf6cdd6d0efcc848bc8ead5858bbabfcfc1c8ecea84fd9b96a5e4eabb8c918dafe6f78d83e8e1c2e5f8ee88a4ee8dcaeeafffebfcbbfda1e9eb86c582f2eedd9299cbc0a7fce083ced8c8ddb0e7eaacb696c1fccdadcdc8e3c6f7b9de84eece9bb7919094fef4fdf6efd8b1ba8bbecb9380add4f59ddbf9a19f95facc84e9d0a99bfa93f1fcc3a0fbde9b9ce0c7e8dec6e8d1dfa7dda6f490bb9580abfdbcc0e202e5ff731c3c17d080ee430edd30979a47aa653656e11e593800000015c2ca2a23b732a72932611618ad9ea324986377591e"\n  "key":\n    "a0aceddfb3c9fbe1b8c382c7d5a7dedbe2e5adf9edcfc3e9d084caa6aeb9818ff1e985cb9efe8fa089ceeaa0f5d0bcb583e2f29196f2d3908fffffdcda868faffcb78fb697e7eaf3e7dca9d4b5dda2c3e4f8adf8abf484ecae85f7d6e0f2d28cb69af1d7b19082e8d8d7ba96e7e1e0bb8ac9b9fcf0a9e5b7c1a499c4faf4c8a3a9c8e4d09aa780eac6cee1b78a97a3e983abf9a5f1e8d2a2a2b5e3bcb8c4effeb7a3a68a85a497cd91c9a2c096c3f596deb8d1aca3a5aff28effb8cfc9c7ced892e3a7c09deeb8c8ec9387a3b384b5c8bccaafc7a9a2c1cfd8c7becfd7d6828a9af8f4988fe4ead3b59ecfb8ff8cabf8be90d4c8bdbddfce9cd7c2bb81edc4b7ad80a59a978f8c9debe7aaf08cf0c588f3eaade6b9f4e4e6edf1ed9c9988e48d9ba0aa8f01d18bac92b886db9dd798b5f6fdc891a28da2c4c48da1918897a2b7c2dfa0b78ab8e291b68fb1a2bfa5e8b88e9cabb0b5b0feabcffc9cfeee888ac4afeed9dc8bf5a4eaa9ae89a3838cf6cfd4f8acff8fa7aef7a9889fbbc7d8f6dde4edf3e58096e580e299e5b082b9cf85f3fe8ac6c0998eb1bcbab9bfb8fba39faea7bce0f6fed9ea86dfdad58cf7cbc7fcc4ecf7e2e898d3b19582e38c8092b7e4a0cddc83eb8bc38d91fefed6be869496b8e4fc99d5fae5c6a2b2dcabe2a4ea85b68b87b182d7e8cac29fe0b9efd6d0eb999ffa98aaaf9bf09fe7c4b39d81db97e4e7bbaef0e3bfedd69d9089bc8d91b292afa6c8b389fc9fb7aaa8decab6d9b493a6eafaa5baffe8fb85f2d483ecd1f2d1e58f938df9d8d5e385fe96c5f58ae1e0b09bf2b3c2931f"\n}\n')),(0,r.kt)("p",null,"The timelock encryption generates a chest value, and the key to unlcock it."),(0,r.kt)("h2",{id:"test-script"},"Test script"),(0,r.kt)("h3",{id:"deploy-contract"},"Deploy contract"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," function to deploy the raffle contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let raffle;\n[raffle, _] = await deploy('./contract/raffle.arl', {\n    parameters: {\n        owner        : owner.pkh,\n        min_duration : MIN_DURATION,\n        jackpot      : JACKPOT,\n        ticket_price : TICKET_PRICE\n    },\n    as: owner.pkh\n});\n")),(0,r.kt)("h3",{id:"call-an-entrypoint"},"Call an entrypoint"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"raffle")," contract object provides the entrypoints as object methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'await raffle.open({\n    arg    : { cd : [now + MIN_DURATION + 10], d : "Raffle test", lrk : LOCKED_RAFFLE_KEY },\n    as     : owner.pkh,\n    amount : JACKPOT\n})\n')),(0,r.kt)("h3",{id:"expect-to-fail"},"Expect to fail"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"expectToThrow")," function to assert that the contract fails with a specified error value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it(\"Alice unsuccessfully calls 'buy' by sending a wrong amount of tez.\", async () => {\n    await expectToThrow(async () => {\n      await raffle.buy({ as : alice.pkh })\n    }, errors.INVALID_TICKET_PRICE)\n});\n")),(0,r.kt)("h3",{id:"check-balance"},"Check Balance"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkBalanceDelta")," method to check the impact of an operation on an account balance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await checkBalanceDelta(owner.pkh,  2, async () => {\nawait checkBalanceDelta(alice.pkh, 50, async () => {\nawait checkBalanceDelta(jack.pkh,   0, async () => {\n    await raffle.transfer_jackpot({\n        arg : { k : CHEST_KEY },\n        as : alice.pkh\n    })\n}) }) })\n")),(0,r.kt)("p",null,"The code above checks the impact of the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_jackpot")," entrypoint on the accounts ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jack"),"."))}p.isMDXComponent=!0}}]);