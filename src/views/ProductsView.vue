<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import jsonData from '../components/product.json';
import jsonData2 from '../components/productLux.json';
import jsonData3 from '../components/productSpa.json';
import jsonData4 from '../components/productBanheira.json';
import HeaderPage from '@/components/HeaderPage.vue';
import CarrocelProductsPage from '@/components/CarrocelProductsPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import CadProductInfoPage from '@/components/CadProductInfoPage.vue';
import CadProductInfoSPAPage from '@/components/CadProductInfoSpaPage.vue';

interface ProductItem {
  id: number;
  name: string;
  descricao: string;
  image: string;
  imageinfo: string;
  imageC: string[];
  info: {
    name: string;
    imageinfo: string[];
    tamanho: string;
    PRECO: string;
    PLANTA: string;
  }[];
  materias: string[];
}

let produtoId = ref<number | null>(null);
let foundItem = ref<ProductItem | null>(null);
let images = ref<string[]>([]); // Inicialize como um array vazio
let showSPAPage = ref<boolean>(true); // Variável de controle para mostrar ou não o CadProductInfoSPAPage

const route = useRoute();

onMounted(() => {
  const idFromRoute = route.params.id;

  if (typeof idFromRoute === 'string') {
    const parsedId = parseInt(idFromRoute, 10);

    if (!isNaN(parsedId)) {
      produtoId.value = parsedId;
      fetchData(produtoId.value);
    } else {
      console.error(`ID da rota não é um número válido.`);
    }
  } else {
    console.error(`ID da rota não é uma string.`);
  }
});

const fetchData = (id: number | null) => {
  const foundItemData: ProductItem | undefined =
    jsonData.concat(jsonData2, jsonData3, jsonData4).find((item) => item.id === id);

  if (foundItemData !== undefined) {
    foundItem.value = foundItemData;

    if (foundItemData.imageC && Array.isArray(foundItemData.imageC)) {
      images.value = foundItemData.imageC;
    } else {
      images.value = [];
    }

    // Adicione sua lógica para controlar a renderização do CadProductInfoSPAPage aqui
    showSPAPage.value = foundItemData && [14, 15, 16, 17, 18, 19, 20].includes(foundItemData.id);

  }
};

onBeforeUnmount(() => {
  // Limpar recursos, se necessário
});
</script>

<template>
  <main>
    <HeaderPage />
    <CarrocelProductsPage v-if="images.length > 0" :images="[...images]" />
      <CadProductInfoPage v-if="!showSPAPage" :item="foundItem" />

<!-- Renderiza CadProductInfoSPAPage somente se showSPAPage for verdadeiro -->
<CadProductInfoSPAPage v-if="showSPAPage" :item="foundItem" />

    <FooterPage />
  </main>
</template>
