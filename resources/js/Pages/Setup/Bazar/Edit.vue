<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
import { usePage } from '@inertiajs/vue3';
defineProps({
    unions: Object,
    bazar: Object,
});
const form = useForm({
    name: usePage().props.bazar.name,
    code: usePage().props.bazar.code,
    union_id: usePage().props.bazar.union.id,
});
const submit = () => {
    form.put(route('admin.setup.bazar.update',usePage().props.bazar.id), {
        onFinish: () => form.reset('name'),
    });
};
</script>

<template>
    <AppLayout title="বাজার">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">বাজার আপডেট</h2>
                <Link :href="route('admin.setup.bazar.index')">
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
                        <label for="union_id" class="block text-md font-medium text-gray-900 dark:text-white">ইউনিয়ন</label>
                        <select id="union_id" v-model="form.union_id" class="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected value="">ইউনিয়ন নির্বাচন করুন</option>
                            <option v-for="(union, key) in unions" :value="union.id" :key="key">{{ union.name }}</option>
                        </select>
                    </div>
                    <div>
                        <InputLabel for="name" value="বাজারর নাম" />
                        <input type="hidden" name="id" :value="$page.props.bazar.id">
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
                        <InputLabel for="code" value="বাজার কোড" />
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
                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            আপডেট
                        </PrimaryButton>

                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
