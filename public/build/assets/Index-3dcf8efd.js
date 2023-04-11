import{_ as v}from"./AppLayout-4750e3c7.js";import{_ as C}from"./SucMesgShow-5a072006.js";import{d as x,J as h,c as _,w as d,o,a as e,b as f,g as B,f as l,u as g,i as y,e as i,h as H,F as V,t as a}from"./app-b4415859.js";import{_ as L}from"./PrimaryButton-52b59a48.js";import"./ApplicationLogo-82765f09.js";const z={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},D={class:"bg-white flex justify-between p-4"},M=e("h2",{class:"float-left text-4xl font-extrabold"},"গ্রাম",-1),$=e("hr",{class:"mb-1"},null,-1),F={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},N={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},S=e("th",{scope:"col",class:"px-6 py-3"}," বিভাগ ",-1),Y=e("th",{scope:"col",class:"px-6 py-3"}," জেলা ",-1),j=e("th",{scope:"col",class:"px-6 py-3"}," উপজেলা ",-1),E=e("th",{scope:"col",class:"px-6 py-3"}," ইউনিয়ন ",-1),T=e("th",{scope:"col",class:"px-6 py-3"}," ওয়ার্ড ",-1),A=e("th",{scope:"col",class:"px-6 py-3"}," গ্রাম ",-1),I=e("th",{scope:"col",class:"px-6 py-3"}," তৈরির তারিখ ",-1),J=e("th",{scope:"col",class:"px-6 py-3"}," তৈরি ",-1),O={key:0,scope:"col",class:"px-6 py-3"},q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},G={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},K={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},P={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},R={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},U=["textContent"],W={class:"px-6 py-4"},X={key:0,class:"px-6 py-4 flex item-center justify-center"},Z=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),ee=["onClick"],te=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),se=[te],ie={__name:"Index",props:{villages:Object},setup(oe){const p=x({}),w=h().props.auth.user;h().props.permissions.forEach(function(t,c){t.module.name=="Village"&&t.role_id==w.role_id&&(p.value=t)});const r=t=>p.value?!!p.value[t]:!1;function b(t){if(t){const c=new Date(t);let s=c.getDate(),n=c.getMonth(),m=c.getFullYear();return s+"/"+n+"/"+m}return t}const u=x(h().props.villages);function k(t,c){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&axios.get(route("admin.single.delete.fetch",[t,c])).then(n=>{u.value=n.data,Swal.fire("Deleted!","Your file has been deleted.","success")}).catch(n=>{console.error(n)}).finally(()=>{console.log("deleted")})})}return(t,c)=>(o(),_(v,{title:"গ্রাম"},{default:d(()=>[e("div",z,[f(C,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",D,[M,f(g(y),{href:t.route("admin.setup.village.create")},{default:d(()=>[r("add")?(o(),_(L,{key:0,class:"font-extrabold"},{default:d(()=>[B(" গ্রাম যোগকরুন ")]),_:1})):l("",!0)]),_:1},8,["href"])]),$,e("table",F,[e("thead",N,[e("tr",null,[S,Y,j,E,T,A,I,J,r("edit")||r("delete")?(o(),i("th",O," কাজ ")):l("",!0)])]),e("tbody",null,[(o(!0),i(V,null,H(u.value,(s,n)=>(o(),i("tr",{key:n,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",q,a(s.division.name),1),e("th",G,a(s.district.name),1),e("th",K,a(s.upazila.name),1),e("th",P,a(s.union.name),1),e("th",Q,a(s.word.name),1),e("th",R,a(s.name),1),e("td",{textContent:a(b(s.created_at)),class:"px-6 py-4"},null,8,U),e("td",W,a(s.created_by?s.created_by.name:""),1),r("edit")||r("delete")?(o(),i("td",X,[r("edit")?(o(),_(g(y),{key:0,href:t.route("admin.setup.village.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:d(()=>[Z]),_:2},1032,["href"])):l("",!0),r("delete")?(o(),i("button",{key:1,onClick:m=>k(s.id,"Village"),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},se,8,ee)):l("",!0)])):l("",!0)]))),128))])])])]),_:1}))}};export{ie as default};