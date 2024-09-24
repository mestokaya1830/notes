<template>
  <div class="navbar">
   <NuxtLink to="/" class="links" exact-active-class="active">Home</NuxtLink>
   <NuxtLink to="/admin" class="links" exact-active-class="active">Admin</NuxtLink>
   <NuxtLink to="/admin/users" class="links" exact-active-class="active">Users</NuxtLink>
   <NuxtLink to="/admin/serversidefetch" class="links" exact-active-class="active">Server Side Fetch</NuxtLink>
   <NuxtLink to="/admin/middleware" class="links" exact-active-class="active">Middleware</NuxtLink>
  </div>
</template>