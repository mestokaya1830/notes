<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Here comes from State</p>
    <h1>{{  $store.state.counter.counter }}</h1>

    <p>Doubble With mapGetters</p>
    <h1>{{ doubble }}</h1>

    <p>Multiple With mapGetters</p>
    <h1>{{ multiple }}</h1>

    <div class="wrapper">
      <input type="button" @click="Increase" value="+">
      <input type="button" @click="Decrease" value="-">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  name:'VuexMapGetters',
  data () {
    return {
      title:'Counter With Vuex And mapGetters',
    }
  },
  computed:{
    ...mapGetters([
      'doubble',
      'multiple'
    ])
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
