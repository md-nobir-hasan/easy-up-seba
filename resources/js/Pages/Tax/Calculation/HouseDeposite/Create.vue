<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Dropdown from '@/Components/Dropdown.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref,computed } from 'vue';
import {CheckIcon,ChevronDownIcon} from '@heroicons/vue/24/solid';
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from '@headlessui/vue'
const pro = defineProps({
    f_years: Object,
    ekhanas: Object,
    taxes: Object,
});

const date = new Date();
const print = ref(false);
const today = (date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear();
const form = useForm({
    f_year_id: '',
    ekhana_id: String(usePage().props.auth.user.word.union.code+usePage().props.auth.user.word.code),
    paid_amount: 0,
    arrears: 0,
    fine: 0,
    deposite_date: null,
    id:0,
    kisti: 4,
});
const simpleUpdateForm = useForm({
    model: 'Ekhana',
    phone: '',
    bn_name: '',
    spouse_name: '',
    mother_name: '',
    id:null,
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
    const printdivshow = ref(false);
    const htdeposite = ref(null);
    const paid = ref(false);
    const eerr = ref('');
    const eerr2 = ref('');
    const ekhana = ref({});
    const deposite_date = ref(null);
    const ekhanaFetch = ()=>{
        if(!form.f_year_id){
            eerr.value = 'অর্থ-বছর নির্বাচন করুন'
            return false;
        }
        if(!form.ekhana_id){
            eerr2.value = 'হল্ডিং নাম্বার নির্বাচন করুন'
            return false;
        }
        console.log('i am form');
            console.log(form);
        axios.post(route('ajax.ekhana.fetch'), form).then(res => {
            ekhana.value = res.data.ekhana;
            htdeposite.value = res.data.ht_deposite;
            // form.paid_amount = Math.round(res.data.ht_deposite.total_amount/3);
            // form.arrears = res.data.ht_deposite.total_amount - (res.data.ht_deposite.paid_amount >0 ? res.data.ht_deposite.paid_amount : 0);
            form.fine = Math.round(res.data.ht_deposite.fine ?? 0);
            form.id = res.data.ht_deposite.id ?? 0;
            deposite_date.value = res.data.ht_deposite.deposite_date;
            simpleUpdateForm.id = res.data.ekhana.id;
            simpleUpdateForm.bn_name = res.data.ekhana.bn_name;
            simpleUpdateForm.spouse_name = res.data.ekhana.spouse_name;
            simpleUpdateForm.mother_name = res.data.ekhana.mother_name;
            simpleUpdateForm.phone = res.data.ekhana.phone;
            if(Number(htdeposite.value.paid_amount) <1){
                paid.value = Number(htdeposite.value.total_amount);
                form.paid_amount = Number(htdeposite.value.total_amount) + Number(htdeposite.value.prev_arrears);
            }else{
                print.value = true;
                paid.value = 0;
                form.paid_amount = 0;
            }

            // if(res.data.ht_deposite.t_kisti>0){
            //     form.paid_amount = 0;
            // }else if(res.data.ht_deposite.s_kisti>0 && res.data.ht_deposite.t_kisti<1){
            //     form.paid_amount = form.arrears;
            // }
            console.log(res);
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('khana fetch done');
        });
    }

    //kisti calculation
    const f_kisti_checked = ref(false);
    const s_kisti_checked = ref(false);
    const t_kisti_checked = ref(false);
    const fo_kisti_checked = ref(false);
    function kisti(kisti_no){
        switch(kisti_no){
            case 1:
                f_kisti_checked.value = true;
                s_kisti_checked.value = false;
                t_kisti_checked.value = false;
                fo_kisti_checked.value = false;
                break;
            case 2:
                f_kisti_checked.value = true;
                s_kisti_checked.value = true;
                t_kisti_checked.value = false;
                fo_kisti_checked.value = false;
                break;
            case 3:
                f_kisti_checked.value = true;
                s_kisti_checked.value = true;
                t_kisti_checked.value = true;
                fo_kisti_checked.value = false;
                break;
            case 4:
                f_kisti_checked.value = true;
                s_kisti_checked.value = true;
                t_kisti_checked.value = true;
                fo_kisti_checked.value = true;
                break;
        }
        // all_total.value = htdeposite.value.total_amount - htdeposite.value.paid_amount + htdeposite.value.prev_arrears;
        // paid.value = (htdeposite.value.total_amount*kisti_no)/4;
        // form.paid_amount = Number(paid.value) + Number(htdeposite.value.prev_arrears);
        form.kisti = kisti_no;
        // return true;
    }

    const submitTax =()=>{
        console.log(form);
        if(!form.deposite_date){
            alert('জমার তারিখ নির্বাচন করুন');
            return false;
        }
        // if(form.kisti != 4){
        //     alert('৪র্থ কিস্তিতে টিক চিহ্ন দিন');
        //     return false;
        // }
        axios.post(route('ajax.update',['HouseTaxDeposite']), form).then(res => {
            htdeposite.value = res.data;
            console.log(res.data);
            // form.paid_amount = Math.round(res.data.total_amount/3);
            print.value = true;
            // if(res.data.t_kisti>0){
                paid.value = 0;
            // }else if(res.data.s_kisti>0 && res.data.t_kisti<1){
            //     form.paid_amount = form.arrears;
            // }
            form.arrears = res.data.total_amount - (res.data.paid_amount >0 ? res.data.paid_amount : 0);
            form.fine = Math.round(res.data.fine ?? 0);
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
        axios.post(route('ajax.simple_update'), simpleUpdateForm).then(res => {
            edit.value = false;
            alert('সফলভাবে আপলোড হয়েছে')
        }).catch(err =>{
            console.error(err)
        }).finally(() => {
            console.log('House Tax Deposite Store Done');
        });
    }

// Live search combobox headless ui
// console.log(usePage.props);
// console.log(ekhanas);
const people = pro.ekhanas;
console.log('i ama people')
console.dir(people)
  const selectedPerson = ref();
  const query = ref('')

  const filteredPeople = computed(() =>
    query.value === ''
      ? people
      : people.filter((person) => {
          return person.holding_no.includes(query.value.toLowerCase())
        })

  )

//   const submit = () => {
//     form.post(route('admin.tax.ekhana.store'), {
//         onFinish: () => {
//             if(form.submit_btn != 'return'){
//                 form.reset();
//             }
//         }
//     });
// };
</script>

<template>
    <AppLayout title="কর জমা">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">কর জমা ফর্ম</h2>
            </div>
            <div class=" mt-4 mb-2 p-4 bg-white">
                <form @submit.prevent="submit" class="bg-[#008494db] m-auto  rounded-lg p-6 text-2lg max-w-md max-sm:max-w-sm">
                    <div class="mb-4 flex items-center">
                        <label for="f_year_id" class="block text-lg font-bold text-[white] dark:text-white mr-[27px]">অর্থ-বছর</label>
                        <select id="f_year_id" v-model="form.f_year_id"
                        class="border ml-[30px] border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-[50px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">অর্থ-বছর নির্বাচন করুন</option>
                            <option v-for="(value1, key) in f_years" :value="value1.id" :key="key">{{ value1.from+'-'+value1.to }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.f_year_id" />
                    </div>
                    <Combobox v-model="form.ekhana_id">
                        <div class="flex">
                            <label for="f_year_id" class="block text-lg font-bold text-[white] dark:text-white">হোল্ডিং নাম্বার</label>
                            <div class="relative">
                                <ComboboxInput @change="query = $event.target.value" class="border ml-6 border-gray-300 text-[blue] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-[40px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                <component :is="ChevronDownIcon" v-if="ChevronDownIcon" class="h-4 mr-1 absolute right-[11px] top-[13px]"></component>
                            </div>
                        </div>
                        <div class="relative">
                            <ComboboxOptions class="absolute p-4 mt-1 bg-[white] left-[115px] w-[222px] rounded-lg">
                                <ComboboxOption class="cursor-pointer" autocomplete="off"
                                  v-for="person in filteredPeople"
                                  :key="person.id"
                                  :value="person.holding_no"
                                >
                                  {{ person.holding_no }}
                                </ComboboxOption>
                              </ComboboxOptions>
                        </div>
                      </Combobox>

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
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="simpleUpdateForm.bn_name" >
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
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="simpleUpdateForm.spouse_name" >
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="border border-slate-300 px-6 py-3">
                            মাতার নাম
                            </th>
                            <td scope="row"
                            class="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            :class="[edit ? ' p-2' : '']">
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="simpleUpdateForm.mother_name" >
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
                                <input  :class="[edit ? 'border-[blue]' : 'border-0 text-center']" type="tel" required :readonly="!edit" v-model="simpleUpdateForm.phone" >
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
                                    <div v-if="htdeposite.deposite_date">
                                        {{DateFormate(form.deposite_date = htdeposite.deposite_date)}}
                                    </div>
                                    <input v-else class="border-0"  type="date" v-model="form.deposite_date">
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2 ">হাল করের পরিমাণ</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="text" v-model="htdeposite.total_amount">
                                </td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 p-2">বকেয়া পাওনা</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="number" v-model="htdeposite.prev_arrears">
                                </td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 p-2">দন্ড</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="number" v-model="form.fine">
                                </td>
                            </tr>

                            <tr>
                                <th class="border border-slate-300 p-2">কিস্তি</th>
                                <td class="border border-slate-300">
                                    <!-- <div>
                                        <input class=" text-[#80808087]" id="kisti1" @click="kisti(1)" checked type="checkbox" value="1"  >
                                        <label for="kisti1" class="text-[#80808087] ml-1">১ম</label>

                                        <input class="ml-2 text-[#80808087]" @click="kisti(2)" id="kisti2"  type="checkbox" value="2" >
                                        <label for="kisti2" class="ml-1 text-[#80808087]">২য়</label>

                                        <input class="ml-2 text-[#80808087]" id="kisti3"  @click="kisti(3)" type="checkbox" value="3" >
                                        <label for="kisti3" class="ml-1 text-[#80808087]" >৩য়</label>

                                        <input class="ml-2 text-[#80808087]" id="kisti3" @click="kisti(4)" type="checkbox" value="4" >
                                        <label for="kisti3" class="ml-1 text-[#80808087]">৪র্থ</label>
                                    </div> -->
                                    <div class="flex items-center px-2">
                                    <!-- First kisti  -->
                                    <div v-if="htdeposite.f_kisti>0">
                                        <input class=" text-[#80808087]" id="kisti1" checked disabled type="checkbox" value="1"  >
                                        <label for="kisti1" class="text-[#80808087] ml-1">১ম</label>
                                    </div>
                                    <div v-else>
                                        <input class=" text-[#80808087]" id="kisti1"  checked type="checkbox" value="1"  >
                                        <label for="kisti1" class="text-[blac] ml-1">১ম</label>
                                    </div>

                                    <!-- Second kisti  -->
                                    <div v-if="htdeposite.s_kisti>0">
                                        <input class="ml-2 text-[#80808087]" checked disabled id="kisti2"   type="checkbox" value="2" >
                                        <label for="kisti2" class="ml-1 text-[#80808087]">২য়</label>
                                    </div>
                                    <div v-else>
                                        <input class="ml-2 text-[#80808087]"  checked  id="kisti2"  type="checkbox" value="2" >
                                        <label for="kisti2" class="ml-1 text-[black]">২য়</label>
                                    </div>

                                    <!-- Third kisti  -->
                                    <div v-if="htdeposite.t_kisti>0">
                                        <input class="ml-2 text-[#80808087]" id="kisti3"  checked disabled type="checkbox" value="3" >
                                        <label for="kisti3" class="ml-1 text-[#80808087]" >৩য়</label>
                                    </div>
                                    <div v-else>
                                        <input class="ml-2 text-[#80808087]" id="kisti3"  checked type="checkbox" value="3" >
                                        <label for="kisti3" class="ml-1 text-[black]" >৩য়</label>
                                    </div>

                                    <!-- Fourth kisti  -->
                                    <div v-if="htdeposite.fo_kisti>0">
                                        <input class="ml-2 text-[#80808087]" id="kisti4"  checked disabled type="checkbox" value="4" >
                                        <label for="kisti4" class="ml-1 text-[#80808087]">৪র্থ</label>
                                    </div>
                                    <!-- @click="kisti(4)" -->
                                    <div v-else>
                                        <input   class="ml-2 text-[#80808087]" id="kisti4" checked required type="checkbox" value="4" >
                                        <label for="kisti4" class="ml-1 text-[black]">৪র্থ</label>
                                    </div>
                                </div>
                                    <!-- <div v-else-if="htdeposite.s_kisti>0 && htdeposite.f_kisti>0">
                                        <input class=" text-[#80808087]" id="kisti1" disabled checked type="radio" required value="1"  >
                                        <label for="kisti1" class="text-[#80808087]">১ম</label>

                                        <input class="ml-2 text-[#80808087]" disabled id="kisti2" checked  type="radio" required value="2" >
                                        <label for="kisti2" class="ml-1 text-[#80808087]" disabled>২য়</label>

                                        <input class="ml-2" id="kisti3"  type="radio" required value="3" v-model="form.kisti" >
                                        <label for="kisti3" class="ml-1">৩য়</label>
                                    </div>

                                    <div v-else-if="htdeposite.f_kisti>0">
                                        <input class=" text-[#80808087]" id="kisti1" disabled checked type="radio" required value="1"  >
                                        <label for="kisti1" class="text-[#80808087] ml-1">১ম</label>

                                        <input class="ml-2" id="kisti2"  type="radio" required value="2" v-model="form.kisti" >
                                        <label for="kisti2" class="ml-1">২য়</label>

                                        <input class="ml-2" id="kisti3"  type="radio" required value="3" v-model="form.kisti" >
                                        <label for="kisti3" class="ml-1">৩য়</label>
                                    </div>
                                    <div v-else>
                                        <input class="" id="kisti1"  type="radio" required value="1" v-model="form.kisti" >
                                        <label for="kisti1" class="ml-1">১ম</label>

                                        <input class="ml-2" id="kisti2"  type="radio" required value="2" v-model="form.kisti" >
                                        <label for="kisti2" class="ml-1">২য়</label>

                                        <input class="ml-2" id="kisti3"  type="radio" required value="3" v-model="form.kisti" >
                                        <label for="kisti3" class="ml-1">৩য়</label>
                                    </div> -->
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2 ">পরিশধযোগ্য হাল কর</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="text" :value="paid">
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2 ">সর্বমোট(হাল কর+বকেয়া+দন্ড)</td>
                                <td class="border border-slate-300  bg-gray-100">
                                    <input class="bg-gray-100 border-0" readonly type="text" v-model="form.paid_amount">
                                </td>
                            </tr>
                            </tbody>
                            <tfoot class="bg-[#11ff5999]">
                                <tr>
                                    <th v-if="paid == 0" colspan="2" class="border border-slate-300 p-2">
                                        <component :is="CheckIcon" class="h-9 p-1 inline font-bold bg-[blue] text-white rounded-full"></component>
                                        <div class="relative inline-block float-right">
                                            <button v-if="print"  @click="printdivshow ? printdivshow= false: printdivshow= true" type="button" class=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mr-2">
                                                প্রিন্ট
                                            </button>
                                            <div v-if="printdivshow" class='absolute w-[120px] top-10 right-0 shadow-lg border-2 bg-white px-4 py-2 rounded'>
                                                <!-- POS bill form  -->
                                                <form :action="route('admin.tax.bill.print.single.pos.show')" method="GET" target="_blank" class="mb-2">
                                                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                                                    <input type="hidden" name="ekhana_id" :value="ekhana.id">
                                                    <input type="hidden" name="deposite_date" :value="form.deposite_date">

                                                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
                                                        পোজ বিল
                                                    </button>
                                                </form>

                                                <!-- New bill form  -->
                                                <form :action="route('admin.tax.bill.print.single.show')" method="GET" target="_blank" class="mb-2">
                                                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                                                    <input type="hidden" name="ekhana_id" :value="ekhana.id">
                                                    <input type="hidden" name="deposite_date" :value="form.deposite_date">

                                                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
                                                        নতুন বিল
                                                    </button>
                                                </form>

                                                <!-- Old bill form  -->
                                                <form :action="route('admin.tax.bill.print.single.old.show')" method="GET" target="_blank">
                                                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                                                    <input type="hidden" name="ekhana_id" :value="ekhana.id">
                                                    <input type="hidden" name="deposite_date" :value="form.deposite_date">

                                                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-1 text-center">
                                                        পুরাতন বিল
                                                    </button>
                                                </form>
                                            </div>
                                        </div >
                                    </th>
                                    <th v-else colspan="2" class="border border-slate-300 p-2 ">

                                        <PrimaryButton type="button" @click="submitTax" class="ml-4"
                                        :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            জমা করুন
                                        </PrimaryButton>
                                        <div class="relative inline-block float-right">
                                            <button v-if="print"  @click="printdivshow ? printdivshow= false: printdivshow= true" type="button" class=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mr-2">
                                                প্রিন্ট

                                            </button>
                                            <div v-if="printdivshow" class='absolute top-10 right-0 shadow-lg border-2 bg-white px-4 py-2 rounded'>
                                                <!-- POS bill form  -->
                                                <form :action="route('admin.tax.bill.print.single.pos.show')" method="GET" target="_blank" class="mb-2">
                                                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                                                    <input type="hidden" name="ekhana_id" :value="ekhana.id">
                                                    <input type="hidden" name="deposite_date" :value="form.deposite_date">

                                                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
                                                        পোজ বিল
                                                    </button>
                                                </form>

                                                <!-- New bill form  -->
                                                <form :action="route('admin.tax.bill.print.single.show')" method="GET" target="_blank" class="mb-2">
                                                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                                                    <input type="hidden" name="ekhana_id" :value="ekhana.id">
                                                    <input type="hidden" name="deposite_date" :value="form.deposite_date">

                                                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
                                                        নতুন বিল
                                                    </button>
                                                </form>

                                                <!-- Old bill form  -->
                                                <form :action="route('admin.tax.bill.print.single.old.show')" method="GET" target="_blank">
                                                    <input type="hidden" name="f_y_id" :value="form.f_year_id">
                                                    <input type="hidden" name="ekhana_id" :value="ekhana.id">
                                                    <input type="hidden" name="deposite_date" :value="form.deposite_date">

                                                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-1 text-center">
                                                        পুরাতন বিল
                                                    </button>
                                                </form>
                                            </div>
                                        </div >

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
