import{M as e,s as t,an as n,r as o,_ as s,g as r,t as a,w as u,q as c,p as d,H as i,n as l,U as f}from"./index-0da987e2.js";import{E as p}from"./aria-bf06b440.js";let v=[];const m=e=>{const t=e;t.key===p.esc&&v.forEach((e=>e(t)))},E="focus-trap.focus-after-trapped",y="focus-trap.focus-after-released",w={cancelable:!0,bubbles:!1},L={cancelable:!0,bubbles:!1},h="focusAfterTrapped",T="focusAfterReleased",b=Symbol("elFocusTrap"),F=o(),g=o(0),R=o(0);let k=0;const N=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},K=(e,t)=>{for(const n of e)if(!P(n,t))return n},P=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},S=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),R.value=window.performance.now(),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function C(e,t){const n=[...e],o=e.indexOf(t);return-1!==o&&n.splice(o,1),n}const I=(()=>{let e=[];return{push:t=>{const n=e[0];n&&t!==n&&n.pause(),e=C(e,t),e.unshift(t)},remove:t=>{var n,o;e=C(e,t),null==(o=null==(n=e[0])?void 0:n.resume)||o.call(n)}}})(),_=()=>{F.value="pointer",g.value=window.performance.now()},x=()=>{F.value="keyboard",g.value=window.performance.now()},A=e=>new CustomEvent("focus-trap.focusout-prevented",{...L,detail:e});var j=s(r({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[h,T,"focusin","focusout","focusout-prevented","release-requested"],setup(s,{emit:r}){const i=o();let L,P;const{focusReason:C}=(e((()=>{0===k&&(document.addEventListener("mousedown",_),document.addEventListener("touchstart",_),document.addEventListener("keydown",x)),k++})),n((()=>{k--,k<=0&&(document.removeEventListener("mousedown",_),document.removeEventListener("touchstart",_),document.removeEventListener("keydown",x))})),{focusReason:F,lastUserFocusTimestamp:g,lastAutomatedFocusTimestamp:R});var j;j=e=>{s.trapped&&!O.paused&&r("release-requested",e)},e((()=>{0===v.length&&document.addEventListener("keydown",m),t.isClient&&v.push(j)})),n((()=>{v=v.filter((e=>e!==j)),0===v.length&&t.isClient&&document.removeEventListener("keydown",m)}));const O={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},q=e=>{if(!s.loop&&!s.trapped)return;if(O.paused)return;const{key:t,altKey:n,ctrlKey:o,metaKey:a,currentTarget:u,shiftKey:c}=e,{loop:d}=s,i=t===p.tab&&!n&&!o&&!a,l=document.activeElement;if(i&&l){const t=u,[n,o]=(e=>{const t=N(e);return[K(t,e),K(t.reverse(),e)]})(t);if(n&&o)if(c||l!==o){if(c&&[n,t].includes(l)){const t=A({focusReason:C.value});r("focusout-prevented",t),t.defaultPrevented||(e.preventDefault(),d&&S(o,!0))}}else{const t=A({focusReason:C.value});r("focusout-prevented",t),t.defaultPrevented||(e.preventDefault(),d&&S(n,!0))}else if(l===t){const t=A({focusReason:C.value});r("focusout-prevented",t),t.defaultPrevented||e.preventDefault()}}};a(b,{focusTrapRef:i,onKeydown:q}),u((()=>s.focusTrapEl),(e=>{e&&(i.value=e)}),{immediate:!0}),u([i],(([e],[t])=>{e&&(e.addEventListener("keydown",q),e.addEventListener("focusin",M),e.addEventListener("focusout",U)),t&&(t.removeEventListener("keydown",q),t.removeEventListener("focusin",M),t.removeEventListener("focusout",U))}));const D=e=>{r(h,e)},H=e=>r(T,e),M=e=>{const t=c(i);if(!t)return;const n=e.target,o=e.relatedTarget,a=n&&t.contains(n);if(!s.trapped){o&&t.contains(o)||(L=o)}a&&r("focusin",e),O.paused||s.trapped&&(a?P=n:S(P,!0))},U=e=>{const t=c(i);if(!O.paused&&t)if(s.trapped){const n=e.relatedTarget;d.isNil(n)||t.contains(n)||setTimeout((()=>{if(!O.paused&&s.trapped){const e=A({focusReason:C.value});r("focusout-prevented",e),e.defaultPrevented||S(P,!0)}}),0)}else{const n=e.target;n&&t.contains(n)||r("focusout",e)}};async function B(){await l();const e=c(i);if(e){I.push(O);const t=e.contains(document.activeElement)?L:document.activeElement;L=t;if(!e.contains(t)){const n=new Event(E,w);e.addEventListener(E,D),e.dispatchEvent(n),n.defaultPrevented||l((()=>{let n=s.focusStartEl;f(n)||(S(n),document.activeElement!==n&&(n="first")),"first"===n&&((e,t=!1)=>{const n=document.activeElement;for(const o of e)if(S(o,t),document.activeElement!==n)return})(N(e),!0),document.activeElement!==t&&"container"!==n||S(e)}))}}}function W(){const e=c(i);if(e){e.removeEventListener(E,D);const t=new CustomEvent(y,{...w,detail:{focusReason:C.value}});e.addEventListener(y,H),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=C.value&&g.value>R.value&&!e.contains(document.activeElement)||S(null!=L?L:document.body),e.removeEventListener(y,H),I.remove(O)}}return e((()=>{s.trapped&&B(),u((()=>s.trapped),(e=>{e?B():W()}))})),n((()=>{s.trapped&&W()})),{onKeydown:q}}}),[["render",function(e,t,n,o,s,r){return i(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","focus-trap.vue"]]);export{j as E,b as F};