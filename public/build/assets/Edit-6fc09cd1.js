import{v as _,J as m,c as b,w as o,o as g,a,b as s,g as d,u as t,i as h,j as x,n as v}from"./app-37137dc0.js";import{_ as w}from"./AppLayout-9fe438bc.js";import{_ as V}from"./SucMesgShow-4e4affce.js";import{_ as f,a as i}from"./TextInput-fdf130ca.js";import{_ as u}from"./InputLabel-81db6ef1.js";import{_ as c}from"./PrimaryButton-597965af.js";import{F as y}from"./FormLayout-5de346f5.js";import"./ApplicationLogo-ae065c9e.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},j={class:"bg-white flex justify-between p-4"},k=a("h2",{class:"float-left text-3xl font-extrabold"},"অর্থ-বছর আপডেট",-1),B=a("hr",{class:"mb-1"},null,-1),F=["onSubmit"],N={class:"mt-8"},q={class:"flex items-center justify-center mt-4"},A={__name:"Edit",props:{mdata:Object},setup(C){const e=_({from:m().props.mdata.from,to:m().props.mdata.to}),p=()=>{e.put(route("admin.setup.financial-year.update",m().props.mdata.id),{onFinish:()=>e.reset("from","to")})};return(n,l)=>(g(),b(w,{title:"অর্থ-বছর"},{default:o(()=>[a("div",$,[a("div",j,[k,s(t(h),{href:n.route("admin.setup.financial-year.index")},{default:o(()=>[s(c,{class:"font-extrabold"},{default:o(()=>[d(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),B,s(y,{class:"bg-white"},{default:o(()=>[s(V,{message:n.$page.props.flash.suc_msg},null,8,["message"]),a("form",{onSubmit:x(p,["prevent"]),class:"bg-white p-8 text-2lg"},[a("div",null,[s(u,{for:"from",value:"হইতে"}),s(f,{id:"from",modelValue:t(e).from,"onUpdate:modelValue":l[0]||(l[0]=r=>t(e).from=r),type:"number",min:"2020",max:"2099",step:"1",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(i,{class:"mt-2",message:t(e).errors.from},null,8,["message"])]),a("div",N,[s(u,{for:"to",value:"পর্যন্ত"}),s(f,{id:"to",modelValue:t(e).to,"onUpdate:modelValue":l[1]||(l[1]=r=>t(e).to=r),type:"number",min:"2020",max:"2099",step:"1",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(i,{class:"mt-2",message:t(e).errors.to},null,8,["message"]),s(i,{class:"mt-2",message:t(e).errors.to},null,8,["message"])]),a("div",q,[s(c,{class:v(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:o(()=>[d(" আপডেট ")]),_:1},8,["class","disabled"])])],40,F)]),_:1})])]),_:1}))}};export{A as default};
