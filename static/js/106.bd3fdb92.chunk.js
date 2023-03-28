/*! For license information please see 106.bd3fdb92.chunk.js.LICENSE.txt */
(self.webpackChunkspace_x_test=self.webpackChunkspace_x_test||[]).push([[106],{2663:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return k}});var n,o,i,a,c,u=r(9439),s=r(3737),f=r(6394),l=r(1322),p=r(4479),h=r(168),d=r(6444),y=r(2867),v=d.ZP.section(n||(n=(0,h.Z)(["\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 200px;\n  padding-bottom: 150px;\n\n  text-align: center;\n\n  background-image: linear-gradient(\n      rgba(47, 48, 58, 0.4),\n      rgba(47, 48, 58, 0.4)\n    ),\n    url(",");\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n"])),y),g=d.ZP.h2(o||(o=(0,h.Z)(["\n  font-weight: 800;\n  font-size: 48px;\n  line-height: 1.2083;\n  text-transform: uppercase;\n\n  color: var(--color-font-light);\n"]))),m=d.ZP.section(i||(i=(0,h.Z)(["\n  padding-top: 60px;\n  padding-bottom: 60px;\n"]))),x=d.ZP.button(a||(a=(0,h.Z)(['\n  display: block;\n  margin-left: auto;\n  padding: 16px;\n  font-family: "Lato";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 29px;\n  background-color: transparent;\n  color: var(--color-btn-filter);\n\n  border: none;\n  cursor: pointer;\n\n  transition: background-color var(--anim);\n\n  :hover,\n  :focus {\n    background-color: var(--color-btn-secondary);\n  }\n']))),w=d.ZP.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 23px;\n  margin-top: 24px;\n  flex-wrap: wrap;\n"]))),b=r(184),k=function(){var t=(0,s.FV)(f.p),e=(0,u.Z)(t,2),r=e[0],n=e[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{children:(0,b.jsx)(p.W2,{children:(0,b.jsx)(g,{children:"Favourites"})})}),(0,b.jsx)(m,{children:(0,b.jsxs)(p.W2,{children:[(0,b.jsx)(x,{type:"button",onClick:function(){return n([])},children:"Clear all"}),(0,b.jsx)(w,{children:r.map((function(t){return(0,b.jsx)(l.Z,{rocket:t},t.id)}))})]})})]})}},9386:function(t,e,r){"use strict";var n=r(7061).default,o=r(7156).default;e.J=void 0;e.J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"===typeof window)return{persistAtom:function(){}};var e=t.key,r=void 0===e?"recoil-persist":e,i=t.storage,a=void 0===i?localStorage:i,c=function(t,e,r,n){n?delete e[r]:e[r]=t,f(e)},u=function(){var t=a.getItem(r);return null===t||void 0===t?{}:"string"===typeof t?s(t):"function"===typeof t.then?t.then(s):{}},s=function(t){if(void 0===t)return{};try{return JSON.parse(t)}catch(e){return console.error(e),{}}},f=function(t){try{"function"===typeof a.mergeItem?a.mergeItem(r,JSON.stringify(t)):a.setItem(r,JSON.stringify(t))}catch(e){console.error(e)}};return{persistAtom:function(t){var e=t.onSet,r=t.node,i=t.trigger,a=t.setSelf;if("get"===i){var s=u();"function"===typeof s.then&&s.then((function(t){t.hasOwnProperty(r.key)&&a(t[r.key])})),s.hasOwnProperty(r.key)&&a(s[r.key])}e(function(){var t=o(n().mark((function t(e,o,i){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"function"===typeof(a=u()).then?a.then((function(t){return c(e,t,r.key,i)})):c(e,a,r.key,i);case 2:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}())}}}},7156:function(t){function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new S(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=p;var d={};function y(){}function v(){}function g(){}var m={};l(m,u,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==r&&i.call(w,u)&&(m=w);var b=g.prototype=y.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return v.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,f,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},k(L.prototype),l(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(b),l(b,f,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=106.bd3fdb92.chunk.js.map