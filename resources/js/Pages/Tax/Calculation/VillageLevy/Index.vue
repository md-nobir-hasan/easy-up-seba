<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import {CheckIcon,ChevronDownIcon} from '@heroicons/vue/24/solid';
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from '@headlessui/vue'
const pro = defineProps({
    f_years: Object,
    words: Object,
    tax: Object,
    vilgs: Object,
});
//Extrace user
const usr = usePage().props.auth.user;

//Today date
    const date = new Date();
    const today = (date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear();

const form = useForm({
    f_year_id: '',
    word_id: usr.word_id,
    village_id: '',
    infrastructure: '',
    fine: 0,
    deposite_date: null,
    id:0,
});

const form2 = useForm({
    phone: '',
    bn_name: '',
    spouse_name: '',
    mother_name: '',
    id:0,
});

//========= frontend validation ============
const permisions = ref({});
const user = usePage().props.auth.user;
usePage().props.permissions.forEach(function(val,key){
    if(val.module.name == 'E-Khana' && val.role_id == user.role_id){
        permisions.value = val;
    }
})

const ncheck = (ased) =>{
    if(permisions.value){
        if(permisions.value[ased]){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
//============ end frontend validation ============

function DateFormate(date) {
    if (date) {
        const d = new Date(date);
        let da = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        return da + '/' + month + '/' + year;
    }
    return date;
}

    const htdeposite = ref(null);
    const eerr = ref('');
    const eerr2 = ref('');
    const ekhana = ref({});
    const deposite_date = ref(null);

    const ekhanaFetch = ()=>{
        if(!form.f_year_id){
            eerr.value = 'অর্থ-বছর নির্বাচন করুন'
            return false;
        }
        if(!form.village_id){
            eerr2.value = 'হল্ডিং নাম্বার নির্বাচন করুন'
            return false;
        }
        console.log('i am form');
            console.log(form);
        axios.post(route('ajax.ekhana.fetch'), form).then(res => {
            // ekhana.value = res.data.ekhana;
            // htdeposite.value = res.data.ht_deposite;
            // form.paid_amount = Math.round(res.data.ht_deposite.total_amount - (res.data.ht_deposite.paid_amount >0 ? res.data.ht_deposite.paid_amount : 0));
            // form.arrears = form.paid_amount;
            // form.fine = Math.round(res.data.ht_deposite.fine ?? 0);
            // form.id = res.data.ht_deposite.id ?? 0;
            // deposite_date.value = res.data.ht_deposite.deposite_date;
            // form2.id = res.data.ekhana.id;
            // form2.bn_name = res.data.ekhana.bn_name;
            // form2.spouse_name = res.data.ekhana.spouse_name;
            // form2.mother_name = res.data.ekhana.mother_name;
            // form2.phone = res.data.ekhana.phone;
            // console.log(res);
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('khana fetch done');
        });
    }


    const submitTax =()=>{
        // if(!form.deposite_date){
        //     alert('জমার তারিখ নির্বাচন করুন');
        //     return false;
        // }
        // axios.post(route('ajax.update',['HouseTaxDeposite']), form).then(res => {
        //     htdeposite.value = res.data;
        //     console.log(res);
        //     alert('সফলভাবে কর জমা হয়েছে');
        // }).catch(err =>{
        //     console.error(err)
        // }).finally(() => {
        //     console.log('House Tax Deposite Store Done');
        // });
    }
//Delele funciton for deleting data
    function deleting(id,modal){
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(route('admin.single.delete.fetch',[id,modal])).then(res => {
                    ekhana.value = res.data;

                    Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                }).catch(err =>{
                    console.error(err)
                }).finally(() => {
                    console.log('deleted');
                });
            }
        })
    }
//End deleting

// Village fetching
const search_items = ref(pro.vilgs);
const vdisable = ref(false);
const villageFetching = ()=>{

    axios.get(route('ajax.fetch',['Village','word_id',form.word_id]), form).then(res => {
        console.log(res);
        search_items.value = res.data;
        console.log(search_items.value)
        if(search_items.value.length == 0){
            vdisable.value = true;
            search_items.value = {};
        }else{
            vdisable.value = false;
        }
    }).catch(err =>{
        vdisable.value = true;
            search_items.value = {};
        console.error(err)
    }).finally(() => {
        console.log('Village fetch done');
    });
}

// Live search combobox headless ui
// const livesearch = (sitem) =>{
    console.dir(search_items)
    const query = ref('')
    const filteredsearch_items = computed(() =>
    query.value === ''
    ? search_items.value
    : search_items.value.filter((nitem) => {
        console.log(nitem.name);
    return nitem.name.includes(query.value)
    })

)

// }

</script>

<template>
    <AppLayout title="গ্রাম ভিত্তিক ধার্য">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">গ্রাম ভিত্তিক ধার্য</h2>
            </div>
            <div class="mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#11ff5999] m-auto  rounded-lg p-6 text-2lg max-w-md max-sm:max-w-sm">

                    <!-- Word  -->
                    <div class="mb-2 flex items-center">
                        <label for="word_id" class="block min-w-[30%] text-md font-medium text-[blue] dark:text-white">ওয়ার্ড</label>
                        <select id="word_id" v-model="form.word_id" @change="villageFetching"
                        class="border  min-w-[65%]  border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                            <option v-for="(word, key) in words" :value="word.id" :key="key">{{ word.name+'-'+word.union.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.word_id" />
                    </div>

                    <!-- Village (Live search by combobox) -->
                    <Combobox v-model="form.village_id">
                        <div class="flex">
                            <label for="f_year_id" class="block min-w-[30%] text-md font-medium text-[blue] dark:text-white">গ্রাম</label>
                            <div class="relative min-w-[65%]">
                                <ComboboxInput @change="query = $event.target.value" :displayValue="(nitem) => nitem.name" type="text" class="border  min-w-[100%] border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                <component :is="ChevronDownIcon" v-if="ChevronDownIcon" class="h-4 mr-1 absolute  right-[11px] top-[13px]"></component>
                            </div>
                        </div>
                        <div class="relative">
                            <ComboboxOptions class="absolute p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg">
                                <ComboboxOption class="cursor-pointer" autocomplete="off"
                                    v-for="nitem in filteredsearch_items"
                                    :key="nitem.id"
                                    :value="nitem.name"
                                >
                                    {{ nitem.name }}
                                </ComboboxOption>
                                </ComboboxOptions>
                        </div>
                    </Combobox>

                     <!-- Type of organization  -->
                     <div class="mt-2 flex items-center">
                        <label for="infrastructure" class="block min-w-[30%] text-md font-medium text-[blue] dark:text-white">প্রতিষ্ঠানের ধরন</label>
                        <select id="infrastructure" v-model="form.infrastructure"
                        class="border  min-w-[65%]  border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">প্রতিষ্ঠানের ধরন নির্বাচন করুন</option>
                            <option value="আবাসিক">আবাসিক</option>
                            <option value="বানিজ্যিক">বানিজ্যিক</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.infrastructure" />
                    </div>

                     <!-- financial year  -->
                     <div class="mt-2 flex items-center">
                        <label for="f_year_id" class="block min-w-[30%] text-md font-medium text-[blue] dark:text-white">অর্থ-বছর</label>
                        <select id="f_year_id" v-model="form.f_year_id"
                        class="border min-w-[65%]  border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">অর্থ-বছর নির্বাচন করুন</option>
                            <option v-for="(f_year, key) in f_years" :value="f_year.id" :key="key">{{ f_year.from+'-'+f_year.to }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.f_year_id" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="ekhanaFetch" class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সার্চ করুন
                        </PrimaryButton>
                    </div>
                </form>

            </div>

            <!-- -->
            <!-- <div class="lg:flex justify-center bg-white items-center mt-4 pt-4">
                <table class="border-collapse mb-4 border border-slate-400 text-center text-md text-left text-gray-500 dark:text-gray-400 rounded-lg m-auto">
                    <thead class="text-md text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th colspan="2" class="border border-slate-300 px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">খান তথ্য</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                                গ্রাম
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.name  }}
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            করদাতার নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.bn_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            বাৎসরিক আয়
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{new Intl.NumberFormat().format(ekhana.yearly_income) }}/=
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            পিতা/স্বামীর নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.spouse_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            মাতার নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.mother_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            এনআইডি নাম
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.nid }}
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                                মোবাইল নাম্বার
                            </th>
                            <td scope="row"
                                class="border border-slate-300 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.phone" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            গ্রামের নাম
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.village ? ekhana.village.name : '' }}
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                                ওয়ার্ড নং
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.word ? ekhana.word.name : '' }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="">
                        <tr>
                            <th colspan="2" v-if="!edit" @click="edit = true"
                                >
                                <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">হালনাগাদ</button>
                            </th>
                            <th colspan="2" v-else
                                class="text-center">
                                <button type="button" @click="ekhanaUpdate" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                                :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                >আপডেট</button>


                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div> -->
        </div>
    </AppLayout>
</template>
