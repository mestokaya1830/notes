export default defineEventHandler(async () => {
  const result = await $fetch('https://jsonplaceholder.typicode.com/users')
  //filter
    // const users = await $fetch('https://jsonplaceholder.typicode.com/users',{
    //   pick: ['id', 'name']
    // })
  const auth = 'Mesto'
  return {
    result,
    auth
  }
})