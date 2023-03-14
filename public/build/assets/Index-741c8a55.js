import{_ as b}from"./AppLayout-e836041d.js";import{_ as k}from"./SucMesgShow-81c40b8a.js";import{d as C,J as x,c as l,w as n,o,a as e,b as f,g as H,f as d,u as h,j as _,e as i,h as L,F as V,t as a}from"./app-62f690be.js";import{_ as v}from"./PrimaryButton-2c97c894.js";import"./_plugin-vue_export-helper-c27b6911.js";const z={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},B={class:"bg-white flex justify-between p-4"},M=e("h2",{class:"float-left text-4xl font-extrabold"},"ইউনিয়ন",-1),j=e("hr",{class:"mb-1"},null,-1),D={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},F={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},N=e("th",{scope:"col",class:"px-6 py-3"}," বিভাগ ",-1),$=e("th",{scope:"col",class:"px-6 py-3"}," জেলা ",-1),E=e("th",{scope:"col",class:"px-6 py-3"}," উপজেলা ",-1),S=e("th",{scope:"col",class:"px-6 py-3"}," ইউনিয়ন ",-1),U=e("th",{scope:"col",class:"px-6 py-3"}," তৈরির তারিখ ",-1),I=e("th",{scope:"col",class:"px-6 py-3"}," তৈরি ",-1),J=e("th",{scope:"col",class:"px-6 py-3"}," আপডেটের তারিখ ",-1),O=e("th",{scope:"col",class:"px-6 py-3"}," আপডেট ",-1),T={key:0,scope:"col",class:"px-6 py-3"},Y={class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},A={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},G={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},K={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},P=["textContent"],Q={class:"px-6 py-4"},R=["textContent"],W={class:"px-6 py-4"},X={key:0,class:"px-6 py-4 flex item-center justify-center"},Z=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),re={__name:"Index",props:{unions:Object},setup(y){const p=C({}),g=x().props.auth.user;x().props.permissions.forEach(function(t,r){t.module.name=="Union"&&t.role_id==g.role_id&&(p.value=t)});const c=t=>p.value?!!p.value[t]:!1;function u(t){if(t){const r=new Date(t);let s=r.getDate(),m=r.getMonth(),w=r.getFullYear();return s+"/"+m+"/"+w}return t}return(t,r)=>(o(),l(b,{title:"ইউনিয়ন"},{default:n(()=>[e("div",z,[f(k,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",B,[M,f(h(_),{href:t.route("admin.setup.union.create")},{default:n(()=>[c("add")?(o(),l(v,{key:0,class:"font-extrabold"},{default:n(()=>[H(" ইউনিয়ন যোগকরুন ")]),_:1})):d("",!0)]),_:1},8,["href"])]),j,e("table",D,[e("thead",F,[e("tr",null,[N,$,E,S,U,I,J,O,c("edit")||c("delete")?(o(),i("th",T," কাজ ")):d("",!0)])]),e("tbody",null,[(o(!0),i(V,null,L(y.unions,(s,m)=>(o(),i("tr",Y,[e("td",q,a(s.division.name),1),e("th",A,a(s.district.name),1),e("th",G,a(s.upazila.name),1),e("th",K,a(s.name),1),e("td",{textContent:a(u(s.created_at)),class:"px-6 py-4"},null,8,P),e("td",Q,a(s.created_by?s.created_by.name:""),1),e("td",{class:"px-6 py-4",textContent:a(u(s.updated_at))},null,8,R),e("td",W,a(s.updated_by?s.updated_by.name:""),1),c("edit")||c("delete")?(o(),i("td",X,[c("edit")?(o(),l(h(_),{key:0,href:t.route("admin.setup.union.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:n(()=>[Z]),_:2},1032,["href"])):d("",!0),c("delete")?(o(),l(h(_),{key:1,href:t.route("admin.single.delete",[s.id,"Union"]),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},{default:n(()=>[ee]),_:2},1032,["href"])):d("",!0)])):d("",!0)]))),256))])])])]),_:1}))}};export{re as default};
