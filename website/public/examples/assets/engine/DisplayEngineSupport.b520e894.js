import{D as d,g as e}from"../Vis.es.04b7ac1a.js";import"../three.a9d531d9.js";import"../vis-three.5ae274fa.js";const t=new d().install("GridHelper").complete().setDom(document.getElementById("app")),i=e("PointLight",{position:{x:30,y:50},distance:100}),a=e("MeshStandardMaterial",{color:"rgb(255, 0, 0)"}),o=e("BoxGeometry",{width:20,height:40,depth:60}),n=e("Mesh",{geometry:o.vid,material:a.vid}),s=e("Scene",{children:[i.vid,n.vid]}),r=e("PerspectiveCamera",{far:1e3,adaptiveWindow:!0,position:{x:60,y:60,z:60}});t.applyConfig(i,a,o,n,s,r);t.setCamera(r.vid).setScene(s.vid).setSize().play();
