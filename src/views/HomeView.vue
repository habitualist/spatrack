<template>
  <main>
    <HeroSlider />

    <section class="section">
      <div class="container two-col">
        <div>
          <SectionIntro
            eyebrow="About Preview"
            title="We Bring Your Vision to Life with Precision and Professionalism"
            :text="company.aboutPreview"
          />
          <p class="body-copy" style="margin-bottom:28px;">
            We serve individuals, corporate organizations, government agencies, and parastatals with practical solutions designed for long-term performance and quality delivery.
          </p>
          <RouterLink to="/about" class="btn btn-primary">Learn More About Us</RouterLink>
        </div>
        <img
          class="rounded-image"
          :src="homeIntroImage"
          alt="Spatrack completed building structure"
          loading="lazy"
        />
      </div>
    </section>

    <section class="section section-muted">
      <div class="container">
        <SectionIntro
          eyebrow="Our Services"
          title="Comprehensive Building Solutions"
          text="We offer architectural design, construction, engineering, consultancy, feasibility studies, and project management tailored to diverse client needs."
          align="center"
        />
        <div class="services-grid">
          <ServiceCard v-for="s in services" :key="s.num" v-bind="s" class="reveal" />
        </div>
        <div style="text-align:center; margin-top:44px;">
          <RouterLink to="/services" class="btn btn-primary">View All Services</RouterLink>
        </div>
      </div>
    </section>

    <WhyUs
      eyebrow="Why Choose Us"
      title="A Reliable Partner for Your Next Project"
      subtitle="We combine professionalism, efficient execution, and a client-focused approach to deliver projects with confidence and care."
    />

    <section class="section section-muted">
      <div class="container">
        <SectionIntro
          eyebrow="Our Portfolio"
          title="Projects Showcase"
          text="A selection of our completed and ongoing projects — from residential builds and structural engineering to multi-family developments across Lagos."
          align="center"
        />
        <div class="projects-grid">
          <ProjectCard v-for="p in featured" :key="p.id" v-bind="p" class="reveal" />
        </div>
        <div style="text-align:center; margin-top:44px;">
          <RouterLink to="/portfolio" class="btn btn-primary">View Projects</RouterLink>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Have a Project in Mind? Let's Bring Your Ideas to Life"
      subtitle="Contact Spatrack for consultations, project discussions, and professional support on your next build."
    />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSlider from '../components/HeroSlider.vue'
import SectionIntro from '../components/SectionIntro.vue'
import ServiceCard from '../components/ServiceCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import WhyUs from '../components/WhyUs.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { services, projects, company } from '../data/index.js'
import { useReveal } from '../composables/useReveal.js'
import homeIntroImage from '../assets/project_duplex_completed_03.jpeg'

const featured = projects.slice(0, 3)
const { init } = useReveal()
onMounted(init)
</script>
