import{v as p,c as b,w as r,o as l,a as t,b as a,g as n,u as s,j as g,i as v,l as h,s as x,e as c,h as k,F as w,n as u,t as y}from"./app-16429db7.js";import{_ as $}from"./AppLayout-cc8b42c1.js";import{_ as C}from"./SucMesgShow-b513b567.js";import{_ as V,a as D}from"./TextInput-b0635b36.js";import{_ as S}from"./InputLabel-187f5c53.js";import{_ as d}from"./PrimaryButton-1a1bfd0e.js";import{F as B}from"./FormLayout-f62befe6.js";import"./ApplicationLogo-e669ae8c.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},N={class:"bg-white flex justify-between p-4"},j=t("h2",{class:"float-left text-3xl font-extrabold"},"Create District",-1),q=t("hr",{class:"mb-1"},null,-1),L=["onSubmit"],M={class:"mb-4"},U=t("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"Divisions",-1),z=t("option",{selected:"",value:""},"Choose a divison",-1),E=["value"],O={class:"flex items-center justify-center mt-4"},W={__name:"Create",props:{divisions:Object},setup(_){const e=p({name:"",division_id:"",submit_btn:""}),f=()=>{e.post(route("admin.setup.district.store"),{onFinish:()=>e.reset("name")})};return(m,o)=>(l(),b($,{title:"District"},{default:r(()=>[t("div",F,[t("div",N,[j,a(s(g),{href:m.route("admin.setup.district.index")},{default:r(()=>[a(d,{class:"font-extrabold"},{default:r(()=>[n(" Back ")]),_:1})]),_:1},8,["href"])]),q,a(B,{class:"bg-white"},{default:r(()=>[a(C,{message:m.$page.props.flash.suc_msg},null,8,["message"]),t("form",{onSubmit:v(f,["prevent"]),class:"bg-white p-8 text-2lg"},[t("div",M,[U,h(t("select",{id:"division_id","onUpdate:modelValue":o[0]||(o[0]=i=>s(e).division_id=i),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[z,(l(!0),c(w,null,k(_.divisions,(i,T)=>(l(),c("option",{value:i.id},y(i.name),9,E))),256))],512),[[x,s(e).division_id]])]),t("div",null,[a(S,{for:"name",value:"District Name"}),a(V,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":o[1]||(o[1]=i=>s(e).name=i),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(D,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",O,[a(d,{onClick:o[2]||(o[2]=i=>s(e).submit_btn="return"),class:u(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" Save ")]),_:1},8,["class","disabled"]),a(d,{onClick:o[3]||(o[3]=i=>s(e).submit_btn="new"),class:u(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" Save and New ")]),_:1},8,["class","disabled"])])],40,L)]),_:1})])]),_:1}))}};export{W as default};
