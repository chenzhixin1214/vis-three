import{d as m,i as a,C as n,D as l,M as T,u as i,e as C}from"./index.7855cb86.js";import{s as R,t as c}from"./index.8b9e7665.js";import"./index.453e5660.js";import"./index.f27dc7ff.js";import"./index.9a3e1c8e.js";import"./index.6ff295ff.js";import{a as g}from"./index.4b35f5ef.js";import{h as s}from"./three.a7f96461.js";var N=m({configType:a.ORBITCONTROLS,commands:{set:{target({target:t,config:r,path:e,key:p,value:O}){const o=r.target;if(!r.type){r.target=new s(0,0,0);return}typeof r.target=="string"||(e.length>1?t.target[p]=O:t.target=new s(o.x,o.y,o.z))}}},create(t,r){let e=r.orbitControls;return t.target&&(typeof t.target=="string"||(e.target=new s(t.target.x,t.target.y,t.target.z))),R(t,e,{target:!0}),e},dispose(t){t.dispose()}});const P="@vis-three/orbit-controls-support-strategy",S=c(P),E=function(){return{name:S,condition:[n,l,g],exec(t){const r=t.compilerManager.getCompiler(T.CONTROLS);r.map.set(i(a.ORBITCONTROLS),t.orbitControls),r.weakMap.set(t.orbitControls,i(a.ORBITCONTROLS)),C.processor(N)},rollback(){}}};export{E as O};