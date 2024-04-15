<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

//with composition api
<!-- <script>
import { ref } from 'vue'
export default {
  setup () {//like created or mounted hook
    const title = ref('Home')
    return {
      title
    }
  }
}
</script> -->