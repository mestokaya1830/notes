<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Here comes from State</p>
    <h1>{{ $store.state.counter }}</h1>

    <p>Doubble With Getters</p>
    <h1>{{ $store.getters.doubble }}</h1>

    <p>Multiple With Getters</p>
    <h1>{{ $store.getters.multiple }}</h1>

    <div class="wrapper">
      <input type="button" @click="Increase()" value="+">
      <input type="button" @click="Decrease()" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'VuexGetters',
  data () {
    return {
      title:'Counter With Vuex And Getters',
    }
  },
  methods:{
    Increase(){
      this.$store.state.counter++
    },

    Decrease(){
      this.$store.state.counter--
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
