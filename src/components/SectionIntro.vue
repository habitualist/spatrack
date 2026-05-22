<template>
  <div class="section-intro" :class="align">
    <p class="eyebrow" :class="[align === 'center' ? 'center' : 'no-line']">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="text" class="section-text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: String,
  text: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<style scoped>
.section-intro { margin-bottom: 36px; }
.section-intro.center { text-align: center; max-width: 640px; margin-inline: auto; margin-bottom: 44px; }
</style>
