import"../modulepreload-polyfill.b7f2da20.js";import{M as d,B as m,a as l,P as g,L as c,b as p}from"../three.a7f96461.js";import{W as u,C as P}from"../index.071db2cc.js";import{T as f,S as w,a as y}from"../index.e4f0d89e.js";import{P as E}from"../index.f27dc7ff.js";import{E as h}from"../index.9a3e1c8e.js";import{v}from"../index.8b9e7665.js";const e=v({plugins:[u({antialias:!0,alpha:!0}),P(),E(),h(),f(),w()],strategy:[y()]}).setDom(document.getElementById("app")).setSize(),n=e.scene,t=new d(new m(10,10,10),new l({color:"rgb(255, 105, 100)"}));t.position.x=10;n.add(t);const i=new g("rgb(255, 255, 255)",1,300,0);i.position.y=30;n.add(i);const L=new c(t.geometry);n.add(L);const a=new p(t.geometry);a.position.x=-10;n.add(a);window.engine=e;e.render();e.addEventListener("selected",s=>{let o="";s.objects.forEach(r=>{o+=`<div class="selected-elem">${r.uuid}</div>`}),document.getElementById("selected").innerHTML=o,e.render()});
