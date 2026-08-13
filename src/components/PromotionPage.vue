<script setup lang="ts">
import images from '@/components/script/Image.json'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const promotions = images[0].Promotion
const selected = ref<string | null>(null)
const whats = 'https://api.whatsapp.com/send/?phone=5565981113042&text=Ol%C3%A1%2C+vi+uma+promo%C3%A7%C3%A3o+no+site&type=phone_number&app_absent=0'
const close = () => (selected.value = null)
const onKey = (event: KeyboardEvent) => event.key === 'Escape' && close()
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <main class="promo-page">
    <section class="inner-hero">
      <div class="section-shell"><p class="kicker"><span></span> oportunidades do mês</p><h1>Um mergulho<br /><em>mais perto.</em></h1><p>Condições especiais para transformar seu espaço em Cuiabá.</p></div>
    </section>
    <section class="section-shell promo-content">
      <div class="promo-heading"><div><p class="section-number">Ofertas selecionadas</p><h2>Escolha a sua favorita.</h2></div><span>{{ promotions.length }} campanhas ativas</span></div>
      <div class="promo-grid">
        <button v-for="(image,index) in promotions" :key="image" class="promo-card" @click="selected=image">
          <span class="promo-card__tag">Oferta 0{{ index + 1 }}</span>
          <img :src="`/imagen/promotion/${image}`" :alt="`Promoção Rio Piscinas ${index + 1}`" />
          <span class="promo-card__action">Ver em tamanho maior ↗</span>
        </button>
      </div>
      <div class="promo-contact"><div><small>Não encontrou o modelo ideal?</small><h2>Montamos uma condição para você.</h2></div><a :href="whats" target="_blank" rel="noopener" class="btn-primary cream">Falar no WhatsApp ↗</a></div>
    </section>
    <div v-if="selected" class="image-modal" role="dialog" aria-modal="true" @click.self="close"><button @click="close" aria-label="Fechar">×</button><img :src="`/imagen/promotion/${selected}`" alt="Promoção ampliada" /></div>
  </main>
</template>
