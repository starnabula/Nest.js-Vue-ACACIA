<script setup lang="ts">
const route = useRoute()
console.log(route.params.id)
console.log(route.params.type)
console.log(route.params.page)

</script>

<template>
  <div>
    <h1> User Details </h1>
    <p>User ID: {{ route.params.id }}</p>
    <p>Type: {{ route.params.type }}</p>
    <p>Page: {{ route.params.page }}</p>
  </div>
</template>

<style scoped>
</style>
