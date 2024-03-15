import{a4 as o,m as e,r as t,be as a,l as s,q as l,M as r,w as n,ae as i,aA as d,bf as c,ad as u,bg as v,c as p,u as b,f as m,e as f,k as g,aR as k,g as y,v as I,x,y as B,F as h,N as S,H as _,E as z,z as $,C as V,D as N,J as C,_ as w,t as j,Z as E,a0 as A,a1 as G}from"./index-0da987e2.js";import{u as D}from"./index-0191a117.js";import{a as F,f as M}from"./constants-9957b712.js";import{u as T}from"./index-1255d72d.js";import{i as J}from"./icon-4e42d34f.js";const K=t=>{const a=o();return e((()=>{var o,e;return null==(e=null==(o=null==a?void 0:a.proxy)?void 0:o.$props)?void 0:e[t]}))},L=(o,r={})=>{const n=t(void 0),i=r.prop?n:K("size"),d=r.global?n:a(),c=r.form?{size:void 0}:s(F,void 0),u=r.formItem?{size:void 0}:s(M,void 0);return e((()=>i.value||l(o)||(null==u?void 0:u.size)||(null==c?void 0:c.size)||d.value||""))},U=o=>{const t=K("disabled"),a=s(F,void 0);return e((()=>t.value||l(o)||(null==a?void 0:a.disabled)||!1))},q=()=>({form:s(F,void 0),formItem:s(M,void 0)}),H=(o,{formItemContext:a,disableIdGeneration:s,disableIdManagement:l})=>{s||(s=t(!1)),l||(l=t(!1));const c=t();let u;const v=e((()=>{var e;return!!(!o.label&&a&&a.inputIds&&(null==(e=a.inputIds)?void 0:e.length)<=1)}));return r((()=>{u=n([i(o,"id"),s],(([o,e])=>{const t=null!=o?o:e?void 0:T().value;t!==c.value&&((null==a?void 0:a.removeInputId)&&(c.value&&a.removeInputId(c.value),(null==l?void 0:l.value)||e||!t||a.addInputId(t)),c.value=t)}),{immediate:!0})})),d((()=>{u&&u(),(null==a?void 0:a.removeInputId)&&c.value&&a.removeInputId(c.value)})),{isLabeledByFormItem:v,inputId:c}},O=Symbol("buttonGroupContextKey"),R=["default","primary","success","warning","info","danger","text",""],Z=p({size:b,disabled:Boolean,type:{type:String,values:R,default:""},icon:{type:J},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:J,default:()=>m.Loading},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:f([String,Object]),default:"button"}}),P={click:o=>o instanceof MouseEvent};function Q(o,e=20){return o.mix("#141414",e).toString()}const W=y({name:"ElButton"});var X=w(y({...W,props:Z,emits:P,setup(o,{expose:a,emit:r}){const n=o,i=function(o){const t=U(),a=g("button");return e((()=>{let e={};const s=o.color;if(s){const l=new k(s),r=o.dark?l.tint(20).toString():Q(l,20);if(o.plain)e=a.cssVarBlock({"bg-color":o.dark?Q(l,90):l.tint(90).toString(),"text-color":s,"border-color":o.dark?Q(l,50):l.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":r,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":r}),t.value&&(e[a.cssVarBlockName("disabled-bg-color")]=o.dark?Q(l,90):l.tint(90).toString(),e[a.cssVarBlockName("disabled-text-color")]=o.dark?Q(l,50):l.tint(50).toString(),e[a.cssVarBlockName("disabled-border-color")]=o.dark?Q(l,80):l.tint(80).toString());else{const n=o.dark?Q(l,30):l.tint(30).toString(),i=l.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(e=a.cssVarBlock({"bg-color":s,"text-color":i,"border-color":s,"hover-bg-color":n,"hover-text-color":i,"hover-border-color":n,"active-bg-color":r,"active-border-color":r}),t.value){const t=o.dark?Q(l,50):l.tint(50).toString();e[a.cssVarBlockName("disabled-bg-color")]=t,e[a.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,e[a.cssVarBlockName("disabled-border-color")]=t}}}return e}))}(n),d=g("button"),{_ref:p,_size:b,_type:m,_disabled:f,_props:y,shouldAddSpace:w,handleClick:j}=((o,a)=>{D({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},e((()=>"text"===o.type)));const l=s(O,void 0),r=c("button"),{form:n}=q(),i=L(e((()=>null==l?void 0:l.size))),d=U(),p=t(),b=u(),m=e((()=>o.type||(null==l?void 0:l.type)||"")),f=e((()=>{var e,t,a;return null!=(a=null!=(t=o.autoInsertSpace)?t:null==(e=r.value)?void 0:e.autoInsertSpace)&&a})),g=e((()=>"button"===o.tag?{ariaDisabled:d.value||o.loading,disabled:d.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{})),k=e((()=>{var o;const e=null==(o=b.default)?void 0:o.call(b);if(f.value&&1===(null==e?void 0:e.length)){const o=e[0];if((null==o?void 0:o.type)===v){const e=o.children;return/^\p{Unified_Ideograph}{2}$/u.test(e.trim())}}return!1}));return{_disabled:d,_size:i,_type:m,_ref:p,_props:g,shouldAddSpace:k,handleClick:e=>{"reset"===o.nativeType&&(null==n||n.resetFields()),a("click",e)}}})(n,r);return a({ref:p,size:b,type:m,disabled:f,shouldAddSpace:w}),(o,e)=>(I(),x(V(o.tag),C({ref_key:"_ref",ref:p},l(y),{class:[l(d).b(),l(d).m(l(m)),l(d).m(l(b)),l(d).is("disabled",l(f)),l(d).is("loading",o.loading),l(d).is("plain",o.plain),l(d).is("round",o.round),l(d).is("circle",o.circle),l(d).is("text",o.text),l(d).is("link",o.link),l(d).is("has-bg",o.bg)],style:l(i),onClick:l(j)}),{default:B((()=>[o.loading?(I(),h(S,{key:0},[o.$slots.loading?_(o.$slots,"loading",{key:0}):(I(),x(l(z),{key:1,class:$(l(d).is("loading"))},{default:B((()=>[(I(),x(V(o.loadingIcon)))])),_:1},8,["class"]))],64)):o.icon||o.$slots.icon?(I(),x(l(z),{key:1},{default:B((()=>[o.icon?(I(),x(V(o.icon),{key:0})):_(o.$slots,"icon",{key:1})])),_:3})):N("v-if",!0),o.$slots.default?(I(),h("span",{key:2,class:$({[l(d).em("text","expand")]:l(w)})},[_(o.$slots,"default")],2)):N("v-if",!0)])),_:3},16,["class","style","onClick"]))}}),[["__file","button.vue"]]);const Y={size:Z.size,type:Z.type},oo=y({name:"ElButtonGroup"});var eo=w(y({...oo,props:Y,setup(o){const e=o;j(O,E({size:i(e,"size"),type:i(e,"type")}));const t=g("button");return(o,e)=>(I(),h("div",{class:$(`${l(t).b("group")}`)},[_(o.$slots,"default")],2))}}),[["__file","button-group.vue"]]);const to=A(X,{ButtonGroup:eo});G(eo);export{to as E,L as a,U as b,H as c,R as d,q as u};