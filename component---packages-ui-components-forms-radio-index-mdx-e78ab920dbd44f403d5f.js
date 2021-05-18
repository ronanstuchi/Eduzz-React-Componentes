(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{tq40:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return O}));var n=a("cxan"),r=a("+wNj"),l=(a("ERkP"),a("ZVZ0")),b=a("9Rvw"),o=a("FvlN"),i=a("qbsg"),d=a("bXe8"),m=a("H30B"),c=(a("l1C2"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-components/Forms/Radio/index.mdx"}});var p={_frontmatter:c},u=b.a;function O(e){var t,a,O=e.components,j=Object(r.a)(e,["components"]);return Object(l.b)(u,Object(n.a)({},p,j,{components:O,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"radio"},"Radio"),Object(l.b)("p",null,"O componente de Radio é utilizado quando é preciso deixar todas as opções visíveis e permitir a seleção delas."),Object(l.b)("h3",{id:"importação"},"Importação"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import RadioField from '@eduzz/houston-ui/Forms/Radio';\n")),Object(l.b)("h3",{id:"exemplo-com-form"},"Exemplo com Form"),Object(l.b)(i.c,{__position:0,__code:'() => {\n  const form = useForm({\n    onSubmit: () => {},\n  })\n  return (\n    <Form context={form}>\n      <RadioField label="Opção 1" name="radio" value={123} />\n      <RadioField label="Opção 2" name="radio" value={1} />\n    </Form>\n  )\n}',__scope:(t={props:j,DefaultLayout:b.a,useForm:o.a,Playground:i.c,Form:d.b,RadioField:m.a},t.DefaultLayout=b.a,t._frontmatter=c,t),mdxType:"Playground"},(function(){var e=Object(o.a)({onSubmit:function(){}});return Object(l.b)(d.b,{context:e,mdxType:"Form"},Object(l.b)(m.a,{label:"Opção 1",name:"radio",value:123,mdxType:"RadioField"}),Object(l.b)(m.a,{label:"Opção 2",name:"radio",value:1,mdxType:"RadioField"}))})),Object(l.b)("h3",{id:"exemplo-sem-form"},"Exemplo sem Form"),Object(l.b)(i.c,{__position:1,__code:'() => {\n  return (\n    <div>\n      <RadioField\n        label="Label"\n        description="Descrição do item"\n        name="radio-1"\n        onChange={e => console.log(e.target.value)}\n        value={1}\n      />\n      <RadioField\n        label="Label"\n        errorMessage="Mensagem de erro"\n        name="radio-2"\n        onChange={e => console.log(e.target.value)}\n        value={2}\n      />\n    </div>\n  )\n}',__scope:(a={props:j,DefaultLayout:b.a,useForm:o.a,Playground:i.c,Form:d.b,RadioField:m.a},a.DefaultLayout=b.a,a._frontmatter=c,a),mdxType:"Playground"},(function(){return Object(l.b)("div",null,Object(l.b)(m.a,{label:"Label",description:"Descrição do item",name:"radio-1",onChange:function(e){return console.log(e.target.value)},value:1,mdxType:"RadioField"}),Object(l.b)(m.a,{label:"Label",errorMessage:"Mensagem de erro",name:"radio-2",onChange:function(e){return console.log(e.target.value)},value:2,mdxType:"RadioField"}))})),Object(l.b)("h3",{id:"propriedades"},"Propriedades"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"prop"),Object(l.b)("th",{parentName:"tr",align:null},"tipo"),Object(l.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(l.b)("th",{parentName:"tr",align:null},"padrão"),Object(l.b)("th",{parentName:"tr",align:null},"descrição"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"label"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"description"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"errorMessage"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"form"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"margin"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"none"),", ",Object(l.b)("inlineCode",{parentName:"td"},"normal")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"none")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"checked"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"Caso a prop ",Object(l.b)("inlineCode",{parentName:"td"},"form")," esteja configurada, o componente será marcado através dos valores do formulário e essa propriedade será ignorada")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"onChange"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"function")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"Função chamada quando o valor do Radio é alterado")))))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-components/Forms/Radio/index.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-components-forms-radio-index-mdx-e78ab920dbd44f403d5f.js.map