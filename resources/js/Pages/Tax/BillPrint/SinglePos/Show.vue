<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import { Head,Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import printJS from 'print-js';
// import QrcodeVue from 'qrcode.vue'
const pro = defineProps({
    bill: Object,
    previous_arrears: String,
});

//================  Language conversation =========================================
    let en2bn = n => String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯" [d]);
// End Language conversation

//Extrace user
const usr = usePage().props.auth.user;

const ekhana = ref(pro.bill)
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

//Determine a date which is 10 days ago from a specific days
// function befor10days(date) {
//     if (date) {
//         let d = new Date(date);
//         d.setDate(d.getDate()-10);
//         let new_d = d;
//         let da = new_d.getDate();
//         let month = new_d.getMonth();
//         let year = new_d.getFullYear();
//         return en2bn(da) + '/' + en2bn(month) + '/' + en2bn(year);
//     }
//     return date;
// }
</script>
<template>

    <Head title="সিঙ্গেল পোজ বিল প্রিন্ট" />
    <div v-if="bill" class="p-8 main-div" >
        <div class="w-[10in] m-auto">

            <!-- User copy  -->
            <div class="">
                <div class="text-center">
                    <img src="/default/images/bd-logo.svg" class="h-14 m-auto mb-4" alt="BD Logo">
                    <h1 class="ml-4 font-bold text-[24px]">{{ $page.props.auth.user.union.name  }}</h1>

                </div>

                <div class="flex items-center justify-between mt-4 pl-[75px]">
                    <div class="">
                        <h4><span class="font-bold">অর্থ-বছর :</span> {{en2bn(ekhana.f_year.from) + '-' +en2bn(ekhana.f_year.to)}}</h4>
                        <!-- <h4>গ্রাহক কপি</h4> -->
                    </div>
                    <div class="pl-8">
                        <h4><span class="font-bold">তারিখ :</span> {{DateFormate(ekhana.deposite_date)}}</h4>
                        <!-- <h4>
                            কিস্তি :
                            <span v-if="ekhana.s_kisti<1 && ekhana.t_kisti<1">১ম</span>
                                <span v-else-if="ekhana.t_kisti<1">২য়</span>
                                <span v-else>৩য়</span>
                        </h4> -->
                    </div>
                </div>

                <!-- Ekhana information table  -->
                <div class="text-left mt-4 bg-green-50 w-[100%] p-4 info-table paid-seal">
                    <table class="table m-auto">
                        <tbody>

                            <tr>
                                <th>করদাতার নাম</th>
                                <td>:{{ en2bn(bill.ekhana.bn_name) }}</td>
                            </tr>

                            <tr>
                                <th>হোল্ডিং নং</th>
                                <td>:{{ en2bn(bill.ekhana.holding_no) }}</td>
                            </tr>

                            <tr>
                                <th>পিতা/স্বামীর নাম</th>
                                <td>:{{ bill.ekhana.spouse_name }}</td>
                            </tr>
                            <tr>
                                <th>মোবাইল নং</th>
                                <td>: {{ en2bn(bill.ekhana.phone) }}</td>
                            </tr>
                            <tr>
                                <th>বিল ইস্যুর তারিখ</th>
                                <td>:{{ DateFormate(bill.deposite_date) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Tax information table  -->
                <div class="text-left w-[100%] p-4">
                    <table class="w-[100%] bg-[#ffc8c8d9] text-center border-collapse border border-[black] p-2">
                        <thead>
                            <tr>
                                <th rowspan="2" class="border border-[black] p-2">করের বিবরণ</th>
                                <th rowspan="2" class="border border-[black] p-2">বকেয়া</th>
                                <th colspan="5" class="border border-[black] p-2">চলতি</th>
                            </tr>
                            <tr>
                                <th class="border border-[black] p-2">১ম কিস্তি</th>
                                <th class="border border-[black] p-2">২য় কিস্তি</th>
                                <th class="border border-[black] p-2">৩য় কিস্তি</th>
                                <!-- <th class="border border-[black] p-2">৪র্থ কিস্তি</th> -->
                                <th class="border border-[black] p-2">মোট</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="border border-[black] p-2">হোল্ডিং কর</th>
                                <td class="border border-[black] p-2">{{ en2bn(bill.total_amount - bill.paid_amount) }}</td>
                                <td class="border border-[black] p-2">{{en2bn(bill.f_kisti)}}</td>
                                <td class="border border-[black] p-2">{{en2bn(bill.s_kisti)}}</td>
                                <td class="border border-[black] p-2">{{en2bn(bill.t_kisti)}}</td>
                                <!-- <td class="border border-[black] p-2">{{bill.fo_kisti)}}</td> -->
                                <td class="border border-[black] p-2 bg-[#00ffc95c]">{{en2bn(bill.paid_amount)}}</td>
                            </tr>
                            <tr>
                                <th class="border border-[black] p-2">পূর্বের বকেয়া</th>
                                <td class="border border-[black] p-2">{{ en2bn(previous_arrears) }}</td>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] p-2"></td>
                                <!-- <td class="border border-[black] p-2"></td> -->
                                <td class="border border-[black] p-2 bg-[#00ffc95c]">{{ en2bn(previous_arrears) }}</td>
                            </tr>
                            <tr>
                                <th class="border border-[black] p-2">দন্ড</th>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] p-2"></td>
                                <!-- <td class="border border-[black] p-2"></td> -->
                                <td class="border border-[black] p-2 bg-[#00ffc95c]"></td>
                            </tr>
                            <tr class="bg-[#00ffc95c]">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!-- <td></td> -->
                                <th>সর্বমোট</th>
                                <th class="border border-[black] p-2 ">{{en2bn(Number(bill.paid_amount) + Number(previous_arrears))}}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Signature  table  -->
                <!-- <div class="text-left  w-[100%] p-4">
                    <table class="w-[100%] bg-[#ffc8c8d9] text-center border-collapse border border-[black] p-2">

                        <tbody>
                            <tr>
                                <th class="border border-[black] p-2">প্রাপ্ত টাকা</th>
                                <td class="border border-[black] p-2">{{Number(bill.paid_amount) + Number(previous_arrears)}}/-</td>
                                <td class="border border-[black] p-2">
                                    <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                    <span>চেয়ারম্যান স্বাক্ষর</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="border border-[black] p-2">প্রাপ্ত টাকা কথায়</th>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] border-b-0 p-2 align-bottom"></td>
                            </tr>
                            <tr>
                                <th class="border border-[black] p-2">কর আদায়কারীর স্বাক্ষর</th>
                                <td class="border border-[black] p-2"></td>
                                <td class="border border-[black] border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td>
                            </tr>
                        </tbody>
                    </table>
                </div> -->
                <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2>

            </div>
            <div class="m-auto text-center mt-8">
                <qrcode-vue :value="'হোল্ডিং নম্বরঃ '+en2bn(bill.ekhana.holding_no)+', নামঃ '+ bill.ekhana.bn_name + ', অর্থ-বছরঃ '+en2bn(ekhana.f_year.from) + '-' +en2bn(ekhana.f_year.to)+', সর্বমোট বিলঃ '+en2bn(Number(bill.paid_amount) + Number(bill.paid_previous_arrears ?? 0)) +', স্ট্যাটাস: ' + ((Number(bill.paid_amount)+Number(bill.paid_prev_arrears))> 0 ? 'পরিশোধ' : 'দ্রুত কর পরিশোধ করুন।')" :size="size" level="H" class="m-auto" />
            </div>
        </div>

    </div>

</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: 'https://admin.easyupsheba.com/',
        size: 300,
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>


<style>
    body{
        background: white;
    }
    .paid-seal{
        background-image: url('/images/red-paid-seal-removebg-preview.png');
        background-repeat: no-repeat;
        background-color: rgba(255, 255, 255, 0.5);
        background-position: right;
        background-size: 20%;
    }

    @media print {
        /* add your print-specific styles here */
        body{
            padding: 0 !important;
            margin: 0 !important;
        }
        .main-div{
            padding: 0 !important;
            margin: 0 !important;
        }
        .table,table th, table td {
            padding: 0 !important;
            margin: 0 !important;
        }
    }

</style>
