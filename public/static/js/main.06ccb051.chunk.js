(this["webpackJsonpseries-peliculas-app"]=this["webpackJsonpseries-peliculas-app"]||[]).push([[0],{56:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(19),n=t.n(c),i=t(14),l=t(28),s=t(18),o=t(3),d={galeriaSetActive:"[galeria] Set active",galeriaStartAddNew:"[galeria] Start addd new",galeriaAddNew:"[galeria] Add new",galeriaClearActiveGaleria:"[galeria] Clear active galeria",galeriaUpdated:"[galeria] galeria updated",galeriaDeleted:"[galeria] galeria deleted",galeriaLoaded:"[galeria] galerias loaded",galeriaPeliculasLoaded:"[galeria] galerias peliculas loaded",galeriaSeriesLoaded:"[galeria] galerias series loaded"},j={galerias:[],series:[],peliculas:[],activeGaleria:null},u=Object(i.b)({galeria:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d.galeriaSetActive:return Object(o.a)(Object(o.a)({},e),{},{activeGaleria:a.payload});case d.galeriaClearActiveGaleria:return Object(o.a)(Object(o.a)({},e),{},{activeGaleria:null});case d.galeriaAddNew:return Object(o.a)(Object(o.a)({},e),{},{galerias:[].concat(Object(s.a)(e.galerias),[Object(o.a)({},a.payload)])});case d.galeriaUpdated:return Object(o.a)(Object(o.a)({},e),{},{galerias:e.galerias.map((function(e){return e.id===a.payload.id?a.payload:e}))});case d.galeriaDeleted:return Object(o.a)(Object(o.a)({},e),{},{galerias:e.galerias.filter((function(a){return a.id!==e.activeGaleria.id})),activeGaleria:null});case d.galeriaLoaded:return Object(o.a)(Object(o.a)({},e),{},{galerias:Object(s.a)(a.payload)});case d.galeriaPeliculasLoaded:return Object(o.a)(Object(o.a)({},e),{},{peliculas:Object(s.a)(a.payload)});case d.galeriaSeriesLoaded:return Object(o.a)(Object(o.a)({},e),{},{series:Object(s.a)(a.payload)});default:return e}}}),b="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,p=Object(i.d)(u,b(Object(i.a)(l.a))),O=t(10),g=t(11),v=t(4),x=t(8),h=t.n(x),f=t(12),m="https://leonardoospino-galeria.herokuapp.com/api",y=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r="".concat(m,"/").concat(e);return"GET"===t?fetch(r):fetch(r,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})},N=(t(17),function(e){return{type:d.galeriaLoaded,payload:e}}),k=function(e){return{type:d.galeriaPeliculasLoaded,payload:e}},S=function(e){return{type:d.galeriaSeriesLoaded,payload:e}},w=t(30),C=t(1),E=function(e){var a=e.id,t=e.title,c=e.year,n=e.type,i=Object(r.useState)(parseInt(localStorage.getItem(a))||0),l=Object(w.a)(i,2),s=l[0],o=l[1];return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t}),Object(C.jsx)("td",{children:c}),Object(C.jsx)("td",{children:n}),Object(C.jsx)("td",{children:s}),Object(C.jsx)("td",{className:"text-center",children:Object(C.jsx)("a",{className:"btn btn-outline-primary btn-sm",onClick:function(){localStorage.setItem(a,s+1),o((function(e){return e+1}))},children:Object(C.jsx)("i",{className:"fa fa-thumbs-up"})})})]})},L=function(e){var a=e.galerias;return Object(C.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(C.jsx)("thead",{className:"thead-dark",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"T\xedtulo"}),Object(C.jsx)("th",{scope:"col",children:"A\xf1o"}),Object(C.jsx)("th",{scope:"col",children:"Tipo"}),Object(C.jsx)("th",{scope:"col",children:"Likes"}),Object(C.jsx)("th",{scope:"col"})]})}),Object(C.jsx)("tbody",{children:a.map((function(e){return Object(C.jsx)(E,Object(o.a)({},e),e.id)}))})]})},A=function(){var e=Object(O.b)(),a=Object(O.c)((function(e){return e.galeria})).peliculas;return Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(h.a.mark((function e(a){var t,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("galeria/Pel\xedcula");case 3:return t=e.sent,e.next=6,t.json();case 6:(r=e.sent).ok&&(c=r.galerias,a(k(c))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(C.jsx)(L,{galerias:a})},G=function(){var e=Object(O.b)(),a=Object(O.c)((function(e){return e.galeria})).series;return Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(h.a.mark((function e(a){var t,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("galeria/Serie");case 3:return t=e.sent,e.next=6,t.json();case 6:(r=e.sent).ok&&(c=r.galerias,a(S(c))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(C.jsx)(L,{galerias:a})},T=function(){var e=Object(O.b)(),a=Object(O.c)((function(e){return e.galeria})).galerias;return Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(h.a.mark((function e(a){var t,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("galeria");case 3:return t=e.sent,e.next=6,t.json();case 6:(r=e.sent).ok&&(c=r.galerias,a(N(c))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(C.jsx)(L,{galerias:a})},_=function(){return Object(C.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(C.jsx)(g.b,{className:"navbar-brand",to:"/",children:"Galer\xeda App"}),Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(C.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(C.jsx)(g.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/",children:"Todas"}),Object(C.jsx)(g.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/series",children:"Series"}),Object(C.jsx)(g.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/peliculas",children:"Pel\xedculas"})]})})]})},P=function(){return Object(C.jsxs)(g.a,{children:[Object(C.jsx)(_,{}),Object(C.jsx)("div",{className:"container pt-4",children:Object(C.jsxs)(v.d,{children:[Object(C.jsx)(v.b,{exact:!0,path:"/",component:T}),Object(C.jsx)(v.b,{exact:!0,path:"/peliculas",component:A}),Object(C.jsx)(v.b,{exact:!0,path:"/series",component:G}),Object(C.jsx)(v.a,{to:"/"})]})})]})};var I=function(){return Object(C.jsx)(O.a,{store:p,children:Object(C.jsx)(P,{})})};n.a.render(Object(C.jsx)(I,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.06ccb051.chunk.js.map