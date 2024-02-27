<template>
  <div>
    <h2>{{ title }}</h2>
    <h1>{{ counter }}</h1>

    <p>Doubble From Computed</p>
    <h1>{{ doubble }}</h1>

    <p>Multiple From Computed</p>
    <h1>{{ multiple }}</h1>

    <div class="wrapper">
      <input type="button" @click="Increase()" value="+">
      <input type="button" @click="Decrease()" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'Counter',
  data () {
    return {
      title:'Counter With Local State',
      counter: 0
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
    doubble(){
      return this.counter * 2
    },
    multiple(){
      return this.counter * 5
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
