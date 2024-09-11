<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <button @click="$router.push('/admin')">Back</button>
  </div>
</template>
