<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <Link :href="'/'">
    <div class="flex items-center justify-center">
        <svg height="48" class="w-12">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
                </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="22" stroke="blue" stroke-width="4" fill="url(#grad1)" />
            <text fill="#ffffff" font-size="18" font-family="Verdana" x="10" y="30">UP</text>
            Sorry, your browser does not support inline SVG.
        </svg>
    </div>
    </Link>
</template>
