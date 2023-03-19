import{_ as C}from"./AppLayout-f5fd5eb0.js";import{_ as v}from"./SucMesgShow-efbea4a9.js";import{_ as B}from"./PrimaryButton-59535b96.js";import{d as x,J as _,c as h,w as p,o,a as e,b as y,g as H,f as l,u as g,j as w,e as d,h as D,F as L,t as n}from"./app-15a8a84c.js";import"./ApplicationLogo-9f65e28c.js";import"./AuthenticationCardLogo-d044b805.js";const V={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},z={class:"bg-white flex justify-between p-4"},M=e("h2",{class:"float-left text-4xl font-extrabold"},"জেলা",-1),$=e("hr",{class:"mb-1"},null,-1),j={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},F={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},N=e("th",{scope:"col",class:"px-6 py-3"}," বিভাগ ",-1),S=e("th",{scope:"col",class:"px-6 py-3"}," জেলা ",-1),Y=e("th",{scope:"col",class:"px-6 py-3"}," তৈরির তারিখ ",-1),E=e("th",{scope:"col",class:"px-6 py-3"}," তৈরির ",-1),T=e("th",{scope:"col",class:"px-6 py-3"}," আপডেটের তারিখ ",-1),A=e("th",{scope:"col",class:"px-6 py-3"}," আপডেট ",-1),I={key:0,scope:"col",class:"px-6 py-3"},J={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},O={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},q=["textContent"],G={class:"px-6 py-4"},K=["textContent"],P={class:"px-6 py-4"},Q={key:0,class:"px-6 py-4 flex item-center justify-center"},R=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),U=["onClick"],W=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),X=[W],ce={__name:"Index",props:{data:Object},setup(Z){const i=x({}),b=_().props.auth.user;_().props.permissions.forEach(function(t,a){t.module.name=="District"&&t.role_id==b.role_id&&(i.value=t)});const r=t=>i.value&&i.value[t]?(console.log(t),console.log(i.value[t]),!0):!1;function u(t){if(t){const a=new Date(t);let s=a.getDate(),c=a.getMonth(),m=a.getFullYear();return s+"/"+c+"/"+m}return t}const f=x(_().props.data);function k(t,a){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&axios.get(route("admin.single.delete.fetch",[t,a])).then(c=>{f.value=c.data,Swal.fire("Deleted!","Your file has been deleted.","success")}).catch(c=>{console.error(c)}).finally(()=>{console.log("deleted")})})}return(t,a)=>(o(),h(C,{title:"জেলা"},{default:p(()=>[e("div",V,[y(v,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",z,[M,y(g(w),{href:t.route("admin.setup.district.create")},{default:p(()=>[r("add")?(o(),h(B,{key:0,class:"font-extrabold"},{default:p(()=>[H(" জেলা যোগকরুন ")]),_:1})):l("",!0)]),_:1},8,["href"])]),$,e("table",j,[e("thead",F,[e("tr",null,[N,S,Y,E,T,A,r("edit")||r("delete")?(o(),d("th",I," কাজ ")):l("",!0)])]),e("tbody",null,[(o(!0),d(L,null,D(f.value,(s,c)=>(o(),d("tr",{key:c,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",J,n(s.division.name),1),e("th",O,n(s.name),1),e("td",{textContent:n(u(s.created_at)),class:"px-6 py-4"},null,8,q),e("td",G,n(s.created_by?s.created_by.name:""),1),e("td",{textContent:n(u(s.created_at)),class:"px-6 py-4"},null,8,K),e("td",P,n(s.updated_by?s.updated_by.name:""),1),r("edit")||r("delete")?(o(),d("td",Q,[r("edit")?(o(),h(g(w),{key:0,href:t.route("admin.setup.district.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:p(()=>[R]),_:2},1032,["href"])):l("",!0),r("delete")?(o(),d("button",{key:1,onClick:m=>k(s.id,"District"),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},X,8,U)):l("",!0)])):l("",!0)]))),128))])])])]),_:1}))}};export{ce as default};
