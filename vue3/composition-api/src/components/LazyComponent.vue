<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  const message = defineProps(['message'])
</script>