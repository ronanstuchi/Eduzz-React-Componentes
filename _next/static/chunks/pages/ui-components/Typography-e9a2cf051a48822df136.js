(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5211],{64900:function(t,e,n){"use strict";n.r(e),n.d(e,{cache:function(){return T},css:function(){return c},cx:function(){return m},flush:function(){return u},getRegisteredStyles:function(){return g},hydrate:function(){return d},injectGlobal:function(){return h},keyframes:function(){return f},merge:function(){return y},sheet:function(){return k}});var a=n(6588),r=n(9232),o=n(53211);function l(t,e){if(void 0===t.inserted[e.name])return t.insert("",e,t.sheet,!0)}function i(t,e,n){var a=[],r=(0,o.f)(t,a,n);return a.length<2?n:r+e(a)}var p=function t(e){for(var n="",a=0;a<e.length;a++){var r=e[a];if(null!=r){var o=void 0;switch(typeof r){case"boolean":break;case"object":if(Array.isArray(r))o=t(r);else for(var l in o="",r)r[l]&&l&&(o&&(o+=" "),o+=l);break;default:o=r}o&&(n&&(n+=" "),n+=o)}}return n},s=function(t){var e=(0,a.Z)(t);e.sheet.speedy=function(t){this.isSpeedy=t},e.compat=!0;var n=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var l=(0,r.O)(n,e.registered,void 0);return(0,o.M)(e,l,!1),e.key+"-"+l.name};return{css:n,cx:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return i(e.registered,n,p(a))},injectGlobal:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=(0,r.O)(n,e.registered);l(e,o)},keyframes:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=(0,r.O)(n,e.registered),i="animation-"+o.name;return l(e,{name:o.name,styles:"@keyframes "+i+"{"+o.styles+"}"}),i},hydrate:function(t){t.forEach((function(t){e.inserted[t]=!0}))},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:o.f.bind(null,e.registered),merge:i.bind(null,e.registered,n)}}({key:"css"}),u=s.flush,d=s.hydrate,m=s.cx,y=s.merge,g=s.getRegisteredStyles,h=s.injectGlobal,f=s.keyframes,c=s.css,k=s.sheet,T=s.cache},72078:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(59312),r=(0,a.__importStar)(n(27378)),o=(0,a.__importDefault)(n(38944)),l=(0,(0,a.__importDefault)(n(71002)).default)((function(t){return{text:function(e){var n,a,r;return{margin:0,fontSize:t.textSize(null!==(n=e.size)&&void 0!==n?n:"normal"),lineHeight:t.lineHeight(null!==(a=e.lineHeight)&&void 0!==a?a:"normal"),fontWeight:t.fontWeight(null!==(r=e.fontWeight)&&void 0!==r?r:"regular"),marginBottom:e.marginBottom?t.spacing(2):null}},secondary:{color:t.colors.grey[500],fontSize:t.textSize("small")}}}));e.default=r.memo((function(t){var e,n=l(t),i=r.useMemo((function(){return{id:null===t||void 0===t?void 0:t.id,children:null===t||void 0===t?void 0:t.children,onClick:null===t||void 0===t?void 0:t.onClick}}),[null===t||void 0===t?void 0:t.children,null===t||void 0===t?void 0:t.id,null===t||void 0===t?void 0:t.onClick]),p=r.useMemo((function(){return{secondary:n.secondary}}),[n.secondary]);return r.createElement(null!==(e=null===t||void 0===t?void 0:t.component)&&void 0!==e?e:"p",(0,a.__assign)((0,a.__assign)({},i),{className:(0,o.default)(n.text,null===t||void 0===t?void 0:t.className,p[null===t||void 0===t?void 0:t.variant])}))}))},71002:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(59312),r=n(64900),o=(0,a.__importDefault)(n(71269));e.default=function(t){return function(e){var n;if("function"===typeof t){var l=(0,o.default)();n=t(l)}else n=t;return Object.keys(n).reduce((function(t,o){var l;return(0,a.__assign)((0,a.__assign)({},t),((l={})[o]=(0,r.css)("function"===typeof n[o]?n[o](e):n[o]),l))}),{})}}},71269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(0,n(59312).__importDefault)(n(13016));e.default=function(){return(0,a.default)()}},27509:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return s},default:function(){return d}});var a=n(87397),r=n(31750),o=(n(27378),n(35318)),l=n(12696),i=n(72078),p=["components"],s={name:"Typography",tableOfContents:{depth:0,children:[{depth:1,slug:"#typography",title:"Typography",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#tamanhos",title:"Tamanhos"},{depth:3,slug:"#intensidade-da-fonte",title:"Intensidade da fonte"},{depth:3,slug:"#altura-da-linha",title:"Altura da linha"}]}]}]}},u={meta:s};function d(t){var e=t.components,n=(0,r.Z)(t,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typography"},"Typography"),(0,o.kt)("p",null,"O componente de tipografia \xe9 utilizado para cria\xe7\xe3o de t\xedtulos, subt\xedtulos e textos, padronizando fontes, espa\xe7amentos e tudo\nreferente a tipografias e hierarquia textual."),(0,o.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Typography from '@eduzz/houston-ui/Typography';\n")),(0,o.kt)("h3",{id:"tamanhos"},"Tamanhos"),(0,o.kt)(l.X,{__position:0,code:'<Typography size="xx-small">Houston Design System</Typography>\n<Typography size="x-small">Houston Design System</Typography>\n<Typography size="small">Houston Design System</Typography>\n<Typography size="normal">Houston Design System</Typography>\n<Typography size="medium">Houston Design System</Typography>\n<Typography size="large">Houston Design System</Typography>\n<Typography size="x-large">Houston Design System</Typography>\n<Typography size="xx-large">Houston Design System</Typography>',scope:{props:n,Playground:l.X,Typography:i.default,meta:s},mdxType:"Playground"},(0,o.kt)(i.default,{size:"xx-small",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"x-small",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"small",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"normal",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"medium",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"large",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"x-large",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{size:"xx-large",mdxType:"Typography"},"Houston Design System")),(0,o.kt)("h3",{id:"intensidade-da-fonte"},"Intensidade da fonte"),(0,o.kt)(l.X,{__position:1,code:'<Typography fontWeight="light">Houston Design System</Typography>\n<Typography fontWeight="regular">Houston Design System</Typography>\n<Typography fontWeight="semibold">Houston Design System</Typography>\n<Typography fontWeight="bold">Houston Design System</Typography>',scope:{props:n,Playground:l.X,Typography:i.default,meta:s},mdxType:"Playground"},(0,o.kt)(i.default,{fontWeight:"light",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{fontWeight:"regular",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{fontWeight:"semibold",mdxType:"Typography"},"Houston Design System"),(0,o.kt)(i.default,{fontWeight:"bold",mdxType:"Typography"},"Houston Design System")),(0,o.kt)("h3",{id:"altura-da-linha"},"Altura da linha"),(0,o.kt)(l.X,{__position:2,code:'<Typography lineHeight="compact" marginBottom>\n  Houston\n  <br />\n  we solve problems\n</Typography>\n<hr />\n<Typography lineHeight="normal" marginBottom>\n  Houston\n  <br />\n  we solve problems\n</Typography>\n<hr />\n<Typography lineHeight="comfortable">\n  Houston\n  <br />\n  we solve problems\n</Typography>',scope:{props:n,Playground:l.X,Typography:i.default,meta:s},mdxType:"Playground"},(0,o.kt)(i.default,{lineHeight:"compact",marginBottom:!0,mdxType:"Typography"},"Houston",(0,o.kt)("br",null),"we solve problems"),(0,o.kt)("hr",null),(0,o.kt)(i.default,{lineHeight:"normal",marginBottom:!0,mdxType:"Typography"},"Houston",(0,o.kt)("br",null),"we solve problems"),(0,o.kt)("hr",null),(0,o.kt)(i.default,{lineHeight:"comfortable",mdxType:"Typography"},"Houston",(0,o.kt)("br",null),"we solve problems")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"prop"),(0,o.kt)("th",{parentName:"tr",align:null},"tipo"),(0,o.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,o.kt)("th",{parentName:"tr",align:null},"padr\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"size"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FontSizes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"normal"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lineHeight"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LineHeights")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"normal"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fontWeight"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FontWeight")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"regular"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"marginBottom"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"className"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onClick"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"function")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ITypographyComponent")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"p"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"variant"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ITypographyVariant")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"-")))))}d.isMDXComponent=!0;var m={editThisPagePath:"src/pages/ui-components/Typography/index.mdx"};for(var y in m)window[y]=m[y]},46561:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Typography",function(){return n(27509)}])}},function(t){t.O(0,[4526,9371,6844,6034,9774,2888,179],(function(){return e=46561,t(t.s=e);var e}));var e=t.O();_N_E=e}]);