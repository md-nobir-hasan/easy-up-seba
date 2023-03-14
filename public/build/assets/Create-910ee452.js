import{v as x,c as k,w as i,o as m,a as e,b as d,g as u,u as t,j as y,i as v,e as b,h as w,F as V,n as _,l as n,m as c,t as U}from"./app-ce6b436d.js";import{_ as $}from"./AppLayout-b93bd87c.js";import{_ as C}from"./SucMesgShow-f53bdcf6.js";import{_ as S,a as j}from"./TextInput-0036ae59.js";import{_ as B}from"./InputLabel-d13b4e5e.js";import{_ as f}from"./PrimaryButton-dac4dbd4.js";import{F}from"./FormLayout-0903f9bd.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},D={class:"bg-white flex justify-between p-4"},R=e("h2",{class:"float-left text-3xl font-extrabold"},"Create Role",-1),E=e("hr",{class:"mb-1"},null,-1),L=["onSubmit"],M={class:"mb-8"},q={class:"inset-px mb-4"},z=e("hr",null,null,-1),A={class:"flex items-center"},O=["id","onUpdate:modelValue","value"],T=["for"],G={class:"flex items-center"},H={class:"flex items-center mb-4 ml-8"},I=["onUpdate:modelValue","id"],J=["for"],K={class:"flex items-center mb-4 ml-8"},P=["onUpdate:modelValue","id"],Q=["for"],W={class:"flex items-center mb-4 ml-8"},X=["onUpdate:modelValue","id"],Y=["for"],Z={class:"flex items-center mb-4 ml-8"},ee=["onUpdate:modelValue","id"],se=["for"],te={class:"flex items-center justify-center mt-4"},me={__name:"Create",props:{title:String,modules:Object},setup(p){const s=x({name:"",submit_btn:"",perm:{},ased:{}}),h=()=>{s.post(route("admin.user.role.store"),{onFinish:()=>s.reset("name")})};return(g,l)=>(m(),k($,{title:"Role"},{default:i(()=>[e("div",N,[e("div",D,[R,d(t(y),{href:g.route("admin.user.role.index")},{default:i(()=>[d(f,{class:"font-extrabold"},{default:i(()=>[u(" Back ")]),_:1})]),_:1},8,["href"])]),E,d(F,{class:"bg-white"},{default:i(()=>[d(C,{message:g.$page.props.flash.suc_msg},null,8,["message"]),e("form",{onSubmit:v(h,["prevent"]),class:"bg-white p-8 text-2lg"},[e("div",M,[d(B,{for:"name",value:"Role Name"}),d(S,{id:"name",modelValue:t(s).name,"onUpdate:modelValue":l[0]||(l[0]=a=>t(s).name=a),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),d(j,{class:"mt-2",message:t(s).errors.name},null,8,["message"])]),(m(!0),b(V,null,w(p.modules,(a,r)=>(m(),b("div",q,[z,e("div",A,[n(e("input",{id:r,"onUpdate:modelValue":o=>t(s).perm[a.id]=o,type:"checkbox",value:a.id,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,O),[[c,t(s).perm[a.id]]]),e("label",{for:r,class:"ml-2 text-2xl text-[blue] font-medium dark:text-gray-300"},U(a.name),9,T)]),e("div",G,[e("div",H,[n(e("input",{"onUpdate:modelValue":o=>t(s).ased[a.id+"add"]=o,id:r+"dkjf",type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,I),[[c,t(s).ased[a.id+"add"]]]),e("label",{for:r+"dkjf",class:"ml-2 text-md font-medium text-gray-900 dark:text-gray-300"},"Add",8,J)]),e("div",K,[n(e("input",{"onUpdate:modelValue":o=>t(s).ased[a.id+"show"]=o,id:r+"kdf3",type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,P),[[c,t(s).ased[a.id+"show"]]]),e("label",{for:r+"kdf3",class:"ml-2 text-md font-medium text-gray-900 dark:text-gray-300"},"Show",8,Q)]),e("div",W,[n(e("input",{"onUpdate:modelValue":o=>t(s).ased[a.id+"edit"]=o,id:r+"kdfr",type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,X),[[c,t(s).ased[a.id+"edit"]]]),e("label",{for:r+"kdfr",class:"ml-2 text-md font-medium text-gray-900 dark:text-gray-300"},"Edit",8,Y)]),e("div",Z,[n(e("input",{"onUpdate:modelValue":o=>t(s).ased[a.id+"delete"]=o,id:r+"kdf",type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,ee),[[c,t(s).ased[a.id+"delete"]]]),e("label",{for:r+"kdf",class:"ml-2 text-md font-medium text-gray-900 dark:text-gray-300"},"Delele",8,se)])])]))),256)),e("div",te,[d(f,{onClick:l[1]||(l[1]=a=>t(s).submit_btn="return"),class:_(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:i(()=>[u(" Save ")]),_:1},8,["class","disabled"]),d(f,{onClick:l[2]||(l[2]=a=>t(s).submit_btn="new"),class:_(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:i(()=>[u(" Save and New ")]),_:1},8,["class","disabled"])])],40,L)]),_:1})])]),_:1}))}};export{me as default};
