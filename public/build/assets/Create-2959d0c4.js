import{v as h,c as x,w as r,o as i,a as o,b as t,g as n,u as s,i as k,j as w,l as y,s as V,e as u,h as $,t as C,F,n as c}from"./app-ad675dbd.js";import{_ as j}from"./AppLayout-e6a07ded.js";import{_ as B}from"./SucMesgShow-4646d42c.js";import{_ as f,a as _}from"./TextInput-5a572253.js";import{_ as b}from"./InputLabel-5c8377e0.js";import{_ as d}from"./PrimaryButton-d3991384.js";import{F as S}from"./FormLayout-9d4bf140.js";import"./ApplicationLogo-28c6f312.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},z={class:"bg-white flex justify-between p-4"},N=o("h2",{class:"float-left text-3xl font-extrabold"},"বাজার যোগ",-1),U=o("hr",{class:"mb-1"},null,-1),D=["onSubmit"],L={class:"mb-4"},M=o("label",{for:"union_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"ইউনিয়ন",-1),E=o("option",{selected:"",value:""},"ইউনিয়ন নির্বাচন করুন",-1),O=["value"],T={class:"flex items-center justify-center mt-4"},W={__name:"Create",props:{unions:Object},setup(p){const e=h({name:"",code:"",union_id:"",submit_btn:""}),g=()=>{e.post(route("admin.setup.bazar.store"),{onFinish:()=>{e.name="",e.code="",e.union_id="",e.submit_btn=""}})};return(m,a)=>(i(),x(j,{title:"বাজার"},{default:r(()=>[o("div",q,[o("div",z,[N,t(s(k),{href:m.route("admin.setup.bazar.index")},{default:r(()=>[t(d,{class:"font-extrabold"},{default:r(()=>[n(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),U,t(S,{class:"bg-white"},{default:r(()=>[t(B,{message:m.$page.props.flash.suc_msg},null,8,["message"]),o("form",{onSubmit:w(g,["prevent"]),class:"bg-white p-8 text-2lg"},[o("div",L,[M,y(o("select",{id:"union_id","onUpdate:modelValue":a[0]||(a[0]=l=>s(e).union_id=l),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[E,(i(!0),u(F,null,$(p.unions,(l,v)=>(i(),u("option",{value:l.id,key:v},C(l.name),9,O))),128))],512),[[V,s(e).union_id]])]),o("div",null,[t(b,{for:"name",value:"বাজারর নাম"}),t(f,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).name=l),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),o("div",null,[t(b,{for:"code",value:"বাজার কোড"}),t(f,{id:"code",modelValue:s(e).code,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).code=l),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.code},null,8,["message"])]),o("div",T,[t(d,{onClick:a[3]||(a[3]=l=>s(e).submit_btn="return"),class:c(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),t(d,{onClick:a[4]||(a[4]=l=>s(e).submit_btn="new"),class:c(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,D)]),_:1})])]),_:1}))}};export{W as default};
