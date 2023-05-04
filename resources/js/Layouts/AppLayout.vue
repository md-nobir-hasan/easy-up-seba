<script setup>
import { ref } from 'vue';
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import DropdownLink from '@/Components/DropdownLink.vue';
import appLogo from '@/Components/ApplicationLogo.vue';
import appLogo2 from '@/Components/AuthenticationCardLogo.vue';
import submenue from '@/Components/submenue.vue';
import { HomeIcon,UserIcon,AdjustmentsHorizontalIcon,BanknotesIcon,CalculatorIcon,UserPlusIcon,CircleStackIcon,
    ListBulletIcon,ArrowsRightLeftIcon,UserGroupIcon,MinusIcon,CheckBadgeIcon,ChevronDoubleRightIcon} from '@heroicons/vue/24/solid'

defineProps({
    title: String,
    user: String,
});



//========= Side menu ============
const submenueItem =[
                    {title:'ড্যাসবোর্ড',name: 'Dashboard',route: route('admin.dashboard'),active: false,url:'/admin/dashboard',icon:HomeIcon,children:[]},
                    {title:'সেটাপ',name: 'Setup',active: false,url:'/admin/setup',icon:AdjustmentsHorizontalIcon,children:[
                        {title:'বিভাগ',name:'Division',active:false,route:route('admin.setup.division.index'),url:'/admin/setup/division',icon:MinusIcon,children:[]},
                        {title:'জেলা',name:'District',active:false,route:route('admin.setup.district.index'),url:'/admin/setup/district',icon:MinusIcon,children:[]},
                        {title:'উপজেলা',name:'Upazila',active:false,route:route('admin.setup.upazila.index'),url:'/admin/setup/upazila',icon:MinusIcon,children:[]},
                        {title:'ইউনিয়ন',name:'Union',active:false,route:route('admin.setup.union.index'),url:'/admin/setup/union',icon:MinusIcon,children:[]},
                        {title:'ওয়ার্ড',name:'Word',active:false,route:route('admin.setup.word.index'),url:'/admin/setup/word',icon:MinusIcon,children:[]},
                        {title:'গ্রাম',name:'Village',active:false,route:route('admin.setup.village.index'),url:'/admin/setup/village',icon:MinusIcon,children:[]},
                        {title:'কর',name:'Tax',active:false,route:route('admin.setup.tax.index'),url:'/admin/setup/tax',icon:MinusIcon,children:[]},
                        {title:'ধর্ম',name:'Religion',active:false,route:route('admin.setup.religion.index'),url:'/admin/setup/religion',icon:MinusIcon,children:[]},
                        {title:'পেশা',name:'Profession',active:false,route:route('admin.setup.profession.index'),url:'/admin/setup/profession',icon:MinusIcon,children:[]},
                        {title:'শিক্ষাগত যোগ্যতা',name:'Education Qualification',active:false,route:route('admin.setup.education-qualification.index'),url:'/admin/setup/education-qualification',icon:MinusIcon,children:[]},
                        {title:'অর্থ-বছর',name:'Financial Year',active:false,route:route('admin.setup.financial-year.index'),url:'/admin/setup/finalcial-year',icon:MinusIcon,children:[]},
                        // {title:'কাঠামো',name:'House Structure',active:false,route:route('admin.setup.house-structure.index'),url:'/admin/setup/house-structure',icon:MinusIcon,children:[]},
                    ]},
                    {title:'কর',name: 'Tax',active: false,url:'/admin/tax',icon:BanknotesIcon,children:[
                        {title:'ই-খানা',name:'E-Khana',active:false,route:route('admin.tax.ekhana.index'),url:'/admin/tax/ekhana',icon:UserPlusIcon,children:[]},
                        {title:'হিসাব',name:'Calculation',active:false,route:'',url:'/admin/tax/calculation',icon:CalculatorIcon,children:[
                            {title:'কর জামা ফর্ম',name:'House Tax Deposite',active:false,route:route('admin.tax.calculation.deposite.create'),url:'/admin/tax/calculation/deposite/create',icon:CircleStackIcon,children:[]},
                            {title:'কর জমা লিস্ট',name:'House Tax Deposite List',active:false,route:route('admin.tax.calculation.deposite.index'),url:'/admin/tax/calculation/deposite/index',icon:ListBulletIcon,children:[]},
                            {title:'গ্রাম ভিত্তিক ধার্য',name:'Village Based Levy',active:false,route:route('admin.tax.calculation.village-leavy.index'),url:'/admin/tax/calculation/village-leavy',icon:ChevronDoubleRightIcon,children:[]},
                            // {title:'ওয়ার্ড ভিত্তিক ধার্য',name:'ওয়ার্ড ভিত্তিক ধার্য',active:false,route:route('admin.tax.calculation.word-leavy.index'),url:'/admin/tax/calculation/word-leavy/index',icon:ChevronDoubleRightIcon,children:[]},
                        ]},
                        {title:'টপলিষ্ট/ডেইলি পোষ্টিং',name:'টপলিষ্ট/ডেইলি পোষ্টিং',active:false,route:'',url:'/admin/tax/toplist',icon:CalculatorIcon,children:[
                            {title:'ধার্য/আদায় টপশীট',name:'ধার্য/আদায় টপশীট',active:false,route:route('admin.tax.toplist.levy'),url:'/admin/tax/toplist/levy',icon:CircleStackIcon,children:[]},
                            {title:'ডেইলি পোষ্টিং',name:'ডেইলি পোষ্টিং',active:false,route:route('admin.tax.toplist.diily.posting'),url:'/admin/tax/toplist/daily/posting',icon:CircleStackIcon,children:[]},
                            {title:'ডেইলি পোষ্টিং টপশিট',name:'ডেইলি পোষ্টিং টপশিট',active:false,route:route('admin.tax.toplist.diily.posting.topsheet'),url:'/admin/tax/toplist/daily/topsheet',icon:CircleStackIcon,children:[]},
                        ]},
                        {title:'বিল প্রিন্ট',name:'বিল প্রিন্ট',active:false,route:'',url:'/admin/tax/bill-print',icon:CalculatorIcon,children:[
                            {title:'সিঙ্গেল বিল প্রিন্ট',name:'সিঙ্গেল বিল প্রিন্ট',active:false,route:route('admin.tax.bill.print.single'),url:'/admin/tax/bill-print/single',icon:CircleStackIcon,children:[]},
                            {title:'সমস্ত বিল প্রিন্ট',name:'সমস্ত বিল প্রিন্ট',active:false,route:route('admin.tax.bill.print.all'),url:'/admin/tax/bill-print/all',icon:CircleStackIcon,children:[]},
                            {title:'সিঙ্গেল বিল প্রিন্ট (পুরাতন)',name:'সিঙ্গেল বিল প্রিন্ট (পুরাতন)',active:false,route:route('admin.tax.bill.print.single.old'),url:'/admin/tax/bill-print/single/old',icon:CircleStackIcon,children:[]},
                            {title:'সমস্ত বিল প্রিন্ট (পুরাতন)',name:'সমস্ত বিল প্রিন্ট (পুরাতন)',active:false,route:route('admin.tax.bill.print.all.old'),url:'/admin/tax/bill-print/all/old',icon:CircleStackIcon,children:[]},
                            {title:'সিঙ্গেল পোজ বিল',name:'সিঙ্গেল পোজ বিল',active:false,route:route('admin.tax.bill.print.single.pos'),url:'/admin/tax/bill-print/single/pos',icon:CircleStackIcon,children:[]},
                            {title:'সমস্ত পোজ বিল',name:'সমস্ত পোজ বিল',active:false,route:route('admin.tax.bill.print.all.pos'),url:'/admin/tax/bill-print/all/pos',icon:CircleStackIcon,children:[]},
                        ]},
                    ]},
                    {title:'অনুমোদন',name: 'Approval',active: false,url:'/admin/approval',icon:CheckBadgeIcon,children:
                        [
                            {title:'কর জমা ডেলেট',name:'Tax Deposite Approval',active:false,route:route('admin.approval.tax-deposite.index'),url:'/admin/approval/tax-deposite',icon:MinusIcon,children:[]},
                        ]
                    },
                    {title:'ইউজার ম্যানেজমেন্ট',name: 'User Management',active: false,url:'/admin/user',icon:UserIcon,children:[
                        {title:'রোল',name:'Role',active:false,route:route('admin.user.role.index'),url:'/admin/user/role',icon:ArrowsRightLeftIcon,children:[]},
                        {title:'ইউজার',name:'User',active:false,route:route('admin.user.user.index'),url:'/admin/user/user',icon:UserGroupIcon,children:[]},
                    ]},
                    ];
