import{b3 as e,g as t,b4 as a,v as s,F as n,G as l,I as o,q as g,aP as u,aQ as d,ao as r}from"./index-0da987e2.js";const i=e("users",{state:()=>({name:"张三",age:18,sex:"男"}),getters:{getAddAge:({age:e})=>t=>e+=t,getNameAndAge(){return this.name+"-"+this.sex+"-"+this.getAddAge(1e3)}},actions:{saveName(e){this.name=e}},persist:!0}),c=e=>(u("data-v-7361f39d"),e=e(),d(),e),m={class:"wrap"},p=c((()=>l("h1",null,"state",-1))),A=c((()=>l("br",null,null,-1))),b=c((()=>l("h1",null,"getters",-1))),h=c((()=>l("h1",null,"actions",-1))),v=r(t({__name:"store-view",setup(e){const t=i(),{name:u,age:d,sex:r}=a(t),c=()=>{t.name="卡拉米"},v=()=>{t.$patch({name:"小美",age:100,sex:"女"})},x=()=>{t.saveName("小帅")},k=()=>{console.log(t.getAddAge(100))},C=()=>{t.$reset()};return(e,a)=>(s(),n("div",m,[p,l("p",null,"姓名："+o(g(u)),1),l("p",null,"年龄："+o(g(d)),1),l("p",null,"性别："+o(g(r)),1),l("button",{onClick:c},"修改姓名"),l("button",{onClick:C},"重置store"),l("button",{onClick:v},"批量修改数据"),A,b,l("p",null,"新年龄："+o(g(t).getAddAge(100)),1),l("p",null,"调用其它getter："+o(g(t).getNameAndAge),1),h,l("button",{onClick:x},"调用actions"),l("button",{onClick:k},"调用getter")]))}}),[["__scopeId","data-v-7361f39d"]]);export{v as default};