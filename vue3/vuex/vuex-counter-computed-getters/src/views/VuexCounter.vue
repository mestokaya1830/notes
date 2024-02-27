<template>
  <div>
    <h2>{{ title }}</h2>
    <h1>{{  $store.getters.checkCounter }}</h1>
    <div class="wrapper">
      <input type="button" :disabled="$store.state.inc" @click="$store.commit('Increase')" value="+">
      <input type="button" :disabled="$store.state.dec" @click="$store.commit('Decrease')" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'VuexCounter',
  data () {
    return {
      title:'Counter With Vuex And Getters',
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
