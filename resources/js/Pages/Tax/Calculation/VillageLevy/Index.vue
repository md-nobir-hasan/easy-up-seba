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
        header: 'গ্রাম ভিত্তিক ধার্য তালিকা',
        headerStyle: 'font-weight: bolder; text-align:center; margin-bottom:15px;',
        style: '#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; }',
        maxWidth: 800,
        font: 'Open Sans',
        honorMarginPadding: true,
      });
    }
    const table2excel = new Table2Excel();
const exportExcel = ()=>{
     table2excel.export(document.querySelectorAll("#my-table"));
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
                    </div>
                </form>

            </div>

            <div v-if="ekhana.length>0">
                <button type="button" @click="printTable()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    তালিকা প্রিন্ট
                </button>
                <button type="button" @click="exportExcel()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Excel
                </button>
            </div>

            <div id="table" v-if="ekhana.length>0">
                <!-- <div>
                    <h1>গ্রাম ভিত্তিক ধার্য তালিকা</h1>
                </div> -->
                <table id="my-table" class="text-center">
                    <thead>
                      <tr>
                        <th rowspan="2">হোল্ডিং নাম্বার</th>
                        <th rowspan="2">করদাতার নাম</th>
                        <th rowspan="2">বাৎসরিক আয়</th>
                        <th rowspan="2"> পিতা/স্বামীর নাম</th>
                        <th rowspan="2">মাতার নাম</th>
                        <th rowspan="2"> এনআইডি নাম</th>
                        <th rowspan="2">মোবাইল নাম্বার</th>
                        <th rowspan="2">গ্রামের নাম</th>
                        <th rowspan="2">ওয়ার্ড নং</th>
                        <th colspan="3">সম্পদের বিবরন</th>
                        <th rowspan="2">বাৎসরিক ভাড়ার পরিমাণ</th>
                        <th rowspan="2">অর্থ-বছর</th>
                        <th rowspan="2">হাল করের পরিমাণ</th>
                        <th rowspan="2">বকেয়া করের পরিমাণ</th>
                        <th rowspan="2">সরোট করের পরিমাণ</th>
                        <!-- <th rowspan="2">স্বাক্ষর</th> -->
                      </tr>
                      <tr>
                        <th>পাকা</th>
                        <th>আধাপাকা</th>
                        <th>কাঁচা</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(value, key) in ekhana" :key="key">
                        <td>  {{ value.holding_no  }}</td>
                        <td>{{ value.bn_name }}</td>
                        <td>{{new Intl.NumberFormat().format(value.yearly_income) }}/=</td>
                        <td>{{ value.spouse_name }}</td>
                        <td>{{ value.mother_name }}</td>
                        <td>{{ value.nid }}</td>
                        <td>{{ value.phone }}</td>
                        <td>{{ value.vill_name }}</td>
                        <td>{{ value.w_name }}</td>
                        <td>{{ value.paka_house }}</td>
                        <td>{{ value.adhapaka_house }}</td>
                        <td>{{ value.kasa_house }}</td>
                        <td>{{ new Intl.NumberFormat().format(value.yearly_house_rent) }}/=</td>
                        <td> {{value.fy_from+'-'+ value.fy_to }}</td>
                        <td> {{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)) }}/=</td>
                        <td>{{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)- value.tax_paid) }}/=</td>
                        <td> {{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)) }}/=</td>
                        <!-- <td></td> -->
                      </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </AppLayout>
</template>

<style>
/* CSS styles for table */
#my-table {
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  #my-table th {
    background-color: #76ffa1;
    color: #444;
    font-weight: bold;
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
    text-align: center;
  }

  #my-table td {
    background-color: #fff;
    color: #444;
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
    text-align: center;
  }

  #my-table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  h1{
    text-align: center;
    color: green;
}

  @media print {
    /* add your print-specific styles here */
    body {
      font-size: 12pt;
      color: #000000;
      background-color: #ffffff;
    }
    h1{
        text-align: center;
        color: green;
    }
  }

</style>
