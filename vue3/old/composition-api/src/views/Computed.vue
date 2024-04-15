<template>
  <div>
    <h1>{{ title }}</h1><br/>
    <p>{{ filterList }}</p>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
  export default {
    
    setup() {
      const title = ref('Computed')
      const list = reactive([
        {id:1, type:'Html'},
        {id:2, type:'Css'},
        {id:3, type:'Javascript'}
      ])

      const filterList = computed(() => {
        return list.filter(item => item.id == 2)
      })
      return {
        title,
        filterList
      }
    } 
  }
</script>