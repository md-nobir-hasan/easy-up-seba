import{_ as a}from"./AppLayout-65db9ea5.js";import{c as r,w as n,o as c,a as t,t as s,u as d}from"./app-d5729ea1.js";import"./ApplicationLogo-79708b43.js";const l={class:"py-12"},i={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},m={class:"bg-white overflow-hidden shadow-xl max-w-lg mx-auto rounded-lg"},_={class:"p-6 lg:p-8 bg-white border-b border-gray-200"},h={class:"text-center font-extrabold"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8"},u={class:"bg-white overflow-hidden shadow-xl max-w-lg mx-auto rounded-lg"},b={class:"p-6 lg:p-8 bg-white border-b border-gray-200"},g={class:"text-center font-extrabold"},k={__name:"Dashboard",props:{ksum:String,kcount:String},setup(o){const e=new Intl.NumberFormat("bn-BD",{style:"currency",currency:"BDT"});return(p,w)=>(c(),r(a,{title:"Dashboard"},{default:n(()=>[t("div",l,[t("div",i,[t("div",m,[t("div",_,[t("h4",h,"সর্বমোট খানাঃ "+s(new Intl.NumberFormat("bn-BD").format(o.kcount)),1)])])]),t("div",x,[t("div",u,[t("div",b,[t("h4",g,"সর্বমোট বার্ষিক আয়ঃ "+s(d(e).format(o.ksum)),1)])])])])]),_:1}))}};export{k as default};