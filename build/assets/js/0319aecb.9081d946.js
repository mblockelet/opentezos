"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[9696],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},750:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r={button:"button_2UxY"},o=function(e){var t=e.children;return a.createElement("div",{className:r.root},t)}},4:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5068),r=n(7294),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={userName:"",sucess:void 0,showAnswers:!1},n}(0,a.Z)(t,e);var n=t.prototype;return n.handleSubmit=function(e){var t=this;e.preventDefault();var n=0,a=0;this.setState({showAnswers:!0}),this.props.children.forEach((function(e){e.props&&"ExamCheckbox"===e.props.mdxType&&(n+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(a+=1))})),parseInt(a/n*100)<=10?this.setState({success:!0}):this.setState({success:!1})},n.handleChange=function(e){var t;console.log(e);var n=e.target,a="checkbox"===n.type?n.checked:n.value,r=n.name;this.setState(((t={})[r]=a,t))},n.handleNameChange=function(e){this.setState({userName:e.target.value})},n.render=function(){var e=this;return r.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?r.createElement("div",{key:t.props.name},r.createElement("label",null,e.state.showAnswers&&r.createElement("div",{style:{display:"inline-block "}},!!e.state[t.props.name]==("true"===t.props.isCorrect)?r.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M23.1459 5.40002L20.3539 2.60002C20.3075 2.55346 20.2523 2.51651 20.1915 2.49131C20.1308 2.4661 20.0657 2.45312 19.9999 2.45312C19.9341 2.45312 19.869 2.4661 19.8083 2.49131C19.7475 2.51651 19.6924 2.55346 19.6459 2.60002L7.85391 14.4C7.80747 14.4466 7.75229 14.4835 7.69155 14.5087C7.6308 14.5339 7.56568 14.5469 7.49991 14.5469C7.43415 14.5469 7.36902 14.5339 7.30828 14.5087C7.24753 14.4835 7.19236 14.4466 7.14591 14.4L4.35391 11.6C4.30747 11.5535 4.25229 11.5165 4.19155 11.4913C4.1308 11.4661 4.06568 11.4531 3.99991 11.4531C3.93415 11.4531 3.86902 11.4661 3.80828 11.4913C3.74753 11.5165 3.69236 11.5535 3.64591 11.6L0.853913 14.4C0.760177 14.4938 0.70752 14.6209 0.70752 14.7535C0.70752 14.8861 0.760177 15.0133 0.853913 15.107L7.14591 21.4C7.19236 21.4466 7.24753 21.4835 7.30828 21.5087C7.36902 21.5339 7.43415 21.5469 7.49991 21.5469C7.56568 21.5469 7.6308 21.5339 7.69155 21.5087C7.75229 21.4835 7.80747 21.4466 7.85391 21.4L23.1459 6.10002C23.2375 6.00655 23.2888 5.8809 23.2888 5.75002C23.2888 5.61914 23.2375 5.49348 23.1459 5.40002Z",fill:"#00CC14"})):r.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M22.6639 5.57792C22.9451 5.29663 23.1031 4.91517 23.1031 4.51742C23.1031 4.11967 22.9451 3.73821 22.6639 3.45692L20.5429 1.33592C20.4036 1.19653 20.2382 1.08596 20.0562 1.01051C19.8741 0.935071 19.679 0.89624 19.4819 0.89624C19.2848 0.89624 19.0897 0.935071 18.9077 1.01051C18.7256 1.08596 18.5602 1.19653 18.4209 1.33592L12.1769 7.58092C12.1299 7.6277 12.0662 7.65395 11.9999 7.65395C11.9336 7.65395 11.8699 7.6277 11.8229 7.58092L5.57891 1.33592C5.43961 1.19653 5.27421 1.08596 5.09216 1.01051C4.9101 0.935071 4.71497 0.89624 4.51791 0.89624C4.32084 0.89624 4.12571 0.935071 3.94366 1.01051C3.76161 1.08596 3.59621 1.19653 3.45691 1.33592L1.33591 3.45692C1.0547 3.73821 0.896729 4.11967 0.896729 4.51742C0.896729 4.91517 1.0547 5.29663 1.33591 5.57792L7.58091 11.8229C7.62744 11.8701 7.65353 11.9337 7.65353 11.9999C7.65353 12.0662 7.62744 12.1298 7.58091 12.1769L1.33591 18.4219C1.0547 18.7032 0.896729 19.0847 0.896729 19.4824C0.896729 19.8802 1.0547 20.2616 1.33591 20.5429L3.45691 22.6639C3.59621 22.8033 3.76161 22.9139 3.94366 22.9893C4.12571 23.0648 4.32084 23.1036 4.51791 23.1036C4.71497 23.1036 4.9101 23.0648 5.09216 22.9893C5.27421 22.9139 5.43961 22.8033 5.57891 22.6639L11.8229 16.4189C11.8699 16.3721 11.9336 16.3459 11.9999 16.3459C12.0662 16.3459 12.1299 16.3721 12.1769 16.4189L18.4209 22.6639C18.5602 22.8033 18.7256 22.9139 18.9077 22.9893C19.0897 23.0648 19.2848 23.1036 19.4819 23.1036C19.679 23.1036 19.8741 23.0648 20.0562 22.9893C20.2382 22.9139 20.4036 22.8033 20.5429 22.6639L22.6639 20.5429C22.9451 20.2616 23.1031 19.8802 23.1031 19.4824C23.1031 19.0847 22.9451 18.7032 22.6639 18.4219L16.4189 12.1769C16.3724 12.1298 16.3463 12.0662 16.3463 11.9999C16.3463 11.9337 16.3724 11.8701 16.4189 11.8229L22.6639 5.57792Z",fill:"#F11717"}))),r.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),r.createElement("br",null)):t.props&&"h3"===t.props.mdxType?r.createElement("div",{key:t.props.children},r.createElement("br",null),r.createElement("br",null),t):t})),r.createElement("br",null),r.createElement("br",null),this.state.success?r.createElement("div",{className:"green"},"Congrats, you have succeeded!"):r.createElement("div",null,!1===this.state.success&&r.createElement("div",{className:"red"},"Sorry, you made too many mistakes."),r.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(r.Component)},8249:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(4),i=n(750),c=["components"],l={id:"exam",title:"Exam",authors:"Maxime Sallerin"},m=void 0,p={unversionedId:"smartpy/exam",id:"smartpy/exam",title:"Exam",description:"Question 1",source:"@site/docs/smartpy/exam.md",sourceDirName:"smartpy",slug:"/smartpy/exam",permalink:"/opentezos/smartpy/exam",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/smartpy/exam.md",tags:[],version:"current",lastUpdatedBy:"Aymeric",lastUpdatedAt:1628108608,formattedLastUpdatedAt:"8/4/2021",frontMatter:{id:"exam",title:"Exam",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Smart contract development with SmartPy",permalink:"/opentezos/smartpy/write-contract-smartpy"},next:{title:"Introduction",permalink:"/opentezos/ligo"}},u=[{value:"Question 1",id:"question-1",children:[],level:3},{value:"Question 2",id:"question-2",children:[],level:3},{value:"Question 3",id:"question-3",children:[],level:3},{value:"Question 4",id:"question-4",children:[],level:3},{value:"Question 5",id:"question-5",children:[],level:3},{value:"Question 6",id:"question-6",children:[],level:3},{value:"Question 7",id:"question-7",children:[],level:3},{value:"Question 8",id:"question-8",children:[],level:3},{value:"Question 9 and 10",id:"question-9-and-10",children:[],level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{moduleName:"SmartPy",mdxType:"ExamForm"},(0,o.kt)("h3",{id:"question-1"},"Question 1"),(0,o.kt)("p",null,"What notions are defined inside the smart contract?"),(0,o.kt)(i.Z,{name:"00",isCorrect:"true",mdxType:"ExamCheckbox"},"The type definition of the storage"),(0,o.kt)(i.Z,{name:"01",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,o.kt)(i.Z,{name:"02",isCorrect:"false",mdxType:"ExamCheckbox"},"The initial value of the storage"),(0,o.kt)(i.Z,{name:"03",isCorrect:"false",mdxType:"ExamCheckbox"},"The value of the entrypoint and its related parameters"),(0,o.kt)(i.Z,{name:"04",isCorrect:"true",mdxType:"ExamCheckbox"},"The type definition of the entrypoint"),(0,o.kt)(i.Z,{name:"05",isCorrect:"true",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,o.kt)("h3",{id:"question-2"},"Question 2"),(0,o.kt)("p",null,"What is returned by the execution of a smart contract?"),(0,o.kt)(i.Z,{name:"10",isCorrect:"false",mdxType:"ExamCheckbox"},"The current storage state when invoking the smart contract"),(0,o.kt)(i.Z,{name:"11",isCorrect:"true",mdxType:"ExamCheckbox"},"The modified storage state after the invocation of the smart contract"),(0,o.kt)(i.Z,{name:"12",isCorrect:"false",mdxType:"ExamCheckbox"},"The entrypoint that has been called (and its related parameters)"),(0,o.kt)(i.Z,{name:"13",isCorrect:"true",mdxType:"ExamCheckbox"},"The list of emitted operations produced by the execution of the smart contract"),(0,o.kt)(i.Z,{name:"14",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,o.kt)(i.Z,{name:"15",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,o.kt)(i.Z,{name:"16",isCorrect:"false",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,o.kt)(i.Z,{name:"17",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,o.kt)("h3",{id:"question-3"},"Question 3"),(0,o.kt)("p",null,"What can you do with the SmartPy online editor?"),(0,o.kt)(i.Z,{name:"20",isCorrect:"true",mdxType:"ExamCheckbox"},"Write, test and run your code"),(0,o.kt)(i.Z,{name:"21",isCorrect:"true",mdxType:"ExamCheckbox"},"Visualize the generated Michelson code and storage. "),(0,o.kt)(i.Z,{name:"22",isCorrect:"true",mdxType:"ExamCheckbox"},"View the results of the tests as an HTML document. "),(0,o.kt)(i.Z,{name:"23",isCorrect:"true",mdxType:"ExamCheckbox"},"Access a panel of several smart contract templates."),(0,o.kt)("h3",{id:"question-4"},"Question 4"),(0,o.kt)("p",null,"What is a ",(0,o.kt)("em",{parentName:"p"},"SmartPy")," smart contract?"),(0,o.kt)(i.Z,{name:"30",isCorrect:"false",mdxType:"ExamCheckbox"},"It is a class of method called `main` taking as input a storage and parameters, returning a list of operations and a modified storage."),(0,o.kt)(i.Z,{name:"31",isCorrect:"true",mdxType:"ExamCheckbox"},"It is a class definition that inherits from `sp.Contract`. A SmartPy contract consists in a state with one or several entry points."),(0,o.kt)("h3",{id:"question-5"},"Question 5"),(0,o.kt)("p",null,"What is the correct way to add an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," initialized to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to the storage?"),(0,o.kt)(i.Z,{name:"40",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@sp.storage\ndef __init__(self):\n    self.init(x = 0)\n"))),(0,o.kt)(i.Z,{name:"41",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@sp.storage\ndef storage(self):\n    self.x = 0\n"))),(0,o.kt)(i.Z,{name:"42",isCorrect:"true",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(self):\n    self.init(x = 0)\n"))),(0,o.kt)(i.Z,{name:"43",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(self):\n    self.x = 0\n"))),(0,o.kt)(i.Z,{name:"44",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __storage__(self):\n    self.init(x = 0)\n"))),(0,o.kt)("h3",{id:"question-6"},"Question 6"),(0,o.kt)("p",null,"What is true about the definition of entrypoints with SmartPy?"),(0,o.kt)(i.Z,{name:"50",isCorrect:"true",mdxType:"ExamCheckbox"},"Entrypoints are methods of a contract class that can be called from the outside."),(0,o.kt)(i.Z,{name:"51",isCorrect:"false",mdxType:"ExamCheckbox"},"Entrypoints are class definition that inherits from `sp.Contract`."),(0,o.kt)(i.Z,{name:"52",isCorrect:"false",mdxType:"ExamCheckbox"},"Entrypoints return values in Michelson."),(0,o.kt)(i.Z,{name:"53",isCorrect:"true",mdxType:"ExamCheckbox"},"Entrypoints need to be marked with the `@sp.entry_point` decorator."),(0,o.kt)("h3",{id:"question-7"},"Question 7"),(0,o.kt)("p",null,"What is true about tests and scenarios with SmartPy?"),(0,o.kt)(i.Z,{name:"60",isCorrect:"true",mdxType:"ExamCheckbox"},"A new test is a method marked with the `sp.add_test` decorator."),(0,o.kt)(i.Z,{name:"61",isCorrect:"true",mdxType:"ExamCheckbox"},"A new scenario is instantiated by `sp.test_scenario`."),(0,o.kt)(i.Z,{name:"62",isCorrect:"true",mdxType:"ExamCheckbox"},"Scenarios describe a sequence of actions: originating contracts, computing expressions, calling entry points, etc."),(0,o.kt)(i.Z,{name:"63",isCorrect:"true",mdxType:"ExamCheckbox"},"SmartPy provides the possibility to generate test accounts with `sp.test_account(seed)` which contain the following fields: `account.address`, `account.public_key_hash`, `account.public_key`, and `account.secret_key`."),(0,o.kt)("h3",{id:"question-8"},"Question 8"),(0,o.kt)("p",null,"What is true about types with SmartPy?"),(0,o.kt)(i.Z,{name:"70",isCorrect:"false",mdxType:"ExamCheckbox"},"SmartPy expressions do not have a type."),(0,o.kt)(i.Z,{name:"71",isCorrect:"true",mdxType:"ExamCheckbox"},"Just like in Python, most of the time, there is no need to specify the type of the object in SmartPy."),(0,o.kt)(i.Z,{name:"72",isCorrect:"true",mdxType:"ExamCheckbox"},"SmartPy uses type inference to determine each expression's type."),(0,o.kt)(i.Z,{name:"73",isCorrect:"true",mdxType:"ExamCheckbox"},"SmartPy types are all in the form `sp.T<TypeName>`."),(0,o.kt)("h3",{id:"question-9-and-10"},"Question 9 and 10"),(0,o.kt)("p",null,"For the next two questions let's consider the following piece of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Hello(sp.Contract):\n    def __init__(self):\n        self.init(x = 0)\n\n    @sp.entry_point\n    def set_x(newX):\n        # Todo: set x from the storage to newX\n")),(0,o.kt)("p",null,"What is the correct way to set x from the storage to ",(0,o.kt)("inlineCode",{parentName:"p"},"newX"),"."),(0,o.kt)(i.Z,{name:"80",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    self.x = newX\n"))),(0,o.kt)(i.Z,{name:"81",isCorrect:"true",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    self.data.x = newX\n"))),(0,o.kt)(i.Z,{name:"82",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    x = newX\n"))),(0,o.kt)(i.Z,{name:"83",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    newX = self.data.x\n"))),(0,o.kt)("p",null,"What is the correct way to modify the code to check that ",(0,o.kt)("inlineCode",{parentName:"p"},"newX")," is greater than 0 for the entrypoint ",(0,o.kt)("inlineCode",{parentName:"p"},"set_x"),"? (If not, we want the entrypoint invocation to fail and return an error message.)"),(0,o.kt)(i.Z,{name:"84",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    verify(newX >= 0, message="x must be a positive number")\n    self.data.x = newX\n'))),(0,o.kt)(i.Z,{name:"85",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    sp.if(newX >= 0, message="x must be a positive number"):\n        self.data.x = newX\n'))),(0,o.kt)(i.Z,{name:"86",isCorrect:"true",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    sp.verify(newX >= 0, message="x must be a positive number")\n    self.data.x = newX\n'))),(0,o.kt)(i.Z,{name:"87",isCorrect:"false",mdxType:"ExamCheckbox"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    sp.check(newX >= 0, message="x must be a positive number")\n    self.data.x = newX\n')))))}h.isMDXComponent=!0}}]);