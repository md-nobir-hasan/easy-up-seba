<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import {CheckIcon,ChevronDownIcon} from '@heroicons/vue/24/solid';
import printJS from 'print-js'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from '@headlessui/vue';

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
});


// form submit
// const submit = () => {
//     form.post(route('ajax.ekhana.vlevy'), {
//         onFinish: () => {
//             if(form.submit_btn != 'return'){
//                 form.reset();
//             }
//         }
//     });
// };
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
        axios.post(route('ajax.ekhana.vlevy'), form).then(res => {
            console.log(res);
            ekhana.value = res.data.village_levy;
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('khana fetch done');
        });
    }


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
    return nitem.name.includes(query.value)
    })

)

// }
// Print table
// const printTable = ()=>{
//     const printWindow = window.open('', '', 'height=600,width=1500');
//       printWindow.document.write('<html><head><title>Table Print</title>');
//       printWindow.document.write('</head><body>');
//       printWindow.document.write(document.querySelector('#table').innerHTML);
//       printWindow.document.write('</body></html>');
//       printWindow.document.close();
//       printWindow.print();

// }
const printTable = ()=>{
      printJS({
        printable: 'table',
        type: 'html',
        header: 'গ্রাম ভিত্তিক ধার্য',
        headerStyle: 'font-weight: bold; text-align:center;color:red;',
        style: 'font-size: 18px',
        maxWidth: 800,
        font: 'Open Sans',
        honorMarginPadding: true
      });
    }

</script>

