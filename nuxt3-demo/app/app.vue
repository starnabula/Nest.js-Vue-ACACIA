<script setup lang="ts"></script>
<template>

<main>
  
<div class="menu">
  <ul>
    
    <li>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">About</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/users">Users</NuxtLink>
    </li>
  </ul>
</div>
  
  <div class="content">
    <NuxtPage />
    </div>
</main>
</template>
<style>
.menu-link { color: #333; background-color: white; transition: all 0.2s; }
.menu-link:hover { background-color: #f8f9fa; }
.router-link-active { background-color: #212529 !important; color: white !important; border-color: #212529 !important; }
</style>