
  
  <script setup lang="ts">
  import images from '@/components/script/Image.json';
  import { ref } from 'vue';
  
  // Extraindo o array 'Promotion' do JSON
  const promotionImages = ref(images[0].Promotion);
  
  // Estado para controlar se o modal está aberto ou fechado
  const modalOpen = ref(false);
  // Estado para armazenar o caminho da imagem selecionada
  const selectedImage = ref('');
  
  // Função para abrir o modal com a imagem clicada
  const openModal = (image: string) => {
    selectedImage.value = image;
    modalOpen.value = true;
  };
  
  // Função para fechar o modal
  const closeModal = () => {
    modalOpen.value = false;
  };
  </script>
  <template>
    <div class="flex items-center justify-center">
        <h1 class="text-indigo-700 font-bold text-6xl mb-3">Promoções</h1>
    </div>
    <div class="p-4 bg-[#bd478a] flex flex-col lg:flex-row w-screen">
   
      <div v-for="(image, index) in promotionImages" :key="index" class="bg-[#AD1E70] max-h-[90rem] rounded-xl hover:shadow-xl overflow-hidden relative w-full lg:w-1/2" @click="openModal(image)">
        <div class="p-4 z-20 h-full justify-between flex flex-col">
          <button class="p-2 backdrop-blur-sm bg-gray-800/30 w-12 h-12 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </button>
          <div class="p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
            <h1 class="text-white font-bold text-3xl mb-10">
              <img :src="`/imagen/promotion/${image}`" alt="">
            </h1>
            <!-- Adicione aqui quaisquer outros detalhes relevantes -->
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div v-if="modalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="fixed inset-0 bg-black opacity-75"></div>
        <div class="absolute bg-white p-8 rounded-lg shadow-2xl">
          <img :src="`/imagen/promotion/${selectedImage}`" alt="" class="w-[20rem] xl:w-[32rem] 2xl:w-[50rem] lg:w-[50rem] md:w-[50rem] max-w-[90rem] max-h-full">
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>