import{o as b,u as y,H as S}from"./AppLayout-e6a07ded.js";import{bp as g,d as v,k as f,aa as P}from"./app-ad675dbd.js";function E(e){throw new Error("Unexpected object: "+e)}var O=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(O||{});function _(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),i=r??-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(u=>!t.resolveDisabled(u));case 1:{let u=n.slice().reverse().findIndex((l,d,a)=>i!==-1&&a.length-d-1>=i?!1:!t.resolveDisabled(l));return u===-1?u:n.length-1-u}case 2:return n.findIndex((u,l)=>l<=i?!1:!t.resolveDisabled(u));case 3:{let u=n.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return u===-1?u:n.length-1-u}case 4:return n.findIndex(u=>t.resolveId(u)===e.id);case 5:return null;default:E(e)}})();return o===-1?r:o}var L=Object.defineProperty,D=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);let $=class{constructor(){p(this,"current",this.detect()),p(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},w=new $;function F(e){if(w.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),H=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(H||{}),T=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(T||{}),N=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(N||{});function j(e,t=0){var n;return e===((n=F(e))==null?void 0:n.body)?!1:y(t,{[0](){return e.matches(h)},[1](){let r=e;for(;r!==null;){if(r.matches(h))return!0;r=r.parentElement}return!1}})}function G(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),o=t(r);if(i===null||o===null)return 0;let u=i.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function c(e,t,n){w.isServer||g(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function R(e,t,n=f(()=>!0)){function r(o,u){if(!n.value||o.defaultPrevented)return;let l=u(o);if(l===null||!l.getRootNode().contains(l))return;let d=function a(s){return typeof s=="function"?a(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let a of d){if(a===null)continue;let s=a instanceof HTMLElement?a:b(a);if(s!=null&&s.contains(l)||o.composed&&o.composedPath().includes(s))return}return!j(l,N.Loose)&&l.tabIndex!==-1&&o.preventDefault(),t(o,l)}let i=v(null);c("mousedown",o=>{var u,l;n.value&&(i.value=((l=(u=o.composedPath)==null?void 0:u.call(o))==null?void 0:l[0])||o.target)},!0),c("click",o=>{i.value&&(r(o,()=>i.value),i.value=null)},!0),c("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var C=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(C||{});let X=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...i}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return S({ourProps:o,theirProps:i,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function M(e={},t=null,n=[]){for(let[r,i]of Object.entries(e))x(n,I(t,r),i);return n}function I(e,t){return e?e+"["+t+"]":t}function x(e,t,n){if(Array.isArray(n))for(let[r,i]of n.entries())x(e,I(t,r.toString()),i);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):M(n,t,e)}function Y(e,t,n){let r=v(n==null?void 0:n.value),i=f(()=>e.value!==void 0);return[f(()=>i.value?e.value:r.value),function(o){return i.value||(r.value=o),t==null?void 0:t(o)}]}function m(e){return[e.screenX,e.screenY]}function q(){let e=v([-1,-1]);return{wasMoved(t){let n=m(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=m(t)}}}export{N as F,G as I,j as S,O as a,C as b,Y as d,M as e,X as f,F as m,q as u,_ as x,R as y};
