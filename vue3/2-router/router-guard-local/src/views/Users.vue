<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="item in users" :key="item.index">
          <span>{{ item.index }}</span>
          <span>{{ item.name }}</span>
          <router-link class="links" :to="`/user/${item.index}`">Details</router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Persons from '../assets/persons.json'

export default {
  name: "Users",
  data() {
    return {
      title: "Users",
      users:null
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers(){
      this.users = Persons.filter(item => item.index < 30)
    }
  }
};
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
  list-style: none;
}
ul li span{
  margin: 10px;
}
</style>
