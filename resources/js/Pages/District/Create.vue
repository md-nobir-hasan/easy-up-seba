<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
import { router } from '@inertiajs/vue3'
defineProps({
    divisions: Object,
});

const form = useForm({
    name: '',
    code: '',
    division_id: '',
    submit_btn:'',
});

const submit = () => {
    form.post(route('admin.setup.district.store'), {
        onFinish: () => form.reset('name')
    });
};

</script>

<template>
    <AppLayout title="জেলা">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">জেলা যোগ</h2>
                <Link :href="route('admin.setup.district.index')">
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
                        <select id="division_id" v-model="form.division_id" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">বিভাগ নির্বাচন করুন</option>
                            <option v-for="(division, key) in divisions" :value="division.id">{{ division.name }}</option>
                        </select>
                    </div>

                    <!-- Name  -->
                    <div>
                        <InputLabel for="name" value="জেলার নাম" />
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

                    <!-- Code  -->
                    <div>
                        <InputLabel for="code" value="জেলা কোড" />
                        <TextInput
                            id="code"
                            v-model="form.code"
                            type="number"
                            class="mt-1 block w-full"
                            required
                        />
                        <InputError class="mt-2" :message="form.errors.code" />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="form.submit_btn = 'return'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সংরক্ষণ
                        </PrimaryButton>
                        <PrimaryButton  @click="form.submit_btn = 'new'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            সংরক্ষণ এবং নতুন
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
