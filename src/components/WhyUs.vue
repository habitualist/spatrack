<template>
  <section class="why-section section section-muted">
    <div class="container">
      <div class="why-wrap">
        <div class="why-left">
          <SectionIntro :eyebrow="eyebrow" :title="title" :text="subtitle" />
          <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=85" alt="Our team" class="rounded-image" style="height:320px; margin-top:8px;" loading="lazy" />
        </div>
        <div class="feature-grid">
          <div v-for="r in reasons" :key="r.title" class="feature-card reveal">
            <span class="feature-icon">{{ r.icon }}</span>
            <div class="feature-title">{{ r.title }}</div>
            <p class="feature-text">{{ r.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionIntro from './SectionIntro.vue'
import { reasons } from '../data/index.js'
import { useReveal } from '../composables/useReveal.js'

defineProps({
  eyebrow: { type: String, default: 'Why Work With Us' },
  title: { type: String, default: 'Why Choose Spatrack' },
  subtitle: { type: String, default: 'We combine experience, innovation, and a client-first mindset to deliver results that stand the test of time.' },
})

const { init } = useReveal()
onMounted(init)
</script>

<style scoped>
.why-wrap { display: grid; grid-template-columns: 1fr 1.2fr; gap: 70px; align-items: center; }
@media (max-width: 768px) { .why-wrap { grid-template-columns: 1fr; gap: 36px; } }
</style>
