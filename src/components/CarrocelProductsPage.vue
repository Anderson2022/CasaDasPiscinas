<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watchEffect, defineProps } from 'vue'

interface CarrosselProps {
  images: string[] | string[]
}

const props = defineProps<CarrosselProps>()

let activeIndex = ref(0)
let data = ref<string[]>([])

watchEffect(() => {
  if (props.images && Array.isArray(props.images)) {
    data.value = props.images as string[]
    console.log('Imagens do Carrossel:', data.value)
  }
})

let timerId: number | null = null

onMounted(() => {
  startAutoRotation()
})

onBeforeUnmount(() => {
  stopAutoRotation()
})

const prevImage = () => {
  if (data.value !== undefined) {
    if (Array.isArray(data.value[0])) {
      activeIndex.value = (activeIndex.value - 1 + data.value.length) % data.value.length
    } else {
      activeIndex.value =
        (activeIndex.value - 1 + (data.value as unknown as string[]).length) %
        (data.value as unknown as string[]).length
    }
  }
}

const nextImage = () => {
  if (data.value && data.value.length > 0) {
    activeIndex.value = (activeIndex.value + 1) % data.value.length
  }
}

const startAutoRotation = () => {
  timerId = setInterval(() => {
    nextImage()
  }, 3000)
}

const stopAutoRotation = () => {
  if (timerId !== null) {
    clearInterval(timerId)
    timerId = null
  }
}
</script>

<template>
<div class="h-32">
</div>
  <div id="animation-carousel" class="relative w-full bg-[#AD1E70]" data-carousel="static">
    <!-- Carousel wrapper -->
    <div
      v-for="(image, index) in data"
      :key="index"
      class="w-full transition-transform "
      :class="{
        hidden: index !== activeIndex,
        'duration-[600ms] ease-in-out motion-reduce:transition-none': index === activeIndex
      }"
      data-te-carousel-item
      :data-te-carousel-active="index === activeIndex"
    >
      <img
        :src="`/imagen/parana/${image}`"
        :alt="'Image ' + (index + 1)"
        class="block w-full h-auto max-w-full object-cover"
      />
    </div>

    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
      @click="prevImage"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
      @click="nextImage"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>
