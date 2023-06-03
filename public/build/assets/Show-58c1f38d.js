import{J as r,d as b,e as v,b as m,u as n,a as t,t as e,f as z,F as p,a7 as x,o as f,X as P}from"./app-3b687d5c.js";import"./print-18465817.js";import{Q as _}from"./qrcode.vue.esm-e45fa985.js";const j={key:0,class:"p-8 main-div"},F={class:"flex justify-between"},$={class:"w-[49%]"},B={class:"flex justify-between mt-4 mr-1 pl-[15px]"},E=t("div",{class:"flex"},[t("img",{src:"/default/images/bd-logo.svg",class:"h-14",alt:"BD Logo"})],-1),V={class:"text-center"},H=t("p",{class:"text-[#ec2929] text-[14px]"},"গনপ্রজাতন্ত্রী বাংলাদেশ সরকার (স্থানীয় সরকার বিভাগ)",-1),M={class:"ml-4 font-bold text-[18px] text-[#060682]"},Y=t("h2",{class:"font-bold text-[#ec2929] text-[16px]"},"ইউপি করের বিল",-1),L=t("h4",{class:"text-[#060682] text-[16px]"},"ইউপি কপি",-1),O={class:"text-left mt-4 w-[100%] p-4"},Q={class:"table w-[100%]"},U=t("th",{class:"w-[50%]"},null,-1),C=t("th",{class:"w-[50%]"},null,-1),J=t("th",{class:"w-[50%]"},null,-1),K=t("th",{class:"w-[50%]"},null,-1),X=t("th",{class:"w-[50%]"},null,-1),q=t("th",{class:"w-[50%]"},null,-1),A=t("th",{class:"w-[50%]"},null,-1),G=t("th",{class:"w-[50%]"},null,-1),I=t("th",{class:"w-[50%]"},null,-1),R=t("tr",null,[t("th",{class:"w-[50%]"}),t("td")],-1),T={class:"text-left mt-1 w-[100%] p-4 pt-0"},W=t("h1",{class:"text-center"},"করের বিবরণ",-1),Z={class:"table w-[100%]"},tt=t("th",{class:"w-[50%]"},null,-1),lt=t("th",{class:"w-[50%]"},null,-1),et=t("th",{class:"w-[50%]"},null,-1),at=t("th",{class:"w-[50%]"},null,-1),st=t("th",{class:"w-[50%]"},null,-1),nt=t("th",{class:"w-[50%]"},null,-1),it=["id"],ot=x('<div class="text-left w-[100%] p-4 mt-10"><table class="w-[100%] text-center border-collapse p-2"><tbody><tr><th></th><td class="p-2"><img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba"><span></span></td></tr><tr><th></th><td class="p-2"></td><td class="border-b-0 p-2 align-bottom"></td></tr><tr><th></th><td class="p-2"></td><td></td></tr></tbody></table></div>',1),ut={class:"w-[49%]"},dt={class:"flex justify-between mt-4 mr-1 pl-[15px]"},ct=t("div",{class:"flex"},[t("img",{src:"/default/images/bd-logo.svg",class:"h-14",alt:"BD Logo"})],-1),ht={class:"text-center"},rt=t("p",{class:"text-[#ec2929] text-[14px]"},"গনপ্রজাতন্ত্রী বাংলাদেশ সরকার (স্থানীয় সরকার বিভাগ)",-1),bt={class:"ml-4 font-bold text-[18px] text-[#060682]"},mt=t("h2",{class:"font-bold text-[#ec2929] text-[16px]"},"ইউপি করের বিল",-1),_t=t("h4",{class:"text-[#060682] text-[16px]"},"গ্রাহক কপি",-1),wt={class:"text-left mt-4 w-[100%] p-4"},gt={class:"table w-[100%]"},vt=t("th",{class:"w-[50%]"},null,-1),ft=t("th",{class:"w-[50%]"},null,-1),xt=t("th",{class:"w-[50%]"},null,-1),kt=t("th",{class:"w-[50%]"},null,-1),yt=t("th",{class:"w-[50%]"},null,-1),Nt=t("th",{class:"w-[50%]"},null,-1),Dt=t("th",{class:"w-[50%]"},null,-1),St=t("th",{class:"w-[50%]"},null,-1),zt=t("th",{class:"w-[50%]"},null,-1),pt=t("tr",null,[t("th",{class:"w-[50%]"}),t("td")],-1),Pt={class:"text-left mt-1 w-[100%] p-4 pt-0"},jt=t("h1",{class:"text-center"},"করের বিবরণ",-1),Ft={class:"table w-[100%]"},$t=t("th",{class:"w-[50%]"},null,-1),Bt=t("th",{class:"w-[50%]"},null,-1),Et=t("th",{class:"w-[50%]"},null,-1),Vt=t("th",{class:"w-[50%]"},null,-1),Ht=t("th",{class:"w-[50%]"},null,-1),Mt=t("th",{class:"w-[50%]"},null,-1),Yt=x('<div class="text-left w-[100%] p-4 mt-10"><table class="w-[100%] text-center border-collapse p-2"><tbody><tr><th></th><td class="p-2"><img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba"><span></span></td></tr><tr><th></th><td class="p-2"></td><td class="border-b-0 p-2 align-bottom"></td></tr><tr><th></th><td class="p-2"></td><td></td></tr></tbody></table></div>',1),Lt={data(){return{value:"https://admin.easyupsheba.com/",size:120}},components:{QrcodeVue:_}},Ct=Object.assign(Lt,{__name:"Show",props:{bill:Object,previous_arrears:String},setup(l){const k=l;let a=s=>String(s).replace(/\d/g,i=>"০১২৩৪৫৬৭৮৯"[i]);r().props.auth.user,b(k.bill);const y=b({}),N=r().props.auth.user;r().props.permissions.forEach(function(s,i){s.module.name=="E-Khana"&&s.role_id==N.role_id&&(y.value=s)});function w(s){if(s){const i=new Date(s);let o=i.getDate(),c=i.getMonth(),h=i.getFullYear();return a(o)+"/"+a(c)+"/"+a(h)}return s}const u=new Date;u.getMonth()+1+""+u.getDate()+u.getFullYear();function g(s){if(s){let i=new Date(s);i.setDate(i.getDate()-10);let o=i,c=o.getDate(),h=o.getMonth(),S=o.getFullYear();return a(c)+"/"+a(h)+"/"+a(S)}return s}const d=b(null);function D(s){axios.get(route("ajax.bnmoney",[s])).then(i=>{d.value=i.data+" মাত্র"})}return(s,i)=>(f(),v(p,null,[m(n(P),{title:"সিঙ্গেল বিল প্রিন্ট"}),l.bill?(f(),v("div",j,[t("div",F,[t("div",$,[t("div",B,[E,t("div",V,[H,t("h1",M,e(s.$page.props.auth.user.union.name)+" পরিষদ কার্যালয় "+e(s.$page.props.auth.user.union.upazila.name)+", "+e(s.$page.props.auth.user.union.upazila.district.name),1),Y,L]),t("div",null,[m(_,{value:"Holding No: "+l.bill.ekhana.holding_no+", name: "+l.bill.ekhana.bn_name+", Phone: "+l.bill.ekhana.phone+", Status: "+(l.bill.paid_amount+l.bill.paid_prev_arrears>0?"Paid":"Please Paid Soon"),size:s.size,level:"H"},null,8,["value","size"])])]),t("div",O,[t("table",Q,[t("tbody",null,[t("tr",null,[U,t("td",null,e(n(a)(l.bill.ekhana.word.name)),1)]),t("tr",null,[C,t("td",null,e(n(a)(l.bill.f_year.from)+" - "+n(a)(l.bill.f_year.to)),1)]),t("tr",null,[J,t("td",null,e(n(a)(l.bill.ekhana.holding_no)),1)]),t("tr",null,[K,t("td",null,e(l.bill.ekhana.bn_name),1)]),t("tr",null,[X,t("td",null,e(l.bill.ekhana.spouse_name),1)]),t("tr",null,[q,t("td",null,e(n(a)(Number(l.bill.ekhana.paka_house??0)+Number(l.bill.ekhana.adhapaka_house??0)+Number(l.bill.ekhana.kasa_house??0))),1)]),t("tr",null,[A,t("td",null,e(l.bill.ekhana.village.name),1)]),t("tr",null,[G,t("td",null,e(w(l.bill.deposite_date))+" ইং",1)]),t("tr",null,[I,t("td",null,e(g(l.bill.deposite_date))+" ইং",1)]),R])])]),t("div",T,[W,t("table",Z,[t("tbody",null,[t("tr",null,[tt,t("td",null,e(n(a)(l.bill.prev_arrears)),1)]),t("tr",null,[lt,t("td",null,e(n(a)(l.bill.total_amount)),1)]),t("tr",null,[et,t("td",null,e(n(a)(l.bill.fine)),1)]),t("tr",null,[at,t("td",null,e(n(a)(Number(l.bill.prev_arrears)+Number(l.bill.total_amount))),1)]),t("tr",null,[st,t("td",null,e(n(a)(l.bill.paid_amount)),1)]),t("tr",null,[nt,t("td",null,e(n(a)(Number(l.bill.prev_arrears)+Number(l.bill.total_amount)-Number(l.bill.paid_amount))),1)])])]),t("p",{id:D(Number(l.bill.prev_arrears)+Number(l.bill.total_amount)-Number(l.bill.paid_amount))},"কথায়ঃ "+e(d.value),9,it)]),ot]),t("div",ut,[t("div",dt,[ct,t("div",ht,[rt,t("h1",bt,e(s.$page.props.auth.user.union.name)+" পরিষদ কার্যালয় "+e(s.$page.props.auth.user.union.upazila.name)+", "+e(s.$page.props.auth.user.union.upazila.district.name),1),mt,_t]),t("div",null,[m(_,{value:"Holding No: "+l.bill.ekhana.holding_no+", name: "+l.bill.ekhana.bn_name+", Phone: "+l.bill.ekhana.phone+", Status: "+(l.bill.paid_amount+l.bill.paid_prev_arrears>0?"Paid":"Please Paid Soon"),size:s.size,level:"H"},null,8,["value","size"])])]),t("div",wt,[t("table",gt,[t("tbody",null,[t("tr",null,[vt,t("td",null,e(n(a)(l.bill.ekhana.word.name)),1)]),t("tr",null,[ft,t("td",null,e(n(a)(l.bill.f_year.from)+" - "+n(a)(l.bill.f_year.to)),1)]),t("tr",null,[xt,t("td",null,e(n(a)(l.bill.ekhana.holding_no)),1)]),t("tr",null,[kt,t("td",null,e(l.bill.ekhana.bn_name),1)]),t("tr",null,[yt,t("td",null,e(l.bill.ekhana.spouse_name),1)]),t("tr",null,[Nt,t("td",null,e(n(a)(Number(l.bill.ekhana.paka_house??0)+Number(l.bill.ekhana.adhapaka_house??0)+Number(l.bill.ekhana.kasa_house??0))),1)]),t("tr",null,[Dt,t("td",null,e(l.bill.ekhana.village.name),1)]),t("tr",null,[St,t("td",null,e(w(l.bill.deposite_date))+" ইং",1)]),t("tr",null,[zt,t("td",null,e(g(l.bill.deposite_date))+" ইং",1)]),pt])])]),t("div",Pt,[jt,t("table",Ft,[t("tbody",null,[t("tr",null,[$t,t("td",null,e(n(a)(l.bill.prev_arrears)),1)]),t("tr",null,[Bt,t("td",null,e(n(a)(l.bill.total_amount)),1)]),t("tr",null,[Et,t("td",null,e(n(a)(l.bill.fine)),1)]),t("tr",null,[Vt,t("td",null,e(n(a)(Number(l.bill.prev_arrears)+Number(l.bill.total_amount))),1)]),t("tr",null,[Ht,t("td",null,e(n(a)(l.bill.paid_amount)),1)]),t("tr",null,[Mt,t("td",null,e(n(a)(Number(l.bill.prev_arrears)+Number(l.bill.total_amount)-Number(l.bill.paid_amount))),1)])])]),t("p",null,"কথায়ঃ "+e(d.value),1)]),Yt])])])):z("",!0)],64))}});export{Ct as default};