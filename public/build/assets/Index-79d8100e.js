import{J as x,v as T,d as _,c as U,w as Y,o as i,a as e,b as m,j as q,l as y,s as z,u as r,e as u,h as w,t as l,F as v,H as E,f as N,p as S,aX as J}from"./app-d5729ea1.js";import{_ as O}from"./AppLayout-65db9ea5.js";import{_ as A}from"./SucMesgShow-d8b3ed9e.js";import{p as H}from"./print-4894ff1c.js";import"./ApplicationLogo-79708b43.js";const K={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},L=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"ডেইলি পোষ্টিং টপশিট")],-1),P={class:"mt-4 mb-2 p-4 bg-white"},R={class:"mt-2 flex items-center"},W=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),X=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),G=["value"],Q={class:"mt-2 flex items-center"},Z=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"তারিখ",-1),ee={class:"flex min-w-[65%]"},te={key:0},oe={key:1,id:"table"},ae={class:"bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div"},re={id:"my-table",class:"text-center"},ne={class:"bg-[yellow] p-[8px] font-extrabold text-[20px] text-center"},se=e("thead",null,[e("tr",null,[e("th",null,"ওয়ার্ড নাম্বার"),e("th",null,"খানার সংখ্যা"),e("th",null,"আদায় (হাল + বকেয়া আদায়)")])],-1),le=["data-val"],de=["data-val"],ie=e("th",null,"সর্বমোট",-1),be={__name:"Index",props:{f_years:Object},setup(C){let d=t=>String(t).replace(/\d/g,o=>"০১২৩৪৫৬৭৮৯"[o]);x().props.auth.user;const n=T({f_year_id:"",from_date:"",to_date:""}),D=_({}),$=x().props.auth.user;x().props.permissions.forEach(function(t,o){t.module.name=="E-Khana"&&t.role_id==$.role_id&&(D.value=t)});function k(t){if(t){const o=new Date(t);let s=o.getDate(),a=o.getMonth(),c=o.getFullYear();return d(s)+"/"+d(a)+"/"+d(c)}return t}const f=new Date;f.getMonth()+1+""+f.getDate()+f.getFullYear();const g=_({}),j=()=>{if(!n.f_year_id)return eerr.value="অর্থ-বছর নির্বাচন করুন",!1;axios.post(route("ajax.ekhana.toplist.daily.posting.topsheet"),n).then(t=>{g.value=t.data.ajdata,console.log(t.data)}).catch(t=>{console.error(t)}).finally(()=>{console.log("khana fetch done")})},F=_(null),I=()=>{let t=document.getElementById("f_year_id"),o=t.selectedIndex,s=t.options[o].text;F.value=s},M=()=>{H({printable:"table",type:"html",style:"#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}",maxWidth:800,font:"Open Sans",honorMarginPadding:!0})},V=new Table2Excel,B=()=>{V.export(document.querySelectorAll("#my-table"))};function h(t){let o=0;return t.forEach(s=>{o+=Number(s.paid_amount)+Number(s.paid_prev_arrears)}),o}let p=0,b=0;return(t,o)=>{const s=J("InputError");return i(),U(O,{title:"ডেইলি পোষ্টিং টপশিট"},{default:Y(()=>[e("div",K,[m(A,{message:t.$page.props.flash.suc_msg},null,8,["message"]),L,e("div",P,[e("form",{onSubmit:o[3]||(o[3]=q((...a)=>t.submit&&t.submit(...a),["prevent"])),class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[e("div",R,[W,y(e("select",{onChange:I,id:"f_year_id","onUpdate:modelValue":o[0]||(o[0]=a=>r(n).f_year_id=a),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[X,(i(!0),u(v,null,w(C.f_years,(a,c)=>(i(),u("option",{value:a.id,key:c},l(a.from+"-"+a.to),9,G))),128))],544),[[z,r(n).f_year_id]]),m(s,{class:"mt-2",message:r(n).errors.eerr},null,8,["message"]),m(s,{class:"mt-2",message:r(n).errors.f_year_id},null,8,["message"])]),e("div",Q,[Z,e("div",ee,[y(e("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>r(n).from_date=a),type:"date",class:"border mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[E,r(n).from_date]]),y(e("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>r(n).to_date=a),type:"date",class:"border text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[E,r(n).to_date]])]),m(s,{class:"mt-2",message:r(n).errors.eerr},null,8,["message"]),m(s,{class:"mt-2",message:r(n).errors.f_year_id},null,8,["message"])]),e("div",{class:"flex items-center justify-center mt-8"},[e("button",{onClick:j,type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")])],32)]),g.value.length>0?(i(),u("div",te,[e("button",{type:"button",onClick:o[4]||(o[4]=a=>M()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," তালিকা প্রিন্ট "),e("button",{type:"button",onClick:o[5]||(o[5]=a=>B()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Excel ")])):N("",!0),g.value.length>0?(i(),u("div",oe,[e("div",null,[e("h4",ae,l(r(d)(t.$page.props.auth.user.word.name)+" নং "+t.$page.props.auth.user.word.union.name),1)]),e("table",re,[e("caption",ne,l(k(r(n).from_date))+" হইতে "+l(k(r(n).to_date))+" তারিখের আদায়ের টপশীট",1),se,e("tbody",null,[(i(!0),u(v,null,w(g.value,(a,c)=>(i(),u("tr",{key:c},[e("td",null,l(a.name),1),e("td",{"data-val":S(p)?p.value+=Number(a.house_tax.length):p+=Number(a.house_tax.length)},l(r(d)(a.house_tax.length)),9,le),e("td",{"data-val":S(b)?b.value+=Number(h(a.house_tax)):b+=Number(h(a.house_tax))},l(r(d)(h(a.house_tax))),9,de)]))),128))]),e("tfoot",null,[e("tr",null,[ie,e("th",null,l(r(d)(r(p))),1),e("th",null,l(r(d)(r(b))),1)])])])])):N("",!0)])]),_:1})}}};export{be as default};