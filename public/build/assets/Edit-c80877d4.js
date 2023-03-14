import{v as B,J as r,d as _,c as S,w as c,o as n,a as s,b as i,g as w,u as a,j as D,i as N,l as g,s as v,e as u,h,F as k,n as b,t as x}from"./app-64dede21.js";import{_ as E}from"./AppLayout-4eef7e2a.js";import{_ as L}from"./SucMesgShow-6b52567f.js";import{_ as z,a as V}from"./TextInput-9cb2dda3.js";import{_ as $}from"./InputLabel-91b3e7bc.js";import{_ as F}from"./PrimaryButton-8107c012.js";import{F as M}from"./FormLayout-723e2098.js";import"./ApplicationLogo-1bb12486.js";import"./AuthenticationCardLogo-46373c85.js";import"./_plugin-vue_export-helper-c27b6911.js";const J={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},O={class:"bg-white flex justify-between p-4"},T=s("h2",{class:"float-left text-3xl font-extrabold"},"ইউনিয়ন যোগ",-1),A=s("hr",{class:"mb-1"},null,-1),G=["onSubmit"],H={class:"mb-4"},I=s("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),K=s("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),P=["value"],Q={class:"mb-4"},R=s("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),W=["disabled"],X=s("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),Y=["value"],Z={class:"mb-4"},ee=s("label",{for:"upazila_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"উপজেলা",-1),se=["disabled"],te=s("option",{selected:"",value:""},"উপজেলা নির্বাচন করুন",-1),ae=["value"],de={class:"flex items-center justify-center mt-4"},_e={__name:"Edit",props:{divisions:Object},setup(j){const e=B({name:r().props.union.name,code:r().props.union.code,division_id:r().props.union.division_id,district_id:r().props.union.district_id,upazila_id:r().props.union.upazila_id}),U=()=>{e.put(route("admin.setup.union.update",[r().props.union.id]),{onFinish:()=>e.reset("name")})};let m=_(r().props.districts);const p=_(!1),q=()=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(l=>{e.district_id="",e.upazila_id="",m.value=l.data,m.value.length==0?p.value=!0:p.value=!1,console.log(m.value.length)}).catch(l=>{console.error(l)}).finally(()=>{console.log("district fetch done")})};let f=_(r().props.upazilas);const o=_(!1),C=()=>{axios.get(route("ajax.fetch",["Upazila","district_id",e.district_id]),e).then(l=>{e.upazila_id="",f.value=l.data,f.value.length==0?o.value=!0:o.value=!1}).catch(l=>{console.error(l)}).finally(()=>{console.log("upazila fetch done")})};return(l,d)=>(n(),S(E,{title:"ইউনিয়ন"},{default:c(()=>[s("div",J,[s("div",O,[T,i(a(D),{href:l.route("admin.setup.union.index")},{default:c(()=>[i(F,{class:"font-extrabold"},{default:c(()=>[w(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),A,i(M,{class:"bg-white"},{default:c(()=>[i(L,{message:l.$page.props.flash.suc_msg},null,8,["message"]),s("form",{onSubmit:N(U,["prevent"]),class:"bg-white p-8 text-2lg"},[s("div",H,[I,g(s("select",{id:"division_id","onUpdate:modelValue":d[0]||(d[0]=t=>a(e).division_id=t),onChange:q,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[K,(n(!0),u(k,null,h(j.divisions,(t,y)=>(n(),u("option",{value:t.id},x(t.name),9,P))),256))],544),[[v,a(e).division_id]])]),s("div",Q,[R,g(s("select",{id:"district_id",onChange:C,"onUpdate:modelValue":d[1]||(d[1]=t=>a(e).district_id=t),disabled:p.value,class:b(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[p.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[X,(n(!0),u(k,null,h(a(m),(t,y)=>(n(),u("option",{value:t.id},x(t.name),9,Y))),256))],42,W),[[v,a(e).district_id]])]),s("div",Z,[ee,g(s("select",{id:"upazila_id","onUpdate:modelValue":d[2]||(d[2]=t=>a(e).upazila_id=t),disabled:o.value,class:b(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[o.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[te,(n(!0),u(k,null,h(a(f),(t,y)=>(n(),u("option",{value:t.id},x(t.name),9,ae))),256))],10,se),[[v,a(e).upazila_id]])]),s("div",null,[i($,{for:"name",value:"ইউনিয়নের নাম"}),i(z,{disabled:o.value,id:"name",modelValue:a(e).name,"onUpdate:modelValue":d[3]||(d[3]=t=>a(e).name=t),type:"text",class:b(["mt-1 block w-full",[o.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:"",autofocus:"",autocomplete:"name"},null,8,["disabled","modelValue","class"]),i(V,{class:"mt-2",message:a(e).errors.name},null,8,["message"])]),s("div",null,[i($,{for:"code",value:"কোড"}),i(z,{disabled:o.value,id:"code",modelValue:a(e).code,"onUpdate:modelValue":d[4]||(d[4]=t=>a(e).code=t),type:"number",class:b(["mt-1 block w-full",[o.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:"",autofocus:"",autocomplete:"code"},null,8,["disabled","modelValue","class"]),i(V,{class:"mt-2",message:a(e).errors.code},null,8,["message"])]),s("div",de,[i(F,{onClick:d[5]||(d[5]=t=>a(e).submit_btn="return"),class:b(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:c(()=>[w(" আপডেট ")]),_:1},8,["class","disabled"])])],40,G)]),_:1})])]),_:1}))}};export{_e as default};
