import"../modulepreload-polyfill.b7f2da20.js";import{am as n,M as i,B as l}from"../three.a7f96461.js";import{W as s,C as m}from"../index.071db2cc.js";import{E as c}from"../index.d73b554e.js";import{v as d}from"../index.8b9e7665.js";import{R as g}from"../index.510eaae3.js";import{E as p}from"../index.42ee2ebe.js";const t=d({plugins:[s({antialias:!0,alpha:!0}),c({WebGLMultisampleRenderTarget:!0}),m(),g()],strategy:[p()]}).setDom(document.getElementById("app")).setSize().play(),e=new n({color:"rgb(10, 40, 120)"});t.scene.add(new i(new l(30,30,30),e));let r=1,o=1,a=1;t.renderManager.addEventListener("render",()=>{(e.color.r>=1||e.color.r<=0)&&(r*=-1),e.color.r+=.005*r,(e.color.g>=1||e.color.g<=0)&&(o*=-1),e.color.g+=.005*o,(e.color.b>=1||e.color.b<=0)&&(a*=-1),e.color.b+=.005*a});
