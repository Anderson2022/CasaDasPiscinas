<script setup lang="ts">
import { Carousel, initTE } from 'tw-elements'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import teste from './../assets/post/promocao_semana01-1.jpg'
import teste2 from './../assets/post/retrato-de-um-menino-bonito-rindo.jpg'
import teste3 from './../assets/post/riosss.jpg'
import teste4 from './../assets/post/ofertasWeb.jpg'
import teste5 from './../assets/post/s.jpg'
import front30 from './../assets/post/Prancheta1.png'
import ScrollReveal from 'scrollreveal'
initTE({ Carousel })

const images = [teste, teste2, teste3, teste4, teste5]

const activeIndex = ref(0)
const autoplayInterval = 3000 // Intervalo de autoplay em milissegundos
let autoplayTimer: number | undefined

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % images.length
}

const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, autoplayInterval)
}

const stopAutoplay = () => {
  clearInterval(autoplayTimer)
}

onMounted(() => {
  startAutoplay() // Inicia o autoplay quando o componente é montado
})

onBeforeUnmount(() => {
  stopAutoplay() // Para o autoplay quando o componente é desmontado
})

onMounted(() => {
  const sr = ScrollReveal({
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out'
  })

  sr.reveal('.animated-element', { origin: 'bottom', interval: 100 })

  // Outras configurações e animações, se necessário
})
</script>

<template>
<div class="w-screen xl:w-screen bg-[#AD1E70] flex flex-col md:flex-row items-center justify-center ">
  <div class="relative animated-element xl:w-[95%] xl:rounded-lg mt-28 md:mt-32
" data-te-carousel-init data-te-ride="carousel">
    <div class="flex justify-between flex-col-reverse md:flex-row z-10 xl:rounded-lg">
      <div class="relative w-full h-48 md:h-screen xl:h-[75vh] overflow-hidden xl:rounded-lg">
        <div v-for="(image, index) in images" :key="index" :class="{ hidden: index !== activeIndex, 'duration-[600ms] ease-in-out motion-reduce:transition-none h-72 xl:h-[75vh] w-full transition-transform xl:rounded-lg': index === activeIndex }" data-te-carousel-item :data-te-carousel-active="index === activeIndex">
          <img :src="image" :alt="'Image ' + (index + 1)" class="block w-full h-48 md:h-screen object-contain xl:h-[75vh] xl:rounded-md">
        </div>
      </div>
    </div>
  </div>
  <div class="w-full md:w-[30%] mt-9 md:mt-36 md:ml-4 ">
    <div class="juice2 rounded-xl bg-primary-lite bg-cover">
      <div class="max-w-sm">
        <img :src="front30" alt="diverção" class="w-full h-auto animated-element">
      </div>
    </div>
  </div>
</div>


</template>
