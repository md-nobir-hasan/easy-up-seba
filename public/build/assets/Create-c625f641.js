import{v as T,d as n,c as V,w as g,o as a,a as s,b as d,g as $,u as l,i as W,j as A,l as h,s as w,e as i,h as k,F as x,n as c,t as y}from"./app-71fb818a.js";import{_ as G}from"./AppLayout-88b5e2ce.js";import{_ as I}from"./SucMesgShow-3ed486d1.js";import{_ as b,a as _}from"./TextInput-b42a0960.js";import{_ as z}from"./InputLabel-c4d6837a.js";import{_ as S}from"./PrimaryButton-b3ed76f3.js";import{F as J}from"./FormLayout-428e714f.js";import"./ApplicationLogo-cfceffba.js";import"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},X={class:"bg-white flex justify-between p-4"},Y=s("h2",{class:"float-left text-3xl font-extrabold"},"Create User",-1),Z=s("hr",{class:"mb-1"},null,-1),ee=["onSubmit"],se={class:"border p-3 mb-8"},oe=s("h2",{class:"text-blue-800 text-center underline font-extrabold pb-2"},"ইউজার অ্যাসাইন তথ্য",-1),le={class:"mb-4"},te=s("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"বিভাগ",-1),ae=s("option",{selected:"",value:""},"বিভাগ নির্বাচন করুন",-1),de=["value"],re={class:"mb-4"},ie=s("label",{for:"district_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"জেলা",-1),ne=["disabled"],ue=s("option",{selected:"",value:""},"জেলা নির্বাচন করুন",-1),ce=["value"],me={class:"mb-4"},be=s("label",{for:"upazila_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"উপজেলা",-1),_e=["disabled"],pe=s("option",{selected:"",value:""},"উপজেলা নির্বাচন করুন",-1),fe=["value"],ve={class:"mb-4"},ge=s("label",{for:"union_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"ইউনিয়ন",-1),he=["disabled"],we=s("option",{selected:"",value:""},"ইউনিয়ন নির্বাচন করুন",-1),ke=["value"],xe={class:"mb-4"},ye=s("label",{for:"word_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"ওয়ার্ড",-1),Ce=["disabled"],Ve=s("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),ze=["value"],Ue={class:"border p-3 mb-8"},qe=s("h2",{class:"text-blue-800 text-center underline font-extrabold pb-2"},"ইউজারের তথ্য",-1),Le={class:"mb-4"},Me={class:"mb-4"},je={class:"mb-4"},Be={class:"mb-4 relative"},Fe=s("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1),$e=[Fe],Se=s("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"},null,-1),Ne=[Se],He={class:"mb-4 relative"},De=s("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1),Pe=[De],Ke=s("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"},null,-1),Oe=[Ke],Ee={class:"border p-3 mb-4"},Re=s("h2",{class:"text-blue-800 text-center underline font-extrabold pb-2"},"ইউজার পারমিশন",-1),Te=s("label",{for:"division_id",class:"block text-md font-medium text-gray-900 dark:text-white"},"Roles",-1),We=s("option",{selected:"",value:""},"Choose a role",-1),Ae=["value"],Ge={class:"flex items-center justify-center mt-4"},ls={__name:"Create",props:{roles:Object,divisions:Object},setup(N){const e=T({name:"",phone:"",email:"",address:"",password:"",confirm_password:"",role_id:"",division_id:"",district_id:"",upazila_id:"",union_id:"",word_id:"",submit_btn:""}),p=n(!1),H=()=>{p.value?p.value=!1:p.value=!0},f=n(!1),D=()=>{f.value?f.value=!1:f.value=!0},U=n(""),q=()=>{e.password!=e.confirm_password?U.value="Passwor don't match":U.value=""},P=()=>{if(e.password!=e.confirm_password)return U.value="Please solve me, first",!1;e.post(route("admin.user.user.store"),{onFinish:()=>e.reset("name","phone","email","password")})};let L=n({});const u=n(!0),K=()=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(r=>{e.district_id="",e.upazila_id="",e.union_id="",e.word_id="",L.value=r.data,L.value.length==0?u.value=!0:u.value=!1,console.log(L.value.length)}).catch(r=>{console.error(r)}).finally(()=>{console.log("district fetch done")})};let j=n({});const m=n(!0),O=()=>{axios.get(route("ajax.fetch",["Upazila","district_id",e.district_id]),e).then(r=>{e.upazila_id="",e.union_id="",e.word_id="",j.value=r.data,j.value.length==0?m.value=!0:m.value=!1}).catch(r=>{console.error(r)}).finally(()=>{console.log("upazila fetch done")})};let B=n({});const v=n(!0),E=()=>{axios.get(route("ajax.fetch",["Union","upazila_id",e.upazila_id]),e).then(r=>{e.union_id="",e.word_id="",B.value=r.data,B.value.length==0?v.value=!0:v.value=!1}).catch(r=>{console.error(r)}).finally(()=>{console.log("union fetch done")})};let F=n({});const M=n(!0),R=()=>{axios.get(route("ajax.fetch",["Word","union_id",e.union_id]),e).then(r=>{e.word_id="",F.value=r.data,F.value.length==0?M.value=!0:M.value=!1}).catch(r=>{console.error(r)}).finally(()=>{console.log("ford fetch done")})};return(r,t)=>(a(),V(G,{title:"User"},{default:g(()=>[s("div",Q,[s("div",X,[Y,d(l(W),{href:r.route("admin.user.user.index")},{default:g(()=>[d(S,{class:"font-extrabold"},{default:g(()=>[$(" Back ")]),_:1})]),_:1},8,["href"])]),Z,d(J,{class:"bg-white"},{default:g(()=>[d(I,{message:r.$page.props.flash.suc_msg},null,8,["message"]),s("form",{onSubmit:A(P,["prevent"]),class:"bg-white p-8 text-2lg"},[s("div",se,[oe,s("div",le,[te,h(s("select",{id:"division_id","onUpdate:modelValue":t[0]||(t[0]=o=>l(e).division_id=o),onChange:K,class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ae,(a(!0),i(x,null,k(N.divisions,(o,C)=>(a(),i("option",{value:o.id},y(o.name),9,de))),256))],544),[[w,l(e).division_id]])]),s("div",re,[ie,h(s("select",{id:"district_id","onUpdate:modelValue":t[1]||(t[1]=o=>l(e).district_id=o),onChange:O,disabled:u.value,class:c([[u.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"]),required:""},[ue,(a(!0),i(x,null,k(l(L),(o,C)=>(a(),i("option",{value:o.id},y(o.name),9,ce))),256))],42,ne),[[w,l(e).district_id]])]),s("div",me,[be,h(s("select",{id:"upazila_id","onUpdate:modelValue":t[2]||(t[2]=o=>l(e).upazila_id=o),onChange:E,disabled:m.value||u.value,class:c([[m.value||u.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"]),required:""},[pe,(a(!0),i(x,null,k(l(j),(o,C)=>(a(),i("option",{value:o.id},y(o.name),9,fe))),256))],42,_e),[[w,l(e).upazila_id]])]),s("div",ve,[ge,h(s("select",{id:"union_id","onUpdate:modelValue":t[3]||(t[3]=o=>l(e).union_id=o),onChange:R,disabled:v.value||m.value||u.value,class:c(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[v.value||m.value||u.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[we,(a(!0),i(x,null,k(l(B),(o,C)=>(a(),i("option",{value:o.id},y(o.name),9,ke))),256))],42,he),[[w,l(e).union_id]])]),s("div",xe,[ye,h(s("select",{id:"word_id","onUpdate:modelValue":t[4]||(t[4]=o=>l(e).word_id=o),disabled:M.value||v.value||m.value||u.value,class:c(["border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",[M.value||v.value||m.value||u.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""]]),required:""},[Ve,(a(!0),i(x,null,k(l(F),(o,C)=>(a(),i("option",{value:o.id},y(o.name),9,ze))),256))],10,Ce),[[w,l(e).word_id]])])]),s("div",Ue,[qe,s("div",Le,[d(z,{for:"name",value:"User Name"}),d(b,{id:"name",modelValue:l(e).name,"onUpdate:modelValue":t[5]||(t[5]=o=>l(e).name=o),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"text"},null,8,["modelValue"]),d(_,{class:"mt-2",message:l(e).errors.name},null,8,["message"])]),s("div",Me,[d(z,{for:"phone",value:"User phone"}),d(b,{id:"phone",modelValue:l(e).phone,"onUpdate:modelValue":t[6]||(t[6]=o=>l(e).phone=o),type:"tel",class:"mt-1 block w-full",required:"",autocomplete:"phone"},null,8,["modelValue"]),d(_,{class:"mt-2",message:l(e).errors.phone},null,8,["message"])]),s("div",je,[d(z,{for:"email",value:"User email"}),d(b,{id:"email",modelValue:l(e).email,"onUpdate:modelValue":t[7]||(t[7]=o=>l(e).email=o),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"email"},null,8,["modelValue"]),d(_,{class:"mt-2",message:l(e).errors.email},null,8,["message"])]),s("div",Be,[d(z,{for:"password",value:"Password"}),f.value?(a(),V(b,{key:0,id:"password",modelValue:l(e).password,"onUpdate:modelValue":t[8]||(t[8]=o=>l(e).password=o),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"password"},null,8,["modelValue"])):(a(),V(b,{key:1,id:"password",modelValue:l(e).password,"onUpdate:modelValue":t[9]||(t[9]=o=>l(e).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"password"},null,8,["modelValue"])),s("div",{onClick:D,class:"float-right absolute top-9 right-2"},[(a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:c([[f.value?"block":"hidden"],"h-6"]),viewBox:"0 0 576 512"},$e,2)),(a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:c([[f.value?"hidden":"block"],"h-6"]),viewBox:"0 0 640 512"},Ne,2))]),d(_,{class:"mt-2",message:l(e).errors.password},null,8,["message"])]),s("div",He,[d(z,{for:"confirm_password",value:"Confirm password"}),p.value?(a(),V(b,{key:0,onChange:q,onKeyup:q,id:"confirm_password",modelValue:l(e).confirm_password,"onUpdate:modelValue":t[10]||(t[10]=o=>l(e).confirm_password=o),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"confirm_password"},null,8,["modelValue"])):(a(),V(b,{key:1,onChange:q,onKeyup:q,id:"confirm_password",modelValue:l(e).confirm_password,"onUpdate:modelValue":t[11]||(t[11]=o=>l(e).confirm_password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"confirm_password"},null,8,["modelValue"])),s("div",{onClick:H,class:"float-right absolute top-9 right-2"},[(a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:c([[p.value?"block":"hidden"],"h-6"]),viewBox:"0 0 576 512"},Pe,2)),(a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:c([[p.value?"hidden":"block"],"h-6"]),viewBox:"0 0 640 512"},Oe,2))]),d(_,{class:"mt-2",message:U.value},null,8,["message"]),d(_,{class:"mt-2",message:l(e).errors.confirm_password},null,8,["message"])])]),s("div",Ee,[Re,Te,h(s("select",{id:"division_id","onUpdate:modelValue":t[12]||(t[12]=o=>l(e).role_id=o),class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[We,(a(!0),i(x,null,k(N.roles,(o,C)=>(a(),i("option",{value:o.id},y(o.name),9,Ae))),256))],512),[[w,l(e).role_id]]),d(_,{class:"mt-2",message:l(e).errors.role_id},null,8,["message"])]),s("div",Ge,[d(S,{onClick:t[13]||(t[13]=o=>l(e).submit_btn="return"),class:c(["ml-4",{"opacity-25":l(e).processing}]),disabled:l(e).processing},{default:g(()=>[$(" Save ")]),_:1},8,["class","disabled"]),d(S,{onClick:t[14]||(t[14]=o=>l(e).submit_btn="new"),class:c(["ml-4",{"opacity-25":l(e).processing}]),disabled:l(e).processing},{default:g(()=>[$(" Save and New ")]),_:1},8,["class","disabled"])])],40,ee)]),_:1})])]),_:1}))}};export{ls as default};
