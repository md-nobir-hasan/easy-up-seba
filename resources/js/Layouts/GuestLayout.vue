<script setup>
import { ref } from "vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import appLogo from "@/Components/ApplicationLogo.vue";
import appLogo2 from "@/Components/AuthenticationCardLogo.vue";

defineProps({
    title: String,
});
</script>

<template>
    <div>
        <Head :title="title" />
        <slot />
    </div>
</template>
