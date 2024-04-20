<template>
  <main class="wrapper">
    <input type="button" value="Open Popup" @click="openPopup()" class="input-btn"/>
    <Popup v-if="state" :message="message" @click="closePopup()" />
  </main>
</template>

<script>
import Popup from '../components/Popup.vue'
export default {
  components:{Popup},
  data () {
    return {
      title: 'Component',
      state: false,
      message:'Hello I am from Parent'
    }
  },
  methods:{
    openPopup() {
      this.state = true
    },
    closePopup() {
      this.state = false
    }
  }
}
</script>