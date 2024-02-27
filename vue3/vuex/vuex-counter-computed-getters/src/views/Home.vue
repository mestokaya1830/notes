<template>
  <div>
    <h2>{{ title }}</h2>
    <h1>{{ checkCounter }}</h1>
    <div class="wrapper">
      <input type="button" :disabled="inc" @click="Increase()" value="+">
      <input type="button" :disabled="dec" @click="Decrease()" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Counter With Local State And Computed',
      counter: 0,
      inc:false,
      dec: true
    }
  },
  methods:{
    Increase(){
      this.counter++
    },
    Decrease(){
      this.counter--
    }
  },
  computed:{
    checkCounter(){
      if(this.counter > 0 && this.counter < 5){
        this.inc = false
        this.dec = false
      } else if(this.counter > 4){
        this.inc = true
      } else {
        this.dec = true
      }
      return this.counter
    }
  }
};
</script>

<style scoped>
div > input{
  margin: 0 5px;
  font-size: 20px;
  padding: 0 20px;
}
</style>