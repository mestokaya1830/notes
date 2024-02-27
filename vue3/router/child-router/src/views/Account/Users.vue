<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <nav v-for="item in users" :key="item.id">
      <router-link :to="`/users/${item.id}`">{{ item.name }}</router-link>
      <!-- <router-link :to="{name: 'UserDetails', params:{id: item.id}}">{{ item.name }}</router-link> -->
    </nav>
  </div>
</template>

<script>
export default {
  name:'Users',
  data () {
    return {
      title:'Users',
      users: [
        {id:1, name: 'Mesto'},
        {id:2, name: 'Filiz'},
        {id:3, name: 'Bidik'},
        {id:4, name: 'Helin'},
        {id:5, name: 'Ilos'},
      ]
    }
  }
};
</script>
<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>