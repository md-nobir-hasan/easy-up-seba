import{J as g,v as F,d as u,k as z,c as v,w as f,o as r,a as e,b as i,u as o,aZ as J,f as _,e as d,h as w,g as Y,t as a,F as C,l as N,s as A,H as G,p as I,aX as H}from"./app-7f7ead12.js";import{_ as K,C as B}from"./AppLayout-af0ff241.js";import{_ as L}from"./SucMesgShow-201d9869.js";import{p as P}from"./print-8bb11e7e.js";import{$ as R,U as W,_ as X,N as Z}from"./combobox-4d7006fc.js";import"./ApplicationLogo-0ea73288.js";const Q={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},ee=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"সিঙ্গেল বিল প্রিন্ট")],-1),te={class:"mt-4 mb-2 p-4 bg-white"},oe=["action"],ae={class:"flex"},le=e("label",{for:"",class:"block min-w-[30%] font-extrabold text-md dark:text-white"},"হোল্ডিং নম্বর",-1),ne={class:"relative min-w-[65%]"},se={class:"relative"},re={class:"mt-2 flex items-center"},de=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),ie=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),ue=["value"],ce={class:"mt-2 flex items-center"},he=e("label",{for:"date",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"জমার তারিখ",-1),me=["value"],_e=["value"],pe=["value"],ge=e("div",{class:"flex items-center justify-center mt-8"},[e("button",{target:"nobir",type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")],-1),be={key:0},fe={key:0},xe={key:1},ye={key:0,id:"table"},ke={class:"bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div"},ve={id:"my-table",class:"text-center"},we={class:"bg-[yellow] p-[8px] font-extrabold text-[20px] text-center"},Ce=e("thead",null,[e("tr",null,[e("th",null,"ক্রমিক নাম্বার"),e("th",null,"হোল্ডিং নাম্বার"),e("th",null,"করদাতার নাম"),e("th",null,"অর্থ-বছর "),e("th",null,"আদায়ের তারিখ"),e("th",null,"ওয়ার্ড নং"),e("th",null,"গ্রামের নাম"),e("th",null,"হাল আদায়"),e("th",null,"বকেয়া আদায়"),e("th",null,"সর্বমোট আদায় ")])],-1),Ve=["data-val"],Ee=["data-val"],$e=e("th",null,null,-1),Ne=e("th",null,null,-1),Ie=e("th",null,null,-1),Be=e("th",null,null,-1),De=e("th",null,null,-1),Se=e("th",null,null,-1),je=e("th",null,"সর্বমোট",-1),Te={key:2},Ue=e("p",{class:"text-center text-[red]"}," কোনো তথ্য পাওয়া যায় নাই",-1),Me=[Ue],Ae={__name:"Index",props:{f_years:Object,words:Object,ekhanas:Object},setup(V){const E=V;g().props.auth.user;const n=F({f_year_id:"",date:"",holding_no:u(E.ekhanas[0])}),D=u({}),S=g().props.auth.user;g().props.permissions.forEach(function(s,l){s.module.name=="E-Khana"&&s.role_id==S.role_id&&(D.value=s)});const x=new Date;x.getMonth()+1+""+x.getDate()+x.getFullYear();const p=u({}),j=u(!1),y=u(null),T=()=>{let s=document.getElementById("f_year_id"),l=s.selectedIndex,m=s.options[l].text;y.value=m},U=()=>{P({printable:"table",type:"html",style:"#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}",maxWidth:800,font:"Open Sans",honorMarginPadding:!0})},M=new Table2Excel,O=()=>{M.export(document.querySelectorAll("#my-table"))};let c=0,h=0;const $=u(E.ekhanas),k=u(""),q=z(()=>k.value===""?$.value:$.value.filter(s=>s.holding_no.includes(k.value)));return g().props.flash.message&&Swal.fire({position:"top-end",icon:"success",title:g().props.flash.message,showConfirmButton:!1,timer:1500}),(s,l)=>{const m=H("InputError");return r(),v(K,{title:"সিঙ্গেল বিল প্রিন্ট"},{default:f(()=>[e("div",Q,[i(L,{message:s.$page.props.flash.suc_msg},null,8,["message"]),ee,e("div",te,[e("form",{action:s.route("admin.tax.bill.print.single.show"),method:"GET",target:"_blank",class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[i(o(Z),{modelValue:o(n).holding_no,"onUpdate:modelValue":l[1]||(l[1]=t=>o(n).holding_no=t)},{default:f(()=>[e("div",ae,[le,e("div",ne,[i(o(R),{onChange:l[0]||(l[0]=t=>k.value=t.target.value),displayValue:t=>t.holding_no,type:"text",class:"border text-[black] min-w-[100%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,8,["displayValue"]),o(B)?(r(),v(J(o(B)),{key:0,class:"h-4 mr-1 absolute right-[11px] top-[13px]"})):_("",!0)])]),e("div",se,[i(o(W),{class:"absolute text-[black] p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg"},{default:f(()=>[(r(!0),d(C,null,w(o(q),t=>(r(),v(o(X),{class:"cursor-pointer",autocomplete:"off",key:t.id,value:t},{default:f(()=>[Y(a(t.holding_no),1)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"]),e("div",re,[de,N(e("select",{onChange:T,id:"f_year_id","onUpdate:modelValue":l[2]||(l[2]=t=>o(n).f_year_id=t),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ie,(r(!0),d(C,null,w(V.f_years,(t,b)=>(r(),d("option",{value:t.id,key:b},a(t.from+"-"+t.to),9,ue))),128))],544),[[A,o(n).f_year_id]]),i(m,{class:"mt-2",message:o(n).errors.eerr},null,8,["message"]),i(m,{class:"mt-2",message:o(n).errors.f_year_id},null,8,["message"])]),e("div",ce,[he,N(e("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>o(n).date=t),type:"date",class:"border min-w-[65%] mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[G,o(n).date]]),i(m,{class:"mt-2",message:o(n).errors.eerr},null,8,["message"]),i(m,{class:"mt-2",message:o(n).errors.date},null,8,["message"])]),e("input",{type:"hidden",name:"f_y_id",value:o(n).f_year_id},null,8,me),e("input",{type:"hidden",name:"ekhana_id",value:o(n).holding_no.id},null,8,_e),e("input",{type:"hidden",name:"deposite_date",value:o(n).date},null,8,pe),ge],8,oe)]),p.value.house_tax?(r(),d("div",be,[p.value.house_tax.length>0?(r(),d("div",fe,[e("button",{type:"button",onClick:l[4]||(l[4]=t=>U()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," তালিকা প্রিন্ট "),e("button",{type:"button",onClick:l[5]||(l[5]=t=>O()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Excel ")])):_("",!0)])):_("",!0),p.value.house_tax?(r(),d("div",xe,[p.value.house_tax.length>0?(r(),d("div",ye,[e("div",null,[e("h4",ke,a(s.$page.props.auth.user.word.name+" নং "+s.$page.props.auth.user.word.union.name),1)]),e("table",ve,[e("caption",we,"ডেইলি পোষ্টিং-("+a(y.value)+")",1),Ce,e("tbody",null,[(r(!0),d(C,null,w(p.value.house_tax,(t,b)=>(r(),d("tr",{key:b},[e("td",null,a(b+1),1),e("td",null,a(t.ekhana.holding_no),1),e("td",null,a(t.ekhana.bn_name),1),e("td",null,a(y.value),1),e("td",null,a(t.deposite_date),1),e("td",null,a(t.ekhana.word.name),1),e("td",null,a(t.ekhana.village.name),1),e("td",{"data-val":I(c)?c.value+=Number(t.paid_amount):c+=Number(t.paid_amount)},a(t.paid_amount),9,Ve),e("td",{"data-val":I(h)?h.value+=0:h+=0},a(0),8,Ee),e("td",null,a(o(c)+o(h)),1)]))),128))]),e("tfoot",null,[e("tr",null,[$e,Ne,Ie,Be,De,Se,je,e("th",null,a(o(c)),1),e("th",null,a(o(h)),1),e("th",null,a(o(c)+o(h)),1)])])])])):_("",!0)])):_("",!0),j.value?(r(),d("div",Te,Me)):_("",!0)])]),_:1})}}};export{Ae as default};
