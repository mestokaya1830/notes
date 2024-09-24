<script setup>
  definePageMeta({
    layout:'admin-layout'
  })

  const { data } = await useFetch('/api/posts')
</script>

<template>
  <div>
    <h1>Server Side</h1>
    <ul>
      <li v-for="item in data.data" :key="item.userId">
        <span>{{ item.userId }}</span>
        <span>{{ item.title }}</span>
        <span>{{ String(item.body).substring(0, 50) }}</span>
        <span><NuxtLink :to="`/admin/serverside/${item.userId}`">Details</NuxtLink></span>
      </li>
    </ul>
  </div>
</template>