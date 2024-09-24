export default defineEventHandler(async(event) => {
  const data = await $fetch('https://jsonplaceholder.typicode.com/posts')
  return {
    data
  }
})