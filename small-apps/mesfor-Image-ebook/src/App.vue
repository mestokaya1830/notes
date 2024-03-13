
<template>
  <NavbarView />
  <RouterView />
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
export default{
  name:'AppView',
  components:{ NavbarView }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins,sans-serif;
}
</style>