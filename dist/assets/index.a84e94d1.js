import{_ as I,d as w,h as U,l as G,m as Fe,i as d,o as h,n as m,w as u,e as i,c as B,q as L,F as E,k as x,t as D,s as z,u as p,a as M,v as ce,x as ue,y as de,z as Y,A as Ae,B as He,C as xe,j as K,p as he,g as pe,b as A,D as Ee,T as De,K as Te,E as Be,G as Le,H as ze}from"./index.89a9c3ed.js";import{u as P,a as Ne,b as me}from"./index.719aaee9.js";import{_ as Ie}from"./logo.f6fa5301.js";import{_ as Re}from"./avatar.d240db71.js";import{u as q,c as _e,s as O}from"./index.ea03939b.js";import{u as Me,a as Pe}from"./index.63e4dac1.js";const Oe=w({setup(e){const t=U(),s=G(),o=Fe(),n=r=>{r.path&&(s.setActivePath(r.path),t.push({path:r.path}))};return(r,a)=>{const c=d("GiSvgIcon"),l=d("a-menu-item"),f=d("a-sub-menu"),v=d("a-menu"),g=d("a-layout-sider");return h(),m(g,{collapsible:"",breakpoint:"xl",class:"aside"},{default:u(()=>[i(v,{"selected-keys":[p(s).activePath],"default-open-keys":["/"],style:{width:"100%",height:"100%"}},{default:u(()=>[(h(!0),B(E,null,L(p(o).list,_=>(h(),B(E,null,[_.children&&_.children.length?(h(),m(f,{key:_.path},{icon:u(()=>[i(c,{size:24,name:_.icon},null,8,["name"])]),title:u(()=>[x(D(_.name),1)]),default:u(()=>[_.children&&_.children.length?(h(!0),B(E,{key:0},L(_.children,S=>(h(),m(l,{key:S.path,onClick:C=>n(S)},{default:u(()=>[x(D(S.name),1)]),_:2},1032,["onClick"]))),128)):z("",!0)]),_:2},1024)):(h(),m(l,{key:_.path,onClick:S=>n(_)},{icon:u(()=>[i(c,{size:24,name:_.icon},null,8,["name"])]),default:u(()=>[x(" "+D(_.name),1)]),_:2},1032,["onClick"]))],64))),256))]),_:1},8,["selected-keys"])]),_:1})}}});var je=I(Oe,[["__scopeId","data-v-14416d2c"]]);const re=_e,{getColorString:Ve}=q;function Ke(e,t,s){const o=re(e),n=o.hue(),r=o.saturationv(),a=o.value(),c=2,l=100,f=9,v=100,g=30;function _(H,$){let k;return n>=60&&n<=240?k=H?n-c*$:n+c*$:k=H?n+c*$:n-c*$,k<0?k+=360:k>=360&&(k-=360),Math.round(k)}function S(H,$){let k;return H?k=r<=f?r:r-(r-f)/5*$:k=r+(l-r)/4*$,k}function C(H,$){return H?a+(v-a)/5*$:a<=g?a:a-(a-g)/4*$}const y=t<6,F=y?6-t:t-6,b=t===6?o:re({h:_(y,F),s:S(y,F),v:C(y,F)});return Ve(b,s)}var fe=Ke;const j=_e,We=fe,{getColorString:Ue}=q;function Ge(e,t,s){const o=j(We(e,10-t+1)),n=j(e),r=n.hue(),a=n.saturationv(),l=j({h:n.hue(),s:g(6),v:n.value()}).saturationv(),f=Math.ceil((l-9)/4),v=Math.ceil((100-l)/5);function g(S){if(S<6)return l+(6-S)*v;if(S===6){if(r>=0&&r<50)return a-15;if(r>=50&&r<191)return a-20;if(r>=191&&r<=360)return a-15}return l-f*(S-6)}const _=j({h:o.hue(),s:g(t),v:o.value()});return Ue(_,s)}var Ye=Ge;const ae=fe,ie=Ye;function qe(e,t={}){const{dark:s,list:o,index:n=6,format:r="hex"}=t;if(o){const a=[],c=s?ie:ae;for(let l=1;l<=10;l++)a.push(c(e,l,r));return a}return s?ie(e,n,r):ae(e,n,r)}var Xe=qe;const Je=Xe,{getRgbStr:Ze}=q;var Qe=Je,et=Ze;function tt(){return{changeThemeColor:t=>{Qe(t,{list:!0}).forEach((o,n)=>{const r=et(o);document.body.style.setProperty(`--primary-${n+1}`,r)})}}}function ot(){const e=P(),t=Me({selector:"body",attribute:"arco-theme",valueDark:"dark",valueLight:"light",storageKey:"arco-theme",onChanged(o){e.toggleTheme(o)}});return{onToggleThemeDark:Pe(t)}}function st(){const e=M(!1),t=()=>{e.value=O.isFullscreen},s=()=>{O.toggle()};return ce(()=>{O.on("change",t)}),ue(()=>{O.off("change",t)}),{isFullScreen:e,onToggleFullScreen:s}}/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function T(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=rt(e):/rgb/.test(e)?t=le(e):typeof e=="string"?t=le(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:s,g:o,b:n,a:r}=t,{h:a,s:c,v:l}=at(t);return{r:s,g:o,b:n,a:r===void 0?1:r,h:a,s:c,v:l}}function X(e){const t=document.createElement("canvas"),s=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,s.fillStyle="#ffffff",s.fillRect(0,0,o,o),s.fillStyle="#ccd5db",s.fillRect(0,0,e,e),s.fillRect(e,e,e,e),t}function W(e,t,s,o,n,r){const a=e==="l",c=t.createLinearGradient(0,0,a?s:0,a?0:o);c.addColorStop(.01,n),c.addColorStop(.99,r),t.fillStyle=c,t.fillRect(0,0,s,o)}function nt({r:e,g:t,b:s},o){const n=a=>("0"+Number(a).toString(16)).slice(-2),r=`#${n(e)}${n(t)}${n(s)}`;return o?r.toUpperCase():r}function rt(e){e=e.slice(1);const t=s=>parseInt(s,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function le(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function at({r:e,g:t,b:s}){e=e/255,t=t/255,s=s/255;const o=Math.max(e,t,s),n=Math.min(e,t,s),r=o-n;let a=0;o===n?a=0:o===e?t>=s?a=60*(t-s)/r:a=60*(t-s)/r+360:o===t?a=60*(s-e)/r+120:o===s&&(a=60*(e-t)/r+240),a=Math.floor(a);let c=parseFloat((o===0?0:1-n/o).toFixed(2)),l=parseFloat(o.toFixed(2));return{h:a,s:c,v:l}}var J=w({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,s=e.getContext("2d");e.width=t,e.height=t,s.fillStyle=this.color,s.fillRect(0,0,t,t),W("l",s,t,t,"#FFFFFF","rgba(255,255,255,0)"),W("p",s,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:s}=this.$el.getBoundingClientRect(),o=e.target.getContext("2d"),n=a=>{let c=a.clientX-s,l=a.clientY-t;c<0&&(c=0),l<0&&(l=0),c>this.size&&(c=this.size),l>this.size&&(l=this.size),this.slideSaturationStyle={left:c-5+"px",top:l-5+"px"};const f=o.getImageData(Math.min(c,this.size-1),Math.min(l,this.size-1),1,1),[v,g,_]=f.data;this.$emit("selectSaturation",{r:v,g,b:_})};n(e);const r=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)}}});const it={ref:"canvasSaturation"};function lt(e,t,s,o,n,r){return h(),m("div",{class:"saturation",onMousedown:t[1]||(t[1]=Y((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[i("canvas",it,null,512),i("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}J.render=lt;J.__file="src/color/Saturation.vue";var Z=w({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,s=this.height,o=e.getContext("2d");e.width=t,e.height=s;const n=o.createLinearGradient(0,0,0,s);n.addColorStop(0,"#FF0000"),n.addColorStop(.17*1,"#FF00FF"),n.addColorStop(.17*2,"#0000FF"),n.addColorStop(.17*3,"#00FFFF"),n.addColorStop(.17*4,"#00FF00"),n.addColorStop(.17*5,"#FFFF00"),n.addColorStop(1,"#FF0000"),o.fillStyle=n,o.fillRect(0,0,t,s)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),s=e.target.getContext("2d"),o=r=>{let a=r.clientY-t;a<0&&(a=0),a>this.height&&(a=this.height),this.slideHueStyle={top:a-2+"px"};const c=s.getImageData(0,Math.min(a,this.height-1),1,1),[l,f,v]=c.data;this.$emit("selectHue",{r:l,g:f,b:v})};o(e);const n=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)}}});const ct={ref:"canvasHue"};function ut(e,t,s,o,n,r){return h(),m("div",{class:"hue",onMousedown:t[1]||(t[1]=Y((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[i("canvas",ct,null,512),i("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}Z.render=ut;Z.__file="src/color/Hue.vue";var Q=w({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,s=this.height,o=this.alphaSize,n=X(o),r=e.getContext("2d");e.width=t,e.height=s,r.fillStyle=r.createPattern(n,"repeat"),r.fillRect(0,0,t,s),W("p",r,t,s,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),s=n=>{let r=n.clientY-t;r<0&&(r=0),r>this.height&&(r=this.height);let a=parseFloat((r/this.height).toFixed(2));this.$emit("selectAlpha",a)};s(e);const o=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}}});const dt={ref:"canvasAlpha"};function ht(e,t,s,o,n,r){return h(),m("div",{class:"color-alpha",onMousedown:t[1]||(t[1]=Y((...a)=>e.selectAlpha&&e.selectAlpha(...a),["prevent","stop"]))},[i("canvas",dt,null,512),i("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}Q.render=ht;Q.__file="src/color/Alpha.vue";var ee=w({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,s=this.height,o=this.alphaSize,n=X(o),r=e.getContext("2d");e.width=t,e.height=s,r.fillStyle=r.createPattern(n,"repeat"),r.fillRect(0,0,t,s),r.fillStyle=this.color,r.fillRect(0,0,t,s)}}});function pt(e,t,s,o,n,r){return h(),m("canvas")}ee.render=pt;ee.__file="src/color/Preview.vue";var te=w({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:s}=e,{top:o,left:n,width:r,height:a}=this.suckerCanvas.getBoundingClientRect(),c=t-n,l=s-o,v=this.suckerCanvas.getContext("2d").getImageData(Math.min(c,r-1),Math.min(l,a-1),1,1);let[g,_,S,C]=v.data;C=parseFloat((C/255).toFixed(2));const y=this.suckerPreview.style;Object.assign(y,{position:"absolute",left:t+20+"px",top:s-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${g}, ${_}, ${S}, ${C})`,zIndex:95}),this.suckerArea.length&&t>=this.suckerArea[0]&&s>=this.suckerArea[1]&&t<=this.suckerArea[2]&&s<=this.suckerArea[3]?y.display="":y.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:s,clientY:o}=t,{top:n,left:r,width:a,height:c}=e.getBoundingClientRect(),l=s-r,f=o-n,g=e.getContext("2d").getImageData(Math.min(l,a-1),Math.min(f,c-1),1,1);let[_,S,C,y]=g.data;y=parseFloat((y/255).toFixed(2)),this.$emit("selectSucker",{r:_,g:S,b:C,a:y})}))}}});const mt=i("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),_t={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},ft=i("g",{fill:"none","fill-rule":"evenodd"},[i("g",{transform:"translate(1 1)","stroke-width":"4"},[i("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),i("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[i("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function gt(e,t,s,o,n,r){return h(),m("div",null,[e.isSucking?z("v-if",!0):(h(),m("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:t[1]||(t[1]=(...a)=>e.openSucker&&e.openSucker(...a))},[mt],2)),e.isSucking?(h(),m("svg",_t,[ft])):z("v-if",!0)])}te.render=gt;te.__file="src/color/Sucker.vue";var oe=w({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:t}){return{modelColor:de({get(){return e.color||""},set(o){t("inputColor",o)}})}}});const vt={class:"color-type"},St={class:"name"};function yt(e,t,s,o,n,r){return h(),m("div",vt,[i("span",St,D(e.name),1),Ae(i("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.modelColor=a),class:"value"},null,512),[[He,e.modelColor]])])}oe.render=yt;oe.__file="src/color/Box.vue";var se=w({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:t}){const s=M(),o=M([]),n=M();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),n.value=X(4).toDataURL(),ue(()=>{r(s.value)});function r(c){if(!c)return;const l=o.value||[],f=l.indexOf(c);f>=0&&l.splice(f,1),l.length>=8&&(l.length=7),l.unshift(c),o.value=l||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(l))}function a(c){t("selectColor",c)}return{setColorsHistory:r,colorsHistory:o,color:s,imgAlphaBase64:n,selectColor:a}}});const bt={class:"colors"},kt={key:0,class:"colors history"};function Ct(e,t,s,o,n,r){return h(),m("div",null,[i("ul",bt,[(h(!0),m(E,null,L(e.colorsDefault,a=>(h(),m("li",{key:a,class:"item",onClick:c=>e.selectColor(a)},[i("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),i("div",{style:{background:a},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),m("ul",kt,[(h(!0),m(E,null,L(e.colorsHistory,a=>(h(),m("li",{key:a,class:"item",onClick:c=>e.selectColor(a)},[i("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),i("div",{style:{background:a},class:"color"},null,4)],8,["onClick"]))),128))])):z("v-if",!0)])}se.render=Ct;se.__file="src/color/Colors.vue";var N=w({components:{Saturation:J,Hue:Z,Alpha:Q,Preview:ee,Sucker:te,Box:oe,Colors:se},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return nt(this.rgba,!0)}},created(){Object.assign(this,T(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:s,b:o,h:n,s:r,v:a}=T(e);Object.assign(this,{r:t,g:s,b:o,h:n,s:r,v:a}),this.setText()},selectHue(e){const{r:t,g:s,b:o,h:n,s:r,v:a}=T(e);Object.assign(this,{r:t,g:s,b:o,h:n,s:r,v:a}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:s,b:o,a:n,h:r,s:a,v:c}=T(e);Object.assign(this,{r:t,g:s,b:o,a:n,h:r,s:a,v:c}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:s,b:o,a:n,h:r,s:a,v:c}=T(e);Object.assign(this,{r:t,g:s,b:o,a:n,h:r,s:a,v:c}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:s,b:o,a:n,h:r,s:a,v:c}=T(e);Object.assign(this,{r:t,g:s,b:o,a:n,h:r,s:a,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:s,b:o,a:n,h:r,s:a,v:c}=T(e);Object.assign(this,{r:t,g:s,b:o,a:n,h:r,s:a,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const $t={class:"color-set"};function wt(e,t,s,o,n,r){const a=d("Saturation"),c=d("Hue"),l=d("Alpha"),f=d("Preview"),v=d("Sucker"),g=d("Box"),_=d("Colors");return h(),m("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[i("div",$t,[i(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),i(c,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),i(l,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),i("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[i(f,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?z("v-if",!0):(h(),m(v,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),i(g,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),i(g,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),i(_,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),z(" custom options "),xe(e.$slots,"default")],6)}N.render=wt;N.__file="src/color/ColorPicker.vue";N.install=e=>{e.component(N.name,N)};const R=e=>(he("data-v-452b75c6"),e=e(),pe(),e),Ft=x("\u9879\u76EE\u914D\u7F6E"),At=R(()=>A("span",{class:"title"},"\u7CFB\u7EDF\u4E3B\u9898",-1)),Ht=R(()=>A("span",{class:"title"},"\u754C\u9762\u663E\u793A",-1)),xt=R(()=>A("span",{class:"label"},"\u9875\u7B7E\u663E\u793A",-1)),Et=R(()=>A("span",{class:"label"},"\u9875\u7B7E\u98CE\u683C",-1)),Dt=R(()=>A("span",{class:"label"},"\u52A8\u753B\u663E\u793A",-1)),Tt=R(()=>A("span",{class:"label"},"\u52A8\u753B\u5207\u6362\u7C7B\u578B",-1)),Bt=w({props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,o=P(),{changeThemeColor:n}=tt(),r=["#1890ff","#409EFF","#2d8cf0","#007AFF","#5ac8fa","#5856D6","#536dfe","#9c27b0","#AF52DE","#0096c7","#00C1D4","#34C759","#43a047","#7cb342","#c0ca33","#78DEC7","#e53935","#d81b60","#f4511e","#fb8c00","#ffb300","#fdd835","#6d4c41","#546e7a"];let a=de({get:()=>s.modelValue,set:l=>{t("update:modelValue",l)}});o.themeColor&&n(o.themeColor);const c=l=>{!/^#[0-9A-Za-z]{6}/.test(l.hex)||(console.log(l),o.setThemeColor(l.hex),n(o.themeColor))};return(l,f)=>{const v=d("a-divider"),g=d("a-row"),_=d("a-switch"),S=d("a-option"),C=d("a-select"),y=d("a-space"),F=d("a-drawer");return h(),m(F,{visible:p(a),"onUpdate:visible":f[2]||(f[2]=b=>K(a)?a.value=b:a=b),width:"300px","unmount-on-close":"",footer:!1},{title:u(()=>[Ft]),default:u(()=>[i(y,{size:15,direction:"vertical",fill:""},{default:u(()=>[i(v,{orientation:"center"},{default:u(()=>[At]),_:1}),i(g,{justify:"center"},{default:u(()=>[i(p(N),{theme:"dark",color:p(o).themeColor,"sucker-hide":!0,"colors-default":r,onChangeColor:c},null,8,["color"])]),_:1}),i(v,{orientation:"center"},{default:u(()=>[Ht]),_:1}),i(g,{justify:"space-between",align:"middle"},{default:u(()=>[xt,i(_,{size:"medium","model-value":p(o).tab.visible,onChange:f[0]||(f[0]=b=>p(o).setTabVisible(b))},null,8,["model-value"])]),_:1}),i(g,{justify:"space-between",align:"middle"},{default:u(()=>[Et,i(C,{placeholder:"\u8BF7\u9009\u62E9","model-value":p(o).tab.mode,disabled:!p(o).tab.visible,style:{width:"120px"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:u(()=>[(h(!0),B(E,null,L(p(o).tab.modeList,b=>(h(),m(S,{key:b.value,value:b.value,onClick:H=>p(o).setTabMode(b.value)},{default:u(()=>[x(D(b.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1}),i(g,{justify:"space-between",align:"middle"},{default:u(()=>[Dt,i(_,{size:"medium","model-value":p(o).animate.visible,onChange:f[1]||(f[1]=b=>p(o).setAnimateVisible(b))},null,8,["model-value"])]),_:1}),i(g,{justify:"space-between",align:"middle"},{default:u(()=>[Tt,i(C,{placeholder:"\u8BF7\u9009\u62E9","model-value":p(o).animate.mode,disabled:!p(o).animate.visible,style:{width:"120px"}},{default:u(()=>[(h(!0),B(E,null,L(p(o).animate.modeList,b=>(h(),m(S,{key:b.value,value:b.value,onClick:H=>p(o).setAnimateMode(b.value)},{default:u(()=>[x(D(b.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});var Lt=I(Bt,[["__scopeId","data-v-452b75c6"]]);const ge=e=>(he("data-v-06f527aa"),e=e(),pe(),e),zt=ge(()=>A("img",{src:Ie},null,-1)),Nt={class:"gi_hover"},It=ge(()=>A("img",{src:Re},null,-1)),Rt={class:"doption-icon",style:{background:"rgba(var(--primary-6))"}},Mt=x("\u4E2A\u4EBA\u4E2D\u5FC3"),Pt={class:"doption-icon",style:{background:"rgba(var(--warning-6))"}},Ot=x("\u9000\u51FA\u767B\u5F55"),jt=w({setup(e){const t=U(),s=G(),o=Ne(),n=P(),{isFullScreen:r,onToggleFullScreen:a}=st(),{onToggleThemeDark:c}=ot();let l=M(!1);const f=()=>{t.push("/")},v=()=>{},g=()=>{Ee.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{t.replace("/login")}})};return(_,S)=>{const C=d("icon-settings"),y=d("a-button"),F=d("a-tooltip"),b=d("icon-notification"),H=d("icon-fullscreen"),$=d("icon-fullscreen-exit"),k=d("icon-sun-fill"),ve=d("icon-moon-fill"),Se=d("a-avatar"),ye=d("icon-down"),be=d("icon-user"),ne=d("a-doption"),ke=d("icon-export"),Ce=d("a-dropdown"),$e=d("a-space"),we=d("a-layout-header");return h(),m(we,null,{default:u(()=>[A("section",{class:"system-logo",onClick:f},[zt,A("span",Nt,D(p(s).systemName),1)]),i($e,{class:"system-head",size:"medium"},{default:u(()=>[i(F,{content:"\u9879\u76EE\u914D\u7F6E",position:"bl"},{default:u(()=>[i(y,{size:"mini",class:"gi_hover_btn",onClick:S[0]||(S[0]=V=>K(l)?l.value=!p(l):l=!p(l))},{icon:u(()=>[i(C,{size:18})]),_:1})]),_:1}),i(F,{content:"\u6D88\u606F\u901A\u77E5",position:"bottom"},{default:u(()=>[i(y,{size:"mini",class:"gi_hover_btn"},{icon:u(()=>[i(b,{size:18})]),_:1})]),_:1}),i(F,{content:"\u5168\u5C4F\u5207\u6362",position:"bottom"},{default:u(()=>[i(y,{size:"mini",class:"gi_hover_btn",onClick:p(a)},{icon:u(()=>[p(r)?(h(),m($,{key:1,size:18})):(h(),m(H,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),i(F,{content:"\u4E3B\u9898\u5207\u6362",position:"bottom"},{default:u(()=>[i(y,{size:"mini",class:"gi_hover_btn",onClick:p(c)},{icon:u(()=>[p(n).theme==="light"?(h(),m(k,{key:0,size:18})):(h(),m(ve,{key:1,size:18}))]),_:1},8,["onClick"])]),_:1}),i(Se,{size:32},{default:u(()=>[It]),_:1}),i(Ce,{trigger:"hover"},{content:u(()=>[i(ne,{onClick:v},{icon:u(()=>[A("span",Rt,[i(be)])]),default:u(()=>[Mt]),_:1}),i(ne,{onClick:g},{icon:u(()=>[A("span",Pt,[i(ke)])]),default:u(()=>[Ot]),_:1})]),default:u(()=>[i(y,{type:"text",size:"medium",class:"username"},{default:u(()=>[A("span",null,D(p(o).userName),1),i(ye)]),_:1})]),_:1})]),_:1}),i(Lt,{modelValue:p(l),"onUpdate:modelValue":S[1]||(S[1]=V=>K(l)?l.value=V:l=V)},null,8,["modelValue"])]),_:1})}}});var Vt=I(jt,[["__scopeId","data-v-06f527aa"]]);const Kt=w({setup(e){const t=me(),s=P();return(o,n)=>{const r=d("router-view"),a=d("a-layout");return h(),m(a,{class:"main"},{default:u(()=>[i(r,null,{default:u(({Component:c,route:l})=>[i(De,{name:p(s).transitionName,mode:"out-in",appear:""},{default:u(()=>[(h(),m(Te,{include:p(t).cacheList},[(h(),m(Be(c),{key:l.path}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})]),_:1})}}});var Wt=I(Kt,[["__scopeId","data-v-1e675132"]]);const Ut={key:0,class:"nav-tab"},Gt=x("\u5173\u95ED\u5F53\u524D\u9875\u7B7E"),Yt=x("\u5173\u95ED\u6240\u6709\u9875\u7B7E"),qt=w({setup(e){const t=Le(),s=U(),o=G(),n=me(),r=P();ce(()=>{a()}),ze(()=>t.path,()=>{a()});const a=()=>{n.addTabItem({name:t.meta.title||"\u672A\u547D\u540D",path:t.path,componentName:t.name}),t.meta.keepAlive&&n.addCacheItem(t.name)},c=v=>{console.log("\u70B9\u51FB\u524D",n.cacheList,v),s.push({path:v}),o.setActivePath(v)},l=v=>{let g=n.tabList.find(_=>_.path===v);n.removeTabItem(v),n.removeCacheItem(g.componentName)},f=()=>{n.clearTabList()};return(v,g)=>{const _=d("a-tab-pane"),S=d("icon-settings"),C=d("a-button"),y=d("icon-minus-circle-fill"),F=d("a-doption"),b=d("icon-close-circle-fill"),H=d("a-dropdown"),$=d("a-tabs");return p(r).tab.visible?(h(),B("div",Ut,[i($,{type:p(r).tab.mode,"active-key":p(t).path,editable:"",onTabClick:c,onDelete:l},{extra:u(()=>[i(H,{trigger:"hover"},{content:u(()=>[i(F,{onClick:g[0]||(g[0]=k=>l(p(t).path))},{icon:u(()=>[i(y,{size:20,style:{color:"#ff7d00"}})]),default:u(()=>[Gt]),_:1}),i(F,{onClick:f},{icon:u(()=>[i(b,{size:20,style:{color:"#f53f3f"}})]),default:u(()=>[Yt]),_:1})]),default:u(()=>[i(C,{type:"primary",class:"extra-btn"},{icon:u(()=>[i(S,{size:18})]),_:1})]),_:1})]),default:u(()=>[(h(!0),B(E,null,L(p(n).tabList,k=>(h(),m(_,{key:k.path,title:k.name,closable:k.path!=="/home"},null,8,["title","closable"]))),128))]),_:1},8,["type","active-key"])])):z("",!0)}}});var Xt=I(qt,[["__scopeId","data-v-6a64a961"]]);const Jt=w({setup(e){return(t,s)=>{const o=d("a-layout");return h(),m(o,{class:"layout"},{default:u(()=>[i(je),i(o,null,{default:u(()=>[i(Vt),i(Xt),i(Wt)]),_:1})]),_:1})}}});var no=I(Jt,[["__scopeId","data-v-2d039723"]]);export{no as default};
