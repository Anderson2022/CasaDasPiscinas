<script setup lang="ts">
import { computed } from 'vue'
import hero from '@/assets/post/riosss.jpg'
import lifestyle from '@/assets/imagen/amigos-conversando-sorrindo-bebendo-cocktails-descansando-relaxando-perto-da-piscina.jpg'
import guapore from '@/assets/imagen/guapore7-2.png'
import iguacu from '@/assets/imagen/iguacu-22.png'
import taquari from '@/assets/imagen/taquarisit.png'
import motor from '@/assets/imagen/motor.webp'
import filtro from '@/assets/imagen/fliuto.webp'

const whats = 'https://api.whatsapp.com/send/?phone=5565981113042&text=Ol%C3%A1%2C+quero+planejar+minha+piscina&type=phone_number&app_absent=0'

const season = computed(() => {
  const month = new Date().getMonth() + 1
  if (month === 12 || month <= 2) return 'verão'
  if (month <= 5) return 'outono'
  if (month <= 8) return 'inverno'
  return 'primavera'
})

const models = [
  { name: 'Rio Guaporé', note: 'Linhas orgânicas', image: guapore, id: 2, className: 'model-card--wide' },
  { name: 'Rio Iguaçu', note: 'Spa + prainha', image: iguacu, id: 5, className: '' },
  { name: 'Rio Taquari', note: 'Hidro integrada', image: taquari, id: 7, className: '' }
]
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero__wash"></div>
      <div class="section-shell hero__grid">
        <div class="hero__copy reveal-up">
          <p class="kicker"><span></span> Cuiabá · Mato Grosso</p>
          <h1>O seu {{ season }}<br />começa <em>aqui.</em></h1>
          <p class="hero__lead">Piscinas que não apenas ocupam um espaço — elas mudam o jeito de viver a casa.</p>
          <div class="hero__actions">
            <router-link to="/stock" class="btn-primary">Explorar piscinas <span>↗</span></router-link>
            <a :href="whats" target="_blank" rel="noopener" class="text-link">Conversar com especialista <span>→</span></a>
          </div>
          <div class="hero__proof" aria-label="Diferenciais Rio Piscinas">
            <div><strong>20</strong><span>anos de<br />garantia</span></div>
            <div><strong>30+</strong><span>anos de<br />mercado</span></div>
            <div><strong>30</strong><span>dias para<br />instalar*</span></div>
          </div>
        </div>

        <div class="hero__visual reveal-up">
          <div class="hero__image-wrap">
            <img :src="hero" alt="Piscina instalada em área de lazer" />
            <span class="hero__stamp">Projetada<br />para viver</span>
          </div>
          <div class="hero__index"><strong>01</strong><span></span><small>Seu novo lugar favorito</small></div>
        </div>
      </div>
      <div class="hero__marquee" aria-hidden="true">
        <div>MERGULHE NO SEU MELHOR LUGAR&nbsp; · &nbsp;MERGULHE NO SEU MELHOR LUGAR&nbsp; · &nbsp;</div>
      </div>
    </section>

    <section class="manifesto section-shell">
      <p class="section-number">01 — A experiência</p>
      <div class="manifesto__content">
        <h2>Mais que uma piscina.<br /><i>Um cenário para a vida.</i></h2>
        <div>
          <p>Especialistas em piscinas de fibra, cuidamos da escolha do modelo à instalação completa, com acompanhamento técnico, rapidez e segurança.</p>
          <router-link to="/about" class="text-link dark">Conheça nossa história <span>→</span></router-link>
        </div>
      </div>
      <div class="manifesto__gallery">
        <div class="gallery-main"><img :src="lifestyle" alt="Amigos aproveitando um dia ao redor da piscina" /></div>
        <div class="gallery-note"><span>+</span><strong>1.000 clientes</strong><small>transformando quintais em destinos</small></div>
      </div>
    </section>

    <section class="collection">
      <div class="section-shell">
        <div class="collection__head">
          <div><p class="section-number light">02 — Escolha o seu rio</p><h2>Formas para cada<br /><i>jeito de viver.</i></h2></div>
          <router-link to="/stock" class="circle-link" aria-label="Ver todos os modelos">Todos<br />modelos ↗</router-link>
        </div>
        <div class="models-grid">
          <router-link v-for="(model, index) in models" :key="model.name" :to="`/product/${model.id}`" class="model-card" :class="model.className">
            <img :src="model.image" :alt="model.name" />
            <span class="model-card__number">0{{ index + 1 }}</span>
            <div class="model-card__info"><div><small>{{ model.note }}</small><h3>{{ model.name }}</h3></div><b>↗</b></div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="complete section-shell">
      <div class="complete__intro">
        <p class="section-number">03 — Tudo no mesmo lugar</p>
        <h2>Da estrutura<br />ao <i>último detalhe.</i></h2>
      </div>
      <div class="complete__cards">
        <article><img :src="motor" alt="Motor para piscina" /><span>01</span><h3>Equipamentos</h3><p>Motores e sistemas de alto rendimento para uma água sempre perfeita.</p></article>
        <article class="accent-card"><span>02</span><p class="big-quote">“Você imagina.<br />A gente mergulha<br />no projeto.”</p><a :href="whats" target="_blank" rel="noopener">Começar agora ↗</a></article>
        <article><img :src="filtro" alt="Filtro para piscina" /><span>03</span><h3>Manutenção</h3><p>Acessórios e orientação para aproveitar mais e se preocupar menos.</p></article>
      </div>
    </section>

    <section class="final-cta">
      <div class="section-shell">
        <p>Orçamento gratuito e sem compromisso</p>
        <h2>Vamos tirar esse<br /><i>sonho do papel.</i></h2>
        <a :href="whats" target="_blank" rel="noopener" class="btn-primary cream">Pedir um orçamento <span>↗</span></a>
        <small class="final-cta__note">Atendimento humanizado · resposta rápida no horário comercial</small>
      </div>
    </section>
  </main>
</template>
