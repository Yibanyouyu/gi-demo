var C=Object.defineProperty,b=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(o,s,e)=>s in o?C(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,p=(o,s)=>{for(var e in s||(s={}))N.call(s,e)&&_(o,e,s[e]);if(c)for(var e of c(s))E.call(s,e)&&_(o,e,s[e]);return o},m=(o,s)=>b(o,z(s));import{e as w,y as M,p as f,o as S,g as T,h as a,a as u,z as v,B as g,u as i,w as h,C as U,q as A,D as I,M as x,r as l,E as B}from"./vendor.f6a010b4.js";import{_ as L}from"./logo.f6fa5301.js";import{_ as R}from"./index.87cf7995.js";var q="/gi-demo/assets/login-bg.c9e9aed8.png";const Y={class:"login"},j={class:"login-box animated flipInY"},G=A('<div class="login-left" data-v-300fae29><img class="bg" src="'+q+'" data-v-300fae29><div class="system" data-v-300fae29><img class="logo" src="'+L+'" data-v-300fae29><div class="system-name" data-v-300fae29><span data-v-300fae29>Admin</span><span data-v-300fae29>\u7BA1\u7406\u7CFB\u7EDF</span></div></div></div>',1),H={class:"login-right"},J={class:"form"},K={class:"form-item"},O={class:"form-item"},P={class:"check"},Q=B("\u4FDD\u6301\u767B\u5F55\u72B6\u6001"),W=B("\u767B\u5F55"),X=w({name:"Login"}),Z=w(m(p({},X),{setup(o){const s=I(),e=M({username:"admin",password:"123"});let d=f(!1),r=f(!1);const k=()=>{if(!e.username)return x.warning("\u8BF7\u8F93\u5165\u8D26\u6237\u540D\u79F0");if(!e.password)return x.warning("\u8BF7\u8F93\u5165\u8D26\u6237\u5BC6\u7801");r.value=!0,setTimeout(()=>{s.push("/home"),r.value=!1},800)};return($,t)=>{const y=l("icon-user"),F=l("icon-lock"),D=l("a-checkbox"),V=l("a-button");return S(),T("div",Y,[a("section",j,[G,a("div",H,[a("section",J,[a("div",K,[u(y,{"stroke-width":1,style:{fontSize:"20px"}}),v(a("input",{type:"text",placeholder:"\u8D26\u53F7","onUpdate:modelValue":t[0]||(t[0]=n=>i(e).username=n)},null,512),[[g,i(e).username]])]),a("div",O,[u(F,{"stroke-width":1,style:{fontSize:"20px"}}),v(a("input",{type:"password",placeholder:"\u5BC6\u7801","onUpdate:modelValue":t[1]||(t[1]=n=>i(e).password=n)},null,512),[[g,i(e).password]])]),a("div",P,[u(D,{modelValue:i(d),"onUpdate:modelValue":t[2]||(t[2]=n=>U(d)?d.value=n:d=n)},{default:h(()=>[Q]),_:1},8,["modelValue"])]),a("div",null,[u(V,{type:"primary",size:"large",long:"",loading:i(r),onClick:k},{default:h(()=>[W]),_:1},8,["loading"])])])])])])}}}));var te=R(Z,[["__scopeId","data-v-300fae29"]]);export{te as default};
