<template>
  <Navbar />
  <RouterView class="router" />
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {

    }
  }
}
</script>