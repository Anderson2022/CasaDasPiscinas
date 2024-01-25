<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductCardLux from './ProductCardLux.vue'
import pessoa from '../../src/assets/imagen/pessoa.jpg'
import retrato from '../../src/assets/imagen/retrato.jpg'
import vista from '../../src/assets/imagen/vista.jpg'
import jsonPath from '../components/product.json'
import jsonPathLux from '../components/productLux.json'
import jsonPathSpa from '../components/productSpa.json'
import ScrollReveal from 'scrollreveal'
import { Tooltip, initTE } from 'tw-elements'

interface Produto {
  id: number
  name: string
  image: string
  // Adicione outras propriedades, se necessário
}

const produtos = ref<Produto[]>([])
const produtosLLux = ref<Produto[]>([])
    const produtosSpa = ref<Produto[]>([])

const carregarJSON = async () => {
  try {
    // O conteúdo do arquivo JSON já foi importado diretamente
    // Não é necessário usar fetch, pois você já tem os dados
    produtos.value = jsonPath
    produtosLLux.value = jsonPathLux
    produtosSpa.value = jsonPathSpa
    console.log(produtos.value)
  } catch (erro) {
    console.error('Erro ao carregar o arquivo JSON:', erro)
  }
}

onMounted(carregarJSON)

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
onMounted(() => {
  initTE({ Tooltip })
})
</script>

<!-- Produtos.vue -->
<template>
  <div class="w-screen h-20 flex items-center justify-center bg-gray-100 animated-element">
    <h1 class="text-blue-500 font-bold italic text-4xl">Rio <span class="text-pool-500"></span></h1>
  </div>
  <div class="p-20 flex flex-wrap items-center justify-center animated-element">
    <ProductCard v-for="produto in produtos" :key="produto.id" :produto="produto" />
  </div>

  <div class="w-screen h-20 flex items-center justify-center bg-gray-100 animated-element">
    <h1 class="text-blue-500 font-bold italic text-4xl">
      Rio <span class="text-pool-500">Lux</span>
    </h1>
  </div>

  <div class="p-20 flex flex-wrap items-center justify-center animated-element">
    <ProductCardLux v-for="produto1 in produtosLLux" :key="produto1.id" :produto1="produto1" />
  </div>

  <div class="w-screen h-20 flex items-center justify-center bg-gray-100 animated-element">
    <h1 class="text-blue-500 font-bold italic text-4xl">
      Rio <span class="text-pool-500">SPA</span>
    </h1>
  </div>

  <div class="p-24 flex flex-wrap items-center justify-center animated-element">
    <ProductCardLux v-for="produto1 in produtosSpa" :key="produto1.id" :produto1="produto1" />
  </div>

  <!-- component -->
  <div class="py-16 bg-white">
    <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
      <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
        <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
          <h1 class="text-4xl text-gray-700 font-bold md:text-5xl">
            Compre agora e beneficie de até <span class="text-blue-500">30% de desconto</span>
          </h1>
          <p class="text-lg"></p>
          <div class="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
            <button
              type="button"
              title="Start buying"
              class="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
            >
              <span class="block text-white font-semibold"> Contato </span>
            </button>
            <button
              type="button"
              title="more about"
              class="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
            >
              <span class="block text-gray-600 font-semibold"> instagram </span>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
          <div class="col-span-2 row-span-4">
            <img
              :src="pessoa"
              class="rounded-full"
              width="640"
              height="960"
              alt="shoes"
              loading="lazy"
            />
          </div>
          <div class="col-span-2 row-span-2">
            <img
              :src="retrato"
              class="w-full h-full object-cover object-top rounded-xl"
              width="640"
              height="640"
              alt="shoe"
              loading="lazy"
            />
          </div>
          <div class="col-span-3 row-span-3">
            <img
              :src="vista"
              class="w-full h-full object-cover object-top rounded-xl"
              width="640"
              height="427"
              alt="shoes"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
