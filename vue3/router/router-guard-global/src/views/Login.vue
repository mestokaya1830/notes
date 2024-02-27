<template>
  <div>
    <h2>{{ title }}</h2>
    <form @submit.prevent>
      <input type="text" v-model="user.name" placeholder="Username">
      <input type="password" v-model="user.password" placeholder="Password">
      <input type="submit" @click="login()" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    return {
      title:'Login Page',
      user:{
        name:'',
        password:''
      }
    }
  },
  methods: {
    login(){
      
    }
  }
};
</script>