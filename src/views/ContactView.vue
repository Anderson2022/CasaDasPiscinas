<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderPage from '@/components/HeaderPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <main>
    <HeaderPage />
    <ContactPage />
    <FooterPage />
    <RouterView />
  </main>
</template>
