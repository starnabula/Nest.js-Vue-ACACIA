<script setup lang="ts"></script>

<template>
  <div>
    <h1> Category Skug page  </h1>
    <p v-if="$route.params.slug">Category: {{ $route.params.slug }}</p>
    <p v-else>No category selected</p>
  </div>
</template>

<style scoped>
</style>
