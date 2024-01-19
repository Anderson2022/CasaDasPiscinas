<script setup lang="ts">
import espanha  from "./../assets/imagen/guapore7-2.png"
import peru  from "./../assets/imagen/hualai.png"
import australia  from "./../assets/imagen/iguacu-2.png"
import mexico  from "./../assets/imagen/parana8.png"
import grecia  from "./../assets/imagen/riodossinos5.png"
import irlandaHidro  from "./../assets/imagen/taquarisite.jpg"
import irlanda  from "./../assets/imagen/tapajos9.png"

const imageSrc1 = espanha;
const title1 = 'Espanha'
const mensagem1 =
  'Nossas Piscinas são a melhor opção para sua área de lazer por sua durabilidade e resistência, além de oferecer um visual elegante e sofisticado para qualquer ambiente. Trabalhamos com materiais de alta qualidade e contamos com uma equipe altamente experiente e qualificada para garantir que sua piscina fique perfeita'


const imageSrc2 = peru
const title6 = 'Peru'
const mensagem2 = 'Com o conceito de uma piscina completa, a Rio Peru oferece tudo o que você e sua família precisam para relaxar e desfrutar de ótimos momentos juntos na sua área de lazer, compartilhando experiências inesquecíveis com amigos.'

const imageSrc3 = australia
const title5 = 'Australia'
const mensagem3 = 'A Rio Australia é perfeita para criar um ambiente exclusivo, seguro e completo, proporcionando à sua família e amigos momentos de descontração únicos no SPA e na prainha, transformando sua área de lazer em um refúgio de relaxamento e diversão.'

const imageSrc4 = mexico
const title3 = 'Mexico'
const mensagem4 = 'A piscina Rio México é uma opção sofisticada, conquistando pela elegância de suas formas cuidadosamente elaboradas. Este modelo, amplamente popular no Brasil, destaca-se por seu design refinado, com cantos mais arredondados, e está disponível em uma variedade de tamanhos para atender às suas necessidades.'

const imageSrc5 = grecia
const title2 = 'Grecia'
const mensagem5 = 'A piscina Rio Grecia recebeu um toque especial com as bordas das paredes internas revestidas por pastilhas. Este modelo, com design tradicional, destaca-se pelo excelente aproveitamento de área útil, proporcionando uma combinação única de estética e funcionalidade.'

const imageSrc6 = irlandaHidro
const title7 = 'Irlanda Hidro'
const mensagem6 = 'Inspirada na beleza e na grandiosidade do Rio Taquari, nossa piscina traz a sensação única de relaxamento e harmonia para o seu espaço. Com seu design sofisticado e espaço confortável para hidromassagem, a Piscina Rio Taquari oferece um ambiente acolhedor e convidativo, proporcionando Mergulhos Inesquecíveis de lazer e bem-estar.'

const imageSrc7 = irlanda
const title4 = 'Irlanda'
const mensagem7 = 'A piscina é um dos elementos que mais valorizam a decoração de uma casa e a Rio Irlanda, com banco com hidro e escadas, em lados opostos, irá tornar seu ambiente em um espaço único, moderno e inovador.'

</script>

<template>
  <div class="mx-12">
    <div class="w-screen flex items-center justify-center h-20">
      <strong class="text-slate-600 text-4xl">CONHEÇA NOSSAS PISCINAS</strong>
    </div>

    <div class="flex w-full h-full">
      <div class="w-1/2 h-96">
        <img class="w-full h-full object-cover" :src="imageSrc1" alt="Imagem" />
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center my-28">
        <strong class="text-blue-500 text-4xl mb-4 text-left">{{ title1 }}</strong>
        <p class="text-left">{{ mensagem1 }}</p>
      </div>
    </div>
    <div class="flex w-full h-full">
      <div class="w-1/2 h-full flex flex-col justify-center my-28">
        <strong class="text-blue-500 text-4xl mb-4 text-right">{{ title2 }}</strong>
        <p class="text-right">{{ mensagem5 }}</p>
      </div>
      <div class="w-1/2 h-96">
        <img class="w-full h-full object-cover" :src="imageSrc5" alt="Imagem" />
      </div>
    </div>
    <div class="flex w-full h-full">
      <div class="w-1/2 h-96">
        <img class="w-full h-full object-cover" :src="imageSrc4" alt="Imagem" />
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center my-28">
        <strong class="text-blue-500 text-4xl mb-4 text-left">{{ title3 }}</strong>
        <p class="text-left">{{ mensagem4 }}</p>
      </div>
    </div>
    <div class="flex w-full h-full">
      <div class="w-1/2 h-full flex flex-col justify-center my-28">
        <strong class="text-blue-500 text-4xl mb-4 text-right">{{ title4 }}</strong>
        <p class="text-right">{{ mensagem7 }}</p>
      </div>
      <div class="w-1/2 h-96">
        <img class="w-full h-full object-cover" :src="imageSrc7" alt="Imagem" />
      </div>
    </div>
    <div class="flex w-full h-full">
      <div class="w-1/2 h-96">
        <img class="w-full h-full object-cover" :src="imageSrc3" alt="Imagem" />
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center my-28">
        <strong class="text-blue-500 text-4xl mb-4 text-left">{{ title5 }}</strong>
        <p class="text-left">{{ mensagem3 }}</p>
      </div>
    </div>
    <div class="flex w-full h-full">
      <div class="w-1/2 h-full flex flex-col justify-center my-28">
        <strong class="text-blue-500 text-4xl mb-4 text-right">{{ title6 }}</strong>
        <p class="text-right">{{ mensagem2 }}</p>
      </div>
      <div class="w-1/2 ">
        <img class="w-full h-full object-cover" :src="imageSrc2" alt="Imagem" />
      </div>
    </div>
    <div class="flex w-full h-full">
      <div class="w-1/2">
        <img class="w-full h-full object-cover" :src="imageSrc6" alt="Imagem" />
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center my-56">
        <strong class="text-blue-500 text-4xl mb-4 text-left">{{ title7 }}</strong>
        <p class="text-left">{{ mensagem6 }}</p>
      </div>
    </div>
  </div>
</template>
