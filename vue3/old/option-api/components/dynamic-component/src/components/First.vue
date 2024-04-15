<template>
  <div class="wrapper">
    <h2 style="color: red;">First Component</h2>
    <input  type="text" v-model="name" placeholder="Enter the name">
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default ({
  name: 'FirstComponent',
  data() {

    return {
      name: ''
    }
  }
});

</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
}
</style>