<script setup lang="ts">
// eslint-disable-next-line vue/no-dupe-keys
import imageSrc from "./../assets/imagen/Login2.png";




</script>


<template>
  <div class="h-32 w-screen border-current relative flex items-center">
    <div class="w-96 h-32 ml-40 ">
      <img  class="w-52 h-32" :src="imageSrc" alt="Imagem" />
    </div>
    <div class="w-full items-center">
      <div class="mx-24 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul 
          class="w-full items-center justify-between flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page">PISCINAS</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PRODUTOS</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ORÇAMENTOS</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SOBRE
              A CASA DAS PISCINAS</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-96 pr-1">
      <ul>
        <li>
          <a href="#"
            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page">VENDAS +55 69 992896672</a>
        </li>
      </ul>
    </div>
  </div>
</template>
