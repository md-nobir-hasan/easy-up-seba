import{v as c,c as f,w as i,o as _,a as o,b as t,g as l,u as e,j as p,i as b,n as d}from"./app-63babc0b.js";import{_ as g}from"./AppLayout-8c99f176.js";import{_ as h}from"./SucMesgShow-595bc2ff.js";import{_ as v,a as w}from"./TextInput-747e79aa.js";import{_ as x}from"./InputLabel-36f39ab3.js";import{_ as m}from"./PrimaryButton-2dfca995.js";import{F as $}from"./FormLayout-4cd2fa47.js";import"./ApplicationLogo-26b97959.js";import"./AuthenticationCardLogo-0d295755.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},V={class:"bg-white flex justify-between p-4"},k=o("h2",{class:"float-left text-3xl font-extrabold"},"বিভাগ যোগ",-1),C=o("hr",{class:"mb-1"},null,-1),j=["onSubmit"],B={class:"flex items-center justify-center mt-4"},E={__name:"Create",props:{title:String},setup(F){const s=c({name:"",submit_btn:""});console.log(s);const u=()=>{s.post(route("admin.setup.division.store"),{onFinish:()=>{s.submit_btn=="new"&&(s.reset(),s.name="")}})};return(r,a)=>(_(),f(g,{title:"বিভাগ"},{default:i(()=>[o("div",y,[o("div",V,[k,t(e(p),{href:r.route("admin.setup.division.index")},{default:i(()=>[t(m,{class:"font-extrabold"},{default:i(()=>[l(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),C,t($,{class:"bg-white"},{default:i(()=>[t(h,{message:r.$page.props.flash.suc_msg},null,8,["message"]),o("form",{onSubmit:b(u,["prevent"]),class:"bg-white p-8 text-2lg"},[o("div",null,[t(x,{for:"name",value:"বিভাগের নাম"}),t(v,{id:"name",modelValue:e(s).name,"onUpdate:modelValue":a[0]||(a[0]=n=>e(s).name=n),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(w,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),o("div",B,[t(m,{onClick:a[1]||(a[1]=n=>e(s).submit_btn="return"),class:d(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:i(()=>[l(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),t(m,{onClick:a[2]||(a[2]=n=>e(s).submit_btn="new"),class:d(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:i(()=>[l(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,j)]),_:1})])]),_:1}))}};export{E as default};
