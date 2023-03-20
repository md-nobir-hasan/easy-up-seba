<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
import { ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
defineProps({
    user: Object,
    roles: Object,
    divisions: Object,
});
console.log(usePage().props.user)
const form = useForm({
    name: usePage().props.user.name,
    phone: usePage().props.user.phone,
    email: usePage().props.user.email,
    address: usePage().props.user.address,
    password: usePage().props.user.show_pass,
    confirm_password: usePage().props.user.show_pass,
    role_id: usePage().props.user.role_id,
    division_id: usePage().props.user.word.division_id,
    district_id: usePage().props.user.word.district_id,
    upazila_id: usePage().props.user.word.upazila_id,
    union_id: usePage().props.user.word.union_id,
    word_id: usePage().props.user.word_id,
});

const showHide = ref(false)
const showHideChange = () =>{
    if(showHide.value){
        showHide.value = false;
    }else{
        showHide.value = true;
    }
}
const showHide2 = ref(false)
const showHideChange2 = () =>{
    if(showHide2.value){
        showHide2.value = false;
    }else{
        showHide2.value = true;
    }
}

const pas_check = ref('')
const passwordCheck = () =>{
    if(form.password != form.confirm_password){
        pas_check.value = "Passwor don't match";
    }else{
        pas_check.value = '';
    }
}
const submit = () => {
    if(form.password != form.confirm_password){
        pas_check.value = "Please solve me, first";
        return false;
    }
    form.put(route('admin.user.user.update',[usePage().props.user.id]), {
        onFinish: () => form.reset('name','phone','email','password')
    });
};


//============ distric fetch ===============
let dists = ref([usePage().props.user.word.district]);
const ddisable = ref(false);
const districtFetch = () => {
    axios.get(route('ajax.fetch', ['District', 'division_id', form.division_id]), form).then(res => {
        form.district_id = ''
        form.upazila_id = ''
        form.union_id = ''
        form.word_id = ''
        dists.value = res.data;
        if (dists.value.length == 0) {
            ddisable.value = true;
        } else {
            ddisable.value = false;
        }
        console.log(dists.value.length);
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        console.log('district fetch done');
    });
}
//============ end distric fetch =============

//============ Upazila fetch ===============
let upzils = ref([usePage().props.user.word.upazila]);
const updisable = ref(false);
const upazilaFetch = () => {
    axios.get(route('ajax.fetch', ['Upazila', 'district_id', form.district_id]), form).then(res => {
        form.upazila_id = ''
        form.union_id = ''
        form.word_id = ''
        upzils.value = res.data;
        if (upzils.value.length == 0) {
            updisable.value = true;
        } else {
            updisable.value = false;
        }
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        console.log('upazila fetch done');
    });
}
//============ end Upazila fetch =============

//============ Union fetch ===============
let uns = ref([usePage().props.user.word.union]);
const uniondisable = ref(false);
const unionFetch = () => {
    axios.get(route('ajax.fetch', ['Union', 'upazila_id', form.upazila_id]), form).then(res => {
        form.union_id = ''
        form.word_id = ''
        uns.value = res.data;
        if (uns.value.length == 0) {
            uniondisable.value = true;
        } else {
            uniondisable.value = false;
        }
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        console.log('union fetch done');
    });
}
//============ end Union fetch =============

//============ Word fetch ===============
let wrds = ref([usePage().props.user.word]);
const worddisable = ref(false);
const wordFetch = () => {
    axios.get(route('ajax.fetch', ['Word', 'union_id', form.union_id]), form).then(res => {
        form.word_id = ''
        wrds.value = res.data;
        if (wrds.value.length == 0) {
            worddisable.value = true;
        } else {
            worddisable.value = false;
        }
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        console.log('ford fetch done');
    });
}
//============ end Word fetch =============
</script>

<template>
    <AppLayout title="User">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">Update User</h2>
                <Link :href="route('admin.user.user.index')">
                <PrimaryButton class="font-extrabold">
                    Back
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>

                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div class="border p-3 mb-8">
                        <h2 class="text-blue-800 text-center underline font-extrabold pb-2">ইউজার অ্যাসাইন তথ্য</h2>
                        <div class="mb-4">
                            <label for="division_id"
                                class="block text-md font-medium text-gray-900 dark:text-white">বিভাগ</label>
                            <select id="division_id" v-model="form.division_id" @change="districtFetch"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                                <option selected value="">বিভাগ নির্বাচন করুন</option>
                                <option v-for="(division, key) in divisions" :value="division.id">{{ division.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="district_id"
                                class="block text-md font-medium text-gray-900 dark:text-white" >জেলা</label>
                            <select id="district_id" v-model="form.district_id" @change="upazilaFetch" :disabled="ddisable"
                                :class="[ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                                <option selected value="">জেলা নির্বাচন করুন</option>
                                <option v-for="(district, key) in dists" :value="district.id">{{ district.name }}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="upazila_id"
                                class="block text-md font-medium text-gray-900 dark:text-white">উপজেলা</label>
                            <select id="upazila_id" v-model="form.upazila_id" @change="unionFetch" :disabled="updisable || ddisable"
                                :class="[updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                                <option selected value="">উপজেলা নির্বাচন করুন</option>
                                <option v-for="(upzil, key) in upzils" :value="upzil.id">{{ upzil.name }}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="union_id"
                                class="block text-md font-medium text-gray-900 dark:text-white">ইউনিয়ন</label>
                            <select id="union_id" v-model="form.union_id" @change="wordFetch" :disabled="uniondisable || updisable || ddisable"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :class="[uniondisable || updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                                required>
                                <option selected value="">ইউনিয়ন নির্বাচন করুন</option>
                                <option v-for="(un, key) in uns" :value="un.id">{{ un.name }}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="word_id"
                                class="block text-md font-medium text-gray-900 dark:text-white">ওয়ার্ড</label>
                            <select id="word_id" v-model="form.word_id"
                                :disabled="worddisable || uniondisable || updisable || ddisable"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :class="[worddisable || uniondisable || updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                                required>
                                <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                                <option v-for="(wor, key) in wrds" :value="wor.id">{{ wor.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="border p-3 mb-8">
                        <h2 class="text-blue-800 text-center underline font-extrabold pb-2">ইউজারের তথ্য</h2>
                        <div class="mb-4">
                            <InputLabel for="name" value="User Name" />
                            <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required
                                autocomplete="text" />
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div class="mb-4">
                            <InputLabel for="phone" value="User phone" />
                            <TextInput id="phone" v-model="form.phone" type="tel" class="mt-1 block w-full" required
                                autocomplete="phone" />
                            <InputError class="mt-2" :message="form.errors.phone" />
                        </div>
                        <div class="mb-4">
                            <InputLabel for="email" value="User email" />
                            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required
                                autocomplete="email" />
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>

                        <div class="mb-4 relative">
                            <InputLabel for="password" value="Password" />
                            <TextInput v-if="showHide2" id="password" v-model="form.password" type="text"
                                class="mt-1 block w-full" required autocomplete="password" />
                            <TextInput v-else id="password" v-model="form.password" type="password"
                                class="mt-1 block w-full" required autocomplete="password" />
                            <div @click="showHideChange2" class="float-right absolute top-9 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" :class="[showHide2 ? 'block' : 'hidden']"
                                    viewBox="0 0 576 512" class="h-6">
                                    <path
                                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" :class="[showHide2 ? 'hidden' : 'block']"
                                    viewBox="0 0 640 512" class="h-6">
                                    <path
                                        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                                </svg>
                            </div>
                            <InputError class="mt-2" :message="form.errors.password" />
                        </div>
                        <div class="mb-4 relative">
                            <InputLabel for="confirm_password" value="Confirm password" />
                            <TextInput v-if="showHide" @change="passwordCheck" @keyup="passwordCheck" id="confirm_password"
                                v-model="form.confirm_password" type="text" class="mt-1 block w-full" required
                                autocomplete="confirm_password" />
                            <TextInput v-else @change="passwordCheck" @keyup="passwordCheck" id="confirm_password"
                                v-model="form.confirm_password" type="password" class="mt-1 block w-full" required
                                autocomplete="confirm_password" />
                            <div @click="showHideChange" class="float-right absolute top-9 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" :class="[showHide ? 'block' : 'hidden']"
                                    viewBox="0 0 576 512" class="h-6">
                                    <path
                                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" :class="[showHide ? 'hidden' : 'block']"
                                    viewBox="0 0 640 512" class="h-6">
                                    <path
                                        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                                </svg>
                            </div>
                            <InputError class="mt-2" :message="pas_check" />
                            <InputError class="mt-2" :message="form.errors.confirm_password" />
                        </div>
                    </div>
                    <div class="border p-3 mb-4">
                        <h2 class="text-blue-800 text-center underline font-extrabold pb-2">ইউজার পারমিশন</h2>
                        <label for="division_id"
                            class="block text-md font-medium text-gray-900 dark:text-white">Roles</label>
                        <select id="division_id" v-model="form.role_id"
                            class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required>
                            <option selected value="">Choose a role</option>
                            <option v-for="(role, key) in roles" :value="role.id">{{ role.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.role_id" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="form.submit_btn = 'return'" class="ml-4"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
