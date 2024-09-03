<script setup>
  useHead({
    title:"Server Side"
  })
  const {data} = await useFetch('/api/posts')//server side
  console.log(data.value)
</script>

<template>
  <div>
    <h1>Server-Side</h1>
    <ul v-for="item in data.result" :key="item.id">
      <li><NuxtLink :to="`/posts/${item.id}`">
        <span>{{ item.id }}</span>
        <span>{{ item.url }}</span>
      </NuxtLink></li>
    </ul>
  </div>
</template>
