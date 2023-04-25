<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import printJS from 'print-js';
import {CheckIcon,ChevronDownIcon} from '@heroicons/vue/24/solid';
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from '@headlessui/vue';

const pro = defineProps({
    f_years: Object,
    words: Object,
    ekhanas: Object,
});

//Extrace user
const usr = usePage().props.auth.user;
const form = useForm({
    f_year_id: '',
    date: '',
    holding_no: ref(pro.ekhanas[0]),
});

//========= frontend validation ============
const permisions = ref({});
const user = usePage().props.auth.user;
usePage().props.permissions.forEach(function(val,key){
    if(val.module.name == 'E-Khana' && val.role_id == user.role_id){
        permisions.value = val;
    }
});

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

// form submit
// const submit = () => {
//     form.post(route('ajax.ekhana.toplist.daily.posting'), {
//         onFinish: () => {
//             if(form.submit_btn != 'return'){
//                 form.reset();
//             }
//         }
//     });
// };

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
//Today date
    const date = new Date();
    const today = (date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear();


    const ekhana = ref({});
    const data_check = ref(false);
    const ekhanaFetch = ()=>{
        if(!form.f_year_id){
            eerr.value = 'অর্থ-বছর নির্বাচন করুন';
            return false;
        }
        axios.post(route('ajax.ekhana.toplist.daily.posting'), form).then(res => {
            ekhana.value = res.data.dailypost;
            console.log(ekhana.value)
            if(ekhana.value.house_tax){
                console.log(ekhana.value.house_tax)
                if(ekhana.value.house_tax.length < 1){
                    data_check.value = true;
                }else{
                    data_check.value = false;
                }
            }

        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('khana fetch done');
        });
    }




const year_range = ref(null);
const fYear = () =>{
    let elememt = document.getElementById('f_year_id');
    let index = elememt.selectedIndex;
    let text = elememt.options[index].text;
    year_range.value = text;

}
const printTable = ()=>{
      printJS({
        printable: 'table',
        type: 'html',
        style: '#my-table { border-collapse: collapse; width: 100%; font-size: 14px;margin-top:20px } #my-table th { background-color: #f2f2f2; color: #444; font-weight: bold; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table td { background-color: #fff; color: #444; padding: 2px; text-align: left; border: 1px solid #ddd; } #my-table tbody tr:nth-child(even) { background-color: #f2f2f2; } .h1div{font-size:40px !important; font-weight:bolder; text-align:center; margin-top:20px !important}',
        maxWidth: 800,
        font: 'Open Sans',
        honorMarginPadding: true,
      });
    }
    const table2excel = new Table2Excel();
const exportExcel = ()=>{
     table2excel.export(document.querySelectorAll("#my-table"));
}
function totalSum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.total_amount);
    });
    return sum;
}

function paidSum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.paid_amount);
    });
    return sum;
}
let year_levy_paid = 0;
let arrear_paid = 0;
let total_paid = 0;
// const prev_levy_unpaid = ref(0);

// Live search combobox headless ui
const search_items = ref(pro.ekhanas);
    const query = ref('');
    const filteredsearch_items = computed(() =>
    query.value === ''
    ? search_items.value
    : search_items.value.filter((nitem) => {
    return nitem.holding_no.includes(query.value);
    })

)
// const sweetsuc = ()=>{
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: usePage().props.flash.message,
//         showConfirmButton: false,
//         timer: 1500
//     })
// }
if(usePage().props.flash.message){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: usePage().props.flash.message,
        showConfirmButton: false,
        timer: 1500
    })
}

</script>

