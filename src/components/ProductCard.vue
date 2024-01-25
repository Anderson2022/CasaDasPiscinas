<!-- ProductCard.vue -->
<template>
  <router-link :to="{ name: 'product', params: { id: produto.id }}" @click="handleClick">
    <div :class="`flex-shrink-0 m-6 relative overflow-hidden bg-[#80286C] rounded-lg max-w-xs shadow-lg`">
      <img class="relative w-40" :src="`/imagen/${produto.image}`" :alt="produto.name">
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">{{ produto.name }}</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">{{ produto.name }}</span>
          
        </div>
      </div>
    </div>
    </router-link>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps(['produto']);

  const handleClick = () => {
  console.log('Clicou! produto1.id:', props.produto.id);
};
  </script>
  