<script setup>
definePageMeta({
  layout: 'admin-layout'
})

const { params } = useRoute()
const { data } = await useFetch('/api/posts/' + params.id)
console.log(data)
</script>

<template>
  <div>
    <h1>Server Side User Details</h1>
    <ul>
      <li>
        <span>{{ data.data.userId }}</span>
        <span>{{ data.data.title }}</span>
        <span>{{ data.data.body }}</span>
      </li>
      <button>
        <NuxtLink to="/admin/serverside/">Back</NuxtLink>
      </button>
    </ul>
  </div>
</template>