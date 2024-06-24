<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li v-if="!$store.state.loggedIn"><nuxt-link to="/login" >Login</nuxt-link></li>
      <li v-else><a href="#" @click="logout()">Logout</a></li>
      <li v-if="!$store.state.loggedIn"><nuxt-link to="/register">Register</nuxt-link></li>
      <li v-if="$store.state.loggedIn"><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
    </ul>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data (){
    return{

    }
  },
  mounted(){
    this.$store.commit('setAuth', this.$auth.loggedIn)
  },
  methods:{
    async logout(){
      try {
        await this.$auth.logout()
        this.$store.commit('setAuth', this.$auth.loggedIn)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>