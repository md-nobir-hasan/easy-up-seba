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

let assign = {};
let f_total = 0
usePage().props.ekhana.house_struc.forEach(function(val,key){
    assign[val.hstru_id] = val.number;
    f_total+= val.price;
})
defineProps({
    ekhana: Object,
    words: Object,
    religions: Object,
    professions: Object,
    edqualis: Object,
    house_strucs: Object,
    villages: Object,
});

const form = useForm({
    word_id: usePage().props.auth.user.word_id,
    village_id: usePage().props.ekhana.village_id,
    holding_no: usePage().props.ekhana.holding_no,
    yearly_income: usePage().props.ekhana.yearly_income,
    bn_name: usePage().props.ekhana.bn_name,
    name: usePage().props.ekhana.name,
    ed_quali_id: usePage().props.ekhana.ed_quali_id,
    phone: usePage().props.ekhana.phone,
    spouse_name: usePage().props.ekhana.spouse_name,
    mother_name: usePage().props.ekhana.mother_name,
    m_male: usePage().props.ekhana.m_male,
    m_female: usePage().props.ekhana.m_female,
    m_child: usePage().props.ekhana.m_child,
    dob: usePage().props.ekhana.dob,
    birth_no: usePage().props.ekhana.birth_no,
    nid: usePage().props.ekhana.nid,
    gender: usePage().props.ekhana.gender,
    religion_id: usePage().props.ekhana.religion_id,
    profession_id: usePage().props.ekhana.profession_id,
    tuboil: usePage().props.ekhana.tuboil,
    toilet_type: usePage().props.ekhana.toilet_type,
    sc_past: usePage().props.ekhana.sc_past,
    sc_present: usePage().props.ekhana.sc_present,
    sc_future: usePage().props.ekhana.sc_future,
    house_struc_id: assign,
    paka_house: usePage().props.ekhana.paka_house,
    adhapaka_house: usePage().props.ekhana.adhapaka_house,
    kasa_house: usePage().props.ekhana.kasa_house,
    yearly_house_rent: usePage().props.ekhana.yearly_house_rent,
    rent_type: usePage().props.ekhana.rent_type,
    land_house: usePage().props.ekhana.land_house,
    land_cultivate: usePage().props.ekhana.land_cultivate,
    infrastructure: usePage().props.ekhana.infrastructure,
});

const vilages = ref([usePage().props.ekhana.village]);
console.log(vilages.value);
const vdisable = ref(false);
const villageFetching = ()=>{
    axios.get(route('ajax.fetch',['Village','word_id',form.word_id]), form).then(res => {
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
        console.log(res);
        let holding = usePage().props.auth.user.word.union.code.toString() + usePage().props.auth.user.word.code.toString()+'0000';
        console.log(holding);
        holding = Number(holding)+ res.data;
        form.holding_no = holding;
        console.log(holding);
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('Holding fetch done');
    });
}

const submit = () => {
    form.put(route('admin.ekhana.update',[usePage().props.ekhana.id]), {
        onFinish: () =>{
            console.log('Edit done');
        }
    });
};

