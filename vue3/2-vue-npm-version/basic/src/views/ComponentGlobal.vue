<template>
  <div>
    <h1>Components</h1>
    <Alert @click="showMessage()" class="components" />
  </div>
</template>

<script>
//lazy loading
// import { defineAsyncComponent } from 'vue'; 
// const Alert = defineAsyncComponent(
//   () => import('../components/Alert.vue')
// )

export default {
  data () {
    return {
      
    }
  },
  methods:{
    showMessage(){
      alert('This is Global Component')
    }
  }
}
</script>

//with composition api
<!-- <script>
import { ref } from 'vue'

export default {
  setup () {
    const showMessage = () => {
      alert('This is Global Component')
    }
    return {
      showMessage
    }
  }
}
</script> -->