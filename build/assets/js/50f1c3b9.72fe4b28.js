"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[4776],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},656:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"genesis",title:"Genesis Bloc & Bootstrap Bakers",authors:"Maxime Sallerin"},l=void 0,c={unversionedId:"private/genesis",id:"private/genesis",title:"Genesis Bloc & Bootstrap Bakers",description:"Generating a new genesis public key and fetching binaries",source:"@site/docs/private/genesis.md",sourceDirName:"private",slug:"/private/genesis",permalink:"/private/genesis",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/private/genesis.md",tags:[],version:"current",lastUpdatedBy:"MASA",lastUpdatedAt:1625843871,formattedLastUpdatedAt:"7/9/2021",frontMatter:{id:"genesis",title:"Genesis Bloc & Bootstrap Bakers",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Installation",permalink:"/private/installation"},next:{title:"Starting the blockchain",permalink:"/private/starting-blockchain"}},p=[{value:"Generating a new genesis public key and fetching binaries",id:"generating-a-new-genesis-public-key-and-fetching-binaries",children:[],level:2},{value:"Running the first baker",id:"running-the-first-baker",children:[],level:2},{value:"Running the second baker",id:"running-the-second-baker",children:[],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"generating-a-new-genesis-public-key-and-fetching-binaries"},"Generating a new genesis public key and fetching binaries"),(0,i.kt)("p",null,"The genesis public key is the public key associated to the genesis block, the first block of your private blockchain."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"genesis block")," is the first block in any blockchain-based protocol. It is the basis on which additional blocks are added to form a chain of blocks, hence the term blockchain."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9554).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 1: Genesis block"),(0,i.kt)("p",null,"It differs from other blocks in that it has no predecessor block. Since it has no predecessor, some small parameters have to be specified for its creation."),(0,i.kt)("p",null,"To fetch Tezos binaries and create a new genesis public key, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -v ubuntu-tezos-volume:/base-dir -i \\\n  -t ubuntu-tezos fetch-binaries --base-chain carthagenet\n")),(0,i.kt)("p",null,"Only 'babylonnet' and 'carthagenet' are supported as a ",(0,i.kt)("inlineCode",{parentName:"p"},"--base-chain")," argument."),(0,i.kt)("p",null,"If you have been provided a genesis public key, instead run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -v ubuntu-tezos-volume:/base-dir -i -t ubuntu-tezos fetch-binaries \\\n  --genesis-key <provided key> --base-chain carthagenet\n")),(0,i.kt)("h2",{id:"running-the-first-baker"},"Running the first baker"),(0,i.kt)("p",null,"Baking is the act of signing and publishing blocks to the Tezos blockchain. Therefore bakers are the people participating in the consensus by ",(0,i.kt)("strong",{parentName:"p"},"creating")," new blocks.\nCheck out the ",(0,i.kt)("a",{parentName:"p",href:"/baking"},"Baking")," module for more information."),(0,i.kt)("p",null,"The script ",(0,i.kt)("inlineCode",{parentName:"p"},"start-baker.sh")," will do the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"generate a ",(0,i.kt)("a",{parentName:"li",href:"/deploy-a-node/set-up-a-node#node-identity"},"node identity")),(0,i.kt)("li",{parentName:"ol"},"create a baker account"),(0,i.kt)("li",{parentName:"ol"},"start the bootstrap-node baker to bake the chain")),(0,i.kt)("p",null,"This example will walk you through running two bakers, each running in its own Docker container. To run the first, enter the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --expose 8733 -p 8732:8732 -p 8733:8733 -v ubuntu-tezos-volume:/base-dir \\\n  -i -t ubuntu-tezos start-baker --net-addr-port 8733\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--expose")," parameter makes a port available outside of Docker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p")," parameter maps host ports to Docker ports."),(0,i.kt)("li",{parentName:"ul"},"Port ",(0,i.kt)("inlineCode",{parentName:"li"},"8732")," is used as a rpc node port and exposed by the docker image by default. ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/tezos-basics/cli-and-rpc#tezos-rpc-remote-procedure-call"},"RPC")," is a client-server protocol where the requesting program is the client and the program providing the service is the server.",(0,i.kt)("br",{parentName:"p"}),"\n","Tezos nodes provide a JSON/RPC interface to interact with the Tezos network. Although it uses RPC and is JSON-based, it does not follow the JSON-RPC protocol.")))),(0,i.kt)("p",null,"After running this command, you should see the following warning:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Warning:\n  Failed to acquire the protocol version from the node\n  Rpc request failed:\n     - meth: GET\n     - uri: http://localhost:8732/chains/main/blocks/head/protocols\n     - error: Unable to connect to the node: "Unix.Unix_error(Unix.ECONNREFUSED, "connect", "")"\n')),(0,i.kt)("p",null,"These warnings can be ignored for now, as all the required components have not yet been started."),(0,i.kt)("p",null,"This script will print the baker's IP address and public key, both of which will be used in the following steps. First, you should see the IP address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Container IP: 172.17.0.2\n")),(0,i.kt)("p",null,"You will also see some output containing the hash, the public key and the secret key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Hash: tz1SJNRNLwACDSLDLk249vFnZjZyV9MVNKEg\nPublic Key: edpkvRTXYRCxCbWs4GF1shMxCab9nF3iNimPqqb2esiP5WyjAhT1dz\nSecret Key: unencrypted:edsk3mXNLyaNXdFv6Qjcxmfed3eJ7kSzJwgCjSNh4KTTpwRRLPMSpY\n")),(0,i.kt)("p",null,"At this point, you should also see 'Too few connections (0)' being printed repeatedly on the terminal. ",(0,i.kt)("strong",{parentName:"p"},"Leave this terminal running and open another"),"."),(0,i.kt)("h2",{id:"running-the-second-baker"},"Running the second baker"),(0,i.kt)("p",null,"In this second terminal, enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd private-tezos-blockchain\ndocker run -v ubuntu-tezos-volume-1:/base-dir -i \\\n  -t ubuntu-tezos fetch-binaries --base-chain carthagenet\n")),(0,i.kt)("p",null,"Then run the 2nd baker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --expose 8734 -p 8734:8734 -v ubuntu-tezos-volume-1:/base-dir \\\n  -i -t ubuntu-tezos start-baker --net-addr-port 8734 --peer 172.17.0.2:8733\n")),(0,i.kt)("p",null,"If the nodes can communicate, you will see the following lines in both terminals:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"p2p.maintenance: Too few connections (1)\n")),(0,i.kt)("p",null,"This means that each node now has ",(0,i.kt)("strong",{parentName:"p"},"one")," peer."),(0,i.kt)("p",null,"Each terminal displays a different hash, private key and public key.\n",(0,i.kt)("strong",{parentName:"p"},"Write them down somewhere")," because we will need them in the next chapter."))}d.isMDXComponent=!0},9554:function(e,t,n){t.Z=n.p+"assets/images/genesis_block-8dc620d5c0caf8ed01821bf0a43846a3.svg"}}]);