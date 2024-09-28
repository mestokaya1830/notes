export default defineNuxtPlugin(() => {
  return {
    provide: {
      myProvide: (msg) => msg
    }
  }
})