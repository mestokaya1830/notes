export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn = true
  if (!loggedIn) {
    // return abortNavigation()
    return navigateTo('/')
  }
})