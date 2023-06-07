<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import { Head,Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import printJS from 'print-js';

const pro = defineProps({
    bills: Object,
    previous_arrears: String,
});

//================  Language conversation =========================================
    let en2bn = n => String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯" [d]);
// End Language conversation

//Extrace user
const usr = usePage().props.auth.user;

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
function befor10days(date) {
    if (date) {
        let d = new Date(date);
        d.setDate(d.getDate()-10);
        let new_d = d;
        let da = new_d.getDate();
        let month = new_d.getMonth();
        let year = new_d.getFullYear();
        return en2bn(da) + '/' + en2bn(month) + '/' + en2bn(year);
    }
    return date;
}

//english number to bangla word
const bnmny = ref(null);
function bnMoney(num){
    axios.get(route('ajax.bnmoney',[num])).then(res=>{
        bnmny.value = res.data+' মাত্র';
    });
}
console.log(pro.bills);
</script>

<template>

    <Head title="সমস্ত বিল প্রিন্ট (পুরাতন)" />
    <div v-if="bills.length>0" class="p-8 main-div" >
        <div v-for="(bill, key) in bills" :key="key" class="device-height m-auto">
            <div class="flex justify-between">
                <!-- Up copy  -->
                <div class="w-[49%]">
                    <div class="flex  justify-between">
                        <div class="flex">
                          <img src="/default/images/bd-logo.svg" class="h-28" alt="BD Logo">
                        </div>
                        <div class="text-center">
                          <p class="text-[#ec2929] text-[14px]">গনপ্রজাতন্ত্রী বাংলাদেশ সরকার (স্থানীয় সরকার বিভাগ)</p>
                          <h1 class="ml-4 font-bold text-[16px] text-[#060682]">{{ $page.props.auth.user.union.name  }} পরিষদ কার্যালয়, {{ $page.props.auth.user.union.upazila.name }}, {{ $page.props.auth.user.union.upazila.district.name }}</h1>
                          <h2 class="font-bold text-[#ec2929]">ইউপি করের বিল</h2>
                          <h4 class="text-[#060682]">ইউপি কপি</h4>
                        </div>
                          <div>
                            <qrcode-vue :value="'Holding No: '+bill.holding_no+', name: '+ bill.bn_name + ', Phone: '+ bill.phone + ', Status: ' + ((bill.paid_amount+bill.paid_prev_arrears)> 0 ? 'Paid' : 'Please Paid Soon')" :size="size" level="H" />
                          </div>
                    </div>
                    <div class="text-center">
                        <!-- <div class="pl-8"> -->
                            <h4>বছর : {{en2bn(bill.from) + '-' +en2bn(bill.to)}}</h4>
                            <h4>
                                কিস্তি :
                                <span>৪র্থ</span>
                            </h4>
                        <!-- </div> -->
                    </div>
                    <!-- Ekhana information table  -->
                    <div class="text-left mt-4 bg-green-50 w-[100%] p-4">
                        <table class="table w-[100%]">
                            <tbody>
                                <tr>
                                    <th>ওয়ার্ড</th>
                                    <td>:{{ en2bn(bill.w_name) }}</td>
                                </tr>
                                <tr>
                                    <th>হোল্ডিং নং</th>
                                    <td>:{{ en2bn(bill.holding_no) }}</td>
                                </tr>
                                <tr>
                                    <th>করদাতার নাম</th>
                                    <td>:{{ bill.bn_name }}</td>
                                </tr>
                                <tr>
                                    <th>পিতা/স্বামীর নাম</th>
                                    <td>:{{ bill.spouse_name }}</td>
                                </tr>
                                <!-- <tr>
                                    <th>বিলের ঠিকানা</th>
                                    <td>:{{ bill.ekhana.address }}</td>
                                </tr> -->
                                <tr>
                                    <th>বিল ইস্যুর তারিখ</th>
                                    <td>:{{ DateFormate(bill.deposite_date) }}</td>
                                </tr>
                                <tr>
                                    <th>জমাদানের শেষ তারিখ</th>
                                    <td>:  {{ befor10days(bill.deposite_date) }}</td>
                                </tr>
                                <tr>
                                    <th>ব্যাংকের নাম ও হিসাব নাম্বার</th>
                                    <td>:</td>
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
                                    <th class="border border-[black] p-2">৪র্থ কিস্তি</th>
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
                                    <td class="border border-[black] p-2">{{en2bn(bill.fo_kisti)}}</td>
                                    <td class="border border-[black] p-2 bg-[#00ffc95c]">{{en2bn(bill.paid_amount)}}</td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">পূর্বের বকেয়া</th>
                                    <td class="border border-[black] p-2">{{ en2bn(bill.prev_arrears) }}</td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2 bg-[#00ffc95c]">{{ en2bn(bill.paid_prev_arrears ?? 0 )}}</td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">দন্ড</th>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2 bg-[#00ffc95c]"></td>
                                </tr>
                                <tr class="bg-[#00ffc95c]">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <th>সর্বমোট</th>
                                    <th class="border border-[black] p-2 ">{{en2bn(Number(bill.paid_amount) + Number(bill.paid_prev_arrears))}}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Signature  table  -->
                    <div class="text-left  w-[100%] p-4">
                        <table class="w-[100%] bg-[#ffc8c8d9] text-center border-collapse border border-[black] p-2">

                            <tbody>
                                <tr>
                                    <th class="border border-[black] p-2">প্রাপ্ত টাকা</th>
                                    <td class="border border-[black] p-2">{{en2bn(Number(bill.paid_amount) + Number(bill.paid_prev_arrears))}}/-</td>
                                    <td class="border border-[black] p-2">
                                        <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                        <span>চেয়ারম্যান স্বাক্ষর</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">প্রাপ্ত টাকা কথায়</th>
                                    <td class="border border-[black] p-2 text-[14px]" :id="bnMoney(Number(bill.paid_amount) + Number(bill.paid_prev_arrears))">{{ bnmny }}</td>
                                    <td class="border border-[black] border-b-0 p-2 align-bottom"></td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">কর আদায়কারীর স্বাক্ষর</th>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2>
                </div>

                <!-- User copy  -->
                <div class="w-[49%]">
                    <div class="flex items-center justify-between">
                        <div class="flex">
                          <img src="/default/images/bd-logo.svg" class="h-28" alt="BD Logo">
                        </div>
                        <div class="text-center">
                          <p class="text-[#ec2929] text-[14px]">গনপ্রজাতন্ত্রী বাংলাদেশ সরকার (স্থানীয় সরকার বিভাগ)</p>
                          <h1 class="ml-4 font-bold text-[16px] text-[#060682]">{{ $page.props.auth.user.union.name  }} পরিষদ কার্যালয়, {{ $page.props.auth.user.union.upazila.name }}, {{ $page.props.auth.user.union.upazila.district.name }}</h1>
                          <h2 class="font-bold text-[#ec2929]">ইউপি করের বিল</h2>
                          <h4 class="text-[#060682]">ইউপি কপি</h4>
                        </div>
                          <div>
                            <qrcode-vue :value="'Holding No: '+bill.holding_no+', name: '+ bill.bn_name + ', Phone: '+ bill.phone + ', Status: ' + ((bill.paid_amount+bill.paid_prev_arrears)> 0 ? 'Paid' : 'Please Paid Soon')" :size="size" level="H" />
                          </div>
                    </div>

                    <div class="text-center">
                        <!-- <div class="pl-8"> -->
                            <h4>বছর : {{en2bn(bill.from) + '-' +en2bn(bill.to)}}</h4>
                            <h4>
                                কিস্তি :
                                <span>৪র্থ</span>
                            </h4>
                        <!-- </div> -->
                    </div>

                    <!-- Ekhana information table  -->
                    <div class="text-left mt-4 bg-green-50 w-[100%] p-4">
                        <table class="table w-[100%]">
                            <tbody>
                                <tr>
                                    <th>ওয়ার্ড</th>
                                    <td>:{{ en2bn(bill.w_name) }}</td>
                                </tr>
                                <tr>
                                    <th>হোল্ডিং নং</th>
                                    <td>:{{ en2bn(bill.holding_no) }}</td>
                                </tr>
                                <tr>
                                    <th>করদাতার নাম</th>
                                    <td>:{{ bill.bn_name }}</td>
                                </tr>
                                <tr>
                                    <th>পিতা/স্বামীর নাম</th>
                                    <td>:{{ bill.spouse_name }}</td>
                                </tr>
                                <!-- <tr>
                                    <th>বিলের ঠিকানা</th>
                                    <td>:{{ bill.ekhana.address }}</td>
                                </tr> -->
                                <tr>
                                    <th>বিল ইস্যুর তারিখ</th>
                                    <td>:{{ DateFormate(bill.deposite_date) }}</td>
                                </tr>
                                <tr>
                                    <th>জমাদানের শেষ তারিখ</th>
                                    <td>:  {{ befor10days(bill.deposite_date) }}</td>
                                </tr>
                                <tr>
                                    <th>ব্যাংকের নাম ও হিসাব নাম্বার</th>
                                    <td>:</td>
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
                                    <th class="border border-[black] p-2">৪র্থ কিস্তি</th>
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
                                    <td class="border border-[black] p-2">{{en2bn(bill.fo_kisti)}}</td>
                                    <td class="border border-[black] p-2 bg-[#00ffc95c]">{{en2bn(bill.paid_amount)}}</td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">পূর্বের বকেয়া</th>
                                    <td class="border border-[black] p-2">{{ en2bn(bill.prev_arrears) }}</td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2 bg-[#00ffc95c]">{{ en2bn(bill.paid_prev_arrears ?? 0 )}}</td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">দন্ড</th>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] p-2 bg-[#00ffc95c]"></td>
                                </tr>
                                <tr class="bg-[#00ffc95c]">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <th>সর্বমোট</th>
                                    <th class="border border-[black] p-2 ">{{en2bn(Number(bill.paid_amount) + Number(bill.paid_prev_arrears))}}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Signature  table  -->
                    <div class="text-left  w-[100%] p-4">
                        <table class="w-[100%] bg-[#ffc8c8d9] text-center border-collapse border border-[black] p-2">

                            <tbody>
                                <tr>
                                    <th class="border border-[black] p-2">প্রাপ্ত টাকা</th>
                                    <td class="border border-[black] p-2">{{en2bn(Number(bill.paid_amount) + Number(bill.paid_prev_arrears))}}/-</td>
                                    <td class="border border-[black] p-2">
                                        <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                        <span>চেয়ারম্যান স্বাক্ষর</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">প্রাপ্ত টাকা কথায়</th>
                                    <td class="border border-[black] p-2 text-[14px]">{{ bnmny }}</td>
                                    <td class="border border-[black] border-b-0 p-2 align-bottom"></td>
                                </tr>
                                <tr>
                                    <th class="border border-[black] p-2">কর আদায়কারীর স্বাক্ষর</th>
                                    <td class="border border-[black] p-2"></td>
                                    <td class="border border-[black] border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2>
                </div>
            </div>

            <p class="h-2 bg-black seperatior"></p>
        </div>
    </div>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: 'https://admin.easyupsheba.com/',
        size: 120,
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
    .seperatior{
        height: 8px; margin-top: 40px;margin-bottom: 40px;
    }

    @media print {
        /* add your print-specific styles here */
        body{
            padding: 0 !important;
            margin: 0 !important;
            font-size: 14px !important;
        }

        .device-height{
            height: 100vh;
            margin-top: 40px;
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