</script>
<template>
    <AppLayout title="ই-খানা ডাটা ফর্ম">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">ই-খানা ডাটা আপডেট ফর্ম</h2>
                <Link :href="route('admin.ekhana.index')">
                <PrimaryButton class="font-extrabold">
                    ফিরে যান
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg">{{ errors }}</SucMesgShow>

                <form @submit.prevent="submit" class="p-2 text-2lg bg-[#11ff5999]">
                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="word_id" class="block text-md font-medium text-gray-900 dark:text-white">ওয়ার্ড</label>
                        <select id="word_id" v-model="form.word_id" @change="villageFetching" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <!-- <option selected value="">ওয়ার্ড নির্বাচন করুন</option> -->
                            <option :value="$page.props.auth.user.word_id">{{ $page.props.auth.user.word.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.word_id" />
                    </div>
                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="village_id" class="block text-md font-medium text-gray-900 dark:text-white">গ্রাম</label>
                        <select id="village_id" v-model="form.village_id" @change="holdingFetch" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">গ্রাম নির্বাচন করুন</option>
                            <option v-for="(val1, key) in villages" :value="val1.id">{{ val1.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.village_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="holding_no" value="হোল্ডিং নাম্বার" />
                        <TextInput
                            id="holding_no"
                            v-model="form.holding_no"
                            type="number"
                            class="mt-1 block w-full"
                            required

                            autocomplete="holding_no"
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

                            autocomplete="yearly_income"
                            placeholder="বাৎসরিক গড় আয় লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.yearly_income" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="bn_name" value="খানা প্রধানের নাম" />
                        <TextInput
                            id="bn_name"
                            v-model="form.bn_name"
                            type="text"
                            class="mt-1 block w-full"
                            required

                            autocomplete="bn_name"
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

                            autocomplete="name"
                            placeholder="Type Name in English"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="ed_quali_id" class="block text-md font-medium text-gray-900 dark:text-white">শিক্ষাগত যোগ্যতা</label>
                        <select id="ed_quali_id" v-model="form.ed_quali_id" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">শিক্ষাগত যোগ্যতা নির্বাচন করুন</option>
                            <option v-for="(pro, key) in edqualis" :value="pro.id">{{ pro.name }}</option>
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

                            autocomplete="phone"
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

                            autocomplete="spouse_name"
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

                            autocomplete="mother_name"
                            placeholder="মাতার নাম লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.mother_name" />
                    </div>


                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="member" value="সদস্য সংখ্যা" />
                        <div class="flex">
                            <div>
                                <InputLabel class="text-sm text-center text-slate-400" for="m_male" value="পুরুষ" />
                                <TextInput
                                    id="m_male"
                                    v-model="form.m_male"
                                    type="number"
                                    class="mt-1 block w-full"

                                    autocomplete="m_male"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.m_male" />
                            </div>
                            <div>
                                <InputLabel class="text-sm text-center text-slate-400" for="m_female" value="মহিলা" />
                                <TextInput
                                    id="m_female"
                                    v-model="form.m_female"
                                    type="number"
                                    class="mt-1 block w-full"

                                    autocomplete="m_female"
                                    placeholder="সংখ্যা"
                                />
                                <InputError class="mt-2" :message="form.errors.m_female" />
                            </div>
                            <div>
                                <InputLabel class="text-sm text-center text-slate-400" for="m_child" value="শিশু" />
                                <TextInput
                                    id="m_child"
                                    v-model="form.m_child"
                                    type="number"
                                    class="mt-1 block w-full"

                                    autocomplete="m_child"
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

                            autocomplete="dob"
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

                            autocomplete="birth_no"
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

                            autocomplete="nid"
                            placeholder="জাতীয় পরিচয় পত্র নাম্বার লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.nid" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="nid" value="খানা প্রধানের লিঙ্গ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.gender" id="male" name="gender" type="radio" value="পুরুষ"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="male"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">পুরুষ</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.gender" id="female" name="gender" type="radio" value="মহিলা"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="female"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">মহিলা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.gender" id="other" name="gender" type="radio" value="অন্যান্য"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="other"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">অন্যান্য</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.gender" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="religion_id" value="খানা প্রধানের ধর্ম" />
                        <div class="flex items-center">
                            <div v-for="(religion, rkey) in religions" class="flex items-center mb-4 ml-8">
                                <input v-model="form.religion_id" :id="religion+rkey" :value="religion.id" name="religion" type="radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="religion+rkey"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">{{religion.name}}</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.religion_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="profession_id" class="block text-md font-medium text-gray-900 dark:text-white">পেশা</label>
                        <select id="profession_id" v-model="form.profession_id" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">পেশা নির্বাচন করুন</option>
                            <option v-for="(p, key) in professions" :value="p.id">{{ p.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.profession_id" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="tuboil" value="নলকুপ আছে কিনা" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.tuboil" id="yes" name="tuboil" type="radio" value="1"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="yes"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">হ্যা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.tuboil" id="na" name="tuboil" type="radio" value="0"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="na"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">না</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.tuboil" />
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="toilet_type" value="পায়খানার ধরণ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.toilet_type" id="ripe" name="toilet_type" type="radio" value="পাকা"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="ripe"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">পাকা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.toilet_type" id="kasa" name="toilet_type" type="radio" value="কাঁচা"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="kasa"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">কাঁচা</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.toilet_type" id="nai" name="toilet_type" type="radio" value="নাই"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="nai"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">নাই</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.toilet_type" />
                    </div>

                    <div class="mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <label for="" class="block text-md font-medium text-gray-900 dark:text-white">সামাজিক সুবিধা</label>
                       <div class="ml-8">
                        <div class="mb-4">
                            <InputLabel for="sc_past" value="কি ধরনের সামাজিক সুরক্ষা সুবিধা অতীতে পেয়েছেন" />
                            <TextInput
                                id="sc_past"
                                v-model="form.sc_past"
                                type="text"
                                class="mt-1 block w-full"


                                autocomplete="sc_past"
                                placeholder="প্রযোয্য নয়"
                            />
                            <InputError class="mt-2" :message="form.errors.sc_past" />
                        </div>
                        <div class="mb-4">
                            <InputLabel for="sc_future" value="অন্যান্য কি ধরণের সুরক্ষা সুবিধা পাওয়ার যোগ্য" />
                            <TextInput
                                id="sc_future"
                                v-model="form.sc_future"
                                type="text"
                                class="mt-1 block w-full"


                                autocomplete="sc_future"
                                placeholder="প্রযোয্য নয়"
                            />
                            <InputError class="mt-2" :message="form.errors.sc_future" />
                        </div>
                        <div class="mb-4">
                            <InputLabel for="sc_present" value="বর্তমানে কি ধরনের স্মাজিক সুরক্ষা পাচ্ছেন" />
                            <TextInput
                                id="sc_present"
                                v-model="form.sc_present"
                                type="text"
                                class="mt-1 block w-full"


                                autocomplete="sc_present"
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

                            autocomplete="yearly_house_rent"
                            placeholder="আনুমানিক বাৎসরিক ভাড়ার পরিমান লিখুন"
                        />
                        <InputError class="mt-2" :message="form.errors.yearly_house_rent" />
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="" value="বসবাসের ধরণ" />
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.rent_type" id="self" name="rent_type" type="radio" value="নিজে বসবাস"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="self"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">নিজে বসবাস</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.rent_type" id="rent" name="rent_type" type="radio" value="ভাড়া দেওয়া"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="rent"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">ভাড়া দেওয়া</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.rent_type" id="both" name="rent_type" type="radio" value="উভয়"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="both"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">উভয়</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.rent_type" />
                    </div>

                    <div class="mb-4 mb-4 border-2 border-blue-800 p-4 border-dashed rounded">
                        <InputLabel for="" value="জমির পরিমাণ" />
                        <div class="flex ml-8">
                            <div>
                                <InputLabel class="text-sm text-center text-slate-400" for="land_house" value="ভিটা(শতাঃ)" />
                                <TextInput
                                    id="land_house"
                                    v-model="form.land_house"
                                    type="number"
                                    class="mt-1 block w-full"
                                    required

                                    autocomplete="land_house"
                                    placeholder="ভিটা জমির পরিমাণ"
                                />
                                <InputError class="mt-2" :message="form.errors.land_house" />
                            </div>
                            <div>
                                <InputLabel class="text-sm text-center text-slate-400" for="land_cultivate" value="আবাদী(শতাঃ)" />
                                <TextInput
                                    id="land_cultivate"
                                    v-model="form.land_cultivate"
                                    type="number"
                                    class="mt-1 block w-full"
                                    required

                                    autocomplete="land_cultivate"
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
                                <input v-model="form.infrastructure" id="residential" name="infrastructure" type="radio" value="আবাসিক"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="residential"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">আবাসিক</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.infrastructure" id="business_area" name="infrastructure" type="radio" value="বানিজ্যিক"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="business_area"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">বানিজ্যিক</label>
                            </div>
                        </div>
                        <InputError class="mt-2" :message="form.errors.infrastructure" />
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

