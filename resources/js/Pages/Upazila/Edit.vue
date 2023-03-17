<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
import { ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
defineProps({
    divisions: Object,
    upazila: Object,
});

const form = useForm({
    division_id: usePage().props.upazila.division_id,
    name: usePage().props.upazila.name,
    district_id: usePage().props.upazila.district_id,
});
let dists = ref({});
const removeOpt = ref(true);
const submit = () => {
    form.put(route('admin.setup.upazila.update',[usePage().props.upazila.id]), {
        onFinish: () => form.reset('name')
    });
};

const districtFetch = ()=>{
    axios.get(route('ajax.fetch',['District','division_id',form.division_id]), form).then(res => {
        dists.value = res.data;
        removeOpt.value = false;
        console.log(dists.value);
    }).catch(err =>{
        console.error(err)
    }).finally(() => {
        console.log('district fetch done');
    });
    }
    districtFetch()
</script>

<template>
    <AppLayout title="উপজেলা">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">উপজেলা আপডেট</h2>
                <Link :href="route('admin.setup.upazila.index')">
                <PrimaryButton class="font-extrabold">
                    ফিরে যান
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>

                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div class="mb-4">
                        <label for="division_id" class="block text-md font-medium text-gray-900 dark:text-white">বিভাগ</label>
                        <select id="division_id" v-model="form.division_id" @change="districtFetch" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">বিভাগ নির্বাচন করুন</option>
                            <option v-for="(division, key) in divisions" :value="division.id">{{ division.name }}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="district_id" class="block text-md font-medium text-gray-900 dark:text-white">জেলা</label>
                        <select id="district_id" v-model="form.district_id" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">জেলা নির্বাচন করুন</option>
                            <option v-for="(district, key) in dists" :value="district.id">{{ district.name }}</option>
                        </select>
                    </div>

                    <div>
                        <InputLabel for="name" value="উপজেলার নাম" />
                        <TextInput
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full"
                            required

                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="form.submit_btn = 'return'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            আপডেট
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
