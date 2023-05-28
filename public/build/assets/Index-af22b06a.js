import{_ as v}from"./AppLayout-9fe438bc.js";import{_ as C}from"./SucMesgShow-4e4affce.js";import{_ as B}from"./PrimaryButton-597965af.js";import{d as g,J as u,c as h,w as d,o,a as e,b as x,g as H,f as n,u as y,i as w,e as c,h as L,t as _,F as V}from"./app-37137dc0.js";import"./ApplicationLogo-ae065c9e.js";const z={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},D={class:"bg-white flex justify-between p-4"},M=e("h2",{class:"float-left text-4xl font-extrabold"},"ধর্ম",-1),$=e("hr",{class:"mb-1"},null,-1),F={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},N={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},S=e("th",{scope:"col",class:"px-6 py-3"}," নাম ",-1),Y=e("th",{scope:"col",class:"px-6 py-3"}," তৈরির তারিখ ",-1),j=e("th",{scope:"col",class:"px-6 py-3"}," আপডেটের তারিখ ",-1),E={key:0,scope:"col",class:"px-6 py-3"},R={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},T=["textContent"],A=["textContent"],I={key:0,class:"px-6 py-4 flex item-center justify-center"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),O=["onClick"],q=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),G=[q],Z={__name:"Index",props:{data:Object},setup(K){const i=g({}),b=u().props.auth.user;u().props.permissions.forEach(function(t,a){t.module.name=="Religion"&&t.role_id==b.role_id&&(i.value=t)});const r=t=>i.value&&i.value[t]?(console.log(t),console.log(i.value[t]),!0):!1;function f(t){if(t){const a=new Date(t);let s=a.getDate(),l=a.getMonth(),m=a.getFullYear();return s+"/"+l+"/"+m}return t}const p=g(u().props.data);function k(t,a){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&axios.get(route("admin.single.delete.fetch",[t,a])).then(l=>{p.value=l.data,Swal.fire("Deleted!","Your file has been deleted.","success")}).catch(l=>{console.error(l)}).finally(()=>{console.log("deleted")})})}return(t,a)=>(o(),h(v,{title:"ধর্ম"},{default:d(()=>[e("div",z,[x(C,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",D,[M,x(y(w),{href:t.route("admin.setup.religion.create")},{default:d(()=>[r("add")?(o(),h(B,{key:0,class:"font-extrabold"},{default:d(()=>[H(" ধর্ম যোগকরুন ")]),_:1})):n("",!0)]),_:1},8,["href"])]),$,e("table",F,[e("thead",N,[e("tr",null,[S,Y,j,r("edit")||r("delete")?(o(),c("th",E," কাজ ")):n("",!0)])]),e("tbody",null,[(o(!0),c(V,null,L(p.value,(s,l)=>(o(),c("tr",{key:l,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",R,_(s.name),1),e("td",{textContent:_(f(s.created_at)),class:"px-6 py-4"},null,8,T),e("td",{textContent:_(f(s.created_at)),class:"px-6 py-4"},null,8,A),r("edit")||r("delete")?(o(),c("td",I,[r("edit")?(o(),h(y(w),{key:0,href:t.route("admin.setup.religion.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:d(()=>[J]),_:2},1032,["href"])):n("",!0),r("delete")?(o(),c("button",{key:1,onClick:m=>k(s.id,"Religion"),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},G,8,O)):n("",!0)])):n("",!0)]))),128))])])])]),_:1}))}};export{Z as default};
