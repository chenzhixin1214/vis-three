import"../modulepreload-polyfill.b7f2da20.js";import{M as o,B as r,am as a,bu as m,h as t}from"../three.a7f96461.js";import{W as c,C as l}from"../index.071db2cc.js";import{G as d}from"../index.53db7820.js";import{v as g}from"../index.8b9e7665.js";import{P as u}from"../index.f27dc7ff.js";const e=g({plugins:[c({antialias:!0,alpha:!0}),l(),d(),u()]}).setDom(document.getElementById("app")).setSize(),i=e.scene,s=new o(new r(1,1,1),new a({color:"rgb(255, 255, 0)"}));i.add(s);const p=new o(new r(10,10,10).translate(0,5,0),new a({color:"rgb(255, 105, 100)"}));i.add(p);e.render();const n=new t,w=new m(new t(0,1,0));e.pointerManager.addEventListener("pointermove",()=>{s.position.copy(e.pointerManager.getWorldPosition(e.camera,50,n)),p.position.copy(e.pointerManager.intersectPlane(e.camera,w,n)),e.render()});