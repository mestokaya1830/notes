import { createStore } from 'vuex'

export default createStore({
  state: {
   users: null
  },
  mutations: {
    getUsers(state, param){
      state.users = param //payload comes from actions commit
    }
  },
   
  //actions used for async operation
  actions: {
    async getUsers({ commit }){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const final = await result.json()
      commit('getUsers', final)
    }
  },

  //getters used for filter and manupilation
  getters: {
    filterUsers(state){
      if(state.users !== null){
        return state.users.filter(item => item.id < 5)
      }
    }
  },
  modules: {
    
  }
})