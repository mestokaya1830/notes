<template>
  <div>
    <Navbar />
    <RouterView class="router"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name:'App',
  components: { Navbar }
}
</script>