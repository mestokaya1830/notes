export default defineEventHandler(async(event) => {

  const data = await $fetch('https://jsonplaceholder.typicode.com/posts/' + event.context.params.id)
  
  return {
    data
  }
})