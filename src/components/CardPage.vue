<script setup lang="ts">
import Guapore from './../assets/imagen/guapore7-2.png'
import Hualai from './../assets/imagen/hualai.png'
import Iguacu from './../assets/imagen/iguacu-2.png'
import Parana from './../assets/imagen/parana8.png'
import grecia from './../assets/imagen/riodossinos5.png'
import irlandaHidro from './../assets/imagen/taquarisite.jpg'
import irlanda from './../assets/imagen/tapajos9.png'
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

onMounted(() => {
  const sr = ScrollReveal({
    distance: '20px',
    duration: 800,
    delay: 200,
    easing: 'ease-in-out',
  });

  sr.reveal('.animated-element', { origin: 'bottom', interval: 100 });

  // Outras configurações e animações, se necessário
});

const imageSrc1 = Guapore
const title1 = 'Rio Guaporé'
const mensagem1 =
  'Nossas Piscinas são a melhor opção para sua área de lazer por sua durabilidade e resistência, além de oferecer um visual elegante e sofisticado para qualquer ambiente. Trabalhamos com materiais de alta qualidade e contamos com uma equipe altamente experiente e qualificada para garantir que sua piscina fique perfeita'

const imageSrc2 = Hualai
const title6 = 'Rio Hualai'
const mensagem2 =
  'Com o conceito de uma piscina completa, a Rio Hualai oferece tudo o que você e sua família precisam para relaxar e desfrutar de ótimos momentos juntos na sua área de lazer, compartilhando experiências inesquecíveis com amigos.'

const imageSrc3 = Iguacu
const title5 = 'Rio Iguaçu'
const mensagem3 =
  'A Rio Iguaçu é perfeita para criar um ambiente exclusivo, seguro e completo, proporcionando à sua família e amigos momentos de descontração únicos no SPA e na prainha, transformando sua área de lazer em um refúgio de relaxamento e diversão.'

const imageSrc4 = Parana
const title3 = 'Rio Paraná'
const mensagem4 =
  'A piscina Rio Paraná é uma opção sofisticada, conquistando pela elegância de suas formas cuidadosamente elaboradas. Este modelo, amplamente popular no Brasil, destaca-se por seu design refinado, com cantos mais arredondados, e está disponível em uma variedade de tamanhos para atender às suas necessidades.'

const imageSrc5 = grecia
const title2 = 'Rio dos Sinos'
const mensagem5 =
  'A piscina Rio dos Sinos recebeu um toque especial com as bordas das paredes internas revestidas por pastilhas. Este modelo, com design tradicional, destaca-se pelo excelente aproveitamento de área útil, proporcionando uma combinação única de estética e funcionalidade.'

const imageSrc6 = irlandaHidro
const title7 = 'Rio Taquari'
const mensagem6 =
  'Inspirada na beleza e na grandiosidade do Rio Taquari, nossa piscina traz a sensação única de relaxamento e harmonia para o seu espaço. Com seu design sofisticado e espaço confortável para hidromassagem, a Piscina Rio Taquari oferece um ambiente acolhedor e convidativo, proporcionando Mergulhos Inesquecíveis de lazer e bem-estar.'

const imageSrc7 = irlanda
const title4 = 'Rio Tapajós'
const mensagem7 =
  'A piscina é um dos elementos que mais valorizam a decoração de uma casa e a Rio Irlanda, com banco, hidro e escadas, em lados opostos, irá tornar seu ambiente em um espaço único, moderno e inovador.'
</script>

