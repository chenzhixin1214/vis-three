import{a as o}from"./index.4d68b12a.js";import{b as c}from"./index.cb88c218.js";import{t as p}from"./index.8051b4a0.js";const l="@vis-three/transform-keyboard-strategy",t=p(l),f=function(){return{name:t,condition:[o,c],exec(s){const a=s.transformControls;s.keyboardManager.register({shortcutKey:["shift"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u9501\u5B9A\u6B65\u5E45",keyup:r=>{r==null||r.preventDefault(),a.translationSnap=null,a.rotationSnap=null,a.scaleSnap=null},keydown:r=>{r==null||r.preventDefault(),r==null||r.preventRepeat(),a.translationSnap=5,a.rotationSnap=Math.PI/180*10,a.scaleSnap=.1}}).register({shortcutKey:["r"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u6A21\u5F0F\uFF1A\u65CB\u8F6C",keyup:r=>{r==null||r.preventDefault(),a&&(a.mode="rotate")}}).register({shortcutKey:["t"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u6A21\u5F0F\uFF1A\u79FB\u52A8",keyup:r=>{r==null||r.preventDefault(),a&&(a.mode="translate")}}).register({shortcutKey:["e"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u6A21\u5F0F\uFF1A\u7F29\u653E",keyup:r=>{r==null||r.preventDefault(),a.mode="scale"}}).register({shortcutKey:["x"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u5207\u6362\u8F74\uFF1Ax",keyup:r=>{r==null||r.preventDefault(),a.showX=!a.showX}}).register({shortcutKey:["y"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u5207\u6362\u8F74\uFF1Ay",keyup:r=>{r==null||r.preventDefault(),!(r!=null&&r.ctrlKey)&&(a.showY=!a.showY)}}).register({shortcutKey:["z"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u5207\u6362\u8F74\uFF1Az",keyup:r=>{r==null||r.preventDefault(),!(r!=null&&r.ctrlKey)&&(a.showZ=!a.showZ)}}).register({shortcutKey:["space"],desp:"\u53D8\u6362\u63A7\u5236\u5668\u5207\u6362\u53D8\u6362\u7A7A\u95F4",keyup:r=>{r==null||r.preventDefault(),a.space=a.space==="local"?"world":"local"}})},rollback(s){s.keyboardManager.cancel(["shift"]).cancel(["r"]).cancel(["t"]).cancel(["e"]).cancel(["x"]).cancel(["y"]).cancel(["z"]).cancel(["space"])}}};export{f as T};