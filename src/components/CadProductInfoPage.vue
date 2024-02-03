<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'
import CardProductDetallPage from './CardProductDetallPage.vue'

// Defina as propriedades que você espera receber
const props = defineProps(['item'])

// Use a propriedade item normalmente
console.log('foundItem:', props.item)

const formatarTamanho = (tamanho: string) => {
  const partes = tamanho.split(', ')
  const tamanhoFormatado = partes.map((part) => {
    const [letra, valor] = part.split(' ')
    return `<strong>${letra}</strong> ${valor}`
  })
  return tamanhoFormatado.join(', ')
}

// Exemplo de watchEffect para observar alterações na propriedade
watchEffect(() => {
  console.log('item alterado:', props.item)
})
</script>

<template>
  <div class="flex flex-col lg:flex-col md:flex-col sm:flex-col">
    <div class="flex flex-col lg:flex-row">
      <!-- Div 1 (top left) -->
      <div class="flex-1 lg:h-90vh lg:w-90vw p-8">
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
      <div v-if="item" class="flex-1 lg:h-90vh lg:w-90vw 0 text-center lg:ml-4 mt-4 lg:mt-0">
        <h2 class="text-5xl font-bold text-cyan-500 mt-8 pb-4 border-b-2 border-gray-400">
          Medidas
        </h2>
        <div class="flex items-center justify-center mt-14">
          <div class="table-responsive">
            <table class="border-collapse w-full sm:w-full">
              <thead>
                <tr>
                  <th class="p-2 sm:p-1 w-48 sm:w-56 md:w-64 text-sm sm:text-base">Nome</th>
                  <th class="p-2 sm:p-1 w-48 sm:w-56 md:w-64 h-4 text-sm sm:text-base">
                    Dimensões (C x L x P)
                  </th>
                  <th class="p-2 sm:p-1 w-1/3 md:w-40 text-sm sm:text-base">Preço</th>
                  <th class="p-1 sm:p-0.5 w-9 md:w-9 text-sm sm:text-base">Promo</th>
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
                  <td
                    class="items-start text-left text-sm sm:text-base w-80 sm:w-24 md:w-32 p-2 sm:p-1"
                  >
                    {{ info.name }}<span class="text-red-500">*</span>
                  </td>

                  <td
                    class="items-start text-left text-sm sm:text-base w-80 sm:w-24 md:w-32"
                    v-html="formatarTamanho(info.tamanho)"
                  ></td>
                  <td class="text-sm sm:text-base w- sm:w-24 md:w-32 font-bold">
                    R${{ info.PRECO }}
                  </td>

                  <td v-if="info.Promocao !== '0'" class="pr-1 sm:pr-2">
                    <button
                      class="rounded-full bg-orange-600 w- sm:w-24 md:w-32 p-2 sm:p-1 text-xs sm:text-sm"
                     
                    >
                    <!-- @click="abrirModal(info.Promocao)" -->
                      Ver
                    </button>
                  </td>

                  <td v-else class="pr-1 sm:pr-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row md:flex-col">
      <!-- Div 3 (bottom left) -->
      <div class="flex-1 lg:w-1/2 md:w-full p-3 md:relative">
        <h2
          class="text-4xl font-bold text-cyan-500 mt-8 pb-4 border-b-2 border-gray-400 text-center"
        >
          EQUIPAMENTOS QUE ACOMPANHAM<BR /> A SUA RIO PISCINA
        </h2>
        <p class="text-black ml-8">Filtro e bomba;(sistema de filtragem de areia).</p>
        <p class="text-black ml-8">Kit de limpeza (cab o, peneira, aspirador, escova.);</p>
        <p class="text-black ml-8">02 pontos de hidromassagem</p>
        <p class="text-black ml-8">led</p>

        <div class="relative overflow-hidden">
          <p class="text-justify ml-8">
            <small>
              Os preços acima são completos: Piscina, Filtro, Kit Aspiração Total, Parte Hidráulica
              Completa, Mão de Obra de Instalação e Frete. <br />
              Obs:
            </small>
          </p>
          <div class="text-center">
            <ul>
              <li>
                <h4>
                  <small
                    ><strong><span style="color: red">* Lançamentos</span></strong
                    >, <strong>verifique programação de entrega.</strong></small
                  >
                </h4>
                <small> </small>
              </li>
              <li><small>Frete e Mão de Obra podem variar conforme condições locais.</small></li>
            </ul>
            <small>
              <br />
              Os preços acima podem sofrer alterações sem aviso prévio.
            </small>
          </div>
             <div>
          <CardProductDetallPage :item="props.item" />
        </div>
        </div>
     
      </div>

      <!-- Div 4 (bottom right) -->
      <div class="flex-1 lg:w-1/2 md:w-full">
        <div
          v-if="item && item.materias && item.materias.length > 0"
          class="flex items-center justify-center mt-4"
        >
          <img :src="`/imagen/equipamentos/${item.materias[0]}`" alt="Primeira Imagem" class="" />
        </div>

        <div v-if="item && item.materias && item.materias.length">
          <div
            v-for="(materia, index) in Math.ceil(item.materias.length / 3)"
            :key="index"
            class="flex items-center justify-center"
          >
            <!-- Utilize o índice para obter o início e o fim do grupo de 3 imagens -->
            <div v-for="i in 3" :key="i" class="ml-4">
              <img
                v-if="index * 3 + (i - 1) < item.materias.length"
                :src="`/imagen/equipamentos/${item.materias[index * 3 + (i - 1)]}`"
                alt="Imagem"
                class="w-24 h-24"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <p>Nenhuma imagem disponível.</p>
        </div>
      </div>
    </div>
  </div>
</template>
