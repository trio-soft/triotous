(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,re=f.trustedTypes,ie=re?re.emptyScript:``,ae=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},oe=(e,t)=>!l(e,t),se={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var h=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[p(`elementProperties`)]=new Map,h[p(`finalized`)]=new Map,ae?.({ReactiveElement:h}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var ce=globalThis,le=e=>e,g=ce.trustedTypes,ue=g?g.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+_,pe=`<${fe}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,S=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ye=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,C=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Se=new WeakMap,E=v.createTreeWalker(v,129);function Ce(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=x;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===x?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=S):(xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=S):o=ve:o===S?c[0]===`>`?(o=i??x,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?S:c[3]===`"`?be:ye):o===be||o===ye?o=S:o===_e||o===ve?o=x:(o=S,i=void 0);let d=o===S&&e[t+1].startsWith(`/>`)?` `:``;a+=o===x?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Oe:r[1]===`?`?ke:r[1]===`@`?Ae:O}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(xe.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=g?g.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function D(e,t,n=e,r){if(t===w)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=b(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=D(e,i._$AS(e,t.values),i,r)),t}var Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);E.currentNode=r;let i=E.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),b(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=le(e).nextSibling;le(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=D(this,r[n+o],t,o),s===w&&(s=this._$AH[o]),a||=!b(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Oe=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},ke=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Ae=class extends O{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??T)===w)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Me=ce.litHtmlPolyfillSupport;Me?.(Te,De),(ce.litHtmlVersions??=[]).push(`3.3.2`);var Ne=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},Pe=globalThis,k=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};k._$litElement$=!0,k.finalized=!0,Pe.litElementHydrateSupport?.({LitElement:k});var Fe=Pe.litElementPolyfillSupport;Fe?.({LitElement:k}),(Pe.litElementVersions??=[]).push(`4.2.2`);var A=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ie={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:oe},Le=(e=Ie,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function j(e){return(t,n)=>typeof n==`object`?Le(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function M(e){return j({...e,state:!0,attribute:!1})}var Re=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function ze(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Re(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Re(n,r,{get(){return a(this)}})}}var Be={brand:`Triotous`,nav:[{label:`Services`,href:`#/services`},{label:`Our Work`,href:`#/cases`},{label:`About Us`,href:`#/about`},{label:`Contact`,href:`#/contact`},{label:`Careers`,href:`#/careers`}],getStarted:`Get Started`,footer:{privacyPolicy:`Privacy Policy`,termsOfService:`Terms of Service`,copyright:`© 2025 Triotous. All rights reserved.`},privacy:{pageTitle:`Privacy Policy`,content:`
      <h3>1. Introduction</h3>
      <p>Triotous ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
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
      <p>If you have any questions about this Privacy Policy, please contact us at contact@triotous.com.</p>
    `},terms:{pageTitle:`Terms of Service`,content:`
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website, you agree to be bound by these Terms of Service.</p>
      <h3>2. Use of the Website</h3>
      <p>You agree to use the website only for lawful purposes and in accordance with these Terms.</p>
      <h3>3. Intellectual Property</h3>
      <p>All content on this website, including text, graphics, and logos, is the property of Triotous and is protected by intellectual property laws.</p>
      <h3>4. Limitation of Liability</h3>
      <p>Triotous shall not be liable for any damages arising from the use of or inability to use our website.</p>
      <h3>5. Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of Japan.</p>
      <h3>6. Changes to Terms</h3>
      <p>We reserve the right to modify these Terms at any time. Your continued use of the website after any changes constitutes acceptance of the new Terms.</p>
      <h3>7. Contact Us</h3>
      <p>If you have any questions about these Terms, please contact us at contact@triotous.com.</p>
    `},home:{heroTitle:``,heroSubtitle:``,heroButton:`Explore Our Services`,expertiseTitle:`Our Expertise`,expertiseSubtitle:`Comprehensive Solutions for Your Business Needs`,expertiseDescription:`From initial concept to deployment and beyond, Triotous offers a full suite of services to ensure your success.`,services:[{icon:`gear`,title:`System Architecture Consulting`,description:`Crafting robust, scalable, and efficient system architectures tailored to your business objectives.`},{icon:`app-window`,title:`Software and App Design`,description:`Designing intuitive and engaging software and applications that enhance user experience and drive growth.`},{icon:`robot`,title:`AI Solutions`,description:`Leveraging the power of AI to create intelligent solutions that automate processes and unlock new opportunities.`}],casesTitle:`Case Studies`,cases:[{image:`/case-ecommerce.webp`,title:`E-commerce Platform for Retailer`,description:`Developed a scalable e-commerce platform for a leading retailer, resulting in a 30% increase in online sales.`},{image:`/case-fitness.webp`,title:`Mobile App for Fitness Tracking`,description:`Designed and built a user-friendly mobile app for fitness tracking, achieving a 4.8-star rating on app stores.`},{image:`/case-analytics.webp`,title:`AI-Powered Analytics Dashboard`,description:`Created an AI-powered analytics dashboard for a financial institution, providing actionable insights and improving decision-making.`}],newsTitle:`Latest News`,news:[{category:`Tech Insights`,title:`The Future of AI in Business`,description:`Explore the latest trends and applications of artificial intelligence in various industries.`,image:`/news-ai.webp`},{category:`Design Trends`,title:`User-Centric Design Principles`,description:`Learn about the key principles of user-centric design and how they can improve your product's success.`,image:`/news-design.webp`}],ctaTitle:`Ready to Transform Your Business?`,ctaButton:`Get in Touch`},services:{pageTitle:`Our Services`,pageSubtitle:`Triotous offers a comprehensive suite of services designed to empower your business through innovative technology solutions. From strategic consulting to cutting-edge AI applications, we're here to help you achieve your goals.`,sections:[{title:`Consulting & Strategy`,cards:[{icon:`presentation-chart`,title:`Information Systems Consulting`,description:`Expert guidance on optimizing your information systems for peak performance.`},{icon:`gear`,title:`Computer Software Solutions`,description:`Comprehensive software solutions from planning to maintenance.`},{icon:`cloud`,title:`Cloud Services Strategy`,description:`Strategic planning and operation of cloud services tailored to your needs.`},{icon:`lightbulb`,title:`Business Efficiency Enhancement`,description:`Streamlining business processes with system development and support.`}]},{title:`Development & Implementation`,cards:[{icon:`globe`,title:`Web & Application Development`,description:`Creating and managing websites and web applications that drive results.`},{icon:`app-window`,title:`IT Infrastructure Management`,description:`Design, construction, and support for robust IT infrastructure.`},{icon:`device-mobile`,title:`Mobile Application Solutions`,description:`Innovative mobile applications from concept to distribution.`},{icon:`code`,title:`Programming Education & Training`,description:`Training and courses to develop IT talent and programming skills.`}]},{title:`AI & Emerging Technologies`,cards:[{icon:`video`,title:`Online Learning Content`,description:`Engaging online learning content for continuous professional development.`},{icon:`robot`,title:`AI & Machine Learning Services`,description:`Harnessing the power of AI and machine learning for innovative solutions.`},{icon:`chart-line`,title:`AI-Driven Data Analysis`,description:`Data analysis and business automation through advanced AI techniques.`},{icon:`headset`,title:`Technical Application Systems`,description:`Developing AI chatbots, image recognition, and natural language processing systems.`}]},{title:`Operations & Support`,cards:[{icon:`users`,title:`Self-Media Management`,description:`Planning and managing self-media platforms like YouTube and blogs.`},{icon:`briefcase`,title:`IT Task Outsourcing`,description:`Outsourcing IT-related tasks for efficiency and cost-effectiveness.`},{icon:`list-checks`,title:`Business Process Optimization`,description:`Improving business processes through design, optimization, and outsourcing support.`},{icon:`gear`,title:`Comprehensive Support`,description:`Complete operational support for all our services and related activities.`}]}],ctaTitle:`Ready to Transform Your Business?`,ctaSubtitle:`Contact us today to discuss how Triotous's services can help you achieve your business objectives.`,ctaButton:`Get in Touch`},cases:{pageTitle:`Our Work`,items:[{client:`JVR Music`,title:`Enhancing Digital Presence for a Music Label`,description:`We revamped the digital presence for JVR Music, a prominent music label, by developing a modern, user-friendly website. The project involved integrating social media capabilities, enhancing content delivery, and optimizing for mobile devices. Technologies used included React, Node.js, and a headless CMS. The result was a 50% increase in website traffic.`,image:`/cases/case_jvr.webp`},{client:`Simmons Taiwan`,title:`Optimizing E-commerce for a Brand`,description:`For Simmons Taiwan, we optimized their e-commerce platform to improve user experience and sales efficiency. The project scope included a complete redesign of the website, implementation of advanced search and filtering, and integration with a new payment gateway. We utilized technologies such as Vue.js, .NET Core, and SQLServer. The enhancements led to a 20% improvement in conversion rates and a 10% increase in average order value.`,image:`/cases/case_simmons.webp`},{client:`VDS`,title:`Developing a Scalable Platform for a Retail Startup`,description:`We partnered with VDS, a retail startup, to develop a scalable and robust platform for their innovative product. The project focused on building a microservices architecture, implementing real-time data processing, and ensuring high availability. Technologies employed were Go, Kubernetes, and Kafka. The platform successfully supported a 10x increase in user base within the first year of launch.`,image:`/cases/case_vds.webp`}],viewAll:`Get in Touch`,contactUs:`Get in Touch`},about:{pageTitle:`About Triotous`,intro:`At Triotous, we are a dynamic startup dedicated to revolutionizing the tech landscape through innovative system architecture consulting, bespoke software and app design, and cutting-edge AI technology. Our mission is to empower businesses with solutions that not only meet their current needs but also anticipate future challenges, ensuring sustainable growth and competitive advantage.`,storyTitle:`Our Story`,story:`Founded in 2025 by a team of seasoned tech experts, Triotous emerged from a shared vision to bridge the gap between complex technological possibilities and practical business applications. We recognized the need for a more agile, client-focused approach to tech consulting and development, leading us to create a company that prioritizes innovation, collaboration, and tangible results.`,teamTitle:`Our Team`,team:[{name:`Bruce Tsai`,role:`CEO & Founder`},{name:`Kirisumi`,role:`Architecture & Development`,isAI:!0},{name:`Sop`,role:`Product Planning / Market Insights`,isAI:!0},{name:`Tsukino`,role:`Executive Assistant`,isAI:!0}],teamDescription:`Our team comprises industry veterans and rising stars, each bringing a unique set of skills and experiences to the table. From strategic consulting to hands-on development, our experts are committed to delivering excellence and driving client success.`,valuesTitle:`Our Values`,values:[{icon:`lightbulb`,title:`Innovation`,description:`We embrace creativity and constantly seek new ways to solve problems and push the boundaries of technology.`},{icon:`users`,title:`Collaboration`,description:`We believe in the power of teamwork and work closely with our clients to achieve shared goals.`},{icon:`rocket`,title:`Excellence`,description:`We are dedicated to delivering high-quality solutions that exceed expectations and drive meaningful impact.`}],ctaTitle:`Ready to transform your business with cutting-edge technology?`,ctaSubtitle:`Reach out to us today to discuss your project and explore how Triotous can help you achieve your goals.`,ctaButton:`Get in Touch`},contact:{pageTitle:`Contact Us`,pageSubtitle:`We're here to help. Reach out to us for any inquiries or support.`,namePlaceholder:`Your Name`,emailPlaceholder:`Your Email`,subjectPlaceholder:`Subject`,messagePlaceholder:`Your Message`,nameLabel:`Name`,emailLabel:`Email`,subjectLabel:`Subject`,messageLabel:`Message`,submit:`Submit`},careers:{pageTitle:`Careers at Triotous`,introTitle:`Join Our Team`,intro:`At Triotous, we believe great technology is built by great people. We are looking for passionate individuals who want to make a real impact through technology. If you thrive in a transparent, flat, and innovative environment, we want to hear from you.`,valuesTitle:`Our Values`,values:[{icon:`users`,title:`Transparent Communication`,description:`We prioritize openness and dialogue above all else. Small concerns are shared early, and everyone can discuss ideas on equal footing—regardless of role or seniority. Open communication builds trust and leads to better products.`},{icon:`users`,title:`Equality & Psychological Safety`,description:`We evaluate ideas by their merit, not by who said them. Regardless of age, nationality, or background, every member has an equal voice. Mutual respect for diverse expertise creates a psychologically safe team.`},{icon:`rocket`,title:`End-to-End Ownership`,description:`We don't just complete tasks—we take responsibility for business outcomes. From technology selection and design through post-launch operations and improvements, we maintain consistent ownership. This integrity earns deep client trust.`},{icon:`lightbulb`,title:`Creative Innovation`,description:`We welcome unconventional approaches and actively adopt cutting-edge AI and architecture. We embrace failure as part of exploration and constantly ask "Is there a better way?" This mindset is the source of our innovation.`},{icon:`gear`,title:`Flexible & Autonomous Work`,description:`We promote flexible working styles to maximize results. Rather than fixed hours or mandatory office attendance, team members choose when and where they work based on their lifestyle and focus needs. Remote-first with asynchronous communication.`},{icon:`globe`,title:`Cross-Boundary Collaboration`,description:`We don't stay confined to our job titles. Engineers think about business models; designers care about system architecture. By crossing professional boundaries, we raise collective perspective and solve problems from multiple angles.`}],cultureTitle:`Culture & Benefits`,cultureItems:[`Fully remote work environment`,`Full-flex system (Core time: 11:00 - 15:00)`,`Flat organizational structure`,`Opportunity to work with cutting-edge AI and cloud technologies`,`Multilingual, international team (Japanese & English)`,`Continuous learning and professional development support`],applyTitle:`Interested in Joining Us?`,applySubtitle:`We'd love to hear from you. Send us your resume and tell us about yourself.`,applyButton:`Get in Touch`},language:{title:`Select Language / 言語を選択`,subtitle:`Choose your preferred language / お好みの言語を選択してください`,en:{name:`English`,desc:`English version`,flag:`🇺🇸`,href:`#/`},jp:{name:`日本語`,desc:`日本語版`,flag:`🇯🇵`,href:`#/jp/`}}},Ve={brand:`トリオタス`,nav:[{label:`サービス`,href:`#/jp/services`},{label:`導入事例`,href:`#/jp/cases`},{label:`会社概要`,href:`#/jp/about`},{label:`お問い合わせ`,href:`#/jp/contact`},{label:`採用情報`,href:`#/jp/careers`}],getStarted:`Get Started`,footer:{privacyPolicy:`プライバシーポリシー`,termsOfService:`利用規約`,copyright:`© 2025 トリオタス. All rights reserved.`},privacy:{pageTitle:`プライバシーポリシー`,content:`
      <h3>1. はじめに</h3>
      <p>トリオタス（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当社のウェブサイトをご利用になる際の情報収集、使用、および保護について説明するものです。</p>
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
      <p>本プライバシーポリシーに関するご質問は、contact@triotous.com までお問い合わせください。</p>
    `},terms:{pageTitle:`利用規約`,content:`
      <h3>1. 規約への同意</h3>
      <p>当社のウェブサイトにアクセスし、これを利用することで、お客様は本利用規約に同意したものとみなされます。</p>
      <h3>2. ウェブサイトの利用</h3>
      <p>お客様は、合法的な目的のためにのみ、かつ本規約に従って本ウェブサイトを利用することに同意するものとします。</p>
      <h3>3. 知的財産権</h3>
      <p>本ウェブサイト上のテキスト、グラフィック、ロゴを含むすべてのコンテンツは、トリオタスの財産であり、知的財産権法によって保護されています。</p>
      <h3>4. 免責事項</h3>
      <p>トリオタスは、本ウェブサイトの利用または利用不能から生じるいかなる損害についても責任を負いません。</p>
      <h3>5. 準拠法</h3>
      <p>本利用規約は、日本法に準拠し、同法に従って解釈されるものとします。</p>
      <h3>6. 規約の変更</h3>
      <p>当社は、いつでも本規約を変更する権利を留保します。変更後のウェブサイトの継続的な利用は、新しい規約への同意とみなされます。</p>
      <h3>7. お問い合わせ</h3>
      <p>本利用規約に関するご質問は、contact@triotous.com までお問い合わせください。</p>
    `},home:{heroTitle:``,heroSubtitle:``,heroButton:`サービスを見る`,expertiseTitle:`私たちの専門分野`,expertiseSubtitle:`ビジネスニーズに応える包括的なソリューション`,expertiseDescription:`アイデア立案から導入・運用まで、トリオタスは成功のためのフルサービスを提供します。`,services:[{icon:`gear`,title:`システムアーキテクチャコンサルティング`,description:`ビジネス目標に合わせて堅牢でスケーラブル、かつ効率的なシステムアーキテクチャを構築します。`},{icon:`app-window`,title:`ソフトウェア・アプリ設計`,description:`直感的で魅力的なソフトウェアやアプリケーションを設計し、ユーザー体験を向上させ成長を促進します。`},{icon:`robot`,title:`AIソリューション`,description:`AIの力を活用し、業務プロセスを自動化し新たなビジネスチャンスを創出します。`}],casesTitle:`事例紹介`,cases:[{image:`/case-ecommerce.webp`,title:`小売業者向けECプラットフォーム`,description:`大手小売業者向けにスケーラブルなECプラットフォームを開発し、オンライン売上が30%増加しました。`},{image:`/case-fitness.webp`,title:`フィットネストラッキングアプリ`,description:`使いやすいフィットネストラッキングアプリを設計・開発し、アプリストアで4.8の高評価を獲得しました。`},{image:`/case-analytics.webp`,title:`AI搭載分析ダッシュボード`,description:`金融機関向けにAI搭載の分析ダッシュボードを開発し、実用的なインサイトと意思決定の質向上を実現しました。`}],newsTitle:`最新情報`,news:[{category:`テックインサイト`,title:`ビジネスにおけるAIの未来`,description:`さまざまな業界でのAIの最新動向と応用事例をご紹介します。`,image:`/news-ai.webp`},{category:`デザイントレンド`,title:`ユーザー中心設計の原則`,description:`ユーザー中心設計の重要な原則と、それが製品の成功にどう役立つかを解説します。`,image:`/news-design.webp`}],ctaTitle:`ビジネス変革の準備はできていますか？`,ctaButton:`お問い合わせ`},services:{pageTitle:`サービス一覧`,pageSubtitle:`トリオタスは、革新的なテクノロジーソリューションを通じてビジネスを支援する包括的なサービスを提供しています。戦略的なコンサルティングから最先端のAIアプリケーションまで、お客様の目標達成をサポートします。`,sections:[{title:`コンサルティング＆戦略`,cards:[{icon:`presentation-chart`,title:`情報システムコンサルティング`,description:`情報システムの最適化に関する専門的なガイダンスを提供します。`},{icon:`gear`,title:`コンピュータソフトウェアソリューション`,description:`計画から保守まで包括的なソフトウェアソリューションを提供します。`},{icon:`cloud`,title:`クラウドサービス戦略`,description:`お客様のニーズに合わせたクラウドサービスの戦略的な計画と運用を行います。`},{icon:`lightbulb`,title:`ビジネス効率化`,description:`システム開発とサポートでビジネスプロセスを効率化します。`}]},{title:`開発＆実装`,cards:[{icon:`globe`,title:`ウェブ・アプリ開発`,description:`成果を生み出すウェブサイトとウェブアプリケーションの作成・管理を行います。`},{icon:`app-window`,title:`ITインフラ管理`,description:`堅牢なITインフラの設計・構築・サポートを提供します。`},{icon:`device-mobile`,title:`モバイルアプリケーションソリューション`,description:`コンセプトから配信まで革新的なモバイルアプリケーションを開発します。`},{icon:`code`,title:`プログラミング教育・研修`,description:`ITの人材育成とプログラミングスキル向上のためのトレーニングとコースを提供します。`}]},{title:`AI＆先端技術`,cards:[{icon:`video`,title:`オンライン学習コンテンツ`,description:`継続的な専門能力開発のための魅力的なオンライン学習コンテンツを提供します。`},{icon:`robot`,title:`AI・機械学習サービス`,description:`AIと機械学習の力を活用した革新的なソリューションを提供します。`},{icon:`chart-line`,title:`AIデータ分析`,description:`高度なAI技術によるデータ分析とビジネス自動化を実現します。`},{icon:`headset`,title:`技術応用システム`,description:`AIチャットボット、画像認識、自然言語処理システムを開発します。`}]},{title:`運用＆サポート`,cards:[{icon:`users`,title:`セルフメディア管理`,description:`YouTubeやブログなどのセルフメディアプラットフォームの企画・管理を行います。`},{icon:`briefcase`,title:`ITタスクアウトソーシング`,description:`効率性とコスト効果のためのITタスクのアウトソーシングを行います。`},{icon:`list-checks`,title:`ビジネスプロセス最適化`,description:`設計、最適化、アウトソーシングサポートを通じてビジネスプロセスを改善します。`},{icon:`gear`,title:`包括的サポート`,description:`すべてのサービスと関連活動に対する完全な運用サポートを提供します。`}]}],ctaTitle:`ビジネス変革の準備はできていますか？`,ctaSubtitle:`トリオタスのサービスがお客様のビジネス目標達成にどのように貢献できるか、今すぐお問い合わせください。`,ctaButton:`お問い合わせ`},cases:{pageTitle:`導入事例`,items:[{client:`JVR Music`,title:`音楽レーベルのデジタルプレゼンス強化`,description:`著名な音楽レーベルJVR Musicのデジタルプレゼンスを刷新し、モダンで使いやすいウェブサイトを開発しました。ソーシャルメディア機能の統合、コンテンツ配信の強化、モバイルデバイスへの最適化を実施しました。使用技術はReact、Node.js、ヘッドレスCMS。ウェブサイトのトラフィックが50%増加しました。`,image:`/cases/case_jvr.webp`},{client:`Simmons Taiwan`,title:`ブランドのEコマース最適化`,description:`Simmons Taiwanのeコマースプラットフォームを最適化し、ユーザー体験と販売効率を改善しました。ウェブサイトの完全リデザイン、高度な検索・フィルタリング機能の実装、新しい決済ゲートウェイとの統合を実施しました。使用技術はVue.js、.NET Core、SQLServer。コンバージョン率が20%改善し、平均注文額が10%増加しました。`,image:`/cases/case_simmons.webp`},{client:`VDS`,title:`小売スタートアップ向けスケーラブルプラットフォーム開発`,description:`小売スタートアップのVDSと提携し、革新的な製品向けのスケーラブルで堅牢なプラットフォームを開発しました。マイクロサービスアーキテクチャの構築、リアルタイムデータ処理の実装、高可用性の確保に注力しました。使用技術はGo、Kubernetes、Kafka。ローンチ初年度でユーザーベースが10倍に成長しました。`,image:`/cases/case_vds.webp`}],viewAll:`お問い合わせ`,contactUs:`お問い合わせ`},about:{pageTitle:`トリオタスについて`,intro:`トリオタスは、革新的なシステムアーキテクチャコンサルティング、オーダーメイドのソフトウェア・アプリ設計、最先端のAI技術を通じてテック業界に革命を起こす、ダイナミックなスタートアップです。現在のニーズを満たすだけでなく、将来の課題も見据えたソリューションでビジネスを支援し、持続的な成長と競争優位性を確保することが私たちのミッションです。`,storyTitle:`私たちのストーリー`,story:`2025年に経験豊富なテックエキスパートのチームによって設立されたトリオタスは、複雑な技術的可能性と実践的なビジネスアプリケーションの架け橋となる共通ビジョンから生まれました。テックコンサルティングと開発においてより機敏でクライアント中心のアプローチの必要性を認識し、イノベーション、コラボレーション、具体的な成果を優先する会社を設立しました。`,teamTitle:`チーム`,team:[{name:`ブルース・ツァイ`,role:`CEO & 創業者`},{name:`霧棲`,role:`アーキテクチャ開発`,isAI:!0},{name:`Sop`,role:`プロダクト企画・市場インサイト`,isAI:!0},{name:`月乃`,role:`エグゼクティブアシスタント`,isAI:!0}],teamDescription:`私たちのチームは業界のベテランと新進気鋭の人材で構成されており、それぞれがユニークなスキルと経験を持ち寄っています。戦略的コンサルティングから実践的な開発まで、専門家たちは卓越した成果を提供し、クライアントの成功を推進することにコミットしています。`,valuesTitle:`私たちの価値観`,values:[{icon:`lightbulb`,title:`イノベーション`,description:`私たちは創造性を重んじ、問題解決の新しい方法を常に探求し、テクノロジーの限界を押し広げます。`},{icon:`users`,title:`コラボレーション`,description:`私たちはチームワークの力を信じ、共有の目標を達成するためにクライアントと緊密に連携します。`},{icon:`rocket`,title:`エクセレンス`,description:`私たちは期待を超え、意義ある影響をもたらす高品質なソリューションの提供に専念しています。`}],ctaTitle:`最先端技術でビジネスを変革する準備はできていますか？`,ctaSubtitle:`プロジェクトについて話し合い、トリオタスがどのようにお客様の目標達成に貢献できるかを探るために、今すぐお問い合わせください。`,ctaButton:`お問い合わせ`},contact:{pageTitle:`お問い合わせ`,pageSubtitle:`ご質問やサポートについて、お気軽にお問い合わせください。`,namePlaceholder:`お名前`,emailPlaceholder:`メールアドレス`,subjectPlaceholder:`件名`,messagePlaceholder:`メッセージ`,nameLabel:`お名前`,emailLabel:`メールアドレス`,subjectLabel:`件名`,messageLabel:`メッセージ`,submit:`送信`},careers:{pageTitle:`トリオタス 採用情報`,introTitle:`仲間を募集しています`,intro:`トリオタスでは、テクノロジーを通じて本当のインパクトを生み出したいという情熱を持った仲間を探しています。透明性が高く、フラットで、イノベーションを重視する環境で力を発揮したい方、ぜひご連絡ください。`,valuesTitle:`私たちの価値観`,values:[{icon:`users`,title:`透明なコミュニケーション`,description:`私たちは、情報の透明性と対話を何よりも大切にしています。小さな違和感や懸念も早めに共有し、立場に関係なくフラットに議論できる環境を整えています。オープンなコミュニケーションこそが、チームの信頼関係を築き、より良いプロダクトを生み出す最短距離です。`},{icon:`users`,title:`平等と心理的安全性`,description:`年齢・国籍・経歴に関わらず、すべてのメンバーが平等に発言し、活躍できる組織を目指しています。重視するのは「誰が言ったか」ではなく「何を言ったか」です。多様なバックグラウンドを持つメンバーが互いの専門性を尊重し、心理的安全性の高いチームを構築しています。`},{icon:`rocket`,title:`エンドツーエンドのオーナーシップ`,description:`単に依頼されたタスクをこなすだけではなく、その先にある「ビジネスの成功」に責任を持ちます。技術選定や設計の段階から、リリース後の運用・改善まで、一貫してオーナーシップを持って取り組みます。`},{icon:`lightbulb`,title:`創造的イノベーション`,description:`既存の枠組みに囚われない創造的なアプローチを歓迎します。最新のAI技術やアーキテクチャを積極的に取り入れ、失敗を恐れずに新しい技術に挑戦し、常に「もっと良い方法はないか」と問い続けます。`},{icon:`gear`,title:`柔軟で自律的な働き方`,description:`成果を最大化するために、柔軟な働き方を推奨しています。個々のライフスタイルや集中できる環境に合わせて、自律的に働く場所や時間を選択できます。リモートワークを基盤とし、非同期コミュニケーションで高い生産性を維持しています。`},{icon:`globe`,title:`越境するコラボレーション`,description:`自分の専門領域だけに閉じこもることはしません。エンジニアがビジネスモデルを考え、デザイナーがシステム構造に関心を持つような「越境」を推奨しています。職種の境界を越えることで、より多角的な視点から本質的な課題解決が可能になります。`}],cultureTitle:`文化と福利厚生`,cultureItems:[`フルリモートワーク環境`,`フルフレックス制度（コアタイム 11:00-15:00）`,`フラットな組織構造`,`最先端のAI・クラウド技術に携わる機会`,`多言語・国際的なチーム（日本語・英語）`,`継続的な学習と専門能力開発のサポート`],applyTitle:`一緒に働きませんか？`,applySubtitle:`ご興味のある方は、ぜひお気軽にお問い合わせください。履歴書と自己紹介をお送りください。`,applyButton:`お問い合わせ`},language:{title:`Select Language / 言語を選択`,subtitle:`Choose your preferred language / お好みの言語を選択してください`,en:{name:`English`,desc:`English version`,flag:`🇺🇸`,href:`#/`},jp:{name:`日本語`,desc:`日本語版`,flag:`🇯🇵`,href:`#/jp/`}}},He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t}),We=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ge=class extends We{constructor(e){if(super(e),this.it=T,e.type!==He.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===w)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ge.directiveName=`unsafeHTML`,Ge.resultType=1;var N=Ue(Ge),Ke=`<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
</svg>`,qe=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
</svg>`,Je=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,84A12,12,0,1,1,68,72,12,12,0,0,1,80,84Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84Z"></path>
</svg>`,Ye=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
</svg>`,Xe=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
</svg>`,Ze=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"></path>
</svg>`,Qe=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
</svg>`,$e=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
</svg>`,et=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path>
</svg>`,tt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
</svg>`,nt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
</svg>`,rt=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
</svg>`,it=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
</svg>`,P=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
</svg>`,at=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
</svg>`,ot=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path>
</svg>`,st=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
</svg>`,ct=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
  <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path>
</svg>`;function F(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var I=class extends k{constructor(...e){super(...e),this.lang=`en`,this.theme=`dark`,this.data={brand:`Triotous`,nav:[],getStarted:`Get Started`},this._menuOpen=!1,this._toggleTheme=()=>{let e=this.getRootNode().host;if(!e)return;let t=e.theme===`dark`?`light`:`dark`;e.theme=t;try{window.localStorage.setItem(`triotous-theme`,t)}catch{}}}static{this.styles=o`
    :host { display: block; }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      border-bottom: 1px solid var(--border);
      padding: 16px 24px;
      gap: 1rem;
      background: var(--header-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .header-brand { display: flex; align-items: center; gap: 14px; color: var(--text-primary); }
    .header-logo-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      flex-shrink: 0;
    }
    .header-logo {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    .header-brand-name {
      font-size: 18px; font-weight: 700; color: var(--text-primary); text-decoration: none; letter-spacing: -0.02em;
    }
    .header-right { display: flex; flex: 1; justify-content: flex-end; gap: 32px; align-items: center; }
    .header-nav { display: flex; align-items: center; gap: 32px; }
    .header-nav-link {
      color: var(--text-secondary); font-size: 14px; font-weight: 500; text-decoration: none;
      transition: color 0.2s ease;
    }
    .header-nav-link:hover { color: var(--accent); }
    .header-actions { display: flex; gap: 8px; }
    .header-lang-btn,
    .header-theme-btn {
      display: flex; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; min-width: 40px; padding: 0 12px; background: var(--accent-soft); color: var(--text-secondary); text-decoration: none; border: 1px solid transparent;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
    }
    .header-lang-btn:hover,
    .header-theme-btn:hover { background: var(--accent-soft-strong); color: var(--accent); border-color: var(--border-strong); transform: translateY(-1px); }
    .header-theme-btn {
      gap: 8px;
      font-size: 13px;
      font-weight: 600;
      min-width: 92px;
    }
    .theme-icon {
      font-size: 16px;
      line-height: 1;
    }
    .hamburger {
      display: none;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 24px;
      color: var(--text-primary);
      padding: 4px 8px;
      line-height: 1;
    }
    .mobile-nav {
      display: none;
    }

    @media (max-width: 768px) {
      .header { padding: 12px 16px; }
      .header-nav { display: none; }
      .hamburger { display: flex; align-items: center; }
      .mobile-nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        padding: 8px 0;
        z-index: 100;
        box-shadow: var(--shadow-md);
      }
      .mobile-nav[hidden] { display: none; }
      .mobile-nav-link {
        color: var(--text-primary);
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 14px 24px;
        border-bottom: 1px solid var(--border);
        transition: background 0.15s ease;
      }
      .mobile-nav-link:last-child { border-bottom: none; }
      .mobile-nav-link:hover { background: var(--surface-muted); color: var(--accent); }
    }

    @media (max-width: 900px) and (min-width: 769px) {
      .header { padding: 14px 20px; }
      .header-nav { gap: 20px; }
    }
  `}_toggleMenu(){this._menuOpen=!this._menuOpen}_closeMenu(){this._menuOpen=!1}render(){let e=this.lang===`jp`?`#/jp/`:`#/`,t=this.theme===`dark`?this.lang===`jp`?`ライト`:`Light`:this.lang===`jp`?`ダーク`:`Dark`,n=this.theme===`dark`?this.lang===`jp`?`ライトテーマに切り替え`:`Switch to light theme`:this.lang===`jp`?`ダークテーマに切り替え`:`Switch to dark theme`,r=this.theme===`dark`?`☀`:`☾`;return C`
      <header class="header">
        <div class="header-brand">
          <div class="header-logo-wrap">
            <img class="header-logo" src="/icons/icon-192.webp" alt="Triotous logo" />
          </div>
          <a class="header-brand-name" href="${e}">${this.data.brand}</a>
        </div>
        <div class="header-right">
          <nav class="header-nav">
            ${this.data.nav.map(e=>C`<a class="header-nav-link" href="${e.href}">${e.label}</a>`)}
          </nav>
          <div class="header-actions">
            <button
              class="header-theme-btn"
              @click=${this._toggleTheme}
              title=${n}
              aria-label=${n}
            >
              <span class="theme-icon" aria-hidden="true">${r}</span>
              <span>${t}</span>
            </button>
            <a class="header-lang-btn" href="${`#/language`}" title="Change language">${N(Ke)}</a>
          </div>
          <button class="hamburger" @click=${this._toggleMenu} aria-label="Toggle menu">☰</button>
        </div>
        <nav class="mobile-nav" ?hidden=${!this._menuOpen}>
          ${this.data.nav.map(e=>C`<a class="mobile-nav-link" href="${e.href}" @click=${this._closeMenu}>${e.label}</a>`)}
        </nav>
      </header>
    `}};F([j({type:String})],I.prototype,`lang`,void 0),F([j({type:String})],I.prototype,`theme`,void 0),F([j({type:Object})],I.prototype,`data`,void 0),F([M()],I.prototype,`_menuOpen`,void 0),I=F([A(`trio-header`)],I);var L=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={privacyPolicy:`Privacy Policy`,termsOfService:`Terms of Service`,copyright:`© 2025 Triotous. All rights reserved.`}}static{this.styles=o`
    :host {
      display: block;
    }
    .footer-outer {
      display: flex;
      justify-content: center;
      border-top: 1px solid var(--border);
      margin-top: 2.5rem;
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
      gap: 16px;
      padding: 2.5rem 24px;
      text-align: center;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }
    .footer-link {
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .footer-link:hover {
      color: var(--accent);
    }
    .footer-copyright {
      color: var(--text-faint);
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }
  `}render(){let e=this.lang===`jp`?`#/jp/privacy`:`#/privacy`,t=this.lang===`jp`?`#/jp/terms`:`#/terms`;return C`
      <div class="footer-outer">
        <div class="footer-inner">
          <div class="footer-content">
            <div class="footer-links">
              <a class="footer-link" href="${e}">${this.data.privacyPolicy}</a>
              <a class="footer-link" href="${t}">${this.data.termsOfService}</a>
            </div>
            <p class="footer-copyright">${this.data.copyright}</p>
          </div>
        </div>
      </div>
    `}};F([j({type:String})],L.prototype,`lang`,void 0),F([j({type:Object})],L.prototype,`data`,void 0),L=F([A(`trio-footer`)],L);var R=class extends k{constructor(...e){super(...e),this.title=``,this.subtitle=``,this.buttonText=``,this.buttonHref=``,this.backgroundImage=`/hero-en.webp`}static{this.styles=o`
    :host { display: block; }
    .hero-container { padding: 24px; }
    .hero-banner {
      position: relative;
      display: flex;
      min-height: 520px;
      flex-direction: column;
      gap: 24px;
      border-radius: 0.75rem;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 48px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
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
      background: var(--hero-overlay);
    }
    .hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 28px; align-items: flex-start; }
    .hero-text { display: flex; flex-direction: column; gap: 12px; }
    .hero-title {
      color: white; font-size: clamp(32px, 5vw, 48px); font-weight: 700;
      line-height: 1.1; letter-spacing: -0.02em; margin: 0;
    }
    .hero-subtitle { color: rgba(255,255,255,0.9); font-size: 18px; line-height: 1.6; margin: 0; max-width: 640px; }
    .hero-btn {
      display: inline-flex; min-width: 84px; align-items: center; justify-content: center;
      border-radius: 9999px; height: 48px; padding: 0 28px; background: var(--accent); color: var(--accent-contrast);
      font-size: 16px; font-weight: 600; letter-spacing: 0.015em; text-decoration: none;
      transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
    }
    .hero-btn:hover { background: var(--accent-strong); box-shadow: var(--shadow-md); transform: translateY(-1px); }
    @media (max-width: 768px) {
      .hero-container { padding: 16px; }
      .hero-banner { min-height: 360px; padding: 28px 20px; }
      .hero-title { font-size: 28px; }
      .hero-subtitle { font-size: 16px; }
    }
  `}render(){return C`
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
    `}};F([j({type:String})],R.prototype,`title`,void 0),F([j({type:String})],R.prototype,`subtitle`,void 0),F([j({type:String})],R.prototype,`buttonText`,void 0),F([j({type:String})],R.prototype,`buttonHref`,void 0),F([j({type:String})],R.prototype,`backgroundImage`,void 0),R=F([A(`trio-hero`)],R);var lt={gear:qe,"app-window":Je,robot:Ye,"presentation-chart":Xe,cloud:Ze,lightbulb:Qe,globe:$e,"device-mobile":et,code:tt,video:nt,"chart-line":rt,headset:it,users:P,briefcase:at,"list-checks":ot,user:st,rocket:ct};function ut(e){return lt[e]||lt.gear}var z=class extends k{constructor(...e){super(...e),this.icon=`gear`,this.title=``,this.description=``}static{this.styles=o`
    :host {
      display: flex;
      flex: 1;
    }
    .service-card {
      display: flex;
      flex: 1;
      gap: 12px;
      border-radius: 0.75rem;
      border: 1px solid var(--border);
      background: var(--surface);
      padding: 20px;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.2s ease, border-color 0.25s ease;
    }
    .service-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
      border-color: var(--border-strong);
    }
    .service-card-icon {
      color: var(--accent);
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
      gap: 6px;
    }
    .service-card-title {
      color: var(--text-primary);
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3;
      margin: 0;
    }
    .service-card-description {
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
    }
  `}render(){return C`
      <div class="service-card">
        <div class="service-card-icon">${N(ut(this.icon))}</div>
        <div class="service-card-body">
          <h2 class="service-card-title">${this.title}</h2>
          <p class="service-card-description">${this.description}</p>
        </div>
      </div>
    `}};F([j({type:String})],z.prototype,`icon`,void 0),F([j({type:String})],z.prototype,`title`,void 0),F([j({type:String})],z.prototype,`description`,void 0),z=F([A(`trio-service-card`)],z);var dt=class extends k{constructor(...e){super(...e),this.services=[]}static{this.styles=o`
    :host {
      display: block;
    }
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      padding: 0;
    }
    @media (max-width: 768px) {
      .service-grid { grid-template-columns: 1fr; }
    }
  `}render(){return C`
      <div class="service-grid">
        ${this.services.map(e=>C`
          <trio-service-card
            .icon="${e.icon}"
            .title="${e.title}"
            .description="${e.description}"
          ></trio-service-card>
        `)}
      </div>
    `}};F([j({type:Array})],dt.prototype,`services`,void 0),dt=F([A(`trio-service-grid`)],dt);var B=class extends k{constructor(...e){super(...e),this.image=``,this.title=``,this.description=``,this.client=``,this.horizontal=!1,this.lang=`en`}static{this.styles=o`
    :host { display: block; width: 100%; }

    /* Vertical layout (Home page) */
    .case-card { display: flex; flex-direction: column; gap: 14px; border-radius: 0.75rem; min-width: 240px; }
    .case-card-image-wrap {
      width: 100%; aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden; background: var(--surface-strong);
      box-shadow: var(--image-shadow);
    }
    .case-card-image {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform 0.3s ease;
    }
    .case-card:hover .case-card-image { transform: scale(1.03); }
    .case-card-body { display: flex; flex-direction: column; gap: 6px; }
    .case-card-client { color: var(--text-muted); font-size: 12px; font-weight: 600; margin: 0; letter-spacing: 0.03em; text-transform: uppercase; }
    .case-card-title { color: var(--text-primary); font-size: 16px; font-weight: 600; line-height: 1.4; margin: 0; }
    .case-card-description { color: var(--text-muted); font-size: 14px; line-height: 1.5; margin: 0; }

    /* Horizontal layout (Cases page) */
    .case-card.horizontal {
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid var(--border);
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
      color: var(--text-primary);
      text-transform: none;
      letter-spacing: -0.01em;
    }
    .case-card.horizontal .case-card-title {
      font-size: 16px;
      font-weight: 400;
      color: var(--text-secondary);
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
  `}render(){let e=this.lang===`jp`?`#/jp/cases`:`#/cases`;return C`
      <div class="case-card ${this.horizontal?`horizontal`:``}">
        <div class="case-card-image-wrap">
          <a href="${e}">
            <img class="case-card-image" src="${this.image}" alt="${this.title}" />
          </a>
        </div>
        <div class="case-card-body">
          ${this.client?C`<p class="case-card-client">${this.client}</p>`:``}
          <p class="case-card-title"><a href="${e}" style="text-decoration: none; color: inherit;">${this.title}</a></p>
          <p class="case-card-description">${this.description}</p>
        </div>
      </div>
    `}};F([j({type:String})],B.prototype,`image`,void 0),F([j({type:String})],B.prototype,`title`,void 0),F([j({type:String})],B.prototype,`description`,void 0),F([j({type:String})],B.prototype,`client`,void 0),F([j({type:Boolean})],B.prototype,`horizontal`,void 0),F([j({type:String})],B.prototype,`lang`,void 0),B=F([A(`trio-case-card`)],B);var V=class extends k{constructor(...e){super(...e),this.cases=[],this.scrollable=!1,this.lang=`en`}static{this.styles=o`
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
      padding: 0.5rem 24px 1rem;
      gap: 16px;
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
  `}render(){let e=!this.scrollable;return C`
      <div class="${this.scrollable?`case-list-scrollable`:`case-list-vertical`}">
        <div class="case-list-inner">
          ${this.cases.map(t=>C`
            <trio-case-card
              .image="${t.image}"
              .title="${t.title}"
              .description="${t.description}"
              .client="${t.client||``}"
              .horizontal="${e}"
              .lang="${this.lang}"
            ></trio-case-card>
          `)}
        </div>
      </div>
    `}};F([j({type:Array})],V.prototype,`cases`,void 0),F([j({type:Boolean})],V.prototype,`scrollable`,void 0),F([j({type:String})],V.prototype,`lang`,void 0),V=F([A(`trio-case-list`)],V);var H=class extends k{constructor(...e){super(...e),this.category=``,this.title=``,this.description=``,this.image=``}static{this.styles=o`
    :host { display: block; }
    .news-item {
      display: flex; align-items: stretch; justify-content: space-between; gap: 20px;
      border-radius: 0.75rem; padding: 20px;
      border: 1px solid transparent;
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    .news-item:hover { background: var(--surface-muted); border-color: var(--border); }
    .news-item-text { display: flex; flex-direction: column; gap: 6px; flex: 2; }
    .news-item-category { color: var(--accent); font-size: 12px; font-weight: 600; line-height: 1.5; margin: 0; letter-spacing: 0.05em; text-transform: uppercase; }
    .news-item-description { color: var(--text-muted); font-size: 14px; line-height: 1.5; margin: 0; }
    .news-item-title { color: var(--text-primary); font-size: 16px; font-weight: 600; line-height: 1.3; margin: 0; }
    .news-item-image-wrap { flex: 1; aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden; box-shadow: var(--image-shadow); }
    .news-item-image { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease; }
    .news-item:hover .news-item-image { transform: scale(1.03); }
    @media (max-width: 768px) {
      .news-item { flex-direction: column; padding: 16px; }
      .news-item-image-wrap { aspect-ratio: 16/9; }
    }
  `}render(){return C`<div class="news-item"><div class="news-item-text"><p class="news-item-category">${this.category}</p><p class="news-item-title">${this.title}</p><p class="news-item-description">${this.description}</p></div><div class="news-item-image-wrap"><img class="news-item-image" src="${this.image}" alt="${this.title}" /></div></div>`}};F([j({type:String})],H.prototype,`category`,void 0),F([j({type:String})],H.prototype,`title`,void 0),F([j({type:String})],H.prototype,`description`,void 0),F([j({type:String})],H.prototype,`image`,void 0),H=F([A(`trio-news-item`)],H);var U=class extends k{constructor(...e){super(...e),this.title=``,this.subtitle=``,this.buttonText=``,this.buttonHref=``,this.lang=`en`}static{this.styles=o`
    :host { display: block; }
    .cta-wrap { padding: 2.5rem 24px; }
    .cta-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 28px;
      padding: 3rem 2rem;
      background: var(--cta-gradient);
      border-radius: 0.75rem;
      border: 1px solid var(--border);
    }
    .cta-text { display: flex; flex-direction: column; gap: 12px; text-align: center; align-items: center; }
    .cta-title {
      color: var(--text-primary);
      font-size: 28px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin: 0;
      max-width: 640px;
    }
    @media (max-width: 768px) {
      .cta-title { font-size: 22px; }
      .cta-box { padding: 2rem 1.5rem; }
      .cta-wrap { padding: 1.5rem 16px; }
    }
    .cta-subtitle {
      color: var(--text-secondary);
      font-size: 16px;
      line-height: 1.6;
      margin: 0;
      max-width: 640px;
    }
    .cta-action { display: flex; justify-content: center; }
    .cta-button {
      display: inline-flex;
      min-width: 120px;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 48px;
      padding: 0 28px;
      background: var(--accent);
      color: var(--accent-contrast);
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.015em;
      text-decoration: none;
      transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
    }
    .cta-button:hover { background: var(--accent-strong); box-shadow: var(--shadow-md); transform: translateY(-1px); }
  `}render(){let e=this.buttonHref||(this.lang===`jp`?`#/jp/contact`:`#/contact`);return C`
      <div class="cta-wrap">
        <div class="cta-box">
          <div class="cta-text">
            <h2 class="cta-title">${this.title}</h2>
            ${this.subtitle?C`<p class="cta-subtitle">${this.subtitle}</p>`:``}
          </div>
          <div class="cta-action">
            <a class="cta-button" href="${e}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `}};F([j({type:String})],U.prototype,`title`,void 0),F([j({type:String})],U.prototype,`subtitle`,void 0),F([j({type:String})],U.prototype,`buttonText`,void 0),F([j({type:String})],U.prototype,`buttonHref`,void 0),F([j({type:String})],U.prototype,`lang`,void 0),U=F([A(`trio-cta-section`)],U);var W=class extends k{constructor(...e){super(...e),this.data={},this.lang=`en`}static{this.styles=o`
    :host { display: block; }
    .section-title {
      color: var(--accent); font-size: 12px; font-weight: 600; line-height: 1;
      letter-spacing: 0.05em; text-transform: uppercase;
      padding: 2.5rem 24px 1rem; margin: 0;
    }
    .intro-wrap { display: flex; flex-direction: column; gap: 2rem; padding: 1rem 24px 2rem; }
    .intro-head { display: flex; flex-direction: column; gap: 12px; }
    .intro-title { color: var(--text-primary); font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; margin: 0; max-width: 640px; }
    .intro-desc { color: var(--text-secondary); font-size: 16px; line-height: 1.6; margin: 0; max-width: 640px; }
    .news-list { display: flex; flex-direction: column; }
    @media (max-width: 768px) {
      .section-title { padding: 2rem 16px 0.75rem; }
      .intro-wrap { padding: 0.75rem 16px 1.5rem; gap: 1.5rem; }
      .intro-title { font-size: 22px; }
      .intro-desc { font-size: 14px; }
    }
  `}render(){let e=this.data;if(!e)return C`<div>Loading...</div>`;let t=this.lang===`jp`?`#/jp/services`:`#/services`,n=this.lang===`jp`?`#/jp/contact`:`#/contact`,r=this.lang===`jp`?`/hero-jp.webp`:`/hero-en.webp`;return C`
      <trio-hero .title=${e.heroTitle} .subtitle=${e.heroSubtitle} .buttonText=${e.heroButton} .buttonHref=${t} .backgroundImage=${r}></trio-hero>
      <h2 class="section-title">${e.expertiseTitle}</h2>
      <div class="intro-wrap"><div class="intro-head"><h2 class="intro-title">${e.expertiseSubtitle}</h2><p class="intro-desc">${e.expertiseDescription}</p></div><trio-service-grid .services=${e.services}></trio-service-grid></div>
      <h2 class="section-title">${e.casesTitle}</h2>
      <trio-case-list .cases=${e.cases} .scrollable=${!0}></trio-case-list>
      <h2 class="section-title">${e.newsTitle}</h2>
      <div class="news-list">${e.news.map(e=>C`<trio-news-item .category=${e.category} .title=${e.title} .description=${e.description} .image=${e.image}></trio-news-item>`)}</div>
      <trio-cta-section .title=${e.ctaTitle} .buttonText=${e.ctaButton} .buttonHref=${n} tone="blue"></trio-cta-section>
    `}};F([j({type:Object})],W.prototype,`data`,void 0),F([j({type:String})],W.prototype,`lang`,void 0),W=F([A(`page-home`)],W);var G=class extends k{constructor(...e){super(...e),this.data={},this.lang=`en`}static{this.styles=o`
    :host { display: block; }
    .page-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding: 2rem 24px; }
    .page-head-box { display: flex; min-width: 288px; flex-direction: column; gap: 12px; }
    .page-title { color: var(--text-primary); font-size: 32px; font-weight: 700; line-height: 1.1; margin: 0; letter-spacing: -0.02em; }
    .page-subtitle { color: var(--text-muted); font-size: 16px; line-height: 1.6; margin: 0; }
    .section-title {
      color: var(--accent); font-size: 12px; font-weight: 600; line-height: 1;
      letter-spacing: 0.05em; text-transform: uppercase;
      padding: 2.5rem 24px 1rem; margin: 0;
    }
    .grid-wrap { padding: 0.5rem 24px 1rem; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .page-head { padding: 1.5rem 16px; }
      .page-head-box { min-width: 0; }
      .section-title { padding: 2rem 16px 0.75rem; }
      .grid-wrap { padding: 0.5rem 16px 1rem; }
    }
  `}render(){let e=this.data;if(!e)return C`<div>Loading...</div>`;let t=this.lang===`jp`?`#/jp/contact`:`#/contact`;return C`<div class="page-head"><div class="page-head-box"><p class="page-title">${e.pageTitle}</p><p class="page-subtitle">${e.pageSubtitle}</p></div></div>${e.sections.map(e=>C`<h2 class="section-title">${e.title}</h2><div class="grid-wrap"><trio-service-grid .services=${e.cards}></trio-service-grid></div>`)}<trio-cta-section .title=${e.ctaTitle} .subtitle=${e.ctaSubtitle} .buttonText=${e.ctaButton} .buttonHref=${t} tone="blue"></trio-cta-section>`}};F([j({type:Object})],G.prototype,`data`,void 0),F([j({type:String})],G.prototype,`lang`,void 0),G=F([A(`page-services`)],G);var K=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={}}static{this.styles=o`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem 0 1.5rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
      min-width: 288px;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; min-width: 0; }
      .container { padding: 0 16px; }
    }
    .footer-actions {
      display: flex;
      justify-content: center;
      padding: 2rem 0;
    }
    .btn-contact {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.75rem;
      padding: 0 2rem;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.015em;
      border: none;
      text-decoration: none;
      background-color: var(--accent);
      color: var(--accent-contrast);
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-contact:hover {
      background-color: var(--accent-strong);
      box-shadow: var(--shadow-md);
    }
  `}render(){return C`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>

        <trio-case-list .cases=${this.data.items} .scrollable=${!1} .lang=${this.lang}></trio-case-list>

        <div class="footer-actions">
          <a href="${this.lang===`jp`?`#/jp/contact`:`#/contact`}" class="btn-contact">
            ${this.data.contactUs}
          </a>
        </div>
      </div>
    `}};F([j({type:String})],K.prototype,`lang`,void 0),F([j({type:Object})],K.prototype,`data`,void 0),K=F([A(`page-cases`)],K);var q=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={}}static{this.styles=o`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem 0 1.5rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
      min-width: 288px;
    }
    .text-content {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.6;
      color: var(--text-secondary);
      padding: 0.25rem 0 0.75rem;
      margin: 0;
    }
    .section-heading {
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--accent);
      padding: 2.5rem 0 1rem;
      margin: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      padding: 0.5rem 0 1rem;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      border-radius: 0.75rem;
      border: 1px solid var(--border);
      background-color: var(--surface);
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.2s ease;
    }
    .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .card--ai {
      background-color: var(--surface-muted);
      border-color: var(--border-strong);
    }
    .card--ai:hover { box-shadow: var(--shadow-md); }
    .card-icon {
      color: var(--text-secondary);
      width: 24px;
      height: 24px;
    }
    .card--ai .card-icon { color: var(--accent); }
    .card-icon--ai { color: var(--accent); }
    .card-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.2;
      color: var(--text-primary);
      margin: 0;
    }
    .card-desc {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: var(--text-muted);
      margin: 0;
    }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent);
      background: var(--accent-soft-strong);
      border-radius: 4px;
      padding: 2px 6px;
      margin-top: 4px;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; min-width: 0; }
      .container { padding: 0 16px; }
      .grid { grid-template-columns: 1fr; }
      .text-content { font-size: 14px; }
    }
  `}render(){return C`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.storyTitle}</h2>
        <p class="text-content">${this.data.story}</p>

        <h2 class="section-heading">${this.data.teamTitle}</h2>
        <div class="grid">
          ${this.data.team.map(e=>C`
            <div class="card ${e.isAI?`card--ai`:``}">
              <div class="card-icon ${e.isAI?`card-icon--ai`:``}">${N(e.isAI?Ye:st)}</div>
              <div class="title-group">
                <h3 class="card-title">${e.name}</h3>
                <p class="card-desc">${e.role}</p>
                ${e.isAI?C`<span class="badge">Digital Employee</span>`:``}
              </div>
            </div>
          `)}
        </div>
        <p class="text-content">${this.data.teamDescription}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="grid">
          ${this.data.values.map(e=>C`
            <div class="card">
              <div class="card-icon">
                <!-- Simple mapping for icons -->
                ${e.icon===`lightbulb`?N(Qe):``}
                ${e.icon===`users`?N(P):``}
                ${e.icon===`rocket`?N(ct):``}
              </div>
              <div class="title-group">
                <h3 class="card-title">${e.title}</h3>
                <p class="card-desc">${e.description}</p>
              </div>
            </div>
          `)}
        </div>

        <trio-cta-section 
          .title=${this.data.ctaTitle} 
          .subtitle=${this.data.ctaSubtitle}
          .buttonText=${this.data.ctaButton}
          .buttonHref=${this.lang===`jp`?`#/jp/contact`:`#/contact`}
          .lang=${this.lang}>
        </trio-cta-section>
      </div>
    `}};F([j({type:String})],q.prototype,`lang`,void 0),F([j({type:Object})],q.prototype,`data`,void 0),q=F([A(`page-about`)],q);var ft=`https://formspree.io/f/mreyloqo`,J=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={},this._status=`idle`,this._errorMessage=``}static{this.styles=o`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem 0 1.5rem;
    }
    .title-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 288px;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
    }
    .page-subtitle {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.6;
      color: var(--text-muted);
      margin: 0;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.5rem 0;
      max-width: 520px;
    }
    .field-label {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--text-primary);
      padding-bottom: 0.25rem;
      margin: 0;
    }
    .form-input {
      display: flex;
      width: 100%;
      min-width: 0;
      flex: 1;
      border-radius: 0.5rem;
      color: var(--text-primary);
      border: 1px solid var(--border);
      background-color: var(--surface);
      height: 3rem;
      padding: 0.75rem 1rem;
      font-size: 16px;
      font-family: inherit;
      box-sizing: border-box;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: var(--focus-ring);
    }
    .form-textarea {
      min-height: 9rem;
      resize: none;
    }
    .btn-container {
      display: flex;
      padding: 1rem 0;
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
      height: 2.75rem;
      padding: 0 2rem;
      background-color: var(--accent);
      color: var(--accent-contrast);
      font-size: 14px;
      font-weight: 600;
      border: none;
      font-family: inherit;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-submit:hover {
      background-color: var(--accent-strong);
      box-shadow: var(--shadow-md);
    }
    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .status-message {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
      padding: 0.5rem 0;
    }
    .status-success {
      color: var(--success);
    }
    .status-error {
      color: var(--danger);
    }
    .section-heading {
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--accent);
      padding: 2.5rem 0 1rem;
      margin: 0;
    }
    .info-text {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.6;
      color: var(--text-secondary);
      padding: 0.25rem 0 0.5rem;
      margin: 0;
    }
    .map-container {
      display: flex;
      padding: 0.75rem 0;
    }
    .map-wrapper {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: var(--image-shadow);
    }
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .title-group { min-width: 0; }
      .container { padding: 0 16px; }
    }
  `}async _handleSubmit(e){e.preventDefault(),this._status=`submitting`,this._errorMessage=``;let t=new FormData(this._form);try{let e=await fetch(ft,{method:`POST`,body:t,headers:{Accept:`application/json`}});if(e.ok)this._status=`success`,this._form.reset();else{let t=await e.json();t.errors?this._errorMessage=t.errors.map(e=>e.message).join(`, `):this._errorMessage=this.lang===`jp`?`フォームの送信中に問題が発生しました。`:`Oops! There was a problem submitting your form.`,this._status=`error`}}catch{this._errorMessage=this.lang===`jp`?`フォームの送信中に問題が発生しました。`:`Oops! There was a problem submitting your form.`,this._status=`error`}}_renderStatusMessage(){return this._status===`success`?C`<p class="status-message status-success">${this.lang===`jp`?`お問い合わせありがとうございます！`:`Thanks for your submission!`}</p>`:this._status===`error`?C`<p class="status-message status-error">${this._errorMessage}</p>`:``}render(){let e=this._status===`submitting`;return C`
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
            <button class="btn-submit" type="submit" ?disabled=${e}>
              ${e?this.lang===`jp`?`送信中...`:`Submitting...`:this.data.submit}
            </button>
          </div>
        </form>

        ${this._renderStatusMessage()}
      </div>
    `}};F([j({type:String})],J.prototype,`lang`,void 0),F([j({type:Object})],J.prototype,`data`,void 0),F([M()],J.prototype,`_status`,void 0),F([M()],J.prototype,`_errorMessage`,void 0),F([ze(`form`)],J.prototype,`_form`,void 0),J=F([A(`page-contact`)],J);var Y=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={}}static{this.styles=o`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0 0 1.5rem 0;
      padding: 1rem 0;
    }
    .content {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-secondary);
      padding: 0;
    }
    .content h3 {
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
      margin-top: 2.5rem;
      margin-bottom: 0.75rem;
    }
    .content p {
      margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .content { font-size: 14px; }
      .container { padding: 0 16px; }
    }
  `}render(){return C`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>
        <div class="content">
          ${N(this.data.content)}
        </div>
      </div>
    `}};F([j({type:String})],Y.prototype,`lang`,void 0),F([j({type:Object})],Y.prototype,`data`,void 0),Y=F([A(`page-privacy`)],Y);var X=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={}}static{this.styles=o`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0 0 1.5rem 0;
      padding: 1rem 0;
    }
    .content {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-secondary);
      padding: 0;
    }
    .content h3 {
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
      margin-top: 2.5rem;
      margin-bottom: 0.75rem;
    }
    .content p {
      margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .content { font-size: 14px; }
      .container { padding: 0 16px; }
    }
  `}render(){return C`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>
        <div class="content">
          ${N(this.data.content)}
        </div>
      </div>
    `}};F([j({type:String})],X.prototype,`lang`,void 0),F([j({type:Object})],X.prototype,`data`,void 0),X=F([A(`page-terms`)],X);var pt={users:P,rocket:ct,lightbulb:Qe,gear:qe,globe:$e},Z=class extends k{constructor(...e){super(...e),this.lang=`en`,this.data={}}static{this.styles=o`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .page-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--text-primary);
      margin: 0;
      padding: 1rem 0;
    }
    .section-heading {
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--accent);
      padding: 2.5rem 0 1rem;
      margin: 0;
    }
    .text-content {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-secondary);
      padding: 0.25rem 0 0.75rem;
      margin: 0;
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      padding: 0.5rem 0 1rem;
    }
    .value-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      border-radius: 0.75rem;
      border: 1px solid var(--border);
      background-color: var(--surface);
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.2s ease;
    }
    .value-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .value-icon {
      color: var(--accent);
      width: 24px;
      height: 24px;
    }
    .value-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }
    .value-desc {
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-muted);
      margin: 0;
    }
    .culture-list {
      padding: 0.5rem 0 0.75rem 1.5rem;
      margin: 0;
    }
    .culture-list li {
      font-size: 15px;
      line-height: 1.8;
      color: var(--text-secondary);
    }
    .json-ld { display: none; }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .container { padding: 0 16px; }
      .values-grid { grid-template-columns: 1fr; }
    }
  `}render(){return C`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>

        <h2 class="section-heading">${this.data.introTitle}</h2>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="values-grid">
          ${this.data.values?.map(e=>C`
            <div class="value-card">
              <div class="value-icon">${N(pt[e.icon]||P)}</div>
              <h3 class="value-title">${e.title}</h3>
              <p class="value-desc">${e.description}</p>
            </div>
          `)}
        </div>

        <h2 class="section-heading">${this.data.cultureTitle}</h2>
        <ul class="culture-list">
          ${this.data.cultureItems?.map(e=>C`<li>${e}</li>`)}
        </ul>

        <trio-cta-section
          .title=${this.data.applyTitle}
          .subtitle=${this.data.applySubtitle}
          .buttonText=${this.data.applyButton}
          .buttonHref=${this.lang===`jp`?`#/jp/contact`:`#/contact`}
          .lang=${this.lang}>
        </trio-cta-section>

      </div>
    `}};F([j({type:String})],Z.prototype,`lang`,void 0),F([j({type:Object})],Z.prototype,`data`,void 0),Z=F([A(`page-careers`)],Z);var Q=class extends k{constructor(...e){super(...e),this.data={}}static{this.styles=o`
    :host {
      display: block;
      height: 100vh;
      background:
        radial-gradient(circle at top left, rgb(79 70 229 / 0.12), transparent 28%),
        radial-gradient(circle at top right, rgb(56 189 248 / 0.12), transparent 22%),
        var(--app-bg);
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
      gap: 2.5rem;
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
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      letter-spacing: -0.02em;
    }
    .subtitle {
      font-size: 1rem;
      color: var(--text-muted);
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
      border: 1px solid var(--border);
      background-color: var(--surface);
      text-decoration: none;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s ease;
    }
    .card:hover {
      background-color: var(--surface-muted);
      border-color: var(--accent);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
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
      background-color: var(--accent-soft-strong);
      font-size: 1.5rem;
    }
    .lang-text {
      display: flex;
      flex-direction: column;
    }
    .lang-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }
    .lang-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin: 0;
    }
    .caret {
      color: var(--text-faint);
      transition: color 0.2s ease;
    }
    .card:hover .caret { color: var(--accent); }
  `}render(){return C`
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
    `}};F([j({type:Object})],Q.prototype,`data`,void 0),Q=F([A(`trio-language-selector`)],Q);var $=class extends k{static{this.styles=o`
    :host {
      --app-bg: #f9f9ff;
      --surface: #ffffff;
      --surface-muted: #f1f3ff;
      --surface-strong: #e9edff;
      --surface-accent: #e2dfff;
      --border: #c7c4d8;
      --border-strong: #c3c0ff;
      --text-primary: #141b2b;
      --text-secondary: #464555;
      --text-muted: #777587;
      --text-faint: #918f9a;
      --accent: #4f46e5;
      --accent-strong: #3525cd;
      --accent-contrast: #ffffff;
      --accent-soft: #e9edff;
      --accent-soft-strong: #e2dfff;
      --hero-overlay: linear-gradient(to bottom, rgb(20 27 43 / 0.05) 0%, rgb(20 27 43 / 0.55) 100%);
      --cta-gradient: linear-gradient(135deg, #e2dfff 0%, #f1f3ff 100%);
      --header-bg: color-mix(in srgb, #f9f9ff 85%, transparent);
      --shadow-sm: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      --shadow-md: 0 8px 16px -4px rgb(79 70 229 / 0.12);
      --shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1);
      --image-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.08);
      --focus-ring: 0 0 0 3px rgb(79 70 229 / 0.15);
      --success: #16a34a;
      --danger: #dc2626;
      display: block;
      min-height: 100vh;
      font-family: 'Inter', 'Noto Sans JP', 'Noto Sans', sans-serif;
      background:
        radial-gradient(circle at top left, rgb(79 70 229 / 0.12), transparent 28%),
        radial-gradient(circle at top right, rgb(56 189 248 / 0.12), transparent 22%),
        var(--app-bg);
      color: var(--text-primary);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    :host([theme='dark']) {
      --app-bg: #07111f;
      --surface: #0f1b2d;
      --surface-muted: #13233a;
      --surface-strong: #17314e;
      --surface-accent: #1c2743;
      --border: #223553;
      --border-strong: #345082;
      --text-primary: #edf3ff;
      --text-secondary: #bfd0ee;
      --text-muted: #8ea5c9;
      --text-faint: #6982aa;
      --accent: #7c8dff;
      --accent-strong: #99a7ff;
      --accent-contrast: #08111e;
      --accent-soft: #18294a;
      --accent-soft-strong: #203660;
      --hero-overlay: linear-gradient(to bottom, rgb(3 8 18 / 0.16) 0%, rgb(3 8 18 / 0.8) 100%);
      --cta-gradient: linear-gradient(135deg, #101f35 0%, #172b45 100%);
      --header-bg: color-mix(in srgb, #07111f 82%, transparent);
      --shadow-sm: 0 10px 30px -18px rgb(2 8 20 / 0.9);
      --shadow-md: 0 18px 38px -22px rgb(2 8 20 / 0.95);
      --shadow-lg: 0 24px 60px -26px rgb(2 8 20 / 0.95);
      --image-shadow: 0 18px 38px -24px rgb(2 8 20 / 0.95);
      --focus-ring: 0 0 0 3px rgb(124 141 255 / 0.22);
      --success: #4ade80;
      --danger: #f87171;
      color-scheme: dark;
    }
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 1120px;
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
  `}constructor(){super(),this.theme=this._getInitialTheme(),this.route=window.location.hash||`#/`,this.lang=this.route.startsWith(`#/jp`)?`jp`:`en`,this._handleThemeToggle=()=>{this.theme=this.theme===`dark`?`light`:`dark`;try{window.localStorage.setItem(`triotous-theme`,this.theme)}catch{}},this._syncDocumentTheme(),window.addEventListener(`hashchange`,()=>{this.route=window.location.hash||`#/`,this.lang=this.route.startsWith(`#/jp`)?`jp`:`en`,window.scrollTo(0,0)})}updated(e){e.has(`theme`)&&this._syncDocumentTheme()}_getInitialTheme(){try{return window.localStorage.getItem(`triotous-theme`)??`dark`}catch{return`dark`}}_syncDocumentTheme(){document.documentElement.style.colorScheme=this.theme,document.body.style.backgroundColor=getComputedStyle(this).getPropertyValue(`--app-bg`).trim()||``}render(){let e=this.lang===`jp`?Ve:Be;return C`
      <div class="app-container">
        ${this.route===`#/language`?C`<trio-language-selector .data=${e.language}></trio-language-selector>`:C`
            <trio-header .lang=${this.lang} .data=${e} .theme=${this.theme}></trio-header>
            <main>
              ${this.renderPage(e)}
            </main>
            <trio-footer .lang=${this.lang} .data=${e.footer}></trio-footer>
          `}
      </div>
    `}renderPage(e){switch(this.lang===`jp`?this.route.replace(`#/jp`,``)||`/`:this.route.replace(`#`,``)||`/`){case`/`:return C`<page-home .lang=${this.lang} .data=${e.home}></page-home>`;case`/services`:return C`<page-services .lang=${this.lang} .data=${e.services}></page-services>`;case`/cases`:return C`<page-cases .lang=${this.lang} .data=${e.cases}></page-cases>`;case`/about`:return C`<page-about .lang=${this.lang} .data=${e.about}></page-about>`;case`/contact`:return C`<page-contact .lang=${this.lang} .data=${e.contact}></page-contact>`;case`/privacy`:return C`<page-privacy .lang=${this.lang} .data=${e.privacy}></page-privacy>`;case`/terms`:return C`<page-terms .lang=${this.lang} .data=${e.terms}></page-terms>`;case`/careers`:return C`<page-careers .lang=${this.lang} .data=${e.careers}></page-careers>`;default:return C`<page-home .lang=${this.lang} .data=${e.home}></page-home>`}}};F([j({type:String,reflect:!0})],$.prototype,`theme`,void 0),F([M()],$.prototype,`route`,void 0),F([M()],$.prototype,`lang`,void 0),$=F([A(`trio-app`)],$);