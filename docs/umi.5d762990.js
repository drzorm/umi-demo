var U=Object.assign;(function(d){function i(t){for(var n=t[0],r=t[1],E=t[2],m,h,g=0,D=[];g<n.length;g++)h=n[g],Object.prototype.hasOwnProperty.call(l,h)&&l[h]&&D.push(l[h][0]),l[h]=0;for(m in r)Object.prototype.hasOwnProperty.call(r,m)&&(d[m]=r[m]);for(f&&f(t);D.length;)D.shift()();return c.push.apply(c,E||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var r=c[n],E=!0,m=1;m<r.length;m++){var h=r[m];l[h]!==0&&(E=!1)}E&&(c.splice(n--,1),t=o(o.s=r[0]))}return t}var s={},l={0:0},c=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return d[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=d,o.c=s,o.d=function(t,n,r){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},o.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(n&1&&(t=o(t)),n&8)return t;if(n&4&&typeof t=="object"&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),n&2&&typeof t!="string")for(var E in t)o.d(r,E,function(m){return t[m]}.bind(null,E));return r},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],y=u.push.bind(u);u.push=i,u=u.slice();for(var _=0;_<u.length;_++)i(u[_]);var f=y;return c.push([0,1]),e()})({"+ego":function(d,i,e){"use strict";e.r(i);var s=e("cDcd"),l=e.n(s);const c=l.a.memo(r=>l.a.createElement("div",{className:"layout"},r.children));var o=c,u=e("tJVT"),y=e("aeQz");const _=(r,E)=>{switch(E.type){case"update":return E.payload;default:return r}},f=Object(s.memo)(r=>{const E=Object(s.useReducer)(_,"red"),m=Object(u.a)(E,2),h=m[0],g=m[1];return l.a.createElement(y.a.Provider,{value:{state:h,dispatch:g}},r.children)});var t=f,n=i.default=Object(s.memo)(r=>l.a.createElement(t,null,l.a.createElement(o,null,r.children)))},0:function(d,i,e){d.exports=e("tB8F")},"2hfb":function(d,i,e){},A8du:function(d,i,e){"use strict";e.r(i);var s=e("cDcd"),l=e.n(s),c=e("2hfb"),o=e.n(c);i.default=()=>l.a.createElement("div",null,"login")},GV2H:function(d,i,e){"use strict";e.r(i);var s=e("cDcd"),l=e.n(s),c=e("Q3Uu"),o=e.n(c),u=e("ET/R"),y=e("aeQz");let _=0;i.default=()=>{const f=Object(s.useContext)(y.a);return Object(s.useEffect)(()=>{console.log("ENV :>> ","production")},[]),Object(u.a)(()=>{console.log("useMount")}),Object(s.useEffect)(()=>{const t=window.setInterval(()=>{f.dispatch({type:"update",payload:["blue","red"][_++%2]})},3e3);return()=>{window.clearTimeout(t)}},[f]),l.a.createElement("div",{className:f.state},f.state)}},Q3Uu:function(d,i,e){},aeQz:function(d,i,e){"use strict";var s=e("cDcd"),l=e.n(s);const c=l.a.createContext({state:"red",dispatch:o=>{}});i.a=c},cDcd:function(d,i){d.exports=window.React},faye:function(d,i){d.exports=window.ReactDOM},tB8F:function(d,i,e){"use strict";e.r(i);var s={};e.r(s),e.d(s,"rootContainer",function(){return m});var l={};e.r(l),e.d(l,"rootContainer",function(){return V});var c=e("LtsZ");const o=new c.Plugin({validKeys:["modifyClientRenderOpts","patchRoutes","rootContainer","render","onRouteChange","getInitialState","request"]});var u=e("cDcd"),y=e.n(u),_=e("tJVT"),f=e("aUsF"),t=e.n(f),n=e("FMtG");function r(a,p){const O=Object(u.useContext)(n.UmiContext),v=Object(u.useRef)(p);v.current=p;const P=Object(u.useState)(()=>v.current?v.current(O.data[a]):O.data[a]),R=Object(_.a)(P,2),A=R[0],j=R[1],N=Object(u.useRef)(A);return N.current=A,Object(u.useEffect)(()=>{const C=M=>{if(p&&v.current){const S=v.current(M),G=N.current;t()(S,G)||j(S)}else j(M)};try{O.callbacks[a].add(C)}catch(M){O.callbacks[a]=new Set(),O.callbacks[a].add(C)}return()=>{O.callbacks[a].delete(C)}},[a]),A}if(typeof r!="function")throw new Error("[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.");var E=a=>{const p=a.children,O=Object(u.useRef)(!1),v=r("@@initialState")||{},P=v.loading,R=P===void 0?!1:P;return Object(u.useEffect)(()=>{R||(O.current=!0)},[R]),R&&!O.current?null:p};function m(a){return y.a.createElement(E,null,a)}var h=()=>({loading:!1,refresh:()=>{}}),g=e("7xWI"),D=e.n(g),w=e("sFpY"),B=e.n(w);const I={"@@initialState":h},x=new D.a(),K=B.a;var W=({children:a})=>y.a.createElement(n.UmiContext.Provider,{value:x},Object.entries(I).map(p=>y.a.createElement(K,{key:p[0],namespace:p[0],hook:p[1],onUpdate:O=>{const v=p,P=Object(_.a)(v,1),R=P[0];x.data[R]=O,x.update(R)}})),a);function V(a){return y.a.createElement(W,null,a)}o.register({apply:s,path:"../plugin-initial-state/runtime"}),o.register({apply:l,path:"../plugin-model/runtime"});var L=e("YS25");let T={basename:"/"};window.routerBase&&(T.basename=window.routerBase);let b=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(L.b)(T);const X=(a=!1)=>(a||(b=Object(L.b)(T)),b),Q=(a={})=>{T=U(U({},T),a)};var k=e("zlVK");function F(){const a=[{path:"/",component:e("+ego").default,routes:[{path:"/",exact:!0,component:e("GV2H").default},{path:"/login",exact:!0,component:e("A8du").default}]}];return o.applyPlugins({key:"patchRoutes",type:c.ApplyPluginsType.event,args:{routes:a}}),a}const J=(a={})=>o.applyPlugins({key:"render",type:c.ApplyPluginsType.compose,initialValue:()=>{const p=o.applyPlugins({key:"modifyClientRenderOpts",type:c.ApplyPluginsType.modify,initialValue:{routes:a.routes||F(),plugin:o,history:X(a.hot),isServer:Object({NODE_ENV:"production"}).__IS_SERVER,rootElement:"root",defaultTitle:"hi"}});return Object(k.renderClient)(p)},args:a}),H=J();var z=i.default=H();window.g_umi={version:"3.2.19"}}});