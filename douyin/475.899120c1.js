/*! For license information please see 475.899120c1.js.LICENSE.txt */
(self.webpackChunkdouyin_ug=self.webpackChunkdouyin_ug||[]).push([[475],{98304:function(e,t,r){var n=r(19390);e.exports=n},9252:function(e,t,r){r(95970);var n=r(11736);e.exports=n("Array").fill},21152:function(e,t,r){var n=r(99400),o=r(9252),a=Array.prototype;e.exports=function(e){var t=e.fill;return e===a||n(a,e)&&t===a.fill?o:t}},56678:function(e,t,r){e.exports=r(93194)},29902:function(e,t,r){r(66852)},65007:function(e,t,r){r(73349)},93194:function(e,t,r){var n=r(98304);e.exports=n},23994:function(e,t,r){"use strict";var n=r(99935),o=r(17327),a=r(72561);e.exports=function(e){for(var t=n(this),r=a(t),u=arguments.length,i=o(u>1?arguments[1]:void 0,r),c=u>2?arguments[2]:void 0,s=void 0===c?r:o(c,r);s>i;)t[i++]=e;return t}},95970:function(e,t,r){var n=r(43610),o=r(23994),a=r(49422);n({target:"Array",proto:!0},{fill:o}),a("fill")},19390:function(e,t,r){var n=r(21152);e.exports=n},68485:function(e,t,r){"use strict";var n=r(82483),o=r(76367),a=r(68569),u=r(384),i=r(7867),c=r(16167),s=r(15400),f=r(22242),l=r(57601),p=r(98771),d={exports:{}},y={},m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;function _(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var b=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,n,o=_(e),a=1;a<arguments.length;a++){for(var u in r=Object(arguments[a]))h.call(r,u)&&(o[u]=r[u]);if(m){n=m(r);for(var i=0;i<n.length;i++)v.call(r,n[i])&&(o[n[i]]=r[n[i]])}}return o},E=b,g=60103,w=60106;y.Fragment=60107,y.StrictMode=60108,y.Profiler=60114;var S=60109,j=60110,O=60112;y.Suspense=60113;var P=60115,R=60116;if("function"==typeof Symbol&&Symbol.for){var $=Symbol.for;g=$("react.element"),w=$("react.portal"),y.Fragment=$("react.fragment"),y.StrictMode=$("react.strict_mode"),y.Profiler=$("react.profiler"),S=$("react.provider"),j=$("react.context"),O=$("react.forward_ref"),y.Suspense=$("react.suspense"),P=$("react.memo"),R=$("react.lazy")}var C="function"==typeof Symbol&&Symbol.iterator;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A={};function D(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||x}function I(){}function N(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||x}D.prototype.isReactComponent={},D.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(k(85));this.updater.enqueueSetState(this,e,t,"setState")},D.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},I.prototype=D.prototype;var q=N.prototype=new I;q.constructor=N,E(q,D.prototype),q.isPureReactComponent=!0;var U={current:null},B=Object.prototype.hasOwnProperty,F={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)B.call(t,n)&&!F.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:g,type:e,key:a,ref:u,props:o,_owner:U.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===g}var M=/\/+/g;function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function V(e,t,r,n,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case g:case w:u=!0}}if(u)return o=o(u=e),e=""===n?"."+z(u,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(M,"$&/")+"/"),V(o,t,r,"",(function(e){return e}))):null!=o&&(T(o)&&(o=function(e,t){return{$$typeof:g,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(M,"$&/")+"/")+e)),t.push(o)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var c=n+z(a=e[i],i);u+=V(a,t,r,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=C&&e[C]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),i=0;!(a=e.next()).done;)u+=V(a=a.value,t,r,c=n+z(a,i++),o);else if("object"===a)throw t=""+e,Error(k(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function H(e,t,r){if(null==e)return e;var n=[],o=0;return V(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function Z(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var J={current:null};function W(){var e=J.current;if(null===e)throw Error(k(321));return e}var X={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:U,IsSomeRendererActing:{current:!1},assign:E};y.Children={map:H,forEach:function(e,t,r){H(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return H(e,(function(){t++})),t},toArray:function(e){return H(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error(k(143));return e}},y.Component=D,y.PureComponent=N,y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,y.cloneElement=function(e,t,r){if(null==e)throw Error(k(267,e));var n=E({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=U.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)B.call(t,c)&&!F.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==i?i[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){i=Array(c);for(var s=0;s<c;s++)i[s]=arguments[s+2];n.children=i}return{$$typeof:g,type:e.type,key:o,ref:a,props:n,_owner:u}},y.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:j,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:S,_context:e},e.Consumer=e},y.createElement=L,y.createFactory=function(e){var t=L.bind(null,e);return t.type=e,t},y.createRef=function(){return{current:null}},y.forwardRef=function(e){return{$$typeof:O,render:e}},y.isValidElement=T,y.lazy=function(e){return{$$typeof:R,_payload:{_status:-1,_result:e},_init:Z}},y.memo=function(e,t){return{$$typeof:P,type:e,compare:void 0===t?null:t}},y.useCallback=function(e,t){return W().useCallback(e,t)},y.useContext=function(e,t){return W().useContext(e,t)},y.useDebugValue=function(){},y.useEffect=function(e,t){return W().useEffect(e,t)},y.useImperativeHandle=function(e,t,r){return W().useImperativeHandle(e,t,r)},y.useLayoutEffect=function(e,t){return W().useLayoutEffect(e,t)},y.useMemo=function(e,t){return W().useMemo(e,t)},y.useReducer=function(e,t,r){return W().useReducer(e,t,r)},y.useRef=function(e){return W().useRef(e)},y.useState=function(e){return W().useState(e)},y.version="17.0.2";d.exports=y;var Y=d.exports;class G{static async render(e,t,r="root",n){"undefined"!=typeof window&&await G.renderInBrowser(e,t,r,n)}static async renderInBrowser(e,t,r,n){const o=document.getElementById("RENDER_DATA"),u=window.location.href,{pathname:i}=window.location,c=function(e){const t="http"===e.slice(0,4)?e:`http://fake.host${e}`,r=new URL(t).searchParams,n={};return r.forEach(((e,t)=>{n[t]=e})),n}(u),s={pathname:i,query:c,params:n};let f;if(o)try{const e=decodeURIComponent(o.innerText),t=JSON.parse(e);t._EDEN_NO_PRELOAD_DATA_||(f=t)}catch(p){0}if("function"==typeof e.getInitialProps&&void 0===f)try{f=await e.getInitialProps(s)}catch(p){}window.__EDEN_SSR_PREFETCHED_DATA__=f;const l=Y.createElement(e,null!=f?f:{});window.__RENDER_CSR__||window.__EDEN_SSR_DISABLED_IN_DEV__?a.render(l,document.getElementById(r),t):a.hydrate(l,document.getElementById(r),t)}}if(!0===l.S5.lazy)throw new Error("SSR project does not support router.lazy = true, use router.lazy = { mode: 'loadable' } instead");c.t.create({runtimes:[]}).setAppModule(l.b9);const K=e=>o.createElement(l.Z5,Object.assign({loading:l.NF&&o.createElement(l.NF,null),routes:l.$E,extraPageProps:e},l.S5)),Q=e=>{const[t,r]=(0,o.useState)(e.initialPageData);return(0,o.useEffect)((()=>u.m8.listen((({action:e,location:{pathname:t,search:n}})=>{if("POP"===e)return;const o=(0,i.fp)(l.$E,t,l.S5.basename)||[],{params:a}=o[0]||{},u=new URLSearchParams(null!=n?n:""),c=Object.fromEntries(u.entries());Promise.all([...(0,f.i)(t,l.S5.basename,l.$E,{pathname:t,query:c,params:a}),...(0,p.n)(t,l.S5.basename,l.$E,{pathname:t,query:c,params:a})]).then((e=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{}))).then((e=>{r((t=>Object.assign(Object.assign({},t),e)))})).catch((e=>{}))})))),o.createElement(l.Il.Provider,{value:{pageData:t}},o.createElement(l._q.Provider,{value:{pageData:t,routes:e.routes}},e.children))},ee=function(e){var t;if("custom"===l.Z3)return o.createElement(l.b9.default,{Component:()=>null});const{app:r}=e,a=(0,n._)(e,["app"]);return o.createElement(Q,{initialPageData:a,routes:l.$E},o.createElement(u.jH,Object.assign({history:u.m8},l.S5),o.createElement(l.Xn.Provider,{value:{fd:null===(t=r)||void 0===t?void 0:t._fd}},o.createElement(l.b9.default,Object.assign({Component:K},r)))))};ee.getInitialProps=(0,s.Z)(l.b9,l.$E,l.S5);const te=()=>{const{pathname:e}=window.location,t=(0,i.fp)(l.$E,e,l.S5.basename)||[],{params:r}=t[0]||{};G.render(ee,(()=>null),"root",r)};l.S5.lazy?r.e(420).then(r.bind(r,30420)).then((({loadableReady:e})=>e(te))):te()},34829:function(e,t,r){e.exports=r(56678)},68564:function(e,t,r){r(29902)},86258:function(e,t,r){r(65007)}}]);
//# sourceMappingURL=475.899120c1.js.map