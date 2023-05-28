<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue';
import { ChevronDownIcon} from '@heroicons/vue/24/solid'

    defineProps({
        items:Object,
        ncheck:Function,
    });
</script>
<template>
    <div v-if="!items.children.length" >
        <Link  v-if="$page.props.auth.user && ncheck(items.name)" :href="items.route"

        :class="['flex items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
        $page.url.startsWith(items.url) ? 'font-semibold text-[blue] hover:bg-[black]': '']"
        >
            <component :is="items.icon" v-if="items.icon" class="h-6 mr-1"></component>
            <span>{{ items.title }}</span>

        </Link>
    </div>
    <Disclosure v-else-if="$page.props.auth.user && ncheck(items.name)" v-slot="{open}" :default-open="$page.url.startsWith(items.url)" >
        <DisclosureButton class="py-2 flex pl-2 items-center w-full hover:bg-gray-100" :class="[open ? 'font-bold text-[white] bg-[black] hover:bg-[black] hover:text-[black]': 'text-[black] dark:text-gray-300 hover:text-[black] font-medium']">
            <component :is="items.icon" v-if="items.icon" class="h-6 mr-1"></component>
            <span class="flex-1 text-left block">{{ items.title }}</span>
            <ChevronDownIcon class="h-5 w-6 shrink-0 mr-1" :class="[open? '-rotate-180' : '']"/>
        </DisclosureButton>
        <DisclosurePanel class="pl-4" :class="[ $page.url.startsWith(items.url) ? 'bg-[#80808017]': '']">
            <submenue v-for="(subitem, subkey) in items.children" :key="subkey" :items= subitem :ncheck="ncheck" />
        </DisclosurePanel>
      </Disclosure>

</template>
