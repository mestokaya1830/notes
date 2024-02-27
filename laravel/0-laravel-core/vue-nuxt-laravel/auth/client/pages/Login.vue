<template>
  <div>
    <h2>Login Page</h2>

    <form @submit.prevent="login()">
      <input type="text" ref = "email" placeholder="Email">
      <input type="text" ref = "password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
  </div>
</template>
<script>
export default {
  auth:'guest',
  data () {
    return {
      
    }
  },
  mounted(){
    this.$axios.$get('/sanctum/csrf-cookie')
  },
  methods:{
    async login(){
      const loginUser= {
        email:this.$refs.email.value,
        password:this.$refs.password.value
      }
      try {
        await this.$auth.loginWith('laravelSanctum', {data:loginUser})
        this.$store.commit('setAuth', this.$auth.loggedIn)
        this.$router.push('/dashboard')
      } catch (error) {
        if (error.response.status === 401) {
          console.log('Invalid User');
        }
      }
    }
  }
}
</script>