let e,t,n,l=!1,o=!1,s=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.CSS,a=r.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},u=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p={},m="http://www.w3.org/1999/xlink",h=new WeakMap,y=(e,t,n)=>{let l=we.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,we.set(e,l)},w=(e,t)=>{let n=b(t.o),l=we.get(n);if(e=11===e.nodeType?e:a,l)if("string"==typeof l){let t,o=h.get(e=e.head||e);o||h.set(e,o=new Set),o.has(n)||(e.host&&(t=e.querySelector(`[sty-id="${n}"]`))?t.innerHTML=l:(t=a.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link"))),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},b=e=>"sc-"+e,v=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),_={},k=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!k(l))&&(l+=""),i&&r?c[c.length-1].s+=l:c.push(i?j(null,l):l),r=i)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,R);const f=j(e,null);return f.u=t,c.length>0&&(f.$=c),f.p=o,f.h=s,f},j=(e,t)=>({t:0,v:e,s:t,_:null,$:null,u:null,p:null,h:null}),M={},R={forEach:(e,t)=>e.map(U).forEach(t),map:(e,t)=>e.map(U).map(t).map(x)},U=e=>({vattrs:e.u,vchildren:e.$,vkey:e.p,vname:e.h,vtag:e.v,vtext:e.s}),x=e=>{const t=j(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.p=e.vkey,t.h=e.vname,t},S=(e,t,n,l,o,s)=>{if(n!==l){let c=pe(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=C(n),s=C(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const r=k(l);if((c||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?f?e.removeAttributeNS(m,t):e.removeAttribute(t):(!c||4&s||o)&&!r&&(l=!0===l?"":l,f?e.setAttributeNS(m,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):pe(r,a)?a.slice(2):a[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)}},L=/\s/,C=e=>e?e.split(L):[],P=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.u||_,i=t.u||_;for(l in s)l in i||S(o,l,s[l],void 0,n,t.t);for(l in i)S(o,l,s[l],i[l],n,t.t)},O=(o,i,r,c)=>{let f,u,$,d=i.$[r],p=0;if(l||(s=!0,"slot"===d.v&&(e&&c.classList.add(e+"-s"),d.t|=d.$?2:1)),null!==d.s)f=d._=a.createTextNode(d.s);else if(1&d.t)f=d._=a.createTextNode("");else if(f=d._=a.createElement(2&d.t?"slot-fb":d.v),P(null,d,!1),null!=e&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),d.$)for(p=0;p<d.$.length;++p)u=O(o,d,p,f),u&&f.appendChild(u);return f["s-hn"]=n,3&d.t&&(f["s-sr"]=!0,f["s-cr"]=t,f["s-sn"]=d.h||"",$=o&&o.$&&o.$[r],$&&$.v===d.v&&o._&&T(o._,!1)),f},T=(e,t)=>{f.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(F(e).insertBefore(e,D(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&T(e,t)}f.t&=-2},E=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=O(null,l,s,e),r&&(o[s]._=r,c.insertBefore(r,D(t))))},I=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l._,V(l),o=!0,s["s-ol"]?s["s-ol"].remove():T(s,!0),s.remove())},A=(e,t)=>e.v===t.v&&("slot"===e.v?e.h===t.h:e.p===t.p),D=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,W=(e,t)=>{const n=t._=e._,l=e.$,o=t.$,s=t.s;let i;null===s?("slot"===t.v||P(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=l.length-1,p=l[0],m=l[d];for(;i<=f&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==p)p=l[++r];else if(null==m)m=l[--d];else if(A(u,p))W(u,p),u=t[++i],p=l[++r];else if(A($,m))W($,m),$=t[--f],m=l[--d];else if(A(u,m))"slot"!==u.v&&"slot"!==m.v||T(u._.parentNode,!1),W(u,m),e.insertBefore(u._,$._.nextSibling),u=t[++i],m=l[--d];else if(A($,p))"slot"!==u.v&&"slot"!==m.v||T($._.parentNode,!1),W($,p),e.insertBefore($._,u._),$=t[--f],p=l[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].p&&t[a].p===p.p){c=a;break}c>=0?(s=t[c],s.v!==p.v?o=O(t&&t[r],n,c,e):(W(s,p),t[c]=void 0,o=s._),p=l[++r]):(o=O(t&&t[r],n,r,e),p=l[++r]),o&&F(u._).insertBefore(o,D(u._))}i>f?E(e,null==l[d+1]?null:l[d+1]._,n,l,r,d):r>d&&I(t,i,f)})(n,l,t,o):null!==o?(null!==e.s&&(n.textContent=""),E(n,null,t,o,0,o.length-1)):null!==l&&I(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.s!==s&&(n.data=s)},q=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}q(t)}},H=[],N=e=>{let t,n,l,s,i,r,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(B(n,s)?(i=H.find(e=>e.k===n),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.g=t:H.push({g:t,k:n}),n["s-sr"]&&H.map(e=>{B(e.k,n["s-sn"])&&(i=H.find(e=>e.k===n),i&&!e.g&&(e.g=i.g))})):H.some(e=>e.k===n)||H.push({k:n}));1===t.nodeType&&N(t)}},B=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,V=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(V)},z=e=>ue(e).j,G=(e,t)=>{t&&!e.M&&t["s-p"].push(new Promise(t=>e.M=t))},J=(e,t)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const n=e.R,l=()=>K(e,n,t);let o;return G(e,e.U),t&&(o=Z(n,"componentWillLoad")),ee(o,()=>Re(l))},K=(i,r,c)=>{const $=i.j,d=$["s-rc"];c&&(e=>{const t=e.S,n=e.j,l=t.t,o=w(u&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(i),((i,r)=>{const c=i.j,$=i.S,d=i.L||j(null,null),p=(e=>e&&e.v===M)(r)?r:g(null,null,r);if(n=c.tagName,$.C&&(p.u=p.u||{},$.C.map(([e,t])=>p.u[t]=c[e])),p.v=null,p.t|=4,i.L=p,p._=d._=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=u&&0!=(1&$.t),o=!1,W(d,p),f.t|=1,s){let e,t,n,l,o,s;N(p._);let i=0;for(;i<H.length;i++)e=H[i],t=e.k,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<H.length;i++)if(e=H[i],t=e.k,e.g){for(l=e.g.parentNode,o=e.g.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&q(p._),f.t&=-2,H.length=0})(i,Q(r)),i.t&=-17,i.t|=2,d&&(d.map(e=>e()),$["s-rc"]=void 0);{const e=$["s-p"],t=()=>X(i);0===e.length?t():(Promise.all(e).then(t),i.t|=4,e.length=0)}},Q=e=>{try{e=e.render&&e.render()}catch(t){me(t)}return e},X=e=>{const t=e.j,n=e.R,l=e.U;64&e.t?Z(n,"componentDidUpdate"):(e.t|=64,te(t),Z(n,"componentDidLoad"),e.P(t),l||Y()),e.M&&(e.M(),e.M=void 0),512&e.t&&je(()=>J(e,!1)),e.t&=-517},Y=()=>{te(a.documentElement),je(()=>(e=>{const t=new CustomEvent("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(r))},Z=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){me(l)}},ee=(e,t)=>e&&e.then?e.then(t):t(),te=e=>e.classList.add("hydrated"),ne=(e,t,n,l,o,s,i)=>{let r,c,f,u;if(1===s.nodeType){for(r=s.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||(f={t:0,O:c[0],T:c[1],I:c[2],A:c[3],v:s.tagName.toLowerCase(),_:s,u:null,$:null,p:null,h:null,s:null},t.push(f),s.removeAttribute("c-id"),e.$||(e.$=[]),e.$[f.A]=f,e=f,l&&"0"===f.I&&(l[f.A]=f._))),u=s.childNodes.length-1;u>=0;u--)ne(e,t,n,l,o,s.childNodes[u],i);if(s.shadowRoot)for(u=s.shadowRoot.childNodes.length-1;u>=0;u--)ne(e,t,n,l,o,s.shadowRoot.childNodes[u],i)}else if(8===s.nodeType)c=s.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],f={t:0,O:c[1],T:c[2],I:c[3],A:c[4],_:s,u:null,$:null,p:null,h:null,v:null,s:null},"t"===r?(f._=s.nextSibling,f._&&3===f._.nodeType&&(f.s=f._.textContent,t.push(f),s.remove(),e.$||(e.$=[]),e.$[f.A]=f,l&&"0"===f.I&&(l[f.A]=f._))):f.O===i&&("s"===r?(f.v="slot",s["s-sn"]=c[5]?f.h=c[5]:"",s["s-sr"]=!0,l&&(f._=a.createElement(f.v),f.h&&f._.setAttribute("name",f.h),s.parentNode.insertBefore(f._,s),s.remove(),"0"===f.I&&(l[f.A]=f._)),n.push(f),e.$||(e.$=[]),e.$[f.A]=f):"r"===r&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.v){const t=j(null,s.textContent);t._=s,t.A="0",e.$=[t]}},le=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)le(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)le(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},oe=(e,t,n)=>{if(t.D){e.watchers&&(t.F=e.watchers);const l=Object.entries(t.D),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>ue(this).W.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ue(this),s=o.W.get(t),i=o.t,r=o.R;if(n=((e,t)=>null==e||k(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.D[t][0]),!(8&i&&void 0!==s||n===s)&&(o.W.set(t,n),r)){if(l.F&&128&i){const e=l.F[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(l){me(l)}})}2==(18&i)&&J(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){f.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.C.push([e,o]),o})}}return e},se=e=>{Z(e,"connectedCallback")},ie=e=>{if(0==(1&f.t)){const t=ue(e),n=t.S,l=()=>{};if(1&t.t)se(t.R);else{let l;if(t.t|=1,l=e.getAttribute("s-id"),l){if(u&&1&n.t){const t=w(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],i=o?[]:null,r=l.L=j(t,null);f.q||le(a.body,f.q=new Map),e["s-id"]=n,e.removeAttribute("s-id"),ne(r,s,[],i,e,e,n),s.map(e=>{const n=e.O+"."+e.T,l=f.q.get(n),s=e._;l&&u&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),f.q.delete(n)}),o&&i.map(e=>{e&&o.appendChild(e)})})(e,n.o,l,t)}l||12&n.t&&re(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")||n["s-p"]){G(t,t.U=n);break}}n.D&&Object.entries(n.D).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),je(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=ye(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.F=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){me(r)}t.t&=-9,t.t|=128,e(),se(t.R)}const e=b(n.o);if(!we.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_app("./p-5be35157.js").then(t=>t.scopeCss(l,e,!1))),y(e,l,!!(1&n.t)),t()}}const s=t.U,i=()=>J(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n))}l()}},re=e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ce=(e,t={})=>{const n=[],l=t.exclude||[],o=r.customElements,s=a.head,i=s.querySelector("meta[charset]"),c=a.createElement("style"),$=[],d=a.querySelectorAll("[sty-id]");let p,m=!0,h=0;for(Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",a.baseURI).href,f.t|=2;h<d.length;h++)y(d[h].getAttribute("sty-id"),v(d[h].innerHTML),!0);e.map(e=>e[1].map(t=>{const s={t:t[0],o:t[1],D:t[2],H:t[3]};s.D=t[2],s.C=[],s.F={},!u&&1&s.t&&(s.t|=8);const i=s.o,r=class extends HTMLElement{constructor(e){super(e),de(e=this,s),1&s.t&&(u?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){p&&(clearTimeout(p),p=null),m?$.push(this):f.jmp(()=>ie(this))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const e=ue(this).R;Z(e,"disconnectedCallback"),Z(e,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=ue(this);e.j.isConnected&&2==(18&e.t)&&J(e,!1)}})()}componentOnReady(){return ue(this).N}};s.B=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,oe(r,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),m=!1,$.length?$.map(e=>e.connectedCallback()):f.jmp(()=>p=setTimeout(Y,30))},ae=(e,t)=>t in p?p[t]:"window"===t?r:"document"===t?a:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",f.l);return e.origin!==r.location.origin?e.href:e.pathname})():"queue"===t?{write:Re,read:Me,tick:{then:e=>je(e)}}:void 0)),fe=new WeakMap,ue=e=>fe.get(e),$e=(e,t)=>fe.set(t.R=e,t),de=(e,t)=>{const n={t:0,j:e,S:t,W:new Map};return n.N=new Promise(e=>n.P=e),e["s-p"]=[],e["s-rc"]=[],fe.set(e,n)},pe=(e,t)=>t in e,me=e=>console.error(e),he=new Map,ye=e=>{const t=e.o.replace(/-/g,"_"),n=e.B,l=he.get(n);return l?l[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(he.set(n,e),e[t]),me)},we=new Map,be=[],ve=[],_e=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&f.t?je(ge):f.raf(ge))},ke=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){me(t)}e.length=0},ge=()=>{ke(be),ke(ve),(i=be.length>0)&&f.raf(ge)},je=e=>$().then(e),Me=_e(be,!1),Re=_e(ve,!0),Ue=()=>c&&c.supports&&c.supports("color","var(--c)")?$():__sc_import_app("./p-a412aefa.js").then(()=>(f.V=r.__cssshim)?(!1).i():0),xe=()=>{f.V=r.__cssshim;const e=Array.from(a.querySelectorAll("script")).find(e=>/\/app(\.esm)?\.js($|\?|#)/.test(e.src)||"app"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,r.location.href)).href,Se(t.resourcesUrl,e),r.customElements?$(t):__sc_import_app("./p-b28562ec.js").then(()=>t))},Se=(e,t)=>{try{r.__sc_import_app=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;r.__sc_import_app=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=a.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_app.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(r.__sc_import_app.m),e.remove()}}),l.set(o,s),a.head.appendChild(e)}return s}}};export{M as H,Ue as a,ce as b,ae as c,z as g,g as h,xe as p,$e as r}