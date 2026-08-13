<script setup lang="ts">
import logo from '@/assets/imagen/rio ccz.png'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const open = ref(false)
const route = useRoute()
const isHome = computed(() => route.path === '/')
const whats = 'https://api.whatsapp.com/send/?phone=5565981113042&text=Ol%C3%A1%2C+quero+um+or%C3%A7amento&type=phone_number&app_absent=0'
const links = [
  { label: 'Piscinas', to: '/stock' }, { label: 'Promoções', to: '/promotion' },
  { label: 'Nossa história', to: '/about' }, { label: 'Contato', to: '/contact' }
]
</script>

<template>
  <header class="site-header" :class="{ 'site-header--internal': !isHome }">
    <nav class="section-shell nav">
      <router-link to="/" class="brand"><span class="brand__crop"><img :src="logo" alt="Rio Piscinas Cuiabá" /></span></router-link>
      <div class="nav__links">
        <router-link v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</router-link>
      </div>
      <a :href="whats" target="_blank" rel="noopener" class="nav__cta"><i class="fab fa-whatsapp"></i> Fale com a gente</a>
      <button class="menu-toggle" @click="open = !open" :aria-expanded="open" aria-label="Abrir menu"><span></span><span></span></button>
    </nav>
    <div v-if="open" class="mobile-menu">
      <router-link v-for="link in links" :key="link.to" :to="link.to" @click="open = false">{{ link.label }}</router-link>
      <a :href="whats" target="_blank">WhatsApp ↗</a>
    </div>
  </header>
</template>
