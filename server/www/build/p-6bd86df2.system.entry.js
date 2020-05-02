var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(e){o(e)}}function s(t){try{c(n["throw"](t))}catch(e){o(e)}}function c(t){t.done?r(t.value):i(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4e9ecd93.system.js","./p-450d8d66.system.js","./p-2d5d376b.system.js"],(function(t){"use strict";var e,r,n,i,o,a,s,c,u,l,f,h,p,v,d,y,g;return{setters:[function(t){e=t.r;r=t.h;n=t.H;i=t.g;o=t.c},function(t){a=t.A},function(t){s=t.m;c=t.a;u=t.s;l=t.b;f=t.c;h=t.d;p=t.h;v=t.e;d=t.f;y=t.g;g=t.l}],execute:function(){var m=":host{display:block}";var b=t("app_nav",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(r){switch(r.label){case 0:return[4,fetch(""+"/api/navigation")];case 1:t=r.sent();e=this;return[4,t.json()];case 2:e.pages=r.sent();return[2]}}))}))};t.prototype.renderDir=function(t){var e=this;return r("ul",null,t.files.map((function(t){if("isDir"in t){return r("li",null,r("div",null,t.info.title),e.renderDir(t))}return r("li",null,r("stencil-route-link",{url:t.url,anchorTitle:t.title,anchorRole:"menuitem"},t.title))})))};t.prototype.render=function(){console.log(this.pages);return r(n,null,this.renderDir(this.pages))};return t}());b.style=m;var w="header{background:#5851ff;color:white;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";var O=t("app_root",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("div",null,r("header",null,r("h1",null,"Stencil App Starter")),r("main",null,r("app-nav",null),r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:1},r("stencil-route",{url:"/",component:"app-home",exact:true}),r("stencil-route",{group:"pages",url:"/:page*",component:"app-page"})))))};return t}());O.style=w;var x="stencil-route.inactive{display:none}";var T=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=s(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!c(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());a.injectProps(T,["location","history","historyType","routeViewsUpdated"]);T.style=x;var P=function(t,e,r){return r(t.confirm(e))};var _=function(t){return t.metaKey||t.altKey||t.ctrlKey||t.shiftKey};var k=function(t){var e=t.navigator.userAgent;if((e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1){return false}return t.history&&"pushState"in t.history};var S=function(t){return t.userAgent.indexOf("Trident")===-1};var L=function(t){return t.userAgent.indexOf("Firefox")===-1};var j=function(t,e){return e.state===undefined&&t.userAgent.indexOf("CriOS")===-1};var E=function(t,e){var r=t[e];var n="__storage_test__";try{r.setItem(n,n);r.removeItem(n);return true}catch(i){return i instanceof DOMException&&(i.code===22||i.code===1014||i.name==="QuotaExceededError"||i.name==="NS_ERROR_DOM_QUOTA_REACHED")&&r.length!==0}};var U=function(t,e){if(t.charAt(0)=="/"&&e.charAt(e.length-1)=="/"){return e.slice(0,e.length-1)+t}return e+t};var A=t("stencil_route_link",function(){function t(t){e(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){this.match=s(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};t.prototype.handleClick=function(t){if(_(t)||!this.history||!this.url||!this.root){return}t.preventDefault();return this.history.push(U(this.url,this.root))};t.prototype.render=function(){var t;var e={class:(t={},t[this.activeClass]=this.match!==null,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){e.class[this.anchorClass]=true}if(this.custom==="a"){e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return r(this.custom,Object.assign({},e),r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());a.injectProps(A,["history","location","root"]);var C=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var I=function(t,e,r){return s(t,{path:e,exact:r,strict:true})};var R=function(t){return t.tagName==="STENCIL-ROUTE"};var M=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=C();this.subscribers=[];this.queue=o(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(R).map((function(r,n){var i=I(t.pathname,r.url,r.exact);if(i&&e===-1){e=n}return{el:r,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write((function(){n.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());a.injectProps(M,["location","routeViewsUpdated"]);var H=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var D=function(){var t;var e=[];var r=function(e){H(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,i){if(t!=null){var o=typeof t==="function"?t(e,r):t;if(typeof o==="string"){if(typeof n==="function"){n(o,i)}else{H(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(o!==false)}}else{i(true)}};var i=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter((function(t){return t!==n}))}};var o=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:o}};var V=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(E(t,"sessionStorage")){var i=[];r.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return r.get(t)};var o=function(t){return r.has(t)};var a=function(e){n(e,[t.scrollX,t.scrollY])};if(E(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:i,has:o,capture:a}};var q="popstate";var N="hashchange";var B=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var i=t.location;var o=t.navigator;var a=k(t);var s=!S(o);var c=V(t);var y=e.forceRefresh!=null?e.forceRefresh:false;var g=e.getUserConfirmation!=null?e.getUserConfirmation:P;var m=e.keyLength!=null?e.keyLength:6;var b=e.basename?u(l(e.basename)):"";var w=function(){try{return t.history.state||{}}catch(e){return{}}};var O=function(t){t=t||{};var e=t.key,r=t.state;var n=i.pathname,o=i.search,a=i.hash;var s=n+o+a;H(!b||p(s,b),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+b+'".');if(b){s=v(s,b)}return f(s,r,e||h(m))};var x=D();var T=function(t){c.capture(G.location.key);Object.assign(G,t);G.location.scrollPosition=c.get(G.location.key);G.length=n.length;x.notifyListeners(G.location,G.action)};var _=function(t){if(!j(o,t)){E(O(t.state))}};var L=function(){E(O(w()))};var E=function(t){if(r){r=false;T()}else{var e="POP";x.confirmTransitionTo(t,e,g,(function(r){if(r){T({action:e,location:t})}else{U(t)}}))}};var U=function(t){var e=G.location;var n=C.indexOf(e.key);var i=C.indexOf(t.key);if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;Y(o)}};var A=O(w());var C=[A.key];var I=0;var R=false;var M=function(t){return b+d(t)};var B=function(t,e){H(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var o=f(t,e,h(m),G.location);x.confirmTransitionTo(o,r,g,(function(t){if(!t){return}var e=M(o);var s=o.key,c=o.state;if(a){n.pushState({key:s,state:c},"",e);if(y){i.href=e}else{var u=C.indexOf(G.location.key);var l=C.slice(0,u===-1?0:u+1);l.push(o.key);C=l;T({action:r,location:o})}}else{H(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var W=function(t,e){H(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var o=f(t,e,h(m),G.location);x.confirmTransitionTo(o,r,g,(function(t){if(!t){return}var e=M(o);var s=o.key,c=o.state;if(a){n.replaceState({key:s,state:c},"",e);if(y){i.replace(e)}else{var u=C.indexOf(G.location.key);if(u!==-1){C[u]=o.key}T({action:r,location:o})}}else{H(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var Y=function(t){n.go(t)};var K=function(){return Y(-1)};var z=function(){return Y(1)};var F=function(e){I+=e;if(I===1){t.addEventListener(q,_);if(s){t.addEventListener(N,L)}}else if(I===0){t.removeEventListener(q,_);if(s){t.removeEventListener(N,L)}}};var J=function(t){if(t===void 0){t=""}var e=x.setPrompt(t);if(!R){F(1);R=true}return function(){if(R){R=false;F(-1)}return e()}};var Q=function(t){var e=x.appendListener(t);F(1);return function(){F(-1);e()}};var G={length:n.length,action:"POP",location:A,createHref:M,push:B,replace:W,go:Y,goBack:K,goForward:z,block:J,listen:Q,win:t};return G};var W="hashchange";var Y={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+y(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:y,decodePath:l},slash:{encodePath:l,decodePath:l}};var K=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var i=0;var o=false;var a=t.location;var s=t.history;var c=L(t.navigator);var y=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,b=m===void 0?P:m,w=e.hashType,O=w===void 0?"slash":w;var x=e.basename?u(l(e.basename)):"";var T=Y[O],_=T.encodePath,k=T.decodePath;var S=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var j=function(t){return a.hash=t};var E=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var U=function(){var t=k(S());H(!x||p(t,x),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+x+'".');if(x){t=v(t,x)}return f(t,undefined,h(y))};var A=D();var C=function(t){Object.assign(tt,t);tt.length=s.length;A.notifyListeners(tt.location,tt.action)};var I=function(){var t=S();var e=_(t);if(t!==e){E(e)}else{var i=U();var o=tt.location;if(!r&&g(o,i)){return}if(n===d(i)){return}n=null;R(i)}};var R=function(t){if(r){r=false;C()}else{var e="POP";A.confirmTransitionTo(t,e,b,(function(r){if(r){C({action:e,location:t})}else{M(t)}}))}};var M=function(t){var e=tt.location;var n=B.lastIndexOf(d(e));var i=B.lastIndexOf(d(t));if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;J(o)}};var V=S();var q=_(V);if(V!==q){E(q)}var N=U();var B=[d(N)];var K=function(t){return"#"+_(x+d(t))};var z=function(t,e){H(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=f(t,undefined,h(y),tt.location);A.confirmTransitionTo(i,r,b,(function(t){if(!t){return}var e=d(i);var o=_(x+e);var a=S()!==o;if(a){n=e;j(o);var s=B.lastIndexOf(d(tt.location));var c=B.slice(0,s===-1?0:s+1);c.push(e);B=c;C({action:r,location:i})}else{H(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");C()}}))};var F=function(t,e){H(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=f(t,undefined,h(y),tt.location);A.confirmTransitionTo(i,r,b,(function(t){if(!t){return}var e=d(i);var o=_(x+e);var a=S()!==o;if(a){n=e;E(o)}var s=B.indexOf(d(tt.location));if(s!==-1){B[s]=e}C({action:r,location:i})}))};var J=function(t){H(c,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var Q=function(){return J(-1)};var G=function(){return J(1)};var X=function(t,e){i+=e;if(i===1){t.addEventListener(W,I)}else if(i===0){t.removeEventListener(W,I)}};var Z=function(e){if(e===void 0){e=""}var r=A.setPrompt(e);if(!o){X(t,1);o=true}return function(){if(o){o=false;X(t,-1)}return r()}};var $=function(e){var r=A.appendListener(e);X(t,1);return function(){X(t,-1);r()}};var tt={length:s.length,action:"POP",location:N,createHref:K,push:z,replace:F,go:J,goBack:Q,goForward:G,block:Z,listen:$,win:t};return tt};var z=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var F={browser:B,hash:K};var J=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=o(this,"isServer");this.queue=o(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=F[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=z(e,t.root);t.location=e}));this.location=z(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(a.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});return t}())}}}));