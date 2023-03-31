<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import {CheckIcon} from '@heroicons/vue/24/solid';
defineProps({
    f_years: Object,
    ekhanas: Object,
    taxes: Object,
});

const date = new Date();
const today = (date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear();
const form = useForm({
    f_year_id: '',
    ekhana_id: '',
    paid_amount: 0,
    arrear:0,
    arrears: 0,
    fine: 0,
    deposite_date: null,
    id:0,
});
const form2 = useForm({
    phone: '',
    bn_name: '',
    spouse_name: '',
    mother_name: '',
    id:0,
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

    const ekhanaFetch = ()=>{
        if(!form.f_year_id){
            eerr.value = 'অর্থ-বছর নির্বাচন করুন'
            return false;
        }
        if(!form.ekhana_id){
            eerr2.value = 'হল্ডিং নাম্বার নির্বাচন করুন'
            return false;
        }
        axios.post(route('ajax.ekhana.fetch'), form).then(res => {
            ekhana.value = res.data.ekhana;
            htdeposite.value = res.data.ht_deposite;
            form.paid_amount = Math.round(res.data.ht_deposite.total_amount);
            form.arrear =  Math.round(res.data.ht_deposite.arrears ?? 0);
            form.arrears = Math.round(form.paid_amount - form.arrear);
            form.fine = Math.round(res.data.ht_deposite.fine ?? 0);
            form.id = res.data.ht_deposite.id ?? 0;
            form2.id = res.data.ekhana.id;
            form2.bn_name = res.data.ekhana.bn_name;
            form2.spouse_name = res.data.ekhana.spouse_name;
            form2.mother_name = res.data.ekhana.mother_name;
            form2.phone = res.data.ekhana.phone;
            console.log(ekhana);
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('khana fetch done');
        });
    }


    const submitTax =()=>{
        if(!form.deposite_date){
            alert('জমার তারিখ নির্বাচন করুন');
            return false;
        }
        axios.post(route('ajax.update',['HouseTaxDeposite']), form).then(res => {
            htdeposite.value = res.data;
            alert('সফলভাবে কর জমা হয়েছে');
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('House Tax Deposite Store Done');
        });
    }
//Delele funciton for deleting data
    function deleting(id,modal){
        Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.isConfirmed) {
        axios.get(route('admin.single.delete.fetch',[id,modal])).then(res => {
            ekhana.value = res.data;

            Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
        )
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('deleted');
        });
    }
    })
    }
//End deleting
    const edit = ref(false);
    const ekhanaUpdate = () =>{
        axios.post(route('ajax.update',['Ekhana']), form2).then(res => {
            edit.value = false;
            alert('সফলভাবে আপলোড হয়েছে')
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('House Tax Deposite Store Done');
        });
    }

</script>

<template>
    <AppLayout title="কর জমা">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">কর জমা ফর্ম</h2>
                <!-- <Link :href="route('admin.ekhana.create')">
                <PrimaryButton v-if="ncheck('add')" class="font-extrabold">
                     কর জমা ফর্ম
                </PrimaryButton>
                </Link> -->
            </div>
            <div class=" mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#11ff5999] m-auto  rounded-lg p-6 text-2lg max-w-md max-sm:max-w-sm">
                    <div class="mb-4 flex items-center">
                        <label for="f_year_id" class="block text-md font-medium text-[blue] dark:text-white">অর্থ-বছর</label>
                        <select id="f_year_id" v-model="form.f_year_id"
                        class="border ml-6 border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-[50px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">অর্থ-বছর নির্বাচন করুন</option>
                            <option v-for="(value1, key) in f_years" :value="value1.id" :key="key">{{ value1.from+'-'+value1.to }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.f_year_id" />
                    </div>
                    <div class="mb-4 flex items-center">
                        <label for="ekhana_id" class="block text-md font-medium text-[blue] dark:text-white">হল্ডিং নাম্বার</label>
                        <select id="ekhana_id" v-model="form.ekhana_id" class="border ml-1 border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-[33px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">হল্ডিং নাম্বার নির্বাচন করুন</option>
                            <option v-for="(val2, key) in ekhanas" :value="val2.id" :key="key">{{ val2.holding_no }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr2" />
                        <InputError class="mt-2" :message="form.errors.ekhana_id" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="ekhanaFetch" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সার্চ করুন
                        </PrimaryButton>
                    </div>
                </form>

            </div>

            <!-- -->
            <div class="lg:flex justify-center bg-white items-center mt-4 pt-4"  v-if="ekhana.holding_no">
                <table class="border-collapse mb-4 border border-slate-400 text-center text-md text-left text-gray-500 dark:text-gray-400 rounded-lg m-auto">
                    <thead class="text-md text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th colspan="2" class="border border-slate-300 px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">খান তথ্য</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                                হোল্ডিং নাম্বার
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.holding_no  }}
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            করদাতার নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.bn_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            বাৎসরিক আয়
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{new Intl.NumberFormat().format(ekhana.yearly_income) }}/=
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            পিতা/স্বামীর নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.spouse_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            মাতার নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.mother_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            এনআইডি নাম
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.nid }}
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                                মোবাইল নাম্বার
                            </th>
                            <td scope="row"
                             class="border border-slate-300 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                             :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="form2.phone" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            গ্রামের নাম
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.village ? ekhana.village.name : '' }}
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                                ওয়ার্ড নং
                            </th>
                            <td scope="row" class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ekhana.word ? ekhana.word.name : '' }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="">
                        <tr>
                            <th colspan="2" v-if="!edit" @click="edit = true"
                             >
                              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">হালনাগাদ</button>
                            </th>
                            <th colspan="2" v-else
                             class="text-center">
                             <button type="button" @click="ekhanaUpdate" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                             :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                             >আপডেট</button>


                            </th>
                        </tr>
                    </tfoot>
                </table>

                <div class="pb-5 pr-4 md:mt-6" >
                    <form>
                        <table  class="border-collapse border border-slate-400 text-center m-auto">
                            <thead class="bg-[#11ff5999]">
                            <tr>
                                <th colspan="2" class="border border-slate-300 p-2">কর জমা ফর্ম</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th class="border border-slate-300 p-2">জমার তারিখ</th>
                                <td>
                                    <input class="border-0"  type="date" required  v-model="form.deposite_date" >
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2">করের পরিমাণ</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="text" v-model="form.paid_amount">
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2">বকেয়া পাওনা</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="number" v-model="form.arrear">
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2">দন্ড</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="number" v-model="form.fine">
                                </td>
                            </tr>
                            </tbody>
                            <tfoot class="bg-[#11ff5999]">
                                <tr>
                                    <th v-if="!htdeposite.paid_amount" colspan="2" class="border border-slate-300 p-2">
                                        <PrimaryButton type="button" @click="submitTax" class="ml-4"
                                        :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        জমা করুন
                                    </PrimaryButton>
                                    </th>

                                    <th v-else colspan="2" class="border border-slate-300 p-2">
                                        <component :is="CheckIcon" class="h-9 p-1 inline font-bold bg-[blue] text-white rounded-full"></component>
                                    </th>

                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </div>
    </div>
</AppLayout>
</template>
