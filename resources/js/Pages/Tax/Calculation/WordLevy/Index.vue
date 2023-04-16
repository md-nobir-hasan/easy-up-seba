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

const year_range = ref(null);
const fYear = () =>{
    let elememt = document.getElementById('f_year_id');
    let index = elememt.selectedIndex;
    let text = elememt.options[index].text;
    year_range.value = text;

}
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

</script>

<template>
    <AppLayout title="ওয়ার্ড ভিত্তিক ধার্য">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">ওয়ার্ড ভিত্তিক ধার্য</h2>
            </div>
            <div class="mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#008494db] text-[white] m-auto  rounded-lg p-6 pb-[2px] text-2lg max-w-md max-sm:max-w-sm">

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

                    <div class="flex items-center justify-center mt-8">
                        <button @click="ekhanaFetch" type="submit" class="text-white text-[18px] font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >অনুসন্ধান</button>
                    </div>
                </form>

            </div>
            <div v-if="ekhana.house_tax">

                <div >
                    <button type="button" @click="printTable()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        তালিকা প্রিন্ট
                    </button>
                    <button type="button" @click="exportExcel()" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Excel
                    </button>
                </div>
            </div>

            <div v-if="ekhana.house_tax">
                <div id="table">
                <div>
                    <h4 class="bg-[#f73532c2] text-white block p-[8px] font-extrabold text-[20px] text-center h1div">{{ $page.props.auth.user.word.name+' নং '+$page.props.auth.user.word.union.name}}</h4>
                </div>
                <table id="my-table" class="text-center">
                    <caption class="bg-[yellow] p-[8px] font-extrabold text-[20px] text-center">ডেইলি পোষ্টিং রিপোট কুয়েরী প্রিন্ট - ({{ year_range }}) - ({{ year_range }})</caption>
                    <thead>
                      <tr>
                        <th>ক্রমিক নম্বর</th>
                        <th>হোল্ডিং নাম্বার</th>
                        <th>করদাতার নাম</th>
                        <th>অর্থ-বছর </th>
                        <th>আদায়ের তারিখ</th>
                        <th>ওয়ার্ড নং</th>
                        <th>গ্রামের নাম</th>
                        <th>হাল আদায়</th>
                        <th>বকেয়া আদায় </th>
                        <th>সর্বমোট আদায় </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(value, key) in ekhana.house_tax" :key="key">
                        <td>  {{ key+1  }}</td>
                        <td >  {{ value.ekhana.holding_no  }}</td>
                        <td >  {{ value.ekhana.bn_name  }}</td>
                        <td >{{ year_range }}</td>
                        <td v-text="DateFormate(value.deposite_date)"></td>
                        <td >  {{ ekhana.name  }}</td>
                        <td >  {{ value.ekhana.village.name  }}</td>
                        <td :data-val="prev_levy_paid += Number(value.paid_amount)">  {{ value.paid_amount  }}</td>
                        <td :data-val="prev_levy_unpaid += value.total_amount - value.paid_amount ">  {{ value.total_amount - value.paid_amount }}</td>
                        <td :data-val="total_paid += Number(value.paid_amount)">  {{ value.paid_amount  }}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>সর্বমোট</th>
                            <th>=</th>
                            <th>{{prev_levy_paid}}</th>
                            <th>{{prev_levy_unpaid}}</th>
                            <th>{{total_paid}}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
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
