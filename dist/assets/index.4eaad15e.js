import{_ as te}from"./GiSvgIcon.4b40a644.js";import{_ as ae}from"./GiHead.cf87bc42.js";import"./index.463d26de.js";import{u as oe}from"./usePagination.8725bf37.js";import"./viewer.feb94563.js";import{d as N,h as r,G as ne,r as ue,i as a,o as u,m as d,w as t,b as e,j as m,a as f,k as h,v as se,er as le,c as z,es as q,ei as I,p as ie,e as ce,_ as _e}from"./index.83de5d9d.js";import{u as de,g as re}from"./useApiSystem.63e357fc.js";import{u as pe}from"./useArea.a1c854e7.js";import"./GiTitle.29a0435e.js";const me="/gi-demo/assets/avatar.a3ca9f0c.jpg",fe=f("img",{src:me},null,-1),ge=h("\u7537"),ve=h("\u5973"),he=N({__name:"EditUserModal",setup(y,{expose:E}){const{getAreaTreeData:x}=pe(),b=r(""),w=ne(()=>b.value?"\u7F16\u8F91\u7528\u6237":"\u65B0\u589E\u7528\u6237"),c=r(!1),s=ue({userName:"",sex:0,address:""}),C=r([]);return C.value=x(),E({add:()=>{b.value="",c.value=!0},edit:F=>{b.value=F,c.value=!0}}),(F,l)=>{const A=a("a-input"),g=a("a-form-item"),T=a("IconCamera"),S=a("a-avatar"),D=a("a-radio"),v=a("a-radio-group"),o=a("a-cascader"),p=a("a-form"),V=a("a-modal");return u(),d(V,{visible:c.value,"onUpdate:visible":l[3]||(l[3]=i=>c.value=i),title:m(w)},{default:t(()=>[e(p,{ref:"formRef",model:s,size:"medium","auto-label-width":""},{default:t(()=>[e(g,{label:"\u59D3\u540D",field:"userName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},{min:2,max:4,message:"\u957F\u5EA6\u5728 2 - 4\u4E2A\u5B57\u7B26"}],"validate-trigger":["change","input"]},{default:t(()=>[e(A,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D",modelValue:s.userName,"onUpdate:modelValue":l[0]||(l[0]=i=>s.userName=i)},null,8,["modelValue"])]),_:1}),e(g,{label:"\u5934\u50CF",field:"avatar"},{default:t(()=>[e(S,{size:60,"trigger-icon-style":{color:"#3491FA"}},{"trigger-icon":t(()=>[e(T)]),default:t(()=>[fe]),_:1})]),_:1}),e(g,{label:"\u6027\u522B",field:"sex"},{default:t(()=>[e(v,{modelValue:s.sex,"onUpdate:modelValue":l[1]||(l[1]=i=>s.sex=i)},{default:t(()=>[e(D,{value:1},{default:t(()=>[ge]),_:1}),e(D,{value:0},{default:t(()=>[ve]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"\u5730\u5740",field:"address"},{default:t(()=>[e(o,{modelValue:s.address,"onUpdate:modelValue":l[2]||(l[2]=i=>s.address=i),options:C.value,"field-names":{value:"code",label:"label"},placeholder:"\u8BF7\u9009\u62E9\u7701\u5E02\u533A"},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])}}}),H=y=>(ie("data-v-871d50d7"),y=y(),ce(),y),ye={class:"user-manage"},xe={class:"left"},be={class:"content"},ke={class:"tree-box"},Be={class:"right"},Ee=H(()=>f("span",null,"\u65B0\u589E\u7528\u6237",-1)),we=h("\u6B63\u5E38"),Ce=h("\u7981\u7528"),Fe=H(()=>f("span",null,"\u641C\u7D22",-1)),De={class:"table-box"},Ve={key:0},ze={key:1},Ae=h("\u6B63\u5E38"),Se=h("\u7981\u7528"),Ie=N({name:"UserManage"}),Ne=N({...Ie,setup(y){const E=r(),x=r(),b=r(!1),w=r(""),c=r(!1),s=r([]),{current:C,pageSize:U,total:P,changeCurrent:F,changePageSize:l,setTotal:A}=oe(()=>{v()}),{deptList:g,getDeptList:T}=de();se(()=>{var o;(o=E.value)==null||o.expandAll()});const S=()=>{var o;(o=x.value)==null||o.add()},D=o=>{var p;(p=x.value)==null||p.edit(o.id)},v=async()=>{c.value=!0;const o=await re();o.success&&(s.value=o.data.list,A(o.data.total)),c.value=!1};return v(),(o,p)=>{const V=ae,i=a("icon-search"),$=a("a-input"),W=a("IconDown"),k=te,J=a("a-tree"),K=a("icon-plus"),B=a("a-button"),M=a("a-option"),O=a("a-select"),Q=a("a-input-group"),R=a("a-space"),L=a("icon-delete"),X=a("a-row"),_=a("a-table-column"),j=a("a-tag"),Y=a("icon-edit"),Z=a("a-popconfirm"),ee=a("a-table"),G=le("loading");return u(),z("div",ye,[f("section",xe,[e(V,{title:"\u90E8\u95E8\u5217\u8868"}),f("div",be,[e($,{modelValue:w.value,"onUpdate:modelValue":p[0]||(p[0]=n=>w.value=n),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD","allow-clear":"",style:{"margin-bottom":"10px"}},{prefix:t(()=>[e(i)]),_:1},8,["modelValue"]),q((u(),z("div",ke,[e(J,{ref_key:"treeRef",ref:E,"block-node":"","default-expand-all":"",data:m(g),"field-names":{key:"id",title:"name",children:"children"},onSelect:v},{"switcher-icon":t(()=>[e(W)]),icon:t(({node:n})=>[n.level==1?(u(),d(k,{key:0,name:"com-dept",size:14})):I("",!0),n.level==2?(u(),d(k,{key:1,name:"com-sub-dept",size:12})):I("",!0),n.level==3?(u(),d(k,{key:2,name:"com-group",size:12})):I("",!0)]),_:1},8,["data"])])),[[G,b.value]])])]),f("section",Be,[e(V,{title:"\u7528\u6237\u5217\u8868"}),e(X,{justify:"space-between",class:"head"},{default:t(()=>[e(R,null,{default:t(()=>[e(B,{type:"primary",onClick:S},{icon:t(()=>[e(K)]),default:t(()=>[Ee]),_:1}),e(Q,null,{default:t(()=>[e(O,{placeholder:"\u90E8\u95E8\u72B6\u6001","allow-clear":"",style:{width:"120px"}},{default:t(()=>[e(M,{value:1},{default:t(()=>[we]),_:1}),e(M,{value:0},{default:t(()=>[Ce]),_:1})]),_:1}),e($,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD...","allow-clear":"",style:{width:"250px"}}),e(B,{type:"primary",onClick:v},{icon:t(()=>[e(i)]),default:t(()=>[Fe]),_:1})]),_:1})]),_:1}),e(B,{type:"primary",status:"danger"},{icon:t(()=>[e(L)]),_:1})]),_:1}),f("section",De,[q((u(),d(ee,{"row-key":"id",data:s.value,scroll:{x:"100%",y:"100%",minWidth:900},pagination:{showPageSize:!0,total:m(P),current:m(C),pageSize:m(U)},onPageChange:m(F),onPageSizeChange:m(l)},{columns:t(()=>[e(_,{title:"\u7528\u6237\u7F16\u53F7","data-index":"userNo"}),e(_,{title:"\u7528\u6237\u540D","data-index":"userName"}),e(_,{title:"\u7528\u6237\u6635\u79F0","data-index":"nickName"}),e(_,{title:"\u6027\u522B","data-index":"sex"},{cell:t(({record:n})=>[n.sex===1?(u(),z("span",Ve,"\u7537")):(u(),z("span",ze,"\u5973"))]),_:1}),e(_,{title:"\u5934\u50CF","data-index":"avatar"},{cell:t(({record:n})=>[n.sex===1?(u(),d(k,{key:0,name:"avatar-man",size:40})):(u(),d(k,{key:1,name:"avatar-woman",size:40}))]),_:1}),e(_,{title:"\u5730\u5740","data-index":"address"}),e(_,{title:"\u72B6\u6001",width:100},{cell:t(({record:n})=>[n.status==1?(u(),d(j,{key:0,color:"green"},{default:t(()=>[Ae]),_:1})):(u(),d(j,{key:1,color:"red"},{default:t(()=>[Se]),_:1}))]),_:1}),e(_,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"}),e(_,{title:"\u64CD\u4F5C",width:100,align:"center"},{cell:t(({record:n})=>[e(R,null,{default:t(()=>[e(B,{type:"primary",size:"mini",onClick:Ue=>D(n)},{icon:t(()=>[e(Y)]),_:2},1032,["onClick"]),e(Z,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?"},{default:t(()=>[e(B,{type:"primary",status:"danger",size:"mini"},{icon:t(()=>[e(L)]),_:1})]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[G,c.value]])])]),e(he,{ref_key:"EditUserModalRef",ref:x},null,512)])}}});const He=_e(Ne,[["__scopeId","data-v-871d50d7"]]);export{He as default};
