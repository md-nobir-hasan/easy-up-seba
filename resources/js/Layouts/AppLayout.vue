<script setup>
import { ref } from 'vue';
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import DropdownLink from '@/Components/DropdownLink.vue';
import sideMenueLink from '@/Components/sideMenueLink.vue';
import SsubMenue from '@/Components/SsubMenue.vue';
import appLogo from '@/Components/ApplicationLogo.vue';
import appLogo2 from '@/Components/AuthenticationCardLogo.vue';
import submenue from '@/Components/submenue.vue';
import { HomeIcon,UserIcon,AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'

defineProps({
    title: String,
    user: String,
});



//========= Side menu ============
const submenueItem =[
                    {name: 'Dashboard',route: route('admin.dashboard'),active: false,url:'/admin/dashboard',icon:HomeIcon,children:[]},
                    {name: 'Menu Setup',active: false,url:'/admin/setup',icon:AdjustmentsHorizontalIcon,children:[
                        {name:'Division',active:false,route:route('admin.setup.division.index'),url:'/admin/setup/division',icon:null,children:[]},
                        {name:'District',active:false,route:route('admin.setup.district.index'),url:'/admin/setup/district',icon:null,children:[]},
                        {name:'Upazila',active:false,route:route('admin.setup.upazila.index'),url:'/admin/setup/upazila',icon:null,children:[]},
                    ]},
                    {name: 'Menu User',active: false,url:'/admin/user',icon:UserIcon,children:[
                        {name:'Role',active:false,route:route('admin.user.role.index'),url:'/admin/user/role',icon:null,children:[]},
                        {name:'User',active:false,route:route('admin.user.user.index'),url:'/admin/user/user',icon:null,children:[]},
                    ]},

                    ];
//========= End Side menu ============

//========= frontend validation ============
const permisions = ref({});
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

const topmenu = ref(true);
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
    topmenu.value = false;
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
console.log(usePage().props.auth.user.role.name+ " I am user name")
const userMenu = ref(false);
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
                    <div class="flex items-center justify-start ">
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
                        <a v-if="!topmenu" href="#" class="flex ml-2  md:mr-24">
                            <appLogo class="block w-auto" />
                        </a>
                    </div>

                    <div class="text-center text-3xl max-sm:hidden">
                        <h1 v-if="$page.props.auth.user.role.name == 'Power' || $page.props.auth.user.role.name == 'Union'" class="font-extrabold p-3">Super Admin</h1>
                        <h1 v-else class="font-extrabold p-3">{{ ($page.props.auth.user.word ? $page.props.auth.user.word.union ? $page.props.auth.user.word.name + "নং" + $page.props.auth.user.word.union.name : "Super Admin" : 'Super Admin')}}</h1>
                    </div>
                    <div v-if="topmenu" class="flex items-center justify-start text-3xl hidden max-sm:block">
                        <appLogo2 class="block w-auto" />
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center ml-3">
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
