<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/" class="links" exact-active-class="active">Home</NuxtLink>
      <NuxtLink to="/about" class="links" exact-active-class="active">About</NuxtLink>
      <NuxtLink to="/contact" class="links" exact-active-class="active">Contact</NuxtLink>
      <NuxtLink to="/users" class="links" exact-active-class="active">Users</NuxtLink>
    </nav>
  </div>
</template>

<style>
  .navbar{
    display: flex;
    align-items: center;
    padding: 0 2px;
    height: 64px;
    background-color: #000;
  }
  .links{
    margin: 0 15px;
    font-size: 22px;
    color: #fff;
    text-decoration: none;
  }
</style>