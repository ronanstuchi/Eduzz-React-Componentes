(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1068],{14234:function(e,t,n){"use strict";var r=n(59312),o=n(24246),a=(0,r.__importStar)(n(27378)),l=(0,r.__importDefault)(n(55537)),i=(0,r.__importDefault)(n(38944)),u=(0,r.__importDefault)(n(37631));t.Z=a.memo((function(e){var t=e.children,n=e.className,a=e.paper,d=(0,r.__rest)(e,["children","className","paper"]),s=(0,u.default)(e);return(0,o.jsx)(l.default,(0,r.__assign)({},d,{className:(0,i.default)(n,s.box,a&&s.paper)},{children:t}),void 0)}))},37631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,(0,n(59312).__importDefault)(n(71002)).default)((function(e){return{box:function(t){var n,r=t.xs,o=t.sm,a=t.md,l=t.lg,i=t.xl;return(n={})[e.breakpoints.up("xs")]={padding:null===r||void 0===r?void 0:r.padding,margin:null===r||void 0===r?void 0:r.margin},n[e.breakpoints.up("sm")]={padding:null===o||void 0===o?void 0:o.padding,margin:null===o||void 0===o?void 0:o.margin},n[e.breakpoints.up("md")]={padding:null===a||void 0===a?void 0:a.padding,margin:null===a||void 0===a?void 0:a.margin},n[e.breakpoints.up("lg")]={padding:null===l||void 0===l?void 0:l.padding,margin:null===l||void 0===l?void 0:l.margin},n[e.breakpoints.up("xl")]={padding:null===i||void 0===i?void 0:i.padding,margin:null===i||void 0===i?void 0:i.margin},n},paper:{background:"#fff",borderRadius:4}}}));t.default=r},99203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importStar)(n(27378)),l=(0,r.__importDefault)(n(43168)),i=(0,r.__importDefault)(n(80910));t.default=a.memo((function(e){var t=e.children,n=e.disabled,a=void 0!==n&&n,u=e.variant,d=void 0===u?"contained":u,s=e.startIcon,p=e.loading,c=void 0!==p&&p,m=e.loadingText,f=(0,r.__rest)(e,["children","disabled","variant","startIcon","loading","loadingText"]);return(0,o.jsxs)(l.default,(0,r.__assign)({},f,{disabled:a||c,startIcon:c?(0,o.jsx)(i.default,{size:18,color:"inherit"},void 0):s,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:d,color:"primary"},{children:[!c&&t,c&&(null!==m&&void 0!==m?m:t)]}),void 0)}))},89127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importStar)(n(27378)),l=(0,r.__importDefault)(n(55399)),i=a.forwardRef((function(e,t){var n=e.className,a=(0,r.__rest)(e,["className"]);return(0,o.jsx)(l.default,(0,r.__assign)({},a,{item:!0,className:n,ref:t}),void 0)}));t.default=i},60361:function(e,t,n){"use strict";var r=n(59312),o=n(24246),a=(0,r.__importStar)(n(27378)),l=(0,r.__importDefault)(n(57302)),i=(0,r.__importDefault)(n(38944)),u=(0,r.__importDefault)(n(71002)),d=(0,r.__importDefault)(n(41013)),s=(0,u.default)({root:{width:"100%",maxWidth:1062,margin:"0 auto"},comfortable:{padding:"0 18px"},cozy:{padding:"0 28px"},compact:{padding:"0 20px"},fluid:{maxWidth:"100%"}}),p=a.forwardRef((function(e,t){var n=e.children,u=e.className,p=e.spacing,c=void 0===p?"cozy":p,m=e.layout,f=void 0===m?"solid":m,g=(0,r.__rest)(e,["children","className","spacing","layout"]),k=s(),x=a.useMemo((function(){return{spacing:c}}),[c]);return(0,o.jsx)(d.default,(0,r.__assign)({value:x},{children:(0,o.jsx)(l.default,(0,r.__assign)({},g,{ref:t,className:(0,i.default)(k.root,k[c],"fluid"===f&&k.fluid,u)},{children:n}),void 0)}),void 0)}));t.Z=a.memo(p)},15684:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importStar)(n(27378)),l=(0,r.__importDefault)(n(55399)),i=n(55693),u=n(41013),d=n(17790),s=a.forwardRef((function(e,t){var n=e.className,s=e.spacing,p=(0,r.__rest)(e,["className","spacing"]),c=(0,i.useContextSelector)(u.GridContext,(function(e){return e.spacing})),m=a.useMemo((function(){var e;return d.ContainerSizes[null!==(e=null!==s&&void 0!==s?s:c)&&void 0!==e?e:"cozy"]}),[c,s]);return(0,o.jsx)(l.default,(0,r.__assign)({},p,{container:!0,ref:t,className:n,spacing:m}),void 0)}));t.default=a.memo(s)},41013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GridContext=void 0;var r=n(55693);t.GridContext=(0,r.createContext)({});var o=t.GridContext.Provider;t.default=o},17790:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContainerSizes=void 0,t.ContainerSizes={comfortable:10,cozy:4,compact:2}},62159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importDefault)(n(41525)),l=(0,n(57256).styled)(a.default)((function(e){var t=e.theme;return{root:{height:8},colorPrimary:{backgroundColor:t.colors.grey[200]},bar:{height:80,backgroundColor:t.colors.success.main}}}));t.default=function(e){var t=e.progress;return(0,o.jsx)(l,{variant:"determinate",value:t>100?100:t},void 0)}},68648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importDefault)(n(40196)),l=(0,r.__importDefault)(n(27251)),i=(0,r.__importDefault)(n(38944)),u=(0,(0,r.__importDefault)(n(71002)).default)((function(e){return{root:{width:40,height:40,color:e.colors.grey[300],backgroundColor:e.colors.grey[200],borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",fontSize:e.textSize("default"),fontWeight:e.fontWeight("semibold")},finished:{backgroundColor:e.colors.success.main,fontWeight:e.fontWeight("semibold"),color:"#fff"},check:{fontSize:e.textSize("default")},warning:{color:e.colors.error.main}}}));t.default=function(e){var t,n=e.icon,d=e.active,s=e.completed,p=e.error,c=u();return(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(l.default,{className:c.warning},void 0),!p&&(0,o.jsxs)("div",(0,r.__assign)({className:(0,i.default)(c.root,(t={},t[c.finished]=d||s,t))},{children:[s&&(0,o.jsx)(a.default,{className:c.check},void 0),!s&&n]}),void 0)]},void 0)}},6222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importStar)(n(27378)),l=(0,r.__importDefault)(n(18351)),i=(0,r.__importDefault)(n(9149)),u=(0,r.__importDefault)(n(53069)),d=(0,r.__importDefault)(n(38944)),s=(0,r.__importDefault)(n(71002)),p=(0,r.__importDefault)(n(62159)),c=(0,r.__importDefault)(n(68648)),m=(0,s.default)({root:{padding:"21px 20px 16px",borderTopRightRadius:4,borderTopLeftRadius:4,justifyContent:"space-between"}});t.default=a.memo((function(e){var t=e.steps,n=e.currentStep,a=void 0===n?0:n,s=(0,r.__rest)(e,["steps","currentStep"]),f=m(),g=(a+1)/t.length*100;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,(0,r.__assign)({className:(0,d.default)([f.root,!!s.className&&s.className]),activeStep:a,connector:null},{children:t.map((function(e,t){return(0,o.jsx)(l.default,{children:(0,o.jsx)(i.default,(0,r.__assign)({icon:e.icon||t+1,StepIconComponent:c.default,error:e.error},{children:e.label}),void 0)},"progress-step-"+t)}))}),void 0),(0,o.jsx)(p.default,{progress:g},void 0)]},void 0)}))},44676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(24246),a=(0,r.__importDefault)(n(80910)),l=(0,r.__importDefault)(n(38944)),i=(0,r.__importDefault)(n(71002)),u=(0,r.__importDefault)(n(72078)),d=(0,i.default)((function(e){return{root:{position:"relative",display:"inline-flex"},circularProgressBackground:{opacity:.2},circularProgress:{"& svg":{color:e.colors.success.main}},progress:{position:"absolute"},progressError:{"& svg":{color:e.colors.error.main}},progressIndicator:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",bottom:0,top:0,left:0,right:0,"& p":{color:e.colors.grey[500]}}}}));t.default=function(e){var t=e.currentStep,n=void 0===t?0:t,i=e.maxSteps,s=e.type,p=e.error,c=d(),m=n/i*100,f="percentage"===s?m+"%":n+"/"+i;return(0,o.jsxs)("div",(0,r.__assign)({className:c.root},{children:[(0,o.jsx)(a.default,{variant:"determinate",size:90,value:100,className:(0,l.default)(c.circularProgress,c.circularProgressBackground,p&&c.progressError),color:"primary"},void 0),(0,o.jsx)(a.default,{variant:"determinate",size:90,value:m,className:(0,l.default)(c.circularProgress,c.progress,p&&c.progressError)},void 0),(0,o.jsx)("div",(0,r.__assign)({className:c.progressIndicator},{children:(0,o.jsx)(u.default,(0,r.__assign)({size:"default"},{children:f}),void 0)}),void 0)]}),void 0)}},39484:function(e,t,n){"use strict";t.SE=void 0;var r=n(59312);(0,r.__importDefault)(n(6222)).default,(0,r.__importDefault)(n(44676)).default;var o=(0,r.__importDefault)(n(3712));t.SE=o.default},3712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=(0,r.__importStar)(n(27378));t.default=function(){var e=(0,r.__read)(o.useState(0),2),t=e[0],n=e[1];return{nextStep:o.useCallback((function(){return n((function(e){return e+1}))}),[]),backStep:o.useCallback((function(){return n((function(e){return e-1}))}),[]),setCurrentStep:n,currentStep:t}}},72078:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=(0,r.__importStar)(n(27378)),a=(0,r.__importDefault)(n(38944)),l=(0,(0,r.__importDefault)(n(71002)).default)((function(e){return{text:function(t){var n,r,o;return{margin:0,fontSize:e.textSize(null!==(n=t.size)&&void 0!==n?n:"normal"),lineHeight:e.lineHeight(null!==(r=t.lineHeight)&&void 0!==r?r:"normal"),fontWeight:e.fontWeight(null!==(o=t.fontWeight)&&void 0!==o?o:"regular"),marginBottom:t.marginBottom?e.spacing(2):null}},secondary:{color:e.colors.grey[500],fontSize:e.textSize("small")}}}));t.default=o.memo((function(e){var t,n=l(e),i=o.useMemo((function(){return{id:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.children,onClick:null===e||void 0===e?void 0:e.onClick}}),[null===e||void 0===e?void 0:e.children,null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.onClick]),u=o.useMemo((function(){return{secondary:n.secondary}}),[n.secondary]);return o.createElement(null!==(t=null===e||void 0===e?void 0:e.component)&&void 0!==t?t:"p",(0,r.__assign)((0,r.__assign)({},i),{className:(0,a.default)(n.text,null===e||void 0===e?void 0:e.className,u[null===e||void 0===e?void 0:e.variant])}))}))},71002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59312),o=n(64900),a=(0,r.__importDefault)(n(71269));t.default=function(e){return function(t){var n;if("function"===typeof e){var l=(0,a.default)();n=e(l)}else n=e;return Object.keys(n).reduce((function(e,a){var l;return(0,r.__assign)((0,r.__assign)({},e),((l={})[a]=(0,o.css)("function"===typeof n[a]?n[a](t):n[a]),l))}),{})}}},71269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(59312).__importDefault)(n(13016));t.default=function(){return(0,r.default)()}},10560:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return C},default:function(){return h}});var r=n(87397),o=n(31750),a=n(27378),l=n(35318),i=n(22093),u=n(99640),d=n(58489),s=n(12696),p=n(14234),c=n(99203),m=n(89127),f=n(60361),g=n(15684),k=n(39484),x=n(6222),_=n(44676),v=["components"],C={name:"Progress",tableOfContents:{depth:0,children:[{depth:1,slug:"#progress",title:"Progress",children:[{depth:2,slug:"#line",title:"Line",children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"},{depth:3,slug:"#etapa-de-erro",title:"Etapa de erro"}]},{depth:2,slug:"#round",title:"Round",children:[{depth:3,slug:"#importa\xe7\xe3o-1",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo-1",title:"Exemplo"},{depth:3,slug:"#erro-no-progresso",title:"Erro no progresso"}]}]}]}},S={meta:C};function h(e){var t=e.components,n=(0,o.Z)(e,v);return(0,l.kt)("wrapper",(0,r.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"progress"},"Progress"),(0,l.kt)("p",null,"S\xe3o usados para transmitir progresso atrav\xe9s de etapas numeradas. Ele fornece um fluxo de trabalho com etapas."),(0,l.kt)("h2",{id:"line"},"Line"),(0,l.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import ProgressLine from '@eduzz/houston-ui/Progress/Line';\n")),(0,l.kt)("h3",{id:"exemplo"},"Exemplo"),(0,l.kt)(s.X,{__position:0,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Dados pessoais',\n    },\n    {\n      label: 'Endere\xe7o',\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:n,AccountCircleIcon:i.Z,AddAPhotoIcon:u.Z,LinkIcon:d.Z,Playground:s.X,Box:p.Z,Button:c.default,Column:m.default,Container:f.Z,Row:g.default,useProgress:k.SE,ProgressLine:x.default,ProgressRound:_.default,meta:C},mdxType:"Playground"},(function(){var e=(0,k.SE)(),t=e.nextStep,n=e.backStep,r=e.setCurrentStep,o=e.currentStep,i=[{label:"Dados pessoais"},{label:"Endere\xe7o"},{label:"Pagamento"},{label:"Obrigado"}];return(0,l.kt)(f.Z,{mdxType:"Container"},(0,l.kt)(g.default,{mdxType:"Row"},(0,l.kt)(m.default,{xs:12,mdxType:"Column"},(0,l.kt)(x.default,{steps:i,currentStep:o,mdxType:"ProgressLine"}))),(0,l.kt)("div",{style:{margin:"16px 0"}}),(0,l.kt)(g.default,{mdxType:"Row"},o===i.length&&(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:function(){return r(0)},variant:"text",mdxType:"Button"},"Resetar")),o!==i.length&&(0,l.kt)(a.Fragment,null,(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:n,disabled:0===o,mdxType:"Button"},"Anterior")),(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:t,disabled:o===i.length,mdxType:"Button"},"Pr\xf3ximo")))))})),(0,l.kt)("h3",{id:"com-\xedcones"},"Com \xedcones"),(0,l.kt)(s.X,{__position:1,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Criar conta',\n      icon: <AccountCircleIcon />,\n    },\n    {\n      label: 'Adicionar foto',\n      icon: <AddAPhotoIcon />,\n    },\n    {\n      label: 'Compartilhe com amigos',\n      icon: <LinkIcon />,\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:n,AccountCircleIcon:i.Z,AddAPhotoIcon:u.Z,LinkIcon:d.Z,Playground:s.X,Box:p.Z,Button:c.default,Column:m.default,Container:f.Z,Row:g.default,useProgress:k.SE,ProgressLine:x.default,ProgressRound:_.default,meta:C},mdxType:"Playground"},(function(){var e=(0,k.SE)(),t=e.nextStep,n=e.backStep,r=e.setCurrentStep,o=e.currentStep,s=[{label:"Criar conta",icon:(0,l.kt)(i.Z,{mdxType:"AccountCircleIcon"})},{label:"Adicionar foto",icon:(0,l.kt)(u.Z,{mdxType:"AddAPhotoIcon"})},{label:"Compartilhe com amigos",icon:(0,l.kt)(d.Z,{mdxType:"LinkIcon"})}];return(0,l.kt)(f.Z,{mdxType:"Container"},(0,l.kt)(g.default,{mdxType:"Row"},(0,l.kt)(m.default,{xs:12,mdxType:"Column"},(0,l.kt)(x.default,{steps:s,currentStep:o,mdxType:"ProgressLine"}))),(0,l.kt)("div",{style:{margin:"16px 0"}}),(0,l.kt)(g.default,{mdxType:"Row"},o===s.length&&(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:function(){return r(0)},variant:"text",mdxType:"Button"},"Resetar")),o!==s.length&&(0,l.kt)(a.Fragment,null,(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:n,disabled:0===o,mdxType:"Button"},"Anterior")),(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:t,disabled:o===s.length,mdxType:"Button"},"Pr\xf3ximo")))))})),(0,l.kt)("h3",{id:"etapa-de-erro"},"Etapa de erro"),(0,l.kt)(s.X,{__position:2,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Configura\xe7\xe3o da campanha',\n    },\n    {\n      label: 'Grupo de campanha',\n      error: true,\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <Box xs={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:n,AccountCircleIcon:i.Z,AddAPhotoIcon:u.Z,LinkIcon:d.Z,Playground:s.X,Box:p.Z,Button:c.default,Column:m.default,Container:f.Z,Row:g.default,useProgress:k.SE,ProgressLine:x.default,ProgressRound:_.default,meta:C},mdxType:"Playground"},(function(){var e=(0,k.SE)(),t=e.nextStep,n=e.backStep,r=e.setCurrentStep,o=e.currentStep,i=[{label:"Configura\xe7\xe3o da campanha"},{label:"Grupo de campanha",error:!0},{label:"Pagamento"},{label:"Obrigado"}];return(0,l.kt)(f.Z,{mdxType:"Container"},(0,l.kt)(g.default,{mdxType:"Row"},(0,l.kt)(m.default,{xs:12,mdxType:"Column"},(0,l.kt)(x.default,{steps:i,currentStep:o,mdxType:"ProgressLine"}))),(0,l.kt)(p.Z,{xs:{margin:"16px 0"},mdxType:"Box"}),(0,l.kt)(g.default,{mdxType:"Row"},o===i.length&&(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:function(){return r(0)},variant:"text",mdxType:"Button"},"Resetar")),o!==i.length&&(0,l.kt)(a.Fragment,null,(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:n,disabled:0===o,mdxType:"Button"},"Anterior")),(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:t,disabled:o===i.length,mdxType:"Button"},"Pr\xf3ximo")))))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface IStep {\n  icon?: React.ReactNode;\n  label?: string;\n  error?: boolean;\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"tipo"),(0,l.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,l.kt)("th",{parentName:"tr",align:null},"padr\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"steps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IStep[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentStep"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h2",{id:"round"},"Round"),(0,l.kt)("h3",{id:"importa\xe7\xe3o-1"},"Importa\xe7\xe3o"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import ProgressRound from '@eduzz/houston-ui/Progress/Round';\n")),(0,l.kt)("h3",{id:"exemplo-1"},"Exemplo"),(0,l.kt)(s.X,{__position:3,code:"() => {\n  const MAX_STEPS = 4\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <>\n      <Row>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound maxSteps={MAX_STEPS} currentStep={currentStep} />\n          </Box>\n        </Column>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound\n              type=\"percentage\"\n              maxSteps={MAX_STEPS}\n              currentStep={currentStep}\n            />\n          </Box>\n        </Column>\n      </Row>\n      <Row>\n        {currentStep === MAX_STEPS && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== MAX_STEPS && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button onClick={nextStep} disabled={currentStep === MAX_STEPS}>\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </>\n  )\n}",scope:{props:n,AccountCircleIcon:i.Z,AddAPhotoIcon:u.Z,LinkIcon:d.Z,Playground:s.X,Box:p.Z,Button:c.default,Column:m.default,Container:f.Z,Row:g.default,useProgress:k.SE,ProgressLine:x.default,ProgressRound:_.default,meta:C},mdxType:"Playground"},(function(){var e=(0,k.SE)(),t=e.nextStep,n=e.backStep,r=e.setCurrentStep,o=e.currentStep;return(0,l.kt)(a.Fragment,null,(0,l.kt)(g.default,{mdxType:"Row"},(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(p.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,l.kt)(_.default,{maxSteps:4,currentStep:o,mdxType:"ProgressRound"}))),(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(p.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,l.kt)(_.default,{type:"percentage",maxSteps:4,currentStep:o,mdxType:"ProgressRound"})))),(0,l.kt)(g.default,{mdxType:"Row"},4===o&&(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:function(){return r(0)},variant:"text",mdxType:"Button"},"Resetar")),4!==o&&(0,l.kt)(a.Fragment,null,(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:n,disabled:0===o,mdxType:"Button"},"Anterior")),(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(c.default,{onClick:t,disabled:4===o,mdxType:"Button"},"Pr\xf3ximo")))))})),(0,l.kt)("h3",{id:"erro-no-progresso"},"Erro no progresso"),(0,l.kt)(s.X,{__position:4,code:"<Row>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound type=\"percentage\" maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n</Row>",scope:{props:n,AccountCircleIcon:i.Z,AddAPhotoIcon:u.Z,LinkIcon:d.Z,Playground:s.X,Box:p.Z,Button:c.default,Column:m.default,Container:f.Z,Row:g.default,useProgress:k.SE,ProgressLine:x.default,ProgressRound:_.default,meta:C},mdxType:"Playground"},(0,l.kt)(g.default,{mdxType:"Row"},(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(p.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,l.kt)(_.default,{maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))),(0,l.kt)(m.default,{mdxType:"Column"},(0,l.kt)(p.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,l.kt)(_.default,{type:"percentage",maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"tipo"),(0,l.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,l.kt)("th",{parentName:"tr",align:null},"padr\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxSteps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Indica o n\xfamero m\xe1ximo de passos do progresso")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentStep"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Indica o passo atual do progresso")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"numeric"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"percentage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"numeric")),(0,l.kt)("td",{parentName:"tr",align:null},"Indica como vai ser exibido o progresso no componente: n\xfamero ou porcentagem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Se ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", altera a cor do progresso para cor de erro da paleta de cores")))))}h.isMDXComponent=!0;var y={editThisPagePath:"src/pages/ui-components/Progress/index.mdx"};for(var b in y)window[b]=y[b]},65459:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Progress",function(){return n(10560)}])}},function(e){e.O(0,[4526,9371,6844,9143,715,5724,7907,6034,9774,2888,179],(function(){return t=65459,e(e.s=t);var t}));var t=e.O();_N_E=t}]);