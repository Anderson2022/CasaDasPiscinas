<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import CarrocelPage from '@/components/CarrocelPage.vue'
import CardPage from '@/components/CardPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import ProductsPage from '@/components/ProductsPage.vue'
import HomePage from '@/components/HomePage.vue'
import CookieManager from '@/components/CookieManager.vue';

</script>

<template>
  <main>
    <CookieManager />
    <HeaderPage />
    <HomePage/>
    <CarrocelPage />
    <CardPage />
    <ProductsPage />
    <FooterPage />
  </main>
</template>
