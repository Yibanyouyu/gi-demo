import{a as U}from"./runtime-dom.esm-bundler-fb8da9e1.js";import{_ as B}from"./GiSvgIcon-f0d8bb1d.js";import{f as v,J as k,h as g,r as a,o as x,b as N,a as e,w as t,V as n,N as T,p as R,d as F,e as q,_ as S,t as y,c as $,ae as j,g as D}from"./_plugin-vue_export-helper-916c4ad5.js";const C=c=>(R("data-v-328c3afa"),c=c(),F(),c),E={class:"step-1"},G=C(()=>q("span",null,"微信",-1)),J=C(()=>q("span",null,"支付宝",-1)),K=v({name:"Step1"}),L=v({...K,emits:["next"],setup(c,{emit:i}){const o=k({payAccount:"",recAccount:"1997***6962@qq.com",payType:1,recName:"Lin",amount:"1980"}),m={payAccount:[{required:!0,message:"请选择付款账户"}],recAccount:[{required:!0,message:"请输入收款账户"}],recName:[{required:!0,message:"请输入收款人姓名"}],amount:[{required:!0,message:"请输入转账金额"}]},p=g(),f=()=>{T(async()=>{var s;await((s=p.value)==null?void 0:s.validate())||i("next",o)})};return(r,s)=>{const l=a("a-option"),u=a("a-select"),_=a("a-form-item"),b=B,A=a("a-input"),h=a("a-input-group"),V=a("a-button"),w=a("a-form");return x(),N("div",E,[e(w,{ref_key:"formRef",ref:p,model:o,size:"medium","auto-label-width":""},{default:t(()=>[e(_,{field:"payAccount",label:"付款账户",rules:m.payAccount},{default:t(()=>[e(u,{modelValue:o.payAccount,"onUpdate:modelValue":s[0]||(s[0]=d=>o.payAccount=d),placeholder:"请选择付款账户"},{default:t(()=>[e(l,{value:"326***228@qq.com"},{default:t(()=>[n("326***228@qq.com")]),_:1}),e(l,{value:"768***579@qq.com"},{default:t(()=>[n("768***579@qq.com")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(_,{field:"recAccount",label:"收款账户",rules:m.recAccount},{default:t(()=>[e(h,{style:{width:"100%"}},{default:t(()=>[e(u,{modelValue:o.payType,"onUpdate:modelValue":s[1]||(s[1]=d=>o.payType=d),style:{width:"150px"}},{default:t(()=>[e(l,{value:1},{icon:t(()=>[e(b,{name:"wechat"})]),default:t(()=>[G]),_:1}),e(l,{value:2},{icon:t(()=>[e(b,{name:"alipay"})]),default:t(()=>[J]),_:1})]),_:1},8,["modelValue"]),e(A,{modelValue:o.recAccount,"onUpdate:modelValue":s[2]||(s[2]=d=>o.recAccount=d),placeholder:"请输入收款账户"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules"]),e(_,{field:"recName",label:"收款人姓名",rules:m.recName},{default:t(()=>[e(A,{modelValue:o.recName,"onUpdate:modelValue":s[3]||(s[3]=d=>o.recName=d),placeholder:"请输入收款人姓名"},null,8,["modelValue"])]),_:1},8,["rules"]),e(_,{field:"amount",label:"转账金额",rules:m.amount},{default:t(()=>[e(A,{modelValue:o.amount,"onUpdate:modelValue":s[4]||(s[4]=d=>o.amount=d),placeholder:"请输入转账金额"},{prefix:t(()=>[n("￥")]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(_,null,{default:t(()=>[e(V,{type:"primary",onClick:f},{default:t(()=>[n("下一步")]),_:1})]),_:1})]),_:1},8,["model"])])}}});const M=S(L,[["__scopeId","data-v-328c3afa"]]),P={class:"step-2"},H=v({name:"Step2"}),O=v({...H,props:{form:{default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:"0"})}},emits:["next","prev"],setup(c,{emit:i}){const o=k({password:"123456"}),m={password:[{required:!0,message:"请输入密码"}]},p=g(!1),f=g(),r=()=>{T(async()=>{var l;try{p.value=!0,await((l=f.value)==null?void 0:l.validate())?p.value=!1:setTimeout(()=>{i("next"),p.value=!1},1e3)}catch(u){return u}})},s=()=>{i("prev")};return(l,u)=>{const _=a("a-descriptions-item"),b=a("a-descriptions"),A=a("a-divider"),h=a("a-input-password"),V=a("a-form-item"),w=a("a-button"),d=a("a-space"),I=a("a-form");return x(),N("div",P,[e(b,{column:1,size:"medium"},{default:t(()=>[e(_,{label:"付款账户"},{default:t(()=>[n(y(c.form.payAccount),1)]),_:1}),e(_,{label:"收款账户"},{default:t(()=>[n(y(c.form.recAccount),1)]),_:1}),e(_,{label:"收款人姓名"},{default:t(()=>[n(y(c.form.recName),1)]),_:1}),e(_,{label:"转账金额"},{default:t(()=>[n(y(c.form.amount),1)]),_:1})]),_:1}),e(A,{style:{"border-bottom-style":"dashed"}}),e(I,{ref_key:"formRef",ref:f,size:"medium",model:o,"auto-label-width":""},{default:t(()=>[e(V,{field:"password",label:"支付密码",rules:m.password},{default:t(()=>[e(h,{modelValue:o.password,"onUpdate:modelValue":u[0]||(u[0]=z=>o.password=z),placeholder:"请输入支付密码"},null,8,["modelValue"])]),_:1},8,["rules"]),e(V,null,{default:t(()=>[e(d,null,{default:t(()=>[e(w,{type:"primary",loading:p.value,onClick:r},{default:t(()=>[n("提交")]),_:1},8,["loading"]),e(w,{onClick:s},{default:t(()=>[n("上一步")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])}}});const Q=S(O,[["__scopeId","data-v-1033bc68"]]),W={class:"step-3"},X={class:"info-box"},Y=v({name:"Step3"}),Z=v({...Y,props:{form:{default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:"0"})}},emits:["again"],setup(c,{emit:i}){const o=()=>{i("again")};return(m,p)=>{const f=a("a-result"),r=a("a-descriptions-item"),s=a("a-statistic"),l=a("a-descriptions"),u=a("a-button"),_=a("a-space"),b=a("a-row");return x(),N("div",W,[e(f,{status:"success",title:"操作成功"},{subtitle:t(()=>[n("预计两小时内到账")]),_:1}),q("section",X,[e(l,{size:"medium",column:1},{default:t(()=>[e(r,{label:"付款账户："},{default:t(()=>[n(y(c.form.payAccount),1)]),_:1}),e(r,{label:"收款账户："},{default:t(()=>[n(y(c.form.recAccount),1)]),_:1}),e(r,{label:"收款人姓名："},{default:t(()=>[n(y(c.form.recName),1)]),_:1}),e(r,{label:"转账金额："},{default:t(()=>[e(s,{value:Number(c.form.amount),precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:t(()=>[n("￥")]),suffix:t(()=>[n("元")]),_:1},8,["value"])]),_:1})]),_:1})]),e(b,{justify:"center"},{default:t(()=>[e(_,null,{default:t(()=>[e(u,{type:"primary",size:"medium",onClick:o},{default:t(()=>[n("再转一笔")]),_:1}),e(u,{size:"medium"},{default:t(()=>[n("查看账单")]),_:1})]),_:1})]),_:1})])}}});const ee=S(Z,[["__scopeId","data-v-5f1ca400"]]),te={class:"step-form"},oe={class:"form-box"},ae=v({name:"StepForm"}),ne=v({...ae,setup(c){const i={1:M,2:Q,3:ee},o=g(1),m=g({payAccount:"",recAccount:"",payType:1,recName:"",amount:""}),p=r=>{o.value++,r&&(m.value=r)},f=()=>{o.value--};return(r,s)=>{const l=a("a-step"),u=a("a-steps");return x(),N("div",te,[q("section",oe,[e(u,{current:o.value},{default:t(()=>[e(l,{description:"确保填写正确"},{default:t(()=>[n("填写转账信息")]),_:1}),e(l,{description:"确认转账信息"},{default:t(()=>[n("确认转账信息")]),_:1}),e(l,{description:"恭喜您，转账成功"},{default:t(()=>[n("完成转账")]),_:1})]),_:1},8,["current"]),e(U,{name:"fade-slide",mode:"out-in",appear:""},{default:t(()=>[(x(),$(j,null,[(x(),$(D(i[o.value]),{form:m.value,onNext:p,onPrev:f,onAgain:s[0]||(s[0]=_=>o.value=1)},null,40,["form"]))],1024))]),_:1})])])}}});const ue=S(ne,[["__scopeId","data-v-cbc5644e"]]);export{ue as default};
