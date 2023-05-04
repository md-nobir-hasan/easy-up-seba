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
        return da + '/' + month + '/' + year;
    }
    return date;
}

//Today date
    const date = new Date();
    const today = (date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear();
console.log(pro.bill)
</script>

<template>

    <Head title="সমস্ত বিল প্রিন্ট" />
    <div v-if="bills.length>0" class="p-8 main-div" >
        <div v-for="(bill, key) in bills" :key="key" class="device-height m-auto">
            <div class="flex justify-between">
                <!-- Up copy  -->
                <div class="w-[49%]">
                    <div class="flex items-center">
                        <img src="/default/images/bd-logo.svg" class="h-14" alt="BD Logo">
                        <h1 class="ml-4 font-bold text-[24px]">{{ $page.props.auth.user.word.name }}- {{ $page.props.auth.user.word.union.name  }}</h1>
                       
                    </div>

                    <div class="flex items-center justify-between mt-4 pl-[75px]">
                        <div class="">
                            <h4>ইউপি করের বিল</h4>
                            <h4>গ্রাহক কপি</h4>
                        </div>
                        <div class="pl-8">
                            <h4>
                                <!-- বছর : -->
                                {{bill.from + '-' +bill.to}}
                            </h4>
                            <h4>
                                <!-- কিস্তি : -->
                                <span>৪র্থ</span>
                            </h4>
                        </div>
                    </div>

                    <!-- Ekhana information table  -->
                    <div class="text-left mt-4 w-[100%] p-4">
                        <table class="table w-[100%]">
                            <tbody>
                                <tr>
                                    <!-- <th>ওয়ার্ড</th> -->
                                    <th></th>
                                    <td>:{{ bill.w_name }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>হোল্ডিং নং</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ bill.holding_no }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>করদাতার নাম</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ bill.bn_name }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>পিতা/স্বামীর নাম</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ bill.spouse_name }}</td>
                                </tr>
                                <!-- <tr>
                                    <th>বিলের ঠিকানা</th>
                                    <td>:{{ bill.ekhana.address }}</td>
                                </tr> -->
                                <tr>
                                    <!-- <th>বিল ইস্যুর তারিখ</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ DateFormate(bill.deposite_date) }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>জমাদানের শেষ তারিখ</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>: ?</td>
                                </tr>
                                <tr>
                                    <!-- <th>ব্যাংকের নাম ও হিসাব নাম্বার</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Tax information table  -->
                    <div class="text-left w-[100%] p-4">
                        <table class="w-[100%] text-center border-collapse  p-2">
                            <thead>
                                <tr>
                                    <!-- <th rowspan="2" class=" p-2">করের বিবরণ</th>
                                    <th rowspan="2" class=" p-2">বকেয়া</th>
                                    <th colspan="5" class=" p-2">চলতি</th> -->
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">১ম কিস্তি</th>
                                    <th class=" p-2">২য় কিস্তি</th>
                                    <th class=" p-2">৩য় কিস্তি</th> -->
                                    <!-- <th class=" p-2">৪র্থ কিস্তি</th> -->
                                    <!-- <th class=" p-2">মোট</th> -->
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <!-- <th class=" p-2">হোল্ডিং কর</th> -->
                                    <th></th>
                                    <td class=" p-2">{{ bill.total_amount - bill.paid_amount }}</td>
                                    <td class=" p-2">{{bill.f_kisti}}</td>
                                    <td class=" p-2">{{bill.s_kisti}}</td>
                                    <td class=" p-2">{{bill.t_kisti}}</td>
                                    <td class=" p-2">{{bill.fo_kisti}}</td>
                                    <td class=" p-2 ">{{bill.paid_amount}}</td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">পূর্বের বকেয়া</th> -->
                                    <th></th>
                                    <td class=" p-2">{{ bill.prev_arrears }}</td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2 ">{{ bill.paid_prev_arrears }}</td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">দন্ড</th> -->
                                    <th></th>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2 "></td>
                                </tr>
                                <tr class="">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <!-- <th>সর্বমোট</th> -->
                                    <th></th>
                                    <th class=" p-2 ">{{Number(bill.paid_amount) + Number(bill.paid_prev_arrears)}}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Signature  table  -->
                    <div class="text-left  w-[100%] p-4 mt-10">
                        <table class="w-[100%] text-center border-collapse  p-2">

                            <tbody>
                                <tr>
                                    <!-- <th class=" p-2">প্রাপ্ত টাকা</th>
                                    <td class=" p-2">{{Number(bill.paid_amount) + Number(bill.paid_prev_arrears)}}/-</td> -->
                                    <td class=" p-2">
                                        <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                        <!-- <span>চেয়ারম্যান স্বাক্ষর</span> -->
                                    </td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">প্রাপ্ত টাকা কথায়</th> -->
                                    <td class=" p-2"></td>
                                    <td class=" border-b-0 p-2 align-bottom"></td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">কর আদায়কারীর স্বাক্ষর</th> -->
                                    <td class=" p-2"></td>
                                    <!-- <td class=" border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2> -->

                </div>

                <!-- User copy  -->
                <div class="w-[49%]">
                    <div class="flex items-center">
                        <img src="/default/images/bd-logo.svg" class="h-14" alt="BD Logo">
                        <h1 class="ml-4 font-bold text-[24px]">{{ $page.props.auth.user.word.name }}- {{ $page.props.auth.user.word.union.name  }}</h1>
                       
                    </div>

                    <div class="flex items-center justify-between mt-4 pl-[75px]">
                        <div class="">
                            <h4>ইউপি করের বিল</h4>
                            <h4>ইউপি কপি</h4>
                        </div>
                        <div class="pl-8">
                            <h4>
                                <!-- বছর : -->
                                {{bill.from + '-' +bill.to}}
                            </h4>
                            <h4>
                                <!-- কিস্তি : -->
                                <span>৪র্থ</span>
                            </h4>
                        </div>
                    </div>

                    <!-- Ekhana information table  -->
                    <div class="text-left mt-4 w-[100%] p-4">
                        <table class="table w-[100%]">
                            <tbody>
                                <tr>
                                    <!-- <th>ওয়ার্ড</th> -->
                                    <th></th>
                                    <td>:{{ bill.w_name }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>হোল্ডিং নং</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ bill.holding_no }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>করদাতার নাম</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ bill.bn_name }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>পিতা/স্বামীর নাম</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ bill.spouse_name }}</td>
                                </tr>
                                <!-- <tr>
                                    <th>বিলের ঠিকানা</th>
                                    <td>:{{ bill.ekhana.address }}</td>
                                </tr> -->
                                <tr>
                                    <!-- <th>বিল ইস্যুর তারিখ</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:{{ DateFormate(bill.deposite_date) }}</td>
                                </tr>
                                <tr>
                                    <!-- <th>জমাদানের শেষ তারিখ</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>: ?</td>
                                </tr>
                                <tr>
                                    <!-- <th>ব্যাংকের নাম ও হিসাব নাম্বার</th> -->
                                    <th class="w-[60%]"></th>
                                    <td>:</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Tax information table  -->
                    <div class="text-left w-[100%] p-4">
                        <table class="w-[100%] text-center border-collapse  p-2">
                            <thead>
                                <tr>
                                    <!-- <th rowspan="2" class=" p-2">করের বিবরণ</th>
                                    <th rowspan="2" class=" p-2">বকেয়া</th>
                                    <th colspan="5" class=" p-2">চলতি</th> -->
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">১ম কিস্তি</th>
                                    <th class=" p-2">২য় কিস্তি</th>
                                    <th class=" p-2">৩য় কিস্তি</th> -->
                                    <!-- <th class=" p-2">৪র্থ কিস্তি</th> -->
                                    <!-- <th class=" p-2">মোট</th> -->
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <!-- <th class=" p-2">হোল্ডিং কর</th> -->
                                    <th></th>
                                    <td class=" p-2">{{ bill.total_amount - bill.paid_amount }}</td>
                                    <td class=" p-2">{{bill.f_kisti}}</td>
                                    <td class=" p-2">{{bill.s_kisti}}</td>
                                    <td class=" p-2">{{bill.t_kisti}}</td>
                                    <td class=" p-2">{{bill.fo_kisti}}</td>
                                    <td class=" p-2 ">{{bill.paid_amount}}</td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">পূর্বের বকেয়া</th> -->
                                    <th></th>
                                    <td class=" p-2">{{ bill.prev_arrears }}</td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2 ">{{ bill.paid_prev_arrears }}</td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">দন্ড</th> -->
                                    <th></th>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2"></td>
                                    <td class=" p-2 "></td>
                                </tr>
                                <tr class="">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <!-- <th>সর্বমোট</th> -->
                                    <th></th>
                                    <th class=" p-2 ">{{Number(bill.paid_amount) + Number(bill.paid_prev_arrears)}}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Signature  table  -->
                    <div class="text-left  w-[100%] p-4 mt-10">
                        <table class="w-[100%] text-center border-collapse  p-2">

                            <tbody>
                                <tr>
                                    <!-- <th class=" p-2">প্রাপ্ত টাকা</th>
                                    <td class=" p-2">{{Number(bill.paid_amount) + Number(bill.paid_prev_arrears)}}/-</td> -->
                                    <td class=" p-2">
                                        <img src="/images/my-signature.png" class="h-12 m-auto" alt="Easy Up Seba">
                                        <!-- <span>চেয়ারম্যান স্বাক্ষর</span> -->
                                    </td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">প্রাপ্ত টাকা কথায়</th> -->
                                    <td class=" p-2"></td>
                                    <td class=" border-b-0 p-2 align-bottom"></td>
                                </tr>
                                <tr>
                                    <!-- <th class=" p-2">কর আদায়কারীর স্বাক্ষর</th> -->
                                    <td class=" p-2"></td>
                                    <!-- <td class=" border-t-0 p-2 align-bottom">ব্যাংক সিল ইউপি কার্যালয়ের সিল মোহর</td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- <h2 class="font-semibold text-center"> নিয়মিত ইউপি কর পরিশোধ করুন। ইউনিয়নের উন্নয়নে অংশগ্রহণ করুন।</h2> -->

                </div>
            </div>

            <p class="h-2 bg-black seperatior"></p>
        </div>
    </div>
</template>

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
