<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderPage from '@/components/HeaderPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <main>
    <HeaderPage />
    <AboutPage />
    <FooterPage />
    <RouterView />
  </main>
</template>
