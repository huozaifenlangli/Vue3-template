import{g as e,m as o,v as s,x as t,y as a,Q as l,F as i,G as m,H as r,R as n,P as d,ao as p}from"./index-0da987e2.js";import{v as u}from"./el-loading-a3ad4d31.js";import{E as c}from"./el-dialog-ed57bf28.js";import"./el-overlay-57aa9b17.js";import{E as y}from"./el-button-5b8577ff.js";import"./icon-4e42d34f.js";import"./focus-trap-09ec5375.js";import"./aria-bf06b440.js";import"./index-0191a117.js";import"./vnode-4bf6f067.js";import"./event-b1948b12.js";import"./index-1255d72d.js";import"./scroll-392909db.js";import"./constants-9957b712.js";const f={class:"my-message"},g={class:"dialog-footer"},j=p(e({__name:"zkDialog",props:{myTitle:{type:String,required:!0},myWidth:{type:String,default:"60%"},myVisible:{type:Boolean,default:!1},myLoading:{type:Boolean,required:!0}},emits:["update:modelValue","closeDialog","closeDefine","handleOpen"],setup(e,{emit:p}){const j=e,v=p,V=o({get:()=>j.myVisible,set:e=>{v("update:modelValue",e)}}),_=()=>{v("closeDialog")},b=()=>{v("closeDefine")},h=()=>{v("handleOpen")},D=()=>{v("closeDialog")};return(o,p)=>{const j=y,v=c,x=u;return s(),t(v,{modelValue:V.value,"onUpdate:modelValue":p[0]||(p[0]=e=>V.value=e),title:e.myTitle,width:e.myWidth,"before-close":D,onOpen:h},{default:a((()=>[l((s(),i("div",null,[m("span",f,[r(o.$slots,"msg",{},void 0,!0)]),m("span",g,[n(j,{type:"primary",onClick:_},{default:a((()=>[d("取消")])),_:1}),n(j,{type:"primary",onClick:b},{default:a((()=>[d("确定")])),_:1}),r(o.$slots,"btn",{num:"我是子组件传到父组件的数据"},void 0,!0)])])),[[x,e.myLoading]])])),_:3},8,["modelValue","title","width"])}}}),[["__scopeId","data-v-7ab42fcf"]]);export{j as default};