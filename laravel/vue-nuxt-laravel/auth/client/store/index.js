
export const state = () => ({
  loggedIn: false
})
export const mutations =  {
  setAuth(state,payload){
    this.state.loggedIn = payload
  }
}
