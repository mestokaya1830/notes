import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      name:'',
      password:''
    }
  },
  mutations: {
    //if you want use this in login page
    login(state, form){
      state.form = form
      localStorage.setItem('auth', JSON.stringify(form))
      alert('LoggedIn')
    },
    //if you want use this in logout section
    logout(state){
      state.form = ''
      localStorage.removeItem('auth')
    },
    //if you want use this in admin page
    checkAuth(state){
      if(localStorage.getItem('auth')){
        state.form = JSON.parse(localStorage.getItem('auth'))
      }
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {
    
  }
})