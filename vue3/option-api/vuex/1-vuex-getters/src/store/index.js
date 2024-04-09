import { createStore } from 'vuex'

export default createStore({
  state: {
   counter: 0
  },
  mutations: {
    
  },
   
  actions: {

  },
  getters: {
    doubble(state){
      return state.counter * 2
    },
    multiple(state){
      return state.counter * 5
    }
  },
  modules: {
    
  }
})