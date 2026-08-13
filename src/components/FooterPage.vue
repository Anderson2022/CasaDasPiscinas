<script setup lang="ts">
import logo from '@/assets/imagen/rio ccz.png'
const insta = 'https://www.riopiscinascuiaba.com.br/'
const whats = 'https://api.whatsapp.com/send/?phone=5565981113042'
</script>

<template>
  <footer class="site-footer">
    <div class="section-shell footer-grid">
      <div><div class="footer-logo-wrap"><img :src="logo" alt="Rio Piscinas" class="footer-logo" /></div><p>Especialistas em piscinas de fibra.<br />Qualidade, segurança e bons verões em Cuiabá.</p></div>
      <div><small>ATENDIMENTO</small><p>Cuiabá, Várzea Grande e região<br />Seg–Sex, 8h às 18h · Sáb, 8h às 12h</p></div>
      <div><small>FALE CONOSCO</small><p><a :href="whats" target="_blank">(65) 98111-3042 ↗</a><br /><a :href="insta" target="_blank">Site oficial ↗</a></p></div>
    </div>
    <div class="section-shell footer-bottom"><span>© {{ new Date().getFullYear() }} Rio Piscinas</span><span>Feito para dias de sol.</span></div>
  </footer>
</template>
