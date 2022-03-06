"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[9719],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"installation",title:"Installation",authors:"Maxime Sallerin"},s=void 0,c={unversionedId:"smartpy/installation",id:"smartpy/installation",title:"Installation",description:"This chapter aims to prepare you and your working environment to be ready to code, test, and compile your smart contracts.",source:"@site/docs/smartpy/installation.md",sourceDirName:"smartpy",slug:"/smartpy/installation",permalink:"/smartpy/installation",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/smartpy/installation.md",tags:[],version:"current",lastUpdatedBy:"Dayitva Goel",lastUpdatedAt:1628334354,formattedLastUpdatedAt:"8/7/2021",frontMatter:{id:"installation",title:"Installation",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Introduction",permalink:"/smartpy"},next:{title:"Smart contract development with SmartPy",permalink:"/smartpy/write-contract-smartpy"}},p=[{value:"Write, test, and compile from the Online Editor",id:"write-test-and-compile-from-the-online-editor",children:[],level:2},{value:"Write, test and, compile from your local IDE",id:"write-test-and-compile-from-your-local-ide",children:[{value:"Prerequisite",id:"prerequisite",children:[],level:3},{value:"Create a virtual environment",id:"create-a-virtual-environment",children:[],level:3},{value:"Activate the environment",id:"activate-the-environment",children:[],level:3},{value:"Install the SmartPy library",id:"install-the-smartpy-library",children:[],level:3},{value:"Install the command line interface",id:"install-the-command-line-interface",children:[{value:"Compile SmartPy Contracts or Expressions",id:"compile-smartpy-contracts-or-expressions",children:[],level:4},{value:"Execute the tests of your SmartPy Script",id:"execute-the-tests-of-your-smartpy-script",children:[],level:4}],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter aims to prepare you and your working environment to be ready to code, test, and compile your smart contracts."),(0,i.kt)("p",null,"You can code locally on your favourite ",(0,i.kt)("em",{parentName:"p"},"IDE")," or use the ",(0,i.kt)("a",{parentName:"p",href:"https://smartpy.io/ide"},"official SmartPy online editor"),", with added interesting features to facilitate development."),(0,i.kt)("h2",{id:"write-test-and-compile-from-the-online-editor"},"Write, test, and compile from the Online Editor"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"SmartPy")," online editor is not just a simple text editor for smart contracts. It comes with a built-in simulation suite, that provides powerful testing tools for developers."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4681).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 1: Smartpy.io Online Editor "),(0,i.kt)("p",null,"To familiarize yourself with ",(0,i.kt)("em",{parentName:"p"},"SmartPy"),", you can choose among numerous existing examples of smart contracts, by going to the ",(0,i.kt)("strong",{parentName:"p"},"Templates")," tab."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2649).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 2: Smartpy.io Online Editor Templates "),(0,i.kt)("p",null,"On the left screen of the online editor, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write your code"),(0,i.kt)("li",{parentName:"ul"},"Run and test your code")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7359).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 3: Smartpy.io Online Editor Code Area "),(0,i.kt)("p",null,"Once you run your code, you can visualize the result on the right screen, which contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your inlined python code"),(0,i.kt)("li",{parentName:"ul"},"Your generated ",(0,i.kt)("em",{parentName:"li"},"Michelson")," contract and storage (also available in ",(0,i.kt)("em",{parentName:"li"},"JSON")," format)"),(0,i.kt)("li",{parentName:"ul"},"A summary of your test scenario and the generated Michelson parameter code"),(0,i.kt)("li",{parentName:"ul"},"An interface to deploy your Michelson contract on a testnet or the mainnet")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5074).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 4: Smartpy.io Online Editor Result Test Area "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3345).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 5: Smartpy.io Online Editor Result Michelson Contract Code "),(0,i.kt)("h2",{id:"write-test-and-compile-from-your-local-ide"},"Write, test and, compile from your local IDE"),(0,i.kt)("p",null,"In the following chapters, we will use the online editor. But in this section, we will still provide the basics for using ",(0,i.kt)("em",{parentName:"p"},"SmartPy")," on a local IDE."),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3")),(0,i.kt)("li",{parentName:"ul"},"A code editor, e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode"))),(0,i.kt)("h3",{id:"create-a-virtual-environment"},"Create a virtual environment"),(0,i.kt)("p",null,"A virtual environment is a self-contained Python installation, separated from the global Python installation. It contains its own modules. Hence, it is most useful when a specific module version is needed without affecting the other modules. Run this command to create a virtual environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ python3 -m venv /path/to/env\n")),(0,i.kt)("h3",{id:"activate-the-environment"},"Activate the environment"),(0,i.kt)("p",null,"By default, your OS uses the python interpreter from ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin/python"),". Once a virtual environment is created, it has to be activated in order to be used by the OS. You can activate your virtual environment by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ source /path/to/env/bin/activate\n")),(0,i.kt)("p",null,"The name of the environment should appear at the beginning of the command line. It can be deactivated by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"(venv) $ deactivate\n")),(0,i.kt)("h3",{id:"install-the-smartpy-library"},"Install the SmartPy library"),(0,i.kt)("p",null,"After having activated your virtual environment, you can install ",(0,i.kt)("em",{parentName:"p"},"SmartPy")," by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"(venv) $ pip install smartpy\n")),(0,i.kt)("p",null,"Verify the installation by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'(venv) python -c "import smartpy"\n')),(0,i.kt)("p",null,"If the command returns nothing, then the installation has been successful."),(0,i.kt)("h3",{id:"install-the-command-line-interface"},"Install the command line interface"),(0,i.kt)("p",null,"To install the ",(0,i.kt)("em",{parentName:"p"},"SmartPy")," CLI, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sh <(curl -s https://smartpy.io/cli/install.sh)\n")),(0,i.kt)("h4",{id:"compile-smartpy-contracts-or-expressions"},"Compile SmartPy Contracts or Expressions"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SmartPy.sh")," script to compile a ",(0,i.kt)("em",{parentName:"p"},"SmartPy")," smart contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"~/smartpy-cli/SmartPy.sh compile <contract.py> <output-directory>\n")),(0,i.kt)("p",null,"Compilation produces multiple possible outputs including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Michelson")," code for contract and storage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"JSON")," code for contract and storage ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is referring to Michelson source code in JSON representation.")),(0,i.kt)("h4",{id:"execute-the-tests-of-your-smartpy-script"},"Execute the tests of your SmartPy Script"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SmartPy.sh")," script to run the tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"~/smartpy-cli/SmartPy.sh test <contract.py> <output-directory>\n")),(0,i.kt)("p",null,"This leads to multiple outputs: types of storage values and entrypoint parameters, generated Michelson code, pretty-printed scenario, etc."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Installing an environment for programming with SmartPy is easy to do. You just need Python and the necessary libraries. Or you can simply start coding in the online editor."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"[1]"," ",(0,i.kt)("a",{parentName:"p",href:"https://smartpy.io/reference.html#_command_line_interface"},"https://smartpy.io/reference.html#_command_line_interface")),(0,i.kt)("p",null,"[2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://smartpy.io/ide"},"https://smartpy.io/ide")))}u.isMDXComponent=!0},4681:function(e,t,n){t.Z=n.p+"assets/images/screenshot_online_editor-4cb14c8d855471928e86d742b553ab3c.png"},7359:function(e,t,n){t.Z=n.p+"assets/images/screenshot_online_editor_left_screen-c42ba572dca7791e9824aaa295224ee3.png"},3345:function(e,t,n){t.Z=n.p+"assets/images/screenshot_online_editor_michelson_contract_code-0b4f6d4d36d43af23615447644414c3f.png"},2649:function(e,t,n){t.Z=n.p+"assets/images/screenshot_online_editor_templates-adcbf1fe1ff3188d94e37dc0e2e21abb.png"},5074:function(e,t,n){t.Z=n.p+"assets/images/screenshot_online_editor_tests-ee2b6f2efe47f3713e2374d609921a74.png"}}]);