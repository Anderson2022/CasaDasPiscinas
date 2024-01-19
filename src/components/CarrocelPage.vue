<script setup lang="ts">
import {
  Carousel,
  initTE,
} from "tw-elements";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import teste from "./../assets/imagen/teste1.jpg"
import teste2 from "./../assets/imagen/teste2.jpg"
import teste3 from "./../assets/imagen/teste3.jpg"
initTE({ Carousel });

const images = [
teste,teste2, teste3,
  'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
  'https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
];

const activeIndex = ref(0);
const duration = 600;
const autoplayInterval = 3000; // Intervalo de autoplay em milissegundos
let autoplayTimer: number | undefined;

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length;
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % images.length;
};

const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    nextSlide();
  }, autoplayInterval);
};

const stopAutoplay = () => {
  clearInterval(autoplayTimer);
};

onMounted(() => {
  startAutoplay(); // Inicia o autoplay quando o componente é montado
});

onBeforeUnmount(() => {
  stopAutoplay(); // Para o autoplay quando o componente é desmontado
});
</script>

<template>
  <div id="carouselExampleControls" class="relative" data-te-carousel-init data-te-ride="carousel">
    <!-- Carousel items -->
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <!-- Loop para renderizar cada imagem -->
      <div v-for="(image, index) in images" :key="index"
           class="relative float-left -mr-[100%] w-full transition-transform"
           :class="{ 'hidden': index !== activeIndex, 'duration-[600ms] ease-in-out motion-reduce:transition-none': index === activeIndex }"
           data-te-carousel-item :data-te-carousel-active="index === activeIndex">
           <img :src="image" :alt="'Image ' + (index + 1)" class="block w-full h-[39rem] max-h-[40rem] object-cover" />
      </div>
    </div>

    <!-- Carousel controls - prev item -->
    <button class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleControls" data-te-slide="prev" @click="prevSlide">
      <span class="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </span>
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
    </button>
    <!-- Carousel controls - next item -->
    <button class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleControls" data-te-slide="next" @click="nextSlide">
      <span class="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
    </button>
  </div>
</template>