<template>
    <AppLayout title="গ্রাম ভিত্তিক ধার্য">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">গ্রাম ভিত্তিক ধার্য</h2>
            </div>
            <div class="mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#008494db] text-[white] m-auto  rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm">

                    <!-- Word  -->
                    <div class="mb-2 flex items-center">
                        <label for="word_id" class="block min-w-[30%] text-md font-extrabold dark:text-white">ওয়ার্ড</label>
                        <select id="word_id" v-model="form.word_id" @change="villageFetching"
                        class="border text-[black]  min-w-[65%]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                            <option v-for="(word, key) in words" :value="word.id" :key="key">{{ word.name+'-'+word.union.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.word_id" />
                    </div>

                    <!-- Village (Live search by combobox) -->
                    <Combobox v-model="form.village_id">
                        <div class="flex">
                            <label for="f_year_id" class="block min-w-[30%] font-extrabold text-md dark:text-white">গ্রাম</label>
                            <div class="relative min-w-[65%]">
                                <ComboboxInput @change="query = $event.target.value" :displayValue="(nitem) => nitem.name" type="text" class="border text-[black] min-w-[100%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                <component :is="ChevronDownIcon" v-if="ChevronDownIcon" class="h-4  mr-1 absolute  right-[11px] top-[13px]"></component>
                            </div>
                        </div>
                        <div class="relative">
                            <ComboboxOptions class="absolute text-[black] p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg">
                                <ComboboxOption class="cursor-pointer" autocomplete="off"
                                    v-for="nitem in filteredsearch_items"
                                    :key="nitem.id"
                                    :value="nitem"
                                >
                                    {{ nitem.name }}
                                </ComboboxOption>
                                </ComboboxOptions>
                        </div>
                    </Combobox>

                     <!-- Type of organization  -->
                     <div class="mt-2 flex items-center">
                        <label for="infrastructure" class="block min-w-[30%] text-md font-extrabold dark:text-white">প্রতিষ্ঠানের ধরন</label>
                        <select id="infrastructure" v-model="form.infrastructure"
                        class="border  min-w-[65%] text-[black] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">প্রতিষ্ঠানের ধরন নির্বাচন করুন</option>
                            <option value="আবাসিক">আবাসিক</option>
                            <option value="বানিজ্যিক">বানিজ্যিক</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.infrastructure" />
                    </div>

                     <!-- financial year  -->
                     <div class="mt-2 flex items-center">
                        <label for="f_year_id" class="block min-w-[30%] text-md font-extrabold dark:text-white">অর্থ-বছর</label>
                        <select id="f_year_id" v-model="form.f_year_id"
                        class="border min-w-[65%] text-[black]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">অর্থ-বছর নির্বাচন করুন</option>
                            <option v-for="(f_year, key) in f_years" :value="f_year.id" :key="key">{{ f_year.from+'-'+f_year.to }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.f_year_id" />
                    </div>

                    <div class="flex items-center justify-center mt-8">
                        <button @click="ekhanaFetch" type="submit" class="text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >অনুসন্ধান</button>

                        <!-- <PrimaryButton @click="ekhanaFetch" class="font-extrabold" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সার্চ করুন
                        </PrimaryButton> -->
                    </div>
                </form>

            </div>

            <div v-if="ekhana.length>0">
                <button type="button" @click="printTable()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    তালিকা প্রিন্ট
                </button>
            </div>

            <div id="table">
                <table v-if="ekhana.length>0"  class="w-full text-md text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-md text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                হোল্ডিং নাম্বার
                            </th>
                            <th scope="col" class="px-6 py-3">
                            করদাতার নাম
                            </th>
                            <th scope="col" class="px-6 py-3">
                            বাৎসরিক আয়
                            </th>
                            <th scope="col" class="px-6 py-3">
                            পিতা/স্বামীর নাম
                            </th>
                            <th scope="col" class="px-6 py-3">
                            মাতার নাম
                            </th>
                            <th scope="col" class="px-6 py-3">
                            এনআইডি নাম
                            </th>
                            <th scope="col" class="px-6 py-3">
                                মোবাইল নাম্বার
                            </th>
                            <th scope="col" class="px-6 py-3">
                            গ্রামের নাম
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ওয়ার্ড নং
                            </th>
                            <th colspan="2" scope="col" class="">
                                সম্পদের বিবরন
                                <!-- <div class="flex items-center justify-between bg-[#1c09ffb5] rounded p-1 h-16">
                                    <h4 class="p-1 text-white">পাকা</h4>
                                    <h4 class="p-1 text-white">আধাপাকা</h4>
                                    <h4 class="p-1 text-white">কাঁচা</h4>
                                </div> -->
                            </th>
                            <th scope="col" class="px-6 py-3">
                                বাৎসরিক ভাড়ার পরিমাণ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                অর্থ-বছর
                            </th>
                            <th scope="col" class="px-6 py-3">
                            হাল করের পরিমাণ
                            </th>
                            <th scope="col" class="px-6 py-3">
                            বকেয়া করের পরিমাণ
                            </th>
                            <th scope="col" class="px-6 py-3">
                            সরোট করের পরিমাণ
                            </th>
                            <th scope="col" class="px-6 py-3">
                            স্বাক্ষর
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in ekhana" :key="key"
                            class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.holding_no  }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.bn_name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{new Intl.NumberFormat().format(value.yearly_income) }}/=
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.spouse_name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.mother_name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.nid }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.phone }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.vill_name}}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ value.w_name }}
                            </td>
                            <td colspan="2" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <!-- <div class="flex items-center justify-between">
                                    <p >{{ value.paka_house }}</p>
                                    <p >{{ value.adhapaka_house }}</p>
                                    <p >{{ value.kasa_house }}</p>
                                </div> -->
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ new Intl.NumberFormat().format(value.yearly_house_rent) }}/=
                            </td>

                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{value.fy_from+'-'+ value.fy_to }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)) }}/=
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)- value.tax_paid) }}/=
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)) }}/=
                            </td>
                            <td></td>
                            <!-- <td v-text="DateFormate(value.created_at)" class="px-6 py-4">

                            </td> -->
                            <!-- <td class="px-6 py-4">
                                {{ value.created_by ? value.created_by.name : ''}}
                            </td>
                            <td class="px-6 py-4 flex item-center justify-center" v-if="ncheck('edit') || ncheck('delete')">
                                <Link v-if="ncheck('edit')" :href="route('admin.tax.ekhana.edit', [value.id])"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-blue-800" viewBox="0 0 512 512">
                                    <path
                                        d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                        fill="blue" />
                                </svg>
                                </Link>

                                <button @click="deleting(value.id,'Ekhana')"  v-if="ncheck('delete')" class="font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-red" viewBox="0 0 448 512">
                                        <path
                                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                            fill="#d10606" />
                                    </svg>
                                </button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AppLayout>
</template>

<!-- <style>
@media print {
    /* hide all elements except for the table */
    body * {
      display: none;
    }
    #table {
      display: block;
      color: black;
    }
  }
</style> -->
