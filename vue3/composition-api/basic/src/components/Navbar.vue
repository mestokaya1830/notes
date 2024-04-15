<template>
  <div>
    <nav>
      <RouterLink to="/" class="links" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/ref" class="links" exact-active-class="active">Ref</RouterLink>
      <RouterLink to="/reactive" class="links" exact-active-class="active">Reactive</RouterLink>
      <RouterLink to="/fetch" class="links" exact-active-class="active">Fetch</RouterLink>
      <RouterLink to="/fetchasync" class="links" exact-active-class="active">Fetch Async</RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  setup() {

  }
}
</script>