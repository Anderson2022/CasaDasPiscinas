<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderPage from '@/components/HeaderPage.vue'
import StockPage from '@/components/StockPage.vue'
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
  <main>
    <HeaderPage />
    <StockPage />
    <FooterPage />
    <RouterView />

  </main>
</template>
