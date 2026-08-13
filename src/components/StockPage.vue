<script setup lang="ts">
import { computed, ref } from 'vue'
import rio from './product.json'
import lux from './productLux.json'
import spa from './productSpa.json'
import banho from './productBanheira.json'

const lines = [
  { key: 'rio', label: 'Linha Rio', description: 'Piscinas para todos os espaços', products: rio },
  { key: 'lux', label: 'Rio Lux', description: 'Design e acabamento premium', products: lux },
  { key: 'spa', label: 'Spas', description: 'Relaxamento dentro de casa', products: spa },
  { key: 'banho', label: 'Banheiras', description: 'Seu ritual particular', products: banho }
]
const active = ref('rio')
const query = ref('')
const current = computed(() => lines.find(line => line.key === active.value) ?? lines[0])
const products = computed(() => current.value.products.filter(product => product.name.toLocaleLowerCase('pt-BR').includes(query.value.toLocaleLowerCase('pt-BR'))))
</script>

<template>
  <main class="catalog-page">
    <section class="inner-hero catalog-hero"><div class="section-shell"><p class="kicker"><span></span> encontre o seu modelo</p><h1>Cada espaço pede<br /><em>um novo rio.</em></h1><p>Compare linhas, formatos e tamanhos sem perder acesso às medidas, preços e plantas.</p></div></section>
    <section class="section-shell catalog-content">
      <nav class="catalog-tabs" aria-label="Linhas de produtos">
        <button v-for="line in lines" :key="line.key" :class="{active:active===line.key}" @click="active=line.key"><strong>{{ line.label }}</strong><small>{{ line.products.length }} modelos</small></button>
      </nav>
      <div class="catalog-toolbar"><div><p class="section-number">{{ current.description }}</p><h2>{{ current.label }}</h2></div><label><span>Buscar modelo</span><input v-model="query" type="search" placeholder="Ex.: Paraná" /></label></div>
      <div v-if="products.length" class="catalog-grid">
        <router-link v-for="(product,index) in products" :key="`${active}-${product.id}`" :to="{name:'product',params:{id:product.id}}" class="catalog-card">
          <span class="catalog-card__number">{{ String(index + 1).padStart(2,'0') }}</span>
          <div class="catalog-card__image"><img :src="`/imagen/parana/${product.image}`" :alt="product.name" loading="lazy" /></div>
          <div class="catalog-card__footer"><div><small>{{ current.label }}</small><h3>{{ product.name }}</h3></div><b>↗</b></div>
        </router-link>
      </div>
      <p v-else class="catalog-empty">Nenhum modelo encontrado com “{{ query }}”.</p>
    </section>
  </main>
</template>
