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
    division: Object,
});
const form = useForm({
    name: usePage().props.division.name,
});
const submit = () => {
    form.put(route('admin.setup.division.update',usePage().props.division.id), {
        onFinish: () => form.reset('name'),
    });
};
</script>

<template>
    <AppLayout title="Division">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">Update Division</h2>
                <Link :href="route('admin.setup.division.index')">
                <PrimaryButton class="font-extrabold">
                    Back
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>

                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div>
                        <InputLabel for="name" value="Division Name" />
                        <input type="hidden" name="id" :value="$page.props.division.id">
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

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Update
                        </PrimaryButton>

                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
