<template lang="">
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="login()">
      <input type="text" v-model="form.name" placeholder="Name">
      <input type="password" v-model="form.password" placeholder="Paassword">
      <input type="submit" value="Login">
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form:{
        name:'',
        password:''
      }
    }
  },
  mounted(){
    if(this.$store.state.form.name && this.$store.state.form.password){
      this.$router.push('/admin')
    }
  },
  methods:{
    login() {
      this.$store.commit('login', this.form)
      this.$router.push('/admin')
    }
  }
}
</script>
<style>
  form{
    display: flex;
    flex-direction: column;
  }
  form input{
    margin: 5px 0;
  }
</style>