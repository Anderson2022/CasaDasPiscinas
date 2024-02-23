<script setup lang="ts">
import produtosData from '@/components/script/Image.json'
import { onMounted } from 'vue'
const produtos = produtosData[0].card.map((nomeArquivo, index) => ({
  id: index + 1, // Defina um ID para cada produto, se necessário
  name: `Image ${index + 1}`, // Nome do produto, você pode ajustar conforme necessário
  image: nomeArquivo
}))

console.log('Produtos:', produtos)

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
      class="h-[25rem] md:h-[69rem] xl:h-[83rem]  w-screen flex justify-center items-center animated-element"
    >
      <div
        class="bg-[#AD1E70] text-white rounded-lg w-full mx-2 space-y-6 p-3 xl:p5 xl:w-[90%] h-[19rem] md:h-[67rem] xl:h-[83rem]"
      >
        <!-- header -->
        <!-- image grid-->
        <div class="grid grid-cols-1 col-span-2 gap-2">
          <!-- Primeira linha com 3 produtos -->
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(produto, index) in produtos.slice(0, 3)"
              :key="index"
              class="overflow-hidden rounded-xl max-h-[20rem] max-w-[35rem]"
            >
              <img
                class="w-full object-contain animated-element"
                :src="`/imagen/card/${produto.image}`"
                :alt="produto.name"
              />
            </div>
          </div>
          <!-- Segunda linha com 2 produtos -->
          <div class="grid grid-cols-2 gap-2">
            <div
              v-for="(produto, index) in produtos.slice(3, 5)"
              :key="index"
              class="overflow-hidden rounded-xl max-w-[54rem]"
            >
              <img
                class="w-full object-contain max-w-[54rem] animated-element"
                :src="`/imagen/card/${produto.image}`"
                :alt="produto.name"
              />
            </div>
          </div>
          <!-- Terceira linha com 3 produtos -->
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(produto, index) in produtos.slice(5)"
              :key="index"
              class="overflow-hidden rounded-xl max-h-[20rem] max-w-[35rem]"
            >
              <img
                class="w-full object-contain animated-element"
                :src="`/imagen/card/${produto.image}`"
                :alt="produto.name"
              />
            </div>
          </div>
        </div>
        <!-- comments-->
      </div>
    </div>
  </div>
</template>
