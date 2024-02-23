<script setup lang="ts">
import Guapore from './../assets/imagen/guapore7-2.png'
import Hualai from './../assets/imagen/hualai-1.png'
import Iguacu from './../assets/imagen/iguacu-22.png'
import Parana from './../assets/imagen/parana8.png'
import grecia from './../assets/imagen/riodossinos5.png'
import irlandaHidro from './../assets/imagen/taquarisit.png'
import irlanda from './../assets/imagen/tapajos9.1.png'
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

import 'swiper/css';

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
const pools = [
  {
    imageSrc: Guapore,
    title: 'Rio Guaporé',
    message: 'Nossas Piscinas são a melhor opção para sua área de lazer por sua durabilidade e resistência, além de oferecer um visual elegante e sofisticado para qualquer ambiente. Trabalhamos com materiais de alta qualidade e contamos com uma equipe altamente experiente e qualificada para garantir que sua piscina fique perfeita',
  },
  {
    imageSrc: Hualai,
    title: 'Rio Hualai',
    message: 'Com o conceito de uma piscina completa, a Rio Hualai oferece tudo o que você e sua família precisam para relaxar e desfrutar de ótimos momentos juntos na sua área de lazer, compartilhando experiências inesquecíveis com amigos.',
  },
  {
    imageSrc: Iguacu,
    title: 'Rio Iguaçu',
    message: 'A Rio Iguaçu é perfeita para criar um ambiente exclusivo, seguro e completo, proporcionando à sua família e amigos momentos de descontração únicos no SPA e na prainha, transformando sua área de lazer em um refúgio de relaxamento e diversão.',
  },
  {
    imageSrc: Parana,
    title: 'Rio Paraná',
    message: 'A piscina Rio Paraná é uma opção sofisticada, conquistando pela elegância de suas formas cuidadosamente elaboradas. Este modelo, amplamente popular no Brasil, destaca-se por seu design refinado, com cantos mais arredondados, e está disponível em uma variedade de tamanhos para atender às suas necessidades.',
  },
  {
    imageSrc: grecia,
    title: 'Rio dos Sinos',
    message: 'A piscina Rio dos Sinos recebeu um toque especial com as bordas das paredes internas revestidas por pastilhas. Este modelo, com design tradicional, destaca-se pelo excelente aproveitamento de área útil, proporcionando uma combinação única de estética e funcionalidade.',
  },
  {
    imageSrc: irlandaHidro,
    title: 'Rio Taquari',
    message: 'Inspirada na beleza e na grandiosidade do Rio Taquari, nossa piscina traz a sensação única de relaxamento e harmonia para o seu espaço. Com seu design sofisticado e espaço confortável para hidromassagem, a Piscina Rio Taquari oferece um ambiente acolhedor e convidativo, proporcionando Mergulhos Inesquecíveis de lazer e bem-estar.',
  },
  {
    imageSrc: irlanda,
    title: 'Rio Tapajós',
    message: 'A piscina é um dos elementos que mais valorizam a decoração de uma casa e a Rio Irlanda, com banco, hidro e escadas, em lados opostos, irá tornar seu ambiente em um espaço único, moderno e inovador.',
  },
];

const cardColors = [
  'bg-fuchsia-900',
  'bg-neutral-500',
 
  // Adicione mais cores conforme necessário
];
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
 <div class=" w-screen xl:w-screen bg-[#AD1E70] flex items-center justify-center">
     <div class="flex  items-center justify-center overflow-hidden p-2 xl:w-[94%] xl:h-[34rem] md:h-[31rem] bg-[#AD1E70]
">
    <div class="flex carousel-container space-x-4 overflow-x-auto animated-element ">
      <div v-for="(pool, index) in pools" :key="index" :class="[cardColors[index % cardColors.length], 'flex-shrink-0', 'w-[19rem] h-[35rem] md:w-[35rem] md:h-[31rem] rounded-lg animated-element']">
        <div class="relative w-full overflow-hidden rounded-xl  bg-clip-border text-gray-700 flex items-center justify-center">
          <img :src="pool.imageSrc" alt="Imagem" class="w-96 object-cover" />
        </div>


        <div class="p-3 animated-element h-[16rem]">
          <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">{{ pool.category }}</h6>
          <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{{ pool.title }}</h4>
          <p class="mb-2 block font-sans text-base font-normal leading-relaxed text-white  antialiased">{{ pool.message }}</p>
          <a class="inline-block" href="#">
            <button class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div> 
  </div>

</template>

<style scoped>
.carousel-container {
  display: flex;
  overflow-x: auto;
  gap: 16px; /* Ajuste o espaçamento entre os itens conforme necessário */
}

.carousel-item {
  flex: 0 0 auto;
  width: 390px; /* Ajuste a largura dos itens conforme necessário */
}

/* Adicione estilos específicos conforme necessário */

/* Estilizar a barra de rolagem */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #00ece1; /* Cor roxa - ajuste conforme necessário */
  border-radius: 6px;
}

/* Adicionar bolas como setas nas extremidades da barra de rolagem */
::-webkit-scrollbar-button {
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar-button:vertical:decrement {
  background: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" fill="%238A2BE2"><circle cx="6" cy="6" r="6" fill="%23FFF"/></svg>') center no-repeat;
}

::-webkit-scrollbar-button:vertical:increment {
  background: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" fill="%238A2BE2"><circle cx="6" cy="14" r="6" fill="%23FFF"/></svg>') center no-repeat;
}

</style>