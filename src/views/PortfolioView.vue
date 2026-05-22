<template>
  <main>
    <div class="page-hero" style="background-image: linear-gradient(rgba(15,34,68,.78), rgba(15,34,68,.78)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80');">
      <h1 class="page-hero-title">Portfolio / Projects</h1>
      <p class="page-hero-breadcrumb"><RouterLink to="/">Home</RouterLink> / <span>Portfolio</span></p>
    </div>

    <section class="section">
      <div class="container">
        <SectionIntro eyebrow="Projects" title="Our Construction & Engineering Portfolio" text="Explore some of our key developments, from completed residential duplexes to structural blockwork and engineering foundation casting across Lagos, Nigeria." align="center" />

        <div class="filter-bar">
          <button v-for="cat in categories" :key="cat" class="filter-btn" :class="{ active: active === cat }" @click="active = cat">
            {{ cat }}
          </button>
        </div>

        <div class="portfolio-grid">
          <ProjectCard v-for="p in filtered" :key="p.id" v-bind="p" class="reveal" />
        </div>
      </div>
    </section>

    <CtaBanner title="Need to Discuss a Project?" subtitle="Let's talk about your next residential, commercial, or institutional development." />
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import SectionIntro from '../components/SectionIntro.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { projects } from '../data/index.js'
import { useReveal } from '../composables/useReveal.js'

const active = ref('All')
const categories = ['All', ...new Set(projects.map(p => p.category))]
const filtered = computed(() => active.value === 'All' ? projects : projects.filter(p => p.category === active.value))

const { init } = useReveal()
onMounted(init)
watch(active, () => setTimeout(init, 60))
</script>
