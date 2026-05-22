<template>
  <div class="top-bar">
    <div class="container top-bar-inner">
      <a :href="`tel:${contact.phones[0].replace(/\s/g,'')}`">Call {{ contact.phones[0] }}</a>
      <a :href="`mailto:${contact.email}`">Email {{ contact.email }}</a>
      <a :href="contact.whatsappLink" target="_blank" rel="noopener">WhatsApp Us</a>
    </div>
  </div>

  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <RouterLink to="/" class="logo">
        <img :src="logoImage" :alt="`${company.brandName} ${company.legalName}`" class="logo-image" />
        <span class="logo-copy">
          <span class="logo-name">{{ company.brandName }}</span>
          <span class="logo-tagline">{{ company.legalName }}</span>
        </span>
      </RouterLink>
      <div class="nav-links" :class="{ open: menuOpen }">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" @click="closeMenu">{{ l.label }}</RouterLink>
        <RouterLink to="/contact#consultation-form" class="nav-cta" @click="closeMenu">Book Consultation</RouterLink>
      </div>
      <button class="nav-toggle" @click="toggleMenu" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { company, contact } from '../data/index.js'
import logoImage from '../assets/spatrack-logo.jpeg'

const isScrolled = ref(false)
const menuOpen = ref(false)
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const onScroll = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.top-bar { background: #0a1929; color: #94a3b8; font-size: 13px; padding: 9px 0; }
.top-bar-inner { display: flex; gap: 28px; align-items: center; justify-content: flex-end; }
.top-bar a { color: #94a3b8; transition: color .2s; display: flex; align-items: center; gap: 6px; text-decoration: none; }
.top-bar a:hover { color: #0ea5e9; }
.navbar { position: sticky; top: 0; z-index: 1000; background: rgba(255,255,255,.97); backdrop-filter: blur(14px); border-bottom: 1px solid transparent; transition: border-color .3s, box-shadow .3s; }
.navbar.scrolled { border-color: #e2e8f0; box-shadow: 0 6px 30px rgba(9,22,43,.07); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; min-height: 76px; }
.logo { display: flex; align-items: center; gap: 12px; text-decoration: none; min-width: 0; }
.logo-image { width: 58px; height: 58px; object-fit: contain; flex-shrink: 0; }
.logo-copy { display: flex; flex-direction: column; min-width: 0; }
.logo-name { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: #0f2244; letter-spacing: -0.3px; line-height: 1; }
.logo-tagline { font-size: 11px; letter-spacing: 2px; color: #0ea5e9; text-transform: uppercase; margin-top: 5px; line-height: 1.2; }
.nav-links { display: flex; gap: 4px; align-items: center; }
.nav-links a { font-size: 14px; font-weight: 500; color: #1a1a2e; padding: 8px 14px; border-radius: 8px; transition: all .2s; text-decoration: none; }
.nav-links a:hover { color: #0ea5e9; background: rgba(14,165,233,.07); }
.nav-links a.router-link-exact-active { color: #0ea5e9; }
.nav-links .nav-cta { background: #0ea5e9; color: #fff !important; border-radius: 999px !important; font-weight: 600 !important; padding: 10px 22px !important; }
.nav-links .nav-cta:hover { background: #0284c7 !important; }
.nav-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; background: none; border: none; }
.nav-toggle span { width: 24px; height: 2px; background: #0f2244; transition: .3s; border-radius: 2px; display: block; }
.nav-toggle span.open:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
.nav-toggle span.open:nth-child(2) { opacity: 0; }
.nav-toggle span.open:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
@media (max-width: 768px) {
  .top-bar { display: none; }
  .nav-inner { min-height: 72px; }
  .logo { gap: 10px; max-width: calc(100% - 56px); }
  .logo-image { width: 50px; height: 50px; }
  .logo-name { font-size: 18px; }
  .logo-tagline { font-size: 10px; letter-spacing: 1.4px; }
  .nav-links { display: none; position: fixed; inset: 0; top: 76px; background: #fff; flex-direction: column; align-items: flex-start; padding: 28px 24px; gap: 4px; border-top: 1px solid #e2e8f0; overflow-y: auto; z-index: 999; }
  .nav-links.open { display: flex; }
  .nav-links a { font-size: 16px; padding: 13px 0; width: 100%; border-bottom: 1px solid #e2e8f0; border-radius: 0; }
  .nav-links .nav-cta { margin-top: 16px; text-align: center; border-radius: 999px !important; border: none !important; }
  .nav-toggle { display: flex; }
}
</style>
