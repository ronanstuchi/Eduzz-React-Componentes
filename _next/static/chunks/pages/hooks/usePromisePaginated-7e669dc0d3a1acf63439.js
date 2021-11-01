(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8312],{9127:function(a,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return i},default:function(){return l}});var r=n(87397),o=n(31750),t=(n(27378),n(35318)),s=["components"],i={name:"usePromisePaginated",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromisepaginated",title:"usePromisePaginated",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},u={meta:i};function l(a){var e=a.components,n=(0,o.Z)(a,s);return(0,t.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"usepromisepaginated"},"usePromisePaginated"),(0,t.kt)("p",null,"Hook para facilitar o uso de uma promise paginada, d\xe1 subscribe e retorna\no resultado junto com fun\xe7\xf5es de manipula\xe7\xe3o dos parametros."),(0,t.kt)("h2",{id:"como-usar"},"Como usar"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},"const { params, handleChangePage, handleChangePerPage, handleSort, result, total, isLoading } = usePromisePaginated(\n  {\n    initialParams: { page: 1, perPage: 5 }, // optional\n    infinityScroll: false, // optional\n    onChangeParams: params => salesService.list(params)\n  },\n  []\n);\n")),(0,t.kt)("h2",{id:"cuidados"},"Cuidados"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados se as o ",(0,t.kt)("strong",{parentName:"li"},"onUnhandledError")," no\n",(0,t.kt)("strong",{parentName:"li"},"setHoustonHooksConfig")," for configurado.")),(0,t.kt)("h2",{id:"par\xe2metros-e-retorno"},"Par\xe2metros e Retorno"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @param options `IUsePaginatedOptions`: {\n *  initialParams: Estado inicial dos param\xeatros\n *  infinityScroll: Se os resultados devem ser mergeados, criando uma lista infinita.\n *  onChangeParams: Fun\xe7\xe3o que recebe os param\xeatros e retorna uma Promise\n * }\n * @param deps React deps\n * @returns `IUsePaginatedPromise`: {\n *  params: P / Json com os parametros\n *  initialParams: Partial<P> / Json com os parametros iniciais, \xfatil para um reset de filtros\n *  isLoading: boolean; / Se est\xe1 carregando ou n\xe3o\n *  isLoadingMore: boolean; / Se est\xe1 carregando mais ou n\xe3o, \xfatil para o infinityScroll\n *  total: number; / N\xfamero total de linhas retornadas, apenas a requisi\xe7\xe3o da pagina inicial \xe9 necess\xe1rio retornar o total, as outras paginas podem retonar null\n *  result: R[]; / Array com o resultado\n *  hasMore: boolean; / Se existe mais para ser carregado, calculado com base do total, \xfatil para o infinityScroll\n *  error: any; / Error, se aconteceu algum\n *  retry: () => void; / Fun\xe7\xe3o de retry\n *  updateInitialParams: React.Dispatch<React.SetStateAction<P>>; / \xdatil para alterar o reset de um filtro\n *  mergeParams: (params: PaginationMergeParams<P>) => void; / Fun\xe7\xe3o para atualizar os paramentros pode ser o valor em s\xed o uma fun\xe7\xe3o que recebe o valor atual\n *  handleChangePage: (page: number) => void; / Fun\xe7\xe3o de atalho para o mergeParams({ page: 1})\n *  handleChangePerPage: (perPage: number) => void; / Fun\xe7\xe3o de atalho para o mergeParams({ perPge: 1})\n *  handleSort: (sort: IPaginationParams['sort']) => void; / Fun\xe7\xe3o de atalho para o mergeParams({ sort: { field: 'name', direction: 'asc' }  })\n * }\n */\nexport default function usePromisePaginated<P extends IPaginationParams, R>(options: IUsePaginatedOptions<P, R>, , deps: React.DependencyList): IUsePaginatedPromise<P, R>\n")))}l.isMDXComponent=!0;var d={editThisPagePath:"src/pages/hooks/usePromisePaginated/index.mdx"};for(var m in d)window[m]=d[m]},3193:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromisePaginated",function(){return n(9127)}])},87397:function(a,e,n){"use strict";function r(){return(r=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},31750:function(a,e,n){"use strict";function r(a,e){if(null==a)return{};var n,r,o=function(a,e){if(null==a)return{};var n,r,o={},t=Object.keys(a);for(r=0;r<t.length;r++)n=t[r],e.indexOf(n)>=0||(o[n]=a[n]);return o}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(r=0;r<t.length;r++)n=t[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(o[n]=a[n])}return o}n.d(e,{Z:function(){return r}})}},function(a){a.O(0,[9774,2888,179],(function(){return e=3193,a(a.s=e);var e}));var e=a.O();_N_E=e}]);