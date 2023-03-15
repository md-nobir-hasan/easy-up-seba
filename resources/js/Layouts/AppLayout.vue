<script setup>
import { ref } from 'vue';
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import DropdownLink from '@/Components/DropdownLink.vue';
import sideMenueLink from '@/Components/sideMenueLink.vue';
import SsubMenue from '@/Components/SsubMenue.vue';
import appLogo from '@/Components/ApplicationLogo.vue';
import appLogo2 from '@/Components/AuthenticationCardLogo.vue';

defineProps({
    title: String,
    user: String,
});

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
console.log(topmenu.value)
const userMenu = ref(false);

</script>

<template>

    <div>
        <Head :title="title" />
        <div class="fixed w-full sm:hidden text-center text-3xl bg-[#0edda2]">
            <h1 v-if="$page.props.auth.user.id == 1" class="font-extrabold p-3">Super Admin</h1>
            <h1 v-else class="font-extrabold p-3">{{ ($page.props.auth.user.word ? $page.props.auth.user.word.union ? $page.props.auth.user.word.name + "নং" + $page.props.auth.user.word.union.name : "Super Admin" : 'Super Admin')}}</h1>
        </div>
        <nav class="fixed top-0 max-sm:top-14 z-50 w-full max-sm:bg-white bg-[#0edda2] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start ">
                        <button @click="sidemenuChange" type="button"
                            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg smphp sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
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
                        <h1 v-if="$page.props.auth.user.id == 1" class="font-extrabold p-3">Super Admin</h1>
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

        class="fixed top-[85px] max-sm:top-[128px] left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 "
        :class="[sidemenu ? 'block' : '-translate-x-full']"
         aria-label="Sidebar">
        <div class="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul>
                <li>
                    <sideMenueLink v-if="$page.props.auth.user && ncheck('Dashboard')" :href="route('admin.dashboard')"
                        :active="route().current('admin.dashboard')"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">ড্যাশবোর্ড </span>
                    </sideMenueLink>
                </li>
                <li @click="openClose" v-if="ncheck('Menu Setup')">
                    <a :class="{ 'active': $page.url.startsWith('/admin/setup') }"
                        class="flex items-center p-2 text-base mx-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                            </path>
                            <path
                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                            </path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap cursor-pointer">সেটাপ
                        </span>
                        <svg v-if="setup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-3 ml-auto ml-2">
                            <path
                                d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="h-3 ml-auto m-2">
                            <path
                                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                        </svg>

                    </a>
                    <span :class="[setup ? 'block' : 'hidden']">
                        <!-- <sideMenueLink v-if="$page.props.auth.user"  :href="route('admin.dashboard')" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> -->

                        <SsubMenue v-if="$page.props.auth.user && ncheck('Division')"
                            :href="route('admin.setup.division.index')"
                            :active="$page.url.startsWith('/admin/setup/division')"
                            class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-3">বিভাগ</span>
                        </SsubMenue>
                        <SsubMenue v-if="$page.props.auth.user && ncheck('District')"
                            :href="route('admin.setup.district.index')"
                            :active="$page.url.startsWith('/admin/setup/district')"
                            class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-3">জেলা</span>
                        </SsubMenue>
                        <SsubMenue v-if="$page.props.auth.user && ncheck('Upazila')"
                            :href="route('admin.setup.upazila.index')"
                            :active="$page.url.startsWith('/admin/setup/upazila')"
                            class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-3">উপজেলা</span>
                        </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Union')" :href="route('admin.setup.union.index')"
                        :active="$page.url.startsWith('/admin/setup/union')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">ইউনিয়ন</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Word')" :href="route('admin.setup.word.index')"
                        :active="$page.url.startsWith('/admin/setup/word')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">ওয়ার্ড</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Village')"
                        :href="route('admin.setup.village.index')"
                        :active="$page.url.startsWith('/admin/setup/village')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">গ্রাম</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Education Qualification')"
                        :href="route('admin.setup.education-qualification.index')"
                        :active="$page.url.startsWith('/admin/setup/education-qualification')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">শিক্ষাগত যোগ্যতা</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Profession')"
                        :href="route('admin.setup.profession.index')"
                        :active="$page.url.startsWith('/admin/setup/profession')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">পেশা</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Tax')"
                        :href="route('admin.setup.tax.index')"
                        :active="$page.url.startsWith('/admin/setup/tax')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">টেক্স</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('Religion')"
                        :href="route('admin.setup.religion.index')"
                        :active="$page.url.startsWith('/admin/setup/religion')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">ধর্ম</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('House Structure')"
                        :href="route('admin.setup.house-structure.index')"
                        :active="$page.url.startsWith('/admin/setup/house-structure')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">কাঠামো</span>
                    </SsubMenue>
                    <!-- </sideMenueLink> -->
                </span>
            </li>
            <li @click="userOpenClose" v-if="ncheck('Menu User')">
                <a :class="{'active':$page.url.startsWith('/admin/user')}"
                    class="flex  items-center p-2 text-base mx-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap cursor-pointer">ইউজার ম্যানেজমেন্ট
                    </span>
                    <svg v-if="setup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-3 ml-auto ml-2">
                        <path
                            d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="h-3 ml-auto m-2">
                        <path
                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>

                </a>
                <span :class="[user ? 'block' : 'hidden']">

                    <SsubMenue v-if="$page.props.auth.user && ncheck('Role')" :href="route('admin.user.role.index')"
                        :active="$page.url.startsWith('/admin/user/role')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">Role</span>
                    </SsubMenue>
                    <SsubMenue v-if="$page.props.auth.user && ncheck('User')" :href="route('admin.user.user.index')"
                        :active="$page.url.startsWith('/admin/user/user')"
                        class="flex ml-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">User</span>
                    </SsubMenue>
                </span>
            </li>
            <li v-if="ncheck('Menu User')">
                <a :class="{'active':$page.url.startsWith('/admin/user')}" :href="route('admin.ekhana')"
                    class="flex  items-center p-2 text-base mx-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap cursor-pointer">ইউজার ম্যানেজমেন্ট
                    </span>
                </a>

            </li>
        </ul>
    </div>
</aside>

<div class="p-4 sm:ml-64 pt-[78px]">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <slot />
    </div>
</div>

</div></template>
