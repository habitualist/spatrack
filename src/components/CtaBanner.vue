<template>
  <section class="cta-banner">
    <div class="container cta-inner">
      <div class="cta-text">
        <p class="eyebrow no-line" style="color:rgba(255,255,255,.5)">Let's Build Together</p>
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-text">{{ subtitle }}</p>
      </div>
      <div class="cta-actions">
        <RouterLink to="/contact#consultation-form" class="btn btn-white">Book Consultation</RouterLink>
        <a :href="contact.whatsappLink" target="_blank" rel="noopener" class="btn btn-wa">💬 WhatsApp</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contact } from '../data/index.js'
defineProps({
  title: { type: String, default: 'Have a Project in Mind?' },
  subtitle: { type: String, default: "Let's bring your ideas to life. Contact us today for a free consultation." },
})
</script>
