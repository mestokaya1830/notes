<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/products">Products</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
ul {
  display: flex;
  list-style: none;
}
ul > li {
  margin: 0 15px;
}
</style>
