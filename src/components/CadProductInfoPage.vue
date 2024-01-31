<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'

// Defina as propriedades que você espera receber
const props = defineProps(['item'])

// Use a propriedade item normalmente
console.log('foundItem:', props.item)

const formatarTamanho = (tamanho: string) => {
  const partes = tamanho.split(', ');
  const tamanhoFormatado = partes.map(part => {
    const [letra, valor] = part.split(' ');
    return `<strong>${letra}</strong> ${valor}`;
  });
  return tamanhoFormatado.join(', ');
}

// Exemplo de watchEffect para observar alterações na propriedade
watchEffect(() => {
  console.log('item alterado:', props.item)
})
</script>
<template>
  <div class="flex h-screen">
    <!-- Div 1 (top left) -->
    <div class="flex-1 h-90vh w-90vw">
      <div v-if="item" class="text-white">
        <h2 class="text-6xl font-bold text-cyan-500 ml-8 mt-8">{{ item.name }}</h2>
        <p class="text-black ml-8 mr-8 mt-8">{{ item.descricao }}</p>
        <img
          :src="`/imagen/parana/${item.imageinfo}`"
          :alt="'Image '"
          class="block h-auto max-w-full object-cover w-3/4 mt-8 items-center mx-auto"
        />
      </div>
    </div>

    <!-- Div 2 (top right) -->
    <div v-if="item" class="flex-1 h-90vh w-90vw 0 text-center">
      <h2 class="text-5xl font-bold text-cyan-500 ml-8 mt-8 pb-4 border-b-2 border-gray-400">
        Medidas
      </h2>
      <div class="flex items-center justify-center mt-14">
        <div class="table-responsive">
          <table class="border-collapse w-full">
            <thead>
              <tr>
                <th class="p-4">Nome</th>
                <th class="p-4 rounded-full bg-pink-500 shadow-md w-52">Dimensões (C x L x P)</th>
                <th class="p-4">Preço</th>
                <th class="p-4">Promoções</th>
                <th class="p-4">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <!-- Utilizando v-for para iterar sobre os itens em item.info -->
              <tr
                v-for="(info, index) in item.info"
                :key="index"
                class="border-b-2 border-gray-300 h-10"
              >
                <!-- Utilizando o índice para acessar os elementos correspondentes em item.info -->
                <td class="items-start text-left">
                  {{ info.name }}<span class="text-red-500 text-left items-start">*</span>
                </td>
                <td class="items-start text-left" v-html="formatarTamanho(info.tamanho)"></td>

                <td>{{ info.PRECO }}</td>
                <td>{{ info.Promocao }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="flex h-screen">
    <!-- Div 3 (bottom left) -->
    <div class="flex-1 h-90vh w-90vw bg-yellow-500">
      <!-- Conteúdo da Div 3 -->
    </div>

    <!-- Div 4 (bottom right) -->
    <div class="flex-1 h-90vh w-90vw bg-red-500">
      <!-- Conteúdo da Div 4 -->
    </div>
  </div>
</template>
