import{J as C,v as A,d as c,k as K,c as I,w as b,o as d,a as e,b as i,j as L,l as N,s as j,u as o,e as u,h,t as a,F as _,aZ as P,f as x,g as W,aX as X}from"./app-37137dc0.js";import{_ as Z,C as E}from"./AppLayout-9fe438bc.js";import{_ as G}from"./SucMesgShow-4e4affce.js";import{p as H}from"./print-97b88a76.js";import{$ as Q,U as R,_ as ee,N as te}from"./combobox-c2dedd3f.js";import"./ApplicationLogo-ae065c9e.js";const oe={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},re=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"গ্রাম ভিত্তিক ধার্য")],-1),ae={class:"mt-4 mb-2 p-4 bg-white"},le={class:"flex items-center justify-center"},se=e("div",null,[e("label",{for:"word_id",class:"block py-[14px] text-md font-extrabold dark:text-white"},"ওয়ার্ড"),e("label",{for:"f_year_id",class:"block py-[14px] font-extrabold text-md dark:text-white"},"গ্রাম"),e("label",{for:"infrastructure",class:"block py-[14px] text-md font-extrabold dark:text-white"},"প্রতিষ্ঠানের ধরন"),e("label",{for:"f_year_id",class:"block py-[14px] text-md font-extrabold dark:text-white"},"অর্থ-বছর")],-1),ne={class:"ml-2"},de={class:"mb-2 flex items-center"},ie=e("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),ue=["value"],ce={class:"flex"},me={class:"relative w-full"},fe={class:"relative"},ge={class:"mt-2 flex items-center"},pe=e("option",{selected:"",value:""},"প্রতিষ্ঠানের ধরন নির্বাচন করুন",-1),be=e("option",{value:"আবাসিক"},"আবাসিক",-1),he=e("option",{value:"বানিজ্যিক"},"বানিজ্যিক",-1),_e=[pe,be,he],xe={class:"mt-2 flex items-center"},ye=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),ke=["value"],we={key:0},ve={key:1,id:"table"},Ve={id:"my-table",class:"text-center"},Ce={class:"bg-[yellow] p-[8px] font-extrabold text-[20px] text-center h1div"},Ie=e("thead",null,[e("tr",null,[e("th",{rowspan:"2"},"হোল্ডিং নাম্বার"),e("th",{rowspan:"2"},"করদাতার নাম"),e("th",{rowspan:"2"},"বাৎসরিক আয়"),e("th",{rowspan:"2"}," পিতা/স্বামীর নাম"),e("th",{rowspan:"2"},"মাতার নাম"),e("th",{rowspan:"2"}," এনআইডি নাম"),e("th",{rowspan:"2"},"মোবাইল নাম্বার"),e("th",{rowspan:"2"},"গ্রামের নাম"),e("th",{rowspan:"2"},"ওয়ার্ড নং"),e("th",{colspan:"3"},"সম্পদের বিবরন"),e("th",{rowspan:"2"},"বাৎসরিক ভাড়ার পরিমাণ"),e("th",{rowspan:"2"},"অর্থ-বছর"),e("th",{rowspan:"2"},"হাল করের পরিমাণ"),e("th",{rowspan:"2"},"বকেয়া করের পরিমাণ"),e("th",{rowspan:"2"},"সর্বমোট করের পরিমাণ")]),e("tr",null,[e("th",null,"পাকা"),e("th",null,"আধাপাকা"),e("th",null,"কাঁচা")])],-1),Ne={key:2},je={class:"text-center my-10 text-[red] text-bold"},Ue={__name:"Index",props:{f_years:Object,words:Object,tax:Object,vilgs:Object},setup(y){const M=y;let n=r=>String(r).replace(/\d/g,s=>"০১২৩৪৫৬৭৮৯"[s]);C().props.auth.user;const k=new Date;k.getMonth()+1+""+k.getDate()+k.getFullYear();const l=A({f_year_id:"",word_id:"",village_id:"",infrastructure:""}),S=c({}),$=C().props.auth.user;C().props.permissions.forEach(function(r,s){r.module.name=="E-Khana"&&r.role_id==$.role_id&&(S.value=r)});const w=c(null),D=c(""),U=c(""),g=c({}),q=()=>{if(!l.f_year_id)return D.value="অর্থ-বছর নির্বাচন করুন",!1;if(!l.village_id)return U.value="হল্ডিং নাম্বার নির্বাচন করুন",!1;console.log("i am form"),console.log(l),axios.post(route("ajax.ekhana.vlevy"),l).then(r=>{console.log(r),g.value=r.data.village_levy,g.value.length<1&&(w.value="কোন তথ্য পাওয়া যায় নাই।")}).catch(r=>{console.error(r)}).finally(()=>{console.log("khana fetch done")})},f=c(M.vilgs),v=c(!1),B=()=>{axios.get(route("ajax.fetch",["Village","word_id",l.word_id]),l).then(r=>{console.log(r),f.value=r.data,console.log(f.value),f.value.length==0?(v.value=!0,f.value={}):v.value=!1}).catch(r=>{v.value=!0,f.value={},console.error(r)}).finally(()=>{console.log("Village fetch done")})},V=c(""),O=K(()=>V.value===""?f.value:f.value.filter(r=>r.name.includes(V.value))),F=c(null),T=()=>{let r=document.getElementById("f_year_id"),s=r.selectedIndex,m=r.options[s].text;F.value=m},z=()=>{H({printable:"table",type:"html",style:"#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}",maxWidth:800,font:"Open Sans",honorMarginPadding:!0})},J=new Table2Excel,Y=()=>{J.export(document.querySelectorAll("#my-table"))};return(r,s)=>{const m=X("InputError");return d(),I(Z,{title:"গ্রাম ভিত্তিক ধার্য"},{default:b(()=>[e("div",oe,[i(G,{message:r.$page.props.flash.suc_msg},null,8,["message"]),re,e("div",ae,[e("form",{onSubmit:s[5]||(s[5]=L((...t)=>r.submit&&r.submit(...t),["prevent"])),class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[e("div",le,[se,e("div",ne,[e("div",de,[N(e("select",{id:"word_id","onUpdate:modelValue":s[0]||(s[0]=t=>o(l).word_id=t),onChange:B,class:"border text-[black] w-full border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ie,(d(!0),u(_,null,h(y.words,(t,p)=>(d(),u("option",{value:t.id,key:p},a(t.name+"-"+t.union.name),9,ue))),128))],544),[[j,o(l).word_id]]),i(m,{class:"mt-2",message:o(l).errors.eerr},null,8,["message"]),i(m,{class:"mt-2",message:o(l).errors.word_id},null,8,["message"])]),i(o(te),{modelValue:o(l).village_id,"onUpdate:modelValue":s[2]||(s[2]=t=>o(l).village_id=t)},{default:b(()=>[e("div",ce,[e("div",me,[i(o(Q),{onChange:s[1]||(s[1]=t=>V.value=t.target.value),displayValue:t=>t.name,type:"text",class:"border text-[black] min-w-[100%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,8,["displayValue"]),o(E)?(d(),I(P(o(E)),{key:0,class:"h-4 mr-1 absolute right-[11px] top-[13px]"})):x("",!0)])]),e("div",fe,[i(o(R),{class:"absolute text-[black] p-4 mt-1 bg-[white] left-[16px] w-[222px] rounded-lg"},{default:b(()=>[(d(!0),u(_,null,h(o(O),t=>(d(),I(o(ee),{class:"cursor-pointer",autocomplete:"off",key:t.id,value:t},{default:b(()=>[W(a(t.name),1)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"]),e("div",ge,[N(e("select",{id:"infrastructure","onUpdate:modelValue":s[3]||(s[3]=t=>o(l).infrastructure=t),class:"border w-full text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},_e,512),[[j,o(l).infrastructure]]),i(m,{class:"mt-2",message:o(l).errors.eerr},null,8,["message"]),i(m,{class:"mt-2",message:o(l).errors.infrastructure},null,8,["message"])]),e("div",xe,[N(e("select",{onChange:T,id:"f_year_id","onUpdate:modelValue":s[4]||(s[4]=t=>o(l).f_year_id=t),class:"border w-full text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ye,(d(!0),u(_,null,h(y.f_years,(t,p)=>(d(),u("option",{value:t.id,key:p},a(t.from+"-"+t.to),9,ke))),128))],544),[[j,o(l).f_year_id]]),i(m,{class:"mt-2",message:o(l).errors.eerr},null,8,["message"]),i(m,{class:"mt-2",message:o(l).errors.f_year_id},null,8,["message"])])])]),e("div",{class:"flex items-center justify-center mt-8"},[e("button",{onClick:q,type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")])],32)]),g.value.length>0?(d(),u("div",we,[e("button",{type:"button",onClick:s[6]||(s[6]=t=>z()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," তালিকা প্রিন্ট "),e("button",{type:"button",onClick:s[7]||(s[7]=t=>Y()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Excel ")])):x("",!0),g.value.length>0?(d(),u("div",ve,[e("table",Ve,[e("caption",Ce,"গ্রাম ভিত্তিক ধার্য করের পরিমাণ ("+a(o(l).infrastructure)+") - ("+a(F.value)+")",1),Ie,e("tbody",null,[(d(!0),u(_,null,h(g.value,(t,p)=>(d(),u("tr",{key:p},[e("td",null,a(o(n)(t.holding_no)),1),e("td",null,a(t.bn_name),1),e("td",null,a(o(n)(new Intl.NumberFormat().format(t.yearly_income)))+"/=",1),e("td",null,a(t.spouse_name),1),e("td",null,a(t.mother_name),1),e("td",null,a(o(n)(t.nid)),1),e("td",null,a(o(n)(t.phone)),1),e("td",null,a(t.vill_name),1),e("td",null,a(o(n)(t.w_name)),1),e("td",null,a(o(n)(t.paka_house)),1),e("td",null,a(o(n)(t.adhapaka_house)),1),e("td",null,a(o(n)(t.kasa_house)),1),e("td",null,a(o(n)(new Intl.NumberFormat().format(t.yearly_house_rent)))+"/=",1),e("td",null,a(o(n)(t.fy_from)+"-"+o(n)(t.fy_to)),1),e("td",null,a(o(n)(new Intl.NumberFormat().format(Math.round(t.total_amount))))+"/=",1),e("td",null,a(o(n)(new Intl.NumberFormat().format(Math.round(t.prev_arrears))))+"/=",1),e("td",null,a(o(n)(new Intl.NumberFormat().format(Math.round(t.paid_amount))))+"/=",1)]))),128))])])])):x("",!0),w.value?(d(),u("div",Ne,[e("h2",je,a(w.value),1)])):x("",!0)])]),_:1})}}};export{Ue as default};
