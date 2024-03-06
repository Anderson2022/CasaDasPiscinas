<script setup lang="ts">
import imageSrc from './../assets/imagen/rio ccz.png'
</script>

<template>
<!-- component -->
<div class="py-10 bg-white xl:h-[30.1rem]">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
            <router-link to="/">
        <img class="" :src="imageSrc" alt="Imagem" />
      </router-link>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <div></div>
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Rio Piscinas Cacoal - Maior e Melhor Marca de Piscinas</h2>
          <p class="mt-6 text-gray-600">A RiO Piscinas nasceu como um embrião que hoje em sua fase adulta tem como incumbência levar diversão e lazer, contudo visando respeito, qualidade e excelente atendimento ao nosso consumidor junto a um produto de altíssima qualidade.</p>
          <p class="mt-4 text-gray-600"> Contamos com profissionais com mais de 25 anos de experiência no mercado. Pioneiros nesse segmento no Brasil e com experiência no mercado exterior, buscam sempre por inovações e diversas possibilidades de proporcionar lazer e diversão para seus consumidores.</p>
          <p class="mt-4 text-gray-600">Nosso objetivo é fornecer aos nossos clientes piscinas de alta qualidade e projetadas para durar. Trabalhamos com uma equipe altamente qualificada e experiente que cuida de cada detalhe para garantir que sua piscina fique perfeita. </p>
        </div>
      </div>
  </div>
</div>

</template>