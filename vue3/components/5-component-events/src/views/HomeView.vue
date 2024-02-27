<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="button" value="Open Popup Component" @click="handle=true">
    <p>Custom  click event (close) and (message) comes from popup component</p>
    <p>You can click this event and do what do you want</p>
    
    <Popup v-if="handle"
    @messageEvent="messageEvent($event)"
    @calcEvent="calcEvent($event)"
    @closeEvent="closeEvent()"
    />
    
    <p>Message state: {{ message }}</p>
    <p>Calc state: {{ calc }}</p>
    <p>Handle state: {{ handle }}</p>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue'

export default {
  name:'HomePage',
  components:{
    Popup
  },
  data(){
    return {
      title:'Home Page',
      handle:false,
      message:'',
      calc: 0,
    }
  },
  methods:{
    messageEvent(event){
      this.message = event
    },
    calcEvent(event){
      this.calc = event * 20
    },
    inputEvent(event){
      this.name = event
    },
    closeEvent(){
      this.handle = false
    }
  }
}
</script>

<style scoped>
p{
  margin: 10px 0;
}
</style>