import{v as f,J as d,c as p,w as o,o as _,a as e,b as t,g as m,u as a,j as b,i as g,l as h,H as x,n as w}from"./app-801282f9.js";import{_ as k}from"./AppLayout-24bde9dc.js";import{_ as v}from"./SucMesgShow-97c8f0ee.js";import{_ as y,a as n}from"./TextInput-3b934136.js";import{_ as V}from"./InputLabel-930ae35d.js";import{_ as u}from"./PrimaryButton-b9f7794d.js";import{F as $}from"./FormLayout-6f045e8b.js";import"./ApplicationLogo-3da96f73.js";import"./AuthenticationCardLogo-10ce95c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},B={class:"bg-white flex justify-between p-4"},F=e("h2",{class:"float-left text-3xl font-extrabold"},"পেশা আপডেট",-1),N=e("hr",{class:"mb-1"},null,-1),C=["onSubmit"],M=e("input",{type:"hidden",name:"id"},null,-1),S={class:"mt-8"},T=e("label",{for:"message",class:"block mb-1 text-sm font-medium text-gray-900 dark:text-white"},"বর্ণনা (ঐচ্ছিক)",-1),U={class:"flex items-center justify-center mt-4"},K={__name:"Edit",props:{mdata:Object},setup(q){const s=f({name:d().props.mdata.name,des:d().props.mdata.des}),c=()=>{s.put(route("admin.setup.profession.update",d().props.mdata.id),{onFinish:()=>s.reset("name","des")})};return(i,r)=>(_(),p(k,{title:"পেশা"},{default:o(()=>[e("div",j,[e("div",B,[F,t(a(b),{href:i.route("admin.setup.profession.index")},{default:o(()=>[t(u,{class:"font-extrabold"},{default:o(()=>[m(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),N,t($,{class:"bg-white"},{default:o(()=>[t(v,{message:i.$page.props.flash.suc_msg},null,8,["message"]),e("form",{onSubmit:g(c,["prevent"]),class:"bg-white p-8 text-2lg"},[e("div",null,[t(V,{for:"name",value:"নাম"}),M,t(y,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":r[0]||(r[0]=l=>a(s).name=l),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),t(n,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),e("div",S,[T,h(e("textarea",{"onUpdate:modelValue":r[1]||(r[1]=l=>a(s).des=l),id:"message",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:""},null,512),[[x,a(s).des]]),t(n,{class:"mt-2",message:a(s).errors.code},null,8,["message"])]),e("div",U,[t(u,{class:w(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:o(()=>[m(" আপডেট ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})])]),_:1}))}};export{K as default};
