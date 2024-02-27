<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ counter }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
  </div>
</template>

<script setup>
//composition api
  import {ref, onMounted, watch} from 'vue'

  const title = ref('Watch')

  const counter = ref(0)
  const increase = () => counter.value++
  const decrease = () => counter.value--

  watch(() => counter.value, (newValue, oldValue) => {
    if(newValue > 5){//actully you dont need the old value
      alert('New Value is ' + newValue)
    }
    console.log('Old', oldValue, 'New', newValue)
  })

  onMounted(() => {
    console.log(title)
  })
</script>