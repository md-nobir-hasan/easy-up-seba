import{v as M,J as r,d as v,c as J,w as m,o as n,a as d,b as u,g as U,u as l,j as O,i as T,l as f,s as g,e as b,h,F as k,n as p,t as x}from"./app-64dede21.js";import{_ as W}from"./AppLayout-4eef7e2a.js";import{_ as A}from"./SucMesgShow-6b52567f.js";import{_ as j,a as $}from"./TextInput-9cb2dda3.js";import{_ as q}from"./InputLabel-91b3e7bc.js";import{_ as C}from"./PrimaryButton-8107c012.js";import{F as G}from"./FormLayout-723e2098.js";import"./ApplicationLogo-1bb12486.js";import"./AuthenticationCardLogo-46373c85.js";import"./_plugin-vue_export-helper-c27b6911.js";const H={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},I={class:"bg-white flex justify-between p-4"},K=d("h2",{class:"float-left text-3xl font-extrabold"},"গ্রাম যোগ",-1),P=d("hr",{class:"mb-1"},null,-1),Q=["onSubmit"],R={class:"mb-4"},X=d("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),Y=d("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),Z=["value"],ee={class:"mb-4"},ae=d("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),de=["disabled"],le=d("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),te=["value"],oe={class:"mb-4"},ie=d("label",{for:"upazila_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"উপজেলা",-1),se=["disabled"],re=d("option",{selected:"",value:""},"উপজেলা নির্বাচন করুন",-1),ne=["value"],ue={class:"mb-4"},ce=d("label",{for:"union_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"ইউনিয়ন",-1),be=["disabled"],_e=d("option",{selected:"",value:""},"ইউনিয়ন নির্বাচন করুন",-1),ve=["value"],pe={class:"mb-4"},me=d("label",{for:"word_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"ওয়ার্ড",-1),fe=["disabled"],ge=d("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),he=["value"],ke={class:"flex items-center justify-center mt-4"},Ce={__name:"Edit",props:{divisions:Object},setup(B){const e=M({name:r().props.village.name,code:r().props.village.code,division_id:r().props.village.division_id,district_id:r().props.village.district_id,upazila_id:r().props.village.upazila_id,union_id:r().props.village.union_id,word_id:r().props.village.word_id}),S=()=>{e.put(route("admin.setup.village.update",[r().props.village.id]),{onFinish:()=>e.reset("name")})};let y=v(r().props.districts);const i=v(!1),D=()=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(t=>{e.district_id="",e.upazila_id="",e.union_id="",e.word_id="",y.value=t.data,y.value.length==0?i.value=!0:i.value=!1}).catch(t=>{console.error(t)}).finally(()=>{console.log("district fetch done")})};let z=v(r().props.upazilas);const s=v(!1),N=()=>{axios.get(route("ajax.fetch",["Upazila","district_id",e.district_id]),e).then(t=>{e.upazila_id="",e.union_id="",e.word_id="",z.value=t.data,z.value.length==0?s.value=!0:s.value=!1}).catch(t=>{console.error(t)}).finally(()=>{console.log("upazila fetch done")})};let V=v(r().props.unions);const c=v(!1),E=()=>{axios.get(route("ajax.fetch",["Union","upazila_id",e.upazila_id]),e).then(t=>{e.union_id="",e.word_id="",V.value=t.data,V.value.length==0?c.value=!0:c.value=!1}).catch(t=>{console.error(t)}).finally(()=>{console.log("union fetch done")})};let F=v(r().props.words);const _=v(!1),L=()=>{axios.get(route("ajax.fetch",["Word","union_id",e.union_id]),e).then(t=>{e.word_id="",F.value=t.data,F.value.length==0?_.value=!0:_.value=!1}).catch(t=>{console.error(t)}).finally(()=>{console.log("ford fetch done")})};return(t,o)=>(n(),J(W,{title:"গ্রাম"},{default:m(()=>[d("div",H,[d("div",I,[K,u(l(O),{href:t.route("admin.setup.union.index")},{default:m(()=>[u(C,{class:"font-extrabold"},{default:m(()=>[U(" ফিরে যান ")]),_:1})]),_:1},8,["href"])]),P,u(G,{class:"bg-white"},{default:m(()=>[u(A,{message:t.$page.props.flash.suc_msg},null,8,["message"]),d("form",{onSubmit:T(S,["prevent"]),class:"bg-white p-8 text-2lg"},[d("div",R,[X,f(d("select",{id:"division_id","onUpdate:modelValue":o[0]||(o[0]=a=>l(e).division_id=a),onChange:D,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[Y,(n(!0),b(k,null,h(B.divisions,(a,w)=>(n(),b("option",{value:a.id},x(a.name),9,Z))),256))],544),[[g,l(e).division_id]])]),d("div",ee,[ae,f(d("select",{id:"district_id",onChange:N,"onUpdate:modelValue":o[1]||(o[1]=a=>l(e).district_id=a),disabled:i.value,class:p(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[le,(n(!0),b(k,null,h(l(y),(a,w)=>(n(),b("option",{value:a.id},x(a.name),9,te))),256))],42,de),[[g,l(e).district_id]])]),d("div",oe,[ie,f(d("select",{id:"upazila_id",onChange:E,"onUpdate:modelValue":o[2]||(o[2]=a=>l(e).upazila_id=a),disabled:s.value||i.value,class:p(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[s.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[re,(n(!0),b(k,null,h(l(z),(a,w)=>(n(),b("option",{value:a.id},x(a.name),9,ne))),256))],42,se),[[g,l(e).upazila_id]])]),d("div",ue,[ce,f(d("select",{id:"union_id",onChange:L,"onUpdate:modelValue":o[3]||(o[3]=a=>l(e).union_id=a),disabled:c.value||s.value||i.value,class:p(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[c.value||s.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[_e,(n(!0),b(k,null,h(l(V),(a,w)=>(n(),b("option",{value:a.id},x(a.name),9,ve))),256))],42,be),[[g,l(e).union_id]])]),d("div",pe,[me,f(d("select",{id:"word_id","onUpdate:modelValue":o[4]||(o[4]=a=>l(e).word_id=a),disabled:_.value||c.value||s.value||i.value,class:p(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[_.value||c.value||s.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[ge,(n(!0),b(k,null,h(l(F),(a,w)=>(n(),b("option",{value:a.id},x(a.name),9,he))),256))],10,fe),[[g,l(e).word_id]])]),d("div",null,[u(q,{for:"name",value:"গ্রামের নাম"}),u(j,{disabled:_.value||c.value||s.value||i.value,id:"name",modelValue:l(e).name,"onUpdate:modelValue":o[5]||(o[5]=a=>l(e).name=a),type:"text",class:p(["mt-1 block w-full",[_.value||c.value||s.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:"",autofocus:"",autocomplete:"name"},null,8,["disabled","modelValue","class"]),u($,{class:"mt-2",message:l(e).errors.name},null,8,["message"])]),d("div",null,[u(q,{for:"code",value:"কোড"}),u(j,{disabled:_.value||c.value||s.value||i.value,id:"code",modelValue:l(e).code,"onUpdate:modelValue":o[6]||(o[6]=a=>l(e).code=a),type:"number",class:p(["mt-1 block w-full",[_.value||c.value||s.value||i.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:"",autofocus:"",autocomplete:"code"},null,8,["disabled","modelValue","class"]),u($,{class:"mt-2",message:l(e).errors.code},null,8,["message"])]),d("div",ke,[u(C,{onClick:o[7]||(o[7]=a=>l(e).submit_btn="return"),class:p(["ml-4",{"opacity-25":l(e).processing}]),disabled:l(e).processing},{default:m(()=>[U(" আপডেট ")]),_:1},8,["class","disabled"])])],40,Q)]),_:1})])]),_:1}))}};export{Ce as default};
