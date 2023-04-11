import{v as V,J as n,d as _,c as $,w as d,o as l,a as e,b as i,g as f,u as o,i as j,j as F,l as p,s as b,e as u,h as g,F as h,n as B,t as v}from"./app-b4415859.js";import{_ as C}from"./AppLayout-4750e3c7.js";import{_ as S}from"./SucMesgShow-5a072006.js";import{_ as q,a as D}from"./TextInput-760910d0.js";import{_ as N}from"./InputLabel-3268436d.js";import{_ as x}from"./PrimaryButton-52b59a48.js";import{F as O}from"./FormLayout-54bd007a.js";import"./ApplicationLogo-82765f09.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},E={class:"bg-white flex justify-between p-4"},L=e("h2",{class:"float-left text-3xl font-extrabold"},"উপজেলা আপডেট",-1),M=e("hr",{class:"mb-1"},null,-1),J=["onSubmit"],T={class:"mb-4"},A=e("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),G=e("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),H=["value"],I={class:"mb-4"},K=e("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),P=e("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),Q=["value"],R={class:"flex items-center justify-center mt-4"},ie={__name:"Edit",props:{divisions:Object,upazila:Object},setup(k){const t=V({division_id:n().props.upazila.division_id,name:n().props.upazila.name,district_id:n().props.upazila.district_id});let c=_({});const y=_(!0),w=()=>{t.put(route("admin.setup.upazila.update",[n().props.upazila.id]),{onFinish:()=>t.reset("name")})},m=()=>{axios.get(route("ajax.fetch",["District","division_id",t.division_id]),t).then(r=>{c.value=r.data,y.value=!1,console.log(c.value)}).catch(r=>{console.error(r)}).finally(()=>{console.log("district fetch done")})};return m(),(r,a)=>(l(),$(C,{title:"উপজেলা"},{default:d(()=>[e("div",U,[e("div",E,[L,i(o(j),{href:r.route("admin.setup.upazila.index")},{default:d(()=>[i(x,{class:"font-extrabold"},{default:d(()=>[f(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),M,i(O,{class:"bg-white"},{default:d(()=>[i(S,{message:r.$page.props.flash.suc_msg},null,8,["message"]),e("form",{onSubmit:F(w,["prevent"]),class:"bg-white p-8 text-2lg"},[e("div",T,[A,p(e("select",{id:"division_id","onUpdate:modelValue":a[0]||(a[0]=s=>o(t).division_id=s),onChange:m,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[G,(l(!0),u(h,null,g(k.divisions,(s,z)=>(l(),u("option",{value:s.id},v(s.name),9,H))),256))],544),[[b,o(t).division_id]])]),e("div",I,[K,p(e("select",{id:"district_id","onUpdate:modelValue":a[1]||(a[1]=s=>o(t).district_id=s),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[P,(l(!0),u(h,null,g(o(c),(s,z)=>(l(),u("option",{value:s.id},v(s.name),9,Q))),256))],512),[[b,o(t).district_id]])]),e("div",null,[i(N,{for:"name",value:"উপজেলার নাম"}),i(q,{id:"name",modelValue:o(t).name,"onUpdate:modelValue":a[2]||(a[2]=s=>o(t).name=s),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),i(D,{class:"mt-2",message:o(t).errors.name},null,8,["message"])]),e("div",R,[i(x,{onClick:a[3]||(a[3]=s=>o(t).submit_btn="return"),class:B(["ml-4",{"opacity-25":o(t).processing}]),disabled:o(t).processing},{default:d(()=>[f(" আপডেট ")]),_:1},8,["class","disabled"])])],40,J)]),_:1})])]),_:1}))}};export{ie as default};