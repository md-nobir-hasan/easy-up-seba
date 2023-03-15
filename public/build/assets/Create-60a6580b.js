import{v as p,c as b,w as r,o as l,a as t,b as o,g as n,u as s,j as g,i as v,l as h,s as x,e as u,h as k,F as w,n as c,t as y}from"./app-801282f9.js";import{_ as $}from"./AppLayout-24bde9dc.js";import{_ as V}from"./SucMesgShow-97c8f0ee.js";import{_ as C,a as F}from"./TextInput-3b934136.js";import{_ as j}from"./InputLabel-930ae35d.js";import{_ as d}from"./PrimaryButton-b9f7794d.js";import{F as B}from"./FormLayout-6f045e8b.js";import"./ApplicationLogo-3da96f73.js";import"./AuthenticationCardLogo-10ce95c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},N={class:"bg-white flex justify-between p-4"},q=t("h2",{class:"float-left text-3xl font-extrabold"},"জেলা যোগ",-1),D=t("hr",{class:"mb-1"},null,-1),L=["onSubmit"],M={class:"mb-4"},U=t("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),z=t("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),E=["value"],O={class:"flex items-center justify-center mt-4"},X={__name:"Create",props:{divisions:Object},setup(_){const e=p({name:"",division_id:"",submit_btn:""}),f=()=>{e.post(route("admin.setup.district.store"),{onFinish:()=>e.reset("name")})};return(m,a)=>(l(),b($,{title:"জেলা"},{default:r(()=>[t("div",S,[t("div",N,[q,o(s(g),{href:m.route("admin.setup.district.index")},{default:r(()=>[o(d,{class:"font-extrabold"},{default:r(()=>[n(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),D,o(B,{class:"bg-white"},{default:r(()=>[o(V,{message:m.$page.props.flash.suc_msg},null,8,["message"]),t("form",{onSubmit:v(f,["prevent"]),class:"bg-white p-8 text-2lg"},[t("div",M,[U,h(t("select",{id:"division_id","onUpdate:modelValue":a[0]||(a[0]=i=>s(e).division_id=i),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[z,(l(!0),u(w,null,k(_.divisions,(i,T)=>(l(),u("option",{value:i.id},y(i.name),9,E))),256))],512),[[x,s(e).division_id]])]),t("div",null,[o(j,{for:"name",value:"জেলার নাম"}),o(C,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":a[1]||(a[1]=i=>s(e).name=i),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(F,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",O,[o(d,{onClick:a[2]||(a[2]=i=>s(e).submit_btn="return"),class:c(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),o(d,{onClick:a[3]||(a[3]=i=>s(e).submit_btn="new"),class:c(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,L)]),_:1})])]),_:1}))}};export{X as default};
