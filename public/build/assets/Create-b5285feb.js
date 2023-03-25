import{v as _,c as b,w as r,o as g,a,b as t,g as i,u as s,j as x,i as h,l as w,K as v,n as u}from"./app-377e669a.js";import{_ as k}from"./AppLayout-989bf32a.js";import{_ as y}from"./SucMesgShow-fda27d73.js";import{_ as c,a as m}from"./TextInput-dee065f3.js";import{_ as p}from"./InputLabel-aa68fb3c.js";import{_ as d}from"./PrimaryButton-db7e2267.js";import{F as V}from"./FormLayout-ace2bbaf.js";import"./ApplicationLogo-3fb7c7fc.js";import"./AuthenticationCardLogo-08000a15.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},C={class:"bg-white flex justify-between p-4"},j=a("h2",{class:"float-left text-3xl font-extrabold"},"টেক্স যোগ",-1),B=a("hr",{class:"mb-1"},null,-1),F=["onSubmit"],N={class:"mt-6"},S={class:"mt-6"},U=a("label",{for:"message",class:"block mb-1 text-sm font-medium text-gray-900 dark:text-white"},"বর্ণনা (ঐচ্ছিক)",-1),q={class:"flex items-center justify-center mt-4"},J={__name:"Create",props:{title:String},setup(M){const e=_({name:"",price:"",des:"",submit_btn:""});console.log(e);const f=()=>{e.post(route("admin.setup.tax.store"),{onFinish:()=>e.reset("name","des","price")})};return(n,o)=>(g(),b(k,{title:"টেক্স"},{default:r(()=>[a("div",$,[a("div",C,[j,t(s(x),{href:n.route("admin.setup.tax.index")},{default:r(()=>[t(d,{class:"font-extrabold"},{default:r(()=>[i(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),B,t(V,{class:"bg-white"},{default:r(()=>[t(y,{message:n.$page.props.flash.suc_msg},null,8,["message"]),a("form",{onSubmit:h(f,["prevent"]),class:"bg-white p-8 text-2lg"},[a("div",null,[t(p,{for:"name",value:"নাম"}),t(c,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),a("div",N,[t(p,{for:"price",value:"কর (শতকরা)"}),t(c,{id:"price",modelValue:s(e).price,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).price=l),type:"number",class:"mt-1 block w-full",required:"",step:".001",max:"100"},null,8,["modelValue"]),t(m,{class:"mt-2",message:s(e).errors.price},null,8,["message"])]),a("div",S,[U,w(a("textarea",{"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).des=l),id:"message",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:""},null,512),[[v,s(e).des]]),t(m,{class:"mt-2",message:s(e).errors.code},null,8,["message"])]),a("div",q,[t(d,{onClick:o[3]||(o[3]=l=>s(e).submit_btn="return"),class:u(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[i(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),t(d,{onClick:o[4]||(o[4]=l=>s(e).submit_btn="new"),class:u(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[i(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,F)]),_:1})])]),_:1}))}};export{J as default};
