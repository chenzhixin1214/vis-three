import{C as s,a as m,g as n}from"../Vis.es.04b7ac1a.js";import{G as a}from"../dat.gui.module.3ecf4841.js";import"../three.a9d531d9.js";import"../vis-three.5ae274fa.js";new s({width:256,height:256}).draw(e=>{e.textBaseline="middle",e.textAlign="center",e.fillStyle="rgb(206, 42, 230)",e.font=" bold 54px \u5FAE\u8F6F\u96C5\u9ED1",e.fillText("CSS3D",128,128)}).preview();const i=new m().install("CSS3DRenderer").complete().setDom(document.getElementById("app")).setStats(!0).registerResources({"examples.element1":document.getElementById("element1"),"examples.element2":document.getElementById("element2")});n.injectEngine=i;const o=n("Scene");i.setScene(o.vid);n.injectScene=!0;n("PointLight",{position:{x:30,y:50},distance:100});const t=n("CSS3DPlane",{element:"examples.element1",width:50,height:50,position:{x:50,y:10},rotation:{y:-(Math.PI/180)*15},scale:{x:.3,y:.3,z:.3}});i.play();window.engine=i;const l=new a;l.add(t,"width",0,300).onChange(e=>{t.width=e});l.add(t,"height",0,300).onChange(e=>{t.height=e});setTimeout(()=>{i.setSize(),document.getElementById("element1").addEventListener("click",()=>{t.element="examples.element1"}),document.getElementById("element2").addEventListener("click",()=>{t.element="examples.element2"})},0);
