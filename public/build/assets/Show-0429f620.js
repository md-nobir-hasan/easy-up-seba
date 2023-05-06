import{J as b,d as y,e as a,b as h,u as l,F as p,h as x,f as $,o as n,X as D,a as t,t as o,g as m}from"./app-57d2303c.js";import"./print-1b6bd6c8.js";import{Q as f}from"./qrcode.vue.esm-8820a2cf.js";const N={key:0,class:"p-8 main-div"},j={class:"flex justify-between"},F={class:"w-[10in] m-auto"},S={class:"flex items-center justify-center"},V=t("img",{src:"/default/images/bd-logo.svg",class:"h-14",alt:"BD Logo"},null,-1),z={class:"ml-4 font-bold text-[24px]"},B={class:"flex items-center justify-between mt-4 pl-[75px]"},E={class:""},L=t("span",{class:"font-bold"},"অর্থ-বছর :",-1),M={class:"pl-8"},O=t("span",{class:"font-bold"},"তারিখ :",-1),Q={class:"text-left mt-4 bg-green-50 w-[100%] p-4 paid-seal"},Y={class:"table m-auto"},C=t("th",null,"করদাতার নাম",-1),H=t("th",null,"হোল্ডিং নং",-1),J=t("th",null,"পিতা/স্বামীর নাম",-1),K=t("th",null,"মোবাইল নং",-1),T=t("th",null,"বিল ইস্যুর তারিখ",-1),X={class:"text-left w-[100%] p-4"},q={class:"w-[100%] bg-[#ffc8c8d9] text-center border-collapse border border-[black] p-2"},A=t("thead",null,[t("tr",null,[t("th",{rowspan:"2",class:"border border-[black] p-2"},"করের বিবরণ"),t("th",{rowspan:"2",class:"border border-[black] p-2"},"বকেয়া"),t("th",{colspan:"5",class:"border border-[black] p-2"},"চলতি")]),t("tr",null,[t("th",{class:"border border-[black] p-2"},"১ম কিস্তি"),t("th",{class:"border border-[black] p-2"},"২য় কিস্তি"),t("th",{class:"border border-[black] p-2"},"৩য় কিস্তি"),t("th",{class:"border border-[black] p-2"},"মোট")])],-1),G=t("th",{class:"border border-[black] p-2"},"হোল্ডিং কর",-1),I={class:"border border-[black] p-2"},P={class:"border border-[black] p-2"},R={class:"border border-[black] p-2"},U={class:"border border-[black] p-2"},W={class:"border border-[black] p-2 bg-[#00ffc95c]"},Z=t("th",{class:"border border-[black] p-2"},"পূর্বের বকেয়া",-1),tt={class:"border border-[black] p-2"},et=t("td",{class:"border border-[black] p-2"},null,-1),st=t("td",{class:"border border-[black] p-2"},null,-1),ot=t("td",{class:"border border-[black] p-2"},null,-1),rt={class:"border border-[black] p-2 bg-[#00ffc95c]"},lt=t("tr",null,[t("th",{class:"border border-[black] p-2"},"দন্ড"),t("td",{class:"border border-[black] p-2"}),t("td",{class:"border border-[black] p-2"}),t("td",{class:"border border-[black] p-2"}),t("td",{class:"border border-[black] p-2"}),t("td",{class:"border border-[black] p-2 bg-[#00ffc95c]"})],-1),dt={class:"bg-[#00ffc95c]"},at=t("td",null,null,-1),nt=t("td",null,null,-1),ct=t("td",null,null,-1),_t=t("td",null,null,-1),it=t("th",null,"সর্বমোট",-1),bt={class:"border border-[black] p-2"},ut=t("h2",{class:"font-semibold text-center"}," নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।",-1),ht={class:"m-auto text-center mt-8"},pt=t("p",{class:"h-2 bg-black seperatior"},null,-1),mt={data(){return{value:"https://admin.easyupsheba.com/",size:300}},components:{QrcodeVue:f}},vt=Object.assign(mt,{__name:"Show",props:{bills:Object,previous_arrears:String},setup(c){const g=c;let r=s=>String(s).replace(/\d/g,d=>"০১২৩৪৫৬৭৮৯"[d]);b().props.auth.user;const k=y({}),v=b().props.auth.user;b().props.permissions.forEach(function(s,d){s.module.name=="E-Khana"&&s.role_id==v.role_id&&(k.value=s)});function u(s){if(s){const d=new Date(s);let e=d.getDate(),i=d.getMonth(),w=d.getFullYear();return r(e)+"/"+r(i)+"/"+r(w)}return s}const _=new Date;return _.getMonth()+1+""+_.getDate()+_.getFullYear(),console.log(g.bill),(s,d)=>(n(),a(p,null,[h(l(D),{title:"সমস্ত পোজ বিল প্রিন্ট"}),c.bills.length>0?(n(),a("div",N,[(n(!0),a(p,null,x(c.bills,(e,i)=>(n(),a("div",{key:i,class:"device-height m-auto"},[t("div",j,[t("div",F,[t("div",S,[V,t("h1",z,o(l(r)(s.$page.props.auth.user.word.name))+"- "+o(s.$page.props.auth.user.word.union.name),1)]),t("div",B,[t("div",E,[t("h4",null,[L,m(" "+o(l(r)(e.from)+"-"+l(r)(e.to)),1)])]),t("div",M,[t("h4",null,[O,m(" "+o(u(e.deposite_date)),1)])])]),t("div",Q,[t("table",Y,[t("tbody",null,[t("tr",null,[C,t("td",null,":"+o(e.bn_name),1)]),t("tr",null,[H,t("td",null,":"+o(l(r)(e.holding_no)),1)]),t("tr",null,[J,t("td",null,":"+o(e.spouse_name),1)]),t("tr",null,[K,t("td",null,": "+o(l(r)(e.phone)),1)]),t("tr",null,[T,t("td",null,":"+o(u(e.deposite_date)),1)])])])]),t("div",X,[t("table",q,[A,t("tbody",null,[t("tr",null,[G,t("td",I,o(l(r)(e.total_amount-e.paid_amount)),1),t("td",P,o(l(r)(e.f_kisti)),1),t("td",R,o(l(r)(e.s_kisti)),1),t("td",U,o(l(r)(e.t_kisti)),1),t("td",W,o(l(r)(e.paid_amount)),1)]),t("tr",null,[Z,t("td",tt,o(l(r)(s.$page.props[`pars${e.id}`])),1),et,st,ot,t("td",rt,o(l(r)(s.$page.props[`pars${e.id}`])),1)]),lt,t("tr",dt,[at,nt,ct,_t,it,t("th",bt,o(l(r)(Number(e.paid_amount)+Number(s.$page.props[`pars${e.id}`]))),1)])])])]),ut])]),t("div",ht,[h(f,{value:s.value,size:s.size,level:"H",class:"m-auto"},null,8,["value","size"])]),pt]))),128))])):$("",!0)],64))}});export{vt as default};
