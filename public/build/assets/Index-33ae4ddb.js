import{J as m,v as C,d as u,k as O,c as k,w as _,o as n,a as e,b as l,l as g,s as E,u as a,e as c,h as v,t as y,F as w,aZ as S,f as U,g as Y,H as V,aX as G}from"./app-a8ff0e4b.js";import{_ as H,C as j}from"./AppLayout-4e9e66d8.js";import{_ as J}from"./SucMesgShow-16ecf8c5.js";import"./print-9072f8ae.js";import{$ as K,U as L,_ as X,N as Z}from"./combobox-62825f98.js";import"./ApplicationLogo-f77b2de0.js";import"./use-tracked-pointer-271dc09d.js";const z={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},A=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"সমস্ত বিল প্রিন্ট")],-1),P={class:"mt-4 mb-2 p-4 bg-white"},Q=["action"],R={class:"mb-2 flex items-center"},W=e("label",{for:"word_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"ওয়ার্ড",-1),ee=e("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),te=["value"],ae={class:"flex"},oe=e("label",{for:"f_year_id",class:"block min-w-[30%] font-extrabold text-md dark:text-white"},"গ্রাম",-1),re={class:"relative min-w-[65%]"},se={class:"relative"},le={class:"mt-2 flex items-center"},de=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),ne=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),ie=["value"],ue={class:"mt-2 flex items-center"},ce=e("label",{for:"date",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"জমার তারিখ",-1),me={class:"mt-2 flex items-center"},ge=e("label",{for:"page_start",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"শুরুর পাতা নং",-1),_e={class:"mt-2 flex items-center"},be=e("label",{for:"page_no",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"বিলের সংখ্যা",-1),pe=["value"],fe=["value"],xe=["value"],he=["value"],ke=e("div",{class:"flex items-center justify-center mt-8"},[e("button",{target:"nobir",type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")],-1),ve={key:0},ye=e("p",{class:"text-center text-[red]"}," কোনো তথ্য পাওয়া যায় নাই",-1),we=[ye],De={__name:"Index",props:{f_years:Object,words:Object,vilgs:Object},setup(b){const B=b;m().props.auth.user;const t=C({f_year_id:"",word_id:"",date:"",page_start:1,page_no:"",village_id:""}),I=u({}),D=m().props.auth.user;m().props.permissions.forEach(function(s,r){s.module.name=="E-Khana"&&s.role_id==D.role_id&&(I.value=s)});const p=new Date;p.getMonth()+1+""+p.getDate()+p.getFullYear(),u({});const N=u(!1),$=u(null),F=()=>{let s=document.getElementById("f_year_id"),r=s.selectedIndex,d=s.options[r].text;$.value=d};new Table2Excel;const i=u(B.vilgs),f=u(!1),T=()=>{axios.get(route("ajax.fetch",["Village","word_id",t.word_id]),t).then(s=>{console.log(s),i.value=s.data,console.log(i.value),i.value.length==0?(f.value=!0,i.value={}):f.value=!1}).catch(s=>{f.value=!0,i.value={},console.error(s)}).finally(()=>{console.log("Village fetch done")})},x=u(""),q=O(()=>x.value===""?i.value:i.value.filter(s=>s.name.includes(x.value)));m().props.flash.message&&Swal.fire({position:"top-end",icon:"success",title:m().props.flash.message,showConfirmButton:!1,timer:1500});const M=()=>{const s=C({word_id:t.word_id,village_id:t.village_id.id,deposite_date:t.date,f_year_id:t.f_year_id});axios.post(route("ajax.allbillcount"),s).then(r=>{t.page_no=r.data.bills.length})};return(s,r)=>{const d=G("InputError");return n(),k(H,{title:"সমস্ত বিল প্রিন্ট"},{default:_(()=>[e("div",z,[l(J,{message:s.$page.props.flash.suc_msg},null,8,["message"]),A,e("div",P,[e("form",{action:s.route("admin.tax.bill.print.all.show"),method:"GET",target:"_blank",class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[e("div",R,[W,g(e("select",{id:"word_id","onUpdate:modelValue":r[0]||(r[0]=o=>a(t).word_id=o),onChange:T,class:"border text-[black] min-w-[65%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ee,(n(!0),c(w,null,v(b.words,(o,h)=>(n(),c("option",{value:o.id,key:h},y(o.name+"-"+o.union.name),9,te))),128))],544),[[E,a(t).word_id]]),l(d,{class:"mt-2",message:a(t).errors.eerr},null,8,["message"]),l(d,{class:"mt-2",message:a(t).errors.word_id},null,8,["message"])]),l(a(Z),{modelValue:a(t).village_id,"onUpdate:modelValue":r[2]||(r[2]=o=>a(t).village_id=o)},{default:_(()=>[e("div",ae,[oe,e("div",re,[l(a(K),{onChange:r[1]||(r[1]=o=>x.value=o.target.value),displayValue:o=>o.name,type:"text",class:"border text-[black] min-w-[100%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,8,["displayValue"]),a(j)?(n(),k(S(a(j)),{key:0,class:"h-4 mr-1 absolute right-[11px] top-[13px]"})):U("",!0)])]),e("div",se,[l(a(L),{class:"absolute text-[black] p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg"},{default:_(()=>[(n(!0),c(w,null,v(a(q),o=>(n(),k(a(X),{class:"cursor-pointer",autocomplete:"off",key:o.id,value:o},{default:_(()=>[Y(y(o.name),1)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"]),e("div",le,[de,g(e("select",{onChange:F,id:"f_year_id","onUpdate:modelValue":r[3]||(r[3]=o=>a(t).f_year_id=o),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ne,(n(!0),c(w,null,v(b.f_years,(o,h)=>(n(),c("option",{value:o.id,key:h},y(o.from+"-"+o.to),9,ie))),128))],544),[[E,a(t).f_year_id]]),l(d,{class:"mt-2",message:a(t).errors.eerr},null,8,["message"]),l(d,{class:"mt-2",message:a(t).errors.f_year_id},null,8,["message"])]),e("div",ue,[ce,g(e("input",{"onUpdate:modelValue":r[4]||(r[4]=o=>a(t).date=o),onChange:M,type:"date",class:"border min-w-[65%] mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[V,a(t).date]]),l(d,{class:"mt-2",message:a(t).errors.eerr},null,8,["message"]),l(d,{class:"mt-2",message:a(t).errors.date},null,8,["message"])]),e("div",me,[ge,g(e("input",{"onUpdate:modelValue":r[5]||(r[5]=o=>a(t).page_start=o),name:"page_start",type:"number",id:"page_start",step:"1",class:"border min-w-[65%] mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[V,a(t).page_start]]),l(d,{class:"mt-2",message:a(t).errors.page_start},null,8,["message"])]),e("div",_e,[be,g(e("input",{"onUpdate:modelValue":r[6]||(r[6]=o=>a(t).page_no=o),name:"page_no",type:"number",id:"page_no",step:"1",class:"border min-w-[65%] mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[V,a(t).page_no]]),l(d,{class:"mt-2",message:a(t).errors.page_no},null,8,["message"])]),e("input",{type:"hidden",name:"f_y_id",value:a(t).f_year_id},null,8,pe),e("input",{type:"hidden",name:"word_id",value:a(t).word_id},null,8,fe),e("input",{type:"hidden",name:"deposite_date",value:a(t).date},null,8,xe),e("input",{type:"hidden",name:"village_id",value:a(t).village_id.id},null,8,he),ke],8,Q)]),N.value?(n(),c("div",ve,we)):U("",!0)])]),_:1})}}};export{De as default};
