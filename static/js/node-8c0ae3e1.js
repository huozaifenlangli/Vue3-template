import{aM as e,b8 as a,c as l,e as t,g as o,a4 as s,l as r,au as n,k as d,r as i,w as u,n as p,s as c,v as m,F as b,z as v,q as f,A as g,_ as h,m as y,M as x,az as V,R as _,E as k,f as C,t as w,H as $,S as R,U as P,V as j,ad as N,Z as A,aA as T,Q as E,aa as S,D as U,a0 as B,a1 as F,a3 as M,y as q,P as z,N as I,O as L,x as K,G as O,aI as D,ao as G}from"./index-0da987e2.js";import{E as H,a as Q}from"./el-checkbox-2a8481df.js";import{E as W}from"./el-input-40671773.js";import{c as J,a as X,b as Y}from"./el-select-9c7dbb75.js";import{E as Z}from"./el-scrollbar-6fd5e044.js";import"./el-popper-2bd5002f.js";import{a as ee,E as ae}from"./el-form-item-0100fd01.js";import{E as le}from"./el-button-5b8577ff.js";import{i as te}from"./index-6ee5f212.js";import{m as oe}from"./typescript-a312af3e.js";import{E as se}from"./aria-bf06b440.js";import{U as re}from"./event-b1948b12.js";import{f as ne}from"./vnode-4bf6f067.js";import{u as de}from"./index-0191a117.js";import"./icon-4e42d34f.js";import"./index-1255d72d.js";import"./scroll-392909db.js";import"./index-85646fab.js";import"./constants-9957b712.js";import"./focus-trap-09ec5375.js";const ie=(l,t)=>{const o={},s=e([]);return{children:s,addChild:e=>{o[e.uid]=e,s.value=((e,l,t)=>ne(e.subTree).filter((e=>{var t;return a(e)&&(null==(t=e.type)?void 0:t.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>t[e])).filter((e=>!!e)))(l,t,o)},removeChild:e=>{delete o[e],s.value=s.value.filter((a=>a.uid!==e))}}},ue=Symbol("tabsRootContextKey"),pe=l({tabs:{type:t(Array),default:()=>oe([])}}),ce="ElTabBar",me=o({name:ce});var be=h(o({...me,props:pe,setup(e,{expose:a}){const l=e,t=s(),o=r(ue);o||n(ce,"<el-tabs><el-tab-bar /></el-tabs>");const h=d("tabs"),y=i(),x=i(),V=()=>x.value=(()=>{let e=0,a=0;const s=["top","bottom"].includes(o.props.tabPosition)?"width":"height",r="width"===s?"x":"y",n="x"===r?"left":"top";return l.tabs.every((o=>{var r,d;const i=null==(d=null==(r=t.parent)?void 0:r.refs)?void 0:d[`tab-${o.uid}`];if(!i)return!1;if(!o.active)return!0;e=i[`offset${J(n)}`],a=i[`client${J(s)}`];const u=window.getComputedStyle(i);return"width"===s&&(l.tabs.length>1&&(a-=Number.parseFloat(u.paddingLeft)+Number.parseFloat(u.paddingRight)),e+=Number.parseFloat(u.paddingLeft)),!1})),{[s]:`${a}px`,transform:`translate${J(r)}(${e}px)`}})();return u((()=>l.tabs),(async()=>{await p(),V()}),{immediate:!0}),c.useResizeObserver(y,(()=>V())),a({ref:y,update:V}),(e,a)=>(m(),b("div",{ref_key:"barRef",ref:y,class:v([f(h).e("active-bar"),f(h).is(f(o).props.tabPosition)]),style:g(x.value)},null,6))}}),[["__file","tab-bar.vue"]]);const ve=l({panes:{type:t(Array),default:()=>oe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),fe="ElTabNav",ge=o({name:fe,props:ve,emits:{tabClick:(e,a,l)=>l instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:l}){const t=s(),o=r(ue);o||n(fe,"<el-tabs><tab-nav /></el-tabs>");const m=d("tabs"),b=c.useDocumentVisibility(),v=c.useWindowFocus(),f=i(),g=i(),h=i(),w=i(),$=i(!1),R=i(0),P=i(!1),j=i(!0),N=y((()=>["top","bottom"].includes(o.props.tabPosition)?"width":"height")),A=y((()=>({transform:`translate${"width"===N.value?"X":"Y"}(-${R.value}px)`}))),T=()=>{if(!f.value)return;const e=f.value[`offset${J(N.value)}`],a=R.value;if(!a)return;const l=a>e?a-e:0;R.value=l},E=()=>{if(!f.value||!g.value)return;const e=g.value[`offset${J(N.value)}`],a=f.value[`offset${J(N.value)}`],l=R.value;if(e-l<=a)return;const t=e-l>2*a?l+a:e-a;R.value=t},S=async()=>{const e=g.value;if(!($.value&&h.value&&f.value&&e))return;await p();const a=h.value.querySelector(".is-active");if(!a)return;const l=f.value,t=["top","bottom"].includes(o.props.tabPosition),s=a.getBoundingClientRect(),r=l.getBoundingClientRect(),n=t?e.offsetWidth-r.width:e.offsetHeight-r.height,d=R.value;let i=d;t?(s.left<r.left&&(i=d-(r.left-s.left)),s.right>r.right&&(i=d+s.right-r.right)):(s.top<r.top&&(i=d-(r.top-s.top)),s.bottom>r.bottom&&(i=d+(s.bottom-r.bottom))),i=Math.max(i,0),R.value=Math.min(i,n)},U=()=>{var a;if(!g.value||!f.value)return;e.stretch&&(null==(a=w.value)||a.update());const l=g.value[`offset${J(N.value)}`],t=f.value[`offset${J(N.value)}`],o=R.value;t<l?($.value=$.value||{},$.value.prev=o,$.value.next=o+t<l,l-o<t&&(R.value=l-t)):($.value=!1,o>0&&(R.value=0))},B=e=>{const a=e.code,{up:l,down:t,left:o,right:s}=se;if(![l,t,o,s].includes(a))return;const r=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),n=r.indexOf(e.target);let d;d=a===o||a===l?0===n?r.length-1:n-1:n<r.length-1?n+1:0,r[d].focus({preventScroll:!0}),r[d].click(),F()},F=()=>{j.value&&(P.value=!0)},M=()=>P.value=!1;return u(b,(e=>{"hidden"===e?j.value=!1:"visible"===e&&setTimeout((()=>j.value=!0),50)})),u(v,(e=>{e?setTimeout((()=>j.value=!0),50):j.value=!1})),c.useResizeObserver(h,U),x((()=>setTimeout((()=>S()),0))),V((()=>U())),a({scrollToActiveTab:S,removeFocus:M}),u((()=>e.panes),(()=>t.update()),{flush:"post",deep:!0}),()=>{const a=$.value?[_("span",{class:[m.e("nav-prev"),m.is("disabled",!$.value.prev)],onClick:T},[_(k,null,{default:()=>[_(C.ArrowLeft,null,null)]})]),_("span",{class:[m.e("nav-next"),m.is("disabled",!$.value.next)],onClick:E},[_(k,null,{default:()=>[_(C.ArrowRight,null,null)]})])]:null,t=e.panes.map(((a,t)=>{var s,r,n,d;const i=a.uid,u=a.props.disabled,p=null!=(r=null!=(s=a.props.name)?s:a.index)?r:`${t}`,c=!u&&(a.isClosable||e.editable);a.index=`${t}`;const b=c?_(k,{class:"is-icon-close",onClick:e=>l("tabRemove",a,e)},{default:()=>[_(C.Close,null,null)]}):null,v=(null==(d=(n=a.slots).label)?void 0:d.call(n))||a.props.label,f=!u&&a.active?0:-1;return _("div",{ref:`tab-${i}`,class:[m.e("item"),m.is(o.props.tabPosition),m.is("active",a.active),m.is("disabled",u),m.is("closable",c),m.is("focus",P.value)],id:`tab-${p}`,key:`tab-${i}`,"aria-controls":`pane-${p}`,role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>F(),onBlur:()=>M(),onClick:e=>{M(),l("tabClick",a,p,e)},onKeydown:e=>{!c||e.code!==se.delete&&e.code!==se.backspace||l("tabRemove",a,e)}},[v,b])}));return _("div",{ref:h,class:[m.e("nav-wrap"),m.is("scrollable",!!$.value),m.is(o.props.tabPosition)]},[a,_("div",{class:m.e("nav-scroll"),ref:f},[_("div",{class:[m.e("nav"),m.is(o.props.tabPosition),m.is("stretch",e.stretch&&["top","bottom"].includes(o.props.tabPosition))],ref:g,style:A.value,role:"tablist",onKeydown:B},[e.type?null:_(be,{ref:w,tabs:[...e.panes]},null),t])])])}}}),he=l({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:t(Function),default:()=>!0},stretch:Boolean}),ye=e=>P(e)||j(e),xe=o({name:"ElTabs",props:he,emits:{[re]:e=>ye(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ye(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ye(e),tabAdd:()=>!0},setup(e,{emit:a,slots:l,expose:t}){var o,r;const n=d("tabs"),{children:c,addChild:m,removeChild:b}=ie(s(),"ElTabPane"),v=i(),f=i(null!=(r=null!=(o=e.modelValue)?o:e.activeName)?r:"0"),g=async(l,t=!1)=>{var o,s,r;if(f.value!==l&&!R(l))try{!1!==await(null==(o=e.beforeLeave)?void 0:o.call(e,l,f.value))&&(f.value=l,t&&(a(re,l),a("tabChange",l)),null==(r=null==(s=v.value)?void 0:s.removeFocus)||r.call(s))}catch(n){}},h=(e,l,t)=>{e.props.disabled||(g(l,!0),a("tabClick",e,t))},x=(e,l)=>{e.props.disabled||R(e.props.name)||(l.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},V=()=>{a("edit",void 0,"add"),a("tabAdd")};return de({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},y((()=>!!e.activeName))),u((()=>e.activeName),(e=>g(e))),u((()=>e.modelValue),(e=>g(e))),u(f,(async()=>{var e;await p(),null==(e=v.value)||e.scrollToActiveTab()})),w(ue,{props:e,currentName:f,registerPane:m,unregisterPane:b}),t({currentName:f}),()=>{const a=l.addIcon,t=e.editable||e.addable?_("span",{class:n.e("new-tab"),tabindex:"0",onClick:V,onKeydown:e=>{e.code===se.enter&&V()}},[a?$(l,"addIcon"):_(k,{class:n.is("icon-plus")},{default:()=>[_(C.Plus,null,null)]})]):null,o=_("div",{class:[n.e("header"),n.is(e.tabPosition)]},[t,_(ge,{ref:v,currentName:f.value,editable:e.editable,type:e.type,panes:c.value,stretch:e.stretch,onTabClick:h,onTabRemove:x},null)]),s=_("div",{class:n.e("content")},[$(l,"default")]);return _("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[o,s]:[s,o]])}}}),Ve=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),_e=["id","aria-hidden","aria-labelledby"],ke="ElTabPane",Ce=o({name:ke});var we=h(o({...Ce,props:Ve,setup(e){const a=e,l=s(),t=N(),o=r(ue);o||n(ke,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const p=d("tab-pane"),g=i(),h=y((()=>a.closable||o.props.closable)),V=c.eagerComputed((()=>{var e;return o.currentName.value===(null!=(e=a.name)?e:g.value)})),_=i(V.value),k=y((()=>{var e;return null!=(e=a.name)?e:g.value})),C=c.eagerComputed((()=>!a.lazy||_.value||V.value));u(V,(e=>{e&&(_.value=!0)}));const w=A({uid:l.uid,slots:t,props:a,paneName:k,active:V,index:g,isClosable:h});return x((()=>{o.registerPane(w)})),T((()=>{o.unregisterPane(w.uid)})),(e,a)=>f(C)?E((m(),b("div",{key:0,id:`pane-${f(k)}`,class:v(f(p).b()),role:"tabpanel","aria-hidden":!f(V),"aria-labelledby":`tab-${f(k)}`},[$(e.$slots,"default")],10,_e)),[[S,f(V)]]):U("v-if",!0)}}),[["__file","tab-pane.vue"]]);const $e=B(xe,{TabPane:we}),Re=F(we),Pe={class:"workflow-drawer-node"},je={class:"flex-content-right"},Ne=G(o({__name:"node",emits:["submit","close"],setup(e,{expose:a,emit:l}){const t=l,o=i(),s=i(),r=i(),n=A({node:{},nodeRules:{id:[{required:!0,message:"请输入数据id",trigger:"blur"}],nodeId:[{required:!0,message:"请输入节点id",trigger:"blur"}],type:[{required:!0,message:"请输入类型",trigger:"blur"}],left:[{required:!0,message:"请输入left坐标",trigger:"blur"}],top:[{required:!0,message:"请输入top坐标",trigger:"blur"}],icon:[{required:!0,message:"请输入icon图标",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}]},form:{module:[]},tabsActive:"1",loading:{extend:!1}}),d=()=>{n.node.icon="",n.node.name=""},u=()=>{o.value.validate((e=>{if(!e)return!1;t("submit",n.node),t("close")}))},c=()=>{s.value.resetFields()},v=()=>{s.value.validate((e=>{if(!e)return!1;n.loading.extend=!0,setTimeout((()=>{n.loading.extend=!1,D.ElMessage.success("保存成功"),t("close")}),1e3)}))},f=()=>{const e=te(r.value),a=[],l=[];for(let o=0;o<7;o++)a.push(`${Math.floor(52*Math.random()+10)}:${Math.floor(52*Math.random()+1)}`),l.push(Math.floor(52*Math.random()+1));const t={grid:{top:50,right:30,bottom:30,left:50},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:a},yAxis:{type:"value"},series:[{itemStyle:{color:"#289df5",borderColor:"#289df5",areaStyle:{type:"default",opacity:.1}},data:l,type:"line",areaStyle:{}}]};e.setOption(t),p((()=>{e.resize()}))};return a({getParentData:e=>{n.tabsActive="1",n.node=e,f()}}),(e,a)=>{const l=W,t=ee,i=M("zk-icon"),p=le,f=ae,g=Z,h=Re,y=X,x=Y,V=H,k=Q,C=$e;return m(),b("div",Pe,[_(C,{type:"border-card",modelValue:n.tabsActive,"onUpdate:modelValue":a[7]||(a[7]=e=>n.tabsActive=e)},{default:q((()=>[_(h,{label:"节点编辑",name:"1"},{default:q((()=>[_(g,null,{default:q((()=>[_(f,{model:n.node,rules:n.nodeRules,ref_key:"nodeFormRef",ref:o,size:"default","label-width":"80px",class:"pt15 pr15 pb15 pl15"},{default:q((()=>[_(t,{label:"数据id",prop:"id"},{default:q((()=>[_(l,{modelValue:n.node.id,"onUpdate:modelValue":a[0]||(a[0]=e=>n.node.id=e),placeholder:"请输入数据id",clearable:""},null,8,["modelValue"])])),_:1}),_(t,{label:"节点id",prop:"nodeId"},{default:q((()=>[_(l,{modelValue:n.node.nodeId,"onUpdate:modelValue":a[1]||(a[1]=e=>n.node.nodeId=e),placeholder:"请输入节点id",clearable:""},null,8,["modelValue"])])),_:1}),_(t,{label:"类型",prop:"type"},{default:q((()=>[_(l,{modelValue:n.node.type,"onUpdate:modelValue":a[2]||(a[2]=e=>n.node.type=e),placeholder:"请输入类型",clearable:""},null,8,["modelValue"])])),_:1}),_(t,{label:"left坐标",prop:"left"},{default:q((()=>[_(l,{modelValue:n.node.left,"onUpdate:modelValue":a[3]||(a[3]=e=>n.node.left=e),placeholder:"请输入left坐标",clearable:""},null,8,["modelValue"])])),_:1}),_(t,{label:"top坐标",prop:"top"},{default:q((()=>[_(l,{modelValue:n.node.top,"onUpdate:modelValue":a[4]||(a[4]=e=>n.node.top=e),placeholder:"请输入top坐标",clearable:""},null,8,["modelValue"])])),_:1}),_(t,{label:"icon图标",prop:"icon"},{default:q((()=>[_(l,{modelValue:n.node.icon,"onUpdate:modelValue":a[5]||(a[5]=e=>n.node.icon=e),placeholder:"请输入icon图标",clearable:""},null,8,["modelValue"])])),_:1}),_(t,{label:"名称",prop:"name"},{default:q((()=>[_(l,{modelValue:n.node.name,"onUpdate:modelValue":a[6]||(a[6]=e=>n.node.name=e),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])])),_:1}),_(t,null,{default:q((()=>[_(p,{class:"mb15",onClick:d},{default:q((()=>[_(i,{name:"RefreshRight"}),z(" 重置 ")])),_:1}),_(p,{type:"primary",class:"mb15",onClick:u},{default:q((()=>[_(i,{name:"Check"}),z(" 保存 ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),_(h,{label:"扩展表单",name:"2"},{default:q((()=>[_(g,null,{default:q((()=>[_(f,{model:n.form,ref_key:"extendFormRef",ref:s,size:"default","label-width":"80px",class:"pt15 pr15 pb15 pl15"},{default:q((()=>[(m(!0),b(I,null,L(n.node.from,((e,a)=>(m(),K(t,{label:e.label,prop:e.prop,key:a,rules:[{required:e.required,message:`${e.label}不能为空`,trigger:"blur"}]},{default:q((()=>["input"===e.type?(m(),K(l,{key:0,modelValue:n.form[e.prop],"onUpdate:modelValue":a=>n.form[e.prop]=a,placeholder:e.placeholder,clearable:"",disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):U("",!0),"select"===e.type?(m(),K(x,{key:1,modelValue:n.form[e.prop],"onUpdate:modelValue":a=>n.form[e.prop]=a,placeholder:"请选择",clearable:"",disabled:e.disabled},{default:q((()=>[(m(!0),b(I,null,L(e.options,(e=>(m(),K(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):U("",!0),"checkbox"===e.type?(m(),K(k,{key:2,modelValue:n.form[e.prop],"onUpdate:modelValue":a=>n.form[e.prop]=a,disabled:e.disabled},{default:q((()=>[_(V,{label:"美食推荐",name:"type"}),_(V,{label:"统计分析",name:"type"})])),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):U("",!0)])),_:2},1032,["label","prop","rules"])))),128)),_(t,null,{default:q((()=>[_(p,{class:"mb15",onClick:c},{default:q((()=>[_(i,{name:"RefreshRight"}),z(" 重置 ")])),_:1}),_(p,{type:"primary",class:"mb15",onClick:v,loading:n.loading.extend},{default:q((()=>[_(i,{name:"Check"}),z(" 保存 ")])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),_(h,{label:"图表可视化",name:"3"},{default:q((()=>[_(g,null,{default:q((()=>[O("div",je,[O("div",{style:{width:"320px",height:"200px"},ref_key:"chartsMonitorRef",ref:r},null,512)])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-b1e0b605"]]);export{Ne as default};