<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import HeaderPage from '@/components/HeaderPage.vue';
import CarrocelPage from '@/components/CarrocelPage.vue';
import CardPage from './components/CardPage.vue';
import FooterPage from './components/FooterPage.vue';

</script>

<template>
  <HeaderPage/>
  <CarrocelPage/>
  <CardPage/>
  <FooterPage/>
  <RouterView />
</template>
