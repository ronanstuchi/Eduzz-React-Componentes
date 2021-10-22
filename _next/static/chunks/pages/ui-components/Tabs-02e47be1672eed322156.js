(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{5e5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t}},317246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(759312),l=n(824246),o=(0,a.__importStar)(n(827378)),r=(0,a.__importDefault)(n(729873)),i=n(455693),d=(0,a.__importDefault)(n(530362));e.default=o.memo((function(t){var e=t.icon,n=t.id,u=t.className,s=t.children,p=(0,a.__rest)(t,["icon","id","className","children"]),c=(0,i.useContextSelector)(d.default,(function(t){return t.registerTabs}));return o.useEffect((function(){var t=c({id:n,children:s,className:u});return function(){return t()}}),[s,u,n,c]),(0,l.jsx)(r.default,(0,a.__assign)({disableRipple:!0,icon:e,id:n?"tab-"+n:null},p),void 0)}))},376508:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(759312),l=n(824246),o=(0,a.__importStar)(n(827378)),r=(0,a.__importDefault)(n(404841)),i=(0,a.__importDefault)(n(138944)),d=(0,a.__importDefault)(n(871002)),u=(0,a.__importDefault)(n(530362)),s=(0,d.default)((function(t){return{containerPadding:{padding:t.spacing(2)}}})),p=0;e.default=o.memo((function(t){var e=t.value,n=t.onChange,d=t.children,c=s(),m=(0,a.__read)(o.useState(0),2),b=m[0],k=m[1],f=(0,a.__read)(o.useState((function(){return[]})),2),_=f[0],g=f[1],v=void 0!==e,T=v?e:b,N=o.useCallback((function(t,e){v?n&&n(e):k(e)}),[v,n]),C=o.useCallback((function(t){var e="tab-"+ ++p;return g((function(n){return(0,a.__spreadArray)((0,a.__spreadArray)([],(0,a.__read)(n),!1),[(0,a.__assign)({key:e},t)],!1)})),function(){return g((function(t){return t.filter((function(t){return t.key!==e}))}))}}),[]),h=o.useMemo((function(){return{tabs:_,registerTabs:C}}),[_,C]);return(0,l.jsxs)(u.default.Provider,(0,a.__assign)({value:h},{children:[(0,l.jsx)(r.default,(0,a.__assign)({scrollButtons:"auto",variant:"scrollable",textColor:"primary",indicatorColor:"primary",value:T,onChange:N},{children:d}),void 0),null===_||void 0===_?void 0:_.map((function(t,e){var n=t.id,o=t.className,r=t.children,d=t.disablePadding,u=n||"content-tab-"+e;return(0,l.jsx)("div",(0,a.__assign)({role:"tabpanel",id:u,className:(0,i.default)(!d&&c.containerPadding,o),hidden:e!==T},{children:r}),u)}))]}),void 0)}))},530362:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(0,n(455693).createContext)({});e.default=a},249961:function(t,e,n){"use strict";var a=n(759312),l=(0,a.__importDefault)(n(5e5)),o=(0,a.__importDefault)(n(317246)),r=(0,a.__importDefault)(n(376508));e.Z=(0,l.default)(r.default,{Content:o.default})},871002:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(759312),l=n(764900),o=(0,a.__importDefault)(n(371269));e.default=function(t){return function(e){var n;if("function"===typeof t){var r=(0,o.default)();n=t(r)}else n=t;return Object.keys(n).reduce((function(t,o){var r;return(0,a.__assign)((0,a.__assign)({},t),((r={})[o]=(0,l.css)("function"===typeof n[o]?n[o](e):n[o]),r))}),{})}}},371269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(0,n(759312).__importDefault)(n(213016));e.default=function(){return(0,a.default)()}},72806:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return c},default:function(){return b}});var a=n(987397),l=n(338566),o=n(831750),r=n(827378),i=n(735318),d=n(747249),u=n(112696),s=n(249961),p=["components"],c={name:"Tabs",tableOfContents:{depth:0,children:[{depth:1,slug:"#tabs",title:"Tabs",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#auto-gerenci\xe1vel",title:"Auto gerenci\xe1vel"},{depth:3,slug:"#valor-controlado",title:"Valor controlado"},{depth:3,slug:"#desabilitado",title:"Desabilitado"},{depth:3,slug:"#com-\xedcone",title:"Com \xedcone",children:[{depth:4,slug:"#tabs-props",title:"Tabs props"},{depth:4,slug:"#tabscontent-props",title:"Tabs.Content props"}]}]}]}]}},m={meta:c};function b(t){var e=t.components,n=(0,o.Z)(t,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tabs"},"Tabs"),(0,i.kt)("p",null,"As abas facilitam a explora\xe7\xe3o e alternam entre diferentes visualiza\xe7\xf5es."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Para as Tabs funcionarem corretamente, insira uma div encapsulando o children dentro do Tab.Content.")),(0,i.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Tabs from '@eduzz/houston-ui/Tabs';\n")),(0,i.kt)("h3",{id:"auto-gerenci\xe1vel"},"Auto gerenci\xe1vel"),(0,i.kt)("p",null,"N\xe3o h\xe1 necessidade de controlar o estado da aba ativa."),(0,i.kt)(u.X,{__position:0,code:'<Tabs>\n  <Tabs.Content label="T\xedtulo 1">\n    <div>Conte\xfado 1</div>\n  </Tabs.Content>\n  <Tabs.Content label="T\xedtulo 2">\n    <div>Conte\xfado 2</div>\n  </Tabs.Content>\n</Tabs>',scope:{props:n,InsertEmoticonIcon:d.Z,Playground:u.X,Tabs:s.Z,meta:c},mdxType:"Playground"},(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z.Content,{label:"T\xedtulo 1"},(0,i.kt)("div",null,"Conte\xfado 1")),(0,i.kt)(s.Z.Content,{label:"T\xedtulo 2"},(0,i.kt)("div",null,"Conte\xfado 2")))),(0,i.kt)("h3",{id:"valor-controlado"},"Valor controlado"),(0,i.kt)(u.X,{__position:1,code:'() => {\n  const [tab, setTab] = React.useState(0)\n  return (\n    <Tabs value={tab} onChange={(value) => setTab(value)}>\n      <Tabs.Content label="T\xedtulo 1">\n        <div>Conte\xfado 1</div>\n      </Tabs.Content>\n      <Tabs.Content label="T\xedtulo 2">\n        <div>Conte\xfado 2</div>\n      </Tabs.Content>\n    </Tabs>\n  )\n}',scope:{props:n,InsertEmoticonIcon:d.Z,Playground:u.X,Tabs:s.Z,meta:c},mdxType:"Playground"},(function(){var t=r.useState(0),e=(0,l.Z)(t,2),n=e[0],a=e[1];return(0,i.kt)(s.Z,{value:n,onChange:function(t){return a(t)},mdxType:"Tabs"},(0,i.kt)(s.Z.Content,{label:"T\xedtulo 1"},(0,i.kt)("div",null,"Conte\xfado 1")),(0,i.kt)(s.Z.Content,{label:"T\xedtulo 2"},(0,i.kt)("div",null,"Conte\xfado 2")))})),(0,i.kt)("h3",{id:"desabilitado"},"Desabilitado"),(0,i.kt)(u.X,{__position:2,code:'<Tabs>\n  <Tabs.Content label="T\xedtulo 1">\n    <div>Conte\xfado 1</div>\n  </Tabs.Content>\n  <Tabs.Content label="Desabilitado 2" disabled>\n    <div>Conte\xfado 2</div>\n  </Tabs.Content>\n</Tabs>',scope:{props:n,InsertEmoticonIcon:d.Z,Playground:u.X,Tabs:s.Z,meta:c},mdxType:"Playground"},(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z.Content,{label:"T\xedtulo 1"},(0,i.kt)("div",null,"Conte\xfado 1")),(0,i.kt)(s.Z.Content,{label:"Desabilitado 2",disabled:!0},(0,i.kt)("div",null,"Conte\xfado 2")))),(0,i.kt)("h3",{id:"com-\xedcone"},"Com \xedcone"),(0,i.kt)(u.X,{__position:3,code:'<Tabs>\n  <Tabs.Content label="T\xedtulo 1" icon={<InsertEmoticonIcon />}>\n    <div>Conte\xfado 1</div>\n  </Tabs.Content>\n  <Tabs.Content label="T\xedtulo 2" icon={<InsertEmoticonIcon />}>\n    <div>Conte\xfado 2</div>\n  </Tabs.Content>\n</Tabs>',scope:{props:n,InsertEmoticonIcon:d.Z,Playground:u.X,Tabs:s.Z,meta:c},mdxType:"Playground"},(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z.Content,{label:"T\xedtulo 1",icon:(0,i.kt)(d.Z,{mdxType:"InsertEmoticonIcon"})},(0,i.kt)("div",null,"Conte\xfado 1")),(0,i.kt)(s.Z.Content,{label:"T\xedtulo 2",icon:(0,i.kt)(d.Z,{mdxType:"InsertEmoticonIcon"})},(0,i.kt)("div",null,"Conte\xfado 2")))),(0,i.kt)("h4",{id:"tabs-props"},"Tabs props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"\xcdndice da aba.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(value: number) => void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Recebe novo \xedndice.")))),(0,i.kt)("h4",{id:"tabscontent-props"},"Tabs.Content props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"label"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"icon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disabled"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disabledPadding"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))))}b.isMDXComponent=!0;var k={editThisPagePath:"src/pages/ui-components/Tabs/index.mdx"};for(var f in k)window[f]=k[f]},958962:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Tabs",function(){return n(72806)}])}},function(t){t.O(0,[4526,4375,6844,7456,6153,6034,9774,2888,179],(function(){return e=958962,t(t.s=e);var e}));var e=t.O();_N_E=e}]);