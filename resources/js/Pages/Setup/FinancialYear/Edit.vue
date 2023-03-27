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
    from: usePage().props.mdata.from,
    to: usePage().props.mdata.to,
});
const submit = () => {
    form.put(route('admin.setup.financial-year.update',usePage().props.mdata.id), {
        onFinish: () => form.reset('from','to'),
    });
};
</script>

<template>
    <AppLayout title="অর্থ-বছর">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">অর্থ-বছর আপডেট</h2>
                <Link :href="route('admin.setup.financial-year.index')">
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
                        <InputLabel for="from" value="হইতে" />
                        <TextInput id="from" v-model="form.from" type="number" min="2020" max="2099" step="1" class="mt-1 block w-full" required />
                        <InputError class="mt-2" :message="form.errors.from" />
                    </div>
                    <div class="mt-8">
                        <InputLabel for="to" value="পর্যন্ত" />
                        <TextInput id="to" v-model="form.to" type="number" min="2020" max="2099" step="1" class="mt-1 block w-full" required />
                        <InputError class="mt-2" :message="form.errors.to" />

                        <InputError class="mt-2" :message="form.errors.to" />
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
