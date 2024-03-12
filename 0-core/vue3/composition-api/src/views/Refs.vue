<template>
  <div>
    <h2 ref="titleRef">{{ title }}</h2>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

 const title = ref('Refs')
 const titleRef = ref(null)

 onMounted(() => {
  console.log(titleRef.value.style)
})
</script>