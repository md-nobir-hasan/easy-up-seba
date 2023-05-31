<script setup>
import FormLayout from "@/Components/FormLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SucMesgShow from "@/Components/SucMesgShow.vue";
import TextInput from "@/Components/TextInput.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Address from "@/Pages/TradeLicense/Partials/Address.vue";
import { Link, useForm } from "@inertiajs/vue3";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
    divisions: Object,
    status: Object,
    ownershipType: Object,
    businessType: Object,
    tradeLicense: Object,
});

const form = useForm({
    submit_btn: "",
    present_address: "",
    permanent_address: "",
    business_address: "",
    code_number: props.tradeLicense?.code_number ?? "",
    name: props.tradeLicense?.name ?? "",
    fathers_name: props.tradeLicense?.fathers_name ?? "",
    mothers_name: props.tradeLicense?.mothers_name ?? "",
    email: props.tradeLicense?.email ?? "",
    phone: props.tradeLicense?.phone ?? "",
    nationality: props.tradeLicense?.nationality ?? "",
    nid_number: props.tradeLicense?.nid_number ?? "",
    fee: props.tradeLicense?.fee ?? "",
    e_fee: props.tradeLicense?.e_fee ?? "",
    business_name: props.tradeLicense?.business_name ?? "",
    business_type_id: props.tradeLicense?.business_type_id ?? "",
    business_capital_id: props.tradeLicense?.business_capital_id ?? "",
    quantity: props.tradeLicense?.quantity ?? false,
    business_starting_date: props.tradeLicense?.business_starting_date
        ? new Date(props.tradeLicense?.business_starting_date)
              .toISOString()
              .split("T")[0]
        : "",
    ownership: props.tradeLicense?.ownership ?? "",
    business_space_rant: props.tradeLicense?.business_space_rant ?? "",
    size_of_signboard: props.tradeLicense?.size_of_signboard ?? "",
    status: props.tradeLicense?.status ?? "",
});

function codeUpdate(data) {
    form.code_number = data;
}
const presentAddressValue = computed(() => {
    return props.tradeLicense?.addresses?.find(
        (address) => address.title === "Present"
    );
});

const permanentAddressValue = computed(() => {
    return props.tradeLicense?.addresses?.find(
        (address) => address.title === "Permanent"
    );
});

const businessAddressValue = computed(() => {
    return props.tradeLicense?.addresses?.find(
        (address) => address.title === "Business"
    );
});

watch(
    () => form.present_address,
    (newVal) => {
        form.present_address = newVal;
    },
    { deep: true }
);

watch(
    () => form.permanent_address,
    (newVal) => {
        form.permanent_address = newVal;
    },
    { deep: true }
);

watch(
    () => form.business_address,
    (newVal) => {
        form.business_address = newVal;
    },
    { deep: true }
);

const businessCapital = ref({});
const businessCapitalDisable = ref(false);
const quantifiable = ref(false);

const submit = () => {
    if (props.tradeLicense?.id) {
        form.post(route("admin.trade-license.update", props.tradeLicense.id), {
            onFinish: () => form.reset(),
        });
    } else {
        form.post(route("admin.trade-license.store"), {
            onFinish: () => form.reset(),
        });
    }
};

onMounted(() => {
    form.present_address = presentAddressValue.value;
    form.permanent_address = permanentAddressValue.value;
    form.business_address = businessAddressValue.value;
    if (props.tradeLicense?.id) {
        businessCapitalFetch();
    }
});

watch(
    () => form.business_capital_id,
    (newVal) => {
        quantifiable.value =
            businessCapital?.value?.some(
                (obj) =>
                    obj.id === form?.business_capital_id &&
                    obj.quantifiable === 1
            ) || false;
    },
    { deep: true }
);

const businessCapitalFetch = () => {
    axios
        .get(
            route("ajax.fetch", [
                "BusinessCapital",
                "business_type_id",
                form?.business_type_id,
            ]),
            form
        )
        .then((res) => {
            businessCapital.value = res.data || "";
            businessCapitalDisable.value = businessCapital.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("Business Capital fetch done");
        });
};
</script>

