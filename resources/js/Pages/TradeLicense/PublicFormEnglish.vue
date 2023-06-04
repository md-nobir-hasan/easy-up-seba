<script setup>
import FormLayout from "@/Components/FormLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SucMesgShow from "@/Components/SucMesgShow.vue";
import TextInput from "@/Components/TextInput.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Address from "@/Pages/TradeLicense/Partials/AddressEnglish.vue";
import { Link, useForm } from "@inertiajs/vue3";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
    divisions: Object,
    status: Object,
    ownershipType: Object,
    businessType: Object,
});

const form = useForm({
    submit_btn: "",
    present_address: "",
    permanent_address: "",
    business_address: "",
    code_number: "",
    name: "",
    fathers_name: "",
    mothers_name: "",
    email: "",
    phone: "",
    nationality: "",
    nid_number: "",
    fee: "",
    e_fee: "",
    tin_number: "",
    business_name: "",
    business_type_id: "",
    business_capital_id: "",
    quantity: false,
    business_starting_date: "",
    ownership: "",
    business_space_rant: "",
    size_of_signboard: "",
});

function codeUpdate(data) {
    form.code_number = data;
}
const businessCapital = ref({});
const businessCapitalDisable = ref(false);
const quantifiable = ref(false);

const submit = () => {
    form.post(route("trade-license.post"), {
        onFinish: () => form.reset(),
    });
};

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
    <GuestLayout title="Trade License">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">
                    Trade License Application Form
                </h2>
                <div class="flex gap-3">
                    <Link :href="route('trade-license')">
                        <PrimaryButton class="font-extrabold">
                            বাংলায় আবেদন করুন
                        </PrimaryButton>
                    </Link>
                    <Link :href="route('home')">
                        <PrimaryButton class="font-extrabold">
                            Go Home
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
            <hr class="mb-1" />

            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="name"
                            value="Applicant's Name:"
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
                            value="Father's/Husband's Name:"
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
                            value="Mother's Name:"
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
                            for="present_address"
                            value="Present Address:"
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
                            for="permanent_address"
                            value="Permanent Address:"
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
                            value="Mobile Number:"
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
                            value="Email:"
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
                            value="Nationality:"
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
                            value="Birth Registration/NID/Passport Number:"
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
                            value="Fee:"
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
                            value="E-Fee:"
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
                            for="tin_number"
                            value="TIN Number:"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <TextInput
                                id="tin_number"
                                v-model="form.tin_number"
                                type="text"
                                class="w-full"
                                required
                                autocomplete="tin_number"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.tin_number"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-6 gap-5 my-2">
                        <InputLabel
                            for="business_name"
                            value="Business Name:"
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
                            value="Business Address:"
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
                            value="Business Type:"
                            class="text-sm col-span-2"
                        />

                        <div class="col-span-4">
                            <select
                                v-model="form.business_type_id"
                                required
                                @change="businessCapitalFetch"
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-max"
                            >
                                <option value="">Select Business Type</option>
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
                            value="Business Capital:"
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
                                <option value="">
                                    Select Business Capital
                                </option>
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
                            value="Quantity:"
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
                            value="Expected Date of Starting Business"
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
                            value="Business Ownership (Owned/Rented)"
                            class="text-sm col-span-2"
                        />
                        <div class="col-span-4">
                            <select
                                v-model="form.ownership"
                                required
                                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-max"
                            >
                                <option value="">Select Ownership Type</option>
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
                            value="Rent Amount"
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
                            value="Size of Recognizable Signboard (if applicable)"
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

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton
                            @click="form.submit_btn = 'return'"
                            class="ml-4"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Submit Application
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </GuestLayout>
</template>
