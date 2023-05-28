import{v as F,J as l,d as p,c as q,w as d,o as n,a as t,b as a,g as _,u as s,i as B,j as C,l as f,s as b,e as u,h as g,t as v,F as h,n as S}from"./app-37137dc0.js";import{_ as U}from"./AppLayout-9fe438bc.js";import{_ as D}from"./SucMesgShow-4e4affce.js";import{_ as k,a as x}from"./TextInput-fdf130ca.js";import{_ as y}from"./InputLabel-81db6ef1.js";import{_ as w}from"./PrimaryButton-597965af.js";import{F as N}from"./FormLayout-5de346f5.js";import"./ApplicationLogo-ae065c9e.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},E={class:"bg-white flex justify-between p-4"},L=t("h2",{class:"float-left text-3xl font-extrabold"},"উপজেলা আপডেট",-1),M=t("hr",{class:"mb-1"},null,-1),J=["onSubmit"],T={class:"mb-4"},A=t("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),G=t("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),H=["value"],I={class:"mb-4"},K=t("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),P=t("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),Q=["value"],R={class:"flex items-center justify-center mt-4"},ie={__name:"Edit",props:{divisions:Object,upazila:Object},setup(V){const e=F({division_id:l().props.upazila.division_id,name:l().props.upazila.name,code:l().props.upazila.code,district_id:l().props.upazila.district_id});let c=p({});const z=p(!0),$=()=>{e.put(route("admin.setup.upazila.update",[l().props.upazila.id]),{onFinish:()=>e.reset("name")})},m=()=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(r=>{c.value=r.data,z.value=!1,console.log(c.value)}).catch(r=>{console.error(r)}).finally(()=>{console.log("district fetch done")})};return m(),(r,i)=>(n(),q(U,{title:"উপজেলা"},{default:d(()=>[t("div",O,[t("div",E,[L,a(s(B),{href:r.route("admin.setup.upazila.index")},{default:d(()=>[a(w,{class:"font-extrabold"},{default:d(()=>[_(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),M,a(N,{class:"bg-white"},{default:d(()=>[a(D,{message:r.$page.props.flash.suc_msg},null,8,["message"]),t("form",{onSubmit:C($,["prevent"]),class:"bg-white p-8 text-2lg"},[t("div",T,[A,f(t("select",{id:"division_id","onUpdate:modelValue":i[0]||(i[0]=o=>s(e).division_id=o),onChange:m,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[G,(n(!0),u(h,null,g(V.divisions,(o,j)=>(n(),u("option",{value:o.id},v(o.name),9,H))),256))],544),[[b,s(e).division_id]])]),t("div",I,[K,f(t("select",{id:"district_id","onUpdate:modelValue":i[1]||(i[1]=o=>s(e).district_id=o),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[P,(n(!0),u(h,null,g(s(c),(o,j)=>(n(),u("option",{value:o.id},v(o.name),9,Q))),256))],512),[[b,s(e).district_id]])]),t("div",null,[a(y,{for:"name",value:"উপজেলার নাম"}),a(k,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":i[2]||(i[2]=o=>s(e).name=o),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),a(x,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",null,[a(y,{for:"code",value:"উপজেলা কোড"}),a(k,{id:"code",modelValue:s(e).code,"onUpdate:modelValue":i[3]||(i[3]=o=>s(e).code=o),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(x,{class:"mt-2",message:s(e).errors.code},null,8,["message"])]),t("div",R,[a(w,{onClick:i[4]||(i[4]=o=>s(e).submit_btn="return"),class:S(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[_(" আপডেট ")]),_:1},8,["class","disabled"])])],40,J)]),_:1})])]),_:1}))}};export{ie as default};
