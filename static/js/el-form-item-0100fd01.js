import{a as e,f as l}from"./constants-9957b712.js";import{c as a,ar as t,e as r,b as s,U as i,W as o,r as n,m as u,p as d,g as v,k as c,w as p,o as f,t as m,Z as h,$ as g,v as b,F as y,H as w,z as F,q as S,_ as W,K as I,l as A,au as j,M as q,an as k,az as x,s as B,R as M,N as O,n as $,ad as E,aq as P,aF as L,y as V,x as _,C as z,A as C,P as R,I as N,D as T,G as D,bc as G,bd as H,a0 as K,a1 as U}from"./index-0da987e2.js";import{a as Z}from"./el-button-5b8577ff.js";import{u as J}from"./index-1255d72d.js";const Q=a({size:{type:String,values:t},disabled:Boolean}),X=a({...Q,model:Object,rules:{type:r(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Y={validate:(e,l,a)=>(s(e)||i(e))&&o(l)&&i(a)};function ee(){const e=n([]),l=u((()=>{if(!e.value.length)return"0";const l=Math.max(...e.value);return l?`${l}px`:""}));function a(a){const t=e.value.indexOf(a);return-1===t&&l.value,t}return{autoLabelWidth:l,registerLabelWidth:function(l,t){if(l&&t){const r=a(t);e.value.splice(r,1,l)}else l&&e.value.push(l)},deregisterLabelWidth:function(l){const t=a(l);t>-1&&e.value.splice(t,1)}}}const le=(e,l)=>{const a=d.castArray(l);return a.length>0?e.filter((e=>e.prop&&a.includes(e.prop))):e},ae=v({name:"ElForm"});var te=W(v({...ae,props:X,emits:Y,setup(l,{expose:a,emit:t}){const r=l,s=[],i=Z(),o=c("form"),n=u((()=>{const{labelPosition:e,inline:l}=r;return[o.b(),o.m(i.value||"default"),{[o.m(`label-${e}`)]:e,[o.m("inline")]:l}]})),d=(e=[])=>{r.model&&le(s,e).forEach((e=>e.resetField()))},v=(e=[])=>{le(s,e).forEach((e=>e.clearValidate()))},W=u((()=>!!r.model)),A=async e=>q(void 0,e),j=async(e=[])=>{if(!W.value)return!1;const l=(e=>{if(0===s.length)return[];const l=le(s,e);return l.length?l:[]})(e);if(0===l.length)return!0;let a={};for(const r of l)try{await r.validate("")}catch(t){a={...a,...t}}return 0===Object.keys(a).length||Promise.reject(a)},q=async(e=[],l)=>{const a=!I(l);try{const a=await j(e);return!0===a&&(null==l||l(a)),a}catch(t){if(t instanceof Error)throw t;const e=t;return r.scrollToError&&k(Object.keys(e)[0]),null==l||l(!1,e),a&&Promise.reject(e)}},k=e=>{var l;const a=le(s,e)[0];a&&(null==(l=a.$el)||l.scrollIntoView(r.scrollIntoViewOptions))};return p((()=>r.rules),(()=>{r.validateOnRuleChange&&A().catch((e=>f()))}),{deep:!0}),m(e,h({...g(r),emit:t,resetFields:d,clearValidate:v,validateField:q,getField:e=>s.find((l=>l.prop===e)),addField:e=>{s.push(e)},removeField:e=>{e.prop&&s.splice(s.indexOf(e),1)},...ee()})),a({validate:A,validateField:q,resetFields:d,clearValidate:v,scrollToField:k}),(e,l)=>(b(),y("form",{class:F(S(n))},[w(e.$slots,"default")],2))}}),[["__file","form.vue"]]);const re=a({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:r([String,Array])},required:{type:Boolean,default:void 0},rules:{type:r([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:t}}),se="ElLabelWrap";var ie=v({name:se,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(a,{slots:t}){const r=A(e,void 0),s=A(l);s||j(se,"usage: <el-form-item><label-wrap /></el-form-item>");const i=c("form"),o=n(),d=n(0),v=(e="update")=>{$((()=>{t.default&&a.isAutoWidth&&("update"===e?d.value=(()=>{var e;if(null==(e=o.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===e&&(null==r||r.deregisterLabelWidth(d.value)))}))},f=()=>v("update");return q((()=>{f()})),k((()=>{v("remove")})),x((()=>f())),p(d,((e,l)=>{a.updateAll&&(null==r||r.registerLabelWidth(e,l))})),B.useResizeObserver(u((()=>{var e,l;return null!=(l=null==(e=o.value)?void 0:e.firstElementChild)?l:null})),f),()=>{var e,l;if(!t)return null;const{isAutoWidth:n}=a;if(n){const l=null==r?void 0:r.autoLabelWidth,a={};if((null==s?void 0:s.hasLabel)&&l&&"auto"!==l){const e=Math.max(0,Number.parseInt(l,10)-d.value),t="left"===r.labelPosition?"marginRight":"marginLeft";e&&(a[t]=`${e}px`)}return M("div",{ref:o,class:[i.be("item","label-wrap")],style:a},[null==(e=t.default)?void 0:e.call(t)])}return M(O,{ref:o},[null==(l=t.default)?void 0:l.call(t)])}}});const oe=["role","aria-labelledby"],ne=v({name:"ElFormItem"});var ue=W(v({...ne,props:re,setup(a,{expose:t}){const r=a,s=E(),v=A(e,void 0),f=A(l,void 0),W=Z(void 0,{formItem:!1}),j=c("form-item"),x=J().value,O=n([]),K=n(""),U=B.refDebounced(K,100),Q=n(""),X=n();let Y,ee=!1;const le=u((()=>{if("top"===(null==v?void 0:v.labelPosition))return{};const e=P(r.labelWidth||(null==v?void 0:v.labelWidth)||"");return e?{width:e}:{}})),ae=u((()=>{if("top"===(null==v?void 0:v.labelPosition)||(null==v?void 0:v.inline))return{};if(!r.label&&!r.labelWidth&&ce)return{};const e=P(r.labelWidth||(null==v?void 0:v.labelWidth)||"");return r.label||s.label?{}:{marginLeft:e}})),te=u((()=>[j.b(),j.m(W.value),j.is("error","error"===K.value),j.is("validating","validating"===K.value),j.is("success","success"===K.value),j.is("required",he.value||r.required),j.is("no-asterisk",null==v?void 0:v.hideRequiredAsterisk),"right"===(null==v?void 0:v.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[j.m("feedback")]:null==v?void 0:v.statusIcon}])),re=u((()=>o(r.inlineMessage)?r.inlineMessage:(null==v?void 0:v.inlineMessage)||!1)),se=u((()=>[j.e("error"),{[j.em("error","inline")]:re.value}])),ne=u((()=>r.prop?i(r.prop)?r.prop:r.prop.join("."):"")),ue=u((()=>!(!r.label&&!s.label))),de=u((()=>r.for||(1===O.value.length?O.value[0]:void 0))),ve=u((()=>!de.value&&ue.value)),ce=!!f,pe=u((()=>{const e=null==v?void 0:v.model;if(e&&r.prop)return L(e,r.prop).value})),fe=u((()=>{const{required:e}=r,l=[];r.rules&&l.push(...d.castArray(r.rules));const a=null==v?void 0:v.rules;if(a&&r.prop){const e=L(a,r.prop).value;e&&l.push(...d.castArray(e))}if(void 0!==e){const a=l.map(((e,l)=>[e,l])).filter((([e])=>Object.keys(e).includes("required")));if(a.length>0)for(const[t,r]of a)t.required!==e&&(l[r]={...t,required:e});else l.push({required:e})}return l})),me=u((()=>fe.value.length>0)),he=u((()=>fe.value.some((e=>e.required)))),ge=u((()=>{var e;return"error"===U.value&&r.showMessage&&(null==(e=null==v?void 0:v.showMessage)||e)})),be=u((()=>`${r.label||""}${(null==v?void 0:v.labelSuffix)||""}`)),ye=e=>{K.value=e},we=async e=>{const l=ne.value;return new H({[l]:e}).validate({[l]:pe.value},{firstFields:!0}).then((()=>(ye("success"),null==v||v.emit("validate",r.prop,!0,""),!0))).catch((e=>((e=>{var l,a;const{errors:t,fields:s}=e;t&&s||console.error(e),ye("error"),Q.value=t?null!=(a=null==(l=null==t?void 0:t[0])?void 0:l.message)?a:`${r.prop} is required`:"",null==v||v.emit("validate",r.prop,!1,Q.value)})(e),Promise.reject(e))))},Fe=async(e,l)=>{if(ee||!r.prop)return!1;const a=I(l);if(!me.value)return null==l||l(!1),!1;const t=(e=>fe.value.filter((l=>!l.trigger||!e||(Array.isArray(l.trigger)?l.trigger.includes(e):l.trigger===e))).map((({trigger:e,...l})=>l)))(e);return 0===t.length?(null==l||l(!0),!0):(ye("validating"),we(t).then((()=>(null==l||l(!0),!0))).catch((e=>{const{fields:t}=e;return null==l||l(!1,t),!a&&Promise.reject(t)})))},Se=()=>{ye(""),Q.value="",ee=!1},We=async()=>{const e=null==v?void 0:v.model;if(!e||!r.prop)return;const l=L(e,r.prop);ee=!0,l.value=d.clone(Y),await $(),Se(),ee=!1};p((()=>r.error),(e=>{Q.value=e||"",ye(e?"error":"")}),{immediate:!0}),p((()=>r.validateStatus),(e=>ye(e||"")));const Ie=h({...g(r),$el:X,size:W,validateState:K,labelId:x,inputIds:O,isGroup:ve,hasLabel:ue,fieldValue:pe,addInputId:e=>{O.value.includes(e)||O.value.push(e)},removeInputId:e=>{O.value=O.value.filter((l=>l!==e))},resetField:We,clearValidate:Se,validate:Fe});return m(l,Ie),q((()=>{r.prop&&(null==v||v.addField(Ie),Y=d.clone(pe.value))})),k((()=>{null==v||v.removeField(Ie)})),t({size:W,validateMessage:Q,validateState:K,validate:Fe,clearValidate:Se,resetField:We}),(e,l)=>{var a;return b(),y("div",{ref_key:"formItemRef",ref:X,class:F(S(te)),role:S(ve)?"group":void 0,"aria-labelledby":S(ve)?S(x):void 0},[M(S(ie),{"is-auto-width":"auto"===S(le).width,"update-all":"auto"===(null==(a=S(v))?void 0:a.labelWidth)},{default:V((()=>[S(ue)?(b(),_(z(S(de)?"label":"div"),{key:0,id:S(x),for:S(de),class:F(S(j).e("label")),style:C(S(le))},{default:V((()=>[w(e.$slots,"label",{label:S(be)},(()=>[R(N(S(be)),1)]))])),_:3},8,["id","for","class","style"])):T("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),D("div",{class:F(S(j).e("content")),style:C(S(ae))},[w(e.$slots,"default"),M(G,{name:`${S(j).namespace.value}-zoom-in-top`},{default:V((()=>[S(ge)?w(e.$slots,"error",{key:0,error:Q.value},(()=>[D("div",{class:F(S(se))},N(Q.value),3)])):T("v-if",!0)])),_:3},8,["name"])],6)],10,oe)}}}),[["__file","form-item.vue"]]);const de=K(te,{FormItem:ue}),ve=U(ue);export{de as E,ve as a};