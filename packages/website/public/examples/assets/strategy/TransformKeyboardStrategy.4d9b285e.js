import"../modulepreload-polyfill.b7f2da20.js";import{P as d,M as r,B as m,a as l,L as g,b as c}from"../three.a7f96461.js";import{W as p,C as u}from"../index.071db2cc.js";import{P as f}from"../index.f27dc7ff.js";import{E as y}from"../index.9a3e1c8e.js";import{S as P,T as v,a as E}from"../index.e4f0d89e.js";import{K as b}from"../index.e94667fe.js";import{v as M}from"../index.8b9e7665.js";import{T as x}from"../index.f641c187.js";import"../Antdv.e37529d7.js";const e=M({plugins:[p({antialias:!0,alpha:!0}),u(),f(),y(),P(),b(),v()],strategy:[E(),x()]}).setDom(document.getElementById("app")).setSize();e.eventManager.recursive=!0;const n=e.scene,a=new d("rgb(255, 255, 255)",1,300,0);a.position.y=30;n.add(a);const t=new r(new m(10,10,10),new l({color:"rgb(255, 105, 100)"}));t.position.x=10;n.add(t);const o=new r(t.geometry,t.material);o.position.x=10;o.position.y=10;o.position.z=-10;t.add(o);const C=new g(t.geometry);n.add(C);const s=new c(t.geometry);s.position.x=-10;n.add(s);t.updateMatrixWorld();e.setSelectionBox([t]);e.render();e.addEventListener("selected",i=>{e.render()});document.getElementById("translate").onclick=()=>{e.transformControls.mode="translate",e.render()};document.getElementById("rotate").onclick=()=>{e.transformControls.mode="rotate",e.render()};document.getElementById("scale").onclick=()=>{e.transformControls.mode="scale",e.render()};e.transformControls.addEventListener("objectChange",i=>{e.render()});setInterval(()=>{e.render()},1e3/30);