<template>
    <div class="min-h-screen flex flex-col">
        <Topbar />

        <main class="min-h-screen">
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import Topbar from '@/components/TopBar.vue'
import Footer from '@/components/FootBar.vue'
</script>