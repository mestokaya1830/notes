<template>
  <div>
    <p>{{ parentMessage }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      parentMessage: {
        type: String,
        required: true
      }
    }
  }
</script>