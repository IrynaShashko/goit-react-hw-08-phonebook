"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[58],{58:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(2791),i=t(9434),r="container_container__vf0zN",c="container_title__YpJ7F",o=t(3329),l=function(e){var n=e.name,t=e.children;return(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("h2",{className:c,children:n}),t]})},s=t(158),u="form-add-book_group__QKtYq",m="form-add-book_label__jLpEl",d="form-add-book_input__m5nZk",h={name:"",number:""},v=function(e){var n=e.onSubmit,t=(0,s.Z)({initialState:h,onSubmit:n}),a=t.state,i=t.handleChange,r=t.handleSubmit,c=a.name,l=a.number;return(0,o.jsxs)("form",{action:"",onSubmit:r,children:[(0,o.jsxs)("div",{className:u,children:[(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)("label",{className:m,htmlFor:"",children:"Name:"}),(0,o.jsx)("input",{value:c,name:"name",onChange:i,className:d,type:"text",placeholder:"Type name..."})]}),(0,o.jsx)("label",{className:m,htmlFor:"",children:"Number:"}),(0,o.jsx)("input",{value:l,name:"number",onChange:i,className:d,type:"number",placeholder:"Type number..."})]}),(0,o.jsx)("div",{className:u,children:(0,o.jsx)("button",{type:"submit",children:"Add"})})]})},f="contacts-list_item__1EEEO",_="contacts-list_btn__Gz7Ag",b=function(e){var n=e.contacts,t=e.removeContact,a=null===n||void 0===n?void 0:n.map((function(e){var n=e.id,a=e.name,i=e.number;return(0,o.jsxs)("li",{className:f,children:[a," ",i,(0,o.jsx)("button",{type:"button",className:_,onClick:function(){return t(n)},children:"Delete"})]},n)}));return(0,o.jsx)("ul",{children:a})},x=t(6123),p=t(5577),j=function(e){var n,t=e.contacts,a=e.filter;if(!a)return t.items;var i=null===a||void 0===a?void 0:a.toLowerCase();return null===t||void 0===t||null===(n=t.items)||void 0===n?void 0:n.filter((function(e){var n=e.name,t=e.number;return(null===n||void 0===n?void 0:n.toLowerCase()).includes(i)||t.includes(i)}))},N=function(e){return e.filter},k="my-contacts_contacts__5wVo9",C=function(){var e=(0,i.v9)(j),n=(0,i.v9)(N),t=(0,i.I0)();(0,a.useEffect)((function(){t((0,x.yF)())}),[t]);return(0,o.jsxs)("div",{className:k,children:[(0,o.jsx)(l,{title:"Add contacts",children:(0,o.jsx)(v,{onSubmit:function(e){t((0,x.uK)(e))}})}),(0,o.jsxs)(l,{title:"Contacts list",children:[(0,o.jsx)("input",{onChange:function(e){var n=e.target;t((0,p.T)(n.value))},value:n,name:"filter",type:"text",placeholder:"Enter name "}),(0,o.jsx)(b,{contacts:e,removeContact:function(e){t((0,x.zY)(e))}})]})]})},g=function(){return(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(C,{}),(0,o.jsx)(b,{})]})}},158:function(e,n,t){var a=t(4942),i=t(1413),r=t(885),c=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,c.useState)((0,i.Z)({},n)),l=(0,r.Z)(o,2),s=l[0],u=l[1];return{state:s,setState:u,handleChange:function(e){var n=e.target,t=n.name,r=n.value,c=n.type,o=n.checked,l="checkbox"===c?o:r;u((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},t,l))}))},handleSubmit:function(e){e.preventDefault(),t((0,i.Z)({},s)),u((0,i.Z)({},n))}}}}}]);
//# sourceMappingURL=58.521c1eb7.chunk.js.map