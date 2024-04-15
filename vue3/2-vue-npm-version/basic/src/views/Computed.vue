<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="list-con">
      <template v-for="(item, index) in filterUsers" :key="item.id">
        <div class="list">
          <span class="list-items">{{ item.id }}</span>
          <span class="list-items">{{ item.name }}</span>
          <span class="list-items">{{ item.salary }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title:'Computed',
      users: [
        {id: 1, name: 'Mesto', salary: 3000},
        {id: 2, name: 'Helin', salary: 5000},
        {id: 3, name: 'Ilos', salary: 5000},
        {id: 4, name: 'Filiz', salary: 3000},
        {id: 5, name: 'Bidik', salary: 3000}
      ]
    }
  },
  computed:{
    filterUsers(){
      return this.users.filter(item => item.salary == 3000)
    }
  }
}
</script>

//with composition api
<!-- <script>
import { ref, reactive, computed } from 'vue'

export default {
  setup () {
    const title = ref('Computed')
    const users = reactive([
        {id: 1, name: 'Mesto', salary: 3000},
        {id: 2, name: 'Helin', salary: 5000},
        {id: 3, name: 'Ilos', salary: 5000},
        {id: 4, name: 'Filiz', salary: 3000},
        {id: 5, name: 'Bidik', salary: 3000}
      ]
    )
    const filterUsers = computed(() => {
      return users.filter(item => item.salary == 3000)
    })
    return {
      title,
      filterUsers
    }
  }
}
</script> -->