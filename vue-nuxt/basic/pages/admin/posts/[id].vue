<script setup>
  definePageMeta({
    layout: "adminLayout",
  });
  useHead({
  title: "Admin Posts Details",
  meta: [
    {
      name: "description",
      content: "Admin Posts Details Page",
    },
  ],
});
  const {id} = useRoute().params
</script>
<template>
  <div>
    <h1>Admin Posts Details</h1>
    <h2>{{ id }}</h2>
  </div>
</template>