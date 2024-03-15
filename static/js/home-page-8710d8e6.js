import{r as e,M as t,w as a,c as s,g as o,k as i,v as l,F as n,x as r,q as u,f as c,D as p,z as m,_ as d,ae as y,N as x,O as v,H as g,R as f,J as h,aZ as k,a0 as _,a1 as b,aS as w,n as j,a_ as I,Q as S,P as E,y as O,l as T,a3 as A,aP as z,aQ as D,G as L,ax as P,ao as C}from"./index-0da987e2.js";import{E as F}from"./el-button-5b8577ff.js";import{E as R}from"./el-message-62357425.js";import"./index-0191a117.js";import"./constants-9957b712.js";import"./index-1255d72d.js";import"./icon-4e42d34f.js";import"./typescript-a312af3e.js";import"./aria-bf06b440.js";const $=s({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),q=s({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),M=o({name:"ElSkeletonItem"});var N=d(o({...M,props:q,setup(e){const t=i("skeleton");return(e,a)=>(l(),n("div",{class:m([u(t).e("item"),u(t).e(e.variant)])},["image"===e.variant?(l(),r(u(c.PictureFilled),{key:0})):p("v-if",!0)],2))}}),[["__file","skeleton-item.vue"]]);const B=o({name:"ElSkeleton"});const H=_(d(o({...B,props:$,setup(s,{expose:o}){const c=s,d=i("skeleton"),_=((s,o=0)=>{if(0===o)return s;const i=e(!1);let l=0;const n=()=>{l&&clearTimeout(l),l=window.setTimeout((()=>{i.value=s.value}),o)};return t(n),a((()=>s.value),(e=>{e?n():i.value=e})),i})(y(c,"loading"),c.throttle);return o({uiLoading:_}),(e,t)=>u(_)?(l(),n("div",h({key:0,class:[u(d).b(),u(d).is("animated",e.animated)]},e.$attrs),[(l(!0),n(x,null,v(e.count,(t=>(l(),n(x,{key:t},[e.loading?g(e.$slots,"template",{key:t},(()=>[f(N,{class:m(u(d).is("first")),variant:"p"},null,8,["class"]),(l(!0),n(x,null,v(e.rows,(t=>(l(),r(N,{key:t,class:m([u(d).e("paragraph"),u(d).is("last",t===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"])))),128))])):p("v-if",!0)],64)))),128))],16)):g(e.$slots,"default",k(h({key:1},e.$attrs)))}}),[["__file","skeleton.vue"]]),{SkeletonItem:N});b(N);const J=e({tooltip:{trigger:"axis"},title:{text:"我的线性图"},grid:{left:"3%",right:"2%",bottom:"9%",containLabel:!0},xAxis:{type:"category",data:[],axisLabel:{interval:0}},yAxis:{type:"value",minInterval:1,axisLabel:{formatter:"{value} 人"}},series:[{data:[],type:"line",smooth:!0}]}),Q=e({tooltip:{trigger:"axis"},title:{text:"我的线性图"},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"line",smooth:!0}]}),V={class:"container w100 h100"},W=(e=>(z("data-v-37d533a7"),e=e(),D(),e))((()=>L("input",{type:"text"},null,-1))),G=C(o({__name:"home-page",setup(a){const s=T("encryptionPlugin"),o=e(!1),i=()=>{setTimeout((()=>{J.value.xAxis.data=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],J.value.series[0].data=[820,932,901,934,1290,1330,1320],J.value.title.text="折线图模拟接口数据",o.value=!0,setTimeout((()=>{!async function(e=1,t={x:.5,y:.7}){await w((()=>import("./confetti.module-fa8686b9.js")),[],import.meta.url).then((a=>{const s=document.querySelector("#confetti");if(!s)return;s.style.zIndex="9999";const o=a.create(s,{resize:!0,useWorker:!0,disableForReducedMotion:!0});w((()=>import("./confettiIndex-e1e9866a.js")),[],import.meta.url).then((a=>{a.getUserDescribe(e,o,t)})),j((()=>{s.style.zIndex="-1",o.reset()}))}))}(4,{x:.9,y:.6})}),1e3)}),1e3)},c=I.debounceRest((e=>{R.success("请打开控制台查看");const t=s.encryptData("1334132303@qq.com"),a=s.decryptData(t);console.log("加密后 🚀 ==>:",t),console.log("解密后 🚀 ==>:",a),console.log("我是防抖payload参数 🚀 ==>:",e),console.log("判断奇数偶数 🚀 ==>:",I.isEvenOrOdd(-.3)),console.log("判断类型 🚀 ==>:",I.isType({}))}),250);return t((()=>i())),(e,t)=>{const a=F,s=A("zk-confetti-canvas"),i=A("zk-chart"),p=H,m=P("waterMarker");return S((l(),n("div",V,[E(" 测试keepAline:"),W,f(a,{onClick:t[0]||(t[0]=e=>u(c)("我是参数")),type:"success",class:"ml10"},{default:O((()=>[E("点我测试tools工具函数")])),_:1}),f(s),f(i,{ref:"refChart",myOption:u(Q),myStyle:{width:"100%",height:"280px"}},null,8,["myOption"]),u(o)?(l(),r(i,{key:0,ref:"refChart",myOption:u(J),myStyle:{width:"100%",height:"280px"}},null,8,["myOption"])):(l(),r(p,{key:1,rows:5,animated:!0,style:{margin:"10px auto",width:"90%",height:"500px"}}))])),[[m,{text:"版权所有",textColor:"rgba(180, 180, 180, 0.4)"}]])}}}),[["__scopeId","data-v-37d533a7"]]);export{G as default};