<template>
    <AppLayout title="গ্রাম">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">গ্রাম যোগ</h2>
                <Link :href="route('admin.trade-license.index')">
                    <PrimaryButton class="font-extrabold">
                        ফিরে যান
                    </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1" />

            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="name"
                            value="আবেদনকারীর নামঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="name"
                                v-model="form.name"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="name"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.name"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="fathers_name"
                            value="পিতা/স্বামীর নামঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="fathers_name"
                                v-model="form.fathers_name"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="fathers_name"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.fathers_name"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="mothers_name"
                            value="মাতার নামঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="mothers_name"
                                v-model="form.mothers_name"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="mothers_name"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.mothers_name"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-5">
                        <InputLabel
                            for="phone"
                            value="বর্তমান ঠিকানাঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <Address
                                v-model="form.present_address"
                                title="Present"
                                :divisions="divisions"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.present_address"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-5">
                        <InputLabel
                            for="phone"
                            value="স্থায়ী ঠিকানাঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <Address
                                v-model="form.permanent_address"
                                title="Permanent"
                                :divisions="divisions"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.permanent_address"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="phone"
                            value="মোবাইল নাম্বারঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="phone"
                                v-model="form.phone"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="phone"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.phone"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="email"
                            value="ইমেইলঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="email"
                                v-model="form.email"
                                type="email"
                                class="w-full"
                                required
                                autocomplete="email"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.email"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="nationality"
                            value="জাতীয়তা"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="nationality"
                                v-model="form.nationality"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="nationality"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.nationality"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="nid_number"
                            value="জন্ম নিবন্ধন/এনআইডি/পাসপোর্ট নাম্বারঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="nid_number"
                                v-model="form.nid_number"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="nid_number"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.nid_number"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="fee"
                            value="ফিঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="fee"
                                v-model="form.fee"
                                type="number"
                                class="w-full"
                                autocomplete="fee"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.fee"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="e_fee"
                            value="ই-ফিঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="e_fee"
                                v-model="form.e_fee"
                                type="number"
                                class="w-full"
                                autocomplete="e_fee"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.e_fee"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="business_name"
                            value="ব্যবসা প্রতিষ্ঠানের নামঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="business_name"
                                v-model="form.business_name"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="business_name"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.business_name"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-5">
                        <InputLabel
                            for="phone"
                            value="ব্যবসা প্রতিষ্ঠানের ঠিকানাঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <Address
                                v-model="form.business_address"
                                title="Business"
                                :divisions="divisions"
                                @codeUpdate="codeUpdate"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.business_address"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="business_type_id"
                            value="ব্যবসার ধরণঃ"
                            class="text-sm col-span-2"
                        />

                        <div class="col-span-4">
                            <select
                                v-model="form.business_type_id"
                                required
                                @change="businessCapitalFetch"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-max"
                            >
                                <option value="">
                                    ব্যবসার ধরণ নির্বাচন করুন
                                </option>
                                <option
                                    v-for="(bt, key) in businessType"
                                    :key="key"
                                    :value="bt.id"
                                    :selected="form.business_type_id === bt.id"
                                >
                                    {{ bt.name }}
                                </option>
                            </select>

                            <InputError
                                class="mt-2"
                                :message="form.errors.business_type_id"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="business_capital_id"
                            value="ব্যবসার মূলধন"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <select
                                v-model="form.business_capital_id"
                                required
                                :disabled="
                                    businessCapitalDisable ||
                                    !form.business_type_id
                                "
                                :class="[
                                    businessCapitalDisable
                                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                                        : '',
                                ]"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">মূলধন নির্বাচন করুন</option>
                                <option
                                    v-for="(bc, key) in businessCapital"
                                    :key="key"
                                    :value="bc.id"
                                    :selected="
                                        form.business_capital_id === bc.id
                                    "
                                >
                                    {{ bc.name }}
                                </option>
                            </select>

                            <InputError
                                class="mt-2"
                                :message="form.errors.business_capital_id"
                            />
                        </div>
                    </div>
                    <div
                        class="grid grid-cols-6 gap-5 my-2"
                        v-if="quantifiable"
                    >
                        <InputLabel
                            for="quantity"
                            value="পরিমাণ/সংখ্যাঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="quantity"
                                v-model="form.quantity"
                                type="number"
                                class="w-full"
                                autocomplete="quantity"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.quantity"
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="business_starting_date"
                            value="ব্যাবসা আরম্ব করার সাম্ভাব্য তারিখ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="business_starting_date"
                                v-model="form.business_starting_date"
                                type="date"
                                class="w-full"
                                autocomplete="business_starting_date"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.business_starting_date"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="ownership"
                            value="ব্যবসা প্রতিষ্ঠান/দোকান মালিকানা (নিজস্ব/ভাড়া)"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <select
                                v-model="form.ownership"
                                required
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-max"
                            >
                                <option value="">ধরন নির্বাচন করুন</option>
                                <option
                                    v-for="(ownership, key) in ownershipType"
                                    :key="key"
                                    :value="ownership"
                                    :selected="form.ownership === ownership"
                                >
                                    {{ ownership }}
                                </option>
                            </select>

                            <InputError
                                class="mt-2"
                                :message="form.errors.ownership"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-4">
                        <InputLabel
                            for="business_space_rant"
                            value="ভাড়াঃ"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="business_space_rant"
                                v-model="form.business_space_rant"
                                type="number"
                                class="w-full"
                                autocomplete="business_space_rant"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.business_space_rant"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-5">
                        <InputLabel
                            for="size_of_signboard"
                            value="পরিচিতি মূলক সাইনবোর্ডের আয়তনঃ (প্রযোজ্য ক্ষেত্রে)"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="size_of_signboard"
                                v-model="form.size_of_signboard"
                                type="text"
                                class="w-full"
                                autocomplete="size_of_signboard"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.size_of_signboard"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="status"
                            value="স্ট্যাটাসঃ"
                            class="text-sm col-span-2"
                        />

                        <div class="col-span-4">
                            <select
                                v-model="form.status"
                                required
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-max"
                            >
                                <option value="">
                                    স্ট্যাটাস নির্বাচন করুন
                                </option>
                                <option
                                    v-for="(st, key) in status"
                                    :key="key"
                                    :value="st"
                                    :selected="form.status === st"
                                >
                                    {{ st }}
                                </option>
                            </select>

                            <InputError
                                class="mt-2"
                                :message="form.errors.status"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton
                            @click="form.submit_btn = 'return'"
                            class="ml-4"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            {{ !tradeLicense?.id ? "সংরক্ষণ" : "আপডেট করুন" }}
                        </PrimaryButton>
                        <PrimaryButton
                            v-if="!tradeLicense?.id"
                            @click="form.submit_btn = 'new'"
                            class="ml-4"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            সংরক্ষণ এবং নতুন
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
