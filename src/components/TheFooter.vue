<template>
  <footer>
    <div class="container footer-grid">
      <div>
        <RouterLink to="/" class="footer-brand">
          <img :src="logoImage" :alt="`${company.brandName} ${company.legalName}`" class="footer-logo-image" />
          <span>
            <span class="footer-brand-name">{{ company.brandName }}</span>
            <span class="footer-brand-tag">{{ company.legalName }}</span>
          </span>
        </RouterLink>
        <p class="footer-desc">A forward-thinking architecture and construction firm in Lagos, Nigeria, delivering innovative, functional, and high-quality building solutions.</p>
        <div class="footer-links">
          <a v-for="p in contact.phones" :key="p" :href="`tel:${p.replace(/\s/g,'')}`">Call {{ p }}</a>
          <a :href="`mailto:${contact.email}`">Email {{ contact.email }}</a>
          <a :href="contact.whatsappLink" target="_blank" rel="noopener">WhatsApp: {{ contact.whatsapp }}</a>
          <a target="_blank" rel="noopener" href="https://maps.google.com/?q=33%20Sereki%20Crescent%20Bakare%20Bus%20Stop%20Meiran%20Lagos%20Nigeria">Visit {{ contact.address }}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li v-for="l in navLinks" :key="l.to"><RouterLink :to="l.to">{{ l.label }}</RouterLink></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li v-for="s in serviceNames" :key="s"><RouterLink to="/services">{{ s }}</RouterLink></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Working Hours</h4>
        <ul>
          <li><span>Monday - Saturday: 9:00 AM - 5:00 PM</span></li>
          <li><span>Sunday: Closed</span></li>
        </ul>
        <RouterLink to="/contact#consultation-form" class="btn btn-primary" style="margin-top:22px; font-size:13px; padding:11px 20px;">Book Consultation</RouterLink>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>Copyright {{ year }} {{ company.name }}. All rights reserved.</span>
      <span>33, Sereki Crescent, Bakare Bus Stop, Meiran, Lagos, Nigeria</span>
    </div>
  </footer>
</template>

<script setup>
import logoImage from '../assets/spatrack-logo.jpeg'
import { company, contact, services } from '../data/index.js'

const year = new Date().getFullYear()
const serviceNames = services.map(s => s.name)
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Us' },
]
</script>

<style scoped>
.footer-brand { display: inline-flex; align-items: center; gap: 14px; text-decoration: none; margin-bottom: 14px; }
.footer-logo-image { width: 62px; height: 62px; object-fit: contain; flex-shrink: 0; }
</style>
