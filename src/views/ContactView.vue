<template>
  <main>
    <div class="page-hero" style="background-image: linear-gradient(rgba(15,34,68,.82), rgba(15,34,68,.82)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80');">
      <h1 class="page-hero-title">Get In Touch</h1>
      <p class="page-hero-breadcrumb"><RouterLink to="/">Home</RouterLink> / <span>Contact</span></p>
    </div>

    <section class="section">
      <div class="container contact-grid">
        <div>
          <div id="contact-options" class="info-card-stack" style="margin-bottom:24px;">
            <div class="info-card">
              <div class="info-card-icon">Start</div>
              <div>
                <div class="info-label">Book a Consultation</div>
                <div class="info-val">Choose the option that works best for you: fill out the form below or chat with us directly on WhatsApp.</div>
              </div>
            </div>
          </div>

          <SectionIntro eyebrow="Contact Details" title="We'd Love to Hear from You" text="Contact us for inquiries, consultations, or project discussions. You can call, email, fill the form, or reach us directly on WhatsApp." />

          <div class="info-card-stack">
            <div class="info-card" v-for="card in cards" :key="card.label">
              <div class="info-card-icon">{{ card.icon }}</div>
              <div>
                <div class="info-label">{{ card.label }}</div>
                <div class="info-val" v-html="card.value"></div>
              </div>
            </div>
          </div>

          <div class="hero-actions" style="margin-top:16px;">
            <a href="#consultation-form" class="btn btn-primary" style="flex:1;">Fill Consultation Form</a>
            <a :href="contact.whatsappLink" target="_blank" rel="noopener" class="btn btn-wa" style="flex:1;">
              Use WhatsApp
            </a>
          </div>

          <a :href="contact.whatsappLink" target="_blank" rel="noopener" class="btn btn-wa" style="width:100%; margin-top:16px; justify-content:center;">
            Contact Us on WhatsApp
          </a>
        </div>

        <div id="consultation-form" class="form-wrap">
          <h2 class="form-title">Book a Consultation</h2>
          <p class="form-sub">Fill out the form below and we will get back to you as soon as possible.</p>

          <form @submit.prevent="submit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <input id="name" v-model="form.name" type="text" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" v-model="form.email" type="email" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input id="phone" v-model="form.phone" type="tel" required />
              </div>
              <div class="form-group">
                <label for="service">Service Needed</label>
                <select id="service" v-model="form.service" required>
                  <option disabled value="">Select a service</option>
                  <option v-for="name in serviceNames" :key="name" :value="name">{{ name }}</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Tell us a little about your project" required></textarea>
            </div>

            <button class="btn btn-primary submit-btn" :class="{ sent: submitted }">
              {{ submitted ? 'Draft Email Prepared' : 'Send Inquiry' }}
            </button>
          </form>

          <p class="form-note">We will respond to your inquiry within 1–2 business days. For faster response, reach us directly on WhatsApp.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <SectionIntro eyebrow="Google Maps" title="Our Office Location" align="center" />
        <div class="map-wrap">
          <iframe class="map-embed" :src="contact.mapEmbed" loading="lazy" title="Spatrack Location"></iframe>
        </div>
      </div>
    </section>

    <CtaBanner title="Let's Discuss Your Next Project" subtitle="Book a consultation or chat with us directly on WhatsApp today." />
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import SectionIntro from '../components/SectionIntro.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { contact, services } from '../data/index.js'

const serviceNames = services.map(s => s.name)
const form = reactive({ name: '', email: '', phone: '', service: '', message: '' })
const submitted = ref(false)

const submit = () => {
  const subject = encodeURIComponent(`Consultation Request - ${form.service}`)
  const body = encodeURIComponent(
`Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message}`)

  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 2500)
}

const cards = [
  { icon: 'Call', label: 'Phone Numbers', value: contact.phones.map(p => `<a href="tel:${p.replace(/\s/g, '')}" style="display:block;color:var(--text);text-decoration:none;">${p}</a>`).join('') },
  { icon: 'Email', label: 'Email Address', value: `<a href="mailto:${contact.email}" style="color:var(--text);text-decoration:none;">${contact.email}</a>` },
  { icon: 'Visit', label: 'Office Address', value: contact.address },
  { icon: 'Chat', label: 'WhatsApp', value: `<a href="${contact.whatsappLink}" target="_blank" style="color:#0ea5e9;font-weight:600;">${contact.whatsapp} - Chat on WhatsApp</a>` },
  { icon: 'Hours', label: 'Working Hours', value: `${contact.hours}<br><span style="color:var(--text-muted);font-size:13px;">Sunday: Closed</span>` },
]
</script>
