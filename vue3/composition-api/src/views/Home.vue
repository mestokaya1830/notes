<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
 const title = 'Home'

 onMounted(() => {
  console.log(title)
})
</script>


<!-- <script>
//with export default
import {ref, onMounted} from 'vue'
export default {
  setup(){
    const title = ref('Home')

    onMounted(() => {
      console.log(title)
    })

    return {
      title
    }
  }
}
</script> -->