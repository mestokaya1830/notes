<template>
  <div>
    <h1>Emit Component Model</h1>
    <button @click="hideMe('hideModel')">Hide Me!</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const modelHandel = ref(false)
const hideMe = defineEmits(['hideModel'])

</script>