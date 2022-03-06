"use strict";(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[9857],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},750:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o={button:"button_2UxY"},a=function(e){var t=e.children;return r.createElement("div",{className:o.root},t)}},4:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5068),o=n(7294),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={userName:"",sucess:void 0,showAnswers:!1},n}(0,r.Z)(t,e);var n=t.prototype;return n.handleSubmit=function(e){var t=this;e.preventDefault();var n=0,r=0;this.setState({showAnswers:!0}),this.props.children.forEach((function(e){e.props&&"ExamCheckbox"===e.props.mdxType&&(n+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(r+=1))})),parseInt(r/n*100)<=10?this.setState({success:!0}):this.setState({success:!1})},n.handleChange=function(e){var t;console.log(e);var n=e.target,r="checkbox"===n.type?n.checked:n.value,o=n.name;this.setState(((t={})[o]=r,t))},n.handleNameChange=function(e){this.setState({userName:e.target.value})},n.render=function(){var e=this;return o.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?o.createElement("div",{key:t.props.name},o.createElement("label",null,e.state.showAnswers&&o.createElement("div",{style:{display:"inline-block "}},!!e.state[t.props.name]==("true"===t.props.isCorrect)?o.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M23.1459 5.40002L20.3539 2.60002C20.3075 2.55346 20.2523 2.51651 20.1915 2.49131C20.1308 2.4661 20.0657 2.45312 19.9999 2.45312C19.9341 2.45312 19.869 2.4661 19.8083 2.49131C19.7475 2.51651 19.6924 2.55346 19.6459 2.60002L7.85391 14.4C7.80747 14.4466 7.75229 14.4835 7.69155 14.5087C7.6308 14.5339 7.56568 14.5469 7.49991 14.5469C7.43415 14.5469 7.36902 14.5339 7.30828 14.5087C7.24753 14.4835 7.19236 14.4466 7.14591 14.4L4.35391 11.6C4.30747 11.5535 4.25229 11.5165 4.19155 11.4913C4.1308 11.4661 4.06568 11.4531 3.99991 11.4531C3.93415 11.4531 3.86902 11.4661 3.80828 11.4913C3.74753 11.5165 3.69236 11.5535 3.64591 11.6L0.853913 14.4C0.760177 14.4938 0.70752 14.6209 0.70752 14.7535C0.70752 14.8861 0.760177 15.0133 0.853913 15.107L7.14591 21.4C7.19236 21.4466 7.24753 21.4835 7.30828 21.5087C7.36902 21.5339 7.43415 21.5469 7.49991 21.5469C7.56568 21.5469 7.6308 21.5339 7.69155 21.5087C7.75229 21.4835 7.80747 21.4466 7.85391 21.4L23.1459 6.10002C23.2375 6.00655 23.2888 5.8809 23.2888 5.75002C23.2888 5.61914 23.2375 5.49348 23.1459 5.40002Z",fill:"#00CC14"})):o.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M22.6639 5.57792C22.9451 5.29663 23.1031 4.91517 23.1031 4.51742C23.1031 4.11967 22.9451 3.73821 22.6639 3.45692L20.5429 1.33592C20.4036 1.19653 20.2382 1.08596 20.0562 1.01051C19.8741 0.935071 19.679 0.89624 19.4819 0.89624C19.2848 0.89624 19.0897 0.935071 18.9077 1.01051C18.7256 1.08596 18.5602 1.19653 18.4209 1.33592L12.1769 7.58092C12.1299 7.6277 12.0662 7.65395 11.9999 7.65395C11.9336 7.65395 11.8699 7.6277 11.8229 7.58092L5.57891 1.33592C5.43961 1.19653 5.27421 1.08596 5.09216 1.01051C4.9101 0.935071 4.71497 0.89624 4.51791 0.89624C4.32084 0.89624 4.12571 0.935071 3.94366 1.01051C3.76161 1.08596 3.59621 1.19653 3.45691 1.33592L1.33591 3.45692C1.0547 3.73821 0.896729 4.11967 0.896729 4.51742C0.896729 4.91517 1.0547 5.29663 1.33591 5.57792L7.58091 11.8229C7.62744 11.8701 7.65353 11.9337 7.65353 11.9999C7.65353 12.0662 7.62744 12.1298 7.58091 12.1769L1.33591 18.4219C1.0547 18.7032 0.896729 19.0847 0.896729 19.4824C0.896729 19.8802 1.0547 20.2616 1.33591 20.5429L3.45691 22.6639C3.59621 22.8033 3.76161 22.9139 3.94366 22.9893C4.12571 23.0648 4.32084 23.1036 4.51791 23.1036C4.71497 23.1036 4.9101 23.0648 5.09216 22.9893C5.27421 22.9139 5.43961 22.8033 5.57891 22.6639L11.8229 16.4189C11.8699 16.3721 11.9336 16.3459 11.9999 16.3459C12.0662 16.3459 12.1299 16.3721 12.1769 16.4189L18.4209 22.6639C18.5602 22.8033 18.7256 22.9139 18.9077 22.9893C19.0897 23.0648 19.2848 23.1036 19.4819 23.1036C19.679 23.1036 19.8741 23.0648 20.0562 22.9893C20.2382 22.9139 20.4036 22.8033 20.5429 22.6639L22.6639 20.5429C22.9451 20.2616 23.1031 19.8802 23.1031 19.4824C23.1031 19.0847 22.9451 18.7032 22.6639 18.4219L16.4189 12.1769C16.3724 12.1298 16.3463 12.0662 16.3463 11.9999C16.3463 11.9337 16.3724 11.8701 16.4189 11.8229L22.6639 5.57792Z",fill:"#F11717"}))),o.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),o.createElement("br",null)):t.props&&"h3"===t.props.mdxType?o.createElement("div",{key:t.props.children},o.createElement("br",null),o.createElement("br",null),t):t})),o.createElement("br",null),o.createElement("br",null),this.state.success?o.createElement("div",{className:"green"},"Congrats, you have succeeded!"):o.createElement("div",null,!1===this.state.success&&o.createElement("div",{className:"red"},"Sorry, you made too many mistakes."),o.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(o.Component)},3351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(4),c=n(750),s=["components"],u={id:"exam",title:"Exam",authors:"Aymeric Bethencourt"},l=void 0,m={unversionedId:"contribute/exam",id:"contribute/exam",title:"Exam",description:"Question 1",source:"@site/docs/contribute/exam.md",sourceDirName:"contribute",slug:"/contribute/exam",permalink:"/opentezos/contribute/exam",editUrl:"https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/docs/contribute/exam.md",tags:[],version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623685436,formattedLastUpdatedAt:"6/14/2021",frontMatter:{id:"exam",title:"Exam",authors:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Become a baker or a delegator",permalink:"/opentezos/contribute/baker"}},p=[{value:"Question 1",id:"question-1",children:[],level:3},{value:"Question 2",id:"question-2",children:[],level:3},{value:"Question 3",id:"question-3",children:[],level:3},{value:"Question 4",id:"question-4",children:[],level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{moduleName:"How to Contribute",mdxType:"ExamForm"},(0,a.kt)("h3",{id:"question-1"},"Question 1"),(0,a.kt)("p",null,"I see an error on ",(0,a.kt)("em",{parentName:"p"},"OpenTezos"),"; what should I do?"),(0,a.kt)(c.Z,{name:"00",isCorrect:"false",mdxType:"ExamCheckbox"},"Nothing"),(0,a.kt)(c.Z,{name:"01",isCorrect:"false",mdxType:"ExamCheckbox"},"Complain on _StackOverflow_"),(0,a.kt)(c.Z,{name:"02",isCorrect:"true",mdxType:"ExamCheckbox"},"Open a Github issue on [github.com/octo-technology/OpenTezos](https://github.com/octo-technology/OpenTezos)"),(0,a.kt)(c.Z,{name:"03",isCorrect:"true",mdxType:"ExamCheckbox"},"Optionally fix the error in the source code and submit a pull request"),(0,a.kt)("h3",{id:"question-2"},"Question 2"),(0,a.kt)("p",null,"To receive a ",(0,a.kt)("em",{parentName:"p"},"Tezos Foundation")," grant, one has to:"),(0,a.kt)(c.Z,{name:"10",isCorrect:"true",mdxType:"ExamCheckbox"},"devise a project idea"),(0,a.kt)(c.Z,{name:"11",isCorrect:"true",mdxType:"ExamCheckbox"},"apply for a grant"),(0,a.kt)(c.Z,{name:"12",isCorrect:"true",mdxType:"ExamCheckbox"},"wait for the application to be reviewed"),(0,a.kt)(c.Z,{name:"13",isCorrect:"true",mdxType:"ExamCheckbox"},"react to the review's findings"),(0,a.kt)("h3",{id:"question-3"},"Question 3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tezos Foundation")," grants are offered:"),(0,a.kt)(c.Z,{name:"20",isCorrect:"false",mdxType:"ExamCheckbox"},"only for projects related to Baking, Developer Experience, Education and Training, End-User Applications, Privacy and Security"),(0,a.kt)(c.Z,{name:"21",isCorrect:"true",mdxType:"ExamCheckbox"},"for all projects deemed to advance the Tezos ecosystem"),(0,a.kt)("h3",{id:"question-4"},"Question 4"),(0,a.kt)("p",null,"Tezos is written in:"),(0,a.kt)(c.Z,{name:"30",isCorrect:"false",mdxType:"ExamCheckbox"},"C++"),(0,a.kt)(c.Z,{name:"31",isCorrect:"true",mdxType:"ExamCheckbox"},"OCaml"),(0,a.kt)(c.Z,{name:"32",isCorrect:"false",mdxType:"ExamCheckbox"},"Pascal"),(0,a.kt)(c.Z,{name:"33",isCorrect:"false",mdxType:"ExamCheckbox"},"GO")))}h.isMDXComponent=!0}}]);