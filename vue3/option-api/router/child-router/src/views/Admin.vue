<template>
  <div>
    <nav class="admin-nav">
       <router-link class="links" to="/admin">Users</router-link>
       <router-link class="links" to="/settings">Settings</router-link>
    </nav>
    <RouterView class="router"/>
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
.admin-nav{
  margin: 50px 0;
}
  .links{
    margin: 0 15px;
    font-size: 18px;
  }
</style>
