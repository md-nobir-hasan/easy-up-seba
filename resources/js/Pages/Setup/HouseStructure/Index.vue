<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
defineProps({
    data: Object,
});

//========= frontend validation ============
const permisions = ref({});
const user = usePage().props.auth.user;
usePage().props.permissions.forEach(function(val,key){
    if(val.module.name == 'House Structure' && val.role_id == user.role_id){
        permisions.value = val;
    }
})
const ncheck = (ased) =>{
    if(permisions.value){
        if(permisions.value[ased]){
            console.log(ased);
            console.log(permisions.value[ased]);
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
//============ end frontend validation ============

function DateFormate(date){
    if(date){
        const d = new Date(date);
          let da = d.getDate();
          let month = d.getMonth();
          let year = d.getFullYear();
          return da + '/' + month + '/' + year;
    }
return date;
}
//Delele funciton for deleting data
const mdata = ref(usePage().props.data);
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
            mdata.value = res.data;

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
    <AppLayout title="কাঠামো">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
                        <div class="bg-white flex justify-between p-4">
                            <h2 class="float-left text-4xl font-extrabold">কাঠামো</h2>
                            <Link :href="route('admin.setup.house-structure.create')">
                            <PrimaryButton v-if="ncheck('add')" class="font-extrabold">
                                কাঠামো যোগকরুন
                            </PrimaryButton>
                        </Link>

                        </div>
                        <hr class="mb-1">
                        <table class="w-full text-md text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        সিরিয়াল
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        নাম
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        মূল্য
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        তৈরির তারিখ
                                    </th>
                                    <!-- <th scope="col" class="px-6 py-3">
                                        তৈরি
                                    </th> -->
                                    <th scope="col" class="px-6 py-3">
                                        আপডেটের তারিখ
                                    </th>
                                    <!-- <th scope="col" class="px-6 py-3">
                                        আপডেট
                                    </th> -->
                                    <th scope="col" class="px-6 py-3" v-if="ncheck('edit') || ncheck('delete')">
                                        কাজ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, key) in mdata" :key="key"
                                    class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ value.serial }}
                                    </td>
                                    <td scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ value.name }}
                                    </td>
                                    <td scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ new Intl.NumberFormat().format(value.price)}} /=
                                    </td>
                                    <td v-text="DateFormate(value.created_at) " class="px-6 py-4">

                                    </td>
                                    <!-- <td class="px-6 py-4">
                                        {{ value.created_by ? value.created_by.name : ''}}
                                    </td> -->
                                    <td v-text="DateFormate(value.created_at)" class="px-6 py-4">
                                    </td>
                                    <!-- <td class="px-6 py-4">
                                        {{ value.updated_by ? value.updated_by.name : ''}}
                                    </td> -->

                                    <td class="px-6 py-4 flex item-center justify-center" v-if="ncheck('edit') || ncheck('delete')">
                                        <Link v-if="ncheck('edit')" :href="route('admin.setup.house-structure.edit',[value.id])" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-blue-800" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill="blue"/></svg>
                                        </Link>
                                        <button @click="deleting(value.id,'HouseStructure')"  v-if="ncheck('delete')" class="font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline">
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
</AppLayout>
</template>
