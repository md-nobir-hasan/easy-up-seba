import{_ as b}from"./AppLayout-4eef7e2a.js";import{_ as k}from"./SucMesgShow-6b52567f.js";import{d as z,J as x,c as i,w as l,o,a as e,b as f,g as C,f as d,u as _,j as h,e as p,h as v,F as H,t as r}from"./app-64dede21.js";import{_ as B}from"./PrimaryButton-8107c012.js";import"./ApplicationLogo-1bb12486.js";import"./AuthenticationCardLogo-46373c85.js";const U={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},L={class:"bg-white flex justify-between p-4"},V=e("h2",{class:"float-left text-4xl font-extrabold"},"Upazila",-1),D=e("hr",{class:"mb-1"},null,-1),M={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},N={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},j=e("th",{scope:"col",class:"px-6 py-3"}," Division ",-1),A=e("th",{scope:"col",class:"px-6 py-3"}," District ",-1),F=e("th",{scope:"col",class:"px-6 py-3"}," Upazila ",-1),$=e("th",{scope:"col",class:"px-6 py-3"}," Created At ",-1),E=e("th",{scope:"col",class:"px-6 py-3"}," Created By ",-1),S=e("th",{scope:"col",class:"px-6 py-3"}," Updated At ",-1),I=e("th",{scope:"col",class:"px-6 py-3"}," Updated By ",-1),J={key:0,scope:"col",class:"px-6 py-3"},O={class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},T={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Y={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},G=["textContent"],K={class:"px-6 py-4"},P=["textContent"],Q={class:"px-6 py-4"},R={key:0,class:"px-6 py-4 flex item-center justify-center"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),X=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),re={__name:"Index",props:{upazilas:Object},setup(y){const n=z({}),g=x().props.auth.user;x().props.permissions.forEach(function(t,c){t.module.name=="Upazila"&&t.role_id==g.role_id&&(n.value=t)});const a=t=>n.value&&n.value[t]?(console.log(t),console.log(n.value[t]),!0):!1;function u(t){if(t){const c=new Date(t);let s=c.getDate(),m=c.getMonth(),w=c.getFullYear();return s+"/"+m+"/"+w}return t}return(t,c)=>(o(),i(b,{title:"Upazila"},{default:l(()=>[e("div",U,[f(k,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",L,[V,f(_(h),{href:t.route("admin.setup.upazila.create")},{default:l(()=>[a("add")?(o(),i(B,{key:0,class:"font-extrabold"},{default:l(()=>[C(" Add New Upazila ")]),_:1})):d("",!0)]),_:1},8,["href"])]),D,e("table",M,[e("thead",N,[e("tr",null,[j,A,F,$,E,S,I,a("edit")||a("delete")?(o(),p("th",J," Action ")):d("",!0)])]),e("tbody",null,[(o(!0),p(H,null,v(y.upazilas,(s,m)=>(o(),p("tr",O,[e("td",T,r(s.division.name),1),e("th",Y,r(s.district.name),1),e("th",q,r(s.name),1),e("td",{textContent:r(u(s.created_at)),class:"px-6 py-4"},null,8,G),e("td",K,r(s.created_by?s.created_by.name:""),1),e("td",{class:"px-6 py-4",textContent:r(u(s.updated_at))},null,8,P),e("td",Q,r(s.updated_by?s.updated_by.name:""),1),a("edit")||a("delete")?(o(),p("td",R,[a("edit")?(o(),i(_(h),{key:0,href:t.route("admin.setup.upazila.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:l(()=>[W]),_:2},1032,["href"])):d("",!0),a("delete")?(o(),i(_(h),{key:1,href:t.route("admin.single.delete",[s.id,"Upazila"]),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},{default:l(()=>[X]),_:2},1032,["href"])):d("",!0)])):d("",!0)]))),256))])])])]),_:1}))}};export{re as default};
