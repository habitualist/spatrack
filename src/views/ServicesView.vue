<template>
  <main>
    <div class="page-hero" style="background-image: linear-gradient(rgba(15,34,68,.78), rgba(15,34,68,.78)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80');">
      <h1 class="page-hero-title">Our Services</h1>
      <p class="page-hero-breadcrumb"><RouterLink to="/">Home</RouterLink> / <span>Services</span></p>
    </div>

    <section class="section">
      <div class="container">
        <SectionIntro eyebrow="Our Services" title="Services Tailored to Diverse Client Needs" text="We offer a comprehensive range of services designed to support successful architecture and construction delivery from concept to completion." align="center" />

        <div class="service-rows">
          <div
            v-for="(s, i) in services"
            :key="s.num"
            class="two-col reveal"
            :class="{ reverse: i % 2 !== 0 }"
            style="margin-bottom:80px;"
          >
            <img :src="s.image" :alt="s.alt || s.name" :style="{ objectPosition: s.imagePosition || 'center' }" class="rounded-image" loading="lazy" />
            <div>
              <p class="eyebrow no-line" style="font-size:48px; letter-spacing:0; color:rgba(14,165,233,.15); font-family:'Playfair Display',serif; font-weight:900; margin-bottom:-8px; display:block;">{{ s.num }}</p>
              <h2 class="section-title">{{ s.name }}</h2>
              <p class="body-copy" style="margin-bottom:16px;">{{ s.desc }}</p>
              <p class="body-copy" style="margin-bottom:28px;">{{ s.fullDesc }}</p>
              <RouterLink to="/contact#consultation-form" class="btn btn-primary">Book a Consultation</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner title="Ready to Start Your Project? Get in Touch with Us Today" subtitle="We are ready to support your next residential, commercial, or institutional project with practical and professional solutions." />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionIntro from '../components/SectionIntro.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { services } from '../data/index.js'
import { useReveal } from '../composables/useReveal.js'

const { init } = useReveal()
onMounted(init)
</script>
