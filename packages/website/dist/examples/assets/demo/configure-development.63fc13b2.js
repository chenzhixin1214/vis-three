import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{M as e}from"../index.790bec74.js";import{A as m,t as p}from"../vis-three.middleware.es.7f273029.js";import{l as a}from"../index.fdaaf24c.js";import{a as n}from"../index.d41f4f2a.js";import{m as r}from"../Antdv.414c4eb5.js";import"../three.237d835c.js";import"../index.1d3a6ec0.js";import"../index.202ebdec.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.f318ae8c.js";import"../index.4ec3bfd2.js";import"../index.ea2b9d59.js";import"../index.591a8368.js";import"../index.a30a6c1f.js";import"../index.12fd638d.js";import"../index.32dc3bb0.js";import"../vis-three.plugin-keyboard-manager.es.417ffa7e.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.e6be8a02.js";import"../index.2f498209.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.c0475655.js";import"../index.2328f892.js";import"../index.c35e5a3e.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.cd2c2c2e.js";import"../index.a089cc34.js";import"../index.bca5cc71.js";import"../index.692e1021.js";import"../index.90db9154.js";import"../vis-three.module-particle.es.8e43cbb8.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../index.ee52b7bf.js";import"../vis-three.convenient.es.7b860830.js";import"../index.bdaae9f1.js";import"../vis-three.strategy-orbit-controls-support.es.706978dc.js";import"../index.d3463d42.js";import"../vis-three.library-parser.es.5c9e4dac.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";import"../vis-three.strategy-selection-prompt.es.fc4c19e4.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../G6.d44f13fb.js";m.register(a);const o=new e().setDom(document.getElementById("app")).setSize();o.loaderManager.setPath("/examples/");r.loading({content:"\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A0%",key:"loading",duration:0});o.loaderManager.addEventListener("loading",t=>{r.loading({content:`\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A${parseInt((t.loadSuccess/t.loadTotal*100).toString())}
      %`,key:"loading",duration:0})});o.loaderManager.addEventListener("loaded",t=>{r.success({content:"\u52A0\u8F7D\u5B8C\u6210\uFF01",key:"loading",duration:1})});n.get("/examples/config/config-development.json").then(t=>{const i=p.observable(t.data);o.loadConfigAsync(i).then(()=>{o.setCameraBySymbol(i.camera[0].vid).setSceneBySymbol(i.scene[0].vid).play()})});window.engine=o;