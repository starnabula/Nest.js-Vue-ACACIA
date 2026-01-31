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
      <NuxtLink to="/users/samit?type=admin&page=1">/Users/samit?type=admin&page=1</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/members/admin/samit">/members/admin/samit</NuxtLink>
    </li>
<li>
  <NuxtLink to="/category/programming">/Category/Programming</NuxtLink>
</li>
<li>
  <NuxtLink to="/parent/child">/Parent/child</NuxtLink>  
</li>
<li>
  <NuxtLink to="/parent/sister">/Parent/sister</NuxtLink>
</li>
  </ul>
</div>
  
  <div class="content">
    <NuxtPage />
    </div>
</main>
</template>
<style>

</style>