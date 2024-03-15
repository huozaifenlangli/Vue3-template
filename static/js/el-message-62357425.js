import{c as e,g as s,k as t,m as n,V as a,v as o,F as l,H as r,R as u,y as i,Q as d,G as p,z as c,q as m,I as f,aa as g,T as y,_ as v,a0 as x,e as b,s as C,b6 as h,aX as T,r as N,M as _,w as B,x as S,A as k,D as I,E as L,C as M,N as w,B as E,b7 as $,U as z,b8 as H,K as D,b9 as j,aC as F,ba as U}from"./index-0da987e2.js";import{m as R}from"./typescript-a312af3e.js";import{i as q,T as A,a as O}from"./icon-4e42d34f.js";import{E as K}from"./aria-bf06b440.js";const Z=e({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),G=["textContent"],Q=s({name:"ElBadge"});const V=x(v(s({...Q,props:Z,setup(e,{expose:s}){const v=e,x=t("badge"),b=n((()=>v.isDot?"":a(v.value)&&a(v.max)&&v.max<v.value?`${v.max}+`:`${v.value}`));return s({content:b}),(e,s)=>(o(),l("div",{class:c(m(x).b())},[r(e.$slots,"default"),u(y,{name:`${m(x).namespace.value}-zoom-in-center`,persisted:""},{default:i((()=>[d(p("sup",{class:c([m(x).e("content"),m(x).em("content",e.type),m(x).is("fixed",!!e.$slots.default),m(x).is("dot",e.isDot)]),textContent:f(m(b))},null,10,G),[[g,!e.hidden&&(m(b)||e.isDot)]])])),_:1},8,["name"])],2))}}),[["__file","badge.vue"]])),X=["success","info","warning","error"],J=R({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:C.isClient?document.body:void 0}),P=e({customClass:{type:String,default:J.customClass},center:{type:Boolean,default:J.center},dangerouslyUseHTMLString:{type:Boolean,default:J.dangerouslyUseHTMLString},duration:{type:Number,default:J.duration},icon:{type:q,default:J.icon},id:{type:String,default:J.id},message:{type:b([String,Object,Function]),default:J.message},onClose:{type:b(Function),required:!1},showClose:{type:Boolean,default:J.showClose},type:{type:String,values:X,default:J.type},offset:{type:Number,default:J.offset},zIndex:{type:Number,default:J.zIndex},grouping:{type:Boolean,default:J.grouping},repeatNum:{type:Number,default:J.repeatNum}}),W=h([]),Y=e=>{const{prev:s}=(e=>{const s=W.findIndex((s=>s.id===e)),t=W[s];let n;return s>0&&(n=W[s-1]),{current:t,prev:n}})(e);return s?s.vm.exposed.bottom.value:0},ee=["id"],se=["innerHTML"],te=s({name:"ElMessage"});var ne=v(s({...te,props:P,emits:{destroy:()=>!0},setup(e,{expose:s}){const t=e,{Close:a}=O,{ns:v,zIndex:x}=T("message"),{currentZIndex:b,nextZIndex:h}=x,$=N(),z=N(!1),H=N(0);let D;const j=n((()=>t.type?"error"===t.type?"danger":t.type:"info")),F=n((()=>{const e=t.type;return{[v.bm("icon",e)]:e&&A[e]}})),U=n((()=>t.icon||A[t.type]||"")),R=n((()=>Y(t.id))),q=n((()=>((e,s)=>W.findIndex((s=>s.id===e))>0?20:s)(t.id,t.offset)+R.value)),Z=n((()=>H.value+q.value)),G=n((()=>({top:`${q.value}px`,zIndex:b.value})));function Q(){0!==t.duration&&({stop:D}=C.useTimeoutFn((()=>{J()}),t.duration))}function X(){null==D||D()}function J(){z.value=!1}return _((()=>{Q(),h(),z.value=!0})),B((()=>t.repeatNum),(()=>{X(),Q()})),C.useEventListener(document,"keydown",(function({code:e}){e===K.esc&&J()})),C.useResizeObserver($,(()=>{H.value=$.value.getBoundingClientRect().height})),s({visible:z,bottom:Z,close:J}),(e,s)=>(o(),S(y,{name:m(v).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:s[0]||(s[0]=s=>e.$emit("destroy")),persisted:""},{default:i((()=>[d(p("div",{id:e.id,ref_key:"messageRef",ref:$,class:c([m(v).b(),{[m(v).m(e.type)]:e.type},m(v).is("center",e.center),m(v).is("closable",e.showClose),e.customClass]),style:k(m(G)),role:"alert",onMouseenter:X,onMouseleave:Q},[e.repeatNum>1?(o(),S(m(V),{key:0,value:e.repeatNum,type:m(j),class:c(m(v).e("badge"))},null,8,["value","type","class"])):I("v-if",!0),m(U)?(o(),S(m(L),{key:1,class:c([m(v).e("icon"),m(F)])},{default:i((()=>[(o(),S(M(m(U))))])),_:1},8,["class"])):I("v-if",!0),r(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(o(),l(w,{key:1},[I(" Caution here, message could've been compromised, never use user's input as message "),p("p",{class:c(m(v).e("content")),innerHTML:e.message},null,10,se)],2112)):(o(),l("p",{key:0,class:c(m(v).e("content"))},f(e.message),3))])),e.showClose?(o(),S(m(L),{key:2,class:c(m(v).e("closeBtn")),onClick:E(J,["stop"])},{default:i((()=>[u(m(a))])),_:1},8,["class","onClick"])):I("v-if",!0)],46,ee),[[g,z.value]])])),_:3},8,["name","onBeforeLeave"]))}}),[["__file","message.vue"]]);let ae=1;const oe=e=>{const s=!e||z(e)||H(e)||D(e)?{message:e}:e,t={...J,...s};if(t.appendTo){if(z(t.appendTo)){let e=document.querySelector(t.appendTo);F(e)||(e=document.body),t.appendTo=e}}else t.appendTo=document.body;return t},le=({appendTo:e,...s},t)=>{const n="message_"+ae++,a=s.onClose,o=document.createElement("div"),l={...s,id:n,onClose:()=>{null==a||a(),(e=>{const s=W.indexOf(e);if(-1===s)return;W.splice(s,1);const{handler:t}=e;t.close()})(p)},onDestroy:()=>{j(null,o)}},r=u(ne,l,D(l.message)||H(l.message)?{default:D(l.message)?l.message:()=>l.message}:null);r.appContext=t||re._context,j(r,o),e.appendChild(o.firstElementChild);const i=r.component,d={close:()=>{i.exposed.visible.value=!1}},p={id:n,vnode:r,vm:i,handler:d,props:r.component.props};return p},re=(e={},s)=>{if(!C.isClient)return{close:()=>{}};if(a($.max)&&W.length>=$.max)return{close:()=>{}};const t=oe(e);if(t.grouping&&W.length){const e=W.find((({vnode:e})=>{var s;return(null==(s=e.props)?void 0:s.message)===t.message}));if(e)return e.props.repeatNum+=1,e.props.type=t.type,e.handler}const n=le(t,s);return W.push(n),n.handler};X.forEach((e=>{re[e]=(s={},t)=>{const n=oe(s);return re({...n,type:e},t)}})),re.closeAll=function(e){for(const s of W)e&&e!==s.props.type||s.handler.close()},re._context=null;const ue=U(re,"$message");export{ue as E};