<!-- ProductCard.vue -->
<template>
    <div :class="`flex-shrink-0 m-6 relative overflow-hidden bg-${produto.color}-500 rounded-lg max-w-xs shadow-lg`">
      <img class="relative w-40" :src="produto.image" :alt="produto.name">
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">{{ produto.name }}</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">{{ produto.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps(['produto']);
  </script>
  