<template>

    <div :class="`flex-shrink-0 m-6 relative overflow-hidden bg-[#80286C] rounded-lg max-w-xs shadow-lg`">
     
      <img class="relative w-40" :src="`/imagen/${produto1.image}`" :alt="produto1.name">

      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">{{ produto1.name }}</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">{{ produto1.name }}</span>
  
        </div>
        
      </div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['produto1']);

import { useRouter } from 'vue-router';

const router = useRouter();

const handleButtonClick = () => {
  console.log('Clicou! Redirecionando para /product');
  router.push('/product');
};
</script>

