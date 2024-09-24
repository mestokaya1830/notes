export default defineEventHandler((event) => {
 console.log('Middleware') //this added auto all router to test call any router
 console.log(event.context.authorization)

 const auth = event.context.authorization
 if(auth == undefined || auth == ""){
  return createError({statusCode: 401, statusMessage:'You have nor permission!'}) //go to router/test route in nuxt.rest check authorization
 } else {
  event.context.authorization = true
 }
})