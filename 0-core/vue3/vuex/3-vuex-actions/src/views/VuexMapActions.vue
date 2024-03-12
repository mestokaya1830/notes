<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <p>Actions used for async operation</p>
    <ul v-if="$store.state.users !== null">
      <li v-for="item in $store.state.users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>

    <p>Button Dispatched in mapActions</p>
    <input type="button" @click="getUsers" value="Get Users">
    
    <h3>Filtered-Users will come from Getters</h3>
    <ul v-if="$store.state.users !== null">
      <li v-for="item in $store.getters.filterUsers" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name:'VuexMapActions',
  data () {
    return {
      title:'Fetch Async Data With Vuex mapActions',
    }
  },
  methods:{
    ...mapActions([
      'getUsers'
    ])
  }
};
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
  list-style: none;
}
ul li{
  margin: 5px 0;
}
 ul li span{
  margin: 0 10px;
 }
input{
  margin: 5px 0;
  padding: 0 20px;
}
</style>