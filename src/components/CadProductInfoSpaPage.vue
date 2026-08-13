<script setup lang="ts">
import CadProductInfoPage from './CadProductInfoPage.vue'
defineProps<{ item: any }>()
</script>
<template><CadProductInfoPage :item="item" spa /></template>
