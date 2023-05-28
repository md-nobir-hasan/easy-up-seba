import{v as N,J as n,d as _,c as E,w as p,o as u,a as d,b as o,g as V,u as t,i as L,j as M,l as v,s as g,e as b,h,t as k,F as x,n as m}from"./app-37137dc0.js";import{_ as J}from"./AppLayout-9fe438bc.js";import{_ as O}from"./SucMesgShow-4e4affce.js";import{_ as F,a as U}from"./TextInput-fdf130ca.js";import{_ as $}from"./InputLabel-81db6ef1.js";import{_ as j}from"./PrimaryButton-597965af.js";import{F as T}from"./FormLayout-5de346f5.js";import"./ApplicationLogo-ae065c9e.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},G={class:"bg-white flex justify-between p-4"},H=d("h2",{class:"float-left text-3xl font-extrabold"},"ওয়ার্ড যোগ",-1),I=d("hr",{class:"mb-1"},null,-1),K=["onSubmit"],P={class:"mb-4"},Q=d("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),R=d("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),W=["value"],X={class:"mb-4"},Y=d("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),Z=["disabled"],ee=d("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),ae=["value"],de={class:"mb-4"},te=d("label",{for:"upazila_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"উপজেলা",-1),le=["disabled"],se=d("option",{selected:"",value:""},"উপজেলা নির্বাচন করুন",-1),ie=["value"],oe={class:"mb-4"},re=d("label",{for:"union_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"ইউনিয়ন",-1),ne=["disabled"],ue=d("option",{selected:"",value:""},"ইউনিয়ন নির্বাচন করুন",-1),ce=["value"],be={class:"flex items-center justify-center mt-4"},we={__name:"Edit",props:{divisions:Object},setup(q){const e=N({name:n().props.word.name,code:n().props.word.code,division_id:n().props.word.division_id,district_id:n().props.word.district_id,upazila_id:n().props.word.upazila_id,union_id:n().props.word.union_id}),C=()=>{e.put(route("admin.setup.word.update",[n().props.word.id]),{onFinish:()=>e.reset("name")})};let f=_(n().props.districts);const i=_(!1),B=()=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(l=>{e.district_id="",e.upazila_id="",e.union_id="",f.value=l.data,f.value.length==0?i.value=!0:i.value=!1,console.log(f.value.length)}).catch(l=>{console.error(l)}).finally(()=>{console.log("district fetch done")})};let w=_(n().props.upazilas);const r=_(!1),S=()=>{axios.get(route("ajax.fetch",["Upazila","district_id",e.district_id]),e).then(l=>{e.upazila_id="",e.union_id="",w.value=l.data,w.value.length==0?r.value=!0:r.value=!1}).catch(l=>{console.error(l)}).finally(()=>{console.log("upazila fetch done")})};let y=_(n().props.unions);const c=_(!1),D=()=>{axios.get(route("ajax.fetch",["Union","upazila_id",e.upazila_id]),e).then(l=>{e.union_id="",y.value=l.data,y.value.length==0?c.value=!0:c.value=!1}).catch(l=>{console.error(l)}).finally(()=>{console.log("union fetch done")})};return(l,s)=>(u(),E(J,{title:"ওয়ার্ড"},{default:p(()=>[d("div",A,[d("div",G,[H,o(t(L),{href:l.route("admin.setup.word.index")},{default:p(()=>[o(j,{class:"font-extrabold"},{default:p(()=>[V(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),I,o(T,{class:"bg-white"},{default:p(()=>[o(O,{message:l.$page.props.flash.suc_msg},null,8,["message"]),d("form",{onSubmit:M(C,["prevent"]),class:"bg-white p-8 text-2lg"},[d("div",P,[Q,v(d("select",{id:"division_id","onUpdate:modelValue":s[0]||(s[0]=a=>t(e).division_id=a),onChange:B,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[R,(u(!0),b(x,null,h(q.divisions,(a,z)=>(u(),b("option",{value:a.id},k(a.name),9,W))),256))],544),[[g,t(e).division_id]])]),d("div",X,[Y,v(d("select",{id:"district_id",onChange:S,"onUpdate:modelValue":s[1]||(s[1]=a=>t(e).district_id=a),disabled:i.value,class:m(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[ee,(u(!0),b(x,null,h(t(f),(a,z)=>(u(),b("option",{value:a.id},k(a.name),9,ae))),256))],42,Z),[[g,t(e).district_id]])]),d("div",de,[te,v(d("select",{id:"upazila_id",onChange:D,"onUpdate:modelValue":s[2]||(s[2]=a=>t(e).upazila_id=a),disabled:r.value||i.value,class:m(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[r.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[se,(u(!0),b(x,null,h(t(w),(a,z)=>(u(),b("option",{value:a.id},k(a.name),9,ie))),256))],42,le),[[g,t(e).upazila_id]])]),d("div",oe,[re,v(d("select",{id:"union_id","onUpdate:modelValue":s[3]||(s[3]=a=>t(e).union_id=a),disabled:c.value||r.value||i.value,class:m(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[c.value||r.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[ue,(u(!0),b(x,null,h(t(y),(a,z)=>(u(),b("option",{value:a.id},k(a.name),9,ce))),256))],10,ne),[[g,t(e).union_id]])]),d("div",null,[o($,{for:"name",value:"ওয়ার্ড"}),o(F,{disabled:c.value||r.value||i.value,id:"name",modelValue:t(e).name,"onUpdate:modelValue":s[4]||(s[4]=a=>t(e).name=a),type:"text",class:m(["mt-1 block w-full",[c.value||r.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:"",autocomplete:"name"},null,8,["disabled","modelValue","class"]),o(U,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),d("div",null,[o($,{for:"code",value:"কোড"}),o(F,{disabled:c.value||r.value||i.value,id:"code",modelValue:t(e).code,"onUpdate:modelValue":s[5]||(s[5]=a=>t(e).code=a),type:"number",class:m(["mt-1 block w-full",[c.value||r.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:"",autocomplete:"code"},null,8,["disabled","modelValue","class"]),o(U,{class:"mt-2",message:t(e).errors.code},null,8,["message"])]),d("div",be,[o(j,{onClick:s[6]||(s[6]=a=>t(e).submit_btn="return"),class:m(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:p(()=>[V(" আপডেট ")]),_:1},8,["class","disabled"])])],40,K)]),_:1})])]),_:1}))}};export{we as default};
