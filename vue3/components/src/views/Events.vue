<template>
  <div>
    <h2>Events</h2>
    <events-component @childEvent="showMessage()"/>
  </div>
</template>

<script>
  import EventsComponent from '@/components/EventsComponent.vue'
  export default {
    components: { 'events-component': EventsComponent },
    data () {
      return {

      }
    },
    methods:{
      showMessage() {
        alert('Hello')
      }
    }
  }
</script>