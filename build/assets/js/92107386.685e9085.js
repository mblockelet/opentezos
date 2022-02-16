"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[4635],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8580:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"raffle-contract",title:"Raffle contract",authors:"Benoit Rognier"},p=void 0,c={unversionedId:"archetype/raffle-example/raffle-contract",id:"archetype/raffle-example/raffle-contract",title:"Raffle contract",description:"This section presents the Archetype version of a raffle contract, inspired by the version presented for other languages (Ligo, Smartpy). A raffle is a gambling game, where players buy tickets; a winning ticket is randomly picked and its owner gets the jackpot prize.",source:"@site/docs/archetype/raffle-example/contract.md",sourceDirName:"archetype/raffle-example",slug:"/archetype/raffle-example/raffle-contract",permalink:"/archetype/raffle-example/raffle-contract",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/archetype/raffle-example/contract.md",tags:[],version:"current",lastUpdatedBy:"Benoit Rognier",lastUpdatedAt:1644996271,formattedLastUpdatedAt:"2/16/2022",frontMatter:{id:"raffle-contract",title:"Raffle contract",authors:"Benoit Rognier"},sidebar:"docs",previous:{title:"Completium",permalink:"/archetype/completium"},next:{title:"Testing",permalink:"/archetype/raffle-example/unit-test"}},s=[{value:"Picking the winning ticket",id:"picking-the-winning-ticket",children:[],level:2},{value:"Raffle storage",id:"raffle-storage",children:[],level:2},{value:"Entrypoints",id:"entrypoints",children:[{value:"<code>open</code>",id:"open",children:[],level:3},{value:"<code>buy</code>",id:"buy",children:[],level:3},{value:"<code>reveal</code>",id:"reveal",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section presents the Archetype version of a ",(0,i.kt)("em",{parentName:"p"},"raffle")," contract, inspired by the version presented for other languages (",(0,i.kt)("a",{parentName:"p",href:"/ligo/write-contract-ligo/1-raffle-contract#raffle-smart-contract"},"Ligo"),", ",(0,i.kt)("a",{parentName:"p",href:"/smartpy/write-contract-smartpy#about-the-raffle-contract"},"Smartpy"),"). A raffle is a gambling game, where players buy tickets; a winning ticket is ",(0,i.kt)("em",{parentName:"p"},"randomly")," picked and its owner gets the jackpot prize."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/michelson"},"Michelson")," language does ",(0,i.kt)("strong",{parentName:"p"},"not")," provide an instruction to generate a random number. We can't use the current date (value of ",(0,i.kt)("inlineCode",{parentName:"p"},"now"),") as a source of randomness either. Indeed, bakers have some control on this value for the blocks they produce, and could therefore influence the result."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The source code of the raffle contract and the orresponding test scenario are available in this ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/completium/archetype-raffle"},"repository"),"."))),(0,i.kt)("h2",{id:"picking-the-winning-ticket"},"Picking the winning ticket"),(0,i.kt)("p",null,"The winning ticket ",(0,i.kt)("em",{parentName:"p"},"id")," is obtained as the remainder of the euclidean division of an arbitraly large number, called here the ",(0,i.kt)("em",{parentName:"p"},"raffle key"),", by the number of ticket buyers, called here ",(0,i.kt)("em",{parentName:"p"},"players"),". For example, if the raffle key is 2022, and the number of raffle players is 87, then the winning ticket id is 21 (typically the 21st ticket)."),(0,i.kt)("p",null,"The constraint is that this raffle key must not be known by anyone, nor the players or even the admin. Indeed if someone knows in advance the raffle key, it is then possible to influence the outcome of the game by buying tickets until one of them is the winning one (there is only one ticket per address, but someone can have several addresses). As a consequence:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("em",{parentName:"li"},"raffle key")," cannot be simply stored in the contract."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("em",{parentName:"li"},"raffle key")," cannot be a secret that only the admin knows (for the reason above), and that the admin would pass to the contract when it is time to announce the winner. Indeed, the admin could disappear, and no winner would ever be announced.")),(0,i.kt)("p",null,"For the admin not to be the only one to know the key, each player must possess a part of the key (called here ",(0,i.kt)("em",{parentName:"p"},"partial key"),"), such that the raffle key is the sum of each player's partial key. For the player's partial key not to be known by the other players, it must be encrpypted by the player. However, it must also be possible for anyone to know any player's partial key when it is time to declare the winning ticket. Otherwise one player could decide to block the game by not decrypting its key."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/alpha/timelock.html?highlight=timelock"},"timelock")," encryption feature of the Michelson ",(0,i.kt)("inlineCode",{parentName:"p"},"chest")," data type provides the required property: a ",(0,i.kt)("em",{parentName:"p"},"timelocked")," value is encrypted strongly enough that even the most powerful computer will take more than a certain amount of time to crack it, but weakly enough that given a bit more time, any decent computer will manage to crack it. That is to say that, beyond a certain amount of time, the value may be considered public."),(0,i.kt)("p",null,"This means that if a player doesn't reveal the value of its partial ",(0,i.kt)("em",{parentName:"p"},"raffle key")," when expected, someone else could run the necessary computation to unlock it. The current contract sends a reward for the work of revealing a player's key."),(0,i.kt)("h2",{id:"raffle-storage"},"Raffle storage"),(0,i.kt)("p",null,"The contract is originated with the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner")," is the address of the contract administrator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_duration")," is the minimum duration of the period during which players can buy a ticket"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jackpot")," is the prize in tez"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ticket_price")," speaks for itslef"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reveal_fee")," is the pourcentage of ticket price transferred when revealing a player's raffle key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype raffle(\n  owner        : address,\n  min_duration : duration,\n  jackpot      : tez,\n  ticket_price : tez,\n  reveal_fee   : rational)\n")),(0,i.kt)("p",null,"The contract holds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the date beyond which tickets cannot be bought, initialized to ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable close_date : option<date> = none\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the time used to generate the timelocked value of the raffle key (it should be high enough to be compliant with the close date), initialized to ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable chest_time : option<nat> = none\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a collection that will contain the addresses of all players and their raffle key:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"asset player {\n  id                 : address;\n  locked_raffle_key  : chest;        (* partial key *)\n  revealed           : bool = false;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the raffle key, updated when a player's partial key is revealed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable raffle_key  : nat = 0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the number of revealed players:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable nb_revealed : nat = 0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a state with 3 possible values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Created")," is the initial state during which tickets cannot be bought yet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Running")," is the state when the administrator opens the raffle for ticket selling"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Transferred")," is the state when prize has been transferred to the winner")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"states =\n| Created initial\n| Running\n| Transferred\n")),(0,i.kt)("h2",{id:"entrypoints"},"Entrypoints"),(0,i.kt)("h3",{id:"open"},(0,i.kt)("inlineCode",{parentName:"h3"},"open")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),' entrypoint is called by the contract admin (called "',(0,i.kt)("em",{parentName:"p"},"owner"),'") to allow players to buy tickets. It sets the main raffle parameters:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"close date")," is the date beyond which players cannot buy ticket"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"chest time")," is the difficulty to break players' partial raffle key encryption")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently you may count from a chest time of 500","\xa0","000 per second on a standard computer, to a chest time value of 500","\xa0","000","\xa0","000 per second on dedicated hardware."))),(0,i.kt)("p",null,"It requires that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the minimum duration be respected by the close date"),(0,i.kt)("li",{parentName:"ul"},"the transferred amount of tez be equal to the ",(0,i.kt)("inlineCode",{parentName:"li"},"jackpot")," storage value")),(0,i.kt)("p",null,"It transitions from ",(0,i.kt)("inlineCode",{parentName:"p"},"Created")," state to ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),", and sets the raffle parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'transition open(cd : date, t : nat) {\n  called by owner\n  require {\n    r0 : now + min_duration < cd   otherwise "INVALID_CLOSE_DATE";\n    r1 : transferred = jackpot     otherwise "INVALID_AMOUNT"\n  }\n  from Created to Running\n  with effect {\n    close_date        := some(cd);\n    chest_time        := some(t);\n  }\n}\n')),(0,i.kt)("h3",{id:"buy"},(0,i.kt)("inlineCode",{parentName:"h3"},"buy")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"buy")," entrypoint may be called by anyone to buy a ticket. The player must transfer the encrypted value of the partial raffle key, so that the partial key value may be potentially publically known when it comes to declaring the winner ticket."),(0,i.kt)("p",null,"It requires that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the contract be in ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")," state"),(0,i.kt)("li",{parentName:"ul"},"the transferred amount of tez be equal to the ticket price"),(0,i.kt)("li",{parentName:"ul"},"the close date not be reached")),(0,i.kt)("p",null,"It records the caller's address in the ",(0,i.kt)("inlineCode",{parentName:"p"},"player")," collection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry buy (lrk : chest) {\n  state is Running\n  require {\n    r2 : transferred = ticket_price otherwise "INVALID_TICKET_PRICE";\n    r3 : now < opt_get(close_date)  otherwise "RAFFLE_CLOSED"\n  }\n  effect { player.add({ id = caller; locked_raffle_key = lrk }) }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," method ",(0,i.kt)("em",{parentName:"p"},"fails")," with ",(0,i.kt)("inlineCode",{parentName:"p"},'(Pair "KeyExists" "player")')," if the caller is already in the collection."))),(0,i.kt)("h3",{id:"reveal"},(0,i.kt)("inlineCode",{parentName:"h3"},"reveal")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"reveal")," entry point may be called by anyone to reveal a player's ",(0,i.kt)("em",{parentName:"p"},"partial")," key and contribute to the computation of the raffle key. The caller receives a percentage of the ticket price as a reward."),(0,i.kt)("p",null,"It requires that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the contract be in ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")," state"),(0,i.kt)("li",{parentName:"ul"},"the close date has been reached")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry reveal(addr : address, k : chest_key) {\n  state is Running\n  require {\n    r4 : now > opt_get(close_date) otherwise "RAFFLE_OPEN";\n    r5 : not player[addr].revealed otherwise "PLAYER_ALREADY_REVEALED"\n  }\n  effect {\n    match open_chest(k, player[addr].locked_raffle_key, chest_time) with\n    | left (unlocked) -> raffle_key += opt_get(unpack<nat>(unlocked))\n    | right(error)    -> fail("INVALID_TIMELOCK")\n    end;\n    nb_revealed += 1;\n    player[addr].revealed := true;\n    if nb_revealed = player.count() then\n      transfer 0tz to entry self.transfer_jackpot();\n    transfer (reveal_fee * ticket_price) to caller;\n  }\n}\n')),(0,i.kt)("p",null,"When all players have revealed their raffle key, the transition from ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," state to ",(0,i.kt)("inlineCode",{parentName:"p"},"Transferred")," is executed with ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_jackpot"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition transfer_jackpot() {\n  called by selfaddress\n  from Running to Transferred\n  with effect {\n    transfer balance to player.nth(raffle_key % player.count());\n    player.clear()\n  }\n}\n")))}m.isMDXComponent=!0}}]);