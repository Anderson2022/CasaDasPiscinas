<script setup lang="ts">
import imageSrc from './../assets/imagen/rio ccz.png'
import {onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'
import { Tooltip, initTE } from 'tw-elements'

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
  <div class="h-32">
</div>
<!-- component -->
<div class="py-10 bg-white animated-element">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
            <router-link to="/">
        <img class="" :src="imageSrc" alt="Imagem" />
      </router-link>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <div></div>
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Rio Piscinas Cuiabá — especialistas em piscinas de fibra</h2>
          <p class="mt-6 text-gray-600">A RiO Piscinas nasceu como um embrião que hoje em sua fase adulta tem como incumbência levar diversão e lazer, contudo visando respeito, qualidade e excelente atendimento ao nosso consumidor junto a um produto de altíssima qualidade.</p>
          <p class="mt-4 text-gray-600"> Contamos com profissionais com mais de 25 anos de experiência no mercado. Pioneiros nesse segmento no Brasil e com experiência no mercado exterior, buscam sempre por inovações e diversas possibilidades de proporcionar lazer e diversão para seus consumidores.</p>
          <p class="mt-4 text-gray-600">Nosso objetivo é fornecer aos nossos clientes piscinas de alta qualidade e projetadas para durar. Trabalhamos com uma equipe altamente qualificada e experiente que cuida de cada detalhe para garantir que sua piscina fique perfeita. </p>
          <div class="mt-6 border-2 rounded-lg  shadow-lg shadow-indigo-500/40 h-96">
            <iframe src="https://www.google.com/maps?q=Av.%20Miguel%20Sutil%2C%2012142%20-%20Cuiab%C3%A1%20MT&output=embed" 
        style="border:0; width:100%; height: 100%;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        </div>
      </div>
  </div>
</div>

</template>
