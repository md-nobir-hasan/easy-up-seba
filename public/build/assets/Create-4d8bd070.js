import{v as f,c as _,w as l,o as p,a,b as t,g as i,u as s,j as b,i as g,l as x,K as h,n as d}from"./app-9950afb0.js";import{_ as w}from"./AppLayout-f6488e37.js";import{_ as k}from"./SucMesgShow-c2a88b87.js";import{_ as v,a as u}from"./TextInput-287bbde4.js";import{_ as y}from"./InputLabel-c663bf1b.js";import{_ as n}from"./PrimaryButton-dca36a4a.js";import{F as $}from"./FormLayout-bd026dba.js";import"./ApplicationLogo-bbcda7fc.js";import"./AuthenticationCardLogo-3ef583c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},C={class:"bg-white flex justify-between p-4"},j=a("h2",{class:"float-left text-3xl font-extrabold"},"শিক্ষাগত যোগ্যতা যোগ",-1),q=a("hr",{class:"mb-1"},null,-1),B=["onSubmit"],F={class:"mt-8"},N=a("label",{for:"message",class:"block mb-1 text-sm font-medium text-gray-900 dark:text-white"},"বর্ণনা (ঐচ্ছিক)",-1),S={class:"flex items-center justify-center mt-4"},I={__name:"Create",props:{title:String},setup(M){const e=f({name:"",des:"",submit_btn:""});console.log(e);const c=()=>{e.post(route("admin.setup.education-qualification.store"),{onFinish:()=>e.reset("name")})};return(m,o)=>(p(),_(w,{title:"শিক্ষাগত যোগ্যতা"},{default:l(()=>[a("div",V,[a("div",C,[j,t(s(b),{href:m.route("admin.setup.education-qualification.index")},{default:l(()=>[t(n,{class:"font-extrabold"},{default:l(()=>[i(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),q,t($,{class:"bg-white"},{default:l(()=>[t(k,{message:m.$page.props.flash.suc_msg},null,8,["message"]),a("form",{onSubmit:g(c,["prevent"]),class:"bg-white p-8 text-2lg"},[a("div",null,[t(y,{for:"name",value:"নাম"}),t(v,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(u,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),a("div",F,[N,x(a("textarea",{"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).des=r),id:"message",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:""},null,512),[[h,s(e).des]]),t(u,{class:"mt-2",message:s(e).errors.code},null,8,["message"])]),a("div",S,[t(n,{onClick:o[2]||(o[2]=r=>s(e).submit_btn="return"),class:d(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[i(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),t(n,{onClick:o[3]||(o[3]=r=>s(e).submit_btn="new"),class:d(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[i(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,B)]),_:1})])]),_:1}))}};export{I as default};
