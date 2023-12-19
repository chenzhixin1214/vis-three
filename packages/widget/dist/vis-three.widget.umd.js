(function(s,c){typeof exports=="object"&&typeof module!="undefined"?c(exports,require("@vue/reactivity"),require("@vis-three/middleware"),require("@vis-three/utils"),require("@vis-three/core")):typeof define=="function"&&define.amd?define(["exports","@vue/reactivity","@vis-three/middleware","@vis-three/utils","@vis-three/core"],c):(s=typeof globalThis!="undefined"?globalThis:s||self,c((s["vis-three"]=s["vis-three"]||{},s["vis-three"].widget={}),s.reactivity,s.middleware,s.utils,s.core))})(this,function(s,c,f,v,S){"use strict";var M=Object.defineProperty;var j=(s,c,f)=>c in s?M(s,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):s[c]=f;var r=(s,c,f)=>(j(s,typeof c!="symbol"?c+"":c,f),f);const T="0.6.0",E=function(n,e=null){return{_isVNode:!0,type:n,props:e,config:null,component:null,el:null,key:null,index:null,ref:null,children:null}},p=function(n){return typeof n=="object"?Boolean(n._isVNode):!1},o=function(n,e=null){const t=E(n,e);return t.index=o.increase(),o.add(t),t};o.index=-1,o.reset=function(){o.index=-1,o.el=null,o.vnodes=[]},o.increase=function(){return o.index+=1,o.index},o.add=function(n){return n.el=o.el,o.vnodes.push(n),o.vnodes};class C extends S.EventDispatcher{constructor(t,i){super();r(this,"cid",f.createSymbol());r(this,"name","");r(this,"options");r(this,"el","");r(this,"render");r(this,"engine");r(this,"renderer");r(this,"isMounted",!1);r(this,"setupState");r(this,"rawSetupState");r(this,"effect");r(this,"scope",new c.EffectScope(!0));r(this,"update");r(this,"subTree",null);r(this,"ctx");t.name&&(this.name=t.name),this.el=t.el,this.options=t,this.renderer=i,this.engine=i.engine,this.ctx=i.context,this.createSetup(),this.createRender(),this.createEffect()}renderTree(){return o.reset(),o.el=this.el,this.render.call(this.setupState),o.vnodes}createSetup(){const t=this.options.setup();this.setupState=c.proxyRefs(t),this.rawSetupState=t}createRender(){this.render=this.options.render}createEffect(){const t=new c.ReactiveEffect(()=>{if(this.isMounted){const h=this.renderTree(),l=this.subTree;for(let a=0;a<h.length;a+=1)this.renderer.patch(l[a],h[a])}else{const h=this.subTree=this.renderTree();for(const l of h)this.renderer.patch(null,l);this.isMounted=!0}},null,this.scope),i=()=>t.run();i(),this.effect=t,this.update=i}getState(t=!1){return t?this.rawSetupState:this.setupState}}const O=function(n){return n};class b{constructor(e){r(this,"engine");r(this,"context");this.context=e,this.engine=e.engine}log(e,t,i){t?console[e](`Widget renderer: ${t}`,i):console.info(`Widget renderer: ${e}`)}patch(e,t){e!==t&&(typeof t.type=="string"?this.processElement(e,t):this.processComponent(e,t))}render(e){this.patch(null,e)}processElement(e,t){e===null?this.mountElement(t):this.patchElement(e,t)}unmountElement(e){var t;if(f.isObjectType(e.type)&&((t=e.props)==null?void 0:t.parent)){const i=this.engine.getConfigfromModules(f.OBJECTMODULE,e.props.parent);if(!i){console.error("widget renderer: can not found parent config with: ",e);return}i.children.splice(i.children.indexOf(e.props.vid),1)}this.engine.removeConfigBySymbol(e.props.vid)}mountElement(e){const t=this.createElement(e);if(this.engine.applyConfig(t),f.isObjectType(t.type))if(!e.el)this.engine.scene.add(this.engine.getObjectfromModules(f.OBJECTMODULE,t.vid));else{const i=this.engine.getConfigfromModules(f.OBJECTMODULE,e.el);if(!i){console.error(`widget renderer: can not found parent config with: ${e.el}`);return}i.children.push(t.vid)}}patchElement(e,t){if(e.type!==t.type)this.unmountElement(e),this.mountElement(t);else{t.config=e.config;const i=e.props,h=t.props,l=e.config;l||console.error("widget renderer: can not found  config with: ",e);const a=(g,d,m)=>{for(const u in g)p(g[u])?p(d[u])&&d[u].config.vid!==g[u].config.vid?m[u]=d[u].config.vid:p(d[u])||(m[u]=d[u]):v.isObject(g[u])?a(g[u],d[u],m[u]):d[u]!==g[u]&&(m[u]=d[u])};a(i,h,l)}}createElement(e){const t=e.props,i={};for(const l in t)p(t[l])?i[l]=t[l].config.vid:i[l]=t[l];const h=f.generateConfig(e.type,i,{strict:!1,warn:!1});return e.config=h,h}processComponent(e,t){e===null&&this.mountComponent(t)}mountComponent(e){e.component=new C(e.type,this)}}class w{constructor(e,t){r(this,"wid",f.createSymbol());r(this,"version",T);r(this,"components",{});r(this,"renderer");r(this,"root");r(this,"instance",null);r(this,"engine");this.engine=e,this.root=t,this.renderer=new b(this)}component(e,t){if(typeof e=="object"){if(t=e,!t.name){console.error("widget register component must be provide a name",t);return}e=t.name}if(!t){console.error("widget register component must be provide a component not a null",e);return}if(this.components[e]){console.warn(`A component with this name already exists: ${e}`);return}this.components[e]=t}mount(){const e=E(this.root);return this.renderer.render(e),this.instance=e.component,this}getState(){var e;return(e=this.instance)==null?void 0:e.getState(!0)}unmount(){}use(){}}class y extends f.EngineSupport{constructor(e={}){super(e)}createWidget(e){return new w(this,e)}}const x=function(n,e={}){const t=new y;return n.modules&&n.modules.forEach(i=>{t.registModule(i)}),n.plugins&&n.plugins.forEach(i=>{t.install(i)}),n.strategy&&n.strategy.forEach(i=>{t.exec(i)}),n.wdigets&&n.wdigets.forEach(i=>{t.createWidget(i)}),t};s.EngineWidget=y,s.defineComponent=O,s.defineEngineWidget=x,s.h=o,Object.keys(c).forEach(function(n){n!=="default"&&!s.hasOwnProperty(n)&&Object.defineProperty(s,n,{enumerable:!0,get:function(){return c[n]}})}),Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});