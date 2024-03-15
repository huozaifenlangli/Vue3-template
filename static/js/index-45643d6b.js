import{c as e,_ as a,g as t,E as s,f as l,m as o,r,k as n,j as i,aq as d,a3 as p,v as f,x as u,R as c,y as m,Q as b,G as v,J as y,B as C,z as h,F as _,H as k,I as w,D as E,aa as j,T as R,bb as S,a0 as g,Z as x,q as z,aV as D,aS as L,n as A}from"./index-0da987e2.js";import{d as I,a as O,E as T,u as $}from"./el-overlay-57aa9b17.js";import{E as B}from"./el-scrollbar-6fd5e044.js";import{E as P}from"./focus-trap-09ec5375.js";import{u as V}from"./index-0191a117.js";import"./vnode-4bf6f067.js";import"./icon-4e42d34f.js";import"./event-b1948b12.js";import"./index-1255d72d.js";import"./scroll-392909db.js";import"./aria-bf06b440.js";const q=e({...I,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),H=O,F=t({name:"ElDrawer",components:{ElOverlay:T,ElFocusTrap:P,ElIcon:s,Close:l.Close},inheritAttrs:!1,props:q,emits:H,setup(e,{slots:a}){V({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},o((()=>!!a.title))),V({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},o((()=>!!e.customClass)));const t=r(),s=r(),l=n("drawer"),{t:p}=i(),f=o((()=>"rtl"===e.direction||"ltr"===e.direction)),u=o((()=>d(e.size)));return{...$(e,t),drawerRef:t,focusStartRef:s,isHorizontal:f,drawerSize:u,ns:l,t:p}}}),U=["aria-label","aria-labelledby","aria-describedby"],J=["id","aria-level"],Q=["aria-label"],G=["id"];const K=g(a(F,[["render",function(e,a,t,s,l,o){const r=p("close"),n=p("el-icon"),i=p("el-focus-trap"),d=p("el-overlay");return f(),u(S,{to:"body",disabled:!e.appendToBody},[c(R,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:m((()=>[b(c(d,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:m((()=>[c(i,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m((()=>[v("div",y({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:a[1]||(a[1]=C((()=>{}),["stop"]))}),[v("span",{ref:"focusStartRef",class:h(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(f(),_("header",{key:0,class:h(e.ns.e("header"))},[e.$slots.title?k(e.$slots,"title",{key:1},(()=>[E(" DEPRECATED SLOT ")])):k(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(()=>[e.$slots.title?E("v-if",!0):(f(),_("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:h(e.ns.e("title"))},w(e.title),11,J))])),e.showClose?(f(),_("button",{key:2,"aria-label":e.t("el.drawer.close"),class:h(e.ns.e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...a)=>e.handleClose&&e.handleClose(...a))},[c(n,{class:h(e.ns.e("close"))},{default:m((()=>[c(r)])),_:1},8,["class"])],10,Q)):E("v-if",!0)],2)):E("v-if",!0),e.rendered?(f(),_("div",{key:1,id:e.bodyId,class:h(e.ns.e("body"))},[k(e.$slots,"default")],10,G)):E("v-if",!0),e.$slots.footer?(f(),_("div",{key:2,class:h(e.ns.e("footer"))},[k(e.$slots,"footer")],2)):E("v-if",!0)],16,U)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[j,e.visible]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","drawer.vue"]])),M=t({__name:"index",emits:["label","node"],setup(e,{expose:a,emit:t}){const s=t,l=D((()=>L((()=>import("./line-34573608.js")),["./line-34573608.js","./index-0da987e2.js","..\\css\\index.css","./el-form-item-0100fd01.js","./constants-9957b712.js","./el-button-5b8577ff.js","./index-0191a117.js","./index-1255d72d.js","./icon-4e42d34f.js","..\\css\\el-button.css","..\\css\\el-form-item.css","./el-input-40671773.js","./typescript-a312af3e.js","./event-b1948b12.js","..\\css\\el-input.css"],import.meta.url))),o=D((()=>L((()=>import("./node-8c0ae3e1.js")),["./node-8c0ae3e1.js","./index-0da987e2.js","..\\css\\index.css","./el-checkbox-2a8481df.js","./event-b1948b12.js","./el-button-5b8577ff.js","./index-0191a117.js","./constants-9957b712.js","./index-1255d72d.js","./icon-4e42d34f.js","..\\css\\el-button.css","..\\css\\el-checkbox.css","./el-input-40671773.js","./typescript-a312af3e.js","..\\css\\el-input.css","./el-select-9c7dbb75.js","./el-popper-2bd5002f.js","./aria-bf06b440.js","./focus-trap-09ec5375.js","..\\css\\el-popper.css","./el-scrollbar-6fd5e044.js","..\\css\\el-scrollbar.css","./scroll-392909db.js","./index-85646fab.js","..\\css\\el-select.css","./el-form-item-0100fd01.js","..\\css\\el-form-item.css","./index-6ee5f212.js","./vnode-4bf6f067.js","..\\css\\node.css"],import.meta.url))),n=r(),i=r(),d=x({isOpen:!1,nodeData:{type:"node"},jsplumbConn:{}}),p=()=>{d.isOpen=!1},b=e=>{d.jsplumbConn.label=e,s("label",d.jsplumbConn)},v=e=>{s("node",e)};return a({open:(e,a)=>{d.isOpen=!0,d.jsplumbConn=a,d.nodeData=e,A((()=>{setTimeout((()=>{"line"===e.type?n.value.getParentData(e):i.value.getParentData(e)}),300)}))}}),(e,a)=>{const t=B,s=K;return f(),_("div",null,[c(s,{title:("line"===d.nodeData.type?"线":"节点")+"操作",modelValue:d.isOpen,"onUpdate:modelValue":a[0]||(a[0]=e=>d.isOpen=e),size:"320px"},{default:m((()=>[c(t,null,{default:m((()=>["line"===d.nodeData.type?(f(),u(z(l),{key:0,onChange:b,onClose:p,ref_key:"lineRef",ref:n},null,512)):(f(),u(z(o),{key:1,onSubmit:v,onClose:p,ref_key:"nodeRef",ref:i},null,512))])),_:1})])),_:1},8,["title","modelValue"])])}}});export{M as default};