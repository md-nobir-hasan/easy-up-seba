import{_ as c}from"./AppLayout-31a1b424.js";import p from"./DeleteUserForm-b57bbd3d.js";import l from"./LogoutOtherBrowserSessionsForm-7679e923.js";import{S as s}from"./SectionBorder-9f24d0a8.js";import f from"./TwoFactorAuthenticationForm-0f54ec27.js";import u from"./UpdatePasswordForm-14b67b55.js";import _ from"./UpdateProfileInformationForm-61d26116.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-af218a26.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-38fb3b19.js";import"./SectionTitle-938b4fb5.js";import"./DangerButton-f490e67d.js";import"./TextInput-76082d8b.js";import"./SecondaryButton-2c21936c.js";import"./ActionMessage-67b1b259.js";import"./PrimaryButton-75c9f46e.js";import"./InputLabel-3da729c6.js";import"./FormSection-30abc78d.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
