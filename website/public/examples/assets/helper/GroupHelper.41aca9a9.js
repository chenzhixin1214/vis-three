import{M as o,G as n}from"../Vis.es.6c39f639.js";import{a1 as a,M as r,i as d,o as i,G as c}from"../three.5dc0577a.js";import"../vis-three.a3d50446.js";const p=document.getElementById("app"),m=new o().setDom(p).setSize().setStats(!0).play(),e=m.scene;e.add(new a("white",1));const t=new r(new d(10,10,10),new i({color:"rgb(255, 105, 100)"}));t.position.set(-15,15,-15);const s=new c;s.add(t);const w=new n(s);e.add(s);e.add(w);
