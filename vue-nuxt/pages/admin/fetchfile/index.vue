<script setup>
    const persons = await import('~/assets/persons.json')
</script>

<template>
  <div>
    <h1>Fetch File</h1>
    <ul>
      <li v-for="item in persons.default" :key="item.index">
        <span>{{ item.index }}</span>
        <span>{{ item.name }}</span>
        <span><NuxtLink :to="`/admin/fetchapi/${item.index}`">Details</NuxtLink></span>
      </li>
    </ul>
  </div>
</template>
