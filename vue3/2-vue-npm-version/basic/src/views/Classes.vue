<template>
  <div>
    <h1>Classes</h1>
    <div class="wrapper"><br>
      <h2 :class="{'active': isActive}">Active Class</h2><br>
      <input type="button" value="Change Active" class="input-btn" @click="changeActive()" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  },
  methods:{
    changeActive() {
      this.isActive =! this.isActive
    }
  }
}
</script>

//with composition api
<!-- <script>
import { ref } from 'vue'
const isActive = ref(true)
const changeActive = () => {
  isActive.value =! isActive.value
}
export default {
  setup () {
    return {
      isActive,
      changeActive
    }
  }
}
</script> -->
