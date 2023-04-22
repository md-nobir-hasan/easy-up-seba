import{v as q,J as y,d as c,k as P,c as x,w as f,o as n,a as e,b as m,j as X,l as b,s as Z,u as o,e as u,h as F,F as M,aZ as N,f as $,g as U,n as i,t as _,H as h,aX as A}from"./app-db6bf5f2.js";import{_ as G,C as E,d as Q}from"./AppLayout-f6863f1b.js";import{_ as R}from"./SucMesgShow-8ba178d3.js";import{_ as S}from"./PrimaryButton-7101339c.js";import{$ as W,U as ee,N as te,_ as oe}from"./combobox-eb48e454.js";import"./ApplicationLogo-677d08b7.js";const ae={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},se=e("div",{class:"bg-white flex justify-between p-4"},[e("h2",{class:"float-left text-4xl font-extrabold"},"কর জমা ফর্ম")],-1),re={class:"mt-4 mb-2 p-4 bg-white"},le={class:"mb-4 flex items-center"},de=e("label",{for:"f_year_id",class:"block text-md font-medium text-[blue] dark:text-white mr-[27px]"},"অর্থ-বছর",-1),ne=e("option",{selected:"",value:""},"অর্থ-বছর নির্বাচন করুন",-1),ie=["value"],ue={class:"flex"},pe=e("label",{for:"f_year_id",class:"block text-md font-medium text-[blue] dark:text-white"},"হোল্ডিং নাম্বার",-1),ce={class:"relative"},be={class:"relative"},me={class:"flex items-center justify-center mt-4"},_e={key:0,class:"lg:flex justify-center bg-white items-center mt-4 pt-4"},he={class:"border-collapse mb-4 border border-slate-400 text-center text-md text-left text-gray-500 dark:text-gray-400 rounded-lg m-auto"},fe=e("thead",{class:"text-md text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{colspan:"2",class:"border border-slate-300 px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"},"খান তথ্য")])],-1),ge=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," হোল্ডিং নাম্বার ",-1),ye={scope:"row",class:"border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},xe=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," করদাতার নাম ",-1),ke=["readonly"],we=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," বাৎসরিক আয় ",-1),ve={scope:"row",class:"border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ve=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," পিতা/স্বামীর নাম ",-1),Ce=["readonly"],De=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," মাতার নাম ",-1),Ue=["readonly"],je=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," এনআইডি নাম ",-1),qe={scope:"row",class:"border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Fe=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," মোবাইল নাম্বার ",-1),Me=["readonly"],Ne=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," গ্রামের নাম ",-1),$e={scope:"row",class:"border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ee=e("th",{scope:"col",class:"border border-slate-300 px-6 py-3"}," ওয়ার্ড নং ",-1),Se={scope:"row",class:"border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Te={class:""},Ie=e("button",{type:"button",class:"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"},"হালনাগাদ",-1),Be=[Ie],He={key:1,colspan:"2",class:"text-center"},Oe=["disabled"],Le={class:"pb-5 pr-4 md:mt-6"},Ye={class:"border-collapse border border-slate-400 text-center m-auto"},ze=e("thead",{class:"bg-[#11ff5999]"},[e("tr",null,[e("th",{colspan:"2",class:"border border-slate-300 p-2"},"কর জমা ফর্ম")])],-1),Je=e("th",{class:"border border-slate-300 p-2"},"জমার তারিখ",-1),Ke={key:0,class:""},Pe=e("td",{class:"border border-slate-300 p-2"},"করের পরিমাণ",-1),Xe={class:"border border-slate-300 bg-gray-100"},Ze=e("td",{class:"border border-slate-300 p-2"},"বকেয়া পাওনা",-1),Ae={class:"border border-slate-300 bg-gray-100"},Ge=e("td",{class:"border border-slate-300 p-2"},"দন্ড",-1),Qe={class:"border border-slate-300 bg-gray-100"},Re={class:"bg-[#11ff5999]"},We={key:0,colspan:"2",class:"border border-slate-300 p-2"},et={key:1,colspan:"2",class:"border border-slate-300 p-2"},dt={__name:"Create",props:{f_years:Object,ekhanas:Object,taxes:Object},setup(j){const T=j,k=new Date;k.getMonth()+1+""+k.getDate()+k.getFullYear();const s=q({f_year_id:"",ekhana_id:String(y().props.auth.user.word.union.code+y().props.auth.user.word.code),paid_amount:0,arrears:0,fine:0,deposite_date:null,id:0}),d=q({phone:"",bn_name:"",spouse_name:"",mother_name:"",id:0}),I=c({}),B=y().props.auth.user;y().props.permissions.forEach(function(t,r){t.module.name=="E-Khana"&&t.role_id==B.role_id&&(I.value=t)});function H(t){if(t){const r=new Date(t);let g=r.getDate(),a=r.getMonth(),D=r.getFullYear();return g+"/"+a+"/"+D}return t}const w=c(null),O=c(""),L=c(""),p=c({}),v=c(null),Y=()=>{if(!s.f_year_id)return O.value="অর্থ-বছর নির্বাচন করুন",!1;if(!s.ekhana_id)return L.value="হল্ডিং নাম্বার নির্বাচন করুন",!1;console.log("i am form"),console.log(s),axios.post(route("ajax.ekhana.fetch"),s).then(t=>{p.value=t.data.ekhana,w.value=t.data.ht_deposite,s.paid_amount=Math.round(t.data.ht_deposite.total_amount-(t.data.ht_deposite.paid_amount>0?t.data.ht_deposite.paid_amount:0)),s.arrears=s.paid_amount,s.fine=Math.round(t.data.ht_deposite.fine??0),s.id=t.data.ht_deposite.id??0,v.value=t.data.ht_deposite.deposite_date,d.id=t.data.ekhana.id,d.bn_name=t.data.ekhana.bn_name,d.spouse_name=t.data.ekhana.spouse_name,d.mother_name=t.data.ekhana.mother_name,d.phone=t.data.ekhana.phone,console.log(t)}).catch(t=>{console.error(t)}).finally(()=>{console.log("khana fetch done")})},z=()=>{if(console.log(s),!s.deposite_date)return alert("জমার তারিখ নির্বাচন করুন"),!1;axios.post(route("ajax.update",["HouseTaxDeposite"]),s).then(t=>{w.value=t.data,console.log(t),alert("সফলভাবে কর জমা হয়েছে")}).catch(t=>{console.error(t)}).finally(()=>{console.log("House Tax Deposite Store Done")})},l=c(!1),J=()=>{axios.post(route("ajax.update",["Ekhana"]),d).then(t=>{l.value=!1,alert("সফলভাবে আপলোড হয়েছে")}).catch(t=>{console.error(t)}).finally(()=>{console.log("House Tax Deposite Store Done")})},V=T.ekhanas;console.log("i ama people"),console.dir(V),c();const C=c(""),K=P(()=>C.value===""?V:V.filter(t=>t.holding_no.includes(C.value.toLowerCase())));return(t,r)=>{const g=A("InputError");return n(),x(G,{title:"কর জমা"},{default:f(()=>[e("div",ae,[m(R,{message:t.$page.props.flash.suc_msg},null,8,["message"]),se,e("div",re,[e("form",{onSubmit:r[3]||(r[3]=X((...a)=>t.submit&&t.submit(...a),["prevent"])),class:"bg-[#11ff5999] m-auto rounded-lg p-6 text-2lg max-w-md max-sm:max-w-sm"},[e("div",le,[de,b(e("select",{id:"f_year_id","onUpdate:modelValue":r[0]||(r[0]=a=>o(s).f_year_id=a),class:"border ml-6 border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-[50px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},[ne,(n(!0),u(M,null,F(j.f_years,(a,D)=>(n(),u("option",{value:a.id,key:D},_(a.from+"-"+a.to),9,ie))),128))],512),[[Z,o(s).f_year_id]]),m(g,{class:"mt-2",message:o(s).errors.eerr},null,8,["message"]),m(g,{class:"mt-2",message:o(s).errors.f_year_id},null,8,["message"])]),m(o(te),{modelValue:o(s).ekhana_id,"onUpdate:modelValue":r[2]||(r[2]=a=>o(s).ekhana_id=a)},{default:f(()=>[e("div",ue,[pe,e("div",ce,[m(o(W),{onChange:r[1]||(r[1]=a=>C.value=a.target.value),class:"border ml-6 border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-[40px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),o(E)?(n(),x(N(o(E)),{key:0,class:"h-4 mr-1 absolute right-[11px] top-[13px]"})):$("",!0)])]),e("div",be,[m(o(ee),{class:"absolute p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg"},{default:f(()=>[(n(!0),u(M,null,F(o(K),a=>(n(),x(o(oe),{class:"cursor-pointer",autocomplete:"off",key:a.id,value:a.holding_no},{default:f(()=>[U(_(a.holding_no),1)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"]),e("div",me,[m(S,{onClick:Y,class:i(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:f(()=>[U(" সার্চ করুন ")]),_:1},8,["class","disabled"])])],32)]),p.value.holding_no?(n(),u("div",_e,[e("table",he,[fe,e("tbody",null,[e("tr",null,[ge,e("td",ye,_(p.value.holding_no),1)]),e("tr",null,[xe,e("td",{scope:"row",class:i(["border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",[l.value?" p-2":""]])},[b(e("input",{class:i([l.value?"border-[blue]":"border-0 text-center"]),type:"tel",required:"",readonly:!l.value,"onUpdate:modelValue":r[4]||(r[4]=a=>o(d).bn_name=a)},null,10,ke),[[h,o(d).bn_name]])],2)]),e("tr",null,[we,e("td",ve,_(new Intl.NumberFormat().format(p.value.yearly_income))+"/= ",1)]),e("tr",null,[Ve,e("td",{scope:"row",class:i(["border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",[l.value?" p-2":""]])},[b(e("input",{class:i([l.value?"border-[blue]":"border-0 text-center"]),type:"tel",required:"",readonly:!l.value,"onUpdate:modelValue":r[5]||(r[5]=a=>o(d).spouse_name=a)},null,10,Ce),[[h,o(d).spouse_name]])],2)]),e("tr",null,[De,e("td",{scope:"row",class:i(["border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",[l.value?" p-2":""]])},[b(e("input",{class:i([l.value?"border-[blue]":"border-0 text-center"]),type:"tel",required:"",readonly:!l.value,"onUpdate:modelValue":r[6]||(r[6]=a=>o(d).mother_name=a)},null,10,Ue),[[h,o(d).mother_name]])],2)]),e("tr",null,[je,e("td",qe,_(p.value.nid),1)]),e("tr",null,[Fe,e("td",{scope:"row",class:i(["border border-slate-300 font-medium text-gray-900 whitespace-nowrap dark:text-white",[l.value?" p-2":""]])},[b(e("input",{class:i([l.value?"border-[blue]":"border-0 text-center"]),type:"tel",required:"",readonly:!l.value,"onUpdate:modelValue":r[7]||(r[7]=a=>o(d).phone=a)},null,10,Me),[[h,o(d).phone]])],2)]),e("tr",null,[Ne,e("td",$e,_(p.value.village?p.value.village.name:""),1)]),e("tr",null,[Ee,e("td",Se,_(p.value.word?p.value.word.name:""),1)])]),e("tfoot",Te,[e("tr",null,[l.value?(n(),u("th",He,[e("button",{type:"button",onClick:J,class:i(["text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full",{"opacity-25":o(s).processing}]),disabled:o(s).processing},"আপডেট",10,Oe)])):(n(),u("th",{key:0,colspan:"2",onClick:r[8]||(r[8]=a=>l.value=!0)},Be))])])]),e("div",Le,[e("form",null,[e("table",Ye,[ze,e("tbody",null,[e("tr",null,[Je,e("td",null,[v.value?(n(),u("span",Ke,_(H(v.value)),1)):b((n(),u("input",{key:1,class:"border-0",type:"date",required:"","onUpdate:modelValue":r[9]||(r[9]=a=>o(s).deposite_date=a)},null,512)),[[h,o(s).deposite_date]])])]),e("tr",null,[Pe,e("td",Xe,[b(e("input",{class:"bg-gray-100 border-0",readonly:"",type:"text","onUpdate:modelValue":r[10]||(r[10]=a=>o(s).paid_amount=a)},null,512),[[h,o(s).paid_amount]])])]),e("tr",null,[Ze,e("td",Ae,[b(e("input",{class:"bg-gray-100 border-0",readonly:"",type:"number","onUpdate:modelValue":r[11]||(r[11]=a=>o(s).arrears=a)},null,512),[[h,o(s).arrears]])])]),e("tr",null,[Ge,e("td",Qe,[b(e("input",{class:"bg-gray-100 border-0",readonly:"",type:"number","onUpdate:modelValue":r[12]||(r[12]=a=>o(s).fine=a)},null,512),[[h,o(s).fine]])])])]),e("tfoot",Re,[e("tr",null,[w.value.paid_amount>0?(n(),u("th",We,[(n(),x(N(o(Q)),{class:"h-9 p-1 inline font-bold bg-[blue] text-white rounded-full"}))])):(n(),u("th",et,[m(S,{type:"button",onClick:z,class:i(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:f(()=>[U(" জমা করুন ")]),_:1},8,["class","disabled"])]))])])])])])])):$("",!0)])]),_:1})}}};export{dt as default};