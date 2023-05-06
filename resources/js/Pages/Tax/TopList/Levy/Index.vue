<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import {CheckIcon,ChevronDownIcon} from '@heroicons/vue/24/solid';
import printJS from 'print-js'


const pro = defineProps({
    f_years: Object,
});
//Extrace user
const usr = usePage().props.auth.user;

const form = useForm({
    f_year_id: '',
});

//================  Language conversation =========================================
let en2bn = n => String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯" [d]);
// End Language conversation

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
//     form.post(route('ajax.ekhana.toplist.levy'), {
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
        return en2bn(da) + '/' + en2bn(month) + '/' + en2bn(year);
    }
    return date;
}
//Today date
    const date = new Date();
    const today = (date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear();


    const ekhana = ref({});
    const ekhanaFetch = ()=>{
        if(!form.f_year_id){
            eerr.value = 'অর্থ-বছর নির্বাচন করুন'
            return false;
        }
        console.log('i am form');
            console.log(form);
        axios.post(route('ajax.ekhana.toplist.levy'), form).then(res => {
            console.log(res);
            ekhana.value = res.data.toplist_levy;
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
        // header: 'গ্রাম ভিত্তিক ধার্য তালিকা',
        // headerStyle: 'font-weight: bolder; text-align:center; margin-bottom:15px;',
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
function totalTax(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.total_amount);
    });
    return sum;
}
function halBokeya(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += (Number(element.total_amount) - Number(element.paid_amount));
    });
    return sum;
}
function prevArrears(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.prev_arrears) ;
    });
    return sum;
}
function paidPrevArrears(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.paid_prev_arrears) ;
    });
    return sum;
}
function TotalPaid(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.paid_prev_arrears) + Number(element.paid_amount) ;
    });
    return sum;
}
function totalArrear(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.total_amount) + Number(element.prev_arrears) ;
    });
    return sum;
}
function percent(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.total_amount) + Number(element.prev_arrears) ;
    });
    return sum;
}

function taxPaid(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += Number(element.paid_amount);
    });
    return sum;
}

let total_village = 0;
let total_ekhana = 0;
let paid_khana = 0;
let total_year_levy = 0;
let year_levy_paid = 0;
let year_levy_unpaid = 0;
let prev_levy_unpaid = 0;
let prev_levy_paid = 0;
let total_paid = 0;
let total_arrears = 0;
let percentange = 0;
let total_num = 0;
// const prev_levy_unpaid = ref(0);
</script>

<template>
    <AppLayout title="দার্য/আদায় টপশীট">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">ওয়ার্ড ভিত্তিক দার্য/আদায় টপশীট</h2>
            </div>
            <div class="mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#008494db] text-[white] m-auto  rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm">
                     <!-- financial year  -->
                     <div class="mt-2 flex items-center">
                        <label for="f_year_id" class="block min-w-[30%] text-md font-extrabold dark:text-white">অর্থ-বছর</label>
                        <select @change="fYear" id="f_year_id" v-model="form.f_year_id"
                        class="border min-w-[65%] text-[black]  border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">অর্থ-বছর নির্বাচন করুন</option>
                            <option v-for="(f_year, key) in f_years" :value="f_year.id" :key="key">{{ en2bn(f_year.from)+'-'+en2bn(f_year.to) }}</option>
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
                <div>
                    <h4 class="bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div">{{ en2bn($page.props.auth.user.word.name)+' নং '+$page.props.auth.user.word.union.name}}</h4>
                </div>
                <table id="my-table" class="text-center">
                    <caption class="bg-[yellow] p-[8px] font-extrabold text-[20px] text-center">ওয়ার্ড ভিত্তিক ধার্য কর ও আদায়ের টপশীট-({{ year_range }})</caption>
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
                        <td >  {{ en2bn(value.name)  }}</td>
                        <td :data-val="total_village += value.village.length ">{{  en2bn(value.village.length) }}</td>
                        <td :data-val="total_ekhana += value.ekhana.length ">{{ en2bn(value.ekhana.length) }}</td>
                        <td :data-val="paid_khana += value.house_tax_paid.length ">{{ en2bn(value.house_tax_paid.length) }}</td>

                        <td :data-val="total_year_levy += totalTax(value.house_tax) ">
                            {{ en2bn(totalTax(value.house_tax)) }}

                        </td>
                        <td :data-val="year_levy_paid += taxPaid(value.house_tax)">
                            {{en2bn(taxPaid(value.house_tax)) }}
                        </td>
                        <td :data-val="year_levy_unpaid += halBokeya(value.house_tax)">
                            {{en2bn(halBokeya(value.house_tax)) }}
                        </td>
                        <td :data-val="prev_levy_unpaid += prevArrears(value.house_tax)">
                            {{en2bn(prevArrears(value.house_tax)) }}
                        </td>
                        <td :data-val="prev_levy_paid += paidPrevArrears(value.house_tax)">
                            {{en2bn(paidPrevArrears(value.house_tax)) }}
                        </td>
                        <td :data-val="total_paid += taxPaid(value.house_tax)+Number(paidPrevArrears(value.house_tax))">
                            {{ en2bn(taxPaid(value.house_tax)+Number(paidPrevArrears(value.house_tax))) }}
                        </td>
                        <td :data-val="total_arrears += totalArrear(value.house_tax) ">
                            {{ en2bn(totalArrear(value.house_tax)) }}
                        </td>
                        <td >{{ year_range }}</td>
                        <td >
                            <span v-if="value.house_tax.length" :data-value="total_num += 1" :data-val="percentange +=  Number((taxPaid(value.house_tax))+ Number(paidPrevArrears(value.house_tax)))/ (Number(totalTax(value.house_tax)) + Number(prevArrears(value.house_tax)))">
                                {{  en2bn(Number((taxPaid(value.house_tax))+Number(paidPrevArrears(value.house_tax)))/ (Number(totalTax(value.house_tax)) + Number(prevArrears(value.house_tax)))*100) }}
                            </span>
                            <span v-else >০</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>সর্বমোট</th>
                            <th>{{en2bn(total_village)}}</th>
                            <th>{{en2bn(total_ekhana)}}</th>
                            <th>{{en2bn(paid_khana)}}</th>
                            <th>{{en2bn(total_year_levy)}}</th>
                            <th>{{en2bn(year_levy_paid)}}</th>
                            <th>{{en2bn(year_levy_unpaid)}}</th>
                            <th>{{en2bn(prev_levy_paid)}}</th>
                            <th>{{en2bn(prev_levy_unpaid)}}</th>
                            <th>{{en2bn(year_levy_paid + prev_levy_paid)}}</th>
                            <th>{{en2bn(year_levy_unpaid+prev_levy_unpaid)}}</th>
                            <th>=>></th>
                            <th>{{en2bn(percentange/total_num*100)}}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div v-if="ekhana.length>0" class="pt-[25px] text-center">
                <table id="my-table" class="text-center m-auto" style="width:60%">
                    <caption class="bg-[#030b59bd] text-white p-[8px] font-extrabold text-[20px] text-center h1div">চলিত অর্থ-বছরের সমস্ত আদায়ের সমষ্টি</caption>
                    <thead>
                      <tr>
                        <th>হাল আদায়</th>
                        <th>বকেয়া আদায়</th>
                        <th>সর্বমোট আদায় (হাল আদায় + বকেয়া আদায়)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td > {{ en2bn(year_levy_paid) }}</td>
                        <td >{{ en2bn(prev_levy_paid) }}</td>
                        <td >{{ en2bn(year_levy_paid + prev_levy_paid) }}</td>

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
