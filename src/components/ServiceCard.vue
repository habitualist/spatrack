<template>
  <article class="service-card">
    <div class="service-img-wrap">
      <img :src="image" :alt="alt || name" :style="{ objectPosition: imagePosition || 'center' }" loading="lazy" />
      <span class="service-num">{{ num }}</span>
    </div>
    <div class="service-body">
      <h3>{{ name }}</h3>
      <p>{{ desc }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  num: String,
  name: String,
  desc: String,
  image: String,
  alt: String,
  imagePosition: String,
})
</script>

<style scoped>
.service-card { background: #fff; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); transition: transform .3s, box-shadow .3s; }
.service-card:hover { transform: translateY(-6px); box-shadow: 0 28px 60px rgba(0,0,0,.12); }
.service-img-wrap { position: relative; overflow: hidden; height: 230px; }
.service-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.service-card:hover .service-img-wrap img { transform: scale(1.07); }
.service-num { position: absolute; top: 14px; left: 14px; background: rgba(15,34,68,.9); color: #fff; padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
.service-body { padding: 24px 26px 28px; }
.service-body h3 { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 600; color: var(--navy); margin-bottom: 10px; }
.service-body p { font-size: 14px; color: var(--text-muted); line-height: 1.72; margin: 0; }
</style>
