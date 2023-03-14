<script setup>
defineProps({
    message: String,
});
</script>

<template>
    <div v-show="message" class="bg-red text-center">
        <p class="text-2xl text-white">
            {{ message }}
        </p>
    </div>
</template>
