var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,i,a,l,u,f,d,s,p,c,h,v,y,b,m,g,j={405:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(694),t.e(652)]).then((()=>()=>t(763))),"./extension":()=>Promise.all([t.e(694),t.e(652)]).then((()=>()=>t(763)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},w={};function k(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={exports:{}};return j[e](t,t.exports,k),t.exports}k.m=j,k.c=w,k.amdO={},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,k.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);k.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var a=2&n&&t;"object"==typeof a&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,k.d(o,i),o},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{568:"9f65f9722e58c678f70f",652:"bd138babb43a744dd546",694:"e063d498fa9e311b3f30",829:"33294da76927e17d84b7",927:"70779172d674899e5e61",951:"9226dd60cdf29f903bdd"}[e]+".js?v="+{568:"9f65f9722e58c678f70f",652:"bd138babb43a744dd546",694:"e063d498fa9e311b3f30",829:"33294da76927e17d84b7",927:"70779172d674899e5e61",951:"9226dd60cdf29f903bdd"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="@jupyterlite/pyodide-kernel-extension:",k.l=(e,r,o,i)=>{if(t[e])t[e].push(r);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,k.nc&&a.setAttribute("nonce",k.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var s=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var i=k.S[t],a="@jupyterlite/pyodide-kernel-extension",l=(e,r,t,n)=>{var o=i[e]=i[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:a>l.from))&&(o[r]={get:t,from:a,eager:!!n})},u=[];return"default"===t&&(l("@jupyterlite/pyodide-kernel-extension","0.0.5",(()=>Promise.all([k.e(694),k.e(652)]).then((()=>()=>k(763))))),l("@jupyterlite/pyodide-kernel","0.0.5",(()=>Promise.all([k.e(951),k.e(829),k.e(694)]).then((()=>()=>k(605)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},i=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],i=(typeof n)[0];if(t>=r.length)return"u"==i;var a=r[t],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&n!=a)return n<a;t++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var i=0,a=1,u=!0;;a++,i++){var f,d,s=a<e.length?(typeof e[a])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!u||("u"==s?a>t&&!n:""==s!=n);if("u"==d){if(!u||"u"!=s)return!1}else if(u)if(s==d)if(a<=t){if(f!=e[a])return!1}else{if(n?f>e[a]:f<e[a])return!1;f!=e[a]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||a<=t)return!1;u=!1,a--}else{if(a<=t||d<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,a--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?l(h,r):!c())}return!!c()},u=(e,r)=>{var t=k.S[e];if(!t||!k.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&i(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var o=f(e,t);return l(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,t,o,n)),c(e[t][o])},p=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!i(e,r)?e:r),0))&&n[r]},c=e=>(e.loaded=1,e.get()),v=(h=e=>function(r,t,n,o){var i=k.I(r);return i&&i.then?i.then(e.bind(e,r,k.S[r],t,n,o)):e(r,k.S[r],t,n,o)})(((e,r,t,n)=>(u(e,t),s(r,0,t,n)))),y=h(((e,r,t,n,o)=>{var i=r&&k.o(r,t)&&p(r,t,n);return i?c(i):o()})),b={},m={289:()=>v("default","@jupyterlite/kernel",[2,0,1,0,,"beta",18]),671:()=>v("default","@jupyterlab/coreutils",[1,5,5,3]),174:()=>v("default","@jupyterlite/server",[2,0,1,0,,"beta",18]),685:()=>v("default","@jupyterlite/contents",[2,0,1,0,,"beta",18]),526:()=>v("default","@lumino/coreutils",[1,1,11,0]),927:()=>y("default","@jupyterlite/pyodide-kernel",[3,0,0,5],(()=>Promise.all([k.e(951),k.e(829)]).then((()=>()=>k(605)))))},g={652:[174,685],694:[289,671],829:[526],927:[927]},k.f.consumes=(e,r)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}},n=r=>{delete b[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var o=m[e]();o.then?r.push(b[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{k.b=document.baseURI||self.location.href;var e={335:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(694|927)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=k.p+k.u(r),a=new Error;k.l(i,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,l]=t,u=0;if(i.some((r=>0!==e[r]))){for(n in a)k.o(a,n)&&(k.m[n]=a[n]);l&&l(k)}for(r&&r(t);u<i.length;u++)o=i[u],k.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyterlite_pyodide_kernel_extension=self.webpackChunk_jupyterlite_pyodide_kernel_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var P=k(405);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/pyodide-kernel-extension"]=P})();
//# sourceMappingURL=remoteEntry.c825fba8c7254c146abf.js.map