<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import HeaderPage from '@/components/HeaderPage.vue';
import CarrocelPage from '@/components/CarrocelPage.vue';
import CardPage from './components/CardPage.vue';
import FooterPage from './components/FooterPage.vue';
import ProductsPage from './components/ProductsPage.vue';
</script>

<template>
  <HeaderPage/>
  <CarrocelPage/>
  <CardPage/>
<ProductsPage/>
  <FooterPage/>
  <RouterView />
</template>
