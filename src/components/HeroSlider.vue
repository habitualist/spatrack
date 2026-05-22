<template>
  <section class="hero" @mouseenter="pauseSlider" @mouseleave="resumeSlider">
    <div class="hero-slides">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="hero-slide"
        :class="{ active: current === i }"
        :style="{ backgroundImage: `linear-gradient(to right, rgba(15,34,68,.86) 42%, rgba(15,34,68,.34)), url(${slide.image})` }"
      >
        <div class="container hero-content">
          <div class="hero-brand">
            <img :src="logoImage" :alt="`${company.brandName} ${company.legalName}`" class="hero-brand-image" />
            <div class="hero-brand-copy">
              <span class="hero-brand-name">{{ company.brandName }}</span>
              <span class="hero-brand-legal">{{ company.legalName }}</span>
            </div>
          </div>
          <p class="hero-label">{{ company.shortTag }}</p>
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.text }}</p>
          <div class="hero-actions">
            <RouterLink to="/contact#consultation-form" class="btn btn-primary">Book a Consultation</RouterLink>
            <RouterLink to="/contact" class="btn btn-outline">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="{ active: current === i }"
        @click="current = i"
        :aria-label="`Slide ${i + 1}`"
      />
    </div>

    <div class="stats-bar container">
      <div class="stat-card" v-for="s in stats" :key="s.label">
        <strong>{{ s.num }}</strong>
        <span>{{ s.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { stats, company } from '../data/index.js'
import logoImage from '../assets/spatrack-logo.jpeg'
import slide1Image from '../assets/project_duplex_completed_main.jpeg'
import slide2Image from '../assets/project_blockwork_main.jpeg'
import slide3Image from '../assets/project_slab_pouring_main.jpeg'

const slides = [
  { title: company.headline, text: company.subtext, image: slide1Image },
  { title: 'Professional Solutions for Individuals, Organizations & Public Institutions', text: 'We serve home builders, property owners, corporate organizations, government agencies, and parastatals with practical and high-quality building solutions.', image: slide2Image },
  { title: 'From Vision to Delivery, We Help You Build with Confidence', text: 'Our services cover design, construction, engineering, consultancy, feasibility studies, and project management, all delivered with professionalism and care.', image: slide3Image },
]

const current = ref(0)
let timer

function startTimer() {
  timer = setInterval(() => { current.value = (current.value + 1) % slides.length }, 5000)
}
function pauseSlider() { clearInterval(timer) }
function resumeSlider() { startTimer() }

onMounted(startTimer)
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.hero { position: relative; min-height: 100vh; overflow: hidden; display: flex; flex-direction: column; }
.hero-slides { position: absolute; inset: 0; }
.hero-slide { position: absolute; inset: 0; opacity: 0; transform: scale(1.04); transition: opacity .8s ease, transform .8s ease; background-size: cover; background-position: center; display: flex; }
.hero-slide.active { opacity: 1; transform: scale(1); }
.hero-content { position: relative; z-index: 2; min-height: calc(100vh - 110px); display: flex; flex-direction: column; justify-content: center; padding: 150px 0 170px; color: #fff; }
.hero-brand { display: inline-flex; align-items: center; gap: 16px; margin-bottom: 22px; }
.hero-brand-image { width: 74px; height: 74px; object-fit: contain; border-radius: 18px; background: rgba(255,255,255,.96); padding: 6px; box-shadow: 0 18px 50px rgba(5, 13, 25, .18); }
.hero-brand-copy { display: flex; flex-direction: column; gap: 6px; }
.hero-brand-name { font-family: 'Playfair Display', serif; font-size: clamp(26px, 3vw, 36px); line-height: 1; letter-spacing: 1px; }
.hero-brand-legal { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: #7dd3fc; font-weight: 700; }
.hero-label { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: #7dd3fc; font-weight: 700; margin-bottom: 20px; }
.hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(40px, 6vw, 72px); line-height: 1.04; max-width: 760px; margin-bottom: 18px; }
.hero p { max-width: 650px; font-size: 18px; line-height: 1.85; color: rgba(255,255,255,.78); }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 34px; }
.hero-dots { position: absolute; left: 50%; bottom: 132px; transform: translateX(-50%); z-index: 3; display: flex; gap: 10px; }
.hero-dots button { width: 11px; height: 11px; border-radius: 999px; border: none; background: rgba(255,255,255,.35); cursor: pointer; transition: .25s; }
.hero-dots button.active { width: 34px; background: #0ea5e9; }
.stats-bar { position: absolute; left: 50%; transform: translateX(-50%); bottom: 28px; z-index: 3; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.stat-card { background: rgba(255,255,255,.94); backdrop-filter: blur(10px); padding: 22px 26px; border-radius: 18px; box-shadow: var(--shadow); text-align: center; }
.stat-card strong { display: block; font-family: 'Playfair Display', serif; font-size: 34px; color: var(--navy); line-height: 1; margin-bottom: 7px; }
.stat-card span { font-size: 13px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px; }
@media (max-width: 900px) {
  .hero-content { padding-top: 130px; padding-bottom: 110px; }
  .hero-brand { gap: 12px; margin-bottom: 18px; }
  .hero-brand-image { width: 60px; height: 60px; border-radius: 16px; }
  .hero-brand-name { font-size: 24px; }
  .hero-brand-legal { font-size: 10px; letter-spacing: 2px; }
  .hero p { font-size: 16px; }
  .stats-bar { width: min(100%, calc(100% - 2rem)); grid-template-columns: repeat(3, 1fr); gap: 8px; bottom: 14px; }
  .stat-card { padding: 14px 10px; }
  .stat-card strong { font-size: 22px; margin-bottom: 4px; }
  .stat-card span { font-size: 10px; letter-spacing: 1px; }
  .hero-dots { display: none; }
}
</style>
