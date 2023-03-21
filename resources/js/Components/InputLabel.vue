<script setup>
defineProps({
    value: String,
});
</script>

<template>
    <label class="block font-medium text-md font-bold  text-xl">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
