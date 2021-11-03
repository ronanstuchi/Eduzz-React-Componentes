(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7469],{72473:function(t,e,n){"use strict";function a(t,e,n){const a={};return Object.keys(t).forEach((r=>{a[r]=t[r].reduce(((t,a)=>(a&&(n&&n[a]&&t.push(n[a]),t.push(e(a))),t)),[]).join(" ")})),a}n.d(e,{Z:function(){return a}})},40510:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});const a={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function r(t,e){return a[e]||`${t}-${e}`}},29625:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(40510);function r(t,e){const n={};return e.forEach((e=>{n[e]=(0,a.Z)(t,e)})),n}},89127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(59312),r=n(24246),i=(0,a.__importStar)(n(27378)),o=(0,a.__importDefault)(n(55399)),l=i.forwardRef((function(t,e){var n=t.className,i=(0,a.__rest)(t,["className"]);return(0,r.jsx)(o.default,(0,a.__assign)({},i,{item:!0,className:n,ref:e}),void 0)}));e.default=l},60361:function(t,e,n){"use strict";var a=n(59312),r=n(24246),i=(0,a.__importStar)(n(27378)),o=(0,a.__importDefault)(n(57302)),l=(0,a.__importDefault)(n(38944)),d=(0,a.__importDefault)(n(71002)),u=(0,a.__importDefault)(n(41013)),s=(0,d.default)({root:{width:"100%",maxWidth:1062,margin:"0 auto"},comfortable:{padding:"0 18px"},cozy:{padding:"0 28px"},compact:{padding:"0 20px"},fluid:{maxWidth:"100%"}}),m=i.forwardRef((function(t,e){var n=t.children,d=t.className,m=t.spacing,p=void 0===m?"cozy":m,c=t.layout,k=void 0===c?"solid":c,f=(0,a.__rest)(t,["children","className","spacing","layout"]),g=s(),h=i.useMemo((function(){return{spacing:p}}),[p]);return(0,r.jsx)(u.default,(0,a.__assign)({value:h},{children:(0,r.jsx)(o.default,(0,a.__assign)({},f,{ref:e,className:(0,l.default)(g.root,g[p],"fluid"===k&&g.fluid,d)},{children:n}),void 0)}),void 0)}));e.Z=i.memo(m)},15684:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(59312),r=n(24246),i=(0,a.__importStar)(n(27378)),o=(0,a.__importDefault)(n(55399)),l=n(55693),d=n(41013),u=n(17790),s=i.forwardRef((function(t,e){var n=t.className,s=t.spacing,m=(0,a.__rest)(t,["className","spacing"]),p=(0,l.useContextSelector)(d.GridContext,(function(t){return t.spacing})),c=i.useMemo((function(){var t;return u.ContainerSizes[null!==(t=null!==s&&void 0!==s?s:p)&&void 0!==t?t:"cozy"]}),[p,s]);return(0,r.jsx)(o.default,(0,a.__assign)({},m,{container:!0,ref:e,className:n,spacing:c}),void 0)}));e.default=i.memo(s)},41013:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GridContext=void 0;var a=n(55693);e.GridContext=(0,a.createContext)({});var r=e.GridContext.Provider;e.default=r},17790:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ContainerSizes=void 0,e.ContainerSizes={comfortable:10,cozy:4,compact:2}},71002:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(59312),r=n(64900),i=(0,a.__importDefault)(n(71269));e.default=function(t){return function(e){var n;if("function"===typeof t){var o=(0,i.default)();n=t(o)}else n=t;return Object.keys(n).reduce((function(t,i){var o;return(0,a.__assign)((0,a.__assign)({},t),((o={})[i]=(0,r.css)("function"===typeof n[i]?n[i](e):n[i]),o))}),{})}}},71269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(57256);e.default=function(){return(0,a.useTheme)()}},31933:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return m},default:function(){return c}});var a=n(87397),r=n(31750),i=(n(27378),n(35318)),o=n(12696),l=n(89127),d=n(60361),u=n(15684),s=["components"],m={name:"Grid",tableOfContents:{depth:0,children:[{depth:1,slug:"#grid",title:"Grid",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#conceitos",title:"Conceitos"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#alinhamento",title:"Alinhamento"},{depth:3,slug:"#container-props",title:"Container Props"},{depth:3,slug:"#row-props",title:"Row Props"},{depth:3,slug:"#column-props",title:"Column Props"}]}]}]}},p={meta:m};function c(t){var e=t.components,n=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grid"},"Grid"),(0,i.kt)("p",null,"O layout responsivo da grade do Houston se adapta ao tamanho e orienta\xe7\xe3o da tela, garantindo a consist\xeancia entre layouts."),(0,i.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Container from '@eduzz/houston-ui/Grid/Container';\nimport Column from '@eduzz/houston-ui/Grid/Column';\nimport Row from '@eduzz/houston-ui/Grid/Row';\n")),(0,i.kt)("h3",{id:"conceitos"},"Conceitos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Container"),": Utilizado para limitar o tamanho (width) do layout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Row"),": Utilizado para controlar as colunas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Column"),": Utilizado para limitar o tamanho do conte\xfado interno.")),(0,i.kt)("h3",{id:"exemplo"},"Exemplo"),(0,i.kt)(o.X,{__position:0,code:"<Container>\n  <Row>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n  </Row>\n</Container>",scope:{props:n,Playground:o.X,Column:l.default,Container:d.Z,Row:u.default,meta:m},mdxType:"Playground"},(0,i.kt)(d.Z,{mdxType:"Container"},(0,i.kt)(u.default,{mdxType:"Row"},(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}}))))),(0,i.kt)("h3",{id:"alinhamento"},"Alinhamento"),(0,i.kt)("p",null,"Alinhamento vertical ",(0,i.kt)("inlineCode",{parentName:"p"},"alignItems"),", alinhamento horizontal ",(0,i.kt)("inlineCode",{parentName:"p"},"justify"),"."),(0,i.kt)(o.X,{__position:1,code:"<Container>\n  <Row alignItems=\"flex-end\">\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 150,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 120,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n    <Column xs={12} sm={4}>\n      <div\n        style={{\n          width: '100%',\n          height: 90,\n          background: '#eee',\n          borderRadius: 4,\n        }}\n      />\n    </Column>\n  </Row>\n</Container>",scope:{props:n,Playground:o.X,Column:l.default,Container:d.Z,Row:u.default,meta:m},mdxType:"Playground"},(0,i.kt)(d.Z,{mdxType:"Container"},(0,i.kt)(u.default,{alignItems:"flex-end",mdxType:"Row"},(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:150,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:120,background:"#eee",borderRadius:4}})),(0,i.kt)(l.default,{xs:12,sm:4,mdxType:"Column"},(0,i.kt)("div",{style:{width:"100%",height:90,background:"#eee",borderRadius:4}}))))),(0,i.kt)("h3",{id:"container-props"},"Container Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"tipo"),(0,i.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,i.kt)("th",{parentName:"tr",align:null},"padr\xe3o"),(0,i.kt)("th",{parentName:"tr",align:null},"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spacing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IContainerType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cozy")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"layout"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IContainterLayout")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"solid")),(0,i.kt)("td",{parentName:"tr",align:null},"Se ",(0,i.kt)("inlineCode",{parentName:"td"},"fluid"),", o valor da propriedade CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"max-width")," ser\xe1 ",(0,i.kt)("inlineCode",{parentName:"td"},"100%"),".")))),(0,i.kt)("h3",{id:"row-props"},"Row Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"tipo"),(0,i.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,i.kt)("th",{parentName:"tr",align:null},"padr\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alignItems"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridItemsAlignment")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"justify"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridJustification")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"column-props"},"Column Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"tipo"),(0,i.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,i.kt)("th",{parentName:"tr",align:null},"padr\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"xs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auto"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sm"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"md"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lg"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"xl"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GridSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")))))}c.isMDXComponent=!0;var k={editThisPagePath:"src/pages/ui-components/Grid/index.mdx"};for(var f in k)window[f]=k[f]},53523:function(t,e,n){"use strict";var a=n(29490);e.Z=a.Z},18019:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Grid",function(){return n(31933)}])},41469:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,{Z:function(){return a}})},99268:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(41469);var r=n(44262);function i(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,r.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},44262:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(41469);function r(t,e){if(t){if("string"===typeof t)return(0,a.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.Z)(t,e):void 0}}}},function(t){t.O(0,[4526,9371,6844,5724,6034,9774,2888,179],(function(){return e=18019,t(t.s=e);var e}));var e=t.O();_N_E=e}]);