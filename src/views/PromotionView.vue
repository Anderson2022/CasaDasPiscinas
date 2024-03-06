<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderPage from '@/components/HeaderPage.vue'
import PromotionPage from '@/components/PromotionPage.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <main>
    <HeaderPage />
    <PromotionPage />
    <FooterPage />
    <RouterView />
  </main>
</template>
