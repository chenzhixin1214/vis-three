import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{M as e}from"../index.887e5a6e.js";import{A as m}from"../index.f4616ae6.js";import{o as p}from"../Template.9830e127.js";import"../index.8051b4a0.js";import"../index.553ea369.js";import"../index.322afd23.js";import"../index.b6f9a1a5.js";import"../index.54dc275e.js";import{l as n}from"../index.fdaaf24c.js";import{a}from"../index.d41f4f2a.js";import{m as r}from"../Antdv.35288747.js";import"../index.6949873b.js";import"../index.40bdee24.js";import"../three.53c13b85.js";import"../index.0ac2cd23.js";import"../index.d5cadf5a.js";import"../index.cb88c218.js";import"../index.10df2fa4.js";import"../index.4dfb083f.js";import"../index.3d2d386e.js";import"../index.382e9bf2.js";import"../index.4d68b12a.js";import"../index.687db21f.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.d47ce54e.js";import"../index.e35148e2.js";import"../index.dc401cd6.js";import"../index.73cd6fe7.js";import"../index.c5c75baa.js";import"../index.c346d9e8.js";import"../index.0e5858b5.js";import"../index.e72b23c1.js";import"../index.0357ebfa.js";import"../index.e4863e82.js";import"../index.d9d3455e.js";import"../UnrealBloomPass.3e69e790.js";import"../index.8445d065.js";import"../index.adb60d71.js";import"../index.ef0218c2.js";import"../index.99d2f4c4.js";import"../index.26301b51.js";import"../G6.cf5ff0af.js";m.register(n);const o=new e().setDom(document.getElementById("app")).setSize();o.loaderManager.setPath("/vis-three/examples/");r.loading({content:"\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A0%",key:"loading",duration:0});o.loaderManager.addEventListener("loading",t=>{r.loading({content:`\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A${parseInt((t.loadSuccess/t.loadTotal*100).toString())}
      %`,key:"loading",duration:0})});o.loaderManager.addEventListener("loaded",t=>{r.success({content:"\u52A0\u8F7D\u5B8C\u6210\uFF01",key:"loading",duration:1})});a.get("/vis-three/examples/config/config-development.json").then(t=>{const i=p(t.data);o.loadConfigAsync(i).then(()=>{o.setCameraBySymbol(i.camera[0].vid).setSceneBySymbol(i.scene[0].vid).play()})});window.engine=o;