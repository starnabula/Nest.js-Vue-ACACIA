<script setup lang="ts">
const route =useRoute()
const slug = ref(route.params.slug)
console.log(slug)

</script>

<template>

  <div>
    <h1>Backend Page</h1>
    <p v-if="$route.params.slug">Slug: {{ $route.params.slug }}</p>
  </div>
  <ul>
    <li v-for="item in $route.params.slug" :key="item">{{ item }}</li>
  </ul>
</template>

<style scoped>
</style>
