import{v,c as h,w as l,o as r,a as o,b as t,g as d,u as s,i as x,j as k,l as w,s as y,e as u,h as V,t as $,F as C,n as c}from"./app-37137dc0.js";import{_ as F}from"./AppLayout-9fe438bc.js";import{_ as j}from"./SucMesgShow-4e4affce.js";import{_ as f,a as _}from"./TextInput-fdf130ca.js";import{_ as p}from"./InputLabel-81db6ef1.js";import{_ as n}from"./PrimaryButton-597965af.js";import{F as B}from"./FormLayout-5de346f5.js";import"./ApplicationLogo-ae065c9e.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},q={class:"bg-white flex justify-between p-4"},N=o("h2",{class:"float-left text-3xl font-extrabold"},"জেলা যোগ",-1),U=o("hr",{class:"mb-1"},null,-1),D=["onSubmit"],L={class:"mb-4"},M=o("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),z=o("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),E=["value"],O={class:"flex items-center justify-center mt-4"},W={__name:"Create",props:{divisions:Object},setup(b){const e=v({name:"",code:"",division_id:"",submit_btn:""}),g=()=>{e.post(route("admin.setup.district.store"),{onFinish:()=>e.reset("name")})};return(m,a)=>(r(),h(F,{title:"জেলা"},{default:l(()=>[o("div",S,[o("div",q,[N,t(s(x),{href:m.route("admin.setup.district.index")},{default:l(()=>[t(n,{class:"font-extrabold"},{default:l(()=>[d(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),U,t(B,{class:"bg-white"},{default:l(()=>[t(j,{message:m.$page.props.flash.suc_msg},null,8,["message"]),o("form",{onSubmit:k(g,["prevent"]),class:"bg-white p-8 text-2lg"},[o("div",L,[M,w(o("select",{id:"division_id","onUpdate:modelValue":a[0]||(a[0]=i=>s(e).division_id=i),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[z,(r(!0),u(C,null,V(b.divisions,(i,T)=>(r(),u("option",{value:i.id},$(i.name),9,E))),256))],512),[[y,s(e).division_id]])]),o("div",null,[t(p,{for:"name",value:"জেলার নাম"}),t(f,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":a[1]||(a[1]=i=>s(e).name=i),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),o("div",null,[t(p,{for:"code",value:"জেলা কোড"}),t(f,{id:"code",modelValue:s(e).code,"onUpdate:modelValue":a[2]||(a[2]=i=>s(e).code=i),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.code},null,8,["message"])]),o("div",O,[t(n,{onClick:a[3]||(a[3]=i=>s(e).submit_btn="return"),class:c(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[d(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),t(n,{onClick:a[4]||(a[4]=i=>s(e).submit_btn="new"),class:c(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[d(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,D)]),_:1})])]),_:1}))}};export{W as default};
