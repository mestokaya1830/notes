export default defineEventHandler(async (event) => {
  const result = await $fetch('https://jsonplaceholder.typicode.com/users/'+ event.context.params.id)
  return {
    result
  }
})