import{_ as c}from"./AppLayout-88b5e2ce.js";import p from"./DeleteUserForm-5b8b85d2.js";import l from"./LogoutOtherBrowserSessionsForm-42874ed2.js";import{S as s}from"./SectionBorder-602696c6.js";import f from"./TwoFactorAuthenticationForm-e91f178a.js";import u from"./UpdatePasswordForm-4e38b694.js";import _ from"./UpdateProfileInformationForm-3a3a6173.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-71fb818a.js";import"./ApplicationLogo-cfceffba.js";import"./DialogModal-e52868a7.js";import"./SectionTitle-125d17e8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DangerButton-b5c56a1c.js";import"./TextInput-b42a0960.js";import"./SecondaryButton-de1dd6a7.js";import"./ActionMessage-f7df3edb.js";import"./PrimaryButton-b3ed76f3.js";import"./InputLabel-c4d6837a.js";import"./FormSection-a20374f0.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};
