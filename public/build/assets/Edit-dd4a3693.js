import{v as _,J as d,c as b,w as l,o as g,a,b as s,g as n,u as t,j as h,i as x,l as w,K as v,n as k}from"./app-9e5b5082.js";import{_ as y}from"./AppLayout-060e45ba.js";import{_ as V}from"./SucMesgShow-8b0b9a0e.js";import{_ as c,a as m}from"./TextInput-9f35cd76.js";import{_ as u}from"./InputLabel-021c1c76.js";import{_ as p}from"./PrimaryButton-81ed5f9a.js";import{F as $}from"./FormLayout-906098ec.js";import"./ApplicationLogo-ac9235ab.js";import"./AuthenticationCardLogo-d55e8f36.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},B={class:"bg-white flex justify-between p-4"},F=a("h2",{class:"float-left text-3xl font-extrabold"},"টেক্স আপডেট",-1),N=a("hr",{class:"mb-1"},null,-1),U=["onSubmit"],q=a("input",{type:"hidden",name:"id"},null,-1),C={class:"mt-6"},M={class:"mt-6"},S=a("label",{for:"message",class:"block mb-1 text-sm font-medium text-gray-900 dark:text-white"},"বর্ণনা (ঐচ্ছিক)",-1),T={class:"flex items-center justify-center mt-4"},P={__name:"Edit",props:{mdata:Object},setup(z){const e=_({name:d().props.mdata.name,price:d().props.mdata.price,des:d().props.mdata.des}),f=()=>{e.put(route("admin.setup.tax.update",d().props.mdata.id),{onFinish:()=>e.reset("name","des")})};return(i,o)=>(g(),b(y,{title:"টেক্স"},{default:l(()=>[a("div",j,[a("div",B,[F,s(t(h),{href:i.route("admin.setup.tax.index")},{default:l(()=>[s(p,{class:"font-extrabold"},{default:l(()=>[n(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),N,s($,{class:"bg-white"},{default:l(()=>[s(V,{message:i.$page.props.flash.suc_msg},null,8,["message"]),a("form",{onSubmit:x(f,["prevent"]),class:"bg-white p-8 text-2lg"},[a("div",null,[s(u,{for:"name",value:"নাম"}),q,s(c,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>t(e).name=r),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),s(m,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),a("div",C,[s(u,{for:"price",value:"মূল্য"}),s(c,{id:"price",modelValue:t(e).price,"onUpdate:modelValue":o[1]||(o[1]=r=>t(e).price=r),type:"number",class:"mt-1 block w-full",required:"",autocomplete:"price"},null,8,["modelValue"]),s(m,{class:"mt-2",message:t(e).errors.price},null,8,["message"])]),a("div",M,[S,w(a("textarea",{"onUpdate:modelValue":o[2]||(o[2]=r=>t(e).des=r),id:"message",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:""},null,512),[[v,t(e).des]]),s(m,{class:"mt-2",message:t(e).errors.code},null,8,["message"])]),a("div",T,[s(p,{class:k(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:l(()=>[n(" আপডেট ")]),_:1},8,["class","disabled"])])],40,U)]),_:1})])]),_:1}))}};export{P as default};