<template>
  <main>
    <div class="page-hero" style="background-image: linear-gradient(rgba(15,34,68,.78), rgba(15,34,68,.78)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80');">
      <h1 class="page-hero-title">About Us</h1>
      <p class="page-hero-breadcrumb"><RouterLink to="/">Home</RouterLink> / <span>About Us</span></p>
    </div>

    <section class="section">
      <div class="container two-col">
        <img class="rounded-image" :src="aboutImage" alt="Spatrack completed project" loading="lazy" />
        <div>
          <SectionIntro eyebrow="Full Company Story" title="A Trusted Partner in the Built Environment" />
          <p class="body-copy" v-for="(p, i) in company.aboutParagraphs" :key="i" style="margin-bottom:18px;">{{ p }}</p>
          <RouterLink to="/contact#consultation-form" class="btn btn-primary" style="margin-top:10px;">Book a Consultation</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-muted">
      <div class="container">
        <SectionIntro eyebrow="Mission & Vision" title="What Drives Our Work" align="center" />
        <div class="mv-grid mv-grid-two">
          <div class="mv-card reveal">
            <span class="mv-icon">Mission</span>
            <div class="mv-title">Our Mission</div>
            <p class="mv-text">{{ company.mission }}</p>
          </div>
          <div class="mv-card reveal">
            <span class="mv-icon">Vision</span>
            <div class="mv-title">Our Vision</div>
            <p class="mv-text">{{ company.vision }}</p>
          </div>
        </div>
      </div>
    </section>

    <WhyUs eyebrow="Why Choose Us" title="Built on Professionalism, Quality, and Trust" subtitle="We work to understand every brief clearly and execute each project with precision, efficiency, and strong attention to client satisfaction." />

    <CtaBanner title="Ready to Start Your Project?" subtitle="Speak with our team today and let's discuss the right solution for your site, building, or development plan." />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionIntro from '../components/SectionIntro.vue'
import WhyUs from '../components/WhyUs.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useReveal } from '../composables/useReveal.js'
import { company } from '../data/index.js'
import aboutImage from '../assets/project_duplex_completed_02.jpeg'

const { init } = useReveal()
onMounted(init)
</script>
