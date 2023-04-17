<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import printJS from 'print-js';

const pro = defineProps({
    f_years: Object,
    words: Object,
});

//Extrace user
const usr = usePage().props.auth.user;
const form = useForm({
    f_year_id: '',
    word_id: '',
    from_date: '',
    to_date: '',
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
    const ekhanaFetch = ()=>{
        if(!form.f_year_id){
            eerr.value = 'অর্থ-বছর নির্বাচন করুন';
            return false;
        }
        axios.post(route('ajax.ekhana.toplist.daily.posting'), form).then(res => {
            ekhana.value = res.data.dailypost;
            console.log(res.data)
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
let prev_levy_unpaid = 0;
let prev_levy_paid = 0;
let total_paid = 0;
// const prev_levy_unpaid = ref(0);
</script>

<template>
    <AppLayout title="ডেইলি পোষ্টিং">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">ওয়ার্ড ভিত্তিক ডেইলি পোষ্টিং</h2>
            </div>
            <div class="mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#008494db] text-[white] m-auto  rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm">
                    <!-- Word  -->
                    <div class="mb-2 flex items-center">
                        <label for="word_id" class="block min-w-[30%] text-md font-extrabold dark:text-white">ওয়ার্ড</label>
                        <select id="word_id" v-model="form.word_id"
                        class="border text-[black]  min-w-[65%]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                            <option v-for="(word, key) in words" :value="word.id" :key="key">{{ word.name+'-'+word.union.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.word_id" />
                    </div>
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
                        <label for="f_year_id" class="block min-w-[30%] text-md font-extrabold dark:text-white">তারিখ</label>
                        <div class="flex min-w-[65%]">
                            <input v-model="form.from_date" type="date"  class="border mr-2 text-[black]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <input v-model="form.to_date" type="date" class="border text-[black]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>


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
                <div>
                    <h4 class="bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div">{{ $page.props.auth.user.word.name+' নং '+$page.props.auth.user.word.union.name}}</h4>
                </div>
                <table id="my-table" class="text-center">
                    <caption class="bg-[yellow] p-[8px] font-extrabold text-[20px] text-center">গ্রাম ভিত্তিক ধার্য কর ও আদায়ের টপশীট-({{ year_range }}) - ({{ year_range }})</caption>
                    <thead>
                      <tr>
                        <th>ওয়ার্ড নাম্বার</th>
                        <th>গ্রামের সংখ্যা</th>
                        <th>খানার সংখ্যা</th>
                        <th>আদায়কৃত খানার সংখ্যা </th>
                        <th>হাল ধার্য্য কর</th>
                        <th>হাল আদায়</th>
                        <th>হাল বকেয়া</th>
                        <th>পূর্বের বকেয়া </th>
                        <th>বকেয়া আদায় </th>
                        <th>সর্বমোট আদায় </th>
                        <th>সর্বমোট বকেয়া (হাল বকেয়া + পূর্বের বকেয়া)</th>
                        <th>অর্থ-বছর</th>
                        <th>আদায়ের শতকরা হার</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(value, key) in ekhana" :key="key">
                        <td :data-val="total_num = key +1">  {{ value.name  }}</td>
                        <td :data-val="total_village += value.village.length ">{{  value.village.length }}</td>
                        <td :data-val="total_ekhana += value.ekhana.length ">{{ value.ekhana.length }}</td>
                        <td :data-val="paid_khana += value.house_tax_paid.length ">{{ value.house_tax_paid.length }}</td>
                        <td :data-val="total_year_levy += totalSum(value.house_tax) ">{{ totalSum(value.house_tax) }}</td>
                        <td :data-val="year_levy_paid += paidSum(value.house_tax_paid)">{{paidSum(value.house_tax_paid) }}</td>
                        <td :data-val="year_levy_unpaid += totalSum(value.house_tax_unpaid)">{{totalSum(value.house_tax_unpaid) }}</td>
                        <td :data-val="prev_levy_unpaid += totalSum(value.prev_tax_unpaid)">{{totalSum(value.prev_tax_unpaid) }}</td>
                        <td :data-val="prev_levy_paid += paidSum(value.prev_tax_paid)">{{paidSum(value.prev_tax_paid) }}</td>
                        <td :data-val="total_paid += paidSum(value.house_tax_paid)">{{ paidSum(value.house_tax_paid) }}</td>
                        <td :data-val="total_arrears += totalSum(value.house_tax_unpaid) ">{{ totalSum(value.house_tax_unpaid) }}</td>
                        <td >{{ year_range }}</td>
                        <td :data-val="percentange +=  paidSum(value.house_tax_paid)/paidSum(value.house_tax_paid) ? paidSum(value.house_tax_paid)/paidSum(value.house_tax_paid)*100 : 100">{{ paidSum(value.house_tax_paid)/paidSum(value.house_tax_paid) ? paidSum(value.house_tax_paid)/paidSum(value.house_tax_paid)*100 : 100 }}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>সর্বমোট</th>
                            <th>{{total_village}}</th>
                            <th>{{total_ekhana}}</th>
                            <th>{{paid_khana}}</th>
                            <th>{{total_year_levy}}</th>
                            <th>{{year_levy_paid}}</th>
                            <th>{{year_levy_unpaid}}</th>
                            <th>{{prev_levy_paid}}</th>
                            <th>{{prev_levy_unpaid}}</th>
                            <th>{{year_levy_paid + prev_levy_paid}}</th>
                            <th>{{year_levy_unpaid+prev_levy_unpaid}}</th>
                            <th>=>></th>
                            <th>{{percentange/total_num}}</th>
                        </tr>
                    </tfoot>
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
