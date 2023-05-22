<script setup>
import { reactive, ref, watch } from "vue";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
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
    division_id: props.modelValue.division_id,
    district_id: props.modelValue.district_id,
    upazila_id: props.modelValue.upazila_id,
    union_id: props.modelValue.union_id,
    word_id: props.modelValue.word_id,
    village_id: props.modelValue.village_id,
});

watch(
    () => form,
    (newValue) => {
        emit("update:modelValue", { ...newValue });
    },
    { deep: true }
);

const district = ref({});
const districtDisable = ref(true);
const upazila = ref({});
const upzilaDisable = ref(true);
const union = ref({});
const unionDisable = ref(true);
const words = ref({});
const wordDisable = ref(true);
const villege = ref({});
const villageDisable = ref(true);

const districtFetch = () => {
    axios
        .get(
            route("ajax.fetch", ["District", "division_id", form.division_id]),
            form
        )
        .then((res) => {
            form.district_id = "";
            form.upazila_id = "";
            form.union_id = "";
            form.word_id = "";
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

const upazilaFetch = () => {
    axios
        .get(
            route("ajax.fetch", ["Upazila", "district_id", form.district_id]),
            form
        )
        .then((res) => {
            form.upazila_id = "";
            form.union_id = "";
            form.word_id = "";
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

const unionFetch = () => {
    axios
        .get(
            route("ajax.fetch", ["Union", "upazila_id", form.upazila_id]),
            form
        )
        .then((res) => {
            form.union_id = "";
            form.word_id = "";
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

const wordFetch = () => {
    axios
        .get(route("ajax.fetch", ["Word", "union_id", form.union_id]), form)
        .then((res) => {
            form.word_id = "";
            words.value = res.data;
            wordDisable.value = words.value.length === 0;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("word fetch done");
        });
};

const villageFetch = () => {
    axios
        .get(route("ajax.fetch", ["Village", "union_id", form.union_id]), form)
        .then((res) => {
            form.village_id = "";
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
</script>
<template>
    <div class="grid grid-cols-8 gap-3 my-5">
        <div class="col-span-2">
            <h2>{{ label }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 col-span-6">
            <div>
                <select
                    v-model="form.division_id"
                    @change="districtFetch"
                    required
                    class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">বিভাগ নির্বাচন করুন</option>
                    <option
                        v-for="(division, key) in divisions"
                        :key="key"
                        :value="division.id"
                    >
                        {{ division.name }}
                    </option>
                </select>
            </div>
            <div>
                <select
                    v-model="form.district_id"
                    @change="upazilaFetch"
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
                    >
                        {{ district.name }}
                    </option>
                </select>
            </div>
            <div>
                <select
                    v-model="form.upazila_id"
                    @change="unionFetch"
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
                    >
                        {{ upzil.name }}
                    </option>
                </select>
            </div>
            <div>
                <select
                    v-model="form.union_id"
                    @change="wordFetch"
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
                    <option
                        v-for="(un, key) in union"
                        :key="key"
                        :value="un.id"
                    >
                        {{ un.name }}
                    </option>
                </select>
            </div>
            <div>
                <select
                    v-model="form.word_id"
                    @change="villageFetch"
                    :disabled="wordDisable"
                    required
                    :class="[
                        wordDisable
                            ? 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600'
                            : '',
                    ]"
                    class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">ওয়ার্ড নির্বাচন করুন</option>
                    <option
                        v-for="(wor, key) in words"
                        :key="key"
                        :value="wor.id"
                    >
                        {{ wor.name }}
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
                    >
                        {{ vill.name }}
                    </option>
                </select>
            </div>
            <input type="hidden" name="title" v-model="form.title" />
        </div>
    </div>
</template>
