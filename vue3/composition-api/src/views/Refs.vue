<template>
  <div>
    <h2 ref="titleRef">{{ title }}</h2>
    <p>Ref Color</p>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

 const title = ref('Refs')
 const titleRef = ref(null)

 onMounted(() => {
  titleRef.value.style.color = 'red'
  console.log(titleRef.value.style)
})
</script>