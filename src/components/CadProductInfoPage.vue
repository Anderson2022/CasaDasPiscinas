<script setup lang="ts">
defineProps<{ item: any; spa?: boolean }>()
const whats = 'https://api.whatsapp.com/send/?phone=5565981113042&text=Ol%C3%A1%2C+quero+saber+mais+sobre+uma+piscina&type=phone_number&app_absent=0'
</script>

<template>
  <section v-if="item" class="product-detail">
    <div class="section-shell product-intro">
      <div class="product-intro__copy">
        <p class="section-number">{{ spa ? 'Nature Spas & Banheiras' : 'Linha Rio Piscinas' }}</p>
        <h1>{{ item.name }}</h1>
        <p>{{ item.descricao }}</p>
        <div class="product-intro__actions"><a :href="whats" target="_blank" class="btn-primary">Solicitar orçamento ↗</a><a href="#modelos" class="text-link dark">Ver tamanhos ↓</a></div>
      </div>
      <div class="product-intro__visual"><span>20 anos<br />de garantia</span><img :src="`/imagen/parana/${item.imageinfo}`" :alt="item.name" /></div>
    </div>

    <div id="modelos" class="variants section-shell">
      <div class="variants__head"><div><p class="section-number">Escolha a configuração</p><h2>Medidas e valores</h2></div><p>Selecione o tamanho ideal para o seu espaço. Consulte nossa equipe para confirmar condições de instalação e entrega.</p></div>
      <div class="variants__grid">
        <article v-for="(info,index) in item.info" :key="`${info.name}-${index}`" class="variant-card">
          <span class="variant-card__index">{{ String(index + 1).padStart(2,'0') }}</span>
          <div class="variant-card__image"><img :src="`/imagen/parana/${info.imageinfo?.[0]}`" :alt="info.name" loading="lazy" /></div>
          <div class="variant-card__body">
            <h3>{{ info.name }}</h3><p class="variant-card__size">{{ info.tamanho }}</p>
            <div class="variant-card__price"><small>{{ info.Promocao !== '0' ? 'Valor promocional' : 'A partir de' }}</small><strong>R$ {{ info.Promocao !== '0' ? info.Promocao : info.PRECO }}</strong><del v-if="info.Promocao !== '0'">R$ {{ info.PRECO }}</del></div>
            <div class="variant-card__links"><a :href="`/imagen/pdf/${info.PLANTA}`" target="_blank">Ver planta ↗</a><a v-if="info.link" :href="info.link" target="_blank">Ver em realidade aumentada ↗</a></div>
          </div>
        </article>
      </div>
      <p class="price-note">* Preços sujeitos a alteração. Frete e mão de obra podem variar conforme as condições locais.</p>
    </div>

    <div class="included">
      <div class="section-shell included__grid">
        <div><p class="section-number light">Pacote completo</p><h2>{{ spa ? 'Conforto em cada detalhe.' : 'Pronta para o primeiro mergulho.' }}</h2><p>{{ spa ? 'Design sofisticado, materiais resistentes e uma experiência pensada para relaxar em ambientes internos ou externos.' : 'Sua piscina acompanha sistema de filtragem, conjunto hidráulico, kit de limpeza, pontos de hidromassagem e iluminação LED.' }}</p><a :href="whats" target="_blank" class="btn-primary cream">Conversar com especialista ↗</a></div>
        <div class="equipment-grid">
          <div v-for="(material,index) in item.materias" :key="`${material}-${index}`" class="equipment-item"><img :src="`/imagen/equipamentos/${material}`" alt="Equipamento incluso" loading="lazy" /><span>{{ String(index + 1).padStart(2,'0') }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
