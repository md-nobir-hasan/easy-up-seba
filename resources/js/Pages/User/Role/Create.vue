<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SucMesgShow from '@/Components/SucMesgShow.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormLayout from '@/Components/FormLayout.vue';
defineProps({
    title: String,
    modules: Object,
});

const form = useForm({
    name: '',
    submit_btn:'',
    perm:{},
    ased:{},
});
const submit = () => {
    form.post(route('admin.user.role.store'), {
        onFinish: () => form.reset('name'),
    });
};
</script>

<template>
    <AppLayout title="Role">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">Create Role</h2>
                <Link :href="route('admin.user.role.index')">
                <PrimaryButton class="font-extrabold">
                    Back
                </PrimaryButton>
                </Link>
            </div>
            <hr class="mb-1">
            <FormLayout class="bg-white">
                <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>

                <form @submit.prevent="submit" class="bg-white p-8 text-2lg">
                    <div class="mb-8">
                        <InputLabel for="name" value="Role Name" />
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
                    <div v-for="(modul, key) in modules" class="inset-px mb-4">
                        <hr>
                        <div class="flex items-center">
                            <input :id="key" v-model="form.perm[modul.id]" type="checkbox" :value="modul.id" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label :for="key" class="ml-2 text-2xl text-[blue] font-medium dark:text-gray-300">{{modul.name}}</label>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.ased[modul.id+'add']" :id="key+'dkjf'" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key+'dkjf'" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Add</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.ased[modul.id+'show']" :id="key+'kdf3'" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key+'kdf3'" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Show</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.ased[modul.id+'edit']" :id="key+'kdfr'" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key+'kdfr'" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Edit</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input v-model="form.ased[modul.id+'delete']" :id="key+'kdf'" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key+'kdf'" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Delele</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton @click="form.submit_btn = 'return'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Save
                        </PrimaryButton>
                        <PrimaryButton  @click="form.submit_btn = 'new'" class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Save and New
                        </PrimaryButton>
                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout>
</template>
