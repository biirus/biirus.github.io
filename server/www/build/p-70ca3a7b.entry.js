import{r as t,h as a,H as s}from"./p-a4f7f2da.js";const i=class{constructor(a){t(this,a)}matchWatcher(){this.fetchPage(this.match.url)}async componentWillLoad(){await this.fetchPage(this.match.url)}async fetchPage(t){if(void 0!==t){const a=await fetch("/api/page?path="+t);this.page=await a.json()}}render(){return Boolean(this.page)?a(s,null,a("h1",null,this.page.meta.data.title),a("div",{innerHTML:this.page.content})):null}static get watchers(){return{match:["matchWatcher"]}}};i.style=":host{display:block}";export{i as app_page}