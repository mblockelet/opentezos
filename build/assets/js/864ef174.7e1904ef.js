"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[7912],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||h[f]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2912:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o="root_2W3B",r=function(e){var t=e.children;return a.createElement("div",{className:o},t)}},9578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=(n(2912),["components"]),s={id:"5-refactoring",title:"Refactoring",authors:"Maxime Sallerin and Benjamin Pilia"},l=void 0,c={unversionedId:"ligo/write-contract-ligo/5-refactoring",id:"ligo/write-contract-ligo/5-refactoring",title:"Refactoring",description:"Smart contract refactoring",source:"@site/docs/ligo/write-contract-ligo/5-refactoring.md",sourceDirName:"ligo/write-contract-ligo",slug:"/ligo/write-contract-ligo/5-refactoring",permalink:"/ligo/write-contract-ligo/5-refactoring",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/ligo/write-contract-ligo/5-refactoring.md",tags:[],version:"current",lastUpdatedBy:"Damien ZONDA",lastUpdatedAt:1646498958,formattedLastUpdatedAt:"3/5/2022",sidebarPosition:5,frontMatter:{id:"5-refactoring",title:"Refactoring",authors:"Maxime Sallerin and Benjamin Pilia"},sidebar:"docs",previous:{title:"Close raffle",permalink:"/ligo/write-contract-ligo/4-close-raffle"},next:{title:"Compiling and deploying",permalink:"/ligo/deploy-a-contract"}},p=[{value:"Smart contract refactoring",id:"smart-contract-refactoring",children:[{value:"Winner selection scheme",id:"winner-selection-scheme",children:[],level:3},{value:"Refactoring the OpenRaffle entrypoint",id:"refactoring-the-openraffle-entrypoint",children:[],level:3},{value:"Refactoring the CloseRaffle entrypoint",id:"refactoring-the-closeraffle-entrypoint",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"To go further",id:"to-go-further",children:[],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"smart-contract-refactoring"},"Smart contract refactoring"),(0,r.kt)("p",null,"Just as any other project, smart contracts will need refactoring during their development. In this part, the way the winner is chosen will be refactored. "),(0,r.kt)("p",null,"Everyone, by reading the code, can see that the winning ticket is ",(0,r.kt)("inlineCode",{parentName:"p"},"407 mod Set.size(store.players)"),". By tampering with the number of bought tickets, it is easy for anyone to get the winning ticket. In this part, we will make it harder to guess the winning ticker number. However, ",(0,r.kt)("strong",{parentName:"p"},"that method is not fully secured")," as well. This refactoring is for educational purposes, to show some advanced features of LIGO and is NOT to be used in production."),(0,r.kt)("p",null,"This part is an opportunity to put the emphasis on two modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"Bytes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Crypto"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Bytes")," module handles binary format for serialization, it converts Michelson structures into a binary format (and the reverse), concatenates two bytes. You can find a full reference ",(0,r.kt)("a",{parentName:"p",href:"https://ligolang.org/docs/reference/bytes-reference/"},"here")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Crypto")," module performs a few basic operations such as hashing and verifying signatures. You can find a full reference ",(0,r.kt)("a",{parentName:"p",href:"https://ligolang.org/docs/reference/crypto-reference"},"here"),"."),(0,r.kt)("h3",{id:"winner-selection-scheme"},"Winner selection scheme"),(0,r.kt)("p",null,"Here is the procedure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The administrator will choose a large random number and keep it to himself. "),(0,r.kt)("li",{parentName:"ol"},"He hashes it and sends the hash when he calls the ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenRaffle")," entrypoint."),(0,r.kt)("li",{parentName:"ol"},"This hash is saved into the storage."),(0,r.kt)("li",{parentName:"ol"},"The administrator reveals his secret (random large number) when calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"CloseRaffle")," entrypoint."),(0,r.kt)("li",{parentName:"ol"},"The smart contract hashes this number and checks that it matches the storage hash. If it does, it uses this number to pick the winner just as before.")),(0,r.kt)("p",null,"As warned above, this method is still filled with loopholes: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the administrator knows the secret number and can tamper with the number of bought tickets to get the winning one."),(0,r.kt)("li",{parentName:"ul"},"everyone can try to brute-force the hash in order to find what number yielded this hash. ")),(0,r.kt)("p",null,"This method only makes it a little harder to guess the number."),(0,r.kt)("h3",{id:"refactoring-the-openraffle-entrypoint"},"Refactoring the OpenRaffle entrypoint"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRaffle")," entrypoint expects a new input: the number hash, that should be saved into the storage. Both the storage and entrypoint have to be modified. The method is very similar to what has been done before:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Refactoring the storage: it must store a hash. According to the LIGO documentation, a hash has a ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes")," type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type storage is record [\n    admin : address;\n    close_date : timestamp;\n    jackpot : tez;\n    description : string;\n    raffle_is_open : bool;\n    players : set (address);\n    sold_tickets : big_map (nat, address);\n    winning_ticket_number_hash : bytes;\n  ]\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Adding the new input in the openRaffleParameter. The bytes type is added in the tuple:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type openRaffleParameter is tez * timestamp * option(string) * bytes\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Updating the entrypoint function header:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const winning_ticket_number_hash : bytes; const store : storage) : returnType is\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Refactoring the entrypoint logic. For this change, the only thing to do is to save the hash in the storage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const winning_ticket_number_hash : bytes; var store : storage) : returnType is {\n  if Tezos.source =/= store.admin\n  then failwith ("Administrator not recognized.")\n  else {\n    if not store.raffle_is_open then {\n      if Tezos.amount < jackpot_amount\n      then failwith ("The administrator does not own enough tz.")\n      else {\n        const today : timestamp = Tezos.now;\n        const seven_day : int = 7 * 86400;\n        const in_7_day : timestamp = today + seven_day;\n        const is_close_date_not_valid : bool = close_date < in_7_day;\n        if is_close_date_not_valid\n        then failwith("The raffle must remain open for at least 7 days.")\n        else {\n          patch store with record [\n            jackpot = jackpot_amount;\n            close_date = close_date;\n            raffle_is_open = True;\n            winning_ticket_number_hash = winning_ticket_number_hash; // the hash is saved into the storage\n          ];\n\n          case description of [\n          | Some(d) -> patch store with record [description=d]\n          | None -> {skip}\n          ]\n        }\n      }\n    }\n    else {\n      failwith ("A raffle is already open.")\n    }\n  }\n} with ((nil : list (operation)), store)\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"The new input has to be processed in the control flow:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function main (const action : raffleEntrypoints; const store : storage): returnType is\n  case action of [\n    | OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, param.3, store)\n    | BuyTicket (param) -> buy_ticket(param, store)\n    | CloseRaffle (param) -> close_raffle (param, store)\n  ]\n")),(0,r.kt)("p",null,"You can compile the smart contract with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ligo compile contract raffle.ligo\n")),(0,r.kt)("h3",{id:"refactoring-the-closeraffle-entrypoint"},"Refactoring the CloseRaffle entrypoint"),(0,r.kt)("p",null,"The method is the same here. So the step-by-step changes won't be detailed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try to do this refactoring as an exercice. The LIGO documentation will tell you how to hash a number and compare it. Once you're done with your smart contract refactoring, you can compare it with our suggested version:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'type openRaffleParameter is tez * timestamp * option(string) * bytes\ntype buyTicketParameter is unit\ntype closeRaffleParameter is nat\n\ntype raffleEntrypoints is\n| OpenRaffle of openRaffleParameter\n| BuyTicket of buyTicketParameter\n| CloseRaffle of closeRaffleParameter\n\ntype storage is record [\n    admin : address;\n    close_date : timestamp;\n    jackpot : tez;\n    description : string;\n    raffle_is_open : bool;\n    players : set (address);\n    sold_tickets : big_map (nat, address);\n    winning_ticket_number_hash : bytes;\n  ]\n\ntype returnType is list (operation) * storage\n\nfunction div (const a : nat; const b : nat) : option (nat) is\n  if b = 0n then None else Some(a/b)\n\nfunction open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const winning_ticket_number_hash : bytes; var store : storage) : returnType is {\n  if Tezos.source =/= store.admin\n  then failwith ("Administrator not recognized.")\n  else {\n    if not store.raffle_is_open then {\n      if Tezos.amount < jackpot_amount\n      then failwith ("The administrator does not own enough tz.")\n      else {\n        const today : timestamp = Tezos.now;\n        const seven_day : int = 7 * 86400;\n        const in_7_day : timestamp = today + seven_day;\n        const is_close_date_not_valid : bool = close_date < in_7_day;\n        if is_close_date_not_valid\n        then failwith("The raffle must remain open for at least 7 days.")\n        else {\n          patch store with record [\n            jackpot = jackpot_amount;\n            close_date = close_date;\n            raffle_is_open = True;\n            winning_ticket_number_hash = winning_ticket_number_hash; // the hash is saved into the storage\n          ];\n\n          case description of [\n          | Some(d) -> patch store with record [description=d]\n          | None -> {skip}\n          ]\n        }\n      }\n    }\n    else {\n      failwith ("A raffle is already open.")\n    }\n  }\n} with ((nil : list (operation)), store)\n\nfunction buy_ticket (const _param: unit; var store : storage) : returnType is {\n  if store.raffle_is_open then {\n    const ticket_price : tez = 1tez;\n    const current_player : address = Tezos.sender;\n    if Tezos.amount =/= ticket_price\n    then failwith("The sender did not send the right tez amount.")\n    else {\n      if store.players contains current_player\n      then failwith("Each player can participate only once.")\n      else {\n        const ticket_id : nat = Set.size(store.players);\n        store.players := Set.add(current_player, store.players);\n        store.sold_tickets[ticket_id] := current_player;\n      }\n    }\n  } else {\n    failwith("The raffle is closed.")\n  }\n} with ((nil : list (operation)), store)\n\nfunction close_raffle (const winning_ticket_number : nat; var store : storage) : returnType is {\n  var operations : list(operation) := nil;\n  if Tezos.source =/= store.admin\n  then failwith("Administrator not recognized.")\n  else {\n    if store.raffle_is_open then {\n      if Tezos.now < store.close_date\n      then failwith("The raffle must remain open for at least 7 days.")\n      else{\n        const winning_ticket_number_bytes : bytes = Bytes.pack(winning_ticket_number);\n        const winning_ticket_number_hash : bytes = Crypto.sha256(winning_ticket_number_bytes);\n        if winning_ticket_number_hash =/= store.winning_ticket_number_hash\n        then failwith("The hash does not match the hash of the winning ticket.")\n        else {\n          const number_of_players : nat = Set.size(store.players);\n          const winning_ticket_id : nat = winning_ticket_number mod number_of_players;\n\n          const winner : address =\n            case (store.sold_tickets[winning_ticket_id]) of [\n            | Some (a) -> a\n            | None -> (failwith ("Winner address not found") : address)\n            ];\n\n          const receiver : contract (unit) =\n            case (Tezos.get_contract_opt (winner) : option (contract (unit))) of [\n            | Some (c) -> c\n            | None -> (failwith ("Winner contract not found.") : contract (unit))\n            ];\n\n          const op : operation = Tezos.transaction(unit, store.jackpot, receiver);\n          operations := list [ op; ];\n\n          patch store with record [\n            jackpot = 0tez;\n            close_date = (0 : timestamp);\n            description = ("raffle is currently closed" : string);\n            raffle_is_open = False;\n            players = (set[] : set(address));\n            sold_tickets = (big_map[] : big_map (nat, address));\n          ];\n        }\n      }\n    } else {\n      failwith("The raffle is closed.")\n    }\n  }\n} with (operations, store)\n\nfunction main (const action : raffleEntrypoints; const store : storage): returnType is\n  case action of [\n    | OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, param.3, store)\n    | BuyTicket (param) -> buy_ticket(param, store)\n    | CloseRaffle (param) -> close_raffle (param, store)\n  ]\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"LIGO is meant for smart contract development and always yields a Michelson code. The method for developing such smart contracts is pretty much always the same, and follows an order very close to the Michelson smart contract structure containing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("strong",{parentName:"li"},"parameter")," (or entrypoints): the entrypoints are defined into a variant, a type is defined for the input entrypoints. "),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("strong",{parentName:"li"},"storage"),": the storage is defined as a type, usually a record."),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("strong",{parentName:"li"},"code"),": the main function dispatches the actions using a pattern matching. The logic for each entrypoint is implemented in a function.")),(0,r.kt)("p",null,"There needs to be a ",(0,r.kt)("strong",{parentName:"p"},"main")," function, which dispatches the actions of the smart contract."),(0,r.kt)("p",null,"LIGO syntax was designed to help developers build smart contracts by providing them with a syntax familiar to them: the main difference from other languages is the way the code is built and a few technical limitations due to the particularities of using a blockchain (randomness for instance)."),(0,r.kt)("p",null,"LIGO is only a part of the tools that make the experience of smart contract development easier for developers. Another part, introduced later in this module, is unit testing."),(0,r.kt)("h2",{id:"to-go-further"},"To go further"),(0,r.kt)("p",null,"To learn more about LIGO, you can take a look at:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://ligolang.org/docs/intro/introduction"},"The official Ligolang documentation"),": a complete reference maintained by the developing team."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://tezosacademy.io/"},"Tezos Academy"),": a gamified interactive tutorial with 30 examples.")))}d.isMDXComponent=!0}}]);