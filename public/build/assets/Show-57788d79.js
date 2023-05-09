import{J as u,d as y,e as l,b as p,u as o,F as h,h as x,f as N,o as n,X as $,a as e,t as r,g as m}from"./app-20abbbe2.js";import"./print-e4dbc7db.js";import{Q as f}from"./qrcode.vue.esm-2b254522.js";const D={key:0,class:"p-8 main-div"},j={class:"flex justify-between"},F={class:"w-[10in] m-auto"},S={class:"flex items-center justify-center"},V=e("img",{src:"/default/images/bd-logo.svg",class:"h-14",alt:"BD Logo"},null,-1),z={class:"ml-4 font-bold text-[24px]"},B={class:"flex items-center justify-between mt-4 pl-[75px]"},E={class:""},L=e("span",{class:"font-bold"},"অর্থ-বছর :",-1),M={class:"pl-8"},O=e("span",{class:"font-bold"},"তারিখ :",-1),Q={class:"text-left mt-4 bg-green-50 w-[100%] p-4 paid-seal"},Y={class:"table m-auto"},C=e("th",null,"করদাতার নাম",-1),H=e("th",null,"হোল্ডিং নং",-1),J=e("th",null,"পিতা/স্বামীর নাম",-1),K=e("th",null,"মোবাইল নং",-1),T=e("th",null,"বিল ইস্যুর তারিখ",-1),X={class:"text-left w-[100%] p-4"},q={class:"w-[100%] bg-[#ffc8c8d9] text-center border-collapse border border-[black] p-2"},A=e("thead",null,[e("tr",null,[e("th",{rowspan:"2",class:"border border-[black] p-2"},"করের বিবরণ"),e("th",{rowspan:"2",class:"border border-[black] p-2"},"বকেয়া"),e("th",{colspan:"5",class:"border border-[black] p-2"},"চলতি")]),e("tr",null,[e("th",{class:"border border-[black] p-2"},"১ম কিস্তি"),e("th",{class:"border border-[black] p-2"},"২য় কিস্তি"),e("th",{class:"border border-[black] p-2"},"৩য় কিস্তি"),e("th",{class:"border border-[black] p-2"},"মোট")])],-1),G=e("th",{class:"border border-[black] p-2"},"হোল্ডিং কর",-1),I={class:"border border-[black] p-2"},P={class:"border border-[black] p-2"},R={class:"border border-[black] p-2"},U={class:"border border-[black] p-2"},W={class:"border border-[black] p-2 bg-[#00ffc95c]"},Z=e("th",{class:"border border-[black] p-2"},"পূর্বের বকেয়া",-1),ee={class:"border border-[black] p-2"},te=e("td",{class:"border border-[black] p-2"},null,-1),se=e("td",{class:"border border-[black] p-2"},null,-1),oe=e("td",{class:"border border-[black] p-2"},null,-1),re={class:"border border-[black] p-2 bg-[#00ffc95c]"},ae=e("tr",null,[e("th",{class:"border border-[black] p-2"},"দন্ড"),e("td",{class:"border border-[black] p-2"}),e("td",{class:"border border-[black] p-2"}),e("td",{class:"border border-[black] p-2"}),e("td",{class:"border border-[black] p-2"}),e("td",{class:"border border-[black] p-2 bg-[#00ffc95c]"})],-1),de={class:"bg-[#00ffc95c]"},le=e("td",null,null,-1),ne=e("td",null,null,-1),ce=e("td",null,null,-1),_e=e("td",null,null,-1),ie=e("th",null,"সর্বমোট",-1),ue={class:"border border-[black] p-2"},be=e("h2",{class:"font-semibold text-center"}," নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।",-1),pe={class:"m-auto text-center mt-8"},he=e("p",{class:"h-2 bg-black seperatior"},null,-1),me={data(){return{value:"https://admin.easyupsheba.com/",size:300}},components:{QrcodeVue:f}},ve=Object.assign(me,{__name:"Show",props:{bills:Object,previous_arrears:String},setup(c){const g=c;let s=a=>String(a).replace(/\d/g,d=>"০১২৩৪৫৬৭৮৯"[d]);u().props.auth.user;const k=y({}),v=u().props.auth.user;u().props.permissions.forEach(function(a,d){a.module.name=="E-Khana"&&a.role_id==v.role_id&&(k.value=a)});function b(a){if(a){const d=new Date(a);let t=d.getDate(),i=d.getMonth(),w=d.getFullYear();return s(t)+"/"+s(i)+"/"+s(w)}return a}const _=new Date;return _.getMonth()+1+""+_.getDate()+_.getFullYear(),console.log(g.bill),(a,d)=>(n(),l(h,null,[p(o($),{title:"সমস্ত পোজ বিল প্রিন্ট"}),c.bills.length>0?(n(),l("div",D,[(n(!0),l(h,null,x(c.bills,(t,i)=>(n(),l("div",{key:i,class:"device-height m-auto"},[e("div",j,[e("div",F,[e("div",S,[V,e("h1",z,r(o(s)(a.$page.props.auth.user.word.name))+"- "+r(a.$page.props.auth.user.word.union.name),1)]),e("div",B,[e("div",E,[e("h4",null,[L,m(" "+r(o(s)(t.from)+"-"+o(s)(t.to)),1)])]),e("div",M,[e("h4",null,[O,m(" "+r(b(t.deposite_date)),1)])])]),e("div",Q,[e("table",Y,[e("tbody",null,[e("tr",null,[C,e("td",null,":"+r(t.bn_name),1)]),e("tr",null,[H,e("td",null,":"+r(o(s)(t.holding_no)),1)]),e("tr",null,[J,e("td",null,":"+r(t.spouse_name),1)]),e("tr",null,[K,e("td",null,": "+r(o(s)(t.phone)),1)]),e("tr",null,[T,e("td",null,":"+r(b(t.deposite_date)),1)])])])]),e("div",X,[e("table",q,[A,e("tbody",null,[e("tr",null,[G,e("td",I,r(o(s)(t.total_amount-t.paid_amount)),1),e("td",P,r(o(s)(t.f_kisti)),1),e("td",R,r(o(s)(t.s_kisti)),1),e("td",U,r(o(s)(t.t_kisti)),1),e("td",W,r(o(s)(t.paid_amount)),1)]),e("tr",null,[Z,e("td",ee,r(o(s)(a.$page.props[`pars${t.id}`])),1),te,se,oe,e("td",re,r(o(s)(a.$page.props[`pars${t.id}`])),1)]),ae,e("tr",de,[le,ne,ce,_e,ie,e("th",ue,r(o(s)(Number(t.paid_amount)+Number(a.$page.props[`pars${t.id}`]))),1)])])])]),be])]),e("div",pe,[p(f,{value:"হোল্ডিং নম্বরঃ "+o(s)(t.holding_no)+", নামঃ "+t.bn_name+", অর্থ-বছরঃ "+o(s)(t.from)+"-"+o(s)(t.to)+", সর্বমোট বিলঃ "+o(s)(Number(t.paid_amount)+Number(t.paid_prev_arrears)),size:a.size,level:"H",class:"m-auto"},null,8,["value","size"])]),he]))),128))])):N("",!0)],64))}});export{ve as default};
