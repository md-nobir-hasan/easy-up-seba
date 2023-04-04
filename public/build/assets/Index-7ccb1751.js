import{_ as b}from"./AppLayout-88b5e2ce.js";import{_ as k}from"./SucMesgShow-3ed486d1.js";import{d as p,J as d,c as h,w as i,o as s,a as e,b as m,g as v,f as l,u as _,i as g,e as c,h as C,F as B,t as x}from"./app-71fb818a.js";import{_ as H}from"./PrimaryButton-b3ed76f3.js";import"./ApplicationLogo-cfceffba.js";const L={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},V={class:"bg-white flex justify-between p-4"},N=e("h2",{class:"float-left text-4xl font-extrabold"},"Role",-1),z=e("hr",{class:"mb-1"},null,-1),R={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},$={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},M=e("th",{scope:"col",class:"px-6 py-3"}," Name ",-1),S=e("th",{scope:"col",class:"px-6 py-3"}," Id ",-1),j={key:0,scope:"col",class:"px-6 py-3"},A={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Y={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},D={key:0,class:"px-6 py-4 flex item-center justify-center"},E=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),F=["onClick"],I=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),T=[I],U={__name:"Index",props:{roles:Object},setup(J){const n=p({}),w=d().props.auth.user;d().props.permissions.forEach(function(t,u){t.module.name=="Role"&&t.role_id==w.role_id&&(n.value=t)});const o=t=>n.value&&n.value[t]?(console.log(t),console.log(n.value[t]),!0):!1,f=p(d().props.roles);function y(t,u){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&axios.get(route("admin.single.delete.fetch",[t,u])).then(a=>{f.value=a.data,Swal.fire("Deleted!","Your file has been deleted.","success")}).catch(a=>{console.error(a)}).finally(()=>{console.log("deleted")})})}return console.log(d().props.auth.user.role.name),(t,u)=>(s(),h(b,{title:"Role"},{default:i(()=>[e("div",L,[m(k,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",V,[N,m(_(g),{href:t.route("admin.user.role.create")},{default:i(()=>[o("add")?(s(),h(H,{key:0,class:"font-extrabold"},{default:i(()=>[v(" Add New Role ")]),_:1})):l("",!0)]),_:1},8,["href"])]),z,e("table",R,[e("thead",$,[e("tr",null,[M,S,o("edit")||o("delete")?(s(),c("th",j," Action ")):l("",!0)])]),e("tbody",null,[(s(!0),c(B,null,C(f.value,(r,a)=>(s(),c("tr",{key:a,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",A,x(r.name),1),e("td",Y,x(r.id),1),o("edit")||o("delete")?(s(),c("td",D,[o("edit")?(s(),h(_(g),{key:0,href:t.route("admin.user.role.edit",[r.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:i(()=>[E]),_:2},1032,["href"])):l("",!0),o("delete")?(s(),c("button",{key:1,onClick:O=>y(r.id,"Role"),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},T,8,F)):l("",!0)])):l("",!0)]))),128))])])])]),_:1}))}};export{U as default};
