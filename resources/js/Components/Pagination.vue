<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    meta: Array,
});
</script>
<template>
    <div v-if="meta.links?.length > 0" class="flex justify-between">
        <div class="text-gray-900 dark:text-gray-900">
            <p>
                Showing
                {{ meta.from }}
                to
                {{ meta.to }}
                of {{ meta.total }} results
            </p>
        </div>
        <div class="flex flex-wrap -mb-1 text-red-600">
            <template v-for="(link, p) in meta.links" :key="p">
                <div
                    v-if="link.url === null"
                    class="mr-1 mb-1 px-2 py-2 text-sm leading-4 text-gray-400 border rounded dark:text-white dark:bg-gray-700 hover:dark:bg-gray-800"
                    v-html="link.label"
                />
                <Link
                    v-else
                    class="mr-1 mb-1 px-3 py-2 text-sm leading-4 border rounded focus:border-indigo-500 focus:text-indigo-500 dark:text-white dark:bg-gray-700 hover:dark:bg-gray-800 hover:bg-gray-700 hover:text-gray-100"
                    :class="{
                        'text-white bg-blue-700 dark:text-white dark:bg-blue-700':
                            link.active,
                    }"
                    :href="link.url"
                >
                    <span v-html="link.label"></span>
                </Link>
            </template>
        </div>
    </div>
</template>
