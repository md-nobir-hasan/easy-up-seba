import{v as V,d as f,c as C,w as l,o as d,a as s,b as i,g as m,u as t,j as F,i as j,l as b,s as p,e as u,h as g,F as v,n as h,t as k}from"./app-12529e99.js";import{_ as B}from"./AppLayout-28d1e091.js";import{_ as S}from"./SucMesgShow-9efdfc26.js";import{_ as q,a as z}from"./TextInput-5c7850d8.js";import{_ as D}from"./InputLabel-61b1fa87.js";import{_}from"./PrimaryButton-742a8468.js";import{F as N}from"./FormLayout-e1ff73e1.js";import"./ApplicationLogo-15e84f63.js";import"./AuthenticationCardLogo-7d5d69c6.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},L={class:"bg-white flex justify-between p-4"},M=s("h2",{class:"float-left text-3xl font-extrabold"},"উপজেলা যোগ",-1),E=s("hr",{class:"mb-1"},null,-1),O=["onSubmit"],T={class:"mb-4"},A=s("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),G=s("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),H=["value"],I={class:"mb-4"},J=s("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),K=["disabled"],P=s("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),Q=["value"],R={class:"flex items-center justify-center mt-4"},re={__name:"Create",props:{divisions:Object},setup(x){const e=V({name:"",division_id:"",district_id:"",submit_btn:""});let n=f({});const c=f(!0),y=()=>{e.post(route("admin.setup.upazila.store"),{onFinish:()=>e.reset("name")})},w=()=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(r=>{n.value=r.data,n.value.length==0?c.value=!0:c.value=!1,console.log(n.value.length)}).catch(r=>{console.error(r)}).finally(()=>{console.log("district fetch done")})};return(r,a)=>(d(),C(B,{title:"উপজেলা"},{default:l(()=>[s("div",U,[s("div",L,[M,i(t(F),{href:r.route("admin.setup.upazila.index")},{default:l(()=>[i(_,{class:"font-extrabold"},{default:l(()=>[m(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),E,i(N,{class:"bg-white"},{default:l(()=>[i(S,{message:r.$page.props.flash.suc_msg},null,8,["message"]),s("form",{onSubmit:j(y,["prevent"]),class:"bg-white p-8 text-2lg"},[s("div",T,[A,b(s("select",{id:"division_id","onUpdate:modelValue":a[0]||(a[0]=o=>t(e).division_id=o),onChange:w,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[G,(d(!0),u(v,null,g(x.divisions,(o,$)=>(d(),u("option",{value:o.id},k(o.name),9,H))),256))],544),[[p,t(e).division_id]])]),s("div",I,[J,b(s("select",{id:"district_id","onUpdate:modelValue":a[1]||(a[1]=o=>t(e).district_id=o),disabled:c.value,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[P,(d(!0),u(v,null,g(t(n),(o,$)=>(d(),u("option",{value:o.id},k(o.name),9,Q))),256))],8,K),[[p,t(e).district_id]])]),s("div",null,[i(D,{for:"name",value:"উপজেলার নাম"}),i(q,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).name=o),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),i(z,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),s("div",R,[i(_,{onClick:a[3]||(a[3]=o=>t(e).submit_btn="return"),class:h(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:l(()=>[m(" সংরক্ষণ ")]),_:1},8,["class","disabled"]),i(_,{onClick:a[4]||(a[4]=o=>t(e).submit_btn="new"),class:h(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:l(()=>[m(" সংরক্ষণ এবং নতুন ")]),_:1},8,["class","disabled"])])],40,O)]),_:1})])]),_:1}))}};export{re as default};