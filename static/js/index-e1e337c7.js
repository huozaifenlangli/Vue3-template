import{g as e,Z as l,r as t,a3 as o,v as a,F as i,G as n,R as s,N as c,O as r,aP as d,aQ as u,ao as f}from"./index-0da987e2.js";const m={class:"workflow-tool"},p={class:"pl15 tools-title"},v=(e=>(d("data-v-81eb2a51"),e=e(),u(),e))((()=>n("span",null,"系统节点",-1))),w={class:"workflow-tool-right"},k=["title","onClick"],N=f(e({__name:"index",emits:["tool","changeSlider"],setup(e,{emit:d}){const u=d,f=l({toolList:[{icon:"Help",title:"帮助",fnName:"help"},{icon:"Download",title:"下载",fnName:"download"},{icon:"Check",title:"提交",fnName:"submit"},{icon:"DocumentCopy",title:"复制",fnName:"copy"},{icon:"Delete",title:"删除",fnName:"del"},{icon:"FullScreen",title:"全屏",fnName:"fullscreen"}]}),N=t(!1),y=()=>{u("changeSlider",N.value=!N.value)};return(e,l)=>{const t=o("zk-icon");return a(),i("div",m,[n("div",p,[v,n("div",{class:"close",onClick:y},[s(t,{size:"16",type:N.value?"DArrowRight":"DArrowLeft"},null,8,["type"])])]),n("div",w,[(a(!0),i(c,null,r(f.toolList,((e,l)=>(a(),i("div",{class:"workflow-tool-icon",key:l,title:e.title,onClick:l=>{return t=e.fnName,void u("tool",t);var t}},[s(t,{type:e.icon},null,8,["type"])],8,k)))),128))])])}}}),[["__scopeId","data-v-81eb2a51"]]);export{N as default};