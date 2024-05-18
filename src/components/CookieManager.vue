<template>
  <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
      <span id="cookieconsent:desc" class="text-gray-700 text-sm">
        Utilizamos cookies e outras tecnologias de medição para melhorar a sua experiência de navegação no nosso site, analisar o tráfego do site e entender de onde vêm os visitantes.
        <br>
        Ao navegar no nosso site, concorda com o uso de cookies e outras tecnologias de medição.
        <a aria-label="learn more about cookies" role="button" tabindex="0" class="text-blue-500 underline" href="/politica-privacidade" rel="noopener noreferrer nofollow" target="_self">Saiba mais</a>
      </span>
      <div class="mt-4 text-right">
        <button @click="acceptCookies" aria-label="dismiss cookie message" role="button" tabindex="0" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Entendido!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      showModal: true, // Exibe o modal automaticamente ao carregar a página
    };
  },
  methods: {
    acceptCookies() {
      Cookies.set('cookie_consent', 'accepted', { expires: 365 }); // Cookie expira em 1 ano
      this.showModal = false;
    },
    checkCookieConsent() {
      if (Cookies.get('cookie_consent') === 'accepted') {
        this.showModal = false;
      }
    },
  },
  mounted() {
    this.checkCookieConsent(); // Verifica se o consentimento já foi dado
  },
};
</script>

<style scoped>
/* Adicione aqui qualquer estilo específico se necessário */
</style>
