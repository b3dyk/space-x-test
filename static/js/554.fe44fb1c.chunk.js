"use strict";(self.webpackChunkspace_x_test=self.webpackChunkspace_x_test||[]).push([[554],{8864:function(e,t,n){n.d(t,{Z:function(){return B}});var r,i=n(6444),o=n(7689),l=n(2844),a=n(2791),c=["title","titleId"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function s(e,t){var n=e.title,i=e.titleId,o=f(e,c);return a.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:25,height:25,fill:"none",ref:t,"aria-labelledby":i},o),n?a.createElement("title",{id:i},n):null,r||(r=a.createElement("path",{stroke:"#1E1E1E",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M19.825 9.968s-.543 6.735-.858 9.572c-.15 1.355-.987 2.15-2.358 2.174-2.61.047-5.221.05-7.83-.005-1.318-.027-2.141-.83-2.288-2.162-.317-2.862-.857-9.579-.857-9.579M21.208 6.74H4.25M17.94 6.74a1.648 1.648 0 0 1-1.614-1.324L16.083 4.2a1.28 1.28 0 0 0-1.237-.95h-4.233a1.28 1.28 0 0 0-1.237.95l-.243 1.216A1.648 1.648 0 0 1 7.518 6.74"})))}var p,d,b,g,h,v,y=a.forwardRef(s),m=(n.p,n(3090)),O=n(3433),w=n(9439),j=n(279),x=n(6394),k=n(2375),E=n(184),P=function(e){var t=e.children,n=e.rocket,r=(0,o.TH)(),l=(0,a.useState)(!1),c=(0,w.Z)(l,2),u=c[0],f=c[1],s=(0,j.FV)(x.p),p=(0,w.Z)(s,2),d=p[0],b=p[1];(0,a.useEffect)((function(){n&&f(d.map((function(e){return e.id})).includes(n.id))}),[d,n]);var g=function(e){var t=d.filter((function(t){return t.id!==e}));b(t)};return(0,E.jsx)(i.f6,{theme:!r.pathname.includes("favourites")&&u&&k.m||{backgroundColor:"#ececec"},children:(0,E.jsx)(k.Q,{type:"button",onClick:n&&r.pathname.includes("favourites")?function(){return g(n.id)}:function(){if(n){if(u)return g(n.id);b((function(e){return[].concat((0,O.Z)(e),[n])}))}},children:t})})},I=n(168),S=i.ZP.li(p||(p=(0,I.Z)(["\n  box-sizing: border-box;\n  flex-basis: calc((100% - var(--indent) * (var(--items) - 1)) / var(--items));\n  border: 1px solid var(--color-btn-main);\n  transition: box-shadow var(--anim);\n"]))),Z=i.ZP.div(d||(d=(0,I.Z)(["\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 28px;\n  padding-bottom: 26px;\n  text-align: center;\n"]))),C=i.ZP.h3(b||(b=(0,I.Z)(["\n  margin-bottom: 16px;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.208;\n  text-transform: uppercase;\n"]))),L=i.ZP.div(g||(g=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-top: auto;\n"]))),R=n(8834),D=i.ZP.p(h||(h=(0,I.Z)(['\n  margin-bottom: 64px;\n\n  font-family: "Lato";\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 1.208;\n']))),A=i.ZP.button(v||(v=(0,I.Z)(['\n  background-color: var(--color-btn-transparent);\n  border: none;\n\n  font-family: "Lato";\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 1.208;\n\n  color: var(--color-btn-filter);\n\n  cursor: pointer;\n']))),z=function(e){var t=e.limit,n=e.children,r=(0,a.useState)(!0),i=(0,w.Z)(r,2),o=i[0],l=i[1];return(0,E.jsxs)(D,{children:[o?n.slice(0,t):n,(0,E.jsx)(A,{type:"button",onClick:function(){l((function(e){return!e}))},children:o?"...more":"less"})]})},B=function(e){var t=e.rocket,n=e.image,r=(0,j.sJ)(x.p),a=(0,o.TH)(),c=r.find((function(e){return e.id===t.id}));return(0,E.jsxs)(S,{children:[(0,E.jsx)("img",{src:n,alt:"space",width:"411"}),(0,E.jsxs)(Z,{children:[(0,E.jsx)(C,{children:t.name}),(0,E.jsx)(z,{limit:100,children:t.description}),(0,E.jsxs)(L,{children:[(0,E.jsx)(i.f6,{theme:R.N,children:(0,E.jsx)(m.z,{text:"buy"})}),a.pathname.includes("favourites")?(0,E.jsx)(P,{rocket:t,children:(0,E.jsx)(y,{})}):(0,E.jsx)(P,{rocket:t,children:(0,E.jsx)(l.r,{style:c?W:M})})]})]})]})},M={fill:"#000"},W={fill:"#fff"}},2375:function(e,t,n){n.d(t,{Q:function(){return o},m:function(){return l}});var r,i=n(168),o=n(6444).ZP.button(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px;\n  cursor: pointer;\n\n  border: none;\n  background-color: ",";\n\n  transition: background-color var(--anim);\n\n  :hover {\n    background-color: ",";\n  }\n\n  :active {\n    transform: scale(0.98);\n  }\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.backgroundColor}));o.defaultProps={theme:{backgroundColor:"#ececec"}};var l={backgroundColor:"#dd377d"}},241:function(e,t,n){n.d(t,{Wj:function(){return ne},t4:function(){return te},l3:function(){return ee}});var r,i=n.p+"static/media/spaseship.3dff2824557ec96cc659.jpg",o=n.p+"static/media/spaceman.7705a09928dfceb56902.jpg",l=n.p+"static/media/astronaut.e87e65a79fa24e5f57d1.jpg",a=n.p+"static/media/spaceship.46dd2ed8dd6afa6bb589.jpg",c=n(2867),u=n.p+"static/media/astronaut.b0963da40222fde36b52.jpg",f=n(2791),s=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function b(e,t){var n=e.title,i=e.titleId,o=d(e,s);return f.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none",ref:t,"aria-labelledby":i},o),n?f.createElement("title",{id:i},n):null,r||(r=f.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.2,d:"M20.457 32.917v-25M30.498 22.834l-10.04 10.083-10.042-10.083"})))}var g,h=f.forwardRef(b),v=(n.p,["title","titleId"]);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function O(e,t){var n=e.title,r=e.titleId,i=m(e,v);return f.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,g||(g=f.createElement("path",{stroke:"#200E32",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m15.5 5-7 7 7 7"})))}var w,j=f.forwardRef(O),x=(n.p,["title","titleId"]);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function P(e,t){var n=e.title,r=e.titleId,i=E(e,x);return f.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,w||(w=f.createElement("path",{stroke:"#200E32",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m8.5 5 7 7-7 7"})))}var I,S,Z=f.forwardRef(P),C=(n.p,["title","titleId"]);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function D(e,t){var n=e.title,r=e.titleId,i=R(e,C);return f.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,I||(I=f.createElement("circle",{cx:12,cy:12,r:6,fill:"white"})),S||(S=f.createElement("circle",{cx:12,cy:12,r:11.5,stroke:"white"})))}var A,z=f.forwardRef(D),B=(n.p,["title","titleId"]);function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _(e,t){var n=e.title,r=e.titleId,i=W(e,B);return f.createElement("svg",M({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,A||(A=f.createElement("circle",{cx:12,cy:12,r:11.5,stroke:"white"})))}var F,H,T=f.forwardRef(_),J=(n.p,["title","titleId"]);function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function U(e,t){var n=e.title,r=e.titleId,i=Q(e,J);return f.createElement("svg",N({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,F||(F=f.createElement("circle",{cx:12,cy:12,r:6,fill:"#1E1E1E"})),H||(H=f.createElement("circle",{cx:12,cy:12,r:11.5,stroke:"#1E1E1E"})))}var V,q=f.forwardRef(U),G=(n.p,["title","titleId"]);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Y(e,t){var n=e.title,r=e.titleId,i=X(e,G);return f.createElement("svg",K({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,V||(V=f.createElement("circle",{cx:12,cy:12,r:11.5,stroke:"#1E1E1E"})))}var $=f.forwardRef(Y),ee=(n.p,[i,l,o]),te=[a,c,u],ne={ArrowDown:h,ArrowLeft:j,ArrowRight:Z,CarouselDotFull:z,CarouselDot:T,CarouselDotFullDark:q,CarouselDotDark:$}},6394:function(e,t,n){n.d(t,{p:function(){return o}});var r=n(279),i=(0,n(9386).J)().persistAtom,o=(0,r.cn)({key:"favouritesState",default:[],effects_UNSTABLE:[i]})},2867:function(e,t,n){e.exports=n.p+"static/media/spaceman.e646bb5a59a945725e65.jpg"}}]);
//# sourceMappingURL=554.fe44fb1c.chunk.js.map