<script setup lang="ts">
import imageSrc from './../assets/imagen/rio ccz.png'
import ScrollReveal from 'scrollreveal'
import { onMounted } from 'vue'

const face = 'https://www.facebook.com/profile.php?id=61550529652901&locale=pt_BR'
const insta = 'https://www.instagram.com/piscinas_cacoal/'
const whats =
  'https://api.whatsapp.com/send/?phone=556992896672&text=Tenho+interesse+&type=phone_number&app_absent=0'

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
  <div class="sm:flex-row xl:w-screen">
    <div
      class="mt-6 h-96 sm:h-56 w-screen border-current flex items-center flex-col sm:flex-row xl:w-screen"
    >
      <div class="w-96 items-center xl:w-screen justify-center flex">
        <router-link to="/">
          <img class="w-28 h-20 max-sm:w-32" :src="imageSrc" alt="Imagem" />
        </router-link>
      </div>

      <div
        class="flex items-center justify-center -z-10 sm:w-10rem h-10 max-h-32 mt-12 flex-col sm:flex-row sm:h-44 xl:w-screen animated-element"
      >
        <button
          class="bg-blue-500 text-white px-4 py-2 mb-2 sm:mb-0 rounded-lg w-full sm:w-72 mx-1"
        >
          Faça seu Orçamento<i class="fas fa-envelope mx-2"></i>
        </button>
        <button class="bg-pink-500 text-white px-4 py-2 rounded-lg sm:w-72 mx-1">
          <a :href="whats" target="_blank">
            Faça seu Orçamento
            <i class="fab fa-whatsapp mx-2"></i>
          </a>
        </button>
      </div>

      <div class="flex w-72 items-center justify-center mt-12 animated-element xl:w-screen -z-10">
        <a
          :href="face"
          class="flex items-center justify-center bg-pink-500 text-white p-4 m-1 rounded-full"
          target="_blank"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          :href="insta"
          class="flex items-center justify-center bg-blue-500 text-white p-4 m-1 rounded-full"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <div
      class="text-sm text-gray-500 my-8 sm:text-center sm:justify-center animated-element xl:w-screen"
    >
      <h2 class="text-center">
        Copyright © 2024 Casa das Piscinas. Todos os direitos reservados.
      </h2>
      <br />
      <p class="text-center">
        Atenção: Certifique-se de que todos os produtos e acessórios instalados em sua piscina são
        da marca Rio Piscinas.<br />
        Não nos responsabilizamos por produtos correlatos, e não serão fornecidas garantias para
        produtos de outras marcas
      </p>
    </div>
  </div>
</template>
