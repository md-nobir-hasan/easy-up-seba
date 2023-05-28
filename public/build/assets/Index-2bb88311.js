import{J as f,v as N,d as l,k as O,c as V,w as q,o as r,a as t,b as g,j as Y,l as z,s as J,u as p,e as u,h as y,t as n,F as v,f as k,aX as T}from"./app-ad675dbd.js";import{_ as A}from"./AppLayout-e6a07ded.js";import{_ as K}from"./SucMesgShow-4646d42c.js";import{p as L}from"./print-59d99d85.js";import"./ApplicationLogo-28c6f312.js";const P={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},U=t("div",{class:"bg-white flex justify-between p-4"},[t("h2",{class:"float-left text-4xl font-extrabold"},"ওয়ার্ড ভিত্তিক ধার্য")],-1),W={class:"mt-4 mb-2 p-4 bg-white"},X={class:"mt-2 flex items-center"},G=t("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),H=t("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),Q=["value"],R={key:0},Z={key:1},tt={id:"table"},et={class:"bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div"},ot={id:"my-table",class:"text-center"},nt={class:"bg-[yellow] p-[8px] font-extrabold text-[20px] text-center"},at=t("thead",null,[t("tr",null,[t("th",null,"ক্রমিক নম্বর"),t("th",null,"হোল্ডিং নাম্বার"),t("th",null,"করদাতার নাম"),t("th",null,"অর্থ-বছর "),t("th",null,"আদায়ের তারিখ"),t("th",null,"ওয়ার্ড নং"),t("th",null,"গ্রামের নাম"),t("th",null,"হাল আদায়"),t("th",null,"বকেয়া আদায় "),t("th",null,"সর্বমোট আদায় ")])],-1),lt=["textContent"],st=["data-val"],rt=["data-val"],dt=["data-val"],it=t("th",null,null,-1),ut=t("th",null,null,-1),ct=t("th",null,null,-1),mt=t("th",null,null,-1),pt=t("th",null,null,-1),ht=t("th",null,"সর্বমোট",-1),_t=t("th",null,"=",-1),vt={__name:"Index",props:{f_years:Object,words:Object,tax:Object,vilgs:Object},setup(b){const w=b;f().props.auth.user;const h=new Date;h.getMonth()+1+""+h.getDate()+h.getFullYear();const s=N({f_year_id:""}),C=l({}),E=f().props.auth.user;f().props.permissions.forEach(function(e,a){e.module.name=="E-Khana"&&e.role_id==E.role_id&&(C.value=e)});function j(e){if(e){const a=new Date(e);let d=a.getDate(),o=a.getMonth(),i=a.getFullYear();return d+"/"+o+"/"+i}return e}l(null);const D=l(""),$=l(""),c=l({});l(null);const F=()=>{if(!s.f_year_id)return D.value="অর্থ-বছর নির্বাচন করুন",!1;if(!s.village_id)return $.value="হল্ডিং নাম্বার নির্বাচন করুন",!1;console.log("i am form"),console.log(s),axios.post(route("ajax.ekhana.vlevy"),s).then(e=>{console.log(e),c.value=e.data.village_levy}).catch(e=>{console.error(e)}).finally(()=>{console.log("khana fetch done")})},_=l(w.vilgs);l(!1),console.dir(_);const x=l("");O(()=>x.value===""?_.value:_.value.filter(e=>e.name.includes(x.value)));const m=l(null),I=()=>{let e=document.getElementById("f_year_id"),a=e.selectedIndex,d=e.options[a].text;m.value=d},S=()=>{L({printable:"table",type:"html",style:"#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}",maxWidth:800,font:"Open Sans",honorMarginPadding:!0})},B=new Table2Excel,M=()=>{B.export(document.querySelectorAll("#my-table"))};return(e,a)=>{const d=T("InputError");return r(),V(A,{title:"ওয়ার্ড ভিত্তিক ধার্য"},{default:q(()=>[t("div",P,[g(K,{message:e.$page.props.flash.suc_msg},null,8,["message"]),U,t("div",W,[t("form",{onSubmit:a[1]||(a[1]=Y((...o)=>e.submit&&e.submit(...o),["prevent"])),class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[t("div",X,[G,z(t("select",{onChange:I,id:"f_year_id","onUpdate:modelValue":a[0]||(a[0]=o=>p(s).f_year_id=o),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[H,(r(!0),u(v,null,y(b.f_years,(o,i)=>(r(),u("option",{value:o.id,key:i},n(o.from+"-"+o.to),9,Q))),128))],544),[[J,p(s).f_year_id]]),g(d,{class:"mt-2",message:p(s).errors.eerr},null,8,["message"]),g(d,{class:"mt-2",message:p(s).errors.f_year_id},null,8,["message"])]),t("div",{class:"flex items-center justify-center mt-8"},[t("button",{onClick:F,type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")])],32)]),c.value.house_tax?(r(),u("div",R,[t("div",null,[t("button",{type:"button",onClick:a[2]||(a[2]=o=>S()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," তালিকা প্রিন্ট "),t("button",{type:"button",onClick:a[3]||(a[3]=o=>M()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Excel ")])])):k("",!0),c.value.house_tax?(r(),u("div",Z,[t("div",tt,[t("div",null,[t("h4",et,n(e.$page.props.auth.user.word.name+" নং "+e.$page.props.auth.user.word.union.name),1)]),t("table",ot,[t("caption",nt,"ডেইলি পোষ্টিং রিপোট কুয়েরী প্রিন্ট - ("+n(m.value)+") - ("+n(m.value)+")",1),at,t("tbody",null,[(r(!0),u(v,null,y(c.value.house_tax,(o,i)=>(r(),u("tr",{key:i},[t("td",null,n(i+1),1),t("td",null,n(o.ekhana.holding_no),1),t("td",null,n(o.ekhana.bn_name),1),t("td",null,n(m.value),1),t("td",{textContent:n(j(o.deposite_date))},null,8,lt),t("td",null,n(c.value.name),1),t("td",null,n(o.ekhana.village.name),1),t("td",{"data-val":e.prev_levy_paid+=Number(o.paid_amount)},n(o.paid_amount),9,st),t("td",{"data-val":e.prev_levy_unpaid+=o.total_amount-o.paid_amount},n(o.total_amount-o.paid_amount),9,rt),t("td",{"data-val":e.total_paid+=Number(o.paid_amount)},n(o.paid_amount),9,dt)]))),128))]),t("tfoot",null,[t("tr",null,[it,ut,ct,mt,pt,ht,_t,t("th",null,n(e.prev_levy_paid),1),t("th",null,n(e.prev_levy_unpaid),1),t("th",null,n(e.total_paid),1)])])])])])):k("",!0)])]),_:1})}}};export{vt as default};
