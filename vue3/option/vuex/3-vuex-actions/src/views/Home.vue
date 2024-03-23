<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <h1>{{ counter }}</h1>

    <ul v-if="users !== null">
      <li v-for="item in users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>

    <input type="button" @click="getUsers()" value="Get Users">

    <h3>Filtered-Users will come from Computed</h3>
    <ul v-if="users !== null">
      <li v-for="item in filterUsers" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'FetchLocal',
  data () {
    return {
      title:'Fetch With Local State',
      users: null
    }
  },
  computed: {
    filterUsers(){
      if(this.users !== null){
        return this.users.filter(item => item.id < 5)
      }
    }
  },
  methods: {
    async getUsers(){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      this.users = await result.json()
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