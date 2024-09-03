export default defineEventHandler(async (event) => {
  const result  = await $fetch('https://jsonplaceholder.org/posts/' + event.context.params.id)

  return {
    result 
  }
})