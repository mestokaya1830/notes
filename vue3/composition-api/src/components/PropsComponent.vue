<template>
  <div>
    <h1>{{ message.message }}</h1>
  </div>
</template>

<script setup>
  const message = defineProps(['message'])
</script>