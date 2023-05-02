<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
defineProps({
    data: Object,
    words: Object,
    house_strucs: Object,
    tax: Object,
    all_access: String,
});

const form = useForm({
    word_id: '',
    village_id: '',
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
    // console.log(permisions.value.target)
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
const vilages = ref({});
const vdisable = ref(true);
const all_word = ref(false);
const villageFetching = ()=>{
    form.word_id == 'all' ? all_word.value= true : all_word.value= false;
    axios.get(route('ajax.fetch',['Village','word_id',form.word_id]), form).then(res => {
        vilages.value = res.data;
        form.village_id = '';
        if(vilages.value.length == 0){
            vdisable.value = true;
            vilages.value = {};
        }else{
            vdisable.value = false;
        }
    }).catch(err =>{
        vdisable.value = true;
            vilages.value = {};
        console.error(err)
    }).finally(() => {
        console.log('Village fetch done');
    });
    }

    const eerr = ref('');
    const eerr2 = ref('');
    const ekhana = ref(usePage().props.data);
const ekhanaFetch = ()=>{
    console.log(form.village_id,form.word_id)
    if(!form.word_id){
        eerr.value = 'ওয়ার্ড নির্বাচন করুন'
        return false;
    }
    if(!all_word.value){
        if(!form.village_id){
                eerr2.value = 'গ্রাম নির্বাচন করুন'
                return false;
            }
    }else{
        form.village_id = 'all';
    }

    console.log(form.village_id,form.word_id)
    axios.get(route('ajax.fetch',['Ekhana','village_id',form.village_id,'word_id',form.word_id]), form).then(res => {
        ekhana.value = res.data;
        console.log(res);
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('khana fetch done');
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
</script>

<template>
    <AppLayout title="ই-খানা">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">ই-খানা</h2>
                <Link :href="route('admin.tax.ekhana.create')">
                <PrimaryButton v-if="ncheck('add')" class="font-extrabold text-2xl">
                     ই-খানা ডাটা এন্ট্রি
                </PrimaryButton>
                </Link>
            </div>
            <div class="bg-white mt-4 mb-2 p-4 m-auto">
                <form @submit.prevent="submit" class="bg-[#008494db] rounded-lg p-6 text-2lg max-w-md m-auto max-sm:max-w-sm">
                    <div class="mb-4 flex items-center">
                        <label for="word_id" class="block text-[20px] text-[white] dark:text-white font-bold">ওয়ার্ডঃ</label>
                        <select id="word_id" v-model="form.word_id" @change="villageFetching" class="border text-lg ml-4 border-gray-300 text-[blue]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">ওয়ার্ড নির্বাচন করুন</option>
                            <option v-if="all_access" value="all">সব দেখুন</option>
                            <option v-for="(word, key) in words" :key="key" :value="word.id">{{ word.name }} - {{ word.union.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr" />
                        <InputError class="mt-2" :message="form.errors.word_id" />
                    </div>
                    <div class="mb-4 flex items-center">
                        <label for="village_id" class="block  text-[20px] text-[white] dark:text-white font-bold">গ্রামঃ</label>
                        <select id="village_id" v-model="form.village_id" :disabled="vdisable || all_word" class="border text-lg ml-7 border-gray-300 text-[blue]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">গ্রাম নির্বাচন করুন</option>
                            <option value="all">সব দেখুন</option>
                            <option v-for="(village, key) in vilages" :value="village.id" :key="key">{{ village.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.eerr2" />
                        <InputError class="mt-2" :message="form.errors.village_id" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="ekhanaFetch" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সার্চ করুন
                        </PrimaryButton>
                    </div>
                </form>

            </div>
            <hr class="mb-1">
            <div class="bg-black mt-1 flex items-center justify-between">
                <div></div>
                <h1 class="text-center text-white p-2">খানা প্রধানের তালিকা</h1>
                <div class="p-1">
<button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
     <a :href="route('admin.ekhana.export.excel')" class="text-white">Export Excel</a>
</button>
<button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1">
    <a :href="route('admin.ekhana.export.pdf')" class="text-white">Export PDF</a>
</button>

                    <!-- <Link :href="route('admin.ekhana.export')" >Export Excel </Link> -->
                </div>
            </div>
            <table class="w-full  text-left text-gray-500 dark:text-gray-400">
                <thead class=" text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            হোল্ডিং নাম্বার
                        </th>
                        <th scope="col" class="px-6 py-3">
                           করদাতার নাম
                        </th>
                        <th scope="col" class="px-6 py-3">
                           বাৎসরিক আয়
                        </th>
                        <th scope="col" class="px-6 py-3">
                           পিতা/স্বামীর নাম
                        </th>
                        <th scope="col" class="px-6 py-3">
                           মাতার নাম
                        </th>
                        <th scope="col" class="px-6 py-3">
                           এনআইডি নাম
                        </th>
                        <th scope="col" class="px-6 py-3">
                            মোবাইল নাম্বার
                        </th>
                        <th scope="col" class="px-6 py-3">
                           গ্রামের নাম
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ওয়ার্ড নং
                        </th>
                        <th colspan="2" scope="col" class="">
                            সম্পদের বিবরন
                            <div class="flex items-center justify-between bg-[#1c09ffb5] rounded p-1 h-16">
                                <h4 class="p-1 text-white">পাকা</h4>
                                <h4 class="p-1 text-white">আধাপাকা</h4>
                                <h4 class="p-1 text-white">কাঁচা</h4>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            বাৎসরিক ভাড়ার পরিমাণ
                        </th>
                        <th scope="col" class="px-6 py-3">
                           কর
                        </th>
                        <th scope="col" class="px-6 py-3">
                            তৈরির তারিখ
                        </th>
                        <th scope="col" class="px-6 py-3">
                            তৈরির
                        </th>
                        <th scope="col" class="px-6 py-3" v-if="ncheck('edit') || ncheck('delete')">
                            কাজ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, key) in ekhana" :key="key"
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.holding_no  }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.bn_name }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{new Intl.NumberFormat().format(value.yearly_income) }}/=
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.spouse_name }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.mother_name }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.nid }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.phone }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.village ? value.village.name : '' }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ value.word ? value.word.name : '' }}
                        </th>
                        <th colspan="2" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="flex items-center justify-between">
                                <p >{{ value.paka_house ?? 0}}</p>
                                <p >{{ value.adhapaka_house ?? 0 }}</p>
                                <p >{{ value.kasa_house ?? 0 }}</p>
                            </div>
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ new Intl.NumberFormat().format(value.yearly_house_rent) }}/=
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ new Intl.NumberFormat().format(Math.round(value.yearly_house_rent*tax.price/100)- value.tax_paid) }}/=
                        </th>
                        <td v-text="DateFormate(value.created_at)" class="px-6 py-4">

                        </td>
                        <td class="px-6 py-4">
                            {{ value.created_by ? value.created_by.name : ''}}
                        </td>
                        <td class="px-6 py-4 flex item-center justify-center" v-if="ncheck('edit') || ncheck('delete')">
                            <Link v-if="ncheck('edit')" :href="route('admin.tax.ekhana.edit', [value.id])"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-blue-800" viewBox="0 0 512 512">
                                <path
                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                    fill="blue" />
                            </svg>
                            </Link>

                            <button @click="deleting(value.id,'Ekhana')"  v-if="ncheck('delete')" class="font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-red" viewBox="0 0 448 512">
                                    <path
                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                        fill="#d10606" />
                                </svg>
                            </button>
                        </td>
                </tr>


            </tbody>
        </table>
    </div>
</AppLayout></template>
