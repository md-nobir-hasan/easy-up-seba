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
    mdata: Object,
});
const form = useForm({
    name: usePage().props.mdata.name,
    price: usePage().props.mdata.price,
    des: usePage().props.mdata.des,
});
const submit = () => {
    form.put(route('admin.setup.tax.update',usePage().props.mdata.id), {
        onFinish: () => form.reset('name','des'),
    });
};
</script>

<template>
    <AppLayout title="টেক্স">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">টেক্স আপডেট</h2>
                <Link :href="route('admin.setup.tax.index')">
                <PrimaryButton class="font-extrabold">
                    ফিরে যান
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>

                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div>
                        <InputLabel for="name" value="নাম" />
                        <input type="hidden" name="id">
                        <TextInput
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full"
                            required
                            autofocus
                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>
                    <div class="mt-6">
                        <InputLabel for="price" value="মূল্য" />
                        <TextInput id="price" v-model="form.price" type="number" class="mt-1 block w-full" required autofocus
                            autocomplete="price" />
                        <InputError class="mt-2" :message="form.errors.price" />
                    </div>
                    <div class="mt-6">
                        <label for="message"
                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">বর্ণনা (ঐচ্ছিক)</label>
                    <textarea v-model="form.des" id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""></textarea>

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
