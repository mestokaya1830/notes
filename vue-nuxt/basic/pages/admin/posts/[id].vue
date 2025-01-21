<script setup>
  definePageMeta({
    layout: "adminLayout",
  });
  const {id} = useRoute().params
</script>
<template>
  <div>
    <h1>Admin Posts Details</h1>
    <h2>{{ id }}</h2>
  </div>
</template>