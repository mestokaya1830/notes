<template>
  <div>
    <h2>Props</h2>
    <props-component parentMessage = 'I am Parent-Message'/>
  </div>
</template>

<script>
  import PropsComponent from '@/components/PropsComponent.vue'
  export default {
    components: { 'props-component': PropsComponent }
  }
</script>