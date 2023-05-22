import{_ as b}from"./AppLayout-5b660dcb.js";import{_ as v}from"./SucMesgShow-cb07bee3.js";import{d as m,J as i,c as h,w as u,o,a as e,b as f,g as C,f as a,u as x,i as w,e as c,h as B,t as n,F as H}from"./app-a783baa7.js";import{_ as L}from"./PrimaryButton-d6e70a68.js";import"./ApplicationLogo-f2596664.js";const V={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},$={class:"bg-white flex justify-between p-4"},z=e("h2",{class:"float-left text-4xl font-extrabold"},"User",-1),N=e("hr",{class:"mb-1"},null,-1),U={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},M={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},S=e("th",{scope:"col",class:"px-6 py-3"}," নাম ",-1),j=e("th",{scope:"col",class:"px-6 py-3"}," ফোন ",-1),E=e("th",{scope:"col",class:"px-6 py-3"}," ই-মেইল ",-1),Y={key:0,scope:"col",class:"px-6 py-3"},A=e("th",{scope:"col",class:"px-6 py-3"}," পাসওয়ার্ড ",-1),D=e("th",{scope:"col",class:"px-6 py-3"}," রোল ",-1),F={key:1,scope:"col",class:"px-6 py-3"},T={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},I={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},J={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},O={key:0,scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},G={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},K={key:1,class:"px-6 py-4 flex item-center justify-center"},P=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),Q=["onClick"],R=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),W=[R],ae={__name:"Index",props:{users:Object},setup(X){const p=m({}),g=i().props.auth.user;i().props.permissions.forEach(function(t,l){t.module.name=="User"&&t.role_id==g.role_id&&(p.value=t)});const r=t=>p.value&&p.value[t]?(console.log(t),console.log(p.value[t]),!0):!1,_=m(i().props.users);function y(t,l){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&axios.get(route("admin.single.delete.fetch",[t,l])).then(d=>{_.value=d.data,Swal.fire("Deleted!","Your file has been deleted.","success")}).catch(d=>{console.error(d)}).finally(()=>{console.log("deleted")})})}console.log(i().props.auth.user);function k(){let t="";return i().props.auth.user.uwbkdn.forEach((l,s)=>{t=l.words.name}),t}return(t,l)=>(o(),h(b,{title:"User"},{default:u(()=>[e("div",V,[f(v,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",$,[z,f(x(w),{href:t.route("admin.user.user.create")},{default:u(()=>[r("add")?(o(),h(L,{key:0,class:"font-extrabold"},{default:u(()=>[C(" Add New User ")]),_:1})):a("",!0)]),_:1},8,["href"])]),N,e("table",U,[e("thead",M,[e("tr",null,[S,j,E,t.$page.props.auth.user.id!=1?(o(),c("th",Y," ওয়ার্ড ")):a("",!0),A,D,r("edit")||r("delete")?(o(),c("th",F," কাজ ")):a("",!0)])]),e("tbody",null,[(o(!0),c(H,null,B(_.value,(s,d)=>(o(),c("tr",{key:d,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",T,n(s.name),1),e("td",I,n(s.phone),1),e("td",J,n(s.email),1),t.$page.props.auth.user.id!=1?(o(),c("td",O,n(k()),1)):a("",!0),e("td",q,n(s.show_pass),1),e("td",G,n(s.role?s.role.name:""),1),r("edit")||r("delete")?(o(),c("td",K,[r("edit")?(o(),h(x(w),{key:0,href:t.route("admin.user.user.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:u(()=>[P]),_:2},1032,["href"])):a("",!0),r("delete")?(o(),c("button",{key:1,onClick:Z=>y(s.id,"User"),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},W,8,Q)):a("",!0)])):a("",!0)]))),128))])])])]),_:1}))}};export{ae as default};