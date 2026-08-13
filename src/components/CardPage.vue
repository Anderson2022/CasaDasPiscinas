<script setup lang="ts">
import Guapore from './../assets/imagen/guapore7-2.png'
import Hualai from './../assets/imagen/hualai-1.png'
import Iguacu from './../assets/imagen/iguacu-22.png'
import Parana from './../assets/imagen/parana8.png'
import grecia from './../assets/imagen/riodossinos5.png'
import irlandaHidro from './../assets/imagen/taquarisit.png'
import irlanda from './../assets/imagen/tapajos9.1.png'
import ScrollReveal from 'scrollreveal'
import { onMounted } from 'vue'

const pools = [
  {
    imageSrc: Guapore,
    title: 'Rio Guaporé',
    message: 'Design premium, resistência e acabamento impecável para quem valoriza conforto e sofisticação.'
  },
  {
    imageSrc: Hualai,
    title: 'Rio Hualai',
    message: 'Espaço para relaxar e compartilhar ótimos momentos com a família em um ambiente moderno.'
  },
  {
    imageSrc: Iguacu,
    title: 'Rio Iguaçu',
    message: 'Modelos com spa e prainha que unem funcionalidade, beleza e bem-estar em um único projeto.'
  },
  {
    imageSrc: Parana,
    title: 'Rio Paraná',
    message: 'Linha com formas elegantes e acabamento refinado, pensada para ambientes sofisticados.'
  },
  {
    imageSrc: grecia,
    title: 'Rio dos Sinos',
    message: 'Tradição com personalidade, perfeita para quem busca um visual clássico e muito acolhedor.'
  },
  {
    imageSrc: irlandaHidro,
    title: 'Rio Taquari',
    message: 'Ideal para quem quer hidromassagem e conforto com um visual luxuoso e acolhedor.'
  },
  {
    imageSrc: irlanda,
    title: 'Rio Tapajós',
    message: 'Uma solução moderna que valoriza a decoração, oferece conforto e deixa o ambiente ainda mais especial.'
  }
]

onMounted(() => {
  const sr = ScrollReveal({
    distance: '20px',
    duration: 800,
    delay: 200,
    easing: 'ease-in-out'
  })

  sr.reveal('.animated-element', { origin: 'bottom', interval: 100 })
})
</script>

<template>
  <section class="py-20">
    <div class="section-shell">
      <div class="mb-12 text-center animated-element">
        <span class="eyebrow">Coleção premium</span>
        <h2 class="section-title">Modelos que transformam o seu espaço.</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(pool, index) in pools"
          :key="index"
          class="animated-element group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/40 shadow-[0_18px_50px_rgba(14,165,233,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <div class="overflow-hidden">
            <img
              :src="pool.imageSrc"
              :alt="pool.title"
              class="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div class="space-y-3 p-6">
            <span class="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Piscina {{ index + 1 }}
            </span>
            <h3 class="text-2xl font-bold text-white">{{ pool.title }}</h3>
            <p class="text-sm leading-6 text-slate-300">{{ pool.message }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
