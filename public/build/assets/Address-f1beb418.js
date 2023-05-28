import{y as O,d as s,z as S,e as a,a as r,l as b,s as v,F as g,h as _,n as k,H as A,o,t as p}from"./app-ad6a1e24.js";const E={class:"grid grid-cols-1 md:grid-cols-2 gap-3"},H=r("option",{value:""},"বিভাগ নির্বাচন করুন",-1),L=["value","selected"],N=["disabled"],T=r("option",{value:""},"জেলা নির্বাচন করুন",-1),W=["value","selected"],G=["disabled"],I=r("option",{value:""},"উপজেলা নির্বাচন করুন",-1),J=["value","selected"],K=["disabled"],P=r("option",{value:""},"ইউনিয়ন নির্বাচন করুন",-1),Q=["value"],R=["disabled"],X=r("option",{value:""},"ওয়ার্ড নির্বাচন করুন",-1),Y=["value","selected"],Z=["disabled"],w=r("option",{value:""},"গ্রাম নির্বাচন করুন",-1),V=["value","selected"],de={__name:"Address",props:{title:{type:String,required:!0},divisions:Object,modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(D,{emit:M}){const n=D,e=O({title:n.title,division_id:n.modelValue.division_id??"",district_id:n.modelValue.district_id??"",upazila_id:n.modelValue.upazila_id??"",union_id:n.modelValue.union_id??"",ward_id:n.modelValue.ward_id??"",village_id:n.modelValue.village_id??""}),y=s({}),m=s(!0),x=s({}),h=s(!0),z=s({}),f=s(!0),U=s({}),c=s(!0),q=s({}),u=s(!0),j=(i=!1)=>{axios.get(route("ajax.fetch",["District","division_id",e.division_id]),e).then(d=>{i&&(e.district_id="",e.upazila_id="",e.union_id="",e.ward_id="",e.village_id="",h.value=!0,f.value=!0,c.value=!0,u.value=!0),y.value=d.data,m.value=y.value.length===0}).catch(d=>{console.error(d)}).finally(()=>{console.log("district fetch done")})},F=(i=!1)=>{axios.get(route("ajax.fetch",["Upazila","district_id",e.district_id]),e).then(d=>{i&&(e.upazila_id="",e.union_id="",e.ward_id="",e.village_id="",f.value=!0,c.value=!0,u.value=!0),x.value=d.data,h.value=x.value.length===0}).catch(d=>{console.error(d)}).finally(()=>{console.log("upazila fetch done")})},C=(i=!1)=>{axios.get(route("ajax.fetch",["Union","upazila_id",e.upazila_id]),e).then(d=>{i&&(e.union_id="",e.ward_id="",e.village_id="",c.value=!0,u.value=!0),z.value=d.data,f.value=z.value.length===0}).catch(d=>{console.error(d)}).finally(()=>{console.log("union fetch done")})},$=(i=!1)=>{axios.get(route("ajax.fetch",["Word","union_id",e.union_id]),e).then(d=>{i&&(e.ward_id="",e.village_id="",u.value=!0),U.value=d.data,c.value=U.value.length===0}).catch(d=>{console.error(d)}).finally(()=>{console.log("ward fetch done")})},B=()=>{axios.get(route("ajax.fetch",["Village","union_id",e.union_id]),e).then(i=>{q.value=i.data,u.value=q.value.length===0}).catch(i=>{console.error(i)}).finally(()=>{console.log("Village fetch done")})};return S(()=>n.modelValue,(i,d)=>{e.division_id=(i==null?void 0:i.division_id)??"",e.district_id=(i==null?void 0:i.district_id)??"",e.upazila_id=(i==null?void 0:i.upazila_id)??"",e.union_id=(i==null?void 0:i.union_id)??"",e.ward_id=(i==null?void 0:i.ward_id)??"",e.village_id=(i==null?void 0:i.village_id)??"",(i==null?void 0:i.division_id)!==(d==null?void 0:d.division_id)&&e.district_id&&j(),(i==null?void 0:i.district_id)!==(d==null?void 0:d.district_id)&&e.upazila_id&&F(),(i==null?void 0:i.upazila_id)!==(d==null?void 0:d.upazila_id)&&e.union_id&&C(),(i==null?void 0:i.union_id)!==(d==null?void 0:d.union_id)&&e.ward_id&&($(),B())},{deep:!0,immediate:!0}),S(()=>e,i=>{M("update:modelValue",{...i})},{deep:!0}),(i,d)=>(o(),a("div",E,[r("div",null,[b(r("select",{"onUpdate:modelValue":d[0]||(d[0]=t=>e.division_id=t),onChange:d[1]||(d[1]=t=>j(!0)),required:"",class:"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[H,(o(!0),a(g,null,_(D.divisions,(t,l)=>(o(),a("option",{key:l,value:t.id,selected:e.division_id===t.id},p(t.name),9,L))),128))],544),[[v,e.division_id]])]),r("div",null,[b(r("select",{"onUpdate:modelValue":d[2]||(d[2]=t=>e.district_id=t),onChange:d[3]||(d[3]=t=>F(!0)),disabled:m.value,required:"",class:k([[m.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"])},[T,(o(!0),a(g,null,_(y.value,(t,l)=>(o(),a("option",{key:l,value:t.id,selected:e.district_id===t.id},p(t.name),9,W))),128))],42,N),[[v,e.district_id]])]),r("div",null,[b(r("select",{"onUpdate:modelValue":d[4]||(d[4]=t=>e.upazila_id=t),onChange:d[5]||(d[5]=t=>C(!0)),disabled:h.value,required:"",class:k([[h.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"])},[I,(o(!0),a(g,null,_(x.value,(t,l)=>(o(),a("option",{key:l,value:t.id,selected:e.upazila_id===t.id},p(t.name),9,J))),128))],42,G),[[v,e.upazila_id]])]),r("div",null,[b(r("select",{"onUpdate:modelValue":d[6]||(d[6]=t=>e.union_id=t),onChange:d[7]||(d[7]=t=>$(!0)),disabled:f.value,required:"",class:k([[f.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"])},[P,(o(!0),a(g,null,_(z.value,(t,l)=>(o(),a("option",{key:l,value:t.id},p(t.name),9,Q))),128))],42,K),[[v,e.union_id]])]),r("div",null,[b(r("select",{"onUpdate:modelValue":d[8]||(d[8]=t=>e.ward_id=t),onChange:B,disabled:c.value,required:"",class:k([[c.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"])},[X,(o(!0),a(g,null,_(U.value,(t,l)=>(o(),a("option",{key:l,value:t.id,selected:e.ward_id===t.id},p(t.name),9,Y))),128))],42,R),[[v,e.ward_id]])]),r("div",null,[b(r("select",{"onUpdate:modelValue":d[9]||(d[9]=t=>e.village_id=t),disabled:u.value,required:"",class:k([[u.value?"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600":""],"border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"])},[w,(o(!0),a(g,null,_(q.value,(t,l)=>(o(),a("option",{key:l,value:t.id,selected:e.village_id===t.id},p(t.name),9,V))),128))],10,Z),[[v,e.village_id]])]),b(r("input",{type:"hidden",name:"title","onUpdate:modelValue":d[10]||(d[10]=t=>e.title=t)},null,512),[[A,e.title]])]))}};export{de as default};
