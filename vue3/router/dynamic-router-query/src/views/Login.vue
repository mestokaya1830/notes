<template>
  <div>
    <h2>{{ title }}</h2>

    <form action="/dashboard" method="get">
      <input type="text" name="name" id="" placeholder="Name">
      <input type="text" name="password" id="" placeholder="Password">
      <input type="submit" value="Login">
    </form>
    
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      title: "Login"
    }
  },
  methods: {
  }
};
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  list-style: none;
}
form input{
  margin: 7px 0;
  min-height: 20px;
  padding: 3px;
}
</style>
