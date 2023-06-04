<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SucMesgShow from "@/Components/SucMesgShow.vue";
import AppLayout from "@/Layouts/AppLayout.vue";

defineProps({
    report: Object,
});
</script>

<template>
    <AppLayout title="ট্রেড লাইসেন্স">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <SucMesgShow :message="$page.props.flash.suc_msg"></SucMesgShow>
            <div class="bg-white flex justify-between p-4">
                <h2 class="float-left text-4xl font-extrabold">
                    ট্রেড লাইসেন্স
                </h2>
                <div class="flex gap-3">
                    <Link :href="route('admin.trade-license.index')">
                        <PrimaryButton class="font-extrabold">
                            সব দেখুন
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
            <hr class="mb-1" />
        </div>
    </AppLayout>
</template>
