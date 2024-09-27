<script setup>
  const globalFunction = await useFetch('/api/utils')
</script>
<template lang="">
  <div>
    {{globalFunction}}
  </div>
</template>