//========= End Side menu ============

//========= frontend validation ============
// const permisions = ref({});
const nuser = usePage().props.auth.user;
const ncheck = (nmodule) => {
    let checked = false;
    usePage().props.permissions.forEach(function (val, key) {
        if (val.module.name == nmodule && val.role_id == nuser.role_id) {
            checked = true;
        }
    })
    return checked;

}
//============ end frontend validation ============
const showingNavigationDropdown = ref(false);


const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};

// custom vue coding
const sidemenu = ref(false);
const setup = ref(false);
const user = ref(false);

if (window.location.pathname.startsWith('/admin/setup')) {
    setup.value = true;
}
if (window.location.pathname.startsWith('/admin/user')) {
    user.value = true;
}

if (screen.width > 640) {
    sidemenu.value = ref(true);
}

const sidemenuChange = () => {

    if (sidemenu.value) {
        sidemenu.value = false;
    } else {
        sidemenu.value = true;
    }
}
const openClose = () => {
    if (setup.value) {
        setup.value = false;
    } else {
        setup.value = true;
    }
}
const userOpenClose = () => {
    if (user.value) {
        user.value = false;
    } else {
        user.value = true;
    }
}
const userMenu = ref(false);
const notyshow = ref(false);
const notyfunc = ()=>{
    if(notyshow.value){
        notyshow.value = false;
    }else{
        notyshow.value = true;
    }
    axios.post(route('ajax.noty.read')).then(function(res){
        console.log(res);
    })
}
function DateFormate(date){
    if(date){
        const d = new Date(date);
          let da = d.getDate();
          let month = d.getMonth();
          let year = d.getFullYear();
          return da + '/' + month + '/' + year;
    }
return date;

}
console.log(usePage().props.noty_not_read)
</script>

