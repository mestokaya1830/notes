<template>
  <div>
    <h2>{{ title }}</h2>
    <nav v-for="item in users" :key="item.index">
      <router-link class="links" :to="`/user/${item.index}`">
      <!-- <router-link class="links" :to="{name:'UserDetails, params:{id: item.index}'}"> -->
        <span>{{ item.index }}</span>
        <span>{{ item.name }}</span>
      </router-link>
    </nav>
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
nav{
  display: flex;
  flex-direction: column;
}
.links{
  min-width: 200px;
  text-decoration: none;
  margin: 5px 0;
}
.links span{
  margin: 10px;
}
</style>
