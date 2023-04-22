<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import { Head,Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import printJS from 'print-js';

const pro = defineProps({
    bill: Object,
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

</script>

<template>
    <div v-if="bill" class="p-8">
        <div class="flex justify-between items-center">

            <!-- Up copy  -->
            <div>
                <Head title="সিঙ্গেল বিল প্রিন্ট (পুরাতন)" />

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
                        <h4>বছর : ....</h4>
                        <h4>কিস্তি : ১ম</h4>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>ওয়ার্ড</th>
                            <td>:{{ bill.ekhana.word.name }}</td>
                        </tr>
                        <tr>
                            <th>হোল্ডিং নং</th>
                            <td>:{{ bill.ekhana.holding_no }}</td>
                        </tr>
                        <tr>
                            <th>করদাতার নাম</th>
                            <td>:{{ bill.ekhana.bn_name }}</td>
                        </tr>
                        <tr>
                            <th>পিতা/স্বামীর নাম</th>
                            <td>:{{ bill.ekhana.spouse_name }}</td>
                        </tr>
                        <tr>
                            <th>বিলের ঠিকানা</th>
                            <td>:{{ bill.ekhana.address }}</td>
                        </tr>
                        <tr>
                            <th>বিল ইস্যুর তারিখ</th>
                            <td>:{{ bill.ekhana.deposite_date }}</td>
                        </tr>
                        <tr>
                            <th>জমাদানের শেষ তারিখ</th>
                            <td>:</td>
                        </tr>
                        <tr>
                            <th>ব্যাংকের নাম ও হিসাব নাম্বার</th>
                            <td>:</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <!-- User copy  -->
            <div class="ml-4">
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
                        <h4>বছর : ....</h4>
                        <h4>কিস্তি : ১ম</h4>
                    </div>
                </div>
                <h4 class="text-right pr-4">ইউনিয়ন মোবাইল নম্বর</h4>
            </div>

        </div>
    </div>
</template>

<style>
body{
    background: white;
}
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
