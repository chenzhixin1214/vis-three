import{C as g,a as p,g as e,n as i}from"../Vis.es.b030611e.js";import{v as n}from"../v4.90f1a8cc.js";import"../three.5dc0577a.js";import"../vis-three.a3d50446.js";new g({width:256,height:256}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(206, 42, 230)",t.font=" bold 54px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("EVENT",128,128)}).preview();const s=new p().setDom(document.getElementById("app")).setSize().setStats(!0);e.injectEngine=s;const r=e("Scene");e.injectScene=r.vid;s.setScene(r.vid).play();e("PointLight",{position:{x:30,y:50},distance:100});const o=e("MeshStandardMaterial"),a=e("BoxGeometry",{width:5,height:5,depth:5}),m=n();e("Mesh",{vid:m,material:o.vid,geometry:a.vid,pointerup:[i.generateConfig("openWindow",{params:{url:"https://gitee.com/Shiotsukikaedesari/vis-three"}})]});const l=n();e("Mesh",{vid:l,material:o.vid,geometry:a.vid,position:{x:0,y:20,z:0},pointerup:[i.generateConfig("moveTo",{params:{target:m,position:{x:20,y:-10,z:10}}})]});const d=n();e("Mesh",{vid:d,material:o.vid,geometry:a.vid,position:{x:-35,y:0,z:0},pointerenter:[i.generateConfig("moveSpacing",{params:{target:d,spacing:{x:15,y:0,z:0}}})]});