<template>
  <div class=" px-4">
    <div class="text-center sm:flex sm:items-center sm:justify-center sm:h-20 animated-element">
      <strong class="text-slate-600 text-4xl">CONHEÇA NOSSAS PISCINAS</strong>
    </div>

    <div class="w-full xl:h-96	 sm:flex sm:flex-row animated-element">
      <!-- Imagem -->
      <div class="w-full sm:w-1/2 mb-4 sm:mb-0 xl:h-96">
        <img class="w-full object-cover xl:h-96" :src="imageSrc1" alt="Imagem" />
      </div>

      <!-- Texto -->
      <div class="w-full sm:w-1/2">
        <div class="mb-4 sm:mt-28 text-center sm:text-left">
          <strong class="text-blue-500 text-4xl px-4">{{ title1 }}</strong>
        </div>
        <p class="text-left px-4 text-justify">{{ mensagem1 }}</p>
      </div>
    </div>

    <div class="w-full sm:flex sm:flex-row animated-element">
      <div class="w-full sm:w-1/2 h-full flex flex-col justify-center my-4 sm:my-28 sm:flex">
        <strong class="text-blue-500 text-4xl mb-4 text-center sm:text-right">{{ title2 }}</strong>
        <p class="text-center text-justify sm:text-right px-4">{{ mensagem5 }}</p>
      </div>
      <div class="w-full sm:w-1/2  sm:h-full">
    <img class="w-full  object-cover xl:h-96" :src="imageSrc5" alt="Imagem" />
</div>

    </div>

  
    <div class="w-full sm:flex sm:flex-row animated-element ">
      <div class="w-full sm:w-1/2 mb-4 sm:mb-0 relative">
        <img class="w-full h-72 object-cover xl:h-96" :src="imageSrc4" alt="Imagem" />
      </div>
      <div class="w-full sm:w-1/2">
        <div class="mb-4 sm:mt-28 text-center sm:text-left">
          <strong class="text-blue-500 text-4xl px-4">{{ title3 }}</strong>
        </div>
        <p class="text-left px-4 text-justify">{{ mensagem4 }}</p>
      </div>
    </div>

    <div class="w-full sm:flex sm:flex-row animated-element">
      <div class="w-full sm:w-1/2 h-full flex flex-col justify-center my-4 sm:my-28 sm:flex">
        <strong class="text-blue-500 text-4xl mb-4 text-center sm:text-right">{{ title4 }}</strong>
        <p class="text-center text-justify sm:text-right px-4">{{ mensagem7 }}</p>
      </div>
      <div class="w-full sm:w-1/2 ">
        <img class="w-full h-72 object-cover xl:h-96" :src="imageSrc7" alt="Imagem" />
      </div>
    </div>

    <div class="w-full sm:flex sm:flex-row pt-0 animated-element">
      <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
        <img class="w-full h-72 object-cover xl:h-96" :src="imageSrc3" alt="Imagem" />
      </div>
      <div class="w-full sm:w-1/2">
        <div class="mb-4 sm:mt-28 text-center sm:text-left">
          <strong class="text-blue-500 text-4xl px-4">{{ title5 }}</strong>
        </div>
        <p class="text-left px-4 text-justify  ">{{ mensagem3 }}</p>
      </div>
    </div>

    <div class="w-full sm:flex sm:flex-row animated-element">
      <div class="w-full sm:w-1/2 h-full flex flex-col justify-center my-4 sm:my-28 sm:flex">
        <strong class="text-blue-500 text-4xl mb-4 text-center sm:text-right">{{ title6 }}</strong>
        <p class="text-center text-justify sm:text-right px-4">{{ mensagem2 }}</p>
      </div>
      <div class="w-full sm:w-1/2 h-[19rem] sm:h-full">
        <img class="w-full h-full object-cover" :src="imageSrc2" alt="Imagem" />
      </div>
    </div>

    <div class="w-full sm:flex sm:flex-row animated-element">
      <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
        <img class="w-full h-full object-cover" :src="imageSrc6" alt="Imagem" />
      </div>
      <div class="w-full sm:w-1/2  sm: pt-4">
        <div class="mb-9 sm:mt-28 text-center sm:text-left">
          <strong class="text-blue-500 text-4xl px-4">{{ title7 }}</strong>
        </div>
        <p class="text-left px-4 text-justify">{{ mensagem6 }}</p>
      </div>
    </div>
  </div>
</template>
