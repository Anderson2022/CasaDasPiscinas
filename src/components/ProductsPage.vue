<script setup lang="ts">
import motor from "./../assets/imagen/motor.png"
import casa from "./../assets/imagen/95904590dd64731b64.webp"
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
    imageSrc: casa,
    description: 'CASA DE MAQUINAS',
    titulo: 'Bombas com motores bi volts de altíssimo rendimento'
  },

  {
    imageSrc: fliuto,
    description: 'Espanha',
    titulo: 'Mangueira azul/transparente 1 1/2'
  }
];

</script>

<template >
  <div class=" w-screen xl:w-screen xl:h-screen bg-[#AD1E70] flex items-center justify-center">
    <div class="w-full xl:w-[91%] xl:px-8
 h-full md:h-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 bg-[#42ccd6] shadow-2xl rounded-lg">
  <!-- Loop through items -->
  <div v-for="(item, index) in items" :key="index" class="select-none mb-24 w-full animated-element">
    <div class=" flex items-center justify-center h-full bg-white rounded-lg shadow-md">
      <a href="#" class="cursor-pointer">
        <img class=" w-72 h-72 rounded-lg object-cover border-b  cursor-pointer" :src="item.imageSrc" alt="product name" />
      </a>
    </div>

    <div class="px-4 -mt-16 relative ">
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
              Ver Produto &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>





</template>