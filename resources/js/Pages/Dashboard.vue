<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
defineProps({
    ksum: String,
    kcount: String,
});

// Create our number formatter.
const formatter = new Intl.NumberFormat('bn-BD', {
  style: 'currency',
  currency: 'BDT',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
</script>

<template>
    <AppLayout title="Dashboard">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl max-w-lg mx-auto rounded-lg">
                    <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
                        <h4 class="text-center font-extrabold">সর্বমোট খানাঃ {{ new Intl.NumberFormat().format(kcount) }}</h4>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
                <div class="bg-white overflow-hidden shadow-xl max-w-lg mx-auto rounded-lg">
                    <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
                        <h4 class="text-center font-extrabold">সর্বমোট বার্ষিক আয়ঃ {{formatter.format(ksum)  }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
