<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-autofocus placeholder="Search...">
  </div>
</template>

<script setup>
//composition api
  import {ref, onMounted} from 'vue'

  //global
  // import {vAutofocus} from '../directives/vAutofocus.js'
  const title = ref('Directive')
  
  //local
  const vAutofocus = {
    mounted: (el) => {
      el.focus()
    }
  }

  onMounted(() => {
    console.log(title)
  })


</script>