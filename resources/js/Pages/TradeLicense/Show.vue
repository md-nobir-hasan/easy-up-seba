<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SucMesgShow from "@/Components/SucMesgShow.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
defineProps({
    trade_license: Object,
});

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
                <div class="space-x-5">
                    <Link
                        :href="
                            route('admin.tradeLicense.export', trade_license.id)
                        "
                    >
                        <PrimaryButton class="font-extrabold">
                            প্রিন্ট
                        </PrimaryButton>
                    </Link>
                    <Link :href="route('admin.trade-license.index')">
                        <PrimaryButton class="font-extrabold">
                            ট্রেড লাইসেন্স লিস্ট
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
            <hr class="mb-1" />
            <table
                class="w-full text-md text-left text-gray-500 dark:text-gray-400"
            >
                <thead
                    class="text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">ফিল্ড</th>
                        <th scope="col" class="px-6 py-3">ভ্যালু</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            কোড নাম্বার
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.code_number }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            আবেদনকারীর নাম
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.name }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            পিতা/স্বামীর নাম
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.fathers_name }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            মাতার নাম
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.mothers_name }}
                        </td>
                    </tr>

                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            বর্তমান ঠিকানা
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            গ্রাম: {{ trade_license?.present_address.village }},
                            ওয়ার্ড:
                            {{ trade_license?.present_address.ward_id }},
                            ইউনিয়ন: {{ trade_license?.present_address.union }},
                            উপজিলা:
                            {{ trade_license?.present_address.upazila }}, জেলা:
                            {{ trade_license?.present_address.district }},
                            বিভাগ: {{ trade_license?.present_address.country }}
                        </td>
                    </tr>

                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            স্থায়ী ঠিকানা
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            গ্রাম:
                            {{ trade_license?.permanent_address.village }},
                            ওয়ার্ড:
                            {{ trade_license?.permanent_address.ward_id }},
                            ইউনিয়ন:
                            {{ trade_license?.permanent_address.union }},
                            উপজিলা:
                            {{ trade_license?.permanent_address.upazila }},
                            জেলা:
                            {{ trade_license?.permanent_address.district }},
                            বিভাগ:
                            {{ trade_license?.permanent_address.country }}
                        </td>
                    </tr>

                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            মোবাইল/টেলিফোন নাম্বার
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.phone }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ই-মেইল
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.email }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            জাতীয়তা
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.nationality }}
                        </td>
                    </tr>

                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            জন্ম নিবন্ধন/এনআইডি/পাসপোর্ট নম্বর
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.nid_number }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            টিন নাম্বার
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.tin_number }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ফি (টাকা)
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.fee }}
                        </td>
                    </tr>

                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ই-ফি (টাকা)
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.e_fee }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ব্যাবসা প্রতিষ্ঠানের নাম
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.business_name }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ব্যবসা ঠিকানা
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            বাজার:
                            {{ trade_license?.business_address.village }},
                            ওয়ার্ড:
                            {{ trade_license?.business_address.ward_id }},
                            ইউনিয়ন:
                            {{ trade_license?.business_address.union }}, উপজিলা:
                            {{ trade_license?.business_address.upazila }}, জেলা:
                            {{ trade_license?.business_address.district }},
                            বিভাগ: {{ trade_license?.business_address.country }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ব্যবসার ধরণ
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.business_type }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ব্যবসার মূলধন
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.business_capital }}
                        </td>
                    </tr>
                    <tr
                        v-if="trade_license?.quantity"
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            সংখ্যা
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.quantity }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ব্যবসা আরম্ব করার সাম্বাব্য তারিখ
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.business_starting_date }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ব্যবসা প্রতিষ্ঠানের মালিকানা (নিজ/ভাড়া)
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.ownership }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            ভাড়া
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.business_space_rant }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            পরিচিতিমূলক সাইনবোর্ডের আয়তন
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.size_of_signboard }}
                        </td>
                    </tr>
                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            আবেদনের তারিখ
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.created_at }}
                        </td>
                    </tr>

                    <tr
                        class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            স্ট্যাটাস
                        </td>
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ trade_license?.status }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
