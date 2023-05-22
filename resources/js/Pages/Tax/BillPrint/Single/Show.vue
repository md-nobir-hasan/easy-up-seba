<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import { Head,Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import printJS from 'print-js';

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
        bnmny.value = res.data + ' মাত্র';
    });
}
</script>

<template>

    <Head title="সিঙ্গেল বিল প্রিন্ট" />
    <div v-if="bill" class="p-8 main-div" >
        <div class="flex justify-between">

            <!-- Up copy  -->
            <div class="w-[49%]">
                <!-- <div class="flex items-center">
                    <img src="/default/images/bd-logo.svg" class="h-14" alt="BD Logo">
                    <h1 class="ml-4 font-bold text-[24px]">{{ $page.props.auth.user.union.name  }}</h1>
                </div> -->

                <div class="flex justify-between mt-4 mr-1 pl-[15px]">
                    <div class="flex">
                        <img src="/default/images/bd-logo.svg" class="h-14" alt="BD Logo">
                    </div>
                    <div class="text-center">
                        <p class="text-[#ec2929] text-[14px]">গনপ্রজাতন্ত্রী বাংলাদেশ সরকার (স্থানীয় সরকার বিভাগ)</p>
                        <h1 class="ml-4 font-bold text-[18px] text-[#060682]">{{ $page.props.auth.user.union.name  }} পরিষদ কার্যালয় {{ $page.props.auth.user.union.upazila.name }}, {{ $page.props.auth.user.union.upazila.district.name }}</h1>
                        <h2 class="font-bold text-[#ec2929] text-[16px]">ইউপি করের বিল</h2>
                        <h4 class="text-[#060682] text-[16px]">ইউপি কপি</h4>
                    </div>
                    <div>
                        <qrcode-vue :value="'Holding No: '+bill.ekhana.holding_no+', name: '+ bill.ekhana.bn_name + ', Phone: '+ bill.ekhana.phone + ', Status: ' + ((bill.paid_amount+bill.paid_prev_arrears)> 0 ? 'Paid' : 'Please Paid Soon')" :size="size" level="H" />
                    </div>
                </div>

                <!-- Ekhana information table  -->
                <div class="text-left mt-4 w-[100%] p-4">
                    <table class="table w-[100%]">
                        <tbody>
                            <tr>
                                <!-- <th>ওয়ার্ড</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.ekhana.word.name) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>ওয়ার্ড</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.f_year.from)+" - "+ en2bn(bill.f_year.to) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>হোল্ডিং নং</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.ekhana.holding_no) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>করদাতার নাম</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ bill.ekhana.bn_name }}</td>
                            </tr>
                            <tr>
                                <!-- <th>পিতা/স্বামীর নাম</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ bill.ekhana.spouse_name }}</td>
                            </tr>
                            <tr>
                                <!-- <th>পিতা/স্বামীর নাম</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{en2bn( Number(bill.ekhana.paka_house ?? 0)+ Number(bill.ekhana.adhapaka_house ?? 0)+ Number(bill.ekhana.kasa_house ?? 0)) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>বিলের ঠিকানা</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ bill.ekhana.village.name }}</td>
                            </tr>
                            <tr>
                                <!-- <th>বিল ইস্যুর তারিখ</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ DateFormate(bill.deposite_date) }} ইং</td>
                            </tr>
                            <tr>
                                <!-- <th>জমাদানের শেষ তারিখ</th> -->
                                <th class="w-[50%]"></th>
                                <td> {{ befor10days(bill.deposite_date) }} ইং</td>
                            </tr>
                            <tr>
                                <!-- <th>ব্যাংকের নাম ও হিসাব নাম্বার</th> -->
                                <th class="w-[50%]"></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Tax details  -->
                <div class="text-left mt-1 w-[100%] p-4 pt-0">
                    <h1 class="text-center">করের বিবরণ</h1>
                    <table class="table w-[100%]">
                        <tbody>
                            <tr>
                                <!-- <th>বকেয়া বিল</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.prev_arrears) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>চলতি বিল</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.total_amount) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>জরিমানা</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.fine) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>মোট বকেয়া</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(Number(bill.prev_arrears)+ Number(bill.total_amount)) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>মোট পরিশোধ</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.paid_amount) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>বর্তমান বকেয়া</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{en2bn( Number(bill.prev_arrears)+ Number(bill.total_amount) - Number(bill.paid_amount) ) }}</td>
                            </tr>
                            <!-- <tr>
                                <th>কথায়ঃ</th>
                                <td :id="bnMoney(Number(bill.prev_arrears)+ Number(bill.total_amount) - Number(bill.paid_amount))">{{ bnmny  }}</td>
                            </tr> -->

                        </tbody>
                    </table>
                    <p :id="bnMoney(Number(bill.prev_arrears)+ Number(bill.total_amount) - Number(bill.paid_amount))">কথায়ঃ {{ bnmny  }}</p>
                </div>



                <!-- Signature  table  -->
                <div class="text-left  w-[100%] p-4  mt-10">
                    <table class="w-[100%] text-center border-collapse  p-2">

                        <tbody>
                            <tr>
                                <!-- <th class=" p-2">প্রাপ্ত টাকা</th> -->
                                <th></th>
                                <!-- <td class=" p-2">{{Number(bill.paid_amount) + Number(bill.paid_prev_arrears)}}/-</td> -->
                                <td class=" p-2">
                                    <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                    <!-- <span>চেয়ারম্যান স্বাক্ষর</span> -->
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <!-- <th class=" p-2">প্রাপ্ত টাকা কথায়</th> -->
                                <th></th>
                                <td class=" p-2"></td>
                                <td class=" border-b-0 p-2 align-bottom"></td>
                            </tr>
                            <tr>
                                <!-- <th class=" p-2">কর আদায়কারীর স্বাক্ষর</th> -->
                                <th></th>
                                <td class=" p-2"></td>
                                <!-- <td class=" border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td> -->
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2> -->

            </div>

            <!-- User copy  -->
            <div class="w-[49%]">
                <!-- <div class="flex items-center">
                    <img src="/default/images/bd-logo.svg" class="h-14" alt="BD Logo">
                    <h1 class="ml-4 font-bold text-[24px]">{{ $page.props.auth.user.union.name  }}</h1>
                </div> -->

                <div class="flex justify-between mt-4 mr-1 pl-[15px]">
                    <div class="flex">
                        <img src="/default/images/bd-logo.svg" class="h-14" alt="BD Logo">
                    </div>
                    <div class="text-center">
                        <p class="text-[#ec2929] text-[14px]">গনপ্রজাতন্ত্রী বাংলাদেশ সরকার (স্থানীয় সরকার বিভাগ)</p>
                        <h1 class="ml-4 font-bold text-[18px] text-[#060682]">{{ $page.props.auth.user.union.name  }} পরিষদ কার্যালয় {{ $page.props.auth.user.union.upazila.name }}, {{ $page.props.auth.user.union.upazila.district.name }}</h1>
                        <h2 class="font-bold text-[#ec2929] text-[16px]">ইউপি করের বিল</h2>
                        <h4 class="text-[#060682] text-[16px]">গ্রাহক কপি</h4>
                    </div>
                    <div>
                        <qrcode-vue :value="'Holding No: '+bill.ekhana.holding_no+', name: '+ bill.ekhana.bn_name + ', Phone: '+ bill.ekhana.phone + ', Status: ' + ((bill.paid_amount+bill.paid_prev_arrears)> 0 ? 'Paid' : 'Please Paid Soon')" :size="size" level="H" />
                    </div>
                </div>

                <!-- Ekhana information table  -->
                <div class="text-left mt-4 w-[100%] p-4">
                    <table class="table w-[100%]">
                        <tbody>
                            <tr>
                                <!-- <th>ওয়ার্ড</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.ekhana.word.name) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>ওয়ার্ড</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.f_year.from)+" - "+ en2bn(bill.f_year.to) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>হোল্ডিং নং</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.ekhana.holding_no) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>করদাতার নাম</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ bill.ekhana.bn_name }}</td>
                            </tr>
                            <tr>
                                <!-- <th>পিতা/স্বামীর নাম</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ bill.ekhana.spouse_name }}</td>
                            </tr>
                            <tr>
                                <!-- <th>পিতা/স্বামীর নাম</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{en2bn( Number(bill.ekhana.paka_house ?? 0)+ Number(bill.ekhana.adhapaka_house ?? 0)+ Number(bill.ekhana.kasa_house ?? 0)) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>বিলের ঠিকানা</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ bill.ekhana.village.name }}</td>
                            </tr>
                            <tr>
                                <!-- <th>বিল ইস্যুর তারিখ</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ DateFormate(bill.deposite_date) }} ইং</td>
                            </tr>
                            <tr>
                                <!-- <th>জমাদানের শেষ তারিখ</th> -->
                                <th class="w-[50%]"></th>
                                <td> {{ befor10days(bill.deposite_date) }} ইং</td>
                            </tr>
                            <tr>
                                <!-- <th>ব্যাংকের নাম ও হিসাব নাম্বার</th> -->
                                <th class="w-[50%]"></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Tax details  -->
                <div class="text-left mt-1 w-[100%] p-4 pt-0">
                    <h1 class="text-center">করের বিবরণ</h1>
                    <table class="table w-[100%]">
                        <tbody>
                            <tr>
                                <!-- <th>বকেয়া বিল</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.prev_arrears) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>চলতি বিল</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.total_amount) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>জরিমানা</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.fine) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>মোট বকেয়া</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(Number(bill.prev_arrears)+ Number(bill.total_amount)) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>মোট পরিশোধ</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{ en2bn(bill.paid_amount) }}</td>
                            </tr>
                            <tr>
                                <!-- <th>বর্তমান বকেয়া</th> -->
                                <th class="w-[50%]"></th>
                                <td>{{en2bn( Number(bill.prev_arrears)+ Number(bill.total_amount) - Number(bill.paid_amount) ) }}</td>
                            </tr>
                            <!-- <tr>
                                <th>কথায়ঃ</th>
                                <th class="w-[50%]"></th>
                                <td>{{ bnmny  }}</td>
                            </tr> -->

                        </tbody>
                    </table>
                    <p>কথায়ঃ {{ bnmny  }}</p>
                </div>



                <!-- Signature  table  -->
                <div class="text-left  w-[100%] p-4  mt-10">
                    <table class="w-[100%] text-center border-collapse  p-2">

                        <tbody>
                            <tr>
                                <!-- <th class=" p-2">প্রাপ্ত টাকা</th> -->
                                <th></th>
                                <!-- <td class=" p-2">{{Number(bill.paid_amount) + Number(bill.paid_prev_arrears)}}/-</td> -->
                                <td class=" p-2">
                                    <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                    <!-- <span>চেয়ারম্যান স্বাক্ষর</span> -->
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <!-- <th class=" p-2">প্রাপ্ত টাকা কথায়</th> -->
                                <th></th>
                                <td class=" p-2"></td>
                                <td class=" border-b-0 p-2 align-bottom"></td>
                            </tr>
                            <tr>
                                <!-- <th class=" p-2">কর আদায়কারীর স্বাক্ষর</th> -->
                                <th></th>
                                <td class=" p-2"></td>
                                <!-- <td class=" border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td> -->
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2> -->

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

    @media print {
        /* add your print-specific styles here */
        body{
            padding: 0 !important;
            margin: 0 !important;
            font-size: 14px !important;
        }
        .main-div{
            margin-top: 40px !important;
        }
        .table,table th, table td {
            padding: 0 !important;
            margin: 0 !important;
        }
    }

</style>
