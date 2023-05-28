import{_ as b}from"./PrimaryButton-4d1a68c0.js";import{_ as k}from"./SucMesgShow-33e80136.js";import{_ as C}from"./AppLayout-da16628b.js";import{d as u,J as h,c as m,w as n,o as a,a as e,b as _,g as B,f as l,u as f,i as w,e as i,h as H,t as o,F as L}from"./app-ad6a1e24.js";import"./ApplicationLogo-55e86b33.js";const V={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},v={class:"bg-white flex justify-between p-4"},z=e("h2",{class:"float-left text-4xl font-extrabold"},"গ্রাম",-1),$=e("hr",{class:"mb-1"},null,-1),M={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},N=e("thead",{class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"নাম"),e("th",{scope:"col",class:"px-6 py-3"},"বাবার নাম"),e("th",{scope:"col",class:"px-6 py-3"},"কোড নাম্বার"),e("th",{scope:"col",class:"px-6 py-3"},"মোবাইল নাম্বার"),e("th",{scope:"col",class:"px-6 py-3"},"ইমেইল"),e("th",{scope:"col",class:"px-6 py-3"}," ব্যাবসা প্রতিষ্ঠানের নাম "),e("th",{scope:"col",class:"px-6 py-3"},"স্ট্যাটাস"),e("th",{scope:"col",class:"px-6 py-3"},"আবেদনের তারিখ"),e("th",{scope:"col",class:"px-6 py-3"},"একশন")])],-1),S={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},j={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},T={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Y={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},D={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},E={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},F={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},A={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},I={key:0,class:"px-6 py-4 flex item-center justify-center"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),O=["onClick"],q=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),G=[q],Z={__name:"Index",props:{data:Object},setup(K){const d=u({}),y=h().props.auth.user;h().props.permissions.forEach(function(s,p){var t;((t=s.module)==null?void 0:t.name)=="Village"&&s.role_id==y.role_id&&(d.value=s)});const r=s=>d.value?!!d.value[s]:!1,x=u(h().props.data);function g(s,p){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&axios.get(route("admin.single.delete.fetch",[s,p])).then(c=>{x.value=c.data,Swal.fire("Deleted!","Your file has been deleted.","success")}).catch(c=>{console.error(c)}).finally(()=>{console.log("deleted")})})}return(s,p)=>(a(),m(C,{title:"গ্রাম"},{default:n(()=>[e("div",V,[_(k,{message:s.$page.props.flash.suc_msg},null,8,["message"]),e("div",v,[z,_(f(w),{href:s.route("admin.trade-license.create")},{default:n(()=>[r("add")?(a(),m(b,{key:0,class:"font-extrabold"},{default:n(()=>[B(" ট্রেড লাইসেন্স যোগকরুন ")]),_:1})):l("",!0)]),_:1},8,["href"])]),$,e("table",M,[N,e("tbody",null,[(a(!0),i(L,null,H(x.value,(t,c)=>(a(),i("tr",{key:c,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("th",S,o(t==null?void 0:t.name),1),e("th",j,o(t.fathers_name),1),e("th",T,o(t.code_number),1),e("th",Y,o(t.phone),1),e("th",D,o(t.email),1),e("th",E,o(t.business_name),1),e("th",F,o(t.status),1),e("th",A,o(t.created_at),1),r("edit")||r("delete")?(a(),i("td",I,[r("edit")?(a(),m(f(w),{key:0,href:s.route("admin.trade-license.edit",[t.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:n(()=>[J]),_:2},1032,["href"])):l("",!0),r("delete")?(a(),i("button",{key:1,onClick:P=>g(t.id,"TradeLicense"),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},G,8,O)):l("",!0)])):l("",!0)]))),128))])])])]),_:1}))}};export{Z as default};
