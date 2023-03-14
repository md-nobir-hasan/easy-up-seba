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
    role: Object,
    modules: Object,
    perms: Object,
});

const form = useForm({
    name: usePage().props.role.name,
    perm:{},
    ased:{},
});
const modCheck = (rol,mod) =>{
    let chec = false;
    usePage().props.perms.forEach(function(val,key){
       if(val.role_id == rol && val.module_id == mod){
            form.perm[val.module_id] = true;
            chec = true;
       }
    });
    return chec;
}
const valueChange = (module_id) =>{
    if(form.perm[module_id] == true){
        form.perm[module_id] = false;
    }else{
        form.perm[module_id] = true;
    }
}
const valueChange2 = (module_id,ased) =>{
    if(form.ased[module_id+ased] == true){
        form.ased[module_id+ased] = false;
    }else{
        form.ased[module_id+ased] = true;
    }
}
const check2 = (rol,mod,ased) =>{
    let chec = false;
    usePage().props.perms.forEach(function(val,key){
       if(val.role_id == rol && val.module_id == mod && val[ased] == 1){
            form.ased[val.module_id+ased] = true;
            chec = true;
       }
    });
    return chec;
}



const submit = () => {
    form.put(route('admin.user.role.update', usePage().props.role.id), {
        onFinish: () => form.reset('name'),
    });
};
</script>

<template>
    <AppLayout title="Role">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-3xl font-extrabold">Update Role</h2>
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
                        <input type="hidden" name="id" :value="$page.props.role.id">
                        <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required autofocus
                            autocomplete="name" />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div v-for="(modul, key) in modules" class="inset-px mb-4">
                        <hr>
                        <div class="flex items-center">
                            <input :id="key" @change="valueChange(modul.id)" type="checkbox" :checked="modCheck($page.props.role.id,modul.id)" :value="modul.id"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label :for="key"
                                class="ml-2 text-2xl text-[blue] font-medium dark:text-gray-300">{{ modul.name }}</label>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center mb-4 ml-8">
                                <input @change="valueChange2(modul.id,'add')" :checked="check2($page.props.role.id,modul.id,'add')" :id="key + 'dkjf'"  type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key + 'dkjf'"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Add</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input @change="valueChange2(modul.id,'show')" :checked="check2($page.props.role.id,modul.id,'show')" :id="key + 'kdf3'" type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key + 'kdf3'"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Show</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input @change="valueChange2(modul.id,'edit')" :checked="check2($page.props.role.id,modul.id,'edit')" :id="key + 'kdfr'" type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key + 'kdfr'"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Edit</label>
                            </div>
                            <div class="flex items-center mb-4 ml-8">
                                <input @change="valueChange2(modul.id,'delete')" :checked="check2($page.props.role.id,modul.id,'delete')" :id="key + 'kdf'" type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="key + 'kdf'"
                                    class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Delele</label>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Update
                        </PrimaryButton>

                    </div>
                </form>
            </FormLayout>
        </div>
    </AppLayout></template>
