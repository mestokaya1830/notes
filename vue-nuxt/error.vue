<script setup>
  const error = useError();
  // const goHome = async() => {
  //   await navigateTo('/')
  // }

  //or with error
  const goHome = () => clearError({redirect: '/'})
</script>

<template>
  <div>
    <h2>Page Not Found</h2>
    <p>{{ error }}</p>

    <button @click="goHome()">Back</button>
  </div>
</template>