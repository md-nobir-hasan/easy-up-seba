<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
import SpinnerCheckmark from '@/Components/SpinnerCheckmark.vue';
import { ref } from 'vue';
defineProps({
    words: Object,
    religions: Object,
    professions: Object,
    edqualis: Object,
    house_strucs: Object,
    villages: Object,
    errors: Object,
    ksum: String,
    kcount: String,
});



const form = useForm({
    id: '',
    word_id: usePage().props.auth.user.word_id,
    village_id: '',
    holding_no: '',
    yearly_income: '',
    bn_name: '',
    name: '',
    ed_quali_id: '',
    phone: '',
    spouse_name: '',
    mother_name: '',
    m_male: '',
    m_female: '',
    m_child: '',
    dob: '',
    birth_no: '',
    nid: '',
    gender: '',
    religion_id: '',
    profession_id: '',
    tuboil: '',
    toilet_type: '',
    sc_past: '',
    sc_present: '',
    sc_future: '',
    paka_house: '',
    adhapaka_house: '',
    kasa_house: '',
    yearly_house_rent: '',
    rent_type: '',
    land_house: '',
    land_cultivate: '',
    infrastructure: '',
    submit_btn:'',
});

const vilages = ref(usePage().props.villages);
const vdisable = ref(false);
const villageFetching = ()=>{

    axios.get(route('ajax.fetch',['Village','word_id',form.word_id]), form).then(res => {
        console.log(res);
        vilages.value = res.data;
        if(vilages.value.length == 0){
            vdisable.value = true;
            vilages.value = {};
        }else{
            vdisable.value = false;
        }
    }).catch(err =>{
        vdisable.value = true;
            vilages.value = {};
        console.error(err)
    }).finally(() => {
        console.log('Village fetch done');
    });
}

const submit = () => {
    form.post(route('admin.tax.ekhana.store'), {
        onFinish: () => {
            if(form.submit_btn != 'return'){
                form.reset();
            }
        }
    });
};
const totalhousetax = ref(0);
const HouseTaxCal = () =>{
    let els = document.querySelectorAll('.house-tax-cal');
    totalhousetax.value = 0;
    els.forEach(function(elemt){
        totalhousetax.value += elemt.value * elemt.getAttribute('data-price');
    });
    form.yearly_house_rent = totalhousetax.value;
}

const holdingFetch = () =>{
    const form2 = useForm({
        word_id : form.word_id,
        village_id : form.village_id,
    })
    axios.get(route('ajax.holding.fetch',[form.village_id]), form2).then(res => {
        let holding = usePage().props.auth.user.word.union.code + usePage().props.auth.user.word.code+'0000';
        holding = Number(holding)+ res.data;
        form.holding_no = holding;
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('Holding fetch done');
    });
}

const spinner_hide = ref(false);
const autoSave = () =>{
    spinner_hide.value = true;
    axios.post(route('ajax.khana.autosave'), form).then(res => {
        form.id = res.data.id;
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('Auto Save done');
        spinner_hide.value = false;
    });
}

