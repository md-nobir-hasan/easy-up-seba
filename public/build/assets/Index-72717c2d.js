import{J as k,v as q,d as v,c as O,w as T,o as u,a as t,b as c,j as z,l as f,s as V,u as l,e as _,h as w,F as E,H as $,f as j,t as o,aX as J,p as S}from"./app-2042f3fe.js";import{_ as Y}from"./AppLayout-55e85113.js";import{_ as A}from"./SucMesgShow-c6d77dca.js";import{p as H}from"./print-11e6b9d7.js";import"./ApplicationLogo-816714ac.js";const K={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},L=t("div",{class:"bg-white flex justify-between p-4"},[t("h2",{class:"float-left text-4xl font-extrabold"},"ওয়ার্ড ভিত্তিক ডেইলি পোষ্টিং")],-1),P={class:"mt-4 mb-2 p-4 bg-white"},R={class:"mb-2 flex items-center"},W=t("label",{for:"word_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"ওয়ার্ড",-1),X=t("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),G=["value"],Q={class:"mt-2 flex items-center"},Z=t("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),tt=t("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),et=["value"],at={class:"mt-2 flex items-center"},ot=t("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"তারিখ",-1),rt={class:"flex min-w-[65%]"},lt={key:0},dt={key:1,id:"table"},nt={class:"bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div"},st={id:"my-table",class:"text-center"},it={class:"bg-[yellow] p-[8px] font-extrabold text-[20px] text-center"},ut=t("thead",null,[t("tr",null,[t("th",null,"ওয়ার্ড নাম্বার"),t("th",null,"গ্রামের সংখ্যা"),t("th",null,"খানার সংখ্যা"),t("th",null,"আদায়কৃত খানার সংখ্যা "),t("th",null,"হাল ধার্য্য কর"),t("th",null,"হাল আদায়"),t("th",null,"হাল বকেয়া"),t("th",null,"পূর্বের বকেয়া "),t("th",null,"বকেয়া আদায় "),t("th",null,"সর্বমোট আদায় "),t("th",null,"সর্বমোট বকেয়া (হাল বকেয়া + পূর্বের বকেয়া)"),t("th",null,"অর্থ-বছর"),t("th",null,"আদায়ের শতকরা হার")])],-1),_t=["data-val"],ct=["data-val"],pt=["data-val"],ht=["data-val"],mt=["data-val"],gt=["data-val"],bt=["data-val"],ft=["data-val"],xt=["data-val"],yt=["data-val"],kt=["data-val"],vt=["data-val"],wt=t("th",null,"সর্বমোট",-1),Et=t("th",null,"=>>",-1),It={__name:"Index",props:{f_years:Object,words:Object},setup(C){k().props.auth.user;const d=q({f_year_id:"",word_id:"",from_date:"",to_date:""}),I=v({}),B=k().props.auth.user;k().props.permissions.forEach(function(a,r){a.module.name=="E-Khana"&&a.role_id==B.role_id&&(I.value=a)});const x=new Date;x.getMonth()+1+""+x.getDate()+x.getFullYear();const g=v({}),M=()=>{if(!d.f_year_id)return eerr.value="অর্থ-বছর নির্বাচন করুন",!1;axios.post(route("ajax.ekhana.toplist.daily.posting"),d).then(a=>{g.value=a.data.dailypost,console.log(a.data)}).catch(a=>{console.error(a)}).finally(()=>{console.log("khana fetch done")})},b=v(null),N=()=>{let a=document.getElementById("f_year_id"),r=a.selectedIndex,s=a.options[r].text;b.value=s},D=()=>{H({printable:"table",type:"html",style:"#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}",maxWidth:800,font:"Open Sans",honorMarginPadding:!0})},F=new Table2Excel,U=()=>{F.export(document.querySelectorAll("#my-table"))};function i(a){let r=0;return a.forEach(s=>{r+=Number(s.total_amount)}),r}function n(a){let r=0;return a.forEach(s=>{r+=Number(s.paid_amount)}),r}let h=0,m=0,y=0;return(a,r)=>{const s=J("InputError");return u(),O(Y,{title:"ডেইলি পোষ্টিং"},{default:T(()=>[t("div",K,[c(A,{message:a.$page.props.flash.suc_msg},null,8,["message"]),L,t("div",P,[t("form",{onSubmit:r[4]||(r[4]=z((...e)=>a.submit&&a.submit(...e),["prevent"])),class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[t("div",R,[W,f(t("select",{id:"word_id","onUpdate:modelValue":r[0]||(r[0]=e=>l(d).word_id=e),class:"border text-[black] min-w-[65%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[X,(u(!0),_(E,null,w(C.words,(e,p)=>(u(),_("option",{value:e.id,key:p},o(e.name+"-"+e.union.name),9,G))),128))],512),[[V,l(d).word_id]]),c(s,{class:"mt-2",message:l(d).errors.eerr},null,8,["message"]),c(s,{class:"mt-2",message:l(d).errors.word_id},null,8,["message"])]),t("div",Q,[Z,f(t("select",{onChange:N,id:"f_year_id","onUpdate:modelValue":r[1]||(r[1]=e=>l(d).f_year_id=e),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[tt,(u(!0),_(E,null,w(C.f_years,(e,p)=>(u(),_("option",{value:e.id,key:p},o(e.from+"-"+e.to),9,et))),128))],544),[[V,l(d).f_year_id]]),c(s,{class:"mt-2",message:l(d).errors.eerr},null,8,["message"]),c(s,{class:"mt-2",message:l(d).errors.f_year_id},null,8,["message"])]),t("div",at,[ot,t("div",rt,[f(t("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>l(d).from_date=e),type:"date",class:"border mr-2 text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[$,l(d).from_date]]),f(t("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>l(d).to_date=e),type:"date",class:"border text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[$,l(d).to_date]])]),c(s,{class:"mt-2",message:l(d).errors.eerr},null,8,["message"]),c(s,{class:"mt-2",message:l(d).errors.f_year_id},null,8,["message"])]),t("div",{class:"flex items-center justify-center mt-8"},[t("button",{onClick:M,type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")])],32)]),g.value.length>0?(u(),_("div",lt,[t("button",{type:"button",onClick:r[5]||(r[5]=e=>D()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," তালিকা প্রিন্ট "),t("button",{type:"button",onClick:r[6]||(r[6]=e=>U()),class:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Excel ")])):j("",!0),g.value.length>0?(u(),_("div",dt,[t("div",null,[t("h4",nt,o(a.$page.props.auth.user.word.name+" নং "+a.$page.props.auth.user.word.union.name),1)]),t("table",st,[t("caption",it,"গ্রাম ভিত্তিক ধার্য কর ও আদায়ের টপশীট-("+o(b.value)+") - ("+o(b.value)+")",1),ut,t("tbody",null,[(u(!0),_(E,null,w(g.value,(e,p)=>(u(),_("tr",{key:p},[t("td",{"data-val":a.total_num=p+1},o(e.name),9,_t),t("td",{"data-val":a.total_village+=e.village.length},o(e.village.length),9,ct),t("td",{"data-val":a.total_ekhana+=e.ekhana.length},o(e.ekhana.length),9,pt),t("td",{"data-val":a.paid_khana+=e.house_tax_paid.length},o(e.house_tax_paid.length),9,ht),t("td",{"data-val":a.total_year_levy+=i(e.house_tax)},o(i(e.house_tax)),9,mt),t("td",{"data-val":a.year_levy_paid+=n(e.house_tax_paid)},o(n(e.house_tax_paid)),9,gt),t("td",{"data-val":a.year_levy_unpaid+=i(e.house_tax_unpaid)},o(i(e.house_tax_unpaid)),9,bt),t("td",{"data-val":S(h)?h.value+=i(e.prev_tax_unpaid):h+=i(e.prev_tax_unpaid)},o(i(e.prev_tax_unpaid)),9,ft),t("td",{"data-val":S(m)?m.value+=n(e.prev_tax_paid):m+=n(e.prev_tax_paid)},o(n(e.prev_tax_paid)),9,xt),t("td",{"data-val":S(y)?y.value+=n(e.house_tax_paid):y+=n(e.house_tax_paid)},o(n(e.house_tax_paid)),9,yt),t("td",{"data-val":a.total_arrears+=i(e.house_tax_unpaid)},o(i(e.house_tax_unpaid)),9,kt),t("td",null,o(b.value),1),t("td",{"data-val":a.percentange+=n(e.house_tax_paid)/n(e.house_tax_paid)?n(e.house_tax_paid)/n(e.house_tax_paid)*100:100},o(n(e.house_tax_paid)/n(e.house_tax_paid)?n(e.house_tax_paid)/n(e.house_tax_paid)*100:100),9,vt)]))),128))]),t("tfoot",null,[t("tr",null,[wt,t("th",null,o(a.total_village),1),t("th",null,o(a.total_ekhana),1),t("th",null,o(a.paid_khana),1),t("th",null,o(a.total_year_levy),1),t("th",null,o(a.year_levy_paid),1),t("th",null,o(a.year_levy_unpaid),1),t("th",null,o(l(m)),1),t("th",null,o(l(h)),1),t("th",null,o(a.year_levy_paid+l(m)),1),t("th",null,o(a.year_levy_unpaid+l(h)),1),Et,t("th",null,o(a.percentange/a.total_num),1)])])])])):j("",!0)])]),_:1})}}};export{It as default};
