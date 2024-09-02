<script setup>
  definePageMeta({
    layout: 'admin'
  })
</script>
<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li><NuxtLink to="/admin/users/1">User 1</NuxtLink></li>
      <li><NuxtLink to="/admin/users/2">User 2</NuxtLink></li>
      <li><NuxtLink to="/admin/users/3">User 3</NuxtLink></li>
    </ul>
  </div>
</template>
