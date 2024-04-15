<template>
  <Navbar class="navbar"/>
  <RouterView class="router"/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components:{Navbar},
  setup () {
    return {

    }
  }
}
</script>