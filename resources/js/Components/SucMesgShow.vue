<script setup>
defineProps({
    message: String,
});
</script>

<template>
    <div v-show="message" class="bg-green-300 text-center">
        <p class="text-2xl text-white">
            {{ message }}
        </p>
    </div>
</template>
