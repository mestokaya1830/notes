<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="container">
      <nav>
         <router-link class="links" to="/account">Bets</router-link>
         <router-link class="links" to="/users">Users</router-link>
         <router-link class="links" to="/profile">Profile</router-link>
         <router-link class="links" to="/balance">Balance</router-link>
      </nav>
      <RouterView class="router"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account Page",
  data() {
    return {
      title: "Dashboard"
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.container{
  display: flex;
  width: 100%;
}
nav{
  display: flex;
  flex-direction: column;
}
.router{
  display: flex;
  justify-content: center;
  width: 100%;
}
nav ul{
  display: flex;
  flex-direction: column;
}
</style>
