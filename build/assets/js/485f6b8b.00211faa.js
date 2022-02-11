"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[1575],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,s(s({ref:e},p),{},{components:n})):a.createElement(d,s({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3625:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"tzstats-smart-contract",title:"Checkout your smart contract on TzStats",authors:"Benjamin Pila"},l=void 0,c={unversionedId:"explorer/tzstats-smart-contract",id:"explorer/tzstats-smart-contract",title:"Checkout your smart contract on TzStats",description:"As a developer, you will often want to check the state of your deployed smart contracts. Using a blockchain explorer is a fast and easy way to do so. In this section, we will find a smart contract and check it out on TzStats.",source:"@site/docs/explorer/tzstats-smart-contract.md",sourceDirName:"explorer",slug:"/explorer/tzstats-smart-contract",permalink:"/explorer/tzstats-smart-contract",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/explorer/tzstats-smart-contract.md",tags:[],version:"current",lastUpdatedBy:"MASA",lastUpdatedAt:1625666862,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"tzstats-smart-contract",title:"Checkout your smart contract on TzStats",authors:"Benjamin Pila"},sidebar:"docs",previous:{title:"How to use the tzStats blockchain explorer?",permalink:"/explorer/tzstats-main-features"},next:{title:"Private indexer",permalink:"/explorer/private-indexer"}},p=[{value:"Find your smart contract on <em>TzStats</em>",id:"find-your-smart-contract-on-tzstats",children:[{value:"Calls",id:"calls",children:[],level:3},{value:"Entrypoints",id:"entrypoints",children:[],level:3},{value:"Contract Code",id:"contract-code",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3},{value:"Big map",id:"big-map",children:[],level:3}],level:2},{value:"API Calls",id:"api-calls",children:[],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:p};function u(t){var e=t.components,i=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a developer, you will often want to check the state of your deployed smart contracts. Using a blockchain explorer is a fast and easy way to do so. In this section, we will find a smart contract and check it out on ",(0,o.kt)("em",{parentName:"p"},"TzStats"),"."),(0,o.kt)("h2",{id:"find-your-smart-contract-on-tzstats"},"Find your smart contract on ",(0,o.kt)("em",{parentName:"h2"},"TzStats")),(0,o.kt)("p",null,"Once you have the address of your smart contract, go to the ",(0,o.kt)("em",{parentName:"p"},"TzStats")," website associated with the network you deployed your contract on."),(0,o.kt)("p",null,"Remember, the following TzStats website link are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,o.kt)("a",{parentName:"li",href:"https://tzstats.com"},"tzstats.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delphinet"),": ",(0,o.kt)("a",{parentName:"li",href:"https://delphi.tzstats.com"},"delphi.tzstats.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Edonet"),": ",(0,o.kt)("a",{parentName:"li",href:"https://edo.tzstats.com"},"edo.tzstats.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Florencenet"),": ",(0,o.kt)("a",{parentName:"li",href:"https://florence.tzstats.com"},"florence.tzstats.com"))),(0,o.kt)("p",null,"Copy/paste your address in the search bar:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4292).Z})),(0,o.kt)("p",null,"TzStats then shows a page with information related to your smart contract, e.g. the balance of the contract, the amounts sent and received, the creator address, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4675).Z})),(0,o.kt)("p",null,"Below the general information, you have a list of tabs allowing you to see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the calls"),(0,o.kt)("li",{parentName:"ul"},"the entry points"),(0,o.kt)("li",{parentName:"ul"},"the contract code"),(0,o.kt)("li",{parentName:"ul"},"the storage"),(0,o.kt)("li",{parentName:"ul"},"the different ",(0,o.kt)("em",{parentName:"li"},"big maps")," of your smart contract (if there are any)")),(0,o.kt)("p",null,"For the following examples, we will check out the smart contract, deployed on the Mainnet, whose address is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn\n")),(0,o.kt)("p",null,"Available at this ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn"},"link"),"."),(0,o.kt)("h3",{id:"calls"},"Calls"),(0,o.kt)("p",null,"Here you have the history of all transactions related to your smart contract."),(0,o.kt)("p",null,"It appears:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The transactions with the amount and the address of the sender."),(0,o.kt)("li",{parentName:"ul"},"The calls made to the entrypoints with the name of the entrypoint in question."),(0,o.kt)("li",{parentName:"ul"},"On the right the status of the block with the number of confirmation received.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3704).Z})),(0,o.kt)("h3",{id:"entrypoints"},"Entrypoints"),(0,o.kt)("p",null,"Here you have a list of all your entrypoints and their parameters. Furthermore, you can see how many calls each entrypoint has received."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(449).Z})),(0,o.kt)("h3",{id:"contract-code"},"Contract Code"),(0,o.kt)("p",null,"Here you have the michelson code of your smart contract."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1411).Z})),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("p",null,"Here you have access to the content of your storage with the type of each variable and its current value. Notice that the content excludes big maps as they are specific tabs for them."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8803).Z})),(0,o.kt)("h3",{id:"big-map"},"Big map"),(0,o.kt)("p",null,"Here you have the content of your bigmap."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1213).Z})),(0,o.kt)("h2",{id:"api-calls"},"API Calls"),(0,o.kt)("p",null,"The same pieces of information can be retrieved by API calls, without using the frontend.\nA full documentation is available ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#tezos-api"},"here"),"."),(0,o.kt)("p",null,"The following API endpoints are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mainnet: ",(0,o.kt)("a",{parentName:"li",href:"https://api.tzstats.com"},"https://api.tzstats.com")),(0,o.kt)("li",{parentName:"ul"},"Mainnet Staging: ",(0,o.kt)("a",{parentName:"li",href:"https://api.staging.tzstats.com"},"https://api.staging.tzstats.com")),(0,o.kt)("li",{parentName:"ul"},"Edonet: ",(0,o.kt)("a",{parentName:"li",href:"https://api.edo.tzstats.com"},"https://api.edo.tzstats.com")),(0,o.kt)("li",{parentName:"ul"},"Florencenet: ",(0,o.kt)("a",{parentName:"li",href:"https://api.florence.tzstats.com"},"https://api.florence.tzstats.com"))),(0,o.kt)("p",null,'First, let\'s get the contract information.\nThe "explorer" endpoints will be used (full reference ',(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#explorer-endpoints"},"here"),")."),(0,o.kt)("p",null,"In this example, one of the contracts has been deployed on the Mainnet to ",(0,o.kt)("inlineCode",{parentName:"p"},"KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn"),"."),(0,o.kt)("p",null,"Let's retrieve the contract details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl https://api.tzstats.com/explorer/contract/KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn \n{\n   "address":"KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn",\n   "creator":"tz1Y1j7FK1X9Rrv2VdPz5bXoU7SszF8W1RnK",\n   "delegate":"",\n   "storage_size":466932,\n   "storage_paid":466932,\n   "first_seen":1540787,\n   "last_seen":1546844,\n   "first_seen_time":"2021-07-03T02:48:58Z",\n   "last_seen_time":"2021-07-07T13:15:58Z",\n   "n_ops":11789,\n   "n_ops_failed":1610,\n   "bigmaps":{\n      "metadata":6071,\n      "swaps":6072\n   },\n   "iface_hash":"a357937c",\n   "code_hash":"c1c14f18",\n   "call_stats":{\n      "cancel_swap":102,\n      "collect":685,\n      "swap":3366,\n      "update_fee":0,\n      "update_manager":1\n   },\n   "features":[\n      "transfer_tokens"\n   ],\n   "interfaces":[\n      \n   ]\n}\n')),(0,o.kt)("p",null,"The pieces of information do match those from the web interface: ",(0,o.kt)("em",{parentName:"p"},"address"),", ",(0,o.kt)("em",{parentName:"p"},"creator"),", ",(0,o.kt)("em",{parentName:"p"},"first_seen_time"),", ",(0,o.kt)("em",{parentName:"p"},"last_seen_time"),"..."),(0,o.kt)("p",null,'The call to the entrypoints "swap" can be seen in the ',(0,o.kt)("inlineCode",{parentName:"p"},"call_stats")," field: 3366 calls have indeed been made to this entrypoint."),(0,o.kt)("p",null,"More details can be fetched about those calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl https://api.tzstats.com/explorer/contract/KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn/calls\n[\n   {\n      "row_id":58248380,\n      "hash":"opCH4VjdvjSeicS3A7MeDVSjwGwz16DcE6WbkKzUxc6SQj8bhtU",\n      "type":"origination",\n      "block":"BMCS5sba3xLXkhpze68LQdLz7VRGD6edjMTH14eLr31DppAqF1x",\n      "time":"2021-07-03T02:48:58Z",\n      "height":1540787,\n      "cycle":376,\n      "counter":11788639,\n      "op_l":3,\n      "op_p":4,\n      "op_c":0,\n      "op_i":0,\n      "status":"applied",\n      "is_success":true,\n      "is_contract":true,\n      "gas_limit":19759,\n      "gas_used":19759,\n      "gas_price":0.30705,\n      "storage_limit":4107,\n      "storage_size":3850,\n      "storage_paid":3850,\n      "volume":0,\n      "fee":0.006067,\n      "burned":1.02675,\n      "has_data":true,\n      "days_destroyed":0,\n      "big_map_diff":[\n         {\n            "action":"alloc",\n            "bigmap_id":6072,\n            "key_type":{\n               "name":"@key",\n               "type":"nat"\n            },\n            "value_type":{\n               "name":"@value",\n               "type":"struct",\n               "args":[\n                  {\n                     "name":"creator",\n                     "type":"address"\n                  },\n                  {\n                     "name":"issuer",\n                     "type":"address"\n                  },\n                  {\n                     "name":"objkt_amount",\n                     "type":"nat"\n                  },\n                  {\n                     "name":"objkt_id",\n                     "type":"nat"\n                  },\n                  {\n                     "name":"royalties",\n                     "type":"nat"\n                  },\n                  {\n                     "name":"xtz_per_objkt",\n                     "type":"mutez"\n                  }\n               ]\n            }\n         },\n         {\n            "action":"alloc",\n            "bigmap_id":6071,\n            "key_type":{\n               "name":"@key",\n               "type":"string"\n            },\n            "value_type":{\n               "name":"@value",\n               "type":"bytes"\n            }\n         },\n         {\n            "key":"",\n            "key_hash":"expru5X1yxJG6ezR2uHMotwMLNmSzQyh5t1vUnhjx4cS6Pv9qE1Sdo",\n            "value":"697066733a2f2f516d57514e41314138634b5a506f61615a4d757153754c75643747515453786262774358685a373644674571484d",\n            "action":"update",\n            "bigmap_id":6071\n         }\n      ],\n      "sender":"tz1Y1j7FK1X9Rrv2VdPz5bXoU7SszF8W1RnK",\n      "receiver":"KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn",\n      "confirmations":6060\n   }\n], ...\n')),(0,o.kt)("p",null,"It details the inputs used for this entrypoint, the storage after the call, the differences in the big map that have changed after the call..."),(0,o.kt)("p",null,"The current storage can be fetched, with this endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl https://api.tzstats.com/explorer/contract/KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn/storage\n{\n   "value":{\n      "counter":"503452",\n      "fee":"25",\n      "manager":"tz1UBZUkXpKGhYsP5KtzDNqLLchwF4uHrGjw",\n      "metadata":"6071",\n      "objkt":"KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton",\n      "swaps":"6072"\n   },\n   "bigmaps":{\n      "metadata":6071,\n      "swaps":6072\n   }\n}\n')),(0,o.kt)("p",null,"The storage returned by the API does match the one displayed in the web interface.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"swaps")," big map holds a big map id, instead of the values.",(0,o.kt)("br",{parentName:"p"}),"\n","Indeed, a big map is meant to hold unbounded data size: thus, fetching the storage could quickly become expensive, if the big maps hold a lot of values."),(0,o.kt)("p",null,"The values of a big map have to be retrieved from a separate endpoint, thanks to its id (",(0,o.kt)("inlineCode",{parentName:"p"},"6072")," in this case):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl https://api.tzstats.com/explorer/bigmap/6072/values\n[\n   {\n      "key":"500002",\n      "key_hash":"exprv549ywRqB3FLVdfWLJi9Wjm44ZZ3u9mfshFsqJZdZ99LBFD8Uk",\n      "value":{\n         "creator":"tz1TgKL5LsLvNjowkJTb5Td4rf2ZHbeYsaCb",\n         "issuer":"tz1TgKL5LsLvNjowkJTb5Td4rf2ZHbeYsaCb",\n         "objkt_amount":"5",\n         "objkt_id":"158296",\n         "royalties":"200",\n         "xtz_per_objkt":"10000000"\n      }\n   },\n   {\n      "key":"500003",\n      "key_hash":"expruG8eSPZ8anqDi2ZPzhSdLz3go8G6oTKkD57BmnqzZEr1KzXY8n",\n      "value":{\n         "creator":"tz1UBT8wECSsb4Cfr2Y6i3GSJUoSfoWcB7Qg",\n         "issuer":"tz1UBT8wECSsb4Cfr2Y6i3GSJUoSfoWcB7Qg",\n         "objkt_amount":"10",\n         "objkt_id":"154305",\n         "royalties":"100",\n         "xtz_per_objkt":"6660000"\n      }\n   }, ...\n]\n')),(0,o.kt)("p",null,"All of the pieces of information displayed in the web interface can be retrieved from the API.\nAll these API calls can of course be made by any libraries, and thus can be automated in any program."),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"tzstats.com is extremely useful to monitor what is going-on on the mainnet and public testnets.\nAll the pieces of information regarding the cycles, the blocks, the transactions, the smarts contracts... can quickly be found,\nthanks to a user-friendly interface."),(0,o.kt)("p",null,"In addition, ",(0,o.kt)("em",{parentName:"p"},"TzStats")," provides a complete and free REST API (for non-commercial use), without any authentication or enforcement of rate limits (as long as it remains reasonable). See the introduction of the ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#tezos-api"},"Tzstats API"),"."),(0,o.kt)("p",null,"Those calls can be performed by any library: the pieces of information retrieved about a public Tezos network can be used in another monitoring tool, or even in Dapps."),(0,o.kt)("p",null,"Indeed, API calls can be used within Dapps to retrieve those kinds of information. For instance, ",(0,o.kt)("em",{parentName:"p"},"taquito")," (a typescript library to interact with a tezos node) is not able to retrieve the keys of a big map with a simple call. A call to the ",(0,o.kt)("em",{parentName:"p"},"TzStats")," API solves this issue."),(0,o.kt)("p",null,"Those tools are also available for private networks.\nThis will be detailed in the next chapter, where a private ",(0,o.kt)("em",{parentName:"p"},"TzStats")," is set up to monitor a private network."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/"},"https://tzstats.com/")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn"},"https://tzstats.com/KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn")),(0,o.kt)("p",null,"[3]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#tezos-api"},"https://tzstats.com/docs/api#tezos-api")),(0,o.kt)("p",null,"[4]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tzstats.com/docs/api#explorer-endpoints"},"https://tzstats.com/docs/api#explorer-endpoints")))}u.isMDXComponent=!0},4292:function(t,e,n){e.Z=n.p+"assets/images/tzStats_search_bar-e39a5d819ce71c3cf88305fb126bef90.png"},1213:function(t,e,n){e.Z=n.p+"assets/images/tzStats_smart_contract_bigmap-2f1f06b10d7d97bc4497e8326483a83b.png"},3704:function(t,e,n){e.Z=n.p+"assets/images/tzStats_smart_contract_calls-488f0ddccc87b29345d1d5ca65d424c2.png"},1411:function(t,e,n){e.Z=n.p+"assets/images/tzStats_smart_contract_code-1024c7da072fe68756800d8840c2f43f.png"},449:function(t,e,n){e.Z=n.p+"assets/images/tzStats_smart_contract_entrypoints-eeeb2e9f0120a6d23e1555750bc44c5d.png"},4675:function(t,e,n){e.Z=n.p+"assets/images/tzStats_smart_contract_general_information-f0180b54a3e0b2ae3a8aaf19f92aa91b.png"},8803:function(t,e,n){e.Z=n.p+"assets/images/tzStats_smart_contract_storage-c805e2fc27071caf362b0cd91a5b69af.png"}}]);