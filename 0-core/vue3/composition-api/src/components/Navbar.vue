<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/hooks" class="links">Hooks</router-link>
      <router-link to="/refs" class="links">Refs</router-link>
      <router-link to="/fetch" class="links">Fetch</router-link>
      <router-link to="/fetchasync" class="links">Fetch Async</router-link>
      <router-link to="/component" class="links">Component</router-link>
      <router-link to="/reactive" class="links">Reactive</router-link>
      <router-link to="/computed" class="links">Computed</router-link>
      <router-link to="/watch" class="links">Watch</router-link>
      <router-link to="/directive" class="links">Directive</router-link>
      <router-link to="/routeparam" class="links">Route Param</router-link>
      <router-link to="/nexttick" class="links">NextTick</router-link>
      <router-link to="/providevuex" class="links">Provide Vuex</router-link>
    </nav>
  </div>
</template>

<style scoped>
  nav{
    display: flex;
  }
  .links{
    margin: 10px;
  }
  .links{
    text-decoration: none;
  }
  .active{
    color: green;
  }
</style>
