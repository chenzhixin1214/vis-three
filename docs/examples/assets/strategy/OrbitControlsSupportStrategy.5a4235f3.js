import"../modulepreload-polyfill.b7f2da20.js";import{W as i,C as n}from"../index.071db2cc.js";import{E as d}from"../index.d73b554e.js";import{O as m}from"../index.4b35f5ef.js";import{G as p}from"../index.53db7820.js";import{C as s}from"../index.a5568c80.js";import{O as g}from"../index.1e646713.js";import{E as l}from"../index.a270601c.js";import{g as a}from"../index.7855cb86.js";import{d as u}from"../index.a9490ea5.js";import"../index.8b9e7665.js";import"../index.453e5660.js";import"../index.9a3e1c8e.js";import"../index.6ff295ff.js";import"../index.f27dc7ff.js";import{g as c}from"../lil-gui.module.min.095a7f3d.js";import{O as S}from"../index.17bccc77.js";import"../three.a7f96461.js";import"../UnrealBloomPass.cda4d03b.js";import"../G6.3fcc88ef.js";import"../Antdv.e37529d7.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";const o=u({plugins:[i({antialias:!0,alpha:!0}),d({WebGLMultisampleRenderTarget:!0}),n(),m(),p()],strategy:[s(),g(),l(),S()]}).setDom(document.getElementById("app")).setSize().play();a.injectEngine=o;const r=a("Scene");o.setSceneBySymbol(r.vid);a.injectScene=r.vid;a("PointLight",{position:{x:30,y:50},distance:100});const f=a("MeshStandardMaterial"),h=a("BoxGeometry",{width:20,height:10,depth:20});a("Mesh",{material:f.vid,geometry:h.vid});const t=a("OrbitControls",{autoRotate:!0});window.engine=o;const e=new c;e.add(t,"enabled");e.add(t,"autoRotate");e.add(t,"autoRotateSpeed",-5,5,.1);e.add(t,"enableDamping");e.add(t,"dampingFactor",-5,5,.1);e.add(t,"enablePan");e.add(t,"panSpeed",-5,5,.1);e.add(t,"enableRotate");e.add(t,"rotateSpeed",-5,5,.1);e.add(t,"enableZoom");e.add(t,"zoomSpeed",-5,5,.1);e.add(t,"maxAzimuthAngle",-2*Math.PI,2*Math.PI,.1);e.add(t,"maxDistance",0,200,1);e.add(t,"maxPolarAngle",0,Math.PI,.1);e.add(t,"maxZoom",0,100,1);e.add(t,"minAzimuthAngle",-2*Math.PI,2*Math.PI,.1);e.add(t,"minDistance",0,200,1);e.add(t,"minPolarAngle",0,Math.PI,.1);e.add(t,"minZoom",0,100,1);window.addEventListener("resize",()=>{o.setSize()});