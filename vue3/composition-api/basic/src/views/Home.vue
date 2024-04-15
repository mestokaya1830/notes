<template>
  <div>
   <h1>{{ title }}</h1><br/>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  //mounted and created hook
  setup() {
    const title = 'Home'

    return {
      title,
     
    }
  }
}
</script>