<template>
    <AppLayout title="সিঙ্গেল বিল প্রিন্ট">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">সিঙ্গেল বিল প্রিন্ট</h2>
            </div>
            <!-- <button @click="sweetsuc">sldfjsdkf</button> -->
            <div class="mt-4 mb-2 p-4 bg-white">
                <form :action="route('admin.tax.bill.print.single.show')" method="GET" target="_blank" class="bg-[#008494db] text-[white] m-auto  rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm">

                    <!-- Holding Number (Live search by combobox) -->
                    <Combobox v-model="form.holding_no">
                        <div class="flex">
                            <label for="" class="block min-w-[30%] font-extrabold text-md dark:text-white">হোল্ডিং নম্বর</label>
                            <div class="relative min-w-[65%]">
                                <ComboboxInput @change="query = $event.target.value" :displayValue="(nitem) => nitem.holding_no" type="text"
                                class="border text-[black] min-w-[100%] border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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
                                    {{ nitem.holding_no }}
                                </ComboboxOption>
                                </ComboboxOptions>
                        </div>
                    </Combobox>
                     <!-- financial year  -->
                     <div class="mt-2 flex items-center">
                        <label for="f_year_id" class="block min-w-[30%] text-md font-extrabold dark:text-white">অর্থ-বছর</label>
                        <select @change="fYear" id="f_year_id" v-model="form.f_year_id"
                        class="border min-w-[65%] text-[black]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">অর্থ-বছর নির্বাচন করুন</option>
                            <option v-for="(f_year, key) in f_years" :value="f_year.id" :key="key">{{ f_year.from+'-'+f_year.to }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.f_year_id" />
                    </div>

                    <!-- Date  -->
                    <div class="mt-2 flex items-center">
                        <label for="date" class="block min-w-[30%] text-md font-extrabold dark:text-white">জমার তারিখ</label>
                        <input v-model="form.date" type="date"  class="border min-w-[65%] mr-2 text-[black]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.date" />
                    </div>
                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                    <input type="hidden" name="ekhana_id" :value="form.holding_no.id">
                    <input type="hidden" name="deposite_date" :value="form.date">

                    <div class="flex items-center justify-center mt-8">
                        <button target="nobir" type="submit" class="text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >অনুসন্ধান</button>
                    </div>
                </form>

            </div>
            <div v-if="ekhana.house_tax">
                <div v-if="ekhana.house_tax.length>0">
                    <button type="button" @click="printTable()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        তালিকা প্রিন্ট
                    </button>
                    <button type="button" @click="exportExcel()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Excel
                    </button>
                </div>
            </div>

            <div v-if="ekhana.house_tax">
                <div id="table" v-if="ekhana.house_tax.length>0">
                    <div>
                        <h4 class="bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div">{{ $page.props.auth.user.word.name+' নং '+$page.props.auth.user.word.union.name}}</h4>
                    </div>
                    <table id="my-table" class="text-center">
                        <caption class="bg-[yellow] p-[8px] font-extrabold text-[20px] text-center">ডেইলি পোষ্টিং-({{ year_range }})</caption>
                        <thead>
                        <tr>
                            <th>ক্রমিক নাম্বার</th>
                            <th>হোল্ডিং নাম্বার</th>
                            <th>করদাতার নাম</th>
                            <th>অর্থ-বছর </th>
                            <th>আদায়ের তারিখ</th>
                            <th>ওয়ার্ড নং</th>
                            <th>গ্রামের নাম</th>
                            <th>হাল আদায়</th>
                            <th>বকেয়া আদায়</th>
                            <th>সর্বমোট আদায় </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(value, key) in ekhana.house_tax" :key="key">
                            <td>{{ key+1 }}</td>
                            <td>{{ value.ekhana.holding_no }}</td>
                            <td>{{ value.ekhana.bn_name }}</td>
                            <td >{{ year_range }}</td>
                            <td>{{ value.deposite_date }}</td>
                            <td>{{ value.ekhana.word.name }}</td>
                            <td>{{ value.ekhana.village.name }}</td>
                            <td :data-val="year_levy_paid += Number(value.paid_amount)">{{value.paid_amount }}</td>
                            <td :data-val="arrear_paid += 0">{{0 }}</td>
                            <td >{{ year_levy_paid + arrear_paid }}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>সর্বমোট</th>
                                <th>{{year_levy_paid}}</th>
                                <th>{{arrear_paid}}</th>
                                <th>{{year_levy_paid + arrear_paid}}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div v-if="data_check">
                <p class="text-center text-[red]"> কোনো তথ্য পাওয়া যায় নাই</p>
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
        background-color: #49e5ff;
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
