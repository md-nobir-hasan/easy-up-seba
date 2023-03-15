import{_ as k}from"./AppLayout-24bde9dc.js";import{_ as H}from"./SucMesgShow-97c8f0ee.js";import{_ as C}from"./PrimaryButton-b9f7794d.js";import{d as v,J as x,c as i,w as n,o,a as e,b as y,g as B,f as l,u as p,j as _,e as u,h as L,F as V,t as a}from"./app-801282f9.js";import"./ApplicationLogo-3da96f73.js";import"./AuthenticationCardLogo-10ce95c7.js";const z={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},D={class:"bg-white flex justify-between p-4"},F=e("h2",{class:"float-left text-4xl font-extrabold"},"কাঠামো",-1),M=e("hr",{class:"mb-1"},null,-1),N={class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},S={class:"text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},j=e("th",{scope:"col",class:"px-6 py-3"}," নাম ",-1),$=e("th",{scope:"col",class:"px-6 py-3"}," মূল্য ",-1),E=e("th",{scope:"col",class:"px-6 py-3"}," তৈরির তারিখ ",-1),I=e("th",{scope:"col",class:"px-6 py-3"}," তৈরি ",-1),T=e("th",{scope:"col",class:"px-6 py-3"}," আপডেটের তারিখ ",-1),J=e("th",{scope:"col",class:"px-6 py-3"}," আপডেট ",-1),O={key:0,scope:"col",class:"px-6 py-3"},U={class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},Y={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},A=["textContent"],G={class:"px-6 py-4"},K=["textContent"],P={class:"px-6 py-4"},Q={key:0,class:"px-6 py-4 flex item-center justify-center"},R=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-blue-800",viewBox:"0 0 512 512"},[e("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",fill:"blue"})],-1),W=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 text-red",viewBox:"0 0 448 512"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",fill:"#d10606"})],-1),re={__name:"Index",props:{data:Object},setup(g){const d=v({}),b=x().props.auth.user;x().props.permissions.forEach(function(t,c){t.module.name=="House Structure"&&t.role_id==b.role_id&&(d.value=t)});const r=t=>d.value&&d.value[t]?(console.log(t),console.log(d.value[t]),!0):!1;function h(t){if(t){const c=new Date(t);let s=c.getDate(),f=c.getMonth(),w=c.getFullYear();return s+"/"+f+"/"+w}return t}const m=new Intl.NumberFormat("en-US",{style:"currency",currency:"BDT"});return console.log(m.format(2500)),(t,c)=>(o(),i(k,{title:"কাঠামো"},{default:n(()=>[e("div",z,[y(H,{message:t.$page.props.flash.suc_msg},null,8,["message"]),e("div",D,[F,y(p(_),{href:t.route("admin.setup.house-structure.create")},{default:n(()=>[r("add")?(o(),i(C,{key:0,class:"font-extrabold"},{default:n(()=>[B(" কাঠামো যোগকরুন ")]),_:1})):l("",!0)]),_:1},8,["href"])]),M,e("table",N,[e("thead",S,[e("tr",null,[j,$,E,I,T,J,r("edit")||r("delete")?(o(),u("th",O," কাজ ")):l("",!0)])]),e("tbody",null,[(o(!0),u(V,null,L(g.data,(s,f)=>(o(),u("tr",U,[e("td",Y,a(s.name),1),e("td",q,a(p(m).format(s.price)),1),e("td",{textContent:a(h(s.created_at)),class:"px-6 py-4"},null,8,A),e("td",G,a(s.created_by?s.created_by.name:""),1),e("td",{textContent:a(h(s.created_at)),class:"px-6 py-4"},null,8,K),e("td",P,a(s.updated_by?s.updated_by.name:""),1),r("edit")||r("delete")?(o(),u("td",Q,[r("edit")?(o(),i(p(_),{key:0,href:t.route("admin.setup.house-structure.edit",[s.id]),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:n(()=>[R]),_:2},1032,["href"])):l("",!0),r("delete")?(o(),i(p(_),{key:1,href:t.route("admin.single.delete",[s.id,"HouseStructure"]),class:"font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"},{default:n(()=>[W]),_:2},1032,["href"])):l("",!0)])):l("",!0)]))),256))])])])]),_:1}))}};export{re as default};
