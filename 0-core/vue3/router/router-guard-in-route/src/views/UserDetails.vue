<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ userDetails }}</h3>
    <h3 @click="goBack()" style="cursor: pointer;">Go Back</h3>
  </div>
</template>

<script>
import Persons from '../assets/persons.json'

export default {
  name: "User Details",
  data() {
    return {
      title: 'User Details',
      userDetails: null
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails(){
      this.userDetails =  Persons.filter(item => item.index == this.$route.params.id)
    },
    goBack() {
      // return this.$router.push('/users')
      // return this.$router.go(-1)
      // return this.$router.back()
      return window.history.back()
    }
  }
};
</script>
<style scoped></style>
