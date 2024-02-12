<script setup lang="ts">
import motor from "./../assets/imagen/motor.png"
import mangueira from "./../assets/imagen/mangueira.png"
import fliuto from "./../assets/imagen/fliuto.png"
import { onMounted } from 'vue';

onMounted(() => {
  const sr = ScrollReveal({
    distance: '20px',
    duration: 800,
    delay: 200,
    easing: 'ease-in-out',
  });

  sr.reveal('.animated-element', { origin: 'bottom', interval: 100 });

  // Outras configurações e animações, se necessário
});



const items = [
  {
    imageSrc: motor,
    description: 'MOTOR PARA PISCINA',
    titulo: 'Bombas com motores bi volts de altíssimo rendimento'
  },

  {
    imageSrc: fliuto,
    description: 'Espanha',
    titulo: 'Mangueira azul/transparente 1 1/2'
  }
];

</script>

<template>
<div class="w-full h-full md:h-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 bg-blue-400">
  <!-- Loop through items -->
  <div v-for="(item, index) in items" :key="index" class="select-none mb-6 w-full animated-element">
    <div class="relative pb-64">
      <a href="#" class="cursor-pointer">
        <img class="absolute w-full h-full rounded-lg object-cover border-b shadow-md cursor-pointer" :src="item.imageSrc" alt="product name" />
      </a>
    </div>

    <div class="px-4 -mt-16 relative">
      <div class="bg-slate-300 rounded-lg shadow-lg border">
        <div class="p-5">
          <div class="flex justify-between items-center">
            <div class="opacity-75 text-xs">
              <a class="hover:underline" href="#">
                {{ item.titulo }}
              </a>
            </div>
          </div>

          <a class="text-gray-800 block mt-2 truncate hover:underline font-medium text-lg" href="#">
            {{ item.description }}
          </a>
        </div>

        <div class="flex justify-between items-center pb-3 px-4">
          <div>
   
            <div class="text-gray-800 text-lg">
              <!-- <span class="line-through opacity-75">{{ item.oldPrice }}</span>
              <span class="font-medium">{{ item.newPrice }}</span> -->
            </div>
          </div>

          <div>
            <a class="btn-link flex items-center text-xs text-indigo-600 hover:underline" href="#">
              View Product &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




</template>