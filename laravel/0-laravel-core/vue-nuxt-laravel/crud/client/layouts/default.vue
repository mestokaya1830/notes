<template>
  <div>
    <Navbar />
    <nuxt id="master-page"/>
  </div>
</template>

<script>
export default {
  name: "Default"
};
</script>

<style>
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
