(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(4),i=n.n(c),a=n(3),b=n(1),s=(n(9),n(0)),d=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)("button",{type:"button",onClick:function(){return i(t)},children:t.title})},t.id)}))}),Object(s.jsx)("div",{"data-cy":"tab-content",children:null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var t=Object(b.useState)(o),e=Object(a.a)(t,1)[0],n=Object(b.useState)(o[0]),c=Object(a.a)(n,2),i=c[0],r=c[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("h1",{children:["Selected tab is:",i.title]}),Object(s.jsx)(d,{tabs:e,onTabSelected:function(t){r(t)},selectedTabId:i.id})]})};i.a.render(Object(s.jsx)(r,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.acf33396.chunk.js.map