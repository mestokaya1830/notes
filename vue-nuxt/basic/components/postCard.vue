<script setup>
 const {posts} = defineProps(['posts'])
</script>
<template>
  <div>
    <ul>
      <li v-for="item in posts" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.title }}</span>
        <span>{{ item.body }}</span>
        <NuxtLink :to="`/posts/${item.id}`" class="details-links">Details</NuxtLink>
      </li>
    </ul>
  </div>
</template>
