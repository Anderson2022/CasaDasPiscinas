<script setup lang="ts">
import { Carousel, initTE } from 'tw-elements'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import teste from './../assets/post/promocao_semana01-1.jpg'
import teste2 from './../assets/post/retrato-de-um-menino-bonito-rindo.jpg'
import teste3 from './../assets/post/riosss.jpg'
import teste4 from './../assets/post/ofertasWeb.jpg'
import teste5 from './../assets/post/s.jpg'
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
    duration: 800,
    delay: 200,
    easing: 'ease-in-out'
  })

  sr.reveal('.animated-element', { origin: 'bottom', interval: 100 })

  // Outras configurações e animações, se necessário
})
</script>


<template>
    <div class="w-screen xl:w-screen bg-[#AD1E70] flex items-center justify-center">
       <div
    id="carouselExampleControls"
    class="relative animated-element xl:w-[95%]"
    data-te-carousel-init
    data-te-ride="carousel"
  >
    <div class="flex justify-between z-10">
      <!-- <button
        class="flex items-center justify-center p-2 text-gray-500 opacity-50 hover:opacity-90 focus:opacity-90 focus:outline-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="prev"
        @click="prevSlide"
      >
        <span class="inline-block h-6 w-6">
          <i class="fas fa-chevron-left"></i>
        </span>
      </button> -->

      <div class="relative w-full h-48 md:h-screen xl:h-screen overflow-hidden">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full transition-transform"
          :class="{
            hidden: index !== activeIndex,
            'duration-[600ms] ease-in-out motion-reduce:transition-none h-72 xl:h-screen':
              index === activeIndex
          }"
          data-te-carousel-item
          :data-te-carousel-active="index === activeIndex"
        >
          <img
            :src="image"
            :alt="'Image ' + (index + 1)"
            class="block w-full h-48 md:h-screen object-contain"
          />
        </div>
      </div>
      <!-- <button
        class="flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="next"
        @click="nextSlide"
      >
        <span class="inline-block h-6 w-6">
          <i class="fas fa-chevron-right"></i>
        </span>
      </button> -->
    </div>
  </div> 
    </div>

</template>
