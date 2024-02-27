import { createStore } from 'vuex'

export default createStore({
  state: {
   name:'Mesto'
  },
  mutations: {
    setName(state, payload){
      state.name = payload
    }
  },
   
  actions: {

  },
  getters: {
   
  },
  modules: {
    
  }
})