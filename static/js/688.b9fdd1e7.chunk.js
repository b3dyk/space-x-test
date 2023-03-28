"use strict";(self.webpackChunkspace_x_test=self.webpackChunkspace_x_test||[]).push([[688],{9688:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,o,i,s,a,c,l,p,x,u,d,f,g=e(4479),h=e(168),j=e(6444),m=j.ZP.section(r||(r=(0,h.Z)(["\n  padding-top: 96px;\n  padding-bottom: 96px;\n"]))),Z=e(9439),b=e(2791),y=e(5825),k=j.ZP.section(o||(o=(0,h.Z)(["\n  position: relative;\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: var(--color-bg-hero);\n  text-align: center;\n  padding-top: 229px;\n  padding-bottom: 33px;\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),v=j.ZP.div(i||(i=(0,h.Z)(["\n  position: absolute;\n  top: 59%;\n  left: 47%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n"]))),w=j.ZP.h1(s||(s=(0,h.Z)(["\n  font-weight: 800;\n  font-size: 48px;\n  line-height: 1.208;\n  text-transform: uppercase;\n  color: var(--color-font-light);\n"]))),P=j.ZP.h2(a||(a=(0,h.Z)(["\n  margin-bottom: 36px;\n  margin-top: -56px;\n  font-weight: 800;\n  font-size: 310px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: var(--color-font-light);\n"]))),C=j.ZP.a(c||(c=(0,h.Z)(['\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  font-family: "Lato";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 1.1875;\n  color: var(--color-font-light);\n\n  text-shadow: 1px 0px 1px rgba(0, 0, 0, 1), 0px 1px 1px rgba(0, 0, 0, 1),\n    -1px 0px 1px rgba(0, 0, 0, 1), 0px -1px 1px rgba(0, 0, 0, 1);\n']))),W=e(184),D=function(){var n=(0,b.useState)(0),t=(0,Z.Z)(n,2),e=t[0],r=t[1];return(0,W.jsxs)(k,{style:{backgroundImage:"linear-gradient(\n    rgba(47, 48, 58, 0.4),\n    rgba(47, 48, 58, 0.4)\n  ), url(".concat(y.t4[e],")")},children:[(0,W.jsx)(v,{children:y.t4.map((function(n,t){return(0,W.jsx)("div",{onClick:function(){return function(n){r(n)}(t)},children:e===t?(0,W.jsx)(y.Wj.CarouselDotFull,{style:{cursor:"pointer"}}):(0,W.jsx)(y.Wj.CarouselDot,{style:{cursor:"pointer"}})},t)}))}),(0,W.jsxs)(g.W2,{children:[(0,W.jsx)(w,{children:"The space is waiting for"}),(0,W.jsx)(P,{children:"You"}),(0,W.jsxs)(C,{href:"#tours",children:["Explore tours",(0,W.jsx)(y.Wj.ArrowDown,{})]})]})]})},z=e(1413),F=e(3173),_=e(3487),A=e(1322),L=j.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 43px;\n"]))),S=j.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n"]))),E=j.ZP.h2(x||(x=(0,h.Z)(["\n  font-weight: 800;\n  font-size: 32px;\n  line-height: 1.1875;\n  text-transform: uppercase;\n"]))),Q=j.ZP.div(u||(u=(0,h.Z)(["\n  overflow: hidden;\n"]))),T=j.ZP.ul(d||(d=(0,h.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 24px;\n  transition: var(--anim);\n"]))),I=j.ZP.div(f||(f=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 40px;\n"]))),R=e(2375),X=function(){var n,t=(0,F.a)(_.T),e=t.loading,r=t.error,o=t.data,i=(0,b.useState)(0),s=(0,Z.Z)(i,2),a=s[0],c=s[1],l=(0,b.useState)([]),p=(0,Z.Z)(l,2),x=p[0],u=p[1];return(0,b.useEffect)((function(){o&&u(o.rockets.map((function(n,t){return(0,z.Z)((0,z.Z)({},n),{},{image:y.l3[t%3]})})))}),[o]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(L,{children:[(0,W.jsx)(E,{children:"Popular tours"}),(0,W.jsxs)(S,{children:[(0,W.jsx)(R.Q,{type:"button",onClick:function(){return c((function(n){return 0===n?o.rockets.length-3:n-1}))},children:(0,W.jsx)(y.Wj.ArrowLeft,{})}),(0,W.jsx)(R.Q,{type:"button",onClick:function(){return c((function(n){return n===o.rockets.length-3?0:n+1}))},children:(0,W.jsx)(y.Wj.ArrowRight,{})})]})]}),r&&(0,W.jsx)("p",{children:r.message}),e?(0,W.jsx)("p",{children:"Loading..."}):(0,W.jsxs)(Q,{children:[(0,W.jsx)(T,{style:{transform:"translateX(-".concat(33.75*a,"%)")},children:x.map((function(n){return(0,W.jsx)(A.Z,{rocket:n},n.id)}))}),(0,W.jsx)(I,{children:x.slice(0,(n=x.length,n-3+1)).map((function(n,t){return(0,W.jsx)("div",{onClick:function(){c(t)},children:a===t?(0,W.jsx)(y.Wj.CarouselDotFullDark,{style:{cursor:"pointer"}}):(0,W.jsx)(y.Wj.CarouselDotDark,{style:{cursor:"pointer"}})},n.id)}))})]})]})},Y=function(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(D,{}),(0,W.jsx)(m,{id:"tours",children:(0,W.jsx)(g.W2,{children:(0,W.jsx)(X,{})})})]})}}}]);
//# sourceMappingURL=688.b9fdd1e7.chunk.js.map