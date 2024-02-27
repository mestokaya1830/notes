<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Here comes from State</p>
    <h1>{{  $store.state.counter }}</h1>

    <p>Here comes from Doubble Getters</p>
    <h1>{{ $store.getters.doubble }}</h1>
    
    
    <p>Here comes from Multiple Getters</p>
    <h1>{{ $store.getters.multiple }}</h1>


    <p>Buttons triggered Commit via mapMutations</p>
    <div class="wrapper">
      <input type="button" @click="Increase" value="+">
      <input type="button" @click="Decrease" value="-">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name:'VuexMapMutations',
  data () {
    return {
      title:'Counter With Vuex mapMutations',
    }
  },

  methods:{
    ...mapMutations([
      'Increase',
      'Decrease'
    ])
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
