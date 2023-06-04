<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SucMesgShow from "@/Components/SucMesgShow.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
import Pagination from "@/Components/Pagination.vue";
import Search from "@/Components/Search.vue";

defineProps({
    tradeLicenses: Object,
});

//========= frontend validation ============
const permisions = ref({});
const user = usePage().props.auth.user;
usePage().props.permissions.forEach(function (val, key) {
    if (val.module?.name == "Village" && val.role_id == user.role_id) {
        permisions.value = val;
    }
});
const ncheck = (ased) => {
    // console.log(permisions.value.target)
    if (permisions.value) {
        if (permisions.value[ased]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
//============ end frontend validation ============

function DateFormate(date) {
    if (date) {
        const d = new Date(date);
        let da = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        return da + "/" + month + "/" + year;
    }
    return date;
}
const tradeLicenseData = ref(usePage().props.tradeLicenses);

function deleting(id, modal) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .get(route("admin.single.delete.fetch", [id, modal]))
                .then((res) => {
                    tradeLicenseData.value = res.data.tradeLicenses;

                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    console.log("deleted");
                });
        }
    });
}
//End deleting
</script>

<template>
    <AppLayout title="ট্রেড লাইসেন্স">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">
                    ট্রেড লাইসেন্স
                </h2>
                <div class="flex gap-3">
                    <Link :href="route('admin.trade-license.create')">
                        <PrimaryButton
                            v-if="ncheck('add')"
                            class="font-extrabold"
                        >
                            ট্রেড লাইসেন্স যোগকরুন
                        </PrimaryButton>
                    </Link>
                    <Link :href="route('admin.trade-license.index')">
                        <PrimaryButton
                            v-if="ncheck('add')"
                            class="font-extrabold"
                        >
                            সব দেখুন
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
            <hr class="mb-1" />
            <div class="flex-auto my-3">
                <Search></Search>
            </div>
            <table
                class="w-full text-md text-left text-gray-500 dark:text-gray-400"
            >
                <thead
                    class="text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">কোড নাম্বার</th>
                        <th scope="col" class="px-6 py-3">নাম</th>
                        <th scope="col" class="px-6 py-3">বাবার নাম</th>
                        <th scope="col" class="px-6 py-3">মোবাইল নাম্বার</th>
                        <th scope="col" class="px-6 py-3">
                            ব্যাবসা প্রতিষ্ঠানের নাম
                        </th>
                        <th scope="col" class="px-6 py-3">স্ট্যাটাস</th>
                        <th scope="col" class="px-6 py-3">আবেদনের তারিখ</th>
                        <th scope="col" class="px-6 py-3">একশন</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(value, key) in tradeLicenseData.data"
                        :key="key"
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <Link
                                :href="
                                    route('admin.trade-license.show', value?.id)
                                "
                                >{{ value?.code_number }}
                            </Link>
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <Link
                                :href="
                                    route('admin.trade-license.show', value?.id)
                                "
                                >{{ value?.name }}
                            </Link>
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ value.fathers_name }}
                            cd
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ value.phone }}
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ value.business_name }}
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ value.status }}
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ value.created_at }}
                        </td>

                        <td
                            class="px-6 py-4 flex item-center justify-center gap-3"
                            v-if="ncheck('edit') || ncheck('delete')"
                        >
                            <Link
                                v-if="ncheck('edit')"
                                :href="
                                    route('admin.trade-license.show', [
                                        value.id,
                                    ])
                                "
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                <svg
                                    style="color: blue"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    class="bi bi-eye"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                        fill="blue"
                                    ></path>
                                    <path
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                        fill="blue"
                                    ></path>
                                </svg>
                            </Link>
                            <Link
                                v-if="ncheck('edit')"
                                :href="
                                    route('admin.trade-license.edit', [
                                        value.id,
                                    ])
                                "
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 text-blue-800"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                        fill="blue"
                                    />
                                </svg>
                            </Link>

                            <button
                                @click="deleting(value.id, 'TradeLicense')"
                                v-if="ncheck('delete')"
                                class="font-medium ml-2 text-red-600 dark:text-blue-500 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 text-red"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                        fill="#d10606"
                                    />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="60">
                            <Pagination
                                v-if="tradeLicenseData.meta?.last_page > 1"
                                class="my-5 dark:text-white flex justify-end p-3"
                                :meta="tradeLicenseData.meta"
                            ></Pagination>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </AppLayout>
</template>
