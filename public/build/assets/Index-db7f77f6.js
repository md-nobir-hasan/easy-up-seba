import{J as k,v as S,d as c,k as J,c as v,w as g,o as n,a as e,b as d,j as K,l as V,s as j,u as s,e as p,h as x,F as f,aZ as L,f as C,g as F,aX as T,t as r}from"./app-6152c5dd.js";import{_ as X,C as N}from"./AppLayout-712e539f.js";import{_ as Y}from"./SucMesgShow-abefd38f.js";import{$ as Z,U as z,N as A,_ as G}from"./combobox-d01a9926.js";import"./ApplicationLogo-a69096e5.js";const H={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},P=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"গ্রাম ভিত্তিক ধার্য")],-1),Q={class:"mt-4 mb-2 p-4 bg-white"},R={class:"mb-2 flex items-center"},W=e("label",{for:"word_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"ওয়ার্ড",-1),ee=e("option",{selected:"",value:""},"ওয়ার্ড নির্বাচন করুন",-1),te=["value"],se={class:"flex"},oe=e("label",{for:"f_year_id",class:"block min-w-[30%] font-extrabold text-md dark:text-white"},"গ্রাম",-1),ae={class:"relative min-w-[65%]"},re={class:"relative"},le={class:"mt-2 flex items-center"},ne=e("label",{for:"infrastructure",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"প্রতিষ্ঠানের ধরন",-1),de=e("option",{selected:"",value:""},"প্রতিষ্ঠানের ধরন নির্বাচন করুন",-1),ce=e("option",{value:"আবাসিক"},"আবাসিক",-1),ie=e("option",{value:"বানিজ্যিক"},"বানিজ্যিক",-1),pe=[de,ce,ie],ue={class:"mt-2 flex items-center"},me=e("label",{for:"f_year_id",class:"block min-w-[30%] text-md font-extrabold dark:text-white"},"অর্থ-বছর",-1),he=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),ge=["value"],xe={key:0,class:"w-full text-md text-left text-gray-500 dark:text-gray-400"},fe=e("thead",{class:"text-md text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," হোল্ডিং নাম্বার "),e("th",{scope:"col",class:"px-6 py-3"}," করদাতার নাম "),e("th",{scope:"col",class:"px-6 py-3"}," বাৎসরিক আয় "),e("th",{scope:"col",class:"px-6 py-3"}," পিতা/স্বামীর নাম "),e("th",{scope:"col",class:"px-6 py-3"}," মাতার নাম "),e("th",{scope:"col",class:"px-6 py-3"}," এনআইডি নাম "),e("th",{scope:"col",class:"px-6 py-3"}," মোবাইল নাম্বার "),e("th",{scope:"col",class:"px-6 py-3"}," গ্রামের নাম "),e("th",{scope:"col",class:"px-6 py-3"}," ওয়ার্ড নং "),e("th",{colspan:"2",scope:"col",class:""},[F(" সম্পদের বিবরন "),e("div",{class:"flex items-center justify-between bg-[#1c09ffb5] rounded p-1 h-16"},[e("h4",{class:"p-1 text-white"},"পাকা"),e("h4",{class:"p-1 text-white"},"আধাপাকা"),e("h4",{class:"p-1 text-white"},"কাঁচা")])]),e("th",{scope:"col",class:"px-6 py-3"}," বাৎসরিক ভাড়ার পরিমাণ "),e("th",{scope:"col",class:"px-6 py-3"}," কর "),e("th",{scope:"col",class:"px-6 py-3"}," অর্থ-বছর ")])],-1),_e={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},we={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},be={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},ye={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},ke={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},ve={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ve={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},je={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ce={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ne={colspan:"2",scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Fe={class:"flex items-center justify-between"},Ie={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},De={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ue={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Oe={__name:"Index",props:{f_years:Object,words:Object,tax:Object,vilgs:Object},setup(h){const I=h,D=k().props.auth.user,_=new Date;_.getMonth()+1+""+_.getDate()+_.getFullYear();const o=S({f_year_id:"",word_id:D.word_id,village_id:"",infrastructure:""}),U=c({}),E=k().props.auth.user;k().props.permissions.forEach(function(a,l){a.module.name=="E-Khana"&&a.role_id==E.role_id&&(U.value=a)}),c(null);const $=c(""),q=c(""),w=c({});c(null);const B=()=>{if(!o.f_year_id)return $.value="অর্থ-বছর নির্বাচন করুন",!1;if(!o.village_id)return q.value="হল্ডিং নাম্বার নির্বাচন করুন",!1;console.log("i am form"),console.log(o),axios.post(route("ajax.ekhana.vlevy"),o).then(a=>{console.log(a),w.value=a.data.village_levy}).catch(a=>{console.error(a)}).finally(()=>{console.log("khana fetch done")})},i=c(I.vilgs),b=c(!1),M=()=>{axios.get(route("ajax.fetch",["Village","word_id",o.word_id]),o).then(a=>{console.log(a),i.value=a.data,console.log(i.value),i.value.length==0?(b.value=!0,i.value={}):b.value=!1}).catch(a=>{b.value=!0,i.value={},console.error(a)}).finally(()=>{console.log("Village fetch done")})};console.dir(i);const y=c(""),O=J(()=>y.value===""?i.value:i.value.filter(a=>a.name.includes(y.value)));return(a,l)=>{const u=T("InputError");return n(),v(X,{title:"গ্রাম ভিত্তিক ধার্য"},{default:g(()=>[e("div",H,[d(Y,{message:a.$page.props.flash.suc_msg},null,8,["message"]),P,e("div",Q,[e("form",{onSubmit:l[5]||(l[5]=K((...t)=>a.submit&&a.submit(...t),["prevent"])),class:"bg-[#008494db] text-[white] m-auto rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm"},[e("div",R,[W,V(e("select",{id:"word_id","onUpdate:modelValue":l[0]||(l[0]=t=>s(o).word_id=t),onChange:M,class:"border text-[black] min-w-[65%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ee,(n(!0),p(f,null,x(h.words,(t,m)=>(n(),p("option",{value:t.id,key:m},r(t.name+"-"+t.union.name),9,te))),128))],544),[[j,s(o).word_id]]),d(u,{class:"mt-2",message:s(o).errors.eerr},null,8,["message"]),d(u,{class:"mt-2",message:s(o).errors.word_id},null,8,["message"])]),d(s(A),{modelValue:s(o).village_id,"onUpdate:modelValue":l[2]||(l[2]=t=>s(o).village_id=t)},{default:g(()=>[e("div",se,[oe,e("div",ae,[d(s(Z),{onChange:l[1]||(l[1]=t=>y.value=t.target.value),displayValue:t=>t.name,type:"text",class:"border text-[black] min-w-[100%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,8,["displayValue"]),s(N)?(n(),v(L(s(N)),{key:0,class:"h-4 mr-1 absolute right-[11px] top-[13px]"})):C("",!0)])]),e("div",re,[d(s(z),{class:"absolute text-[black] p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg"},{default:g(()=>[(n(!0),p(f,null,x(s(O),t=>(n(),v(s(G),{class:"cursor-pointer",autocomplete:"off",key:t.id,value:t},{default:g(()=>[F(r(t.name),1)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"]),e("div",le,[ne,V(e("select",{id:"infrastructure","onUpdate:modelValue":l[3]||(l[3]=t=>s(o).infrastructure=t),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},pe,512),[[j,s(o).infrastructure]]),d(u,{class:"mt-2",message:s(o).errors.eerr},null,8,["message"]),d(u,{class:"mt-2",message:s(o).errors.infrastructure},null,8,["message"])]),e("div",ue,[me,V(e("select",{id:"f_year_id","onUpdate:modelValue":l[4]||(l[4]=t=>s(o).f_year_id=t),class:"border min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[he,(n(!0),p(f,null,x(h.f_years,(t,m)=>(n(),p("option",{value:t.id,key:m},r(t.from+"-"+t.to),9,ge))),128))],512),[[j,s(o).f_year_id]]),d(u,{class:"mt-2",message:s(o).errors.eerr},null,8,["message"]),d(u,{class:"mt-2",message:s(o).errors.f_year_id},null,8,["message"])]),e("div",{class:"flex items-center justify-center mt-8"},[e("button",{onClick:B,type:"submit",class:"text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},"অনুসন্ধান")])],32)]),w.value.length>0?(n(),p("table",xe,[fe,e("tbody",null,[(n(!0),p(f,null,x(w.value,(t,m)=>(n(),p("tr",{key:m,class:"bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("th",_e,r(t.holding_no),1),e("th",we,r(t.bn_name),1),e("th",be,r(new Intl.NumberFormat().format(t.yearly_income))+"/= ",1),e("th",ye,r(t.spouse_name),1),e("th",ke,r(t.mother_name),1),e("th",ve,r(t.nid),1),e("th",Ve,r(t.phone),1),e("th",je,r(t.vill_name),1),e("th",Ce,r(t.w_name),1),e("th",Ne,[e("div",Fe,[e("p",null,r(t.paka_house),1),e("p",null,r(t.adhapaka_house),1),e("p",null,r(t.kasa_house),1)])]),e("th",Ie,r(new Intl.NumberFormat().format(t.yearly_house_rent))+"/= ",1),e("th",De,r(new Intl.NumberFormat().format(Math.round(t.yearly_house_rent*h.tax.price/100)-t.tax_paid))+"/= ",1),e("th",Ue,r(t.fy_from+"-"+t.fy_to),1)]))),128))])])):C("",!0)])]),_:1})}}};export{Oe as default};
