<script setup lang="ts">
// eslint-disable-next-line vue/no-dupe-keys
import imageSrc from './../assets/imagen/rio ccz.png'
import { ref, onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'
import { Tooltip, initTE } from 'tw-elements'


const whats =
  'https://api.whatsapp.com/send/?phone=556992896672&text=Tenho+interesse+&type=phone_number&app_absent=0'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  console.log('Menu fechado')
}

// Inicialização do ScrollReveal
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

<template>
  <div class="h-32  border-current relative flex items-center ml-2 animated-element xl:w-screen">
    <div class="w-44 h-32 md:ml-40 max-sm:w-[70rem] pt-6">
      <router-link to="/">
  <img class="w-28 h-20 max-sm:w-32" :src="imageSrc" alt="Imagem" />
</router-link>

    </div>
    <div class="items-center relative sm:w-[70rem]">
      <div class="md:hidden ml-16">
        <button
          @click="toggleMenu"
          class="text-gray-500 hover:text-gray-700 focus:outline-none px-8"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="mx-24 items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
        <ul
          class="w-full items-center justify-between flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/stock"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              PISCINAS
            </router-link>
          </li>

          <li>
            <router-link
              to="/contact"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >ORÇAMENTOS
            >
          </router-link>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >SOBRE A CASA DAS PISCINAS</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >VENDAS +55 69 992896672</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    v-click-outside="closeMenu"
    :class="{
      'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:hidden xl:w-screen':
        isMenuOpen
    }"
    data-te-toggle="tooltip"
    style="z-index: 9999; height: auto"
  >
    <ul
      v-if="isMenuOpen"
      class="w-full relative items-center justify-between flex flex-col p-9 font-medium border border-gray-100 rounded-lg bg-[#80286C] md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-[#80286C] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      style="z-index: 9999"
    >
      <li class="absolute top-0 right-0">
        <button @click="closeMenu" class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </li>
      <li>
  <router-link
    to="/stock"
    class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 transition duration-300 ease-in-out hover:bg-gray-200"
    aria-current="page"
  >
    PISCINAS
  </router-link>
</li>

      <li>
        <router-link
    to="/stock"
          class="block py-2 px-3 text-white  rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >PRODUTOS
      </router-link>
      </li>
      <li>
        <router-link
    to="/contact"
          class="block py-2 px-3 text-white  rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >ORÇAMENTOS</router-link
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-3 mb-8 text-white  rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >SOBRE A CASA DAS PISCINAS</a
        >
      </li>
      <li>
        <a
          :href="whats"
          target="_blank"
          class="block py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          aria-current="page"
          >VENDAS +55 69 992896672</a
        >
      </li>
      <li></li>
    </ul>
  </div>
</template>
