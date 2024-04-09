<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Here comes from State</p>
    <h1>{{  $store.state.counter }}</h1>

    <p>Here comes from Doubble Getters</p>
    <h1>{{ $store.getters.doubble }}</h1>
    
    
    <p>Here comes from Multiple Getters</p>
    <h1>{{ $store.getters.multiple }}</h1>

    <p>Buttons triggered Direct With Commit</p>
    <div class="wrapper">
      <input type="button" @click="$store.commit('Increase')" value="+">
      <input type="button" @click="$store.commit('Decrease')" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'VuexMutatios',
  data () {
    return {
      title:'Counter With Vuex Mutations',
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
