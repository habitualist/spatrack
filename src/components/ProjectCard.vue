<template>
  <RouterLink class="proj-card" :to="`/portfolio/${slug}`">
    <img :src="image" :alt="title" loading="lazy" />
    <div class="proj-overlay">
      <span class="proj-tag">{{ category }}</span>
      <h3>{{ title }}</h3>
      <p>📍 {{ location }} &nbsp;·&nbsp; {{ year }}</p>
      <span class="proj-link">View project →</span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({ title: String, category: String, location: String, year: String, image: String, slug: String })
</script>

<style scoped>
.proj-card { position: relative; display:block; border-radius: var(--radius); overflow: hidden; aspect-ratio: 4/3; box-shadow: var(--shadow); cursor: pointer; }
.proj-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.proj-card:hover img { transform: scale(1.07); }
.proj-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,34,68,.93) 38%, transparent); color: #fff; padding: 24px; display: flex; flex-direction: column; justify-content: flex-end; opacity: 0; transition: opacity .35s; }
.proj-card:hover .proj-overlay, .proj-card:focus-visible .proj-overlay { opacity: 1; }
.proj-tag { display: inline-flex; width: fit-content; padding: 4px 12px; background: rgba(255,255,255,.15); border-radius: 999px; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #7dd3fc; margin-bottom: 8px; }
.proj-overlay h3 { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 600; margin-bottom: 6px; }
.proj-overlay p { font-size: 13px; color: rgba(255,255,255,.76); margin: 0 0 10px; }
.proj-link { font-size: 14px; font-weight: 700; color: #fff; }
</style>
