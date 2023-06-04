<script setup>
import { reactive, ref, watch } from "vue";
const emit = defineEmits(["update:modelValue", "codeUpdate"]);

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    divisions: Object,
    modelValue: {
        type: Object,
        required: true,
    },
});

const form = reactive({
    title: props.title,
    division_id: props.modelValue.division_id ?? "",
    district_id: props.modelValue.district_id ?? "",
    upazila_id: props.modelValue.upazila_id ?? "",
    union_id: props.modelValue.union_id ?? "",
    ward_id: props.modelValue.ward_id ?? "",
    bazar_id: props.modelValue.bazar_id ?? "",
    village_id: props.modelValue.village_id ?? "",
});

const district = ref({});
const districtDisable = ref(true);
const upazila = ref({});
const upzilaDisable = ref(true);
const union = ref({});
const unionDisable = ref(true);
const wards = ref({});
const wardDisable = ref(true);
const bazar = ref({});
const bazarDisable = ref(true);
const villege = ref({});
const villageDisable = ref(true);

const districtFetch = (resetFormValues = false) => {
    axios
        .get(
            route("ajax.fetch", ["District", "division_id", form.division_id]),
            form
        )
        .then((res) => {
            if (resetFormValues) {
                form.district_id = "";
                form.upazila_id = "";
                form.union_id = "";
                form.ward_id = "";
                form.bazar_id = "";
                form.village_id = "";
                upzilaDisable.value = true;
                unionDisable.value = true;
                wardDisable.value = true;
                villageDisable.value = true;
                bazarDisable.value = true;
            }
            district.value = res.data;
            districtDisable.value = district.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("district fetch done");
        });
};

const upazilaFetch = (resetFormValues = false) => {
    axios
        .get(
            route("ajax.fetch", ["Upazila", "district_id", form.district_id]),
            form
        )
        .then((res) => {
            if (resetFormValues) {
                form.upazila_id = "";
                form.union_id = "";
                form.ward_id = "";
                form.bazar_id = "";
                form.village_id = "";
                unionDisable.value = true;
                wardDisable.value = true;
                villageDisable.value = true;
                bazarDisable.value = true;
            }
            upazila.value = res.data;
            upzilaDisable.value = upazila.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("upazila fetch done");
        });
};

const unionFetch = (resetFormValues = false) => {
    axios
        .get(
            route("ajax.fetch", ["Union", "upazila_id", form.upazila_id]),
            form
        )
        .then((res) => {
            if (resetFormValues) {
                form.union_id = "";
                form.ward_id = "";
                form.bazar_id = "";
                form.village_id = "";
                wardDisable.value = true;
                villageDisable.value = true;
                bazarDisable.value = true;
            }
            union.value = res.data;
            unionDisable.value = union.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("union fetch done");
        });
};

const wardFetch = (resetFormValues = false) => {
    axios
        .get(route("ajax.fetch", ["Word", "union_id", form.union_id]), form)
        .then((res) => {
            if (resetFormValues) {
                form.ward_id = "";
                form.village_id = "";
                villageDisable.value = true;
            }
            wards.value = res.data;
            wardDisable.value = wards.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("ward fetch done");
        });
};
const bazarFetch = (resetFormValues = false) => {
    if (props.title !== "Business") {
        return false;
    }
    axios
        .get(route("ajax.fetch", ["Bazar", "union_id", form.union_id]), form)
        .then((res) => {
            if (resetFormValues) {
                form.bazar_id = "";
            }
            bazar.value = res.data;
            bazarDisable.value = bazar.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("Bazar fetch done");
        });
};

const villageFetch = () => {
    axios
        .get(route("ajax.fetch", ["Village", "union_id", form.union_id]), form)
        .then((res) => {
            villege.value = res.data;
            villageDisable.value = villege.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("Village fetch done");
        });
};

watch(
    () => props.modelValue,
    (newValue, oldValue) => {
        form.division_id = newValue?.division_id ?? "";
        form.district_id = newValue?.district_id ?? "";
        form.upazila_id = newValue?.upazila_id ?? "";
        form.union_id = newValue?.union_id ?? "";
        form.ward_id = newValue?.ward_id ?? "";
        form.bazar_id = newValue?.bazar_id ?? "";
        form.village_id = newValue?.village_id ?? "";

        if (
            newValue?.division_id !== oldValue?.division_id &&
            form.district_id
        ) {
            districtFetch();
        }

        if (
            newValue?.district_id !== oldValue?.district_id &&
            form.upazila_id
        ) {
            upazilaFetch();
        }

        if (newValue?.upazila_id !== oldValue?.upazila_id && form.union_id) {
            unionFetch();
        }

        if (newValue?.union_id !== oldValue?.union_id && form.ward_id) {
            wardFetch();
            bazarFetch();
            villageFetch();
        }
    },
    { deep: true, immediate: true }
);

