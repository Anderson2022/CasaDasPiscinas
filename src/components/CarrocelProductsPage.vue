<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ images: string[] }>()
const active = ref(0)
const next = () => active.value = (active.value + 1) % props.images.length
const prev = () => active.value = (active.value - 1 + props.images.length) % props.images.length
</script>

<template>
  <section class="product-gallery">
    <div class="product-gallery__stage">
      <img v-for="(image,index) in images" v-show="active===index" :key="image" :src="`/imagen/parana/${image}`" :alt="`Projeto realizado ${index + 1}`" />
      <div class="product-gallery__shade"></div>
      <p>Projetos que inspiram<br /><em>novos mergulhos.</em></p>
      <div class="product-gallery__controls"><button @click="prev" aria-label="Imagem anterior">←</button><span>{{ String(active+1).padStart(2,'0') }} / {{ String(images.length).padStart(2,'0') }}</span><button @click="next" aria-label="Próxima imagem">→</button></div>
    </div>
    <div class="product-gallery__thumbs"><button v-for="(image,index) in images" :key="image" :class="{active:active===index}" @click="active=index"><img :src="`/imagen/parana/${image}`" alt="" /></button></div>
  </section>
</template>
