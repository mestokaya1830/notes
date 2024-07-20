<template>
  <div>
    <h2>{{ title }}</h2>
    <p ref="pTag">Ref Color</p>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

 const title = 'Refs'
 const pTag = ref(null)

 onMounted(() => {//for dom
  pTag.value.style.color = 'red'
  console.log(pTag.value.style)
})
</script>