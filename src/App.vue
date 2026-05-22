<template>
  <TheNavbar />
  <main>
    <RouterView />
  </main>
  <TheFooter />
  <WaFloat />
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import WaFloat from './components/WaFloat.vue'
</script>
