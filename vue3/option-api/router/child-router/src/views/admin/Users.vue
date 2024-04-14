<template>
  <div>
    <template v-for="item in users" :key="item.id">
      <router-link :to="`/users/${item.id}`" class="user-list">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.name }}</span>
      </router-link>
      <!-- <router-link :to="{name: 'UserDetails', params:{id: item.id}}">{{ item.name }}</router-link> -->
    </template>
  </div>
</template>

<script>
export default {
  name:'Users',
  data () {
    return {
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
.user-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 34px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: #f1f1f1;
}
.user-list span{
  display: block;
  flex: 1;
}
.user-list:hover{
  filter: brightness(120%);
}
</style>