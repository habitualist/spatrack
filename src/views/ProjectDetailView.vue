<template>
  <main v-if="project">
    <div class="page-hero" :style="heroStyle">
      <h1 class="page-hero-title">{{ project.title }}</h1>
      <p class="page-hero-breadcrumb"><RouterLink to="/">Home</RouterLink> / <RouterLink to="/portfolio">Portfolio</RouterLink> / <span>{{ project.title }}</span></p>
    </div>

    <section class="section">
      <div class="container two-col" style="align-items:start;">
        <div>
          <SectionIntro eyebrow="Project Detail" :title="project.title" :text="project.description" />
          <div class="project-meta">
            <div class="meta-item"><strong>Location</strong><span>{{ project.location }}</span></div>
            <div class="meta-item"><strong>Year</strong><span>{{ project.year }}</span></div>
            <div class="meta-item"><strong>Category</strong><span>{{ project.category }}</span></div>
          </div>
          <RouterLink to="/contact#consultation-form" class="btn btn-primary" style="margin-top:24px;">Book a Consultation</RouterLink>
        </div>
        <img :src="project.image" :alt="project.title" class="rounded-image" loading="lazy" />
      </div>
    </section>

    <section class="section section-muted">
      <div class="container">
        <SectionIntro eyebrow="Gallery" title="Project Images" align="center" />
        <div class="detail-gallery">
          <img v-for="(image, index) in project.gallery" :key="index" :src="image" :alt="`${project.title} image ${index + 1}`" loading="lazy" />
        </div>
      </div>
    </section>

    <CtaBanner title="Need a Similar Project?" subtitle="Talk to Spatrack about your site, design brief, or construction plan today." />
  </main>

  <main v-else>
    <section class="section">
      <div class="container" style="text-align:center; padding:80px 0;">
        <h1 class="section-title">Project not found</h1>
        <p class="section-text" style="margin-bottom:24px;">The project you are looking for could not be found.</p>
        <RouterLink to="/portfolio" class="btn btn-primary">Back to Portfolio</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SectionIntro from '../components/SectionIntro.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { projects } from '../data/index.js'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
const heroStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(15,34,68,.8), rgba(15,34,68,.8)), url('${project.value?.image || ''}')`,
}))
</script>
