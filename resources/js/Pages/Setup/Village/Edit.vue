<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
import { ref } from 'vue';
defineProps({
    divisions: Object,
});

const form = useForm({
    name: usePage().props.village.name,
    code: usePage().props.village.code,
    division_id: usePage().props.village.division_id,
    district_id: usePage().props.village.district_id,
    upazila_id: usePage().props.village.upazila_id,
    union_id: usePage().props.village.union_id,
    word_id: usePage().props.village.word_id,
});

const submit = () => {
    form.put(route('admin.setup.village.update',[usePage().props.village.id]), {
        onFinish: () => form.reset('name')
    });
};

//============ distric fetch ===============
let dists = ref(usePage().props.districts);
const ddisable = ref(false);
const districtFetch = ()=>{
    axios.get(route('ajax.fetch',['District','division_id',form.division_id]), form).then(res => {
        form.district_id = ''
        form.upazila_id = ''
        form.union_id = ''
        form.word_id = ''
        dists.value = res.data;
        if(dists.value.length == 0){
            ddisable.value = true;
        }else{
            ddisable.value = false;
        }
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('district fetch done');
    });
}
//============ end distric fetch =============

//============ Upazila fetch ===============
let upzils = ref(usePage().props.upazilas);
const updisable = ref(false);
const upazilaFetch = ()=>{
    axios.get(route('ajax.fetch',['Upazila','district_id',form.district_id]), form).then(res => {
        form.upazila_id = ''
        form.union_id = ''
        form.word_id = ''
        upzils.value = res.data;
        if(upzils.value.length == 0){
            updisable.value = true;
        }else{
            updisable.value = false;
        }
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('upazila fetch done');
    });
}
//============ end Upazila fetch =============

//============ Union fetch ===============
let uns = ref(usePage().props.unions);
const uniondisable = ref(false);
const unionFetch = ()=>{
    axios.get(route('ajax.fetch',['Union','upazila_id',form.upazila_id]), form).then(res => {
        form.union_id = ''
        form.word_id = ''
        uns.value = res.data;
        if(uns.value.length == 0){
            uniondisable.value = true;
        }else{
            uniondisable.value = false;
        }
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('union fetch done');
    });
}
//============ end Union fetch =============

//============ Word fetch ===============
let wrds = ref(usePage().props.words);
const worddisable = ref(false);
const wordFetch = ()=>{
    axios.get(route('ajax.fetch',['Word','union_id',form.union_id]), form).then(res => {
        form.word_id = ''
        wrds.value = res.data;
        if(wrds.value.length == 0){
            worddisable.value = true;
        }else{
            worddisable.value = false;
        }
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('ford fetch done');
    });
}
//============ end Word fetch =============
</script>

<template>
    <AppLayout title="গ্রাম">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">গ্রাম যোগ</h2>
                <Link :href="route('admin.setup.union.index')">
                <PrimaryButton class="font-extrabold">
                    ফিরে যান
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>

                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div class="mb-4">
                        <label for="division_id" class="block text-md font-medium text-gray-900 dark:text-white">বিভাগ</label>
                        <select id="division_id" v-model="form.division_id" @change="districtFetch" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">বিভাগ নির্বাচন করুন</option>
                            <option v-for="(division, key) in divisions" :value="division.id">{{ division.name }}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="district_id" class="block text-md font-medium text-gray-900 dark:text-white">জেলা</label>
                        <select id="district_id" @change="upazilaFetch" v-model="form.district_id" :disabled="ddisable"
                        class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :class="[ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                        required>
                            <option selected value="">জেলা নির্বাচন করুন</option>
                            <option v-for="(district, key) in dists" :value="district.id">{{ district.name }}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="upazila_id" class="block text-md font-medium text-gray-900 dark:text-white">উপজেলা</label>
                        <select id="upazila_id" @change="unionFetch" v-model="form.upazila_id" :disabled="updisable || ddisable"
                        class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :class="[updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                        required>
                            <option selected value="">উপজেলা নির্বাচন করুন</option>
                            <option v-for="(upzil, key) in upzils" :value="upzil.id">{{ upzil.name }}</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label for="union_id" class="block text-md font-medium text-gray-900 dark:text-white">ইউনিয়ন</label>
                        <select id="union_id" @change="wordFetch" v-model="form.union_id" :disabled="uniondisable || updisable || ddisable"
                         class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :class="[uniondisable || updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                         required>
                            <option selected value="">ইউনিয়ন নির্বাচন করুন</option>
                            <option v-for="(upzil, key) in uns" :value="upzil.id">{{ upzil.name }}</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label for="word_id" class="block text-md font-medium text-gray-900 dark:text-white">ওয়ার্ড</label>
                        <select id="word_id" v-model="form.word_id" :disabled="worddisable || uniondisable || updisable || ddisable"
                         class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :class="[worddisable || uniondisable || updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                         required>
                            <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                            <option v-for="(wor, key) in wrds" :value="wor.id">{{ wor.name }}</option>
                        </select>
                    </div>

                    <div>
                        <InputLabel for="name" value="গ্রামের নাম" />
                        <TextInput :disabled="worddisable || uniondisable || updisable || ddisable"
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full"
                            :class="[worddisable || uniondisable || updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                            required

                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>
                    <div>
                        <InputLabel for="code" value="কোড"  />
                        <TextInput :disabled="worddisable || uniondisable || updisable || ddisable"
                            id="code"
                            v-model="form.code"
                            type="number"
                            class="mt-1 block w-full"
                            :class="[worddisable || uniondisable || updisable || ddisable ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600' : '']"
                            required

                            autocomplete="code"
                        />
                        <InputError class="mt-2" :message="form.errors.code" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="form.submit_btn = 'return'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            আপডেট
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