</script>
<template>
    <AppLayout title="ই-খানা ডাটা ফর্ম">
        <SpinnerCheckmark v-bind:spinner_hide="spinner_hide" class="fixed top-[50%] right-0"/>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-2xl font-extrabold">ই-খানা ডাটা ফর্ম</h2>
                <Link :href="route('admin.tax.ekhana.index')">
                <PrimaryButton class="font-extrabold">
                    ফিরে যান
                </PrimaryButton>
                </Link>
            </div>
            <div class="bg-white p-1 mt-2 text-center sm:flex justify-center items-center font-bold text-lg">
                <h4>সর্বমোট খানাঃ {{ kcount }}</h4> <span class="mx-3 max-sm:hidden">।।</span> <h4 class="">সর্বমোট বার্ষিক করঃ {{ ksum }}</h4>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white max-sm:p-[4px]">
                <SucMesgShow :message="$page.props.flash.suc_msg">{{ errors }}</SucMesgShow>
                <form @submit.prevent="submit" class="p-2 text-2lg">
                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="word_id" class="block text-md font-bold  text-xl dark:text-white">ওয়ার্ড</label>
                        <select id="word_id"  v-model="form.word_id" @change="villageFetching" @focusout="autoSave" class="border border-gray-300 font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                            <option v-for="(val, key) in words" :key="key" :value="val.id">{{ val.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.word_id" />
                    </div>
                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="village_id" class="block text-md font-medium font-bold  text-xl dark:text-white">গ্রাম</label>
                        <select id="village_id" v-model="form.village_id" @change="holdingFetch" @focusout="autoSave" class="border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">গ্রাম নির্বাচন করুন</option>
                            <option v-for="(val1, key) in vilages" :key="key" :value="val1.id">{{ val1.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.village_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="holding_no" value="হোল্ডিং নাম্বার" />
                        <TextInput @focusout="autoSave"
                            id="holding_no"
                            v-model="form.holding_no"
                            type="number"
                            class="mt-1 block w-full"
                            required
                            readonly
                            placeholder="হোল্ডিং নাম্বার লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.holding_no" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="yearly_income" value="বাৎসরিক গড় আয়" />
                        <TextInput
                            id="yearly_income"
                            v-model="form.yearly_income"
                            type="number"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="বাৎসরিক গড় আয় লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.yearly_income" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="bn_name" value="খানা প্রধানের নাম (বাংলায়)" />
                        <TextInput
                            id="bn_name"
                            v-model="form.bn_name"
                            type="text"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="খানা প্রধানের নাম লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.bn_name" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="name" value="নাম (ইংরেজিতে)" />
                        <TextInput
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="Type Name in English"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="ed_quali_id" class="block text-md font-medium font-bold  text-xl dark:text-white">শিক্ষাগত যোগ্যতা</label>
                        <select id="ed_quali_id" v-model="form.ed_quali_id" @focusout="autoSave" class="border border-gray-300 font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">শিক্ষাগত যোগ্যতা নির্বাচন করুন</option>
                            <option v-for="(pro, key) in edqualis" :key="key" :value="pro.id">{{ pro.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.ed_quali_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="phone" value="মোবাইল নাম্বার" />
                        <TextInput
                            id="phone"
                            v-model="form.phone"
                            type="number"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="মোবাইল নাম্বার লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.phone" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="spouse_name" value="পিতা/স্বামীর নাম" />
                        <TextInput
                            id="spouse_name"
                            v-model="form.spouse_name"
                            type="text"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="পিতা/স্বামীর নাম লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.spouse_name" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="mother_name" value="মাতার নাম" />
                        <TextInput
                            id="mother_name"
                            v-model="form.mother_name"
                            type="text"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="মাতার নাম লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.mother_name" />
                    </div>


                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="member" value="সদস্য সংখ্যা" />
                        <div class="flex">
                            <div>
                                <InputLabel class="text-center" for="m_male" value="পুরুষ" />
                                <TextInput
                                    id="m_male"
                                    v-model="form.m_male"
                                    type="number"
                                    class="mt-1 block w-full"

                                    @focusout="autoSave"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.m_male" />
                            </div>
                            <div>
                                <InputLabel class="text-sm text-center" for="m_female" value="মহিলা" />
                                <TextInput
                                    id="m_female"
                                    v-model="form.m_female"
                                    type="number"
                                    class="mt-1 block w-full"

                                    @focusout="autoSave"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.m_female" />
                            </div>
                            <div>
                                <InputLabel class="text-sm text-center" for="m_child" value="শিশু" />
                                <TextInput
                                    id="m_child"
                                    v-model="form.m_child"
                                    type="number"
                                    class="mt-1 block w-full"

                                    @focusout="autoSave"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.m_child" />
                            </div>

                        </div>
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="dob" value="জন্ম তারিখ" />
                        <TextInput
                            id="dob"
                            v-model="form.dob"
                            type="date"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="উদাঃ 16-08-2000"
                        />
                        <InputError class="mt-2" :message="form.errors.dob" />
                    </div>
                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="birth_no" value="জন্ম নিবন্ধন" />
                        <TextInput
                            id="birth_no"
                            v-model="form.birth_no"
                            type="number"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="জন্ম নিবন্ধন নাম্বার লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.birth_no" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="nid" value="এনআইডি নাম্বার" />
                        <TextInput
                            id="nid"
                            v-model="form.nid"
                            type="number"
                            class="mt-1 block w-full"
                            required

                            @focusout="autoSave"
                            placeholder="জাতীয় পরিচয় পত্র নাম্বার লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.nid" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="nid" value="খানা প্রধানের লিঙ্গ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.gender" @focusout="autoSave" id="male" name="gender" type="radio" value="পুরুষ"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="male"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">পুরুষ</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.gender" id="female" @focusout="autoSave" name="gender" type="radio" value="মহিলা"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="female"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">মহিলা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.gender" id="other" @focusout="autoSave" name="gender" type="radio" value="অন্যান্য"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="other"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">অন্যান্য</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.gender" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="religion_id" value="খানা প্রধানের ধর্ম" />
                        <div class="flex items-center">
                            <div v-for="(religion, rkey) in religions" :key="rkey" class="flex items-center mb-4 ml-8">
                                <input v-model="form.religion_id" :id="religion+rkey" :value="religion.id" @focusout="autoSave" name="religion" type="radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="religion+rkey"
                                    class="ml-2 text-lg font-medium font-bold  dark:text-gray-300">{{religion.name}}</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.religion_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="profession_id" class="block text-md font-medium font-bold  text-xl dark:text-white">পেশা</label>
                        <select id="profession_id" v-model="form.profession_id" @focusout="autoSave" class="border border-gray-300 font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">পেশা নির্বাচন করুন</option>
                            <option v-for="(p, key) in professions" :key="key" :value="p.id">{{ p.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.profession_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="tuboil" value="নলকুপ আছে কিনা" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.tuboil" @focusout="autoSave" id="yes" name="tuboil" type="radio" value="1"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="yes"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">হ্যা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.tuboil" @focusout="autoSave" id="na" name="tuboil" type="radio" value="0"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="na"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">না</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.tuboil" />
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="toilet_type" value="পায়খানার ধরণ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.toilet_type" @focusout="autoSave" id="ripe" name="toilet_type" type="radio" value="পাকা"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="ripe"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">পাকা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.toilet_type" @focusout="autoSave" id="kasa" name="toilet_type" type="radio" value="কাঁচা"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="kasa"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">কাঁচা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.toilet_type" @focusout="autoSave" id="nai" name="toilet_type" type="radio" value="নাই"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="nai"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">নাই</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.toilet_type" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="" class="block text-md font-medium font-bold  text-xl dark:text-white">সামাজিক সুবিধা</label>
                       <div class="ml-8">
                        <div class="mb-4">
                            <InputLabel style="font-size:16px" class="text-sm" for="sc_past" value="কি ধরনের সামাজিক সুরক্ষা সুবিধা অতীতে পেয়েছেন" />
                            <TextInput
                                id="sc_past"
                                v-model="form.sc_past"
                                type="text"
                                class="mt-1 block w-full"


                                @focusout="autoSave"
                                placeholder="প্রযোয্য নয়"
                            />
                            <InputError class="mt-2" :message="form.errors.sc_past" />
                        </div>
                        <div class="mb-4">
                            <InputLabel style="font-size:16px" for="sc_future" value="অন্যান্য কি ধরণের সুরক্ষা সুবিধা পাওয়ার যোগ্য" />
                            <TextInput
                                id="sc_future"
                                v-model="form.sc_future"
                                type="text"
                                class="mt-1 block w-full"


                                @focusout="autoSave"
                                placeholder="প্রযোয্য নয়"
                            />
                            <InputError class="mt-2" :message="form.errors.sc_future" />
                        </div>
                        <div class="mb-4">
                            <InputLabel style="font-size:16px"   for="sc_present" value="বর্তমানে কি ধরনের স্মাজিক সুরক্ষা পাচ্ছেন" />
                            <TextInput
                                id="sc_present"
                                v-model="form.sc_present"
                                type="text"
                                class="mt-1 block w-full"


                                @focusout="autoSave"
                                placeholder="প্রযোয্য নয়"
                            />
                            <InputError class="mt-2" :message="form.errors.sc_present" />
                        </div>
                       </div>
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="" value="অবকাঠামোর ধরণ" />
                        <div class="flex ml-8">
                            <div>
                                <InputLabel for="paka_house" class="text-sm text-center" :value="'পাকা'" />
                                <TextInput @change="HouseTaxCal" @keyup="HouseTaxCal"
                                    data-price="8400"
                                    v-model="form.paka_house"
                                    type="number"
                                    class="mt-1 block w-full house-tax-cal"
                                    min="0"
                                    @focusout="autoSave"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.paka_house" />
                            </div>
                            <div>
                                <InputLabel for="adhapaka_house" class="text-sm text-center" :value="'আধা পাকা'" />
                                <TextInput @change="HouseTaxCal" @keyup="HouseTaxCal"
                                    data-price="4800"
                                    v-model="form.adhapaka_house"
                                    type="number"
                                    class="mt-1 block w-full house-tax-cal"
                                    min="0"
                                    @focusout="autoSave"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.adhapaka_house" />
                            </div>
                            <div>
                                <InputLabel for="kasa_house" class="text-sm text-center" :value="'কাঁচা'" />
                                <TextInput @change="HouseTaxCal" @keyup="HouseTaxCal"
                                    data-price="3200"
                                    v-model="form.kase_house"
                                    type="number"
                                    class="mt-1 block w-full house-tax-cal"
                                    min="0"
                                    @focusout="autoSave"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.kasa_house" />
                            </div>
                        </div>
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="yearly_house_rent" value="বাৎসরিক ভাড়া" />
                        <TextInput
                            id="yearly_house_rent"
                            v-model="form.yearly_house_rent"
                            type="number"
                            class="mt-1 block w-full"
                            required

                            readonly
                            :value="totalhousetax"
                            @focusout="autoSave"
                            placeholder="আনুমানিক বাৎসরিক ভাড়ার পরিমান লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.yearly_house_rent" />
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="" value="বসবাসের ধরণ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.rent_type" @focusout="autoSave" id="self" name="rent_type" type="radio" value="নিজে বসবাস"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="self"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">নিজে বসবাস</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.rent_type" @focusout="autoSave" id="rent" name="rent_type" type="radio" value="ভাড়া দেওয়া"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="rent"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">ভাড়া দেওয়া</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.rent_type" @focusout="autoSave" id="both" name="rent_type" type="radio" value="উভয়"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="both"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">উভয়</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.rent_type" />
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="" value="জমির পরিমাণ" />
                        <div class="flex ml-8">
                            <div>
                                <InputLabel class="text-sm text-center" for="land_house" value="ভিটা(শতাঃ)" />
                                <TextInput
                                    id="land_house"
                                    v-model="form.land_house"
                                    type="number"
                                    class="mt-1 block w-full"
                                    required

                                    @focusout="autoSave"
                                    placeholder="ভিটা জমির পরিমাণ"
                                />
                                <InputError class="mt-2" :message="form.errors.land_house" />
                            </div>
                            <div>
                                <InputLabel class="text-sm text-center" for="land_cultivate" value="আবাদী(শতাঃ)" />
                                <TextInput
                                    id="land_cultivate"
                                    v-model="form.land_cultivate"
                                    type="number"
                                    class="mt-1 block w-full"
                                    required

                                    @focusout="autoSave"
                                    placeholder="আবাদী জমির পরিমাণ"
                                />
                                <InputError class="mt-2" :message="form.errors.land_cultivate" />
                            </div>
                        </div>
                    </div>


                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="" value="অবকাঠামোর ধরণ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.infrastructure" @focusout="autoSave" id="residential" name="infrastructure" type="radio" value="আবাসিক"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="residential"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">আবাসিক</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.infrastructure" @focusout="autoSave" id="business_area" name="infrastructure" type="radio" value="বানিজ্যিক"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="business_area"
                                    class="ml-2 text-md font-medium font-bold  dark:text-gray-300">বানিজ্যিক</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.infrastructure" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="form.submit_btn = 'return'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সংরক্ষণ
                        </PrimaryButton>
                        <PrimaryButton  @click="form.submit_btn = 'new'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সংরক্ষণ এবং নতুন
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
