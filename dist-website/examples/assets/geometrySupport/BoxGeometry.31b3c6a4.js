import"../common.006007ed.js";import{M as s,g as e,i}from"../Vis.es.a3304217.js";import{g as d}from"../lil-gui.module.min.2e05211e.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";const o=new s().setDom(document.getElementById("app")).setSize().setStats(!0).play();e.injectEngine=o;const a=e("Scene");o.setScene(a.vid);e.injectScene=!0;e("PointLight",{position:{x:30,y:50},distance:100});const m=e(i.MESHSTANDARDMATERIAL),t=e(i.BOXGEOMETRY,{width:10,height:10,depth:10});e(i.MESH,{material:m.vid,geometry:t.vid});const n=new d;n.add(t,"width",1,50,1);n.add(t,"height",1,50,1);n.add(t,"depth",1,50,1);