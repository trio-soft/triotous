(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,$e=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),De=new WeakMap;let Je=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($e&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&De.set(t,e))}return e}toString(){return this.cssText}};const nt=r=>new Je(typeof r=="string"?r:r+"",void 0,_e),m=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new Je(t,r,_e)},lt=(r,e)=>{if($e)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=ne.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Ze=$e?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return nt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ct,defineProperty:pt,getOwnPropertyDescriptor:dt,getOwnPropertyNames:ht,getOwnPropertySymbols:gt,getPrototypeOf:ut}=Object,_=globalThis,Ve=_.trustedTypes,mt=Ve?Ve.emptyScript:"",ve=_.reactiveElementPolyfillSupport,N=(r,e)=>r,le={toAttribute(r,e){switch(e){case Boolean:r=r?mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ae=(r,e)=>!ct(r,e),Be={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:Ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&pt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:a}=dt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const p=i==null?void 0:i.call(this);a==null||a.call(this,o),this.requestUpdate(e,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=ut(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,s=[...ht(t),...gt(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Ze(i))}else e!==void 0&&t.push(Ze(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var a;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:le).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var a,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const p=s.getPropertyOptions(i),c=typeof p.converter=="function"?{fromAttribute:p.converter}:((a=p.converter)==null?void 0:a.fromAttribute)!==void 0?p.converter:le;this._$Em=i;const g=c.fromAttribute(t,p.type);this[i]=g??((o=this._$Ej)==null?void 0:o.get(i))??g,this._$Em=null}}requestUpdate(e,t,s,i=!1,a){var o;if(e!==void 0){const p=this.constructor;if(i===!1&&(a=this[e]),s??(s=p.getPropertyOptions(e)),!((s.hasChanged??Ae)(a,t)||s.useDefault&&s.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(p._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,o]of i){const{wrapped:p}=o,c=this[a];p!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,o,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[N("elementProperties")]=new Map,M[N("finalized")]=new Map,ve==null||ve({ReactiveElement:M}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,Ue=r=>r,ce=W.trustedTypes,Re=ce?ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ke="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Qe="?"+$,ft=`<${Qe}>`,j=document,G=()=>j.createComment(""),k=r=>r===null||typeof r!="object"&&typeof r!="function",Se=Array.isArray,vt=r=>Se(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",be=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,We=/>/g,C=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,ke=/"/g,Xe=/^(?:script|style|textarea|title)$/i,bt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),l=bt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),qe=new WeakMap,P=j.createTreeWalker(j,129);function et(r,e){if(!Se(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Re!==void 0?Re.createHTML(e):e}const xt=(r,e)=>{const t=r.length-1,s=[];let i,a=e===2?"<svg>":e===3?"<math>":"",o=R;for(let p=0;p<t;p++){const c=r[p];let g,v,d=-1,x=0;for(;x<c.length&&(o.lastIndex=x,v=o.exec(c),v!==null);)x=o.lastIndex,o===R?v[1]==="!--"?o=Ne:v[1]!==void 0?o=We:v[2]!==void 0?(Xe.test(v[2])&&(i=RegExp("</"+v[2],"g")),o=C):v[3]!==void 0&&(o=C):o===C?v[0]===">"?(o=i??R,d=-1):v[1]===void 0?d=-2:(d=o.lastIndex-v[2].length,g=v[1],o=v[3]===void 0?C:v[3]==='"'?ke:Ge):o===ke||o===Ge?o=C:o===Ne||o===We?o=R:(o=C,i=void 0);const w=o===C&&r[p+1].startsWith("/>")?" ":"";a+=o===R?c+ft:d>=0?(s.push(g),c.slice(0,d)+Ke+c.slice(d)+$+w):c+$+(d===-2?p:w)}return[et(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class q{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,o=0;const p=e.length-1,c=this.parts,[g,v]=xt(e,t);if(this.el=q.createElement(g,s),P.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=P.nextNode())!==null&&c.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Ke)){const x=v[o++],w=i.getAttribute(d).split($),oe=/([.?@])?(.*)/.exec(x);c.push({type:1,index:a,name:oe[2],strings:w,ctor:oe[1]==="."?wt:oe[1]==="?"?$t:oe[1]==="@"?_t:he}),i.removeAttribute(d)}else d.startsWith($)&&(c.push({type:6,index:a}),i.removeAttribute(d));if(Xe.test(i.tagName)){const d=i.textContent.split($),x=d.length-1;if(x>0){i.textContent=ce?ce.emptyScript:"";for(let w=0;w<x;w++)i.append(d[w],G()),P.nextNode(),c.push({type:2,index:++a});i.append(d[x],G())}}}else if(i.nodeType===8)if(i.data===Qe)c.push({type:2,index:a});else{let d=-1;for(;(d=i.data.indexOf($,d+1))!==-1;)c.push({type:7,index:a}),d+=$.length-1}a++}}static createElement(e,t){const s=j.createElement("template");return s.innerHTML=e,s}}function I(r,e,t=r,s){var o,p;if(e===E)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const a=k(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((p=i==null?void 0:i._$AO)==null||p.call(i,!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=I(r,i._$AS(r,e.values),i,s)),e}class yt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??j).importNode(t,!0);P.currentNode=i;let a=P.nextNode(),o=0,p=0,c=s[0];for(;c!==void 0;){if(o===c.index){let g;c.type===2?g=new se(a,a.nextSibling,this,e):c.type===1?g=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(g=new At(a,this,e)),this._$AV.push(g),c=s[++p]}o!==(c==null?void 0:c.index)&&(a=P.nextNode(),o++)}return P.currentNode=j,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class se{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),k(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=q.createElement(et(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(t);else{const o=new yt(i,this),p=o.u(this.options);o.p(t),this.T(p),this._$AH=o}}_$AC(e){let t=qe.get(e.strings);return t===void 0&&qe.set(e.strings,t=new q(e)),t}k(e){Se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new se(this.O(G()),this.O(G()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=Ue(e).nextSibling;Ue(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class he{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,i){const a=this.strings;let o=!1;if(a===void 0)e=I(this,e,t,0),o=!k(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const p=e;let c,g;for(e=a[0],c=0;c<a.length-1;c++)g=I(this,p[s+c],t,c),g===E&&(g=this._$AH[c]),o||(o=!k(g)||g!==this._$AH[c]),g===u?e=u:e!==u&&(e+=(g??"")+a[c+1]),this._$AH[c]=g}o&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wt extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class $t extends he{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class _t extends he{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??u)===E)return;const s=this._$AH,i=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class At{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const xe=W.litHtmlPolyfillSupport;xe==null||xe(q,se),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.3.2");const St=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new se(e.insertBefore(G(),a),a,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis;let h=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}};var Ye;h._$litElement$=!0,h.finalized=!0,(Ye=O.litElementHydrateSupport)==null||Ye.call(O,{LitElement:h});const ye=O.litElementPolyfillSupport;ye==null||ye({LitElement:h});(O.litElementVersions??(O.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ae},Ct=(r=Tt,e,t)=>{const{kind:s,metadata:i}=t;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(p){const c=e.get.call(this);e.set.call(this,p),this.requestUpdate(o,c,r,!0,p)},init(p){return p!==void 0&&this.C(o,void 0,r,p),p}}}if(s==="setter"){const{name:o}=t;return function(p){const c=this[o];e.call(this,p),this.requestUpdate(o,c,r,!0,p)}}throw Error("Unsupported decorator location: "+s)};function n(r){return(e,t)=>typeof t=="object"?Ct(r,e,t):((s,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(i,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(r){return n({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ot(r,e){return(t,s,i)=>{const a=o=>{var p;return((p=o.renderRoot)==null?void 0:p.querySelector(r))??null};return Pt(t,s,{get(){return a(this)}})}}const jt={brand:"Trio-Soft",nav:[{label:"Services",href:"#/services"},{label:"Our Work",href:"#/cases"},{label:"About Us",href:"#/about"},{label:"Contact",href:"#/contact"},{label:"Careers",href:"#/careers"}],getStarted:"Get Started",footer:{privacyPolicy:"Privacy Policy",termsOfService:"Terms of Service",copyright:"© 2025 Trio-Soft. All rights reserved."},privacy:{pageTitle:"Privacy Policy",content:`
      <h3>1. Introduction</h3>
      <p>Trio-Soft ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
      <h3>2. Information We Collect</h3>
      <p>We may collect personal information that you provide to us, such as your name, email address, and any other information you choose to provide when you contact us.</p>
      <h3>3. How We Use Your Information</h3>
      <p>We use the information we collect to respond to your inquiries, provide our services, and improve our website.</p>
      <h3>4. Information Sharing</h3>
      <p>We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website or providing our services.</p>
      <h3>5. Security</h3>
      <p>We take reasonable measures to protect your information from unauthorized access or disclosure.</p>
      <h3>6. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <h3>7. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at contact@trio-soft.biz.</p>
    `},terms:{pageTitle:"Terms of Service",content:`
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website, you agree to be bound by these Terms of Service.</p>
      <h3>2. Use of the Website</h3>
      <p>You agree to use the website only for lawful purposes and in accordance with these Terms.</p>
      <h3>3. Intellectual Property</h3>
      <p>All content on this website, including text, graphics, and logos, is the property of Trio-Soft and is protected by intellectual property laws.</p>
      <h3>4. Limitation of Liability</h3>
      <p>Trio-Soft shall not be liable for any damages arising from the use of or inability to use our website.</p>
      <h3>5. Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of Japan.</p>
      <h3>6. Changes to Terms</h3>
      <p>We reserve the right to modify these Terms at any time. Your continued use of the website after any changes constitutes acceptance of the new Terms.</p>
      <h3>7. Contact Us</h3>
      <p>If you have any questions about these Terms, please contact us at contact@trio-soft.biz.</p>
    `},home:{heroTitle:"Trio-Soft: Architecting Your Digital Future",heroSubtitle:"We specialize in system architecture consulting, software and app design, and AI solutions, helping businesses thrive in the digital age.",heroButton:"Explore Our Services",expertiseTitle:"Our Expertise",expertiseSubtitle:"Comprehensive Solutions for Your Business Needs",expertiseDescription:"From initial concept to deployment and beyond, Trio-Soft offers a full suite of services to ensure your success.",services:[{icon:"gear",title:"System Architecture Consulting",description:"Crafting robust, scalable, and efficient system architectures tailored to your business objectives."},{icon:"app-window",title:"Software and App Design",description:"Designing intuitive and engaging software and applications that enhance user experience and drive growth."},{icon:"robot",title:"AI Solutions",description:"Leveraging the power of AI to create intelligent solutions that automate processes and unlock new opportunities."}],casesTitle:"Case Studies",cases:[{image:"/case-ecommerce.jpg",title:"E-commerce Platform for Retailer",description:"Developed a scalable e-commerce platform for a leading retailer, resulting in a 30% increase in online sales."},{image:"/case-fitness.jpg",title:"Mobile App for Fitness Tracking",description:"Designed and built a user-friendly mobile app for fitness tracking, achieving a 4.8-star rating on app stores."},{image:"/case-analytics.jpg",title:"AI-Powered Analytics Dashboard",description:"Created an AI-powered analytics dashboard for a financial institution, providing actionable insights and improving decision-making."}],newsTitle:"Latest News",news:[{category:"Tech Insights",title:"The Future of AI in Business",description:"Explore the latest trends and applications of artificial intelligence in various industries.",image:"/news-ai.jpg"},{category:"Design Trends",title:"User-Centric Design Principles",description:"Learn about the key principles of user-centric design and how they can improve your product's success.",image:"/news-design.jpg"}],ctaTitle:"Ready to Transform Your Business?",ctaButton:"Get in Touch"},services:{pageTitle:"Our Services",pageSubtitle:"Trio-Soft offers a comprehensive suite of services designed to empower your business through innovative technology solutions. From strategic consulting to cutting-edge AI applications, we're here to help you achieve your goals.",sections:[{title:"Consulting & Strategy",cards:[{icon:"presentation-chart",title:"Information Systems Consulting",description:"Expert guidance on optimizing your information systems for peak performance."},{icon:"gear",title:"Computer Software Solutions",description:"Comprehensive software solutions from planning to maintenance."},{icon:"cloud",title:"Cloud Services Strategy",description:"Strategic planning and operation of cloud services tailored to your needs."},{icon:"lightbulb",title:"Business Efficiency Enhancement",description:"Streamlining business processes with system development and support."}]},{title:"Development & Implementation",cards:[{icon:"globe",title:"Web & Application Development",description:"Creating and managing websites and web applications that drive results."},{icon:"app-window",title:"IT Infrastructure Management",description:"Design, construction, and support for robust IT infrastructure."},{icon:"device-mobile",title:"Mobile Application Solutions",description:"Innovative mobile applications from concept to distribution."},{icon:"code",title:"Programming Education & Training",description:"Training and courses to develop IT talent and programming skills."}]},{title:"AI & Emerging Technologies",cards:[{icon:"video",title:"Online Learning Content",description:"Engaging online learning content for continuous professional development."},{icon:"robot",title:"AI & Machine Learning Services",description:"Harnessing the power of AI and machine learning for innovative solutions."},{icon:"chart-line",title:"AI-Driven Data Analysis",description:"Data analysis and business automation through advanced AI techniques."},{icon:"headset",title:"Technical Application Systems",description:"Developing AI chatbots, image recognition, and natural language processing systems."}]},{title:"Operations & Support",cards:[{icon:"users",title:"Self-Media Management",description:"Planning and managing self-media platforms like YouTube and blogs."},{icon:"briefcase",title:"IT Task Outsourcing",description:"Outsourcing IT-related tasks for efficiency and cost-effectiveness."},{icon:"list-checks",title:"Business Process Optimization",description:"Improving business processes through design, optimization, and outsourcing support."},{icon:"gear",title:"Comprehensive Support",description:"Complete operational support for all our services and related activities."}]}],ctaTitle:"Ready to Transform Your Business?",ctaSubtitle:"Contact us today to discuss how Trio-Soft's services can help you achieve your business objectives.",ctaButton:"Get in Touch"},cases:{pageTitle:"Our Work",items:[{client:"JVR Music",title:"Enhancing Digital Presence for a Music Label",description:"We revamped the digital presence for JVR Music, a prominent music label, by developing a modern, user-friendly website. The project involved integrating social media capabilities, enhancing content delivery, and optimizing for mobile devices. Technologies used included React, Node.js, and a headless CMS. The result was a 50% increase in website traffic.",image:"/cases/case_jvr.png"},{client:"Simmons Taiwan",title:"Optimizing E-commerce for a Brand",description:"For Simmons Taiwan, we optimized their e-commerce platform to improve user experience and sales efficiency. The project scope included a complete redesign of the website, implementation of advanced search and filtering, and integration with a new payment gateway. We utilized technologies such as Vue.js, .NET Core, and SQLServer. The enhancements led to a 20% improvement in conversion rates and a 10% increase in average order value.",image:"/cases/case_simmons.png"},{client:"VDS",title:"Developing a Scalable Platform for a Retail Startup",description:"We partnered with VDS, a retail startup, to develop a scalable and robust platform for their innovative product. The project focused on building a microservices architecture, implementing real-time data processing, and ensuring high availability. Technologies employed were Go, Kubernetes, and Kafka. The platform successfully supported a 10x increase in user base within the first year of launch.",image:"/cases/case_vds.png"}],viewAll:"Get in Touch",contactUs:"Get in Touch"},about:{pageTitle:"About Trio-Soft",intro:"At Trio-Soft, we are a dynamic startup dedicated to revolutionizing the tech landscape through innovative system architecture consulting, bespoke software and app design, and cutting-edge AI technology. Our mission is to empower businesses with solutions that not only meet their current needs but also anticipate future challenges, ensuring sustainable growth and competitive advantage.",storyTitle:"Our Story",story:"Founded in 2025 by a team of seasoned tech experts, Trio-Soft emerged from a shared vision to bridge the gap between complex technological possibilities and practical business applications. We recognized the need for a more agile, client-focused approach to tech consulting and development, leading us to create a company that prioritizes innovation, collaboration, and tangible results.",teamTitle:"Our Team",team:[{name:"Bruce Tsai",role:"CEO & Founder"},{name:"Kirisumi",role:"AI Digital Assistant",isAI:!0},{name:"Tsukino",role:"AI Digital Assistant",isAI:!0}],teamDescription:"Our team comprises industry veterans and rising stars, each bringing a unique set of skills and experiences to the table. From strategic consulting to hands-on development, our experts are committed to delivering excellence and driving client success.",valuesTitle:"Our Values",values:[{icon:"lightbulb",title:"Innovation",description:"We embrace creativity and constantly seek new ways to solve problems and push the boundaries of technology."},{icon:"users",title:"Collaboration",description:"We believe in the power of teamwork and work closely with our clients to achieve shared goals."},{icon:"rocket",title:"Excellence",description:"We are dedicated to delivering high-quality solutions that exceed expectations and drive meaningful impact."}],ctaTitle:"Ready to transform your business with cutting-edge technology?",ctaSubtitle:"Reach out to us today to discuss your project and explore how Trio-Soft can help you achieve your goals.",ctaButton:"Get in Touch"},contact:{pageTitle:"Contact Us",pageSubtitle:"We're here to help. Reach out to us for any inquiries or support.",namePlaceholder:"Your Name",emailPlaceholder:"Your Email",subjectPlaceholder:"Subject",messagePlaceholder:"Your Message",nameLabel:"Name",emailLabel:"Email",subjectLabel:"Subject",messageLabel:"Message",submit:"Submit"},careers:{pageTitle:"Careers at Trio-Soft",introTitle:"Join Our Team",intro:"At Trio-Soft, we believe great technology is built by great people. We are looking for passionate individuals who want to make a real impact through technology. If you thrive in a transparent, flat, and innovative environment, we want to hear from you.",valuesTitle:"Our Values",values:[{icon:"users",title:"Transparent Communication",description:"We prioritize openness and dialogue above all else. Small concerns are shared early, and everyone can discuss ideas on equal footing—regardless of role or seniority. Open communication builds trust and leads to better products."},{icon:"users",title:"Equality & Psychological Safety",description:"We evaluate ideas by their merit, not by who said them. Regardless of age, nationality, or background, every member has an equal voice. Mutual respect for diverse expertise creates a psychologically safe team."},{icon:"rocket",title:"End-to-End Ownership",description:"We don't just complete tasks—we take responsibility for business outcomes. From technology selection and design through post-launch operations and improvements, we maintain consistent ownership. This integrity earns deep client trust."},{icon:"lightbulb",title:"Creative Innovation",description:'We welcome unconventional approaches and actively adopt cutting-edge AI and architecture. We embrace failure as part of exploration and constantly ask "Is there a better way?" This mindset is the source of our innovation.'},{icon:"gear",title:"Flexible & Autonomous Work",description:"We promote flexible working styles to maximize results. Rather than fixed hours or mandatory office attendance, team members choose when and where they work based on their lifestyle and focus needs. Remote-first with asynchronous communication."},{icon:"globe",title:"Cross-Boundary Collaboration",description:"We don't stay confined to our job titles. Engineers think about business models; designers care about system architecture. By crossing professional boundaries, we raise collective perspective and solve problems from multiple angles."}],cultureTitle:"Culture & Benefits",cultureItems:["Fully remote work environment","Full-flex system (Core time: 11:00 - 15:00)","Flat organizational structure","Opportunity to work with cutting-edge AI and cloud technologies","Multilingual, international team (Japanese & English)","Continuous learning and professional development support"],applyTitle:"Interested in Joining Us?",applySubtitle:"We'd love to hear from you. Send us your resume and tell us about yourself.",applyButton:"Get in Touch"},language:{title:"Select Language / 言語を選択",subtitle:"Choose your preferred language / お好みの言語を選択してください",en:{name:"English",desc:"English version",flag:"🇺🇸",href:"#/"},jp:{name:"日本語",desc:"日本語版",flag:"🇯🇵",href:"#/jp/"}}},Et={brand:"トリオソフト",nav:[{label:"サービス",href:"#/jp/services"},{label:"導入事例",href:"#/jp/cases"},{label:"会社概要",href:"#/jp/about"},{label:"お問い合わせ",href:"#/jp/contact"},{label:"採用情報",href:"#/jp/careers"}],getStarted:"Get Started",footer:{privacyPolicy:"プライバシーポリシー",termsOfService:"利用規約",copyright:"© 2025 Trio-Soft. All rights reserved."},privacy:{pageTitle:"プライバシーポリシー",content:`
      <h3>1. はじめに</h3>
      <p>トリオソフト（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当社のウェブサイトをご利用になる際の情報収集、使用、および保護について説明するものです。</p>
      <h3>2. 収集する情報</h3>
      <p>当社は、お客様がお問い合わせフォームなどを通じて自発的に提供された、お名前、メールアドレス、およびその他の情報を収集することがあります。</p>
      <h3>3. 情報の使用目的</h3>
      <p>収集した情報は、お客様からのお問い合わせへの回答、サービスの提供、およびウェブサイトの改善のために使用されます。</p>
      <h3>4. 情報の共有</h3>
      <p>当社は、お客様の個人情報を第三者に販売または貸与することはありません。ウェブサイトの運営やサービスの提供を支援するサービスプロバイダーと情報を共有する場合があります。</p>
      <h3>5. セキュリティ</h3>
      <p>当社は、不正アクセスや情報の漏えいから個人情報を保護するために、合理的な措置を講じています。</p>
      <h3>6. 本ポリシーの変更</h3>
      <p>当社は、本プライバシーポリシーを随時更新することがあります。変更があった場合は、本ページに掲載することでお知らせいたします。</p>
      <h3>7. お問い合わせ</h3>
      <p>本プライバシーポリシーに関するご質問は、contact@trio-soft.biz までお問い合わせください。</p>
    `},terms:{pageTitle:"利用規約",content:`
      <h3>1. 規約への同意</h3>
      <p>当社のウェブサイトにアクセスし、これを利用することで、お客様は本利用規約に同意したものとみなされます。</p>
      <h3>2. ウェブサイトの利用</h3>
      <p>お客様は、合法的な目的のためにのみ、かつ本規約に従って本ウェブサイトを利用することに同意するものとします。</p>
      <h3>3. 知的財産権</h3>
      <p>本ウェブサイト上のテキスト、グラフィック、ロゴを含むすべてのコンテンツは、トリオソフトの財産であり、知的財産権法によって保護されています。</p>
      <h3>4. 免責事項</h3>
      <p>トリオソフトは、本ウェブサイトの利用または利用不能から生じるいかなる損害についても責任を負いません。</p>
      <h3>5. 準拠法</h3>
      <p>本利用規約は、日本法に準拠し、同法に従って解釈されるものとします。</p>
      <h3>6. 規約の変更</h3>
      <p>当社は、いつでも本規約を変更する権利を留保します。変更後のウェブサイトの継続的な利用は、新しい規約への同意とみなされます。</p>
      <h3>7. お問い合わせ</h3>
      <p>本利用規約に関するご質問は、contact@trio-soft.biz までお問い合わせください。</p>
    `},home:{heroTitle:"トリオソフト：あなたのデジタル未来を設計します",heroSubtitle:"システムアーキテクチャコンサルティング、ソフトウェア・アプリ設計、AIソリューションを専門とし、デジタル時代のビジネス成長を支援します。",heroButton:"サービスを見る",expertiseTitle:"私たちの専門分野",expertiseSubtitle:"ビジネスニーズに応える包括的なソリューション",expertiseDescription:"アイデア立案から導入・運用まで、トリオソフトは成功のためのフルサービスを提供します。",services:[{icon:"gear",title:"システムアーキテクチャコンサルティング",description:"ビジネス目標に合わせて堅牢でスケーラブル、かつ効率的なシステムアーキテクチャを構築します。"},{icon:"app-window",title:"ソフトウェア・アプリ設計",description:"直感的で魅力的なソフトウェアやアプリケーションを設計し、ユーザー体験を向上させ成長を促進します。"},{icon:"robot",title:"AIソリューション",description:"AIの力を活用し、業務プロセスを自動化し新たなビジネスチャンスを創出します。"}],casesTitle:"事例紹介",cases:[{image:"/case-ecommerce.jpg",title:"小売業者向けECプラットフォーム",description:"大手小売業者向けにスケーラブルなECプラットフォームを開発し、オンライン売上が30%増加しました。"},{image:"/case-fitness.jpg",title:"フィットネストラッキングアプリ",description:"使いやすいフィットネストラッキングアプリを設計・開発し、アプリストアで4.8の高評価を獲得しました。"},{image:"/case-analytics.jpg",title:"AI搭載分析ダッシュボード",description:"金融機関向けにAI搭載の分析ダッシュボードを開発し、実用的なインサイトと意思決定の質向上を実現しました。"}],newsTitle:"最新情報",news:[{category:"テックインサイト",title:"ビジネスにおけるAIの未来",description:"さまざまな業界でのAIの最新動向と応用事例をご紹介します。",image:"/news-ai.jpg"},{category:"デザイントレンド",title:"ユーザー中心設計の原則",description:"ユーザー中心設計の重要な原則と、それが製品の成功にどう役立つかを解説します。",image:"/news-design.jpg"}],ctaTitle:"ビジネス変革の準備はできていますか？",ctaButton:"お問い合わせ"},services:{pageTitle:"サービス一覧",pageSubtitle:"トリオソフトは、革新的なテクノロジーソリューションを通じてビジネスを支援する包括的なサービスを提供しています。戦略的なコンサルティングから最先端のAIアプリケーションまで、お客様の目標達成をサポートします。",sections:[{title:"コンサルティング＆戦略",cards:[{icon:"presentation-chart",title:"情報システムコンサルティング",description:"情報システムの最適化に関する専門的なガイダンスを提供します。"},{icon:"gear",title:"コンピュータソフトウェアソリューション",description:"計画から保守まで包括的なソフトウェアソリューションを提供します。"},{icon:"cloud",title:"クラウドサービス戦略",description:"お客様のニーズに合わせたクラウドサービスの戦略的な計画と運用を行います。"},{icon:"lightbulb",title:"ビジネス効率化",description:"システム開発とサポートでビジネスプロセスを効率化します。"}]},{title:"開発＆実装",cards:[{icon:"globe",title:"ウェブ・アプリ開発",description:"成果を生み出すウェブサイトとウェブアプリケーションの作成・管理を行います。"},{icon:"app-window",title:"ITインフラ管理",description:"堅牢なITインフラの設計・構築・サポートを提供します。"},{icon:"device-mobile",title:"モバイルアプリケーションソリューション",description:"コンセプトから配信まで革新的なモバイルアプリケーションを開発します。"},{icon:"code",title:"プログラミング教育・研修",description:"ITの人材育成とプログラミングスキル向上のためのトレーニングとコースを提供します。"}]},{title:"AI＆先端技術",cards:[{icon:"video",title:"オンライン学習コンテンツ",description:"継続的な専門能力開発のための魅力的なオンライン学習コンテンツを提供します。"},{icon:"robot",title:"AI・機械学習サービス",description:"AIと機械学習の力を活用した革新的なソリューションを提供します。"},{icon:"chart-line",title:"AIデータ分析",description:"高度なAI技術によるデータ分析とビジネス自動化を実現します。"},{icon:"headset",title:"技術応用システム",description:"AIチャットボット、画像認識、自然言語処理システムを開発します。"}]},{title:"運用＆サポート",cards:[{icon:"users",title:"セルフメディア管理",description:"YouTubeやブログなどのセルフメディアプラットフォームの企画・管理を行います。"},{icon:"briefcase",title:"ITタスクアウトソーシング",description:"効率性とコスト効果のためのITタスクのアウトソーシングを行います。"},{icon:"list-checks",title:"ビジネスプロセス最適化",description:"設計、最適化、アウトソーシングサポートを通じてビジネスプロセスを改善します。"},{icon:"gear",title:"包括的サポート",description:"すべてのサービスと関連活動に対する完全な運用サポートを提供します。"}]}],ctaTitle:"ビジネス変革の準備はできていますか？",ctaSubtitle:"トリオソフトのサービスがお客様のビジネス目標達成にどのように貢献できるか、今すぐお問い合わせください。",ctaButton:"お問い合わせ"},cases:{pageTitle:"導入事例",items:[{client:"JVR Music",title:"音楽レーベルのデジタルプレゼンス強化",description:"著名な音楽レーベルJVR Musicのデジタルプレゼンスを刷新し、モダンで使いやすいウェブサイトを開発しました。ソーシャルメディア機能の統合、コンテンツ配信の強化、モバイルデバイスへの最適化を実施しました。使用技術はReact、Node.js、ヘッドレスCMS。ウェブサイトのトラフィックが50%増加しました。",image:"/cases/case_jvr.png"},{client:"Simmons Taiwan",title:"ブランドのEコマース最適化",description:"Simmons Taiwanのeコマースプラットフォームを最適化し、ユーザー体験と販売効率を改善しました。ウェブサイトの完全リデザイン、高度な検索・フィルタリング機能の実装、新しい決済ゲートウェイとの統合を実施しました。使用技術はVue.js、.NET Core、SQLServer。コンバージョン率が20%改善し、平均注文額が10%増加しました。",image:"/cases/case_simmons.png"},{client:"VDS",title:"小売スタートアップ向けスケーラブルプラットフォーム開発",description:"小売スタートアップのVDSと提携し、革新的な製品向けのスケーラブルで堅牢なプラットフォームを開発しました。マイクロサービスアーキテクチャの構築、リアルタイムデータ処理の実装、高可用性の確保に注力しました。使用技術はGo、Kubernetes、Kafka。ローンチ初年度でユーザーベースが10倍に成長しました。",image:"/cases/case_vds.png"}],viewAll:"お問い合わせ",contactUs:"お問い合わせ"},about:{pageTitle:"トリオソフトについて",intro:"トリオソフトは、革新的なシステムアーキテクチャコンサルティング、オーダーメイドのソフトウェア・アプリ設計、最先端のAI技術を通じてテック業界に革命を起こす、ダイナミックなスタートアップです。現在のニーズを満たすだけでなく、将来の課題も見据えたソリューションでビジネスを支援し、持続的な成長と競争優位性を確保することが私たちのミッションです。",storyTitle:"私たちのストーリー",story:"2025年に経験豊富なテックエキスパートのチームによって設立されたトリオソフトは、複雑な技術的可能性と実践的なビジネスアプリケーションの架け橋となる共通ビジョンから生まれました。テックコンサルティングと開発においてより機敏でクライアント中心のアプローチの必要性を認識し、イノベーション、コラボレーション、具体的な成果を優先する会社を設立しました。",teamTitle:"チーム",team:[{name:"ブルース・ツァイ",role:"CEO & 創業者"},{name:"霧棲",role:"AIデジタルアシスタント",isAI:!0},{name:"月乃",role:"AIデジタルアシスタント",isAI:!0}],teamDescription:"私たちのチームは業界のベテランと新進気鋭の人材で構成されており、それぞれがユニークなスキルと経験を持ち寄っています。戦略的コンサルティングから実践的な開発まで、専門家たちは卓越した成果を提供し、クライアントの成功を推進することにコミットしています。",valuesTitle:"私たちの価値観",values:[{icon:"lightbulb",title:"イノベーション",description:"私たちは創造性を重んじ、問題解決の新しい方法を常に探求し、テクノロジーの限界を押し広げます。"},{icon:"users",title:"コラボレーション",description:"私たちはチームワークの力を信じ、共有の目標を達成するためにクライアントと緊密に連携します。"},{icon:"rocket",title:"エクセレンス",description:"私たちは期待を超え、意義ある影響をもたらす高品質なソリューションの提供に専念しています。"}],ctaTitle:"最先端技術でビジネスを変革する準備はできていますか？",ctaSubtitle:"プロジェクトについて話し合い、トリオソフトがどのようにお客様の目標達成に貢献できるかを探るために、今すぐお問い合わせください。",ctaButton:"お問い合わせ"},contact:{pageTitle:"お問い合わせ",pageSubtitle:"ご質問やサポートについて、お気軽にお問い合わせください。",namePlaceholder:"お名前",emailPlaceholder:"メールアドレス",subjectPlaceholder:"件名",messagePlaceholder:"メッセージ",nameLabel:"お名前",emailLabel:"メールアドレス",subjectLabel:"件名",messageLabel:"メッセージ",submit:"送信"},careers:{pageTitle:"トリオソフト 採用情報",introTitle:"仲間を募集しています",intro:"トリオソフトでは、テクノロジーを通じて本当のインパクトを生み出したいという情熱を持った仲間を探しています。透明性が高く、フラットで、イノベーションを重視する環境で力を発揮したい方、ぜひご連絡ください。",valuesTitle:"私たちの価値観",values:[{icon:"users",title:"透明なコミュニケーション",description:"私たちは、情報の透明性と対話を何よりも大切にしています。小さな違和感や懸念も早めに共有し、立場に関係なくフラットに議論できる環境を整えています。オープンなコミュニケーションこそが、チームの信頼関係を築き、より良いプロダクトを生み出す最短距離です。"},{icon:"users",title:"平等と心理的安全性",description:"年齢・国籍・経歴に関わらず、すべてのメンバーが平等に発言し、活躍できる組織を目指しています。重視するのは「誰が言ったか」ではなく「何を言ったか」です。多様なバックグラウンドを持つメンバーが互いの専門性を尊重し、心理的安全性の高いチームを構築しています。"},{icon:"rocket",title:"エンドツーエンドのオーナーシップ",description:"単に依頼されたタスクをこなすだけではなく、その先にある「ビジネスの成功」に責任を持ちます。技術選定や設計の段階から、リリース後の運用・改善まで、一貫してオーナーシップを持って取り組みます。"},{icon:"lightbulb",title:"創造的イノベーション",description:"既存の枠組みに囚われない創造的なアプローチを歓迎します。最新のAI技術やアーキテクチャを積極的に取り入れ、失敗を恐れずに新しい技術に挑戦し、常に「もっと良い方法はないか」と問い続けます。"},{icon:"gear",title:"柔軟で自律的な働き方",description:"成果を最大化するために、柔軟な働き方を推奨しています。個々のライフスタイルや集中できる環境に合わせて、自律的に働く場所や時間を選択できます。リモートワークを基盤とし、非同期コミュニケーションで高い生産性を維持しています。"},{icon:"globe",title:"越境するコラボレーション",description:"自分の専門領域だけに閉じこもることはしません。エンジニアがビジネスモデルを考え、デザイナーがシステム構造に関心を持つような「越境」を推奨しています。職種の境界を越えることで、より多角的な視点から本質的な課題解決が可能になります。"}],cultureTitle:"文化と福利厚生",cultureItems:["フルリモートワーク環境","フルフレックス制度（コアタイム 11:00-15:00）","フラットな組織構造","最先端のAI・クラウド技術に携わる機会","多言語・国際的なチーム（日本語・英語）","継続的な学習と専門能力開発のサポート"],applyTitle:"一緒に働きませんか？",applySubtitle:"ご興味のある方は、ぜひお気軽にお問い合わせください。履歴書と自己紹介をお送りください。",applyButton:"お問い合わせ"},language:{title:"Select Language / 言語を選択",subtitle:"Choose your preferred language / お好みの言語を選択してください",en:{name:"English",desc:"English version",flag:"🇺🇸",href:"#/"},jp:{name:"日本語",desc:"日本語版",flag:"🇯🇵",href:"#/jp/"}}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={CHILD:2},zt=r=>(...e)=>({_$litDirective$:r,values:e});class Mt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class we extends Mt{constructor(e){if(super(e),this.it=u,e.type!==Ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this._t=void 0,this.it=e;if(e===E)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}we.directiveName="unsafeHTML",we.resultType=1;const b=zt(we),It=`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
    fill="currentColor"></path>
</svg>`,Lt=`<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
</svg>`,tt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
</svg>`,Dt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,84A12,12,0,1,1,68,72,12,12,0,0,1,80,84Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84Z"></path>
</svg>`,it=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
</svg>`,Zt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
</svg>`,Vt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"></path>
</svg>`,Te=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
</svg>`,st=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
</svg>`,Bt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path>
</svg>`,Ut=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
</svg>`,Rt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
</svg>`,Nt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
</svg>`,Wt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
</svg>`,ge=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
</svg>`,Gt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
</svg>`,kt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path>
</svg>`,rt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
</svg>`,Ce=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path>
</svg>`;var qt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,ue=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ft(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&qt(e,t,i),i};let L=class extends h{constructor(){super(...arguments),this.lang="en",this.data={brand:"Trio-Soft",nav:[],getStarted:"Get Started"},this._menuOpen=!1}_toggleMenu(){this._menuOpen=!this._menuOpen}_closeMenu(){this._menuOpen=!1}render(){const r="#/language",e=this.lang==="jp"?"#/jp/":"#/";return l`
      <header class="header">
        <div class="header-brand">
          <div class="header-logo">${b(It)}</div>
          <a class="header-brand-name" href="${e}">${this.data.brand}</a>
        </div>
        <div class="header-right">
          <nav class="header-nav">
            ${this.data.nav.map(t=>l`<a class="header-nav-link" href="${t.href}">${t.label}</a>`)}
          </nav>
          <div class="header-actions">
            <a class="header-lang-btn" href="${r}" title="Change language">${b(Lt)}</a>
          </div>
          <button class="hamburger" @click=${this._toggleMenu} aria-label="Toggle menu">☰</button>
        </div>
        <nav class="mobile-nav" ?hidden=${!this._menuOpen}>
          ${this.data.nav.map(t=>l`<a class="mobile-nav-link" href="${t.href}" @click=${this._closeMenu}>${t.label}</a>`)}
        </nav>
      </header>
    `}};L.styles=m`
    :host { display: block; }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      border-bottom: 1px solid #e7edf3;
      padding: 12px 16px;
      gap: 1rem;
      background: #f8fafc;
      position: relative;
    }
    .header-brand { display: flex; align-items: center; gap: 16px; color: #0e141b; }
    .header-logo { width: 16px; height: 16px; }
    .header-brand-name {
      font-size: 18px; font-weight: 700; color: #111518; text-decoration: none; letter-spacing: -0.015em;
    }
    .header-right { display: flex; flex: 1; justify-content: flex-end; gap: 32px; align-items: center; }
    .header-nav { display: flex; align-items: center; gap: 36px; }
    .header-nav-link { color: #0e141b; font-size: 14px; font-weight: 500; text-decoration: none; }
    .header-actions { display: flex; gap: 8px; }
    .header-cta-btn {
      display: flex; min-width: 84px; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; padding: 0 16px; background: #1572cf; color: #f8fafc; font-size: 14px; font-weight: 700;
      letter-spacing: 0.015em; border: none; text-decoration: none;
    }
    .header-lang-btn {
      display: flex; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; min-width: 40px; padding: 0 10px; background: #e7edf3; color: #0e141b; text-decoration: none; border: none;
    }
    .hamburger {
      display: none;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 24px;
      color: #0e141b;
      padding: 4px 8px;
      line-height: 1;
    }
    .mobile-nav {
      display: none;
    }

    @media (max-width: 768px) {
      .header-nav { display: none; }
      .hamburger { display: flex; align-items: center; }
      .mobile-nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #f8fafc;
        border-bottom: 1px solid #e7edf3;
        padding: 8px 0;
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      .mobile-nav[hidden] { display: none; }
      .mobile-nav-link {
        color: #0e141b;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 12px 24px;
        border-bottom: 1px solid #e7edf3;
      }
      .mobile-nav-link:last-child { border-bottom: none; }
      .mobile-nav-link:hover { background: #eef2f6; }
    }

    @media (max-width: 900px) and (min-width: 769px) {
      .header { padding: 12px 16px; }
      .header-nav { gap: 16px; }
    }
  `;ue([n({type:String})],L.prototype,"lang",2);ue([n({type:Object})],L.prototype,"data",2);ue([re()],L.prototype,"_menuOpen",2);L=ue([f("trio-header")],L);var Yt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Pe=(r,e,t,s)=>{for(var i=s>1?void 0:s?Jt(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Yt(e,t,i),i};let F=class extends h{constructor(){super(...arguments),this.lang="en",this.data={privacyPolicy:"Privacy Policy",termsOfService:"Terms of Service",copyright:"© 2025 Trio-Soft. All rights reserved."}}render(){const r=this.lang==="jp"?"#/jp/privacy":"#/privacy",e=this.lang==="jp"?"#/jp/terms":"#/terms";return l`
      <div class="footer-outer">
        <div class="footer-inner">
          <div class="footer-content">
            <div class="footer-links">
              <a class="footer-link" href="${r}">${this.data.privacyPolicy}</a>
              <a class="footer-link" href="${e}">${this.data.termsOfService}</a>
            </div>
            <p class="footer-copyright">${this.data.copyright}</p>
          </div>
        </div>
      </div>
    `}};F.styles=m`
    :host {
      display: block;
    }
    .footer-outer {
      display: flex;
      justify-content: center;
    }
    .footer-inner {
      display: flex;
      max-width: 960px;
      flex: 1;
      flex-direction: column;
    }
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 40px 20px;
      text-align: center;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
    .footer-link {
      color: #4d7399;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      min-width: 160px;
    }
    .footer-link:hover {
      color: #1572cf;
    }
    .footer-copyright {
      color: #4d7399;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
  `;Pe([n({type:String})],F.prototype,"lang",2);Pe([n({type:Object})],F.prototype,"data",2);F=Pe([f("trio-footer")],F);var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,V=(r,e,t,s)=>{for(var i=s>1?void 0:s?Qt(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Kt(e,t,i),i};let A=class extends h{constructor(){super(...arguments),this.title="",this.subtitle="",this.buttonText="",this.buttonHref="",this.backgroundImage="/hero-en.jpg"}render(){return l`
      <div class="hero-container">
        <div class="hero-banner">
          <img class="hero-image" src="${this.backgroundImage}" alt="" />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">${this.title}</h1>
              <p class="hero-subtitle">${this.subtitle}</p>
            </div>
            <a class="hero-btn" href="${this.buttonHref}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `}};A.styles=m`
    :host { display: block; }
    .hero-container { padding: 16px; }
    .hero-banner {
      position: relative;
      display: flex;
      min-height: 480px;
      flex-direction: column;
      gap: 24px;
      border-radius: 12px;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 40px;
      overflow: hidden;
    }
    .hero-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
    }
    .hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
    .hero-text { display: flex; flex-direction: column; gap: 8px; }
    .hero-title {
      color: white; font-size: clamp(36px, 5vw, 48px); font-weight: 900;
      line-height: 1.2; letter-spacing: -0.033em; margin: 0;
    }
    .hero-subtitle { color: white; font-size: 16px; line-height: 1.5; margin: 0; max-width: 720px; }
    .hero-btn {
      display: inline-flex; min-width: 84px; align-items: center; justify-content: center;
      border-radius: 9999px; height: 48px; padding: 0 20px; background: #1572cf; color: #f8fafc;
      font-size: 16px; font-weight: 700; letter-spacing: 0.015em; text-decoration: none;
    }
    @media (max-width: 768px) {
      .hero-banner { min-height: 320px; padding: 24px 16px; }
      .hero-title { font-size: 28px; }
      .hero-subtitle { font-size: 14px; }
    }
  `;V([n({type:String})],A.prototype,"title",2);V([n({type:String})],A.prototype,"subtitle",2);V([n({type:String})],A.prototype,"buttonText",2);V([n({type:String})],A.prototype,"buttonHref",2);V([n({type:String})],A.prototype,"backgroundImage",2);A=V([f("trio-hero")],A);var Xt=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,me=(r,e,t,s)=>{for(var i=s>1?void 0:s?ei(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Xt(e,t,i),i};const Fe={gear:tt,"app-window":Dt,robot:it,"presentation-chart":Zt,cloud:Vt,lightbulb:Te,globe:st,"device-mobile":Bt,code:Ut,video:Rt,"chart-line":Nt,headset:Wt,users:ge,briefcase:Gt,"list-checks":kt,user:rt,rocket:Ce};function ti(r){return Fe[r]||Fe.gear}let D=class extends h{constructor(){super(...arguments),this.icon="gear",this.title="",this.description=""}render(){return l`
      <div class="service-card">
        <div class="service-card-icon">${b(ti(this.icon))}</div>
        <div class="service-card-body">
          <h2 class="service-card-title">${this.title}</h2>
          <p class="service-card-description">${this.description}</p>
        </div>
      </div>
    `}};D.styles=m`
    :host {
      display: flex;
      flex: 1;
    }
    .service-card {
      display: flex;
      flex: 1;
      gap: 12px;
      border-radius: 8px;
      border: 1px solid #d0dbe7;
      background: #f8fafc;
      padding: 16px;
      flex-direction: column;
    }
    .service-card-icon {
      color: #0e141b;
      width: 24px;
      height: 24px;
    }
    .service-card-icon svg {
      width: 24px;
      height: 24px;
    }
    .service-card-body {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .service-card-title {
      color: #0e141b;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.3;
      margin: 0;
    }
    .service-card-description {
      color: #4d7399;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
    }
  `;me([n({type:String})],D.prototype,"icon",2);me([n({type:String})],D.prototype,"title",2);me([n({type:String})],D.prototype,"description",2);D=me([f("trio-service-card")],D);var ii=Object.defineProperty,si=Object.getOwnPropertyDescriptor,at=(r,e,t,s)=>{for(var i=s>1?void 0:s?si(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ii(e,t,i),i};let pe=class extends h{constructor(){super(...arguments),this.services=[]}render(){return l`
      <div class="service-grid">
        ${this.services.map(r=>l`
          <trio-service-card
            .icon="${r.icon}"
            .title="${r.title}"
            .description="${r.description}"
          ></trio-service-card>
        `)}
      </div>
    `}};pe.styles=m`
    :host {
      display: block;
    }
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
      gap: 12px;
      padding: 0;
    }
    @media (max-width: 768px) {
      .service-grid { grid-template-columns: 1fr; }
    }
  `;at([n({type:Array})],pe.prototype,"services",2);pe=at([f("trio-service-grid")],pe);var ri=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,z=(r,e,t,s)=>{for(var i=s>1?void 0:s?ai(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ri(e,t,i),i};let y=class extends h{constructor(){super(...arguments),this.image="",this.title="",this.description="",this.client="",this.horizontal=!1,this.lang="en"}render(){const r=this.lang==="jp"?"#/jp/cases":"#/cases";return l`
      <div class="case-card ${this.horizontal?"horizontal":""}">
        <div class="case-card-image-wrap">
          <a href="${r}">
            <img class="case-card-image" src="${this.image}" alt="${this.title}" />
          </a>
        </div>
        <div class="case-card-body">
          ${this.client?l`<p class="case-card-client">${this.client}</p>`:""}
          <p class="case-card-title"><a href="${r}" style="text-decoration: none; color: inherit;">${this.title}</a></p>
          <p class="case-card-description">${this.description}</p>
        </div>
      </div>
    `}};y.styles=m`
    :host { display: block; width: 100%; }
    
    /* Vertical layout (Home page) */
    .case-card { display: flex; flex-direction: column; gap: 12px; border-radius: 8px; min-width: 240px; }
    .case-card-image-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; background: #eee; }
    .case-card-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    .case-card-body { display: flex; flex-direction: column; gap: 4px; }
    .case-card-client { color: #4d7399; font-size: 12px; font-weight: 500; margin: 0; }
    .case-card-title { color: #0e141b; font-size: 16px; font-weight: 700; line-height: 1.4; margin: 0; }
    .case-card-description { color: #4d7399; font-size: 14px; line-height: 1.5; margin: 0; }

    /* Horizontal layout (Cases page) */
    .case-card.horizontal {
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid #eaedf0;
    }
    .case-card.horizontal .case-card-image-wrap {
      flex: 0 0 40%;
      max-width: 400px;
    }
    .case-card.horizontal .case-card-body {
      flex: 1;
      gap: 8px;
    }
    .case-card.horizontal .case-card-client {
      font-size: 22px;
      font-weight: 700;
      color: #0e141b;
    }
    .case-card.horizontal .case-card-title {
      font-size: 16px;
      font-weight: 400;
      color: #0e141b;
    }

    @media (max-width: 768px) {
      .case-card { min-width: 0; }
      .case-card.horizontal {
        flex-direction: column;
      }
      .case-card.horizontal .case-card-image-wrap {
        max-width: 100%;
        flex: none;
      }
    }
  `;z([n({type:String})],y.prototype,"image",2);z([n({type:String})],y.prototype,"title",2);z([n({type:String})],y.prototype,"description",2);z([n({type:String})],y.prototype,"client",2);z([n({type:Boolean})],y.prototype,"horizontal",2);z([n({type:String})],y.prototype,"lang",2);y=z([f("trio-case-card")],y);var oi=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,fe=(r,e,t,s)=>{for(var i=s>1?void 0:s?ni(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&oi(e,t,i),i};let Z=class extends h{constructor(){super(...arguments),this.cases=[],this.scrollable=!1,this.lang="en"}render(){const r=!this.scrollable,e=this.scrollable?"case-list-scrollable":"case-list-vertical";return l`
      <div class="${e}">
        <div class="case-list-inner">
          ${this.cases.map(t=>l`
            <trio-case-card
              .image="${t.image}"
              .title="${t.title}"
              .description="${t.description}"
              .client="${t.client||""}"
              .horizontal="${r}"
              .lang="${this.lang}"
            ></trio-case-card>
          `)}
        </div>
      </div>
    `}};Z.styles=m`
    :host {
      display: block;
    }
    .case-list-scrollable {
      display: flex;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .case-list-scrollable::-webkit-scrollbar {
      display: none;
    }
    .case-list-scrollable .case-list-inner {
      display: flex;
      align-items: stretch;
      padding: 16px;
      gap: 12px;
    }
    @media (max-width: 768px) {
      .case-list-scrollable {
        overflow-x: visible;
      }
      .case-list-scrollable .case-list-inner {
        flex-direction: column;
      }
    }
    .case-list-vertical .case-list-inner {
      display: flex;
      flex-direction: column;
    }
  `;fe([n({type:Array})],Z.prototype,"cases",2);fe([n({type:Boolean})],Z.prototype,"scrollable",2);fe([n({type:String})],Z.prototype,"lang",2);Z=fe([f("trio-case-list")],Z);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,ae=(r,e,t,s)=>{for(var i=s>1?void 0:s?ci(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&li(e,t,i),i};let H=class extends h{constructor(){super(...arguments),this.category="",this.title="",this.description="",this.image=""}render(){return l`<div class="news-item"><div class="news-item-text"><p class="news-item-category">${this.category}</p><p class="news-item-title">${this.title}</p><p class="news-item-description">${this.description}</p></div><div class="news-item-image-wrap"><img class="news-item-image" src="${this.image}" alt="${this.title}" /></div></div>`}};H.styles=m`
    :host { display: block; }
    .news-item { display: flex; align-items: stretch; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 16px; }
    .news-item-text { display: flex; flex-direction: column; gap: 4px; flex: 2; }
    .news-item-category, .news-item-description { color: #4d7399; font-size: 14px; line-height: 1.5; margin: 0; }
    .news-item-title { color: #0e141b; font-size: 16px; font-weight: 700; line-height: 1.3; margin: 0; }
    .news-item-image-wrap { flex: 1; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; }
    .news-item-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    @media (max-width: 768px) {
      .news-item { flex-direction: column; }
      .news-item-image-wrap { aspect-ratio: 16/9; }
    }
  `;ae([n({type:String})],H.prototype,"category",2);ae([n({type:String})],H.prototype,"title",2);ae([n({type:String})],H.prototype,"description",2);ae([n({type:String})],H.prototype,"image",2);H=ae([f("trio-news-item")],H);var pi=Object.defineProperty,di=Object.getOwnPropertyDescriptor,B=(r,e,t,s)=>{for(var i=s>1?void 0:s?di(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&pi(e,t,i),i};let S=class extends h{constructor(){super(...arguments),this.title="",this.subtitle="",this.buttonText="",this.buttonHref="",this.lang="en"}render(){const r=this.buttonHref||(this.lang==="jp"?"#/jp/contact":"#/contact");return l`
      <div class="cta-wrap">
        <div class="cta-box">
          <div class="cta-text">
            <h2 class="cta-title">${this.title}</h2>
            ${this.subtitle?l`<p class="cta-subtitle">${this.subtitle}</p>`:""}
          </div>
          <div class="cta-action">
            <a class="cta-button" href="${r}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `}};S.styles=m`
    :host { display: block; }
    .cta-wrap { padding: 20px 16px; }
    .cta-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      padding: 40px 0;
      background: #f8fafc;
      border-radius: 12px;
    }
    .cta-text { display: flex; flex-direction: column; gap: 12px; text-align: center; align-items: center; }
    .cta-title {
      color: #0e141b;
      font-size: 28px;
      font-weight: 900;
      line-height: 1.2;
      letter-spacing: -0.033em;
      margin: 0;
      max-width: 720px;
    }
    @media (max-width: 768px) {
      .cta-title { font-size: 22px; }
      .cta-box { padding: 24px 16px; }
    }
    .cta-subtitle {
      color: #0e141b;
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
      max-width: 720px;
      opacity: 0.8;
    }
    .cta-action { display: flex; justify-content: center; }
    .cta-button {
      display: inline-flex;
      min-width: 120px;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 48px;
      padding: 0 24px;
      background: #1572cf;
      color: #f8fafc;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.015em;
      text-decoration: none;
    }
  `;B([n({type:String})],S.prototype,"title",2);B([n({type:String})],S.prototype,"subtitle",2);B([n({type:String})],S.prototype,"buttonText",2);B([n({type:String})],S.prototype,"buttonHref",2);B([n({type:String})],S.prototype,"lang",2);S=B([f("trio-cta-section")],S);var hi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,Oe=(r,e,t,s)=>{for(var i=s>1?void 0:s?gi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&hi(e,t,i),i};let Y=class extends h{constructor(){super(...arguments),this.data={},this.lang="en"}render(){const r=this.data;if(!r)return l`<div>Loading...</div>`;const e=this.lang==="jp"?"#/jp/services":"#/services",t=this.lang==="jp"?"#/jp/contact":"#/contact",s=this.lang==="jp"?"/hero-jp.jpg":"/hero-en.jpg";return l`
      <trio-hero .title=${r.heroTitle} .subtitle=${r.heroSubtitle} .buttonText=${r.heroButton} .buttonHref=${e} .backgroundImage=${s}></trio-hero>
      <h2 class="section-title">${r.expertiseTitle}</h2>
      <div class="intro-wrap"><div class="intro-head"><h2 class="intro-title">${r.expertiseSubtitle}</h2><p class="intro-desc">${r.expertiseDescription}</p></div><trio-service-grid .services=${r.services}></trio-service-grid></div>
      <h2 class="section-title">${r.casesTitle}</h2>
      <trio-case-list .cases=${r.cases} .scrollable=${!0}></trio-case-list>
      <h2 class="section-title">${r.newsTitle}</h2>
      <div class="news-list">${r.news.map(i=>l`<trio-news-item .category=${i.category} .title=${i.title} .description=${i.description} .image=${i.image}></trio-news-item>`)}</div>
      <trio-cta-section .title=${r.ctaTitle} .buttonText=${r.ctaButton} .buttonHref=${t} tone="blue"></trio-cta-section>
    `}};Y.styles=m`
    :host { display: block; }
    .section-title { color: #0e141b; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; padding: 20px 16px 12px; margin: 0; }
    .intro-wrap { display: flex; flex-direction: column; gap: 32px; padding: 20px 16px; }
    .intro-head { display: flex; flex-direction: column; gap: 12px; }
    .intro-title { color: #0e141b; font-size: 28px; font-weight: 900; line-height: 1.2; letter-spacing: -0.033em; margin: 0; max-width: 720px; }
    .intro-desc { color: #0e141b; font-size: 16px; line-height: 1.5; margin: 0; max-width: 720px; opacity: 0.8; }
    .news-list { display: flex; flex-direction: column; }
    @media (max-width: 768px) {
      .section-title { font-size: 18px; padding: 16px 12px 8px; }
      .intro-wrap { padding: 16px 12px; gap: 20px; }
      .intro-title { font-size: 22px; }
      .intro-desc { font-size: 14px; }
    }
  `;Oe([n({type:Object})],Y.prototype,"data",2);Oe([n({type:String})],Y.prototype,"lang",2);Y=Oe([f("page-home")],Y);var ui=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,je=(r,e,t,s)=>{for(var i=s>1?void 0:s?mi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ui(e,t,i),i};let J=class extends h{constructor(){super(...arguments),this.data={},this.lang="en"}render(){const r=this.data;if(!r)return l`<div>Loading...</div>`;const e=this.lang==="jp"?"#/jp/contact":"#/contact";return l`<div class="page-head"><div class="page-head-box"><p class="page-title">${r.pageTitle}</p><p class="page-subtitle">${r.pageSubtitle}</p></div></div>${r.sections.map(t=>l`<h2 class="section-title">${t.title}</h2><div class="grid-wrap"><trio-service-grid .services=${t.cards}></trio-service-grid></div>`)}<trio-cta-section .title=${r.ctaTitle} .subtitle=${r.ctaSubtitle} .buttonText=${r.ctaButton} .buttonHref=${e} tone="blue"></trio-cta-section>`}};J.styles=m`
    :host { display: block; }
    .page-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding: 16px; }
    .page-head-box { display: flex; min-width: 288px; flex-direction: column; gap: 12px; }
    .page-title { color: #111518; font-size: 32px; font-weight: 700; line-height: 1.2; margin: 0; }
    .page-subtitle { color: #4d7499; font-size: 14px; line-height: 1.5; margin: 0; }
    .section-title { color: #0e151b; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; padding: 20px 16px 12px; margin: 0; }
    .grid-wrap { padding: 16px; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .page-head-box { min-width: 0; }
      .section-title { font-size: 18px; }
    }
  `;je([n({type:Object})],J.prototype,"data",2);je([n({type:String})],J.prototype,"lang",2);J=je([f("page-services")],J);var fi=Object.defineProperty,vi=Object.getOwnPropertyDescriptor,Ee=(r,e,t,s)=>{for(var i=s>1?void 0:s?vi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&fi(e,t,i),i};let K=class extends h{constructor(){super(...arguments),this.lang="en",this.data={}}render(){return l`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>

        <trio-case-list .cases=${this.data.items} .scrollable=${!1} .lang=${this.lang}></trio-case-list>

        <div class="footer-actions">
          <a href="${this.lang==="jp"?"#/jp/contact":"#/contact"}" class="btn-contact">
            ${this.data.contactUs}
          </a>
        </div>
      </div>
    `}};K.styles=m`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #0e141b;
      margin: 0;
      min-width: 288px;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; min-width: 0; }
    }
    .footer-actions {
      display: flex;
      justify-content: center;
      padding: 0.75rem 1rem;
    }
    .btn-contact {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.5rem;
      padding: 0 1.5rem;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0.015em;
      border: none;
      text-decoration: none;
      background-color: #1572cf;
      color: #f8fafc;
    }
  `;Ee([n({type:String})],K.prototype,"lang",2);Ee([n({type:Object})],K.prototype,"data",2);K=Ee([f("page-cases")],K);var bi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,He=(r,e,t,s)=>{for(var i=s>1?void 0:s?xi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&bi(e,t,i),i};let Q=class extends h{constructor(){super(...arguments),this.lang="en",this.data={}}render(){return l`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.storyTitle}</h2>
        <p class="text-content">${this.data.story}</p>

        <h2 class="section-heading">${this.data.teamTitle}</h2>
        <div class="grid">
          ${this.data.team.map(r=>l`
            <div class="card ${r.isAI?"card--ai":""}">
              <div class="card-icon" style="${r.isAI?"color:#3b5bdb":""}">${b(r.isAI?it:rt)}</div>
              <div class="title-group">
                <h3 class="card-title">${r.name}</h3>
                <p class="card-desc">${r.role}</p>
                ${r.isAI?l`<span style="display:inline-block;font-size:10px;font-weight:700;letter-spacing:.05em;color:#3b5bdb;background:#dbe4ff;border-radius:4px;padding:2px 6px;margin-top:4px;">Digital Employee</span>`:""}
              </div>
            </div>
          `)}
        </div>
        <p class="text-content">${this.data.teamDescription}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="grid">
          ${this.data.values.map(r=>l`
            <div class="card">
              <div class="card-icon">
                <!-- Simple mapping for icons -->
                ${r.icon==="lightbulb"?b(Te):""}
                ${r.icon==="users"?b(ge):""}
                ${r.icon==="rocket"?b(Ce):""}
              </div>
              <div class="title-group">
                <h3 class="card-title">${r.title}</h3>
                <p class="card-desc">${r.description}</p>
              </div>
            </div>
          `)}
        </div>

        <trio-cta-section 
          .title=${this.data.ctaTitle} 
          .subtitle=${this.data.ctaSubtitle}
          .buttonText=${this.data.ctaButton}
          .buttonHref=${this.lang==="jp"?"#/jp/contact":"#/contact"}
          .lang=${this.lang}>
        </trio-cta-section>
      </div>
    `}};Q.styles=m`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0;
      min-width: 288px;
    }
    .text-content {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .section-heading {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      padding: 1.25rem 1rem 0.75rem;
      margin: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
      gap: 0.75rem;
      padding: 1rem;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #d5dce2;
      background-color: #f9fafb; /* gray-50 */
    }
    .card--ai {
      background-color: #eef4ff;
      border-color: #b3caf5;
    }
    .card-icon {
      color: #111518;
      width: 24px;
      height: 24px;
    }
    .card-title {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2;
      color: #111518;
      margin: 0;
    }
    .card-desc {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: #5e7387;
      margin: 0;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; min-width: 0; }
      .grid { grid-template-columns: 1fr; }
      .text-content { font-size: 14px; }
    }
  `;He([n({type:String})],Q.prototype,"lang",2);He([n({type:Object})],Q.prototype,"data",2);Q=He([f("page-about")],Q);var yi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,U=(r,e,t,s)=>{for(var i=s>1?void 0:s?wi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&yi(e,t,i),i};const $i="https://formspree.io/f/mreyloqo";let T=class extends h{constructor(){super(...arguments),this.lang="en",this.data={},this._status="idle",this._errorMessage=""}async _handleSubmit(r){r.preventDefault(),this._status="submitting",this._errorMessage="";const e=new FormData(this._form);try{const t=await fetch($i,{method:"POST",body:e,headers:{Accept:"application/json"}});if(t.ok)this._status="success",this._form.reset();else{const s=await t.json();s.errors?this._errorMessage=s.errors.map(i=>i.message).join(", "):this._errorMessage=this.lang==="jp"?"フォームの送信中に問題が発生しました。":"Oops! There was a problem submitting your form.",this._status="error"}}catch{this._errorMessage=this.lang==="jp"?"フォームの送信中に問題が発生しました。":"Oops! There was a problem submitting your form.",this._status="error"}}_renderStatusMessage(){if(this._status==="success"){const r=this.lang==="jp"?"お問い合わせありがとうございます！":"Thanks for your submission!";return l`<p class="status-message status-success">${r}</p>`}return this._status==="error"?l`<p class="status-message status-error">${this._errorMessage}</p>`:""}render(){const r=this._status==="submitting";return l`
      <div class="container">
        <div class="header-section">
          <div class="title-group">
            <h1 class="page-title">${this.data.pageTitle}</h1>
            <p class="page-subtitle">${this.data.pageSubtitle}</p>
          </div>
        </div>

        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.nameLabel}</p>
              <input class="form-input" name="name" placeholder="${this.data.namePlaceholder}" required />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.emailLabel}</p>
              <input class="form-input" name="email" type="email" placeholder="${this.data.emailPlaceholder}" required />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.subjectLabel}</p>
              <input class="form-input" name="subject" placeholder="${this.data.subjectPlaceholder}" />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.messageLabel}</p>
              <textarea class="form-input form-textarea" name="message" placeholder="${this.data.messagePlaceholder}" required></textarea>
            </label>
          </div>

          <div class="btn-container">
            <button class="btn-submit" type="submit" ?disabled=${r}>
              ${r?this.lang==="jp"?"送信中...":"Submitting...":this.data.submit}
            </button>
          </div>
        </form>

        ${this._renderStatusMessage()}
      </div>
    `}};T.styles=m`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem;
    }
    .title-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 288px;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0;
    }
    .page-subtitle {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: #5e7387;
      margin: 0;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.75rem 1rem;
      max-width: 480px;
    }
    .field-label {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #111518;
      padding-bottom: 0.5rem;
      margin: 0;
    }
    .form-input {
      display: flex;
      width: 100%;
      min-width: 0;
      flex: 1;
      border-radius: 0.75rem;
      color: #111518;
      border: 1px solid #d5dce2;
      background-color: #f9fafb;
      height: 3.5rem;
      padding: 0.9375rem;
      font-size: 16px;
      font-family: inherit;
      box-sizing: border-box;
    }
    .form-input:focus {
      outline: none;
      border-color: #1572cf;
    }
    .form-textarea {
      min-height: 9rem;
      resize: none;
    }
    .btn-container {
      display: flex;
      padding: 0.75rem 1rem;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
    .btn-submit {
      display: flex;
      min-width: 84px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.5rem;
      padding: 0 1.5rem;
      background-color: #1572cf;
      color: #f8fafc;
      font-size: 14px;
      font-weight: bold;
      border: none;
      font-family: inherit;
    }
    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .status-message {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
      padding: 0 1rem;
    }
    .status-success {
      color: #16a34a;
    }
    .status-error {
      color: #dc2626;
    }
    .section-heading {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      padding: 1.25rem 1rem 0.75rem;
      margin: 0;
    }
    .info-text {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .map-container {
      display: flex;
      padding: 0.75rem 1rem;
    }
    .map-wrapper {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 0.75rem;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .title-group { min-width: 0; }
    }
  `;U([n({type:String})],T.prototype,"lang",2);U([n({type:Object})],T.prototype,"data",2);U([re()],T.prototype,"_status",2);U([re()],T.prototype,"_errorMessage",2);U([Ot("form")],T.prototype,"_form",2);T=U([f("page-contact")],T);var _i=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,ze=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ai(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&_i(e,t,i),i};let X=class extends h{constructor(){super(...arguments),this.lang="en",this.data={}}render(){return l`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>
        <div class="content">
          ${b(this.data.content)}
        </div>
      </div>
    `}};X.styles=m`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0 0 1.5rem 0;
      padding: 1rem;
    }
    .content {
      font-size: 16px;
      line-height: 1.6;
      color: #111518;
      padding: 0 1rem;
    }
    .content h3 {
      font-size: 20px;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
    .content p {
      margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .content { font-size: 14px; }
    }
  `;ze([n({type:String})],X.prototype,"lang",2);ze([n({type:Object})],X.prototype,"data",2);X=ze([f("page-privacy")],X);var Si=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Me=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ti(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Si(e,t,i),i};let ee=class extends h{constructor(){super(...arguments),this.lang="en",this.data={}}render(){return l`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>
        <div class="content">
          ${b(this.data.content)}
        </div>
      </div>
    `}};ee.styles=m`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0 0 1.5rem 0;
      padding: 1rem;
    }
    .content {
      font-size: 16px;
      line-height: 1.6;
      color: #111518;
      padding: 0 1rem;
    }
    .content h3 {
      font-size: 20px;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
    .content p {
      margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .content { font-size: 14px; }
    }
  `;Me([n({type:String})],ee.prototype,"lang",2);Me([n({type:Object})],ee.prototype,"data",2);ee=Me([f("page-terms")],ee);var Ci=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,Ie=(r,e,t,s)=>{for(var i=s>1?void 0:s?Pi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ci(e,t,i),i};const Oi={users:ge,rocket:Ce,lightbulb:Te,gear:tt,globe:st};let te=class extends h{constructor(){super(...arguments),this.lang="en",this.data={}}render(){var r,e;return l`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>

        <h2 class="section-heading">${this.data.introTitle}</h2>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="values-grid">
          ${(r=this.data.values)==null?void 0:r.map(t=>l`
            <div class="value-card">
              <div class="value-icon">${b(Oi[t.icon]||ge)}</div>
              <h3 class="value-title">${t.title}</h3>
              <p class="value-desc">${t.description}</p>
            </div>
          `)}
        </div>

        <h2 class="section-heading">${this.data.cultureTitle}</h2>
        <ul class="culture-list">
          ${(e=this.data.cultureItems)==null?void 0:e.map(t=>l`<li>${t}</li>`)}
        </ul>

        <trio-cta-section
          .title=${this.data.applyTitle}
          .subtitle=${this.data.applySubtitle}
          .buttonText=${this.data.applyButton}
          .buttonHref=${this.lang==="jp"?"#/jp/contact":"#/contact"}
          .lang=${this.lang}>
        </trio-cta-section>

      </div>
    `}};te.styles=m`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0;
      padding: 1rem;
    }
    .section-heading {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      padding: 1.25rem 1rem 0.75rem;
      margin: 0;
    }
    .text-content {
      font-size: 16px;
      line-height: 1.6;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
    .value-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      border-radius: 0.5rem;
      border: 1px solid #d5dce2;
      background-color: #f9fafb;
    }
    .value-icon {
      color: #1572cf;
      width: 24px;
      height: 24px;
    }
    .value-title {
      font-size: 16px;
      font-weight: bold;
      color: #111518;
      margin: 0;
    }
    .value-desc {
      font-size: 14px;
      line-height: 1.6;
      color: #5e7387;
      margin: 0;
    }
    .culture-list {
      padding: 0.5rem 1rem 0.75rem 2.5rem;
      margin: 0;
    }
    .culture-list li {
      font-size: 15px;
      line-height: 1.8;
      color: #333;
    }
    .json-ld { display: none; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .values-grid { grid-template-columns: 1fr; }
    }
  `;Ie([n({type:String})],te.prototype,"lang",2);Ie([n({type:Object})],te.prototype,"data",2);te=Ie([f("page-careers")],te);var ji=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,ot=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ei(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ji(e,t,i),i};let de=class extends h{constructor(){super(...arguments),this.data={}}render(){return l`
      <div class="wrapper">
        <div class="content">
          <div class="header">
            <h1 class="title">${this.data.title}</h1>
            <p class="subtitle">${this.data.subtitle}</p>
          </div>
          <div class="options">
            <a href="${this.data.en.href}" class="card">
              <div class="lang-info">
                <div class="flag-circle">${this.data.en.flag}</div>
                <div class="lang-text">
                  <h3 class="lang-name">${this.data.en.name}</h3>
                  <p class="lang-desc">${this.data.en.desc}</p>
                </div>
              </div>
              <div class="caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
            <a href="${this.data.jp.href}" class="card">
              <div class="lang-info">
                <div class="flag-circle">${this.data.jp.flag}</div>
                <div class="lang-text">
                  <h3 class="lang-name">${this.data.jp.name}</h3>
                  <p class="lang-desc">${this.data.jp.desc}</p>
                </div>
              </div>
              <div class="caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    `}};de.styles=m`
    :host {
      display: block;
      height: 100vh;
      background-color: #f8fafc;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 1.25rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      width: 100%;
      max-width: 960px;
    }
    .header {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .title {
      font-size: 2.25rem;
      font-weight: 900;
      color: #0e141b;
      margin: 0;
    }
    .subtitle {
      font-size: 1rem;
      color: #4d7399;
      margin: 0;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 448px;
    }
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 0.75rem;
      border: 1px solid #d0dbe7;
      background-color: white;
      text-decoration: none;
      transition: background-color 0.2s;
    }
    .card:hover {
      background-color: #f8fafc;
    }
    .lang-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .flag-circle {
      display: flex;
      width: 3rem;
      height: 3rem;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      background-color: #e7edf3;
      font-size: 1.5rem;
    }
    .lang-text {
      display: flex;
      flex-direction: column;
    }
    .lang-name {
      font-size: 1.125rem;
      font-weight: bold;
      color: #0e141b;
      margin: 0;
    }
    .lang-desc {
      font-size: 0.875rem;
      color: #4d7399;
      margin: 0;
    }
    .caret {
      color: #0e141b;
    }
  `;ot([n({type:Object})],de.prototype,"data",2);de=ot([f("trio-language-selector")],de);var Hi=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Le=(r,e,t,s)=>{for(var i=s>1?void 0:s?zi(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Hi(e,t,i),i};let ie=class extends h{constructor(){super(),this.route=window.location.hash||"#/",this.lang=this.route.startsWith("#/jp")?"jp":"en",window.addEventListener("hashchange",()=>{this.route=window.location.hash||"#/",this.lang=this.route.startsWith("#/jp")?"jp":"en",window.scrollTo(0,0)})}render(){const r=this.lang==="jp"?Et:jt;return l`
      <div class="app-container">
        ${this.route==="#/language"?l`<trio-language-selector .data=${r.language}></trio-language-selector>`:l`
            <trio-header .lang=${this.lang} .data=${r}></trio-header>
            <main>
              ${this.renderPage(r)}
            </main>
            <trio-footer .lang=${this.lang} .data=${r.footer}></trio-footer>
          `}
      </div>
    `}renderPage(r){switch(this.lang==="jp"?this.route.replace("#/jp","")||"/":this.route.replace("#","")||"/"){case"/":return l`<page-home .lang=${this.lang} .data=${r.home}></page-home>`;case"/services":return l`<page-services .lang=${this.lang} .data=${r.services}></page-services>`;case"/cases":return l`<page-cases .lang=${this.lang} .data=${r.cases}></page-cases>`;case"/about":return l`<page-about .lang=${this.lang} .data=${r.about}></page-about>`;case"/contact":return l`<page-contact .lang=${this.lang} .data=${r.contact}></page-contact>`;case"/privacy":return l`<page-privacy .lang=${this.lang} .data=${r.privacy}></page-privacy>`;case"/terms":return l`<page-terms .lang=${this.lang} .data=${r.terms}></page-terms>`;case"/careers":return l`<page-careers .lang=${this.lang} .data=${r.careers}></page-careers>`;default:return l`<page-home .lang=${this.lang} .data=${r.home}></page-home>`}}};ie.styles=m`
    :host {
      display: block;
      min-height: 100vh;
      font-family: 'Inter', 'Noto Sans JP', 'Noto Sans', sans-serif;
      background-color: #f8fafc;
      color: #0e141b;
      overflow-x: hidden;
    }
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 1200px;
      margin: 0 auto;
    }
    main {
      flex-grow: 1;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .app-container {
        max-width: 100%;
      }
    }
  `;Le([re()],ie.prototype,"route",2);Le([re()],ie.prototype,"lang",2);ie=Le([f("trio-app")],ie);
