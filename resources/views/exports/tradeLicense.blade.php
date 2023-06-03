<!DOCTYPE html>
<html lang="bn">
<head>
</head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
   
</head>
<body>
        <table class="w-full text-md text-left text-gray-500 dark:text-gray-400"
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
                            {{ $tradeLicense->code_number }}
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
                            {{ $tradeLicense->name }}
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
                            {{ $tradeLicense->fathers_name }}
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
                            {{ $tradeLicense->mothers_name }}
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
                            গ্রাম: {{ $tradeLicense->present_address?->village }},
                            ওয়ার্ড:
                            {{ $tradeLicense->present_address?->ward }},
                            ইউনিয়ন: {{ $tradeLicense->present_address?->union }},
                            উপজিলা:
                            {{ $tradeLicense->present_address?->upazila }}, 
                            <br/>
                            জেলা:
                            {{ $tradeLicense->present_address?->district }},
                            বিভাগ: {{ $tradeLicense->present_address?->division }},
                             {{ $tradeLicense->present_address?->country }}
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
                            {{ $tradeLicense->permanent_address?->village }},
                            ওয়ার্ড:
                            {{ $tradeLicense->permanent_address?->ward }},
                            ইউনিয়ন:
                            {{ $tradeLicense->permanent_address?->union }},
                            উপজিলা:
                            {{ $tradeLicense->permanent_address?->upazila }},
                            
                            <br/>
                            জেলা:
                            {{ $tradeLicense->permanent_address?->district }},
                            বিভাগ:
                            {{ $tradeLicense->permanent_address?->division }},
                            {{ $tradeLicense->permanent_address?->country }}
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
                            {{ $tradeLicense->phone }}
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
                            {{ $tradeLicense->email }}
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
                            {{ $tradeLicense->nationality }}
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
                            {{ $tradeLicense->nid_number }}
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
                            {{ $tradeLicense->tin_number }}
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
                            {{ $tradeLicense->fee }}
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
                            {{ $tradeLicense->e_fee }}
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
                            {{ $tradeLicense->business_name }}
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
                            {{ $tradeLicense->business_address?->village }},
                            ওয়ার্ড:
                            {{ $tradeLicense->business_address?->ward }},
                            ইউনিয়ন:
                            {{ $tradeLicense->business_address?->union }}, উপজিলা:
                            {{ $tradeLicense->business_address?->upazila }}, 
                            <br/>
                            জেলা:
                            {{ $tradeLicense->business_address?->district }},
                            বিভাগ: {{ $tradeLicense->business_address?->division }},
                              {{ $tradeLicense->business_address?->country }}
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
                            {{ $tradeLicense->business_type }}
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
                            {{ $tradeLicense->business_capital }}
                        </td>
                    </tr>
                    <tr
                        v-if="$tradeLicense->quantity"
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
                            {{ $tradeLicense->quantity }}
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
                            {{ $tradeLicense->business_starting_date }}
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
                            {{ $tradeLicense->ownership }}
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
                            {{ $tradeLicense->business_space_rant }}
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
                            {{ $tradeLicense->size_of_signboard }}
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
                            {{ $tradeLicense->created_at }}
                        </td>
                    </tr> 
                </tbody>
            </table>
</body>
</html>
