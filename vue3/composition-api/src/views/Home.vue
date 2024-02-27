<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Counter comes from store</p>
    {{ store.state }}
  </div>
</template>

<script setup>
import {ref, onMounted, inject} from 'vue'
 const title = ref('Home')
 const store = inject('store')

 onMounted(() => {
  console.log(title)
})
</script>


<!-- <script>
//with export default
import {ref, onMounted, inject} from 'vue'
export default {
  setup(){
    const title = ref('Home')
    const store = inject('store')

    onMounted(() => {
      console.log(title)
    })

    return {
      title,
      store
    }
  }
}
</script> -->