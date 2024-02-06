<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

const mostrarModal = ref(false)
const mostrarSegundaDiv = ref(true)
const isDesktop = ref(false)

const abrirModal = () => {
  mostrarModal.value = true
}

const fecharModal = () => {
  mostrarModal.value = false
}

const toggleSegundaDiv = () => {
  mostrarSegundaDiv.value = !mostrarSegundaDiv.value
}
const props = defineProps(['item','subItem'])

onMounted(() => {
  // Verificar se é desktop
  isDesktop.value = window.innerWidth >= 1024

  // Atualizar 'isDesktop' ao redimensionar a janela
  window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 1024
  })
})


const baixarPDF = (PLANTA: string) => {
  // Obtém o nome do arquivo PDF
  const nomePDF = PLANTA

  // Cria um link temporário para iniciar o download
  const linkDownload = document.createElement('a')
  linkDownload.href = `/imagen/pdf/${nomePDF}`
  linkDownload.download = nomePDF

  // Adiciona o link ao documento, simula o clique e remove o link
  document.body.appendChild(linkDownload)
  linkDownload.click()
  document.body.removeChild(linkDownload)
}
</script>


<template>
  <div>
    <!-- Botão Quadrado -->
    <div class=" flex items-center justify-center p-8 xl:relative">
      <button
        class="rounded-md bg-white text-black p-2 px-4 focus:outline-none w-48 h-48 shadow-2xl"
        @click="abrirModal"
      >
        <img src="@/assets/imagen/detalhe.png" alt="Ícone de detalhes" class="mr-2" />
        <h1 class="mt-6 text-teal-500 text-2xl shadow-2xl">Mais detalhes</h1>
      </button>
    </div>

    <div
      v-if="mostrarModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-screen h-screen"
    >
      <div
        class="bg-white p-4 rounded-md w-full h-5/6 sm:w-[80%] sm:h-[85%] md:w-[80%] md:h-[85%] lg:w-[80%] lg:h-[85%] absolute"
      >
        <div class="modal-content w-full h-full overflow-auto">
          <button
            @click="fecharModal"
            class="mt-4 rounded-md bg-red-500 text-white p-2 px-4 focus:outline-none"
          >
            x
          </button>
          <section class="py-24 px-4 lg:px-16">
            <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
              <h1 class="text-center text-5xl pb-12">Informações</h1>
              <div
                class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16"
              >
                <!-- saislfhsdkjgkjahsdjkgdhsd -->
                <div v-for="(subItem, index) in props.item.info" :key="index">
                  <div
                    class="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                    @click="toggleSegundaDiv"
                  >
                    <a href="#" class="block">
                      <div class="h-9">
                        <div
                          class="absolute -top-0 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-85%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle"
                        >
                          <img
                            :src="`/imagen/parana/${subItem.imageinfo[0]}`"
                            class="w-36 h-36 mt-6 m-auto"
                            :alt="subItem.name"
                            :title="subItem.name"
                            loading="lazy"
                            width="200"
                            height="200"
                          />
                        </div>
                      </div>

                      <div class="flex flex-col">
                        <div
                          class="md:px-8 md:pt- z-10 w-full h-auto flex flex-col md:flex-row px-8 xl:w-80 "
                        >
                          <img
                            v-if="isDesktop"
                            :src="`/imagen/parana/${subItem.imageinfo[1]}`"
                            :alt="`Imagem Desktop ${subItem.name}`"
                            class="md:w-1/3 md:h-1/2"
                          />
                          <div v-else class="md:w-1/3 lg:[40%]  bg-slate-600 ">
                            <a :href="subItem.link">
                              <img
                                :src="`/imagen/parana/${subItem.imageinfo[2]}`"
                                :alt="`Imagem Mobile ${subItem.name}`"
                                class="w-full"
                              />
                            </a>
                          </div>
                          <div class="w-full md:w-1/2 md:p-6 flex items-center justify-center my-2">
                            <button
                              @click="baixarPDF(subItem.PLANTA)"
                              class="block bg-black border border-white text-white p-2 px-4 rounded-md text-center"
                            >
                              Planta
                            </button>
                          </div>
                        </div>
                        <div class="w-full md:w-full flex items-center justify-center md:mt-7 xl:mt-1">
                          <div class="font-bold">{{ subItem.name }}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-110%);
  opacity: 0;
}
</style>