<template>
    <div>
        <Head :title="title" />
        <div class="fixed w-full sm:hidden text-center text-3xl bg-[#0edda2] z-50">
            <h1 v-if="$page.props.auth.user.role.name == 'Power' || $page.props.auth.user.role.name == 'Union'" class="font-extrabold p-3">Super Admin</h1>
            <h1 v-else class="font-extrabold p-3">{{  ($page.props.auth.user.word ? $page.props.auth.user.word.union ? $page.props.auth.user.word.name + "নং" + $page.props.auth.user.word.union.name : "Super Admin" : 'Super Admin')}}</h1>
        </div>
        <nav class="fixed top-0 max-sm:top-14 z-50 w-full max-sm:bg-white bg-[#0edda2] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start sm:hidden">
                        <button @click="sidemenuChange" type="button"
                            class="inline-flex items-center text-sm text-gray-500 rounded-lg smphp sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <div>
                         <a  href="#" class="flex ml-2  md:mr-24">
                            <appLogo class="block w-auto" />
                        </a>
                    </div>

                    <div class="text-center text-3xl max-sm:hidden">
                        <h1 v-if="$page.props.auth.user.role.name == 'Power' || $page.props.auth.user.role.name == 'Union'" class="font-extrabold p-3">Super Admin</h1>
                        <h1 v-else class="font-extrabold p-3">{{ ($page.props.auth.user.word ? $page.props.auth.user.word.union ? $page.props.auth.user.word.name + "নং" + $page.props.auth.user.word.union.name : "Super Admin" : 'Super Admin')}}</h1>
                    </div>

                    <div class="flex items-center">
                        <!-- Notifiction  -->
                        <div class="relative">
                            <a @click="notyfunc"
                              class="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                              href="javascript:void(0)"
                              >
                              <span class="dark:text-gray-200 [&>svg]:w-3.5">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="bell"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512">
                                  <path
                                    fill="currentColor"
                                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                                </svg>
                              </span>
                              <!-- {{ console.log($page.props.noty_not_read) }} -->
                              <span
                                class="absolute -mt-2.5 ml-2 rounded-full bg-red-600 py-[1px] px-1.5 text-[0.6rem] text-white"
                                >{{$page.props.noty_not_read.length}}</span
                              >
                            </a>
                            <ul  id="notification_pan" @focusout="notyshow = false"
                              class="absolute left-auto top-[12px] right-[16px] z-[1000] overflow-scroll max-h-[500px] m-0 mt-1 min-w-[12rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                            :class="[notyshow ? 'block' : 'hidden']"
                              >
                                  <div id="toast-notification" class="w-full max-w-xs text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                                      <div v-if="$page.props.noty_not_read.length>0" class="p-2 mb-4">
                                        <div v-for="(noty,key) in $page.props.noty_not_read" :key="key" class="flex items-center ml-2 mb-3 mt-3">
                                            <div class="ml-3 text-sm font-normal">
                                                <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ noty.data.msg }}</div>
                                                <div class="text-sm font-normal">{{ noty.data.name }}</div>
                                                <span class="text-xs font-medium text-blue-600 dark:text-blue-500 block text-right">{{ DateFormate(noty.created_at)}}</span>
                                            </div>
                                        </div>
                                      </div>
                                      <hr v-if="$page.props.noty_not_read.length>0">
                                    <div class="bg-gray-100 pb-4 p-2">
                                      <div v-for="(read_noty,key) in $page.props.noty_read" :key="key" class="flex items-center ml-2">
                                          <div class="ml-3 text-sm font-normal">
                                              <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ read_noty.data.msg }}</div>
                                              <div class="text-sm font-normal">{{ read_noty.data.name }}</div>
                                              <span class="text-xs font-medium text-blue-600 dark:text-blue-500 block text-right mr-2">{{ DateFormate(read_noty.created_at) }}</span>
                                          </div>
                                      </div>
                                    </div>
                                  </div>

                            </ul>
                        </div>

                        <div class="flex items-center ml-3">
                            <div>
                                <button @click="userMenu == true ? userMenu= false : userMenu= true" type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-10 rounded-full" src="/default/images/human.webp" alt="user photo">
                                </button>
                            </div>
                            <div :class="[userMenu ? 'block' : 'hidden']" class="z-50 absolute top-10 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                <div class="px-4 py-3" role="none">
                                <p class="text-sm text-gray-900 dark:text-white" role="none">
                                    {{$page.props.auth.user.name}}
                                </p>
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    {{$page.props.auth.user.phone}}
                                </p>
                                <hr class="h-1 bg-green-800 border-0 rounded dark:bg-gray-700">
                                </div>
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                ম্যানেজ অ্যাকাউন্ট
                                </div>
                                <ul class="py-1" role="none">
                                <li>
                                    <Link :href="route('profile.show')" class="pl-4">প্রোফাইল</Link>
                                </li>
                                <li>
                                    <form @submit.prevent="logout">
                                        <DropdownLink as="button">
                                            লগ আউট
                                        </DropdownLink>
                                    </form>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    <aside id="logo-sidebar"
        class="fixed  top-[85px] max-sm:top-[128px] bg-[#0edda2] pb-[84px] max-sm:pb-[112px] left-0 z-40 w-64 h-screen transition-transform border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 "
        :class="[sidemenu ? 'block' : '-translate-x-full']"
         aria-label="Sidebar">
        <div class="h-full pb-4 overflow-y-auto dark:bg-gray-800">
            <ul>
                <submenue v-for="(subitem, subkey) in submenueItem" :key="subkey" :items= subitem :ncheck="ncheck"/>
            </ul>
    </div>
    </aside>

<div class="p-4 max-sm:p-[2px] sm:ml-64 pt-[21px] max-sm:pt-[82px]">
    <div class="p-4 max-sm:p-[2px] border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

        <slot />
    </div>
</div>

</div>
</template>
