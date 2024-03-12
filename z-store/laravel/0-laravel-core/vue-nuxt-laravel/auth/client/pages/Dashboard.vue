<template>
  <div>
    <h2>Dashboard</h2>
    {{ $auth.user }}
  </div>
</template>

<script>
export default {
  middleware:'auth',
  name: 'Dashboard'
}
</script>