function updateCodeNumber() {}
watch(
    () => form,
    (newValue) => {
        emit("update:modelValue", { ...newValue });

        if (
            props.title == "Business" &&
            newValue?.bazar_id &&
            district.value?.length > 0
        ) {
            const districtObj = district?.value?.find(
                (item) => item.id === newValue?.district_id
            );
            const upazilaObj = upazila?.value?.find(
                (item) => item.id === newValue?.upazila_id
            );
            const unionObj = union?.value?.find(
                (item) => item.id === newValue?.union_id
            );
            const bazarObj = bazar?.value?.find(
                (item) => item.id === newValue?.bazar_id
            );
            emit(
                "codeUpdate",
                districtObj?.code +
                    "" +
                    upazilaObj?.code +
                    "" +
                    unionObj?.code +
                    "" +
                    bazarObj?.code +
                    "_" +
                    Date.now()
            );
        }
    },
    { deep: true }
);
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
            <select
                v-model="form.division_id"
                @change="districtFetch(true)"
                required
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">বিভাগ নির্বাচন করুন</option>
                <option
                    v-for="(division, key) in divisions"
                    :key="key"
                    :value="division.id"
                    :selected="form.division_id === division.id"
                >
                    {{ division.name }}
                </option>
            </select>
        </div>
        <div>
            <select
                v-model="form.district_id"
                @change="upazilaFetch(true)"
                :disabled="districtDisable"
                required
                :class="[
                    districtDisable
                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                        : '',
                ]"
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">জেলা নির্বাচন করুন</option>
                <option
                    v-for="(district, key) in district"
                    :key="key"
                    :value="district.id"
                    :selected="form.district_id === district.id"
                >
                    {{ district.name }}
                </option>
            </select>
        </div>
        <div>
            <select
                v-model="form.upazila_id"
                @change="unionFetch(true)"
                :disabled="upzilaDisable"
                required
                :class="[
                    upzilaDisable
                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                        : '',
                ]"
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">উপজেলা নির্বাচন করুন</option>
                <option
                    v-for="(upzil, key) in upazila"
                    :key="key"
                    :value="upzil.id"
                    :selected="form.upazila_id === upzil.id"
                >
                    {{ upzil.name }}
                </option>
            </select>
        </div>
        <div>
            <select
                v-model="form.union_id"
                @change="wardFetch(true), bazarFetch(true)"
                :disabled="unionDisable"
                required
                :class="[
                    unionDisable
                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                        : '',
                ]"
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">ইউনিয়ন নির্বাচন করুন</option>
                <option v-for="(un, key) in union" :key="key" :value="un.id">
                    {{ un.name }}
                </option>
            </select>
        </div>
        <div>
            <select
                v-model="form.ward_id"
                @change="villageFetch"
                :disabled="wardDisable"
                required
                :class="[
                    wardDisable
                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                        : '',
                ]"
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">ওয়ার্ড নির্বাচন করুন</option>
                <option
                    v-for="(wrd, key) in wards"
                    :key="key"
                    :value="wrd.id"
                    :selected="form.ward_id === wrd.id"
                >
                    {{ wrd.name }}
                </option>
            </select>
        </div>
        <div v-if="title == 'Business'">
            <select
                v-model="form.bazar_id"
                @change="villageFetch"
                :disabled="bazarDisable"
                required
                :class="[
                    bazarDisable
                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                        : '',
                ]"
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">বাজার নির্বাচন করুন</option>
                <option
                    v-for="(bzr, key) in bazar"
                    :key="key"
                    :value="bzr.id"
                    :selected="form.bazar_id === bzr.id"
                >
                    {{ bzr.name }}
                </option>
            </select>
        </div>
        <div>
            <select
                v-model="form.village_id"
                :disabled="villageDisable"
                required
                :class="[
                    villageDisable
                        ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                        : '',
                ]"
                class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">গ্রাম নির্বাচন করুন</option>
                <option
                    v-for="(vill, key) in villege"
                    :key="key"
                    :value="vill.id"
                    :selected="form.village_id === vill.id"
                >
                    {{ vill.name }}
                </option>
            </select>
        </div>
        <input type="hidden" name="title" v-model="form.title" />
    </div>
</template>
