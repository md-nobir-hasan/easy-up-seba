import{J as y,v as F,d as g,c as U,w as q,o as n,a as e,b as c,j as O,l as f,s as C,u as o,e as d,h as v,F as w,H as V,f as b,t as l,aX as T,p as $}from"./app-db6bf5f2.js";import{_ as z}from"./AppLayout-f6863f1b.js";import{_ as J}from"./SucMesgShow-8ba178d3.js";import{p as Y}from"./print-9d81e896.js";import"./ApplicationLogo-677d08b7.js";const A={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},H=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"ডেইলি পোষ্টিং")],-1),K={class:"mt-4 mb-2 p-4 bg-white"},L={class:"mb-2 flex items-center"},P=e("label",{for:"word_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"ওয়ার্ড",-1),R=e("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),W=["value"],X={class:"mt-2 flex items-center"},G=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),Q=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),Z=["value"],ee={class:"mt-2 flex items-center"},te=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"তারিখ",-1),oe={class:"flex min-w-[65%]"},ae={key:0},le={key:0},re={key:1},se={key:0,id:"table"},ne={class:"bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div"},de={id:"my-table",class:"text-center"},ie={class:"bg-[yellow] p-[8px] font-extrabold text-[20px] text-center"},ue=e("thead",null,[e("tr",null,[e("th",null,"ক্রমিক নাম্বার"),e("th",null,"হোল্ডিং নাম্বার"),e("th",null,"করদাতার নাম"),e("th",null,"অর্থ-বছর "),e("th",null,"আদায়ের তারিখ"),e("th",null,"ওয়ার্ড নং"),e("th",null,"গ্রামের নাম"),e("th",null,"হাল আদায়"),e("th",null,"বকেয়া আদায়"),e("th",null,"সর্বমোট আদায় ")])],-1),ce=["data-val"],me=["data-val"],he=e("th",null,null,-1),_e=e("th",null,null,-1),be=e("th",null,null,-1),ge=e("th",null,null,-1),fe=e("th",null,null,-1),pe=e("th",null,null,-1),xe=e("th",null,"সর্বমোট",-1),ke={key:2},ye=e("p",{class:"text-center text-[red]"}," কোনো তথ্য পাওয়া যায় নাই",-1),ve=[ye],je={__name:"Index",props:{f_years:Object,words:Object},setup(E){y().props.auth.user;const r=F({f_year_id:"",word_id:"",from_date:"",to_date:""}),j=g({}),I=y().props.auth.user;y().props.permissions.forEach(function(s,a){s.module.name=="E-Khana"&&s.role_id==I.role_id&&(j.value=s)});const p=new Date;p.getMonth()+1+""+p.getDate()+p.getFullYear();const i=g({}),x=g(!1),S=()=>{if(!r.f_year_id)return eerr.value="অর্থ-বছর নির্বাচন করুন",!1;axios.post(route("ajax.ekhana.toplist.daily.posting"),r).then(s=>{i.value=s.data.dailypost,console.log(i.value),i.value.house_tax&&(console.log(i.value.house_tax),i.value.house_tax.length<1?x.value=!0:x.value=!1)}).catch(s=>{console.error(s)}).finally(()=>{console.log("khana fetch done")})},k=g(null),B=()=>{let s=document.getElementById("f_year_id"),a=s.selectedIndex,u=s.options[a].text;k.value=u},M=()=>{Y({printable:"table",type:"html",style:"#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}",maxWidth:800,font:"Open Sans",honorMarginPadding:!0})},N=new Table2Excel,D=()=>{N.export(document.querySelectorAll("#my-table"))};let m=0,h=0;return(s,a)=>{const u=T("InputError");return n(),U(z,{title:"ডেইলি পোষ্টিং"},{default:q(()=>[e("div",A,[c(J,{message:s.$page.props.flash.suc_msg},null,8,["message"]),H,e("div",K,[e("form",{onSubmit:a[4]||(a[4]=O((...t)=>s.submit&&s.submit(...t),["prevent"])),class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[e("div",L,[P,f(e("select",{id:"word_id","onUpdate:modelValue":a[0]||(a[0]=t=>o(r).word_id=t),class:"border text-[black] min-w-[65%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[R,(n(!0),d(w,null,v(E.words,(t,_)=>(n(),d("option",{value:t.id,key:_},l(t.name+"-"+t.union.name),9,W))),128))],512),[[C,o(r).word_id]]),c(u,{class:"mt-2",message:o(r).errors.eerr},null,8,["message"]),c(u,{class:"mt-2",message:o(r).errors.word_id},null,8,["message"])]),e("div",X,[G,f(e("select",{onChange:B,id:"f_year_id","onUpdate:modelValue":a[1]||(a[1]=t=>o(r).f_year_id=t),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[Q,(n(!0),d(w,null,v(E.f_years,(t,_)=>(n(),d("option",{value:t.id,key:_},l(t.from+"-"+t.to),9,Z))),128))],544),[[C,o(r).f_year_id]]),c(u,{class:"mt-2",message:o(r).errors.eerr},null,8,["message"]),c(u,{class:"mt-2",message:o(r).errors.f_year_id},null,8,["message"])]),e("div",ee,[te,e("div",oe,[f(e("input",{"onUpdate:modelValue":a[2]||(a[2]=t=>o(r).from_date=t),type:"date",class:"border mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[V,o(r).from_date]]),f(e("input",{"onUpdate:modelValue":a[3]||(a[3]=t=>o(r).to_date=t),type:"date",class:"border text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[V,o(r).to_date]])]),c(u,{class:"mt-2",message:o(r).errors.eerr},null,8,["message"]),c(u,{class:"mt-2",message:o(r).errors.f_year_id},null,8,["message"])]),e("div",{class:"flex items-center justify-center mt-8"},[e("button",{onClick:S,type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")])],32)]),i.value.house_tax?(n(),d("div",ae,[i.value.house_tax.length>0?(n(),d("div",le,[e("button",{type:"button",onClick:a[5]||(a[5]=t=>M()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," তালিকা প্রিন্ট "),e("button",{type:"button",onClick:a[6]||(a[6]=t=>D()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Excel ")])):b("",!0)])):b("",!0),i.value.house_tax?(n(),d("div",re,[i.value.house_tax.length>0?(n(),d("div",se,[e("div",null,[e("h4",ne,l(s.$page.props.auth.user.word.name+" নং "+s.$page.props.auth.user.word.union.name),1)]),e("table",de,[e("caption",ie,"ডেইলি পোষ্টিং-("+l(k.value)+")",1),ue,e("tbody",null,[(n(!0),d(w,null,v(i.value.house_tax,(t,_)=>(n(),d("tr",{key:_},[e("td",null,l(_+1),1),e("td",null,l(t.ekhana.holding_no),1),e("td",null,l(t.ekhana.bn_name),1),e("td",null,l(k.value),1),e("td",null,l(t.deposite_date),1),e("td",null,l(t.ekhana.word.name),1),e("td",null,l(t.ekhana.village.name),1),e("td",{"data-val":$(m)?m.value+=Number(t.paid_amount):m+=Number(t.paid_amount)},l(t.paid_amount),9,ce),e("td",{"data-val":$(h)?h.value+=0:h+=0},l(0),8,me),e("td",null,l(o(m)+o(h)),1)]))),128))]),e("tfoot",null,[e("tr",null,[he,_e,be,ge,fe,pe,xe,e("th",null,l(o(m)),1),e("th",null,l(o(h)),1),e("th",null,l(o(m)+o(h)),1)])])])])):b("",!0)])):b("",!0),x.value?(n(),d("div",ke,ve)):b("",!0)])]),_:1})}}};export{je as default};