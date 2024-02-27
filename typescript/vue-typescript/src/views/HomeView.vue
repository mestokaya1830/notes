<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <p>{{ getParam('Mesto') }}</p>
    <p>{{ lang }}</p>
    <p>{{ getArray() }}</p>
    <p>{{ getObject() }}</p>

    <h4>Users list comes from UsersList component</h4>
    <UsersList :users='users'/>
  </div>
</template>

<script lang="ts">
import UsersList from '../components/UsersList.vue';
export default {
  components:{
    UsersList
  },
  data () {
    return {
      title: 'Home' as string,
      lang:['Html','Css', 'Javascript', 1,2,3] as (string | number)[],
      users:[
        {id:0, name: 'Mesto', age: 50},
        {id:1, name: 'Ali', age: 20},
        {id:2, name: 'Deniz', age: 30}
      ]
    }
  },
  
  methods:{
    getParam(name: string){ 
      return name
    },

    getArray (){
      let lang2: (string | number)[] = ['Html','Css', 'Javascript', 4,5,6]//but here you must type declaration
      return lang2
    },

    getObject (){
      let user:object = {
        name:'Mesto',
        age: 52
      }
      return user
    }
  }
}
</script>
