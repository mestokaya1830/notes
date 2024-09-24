const router = createRouter()

router.get('/test', defineEventHandler(event => {
  console.log(event.context.authorization)
  return 'test router get';
}))

router.post('/test', defineEventHandler(event => {
  return 'event.Body';
}))

router.put('/test/:id', defineEventHandler(event => {
  return event.context.params;
}))

router.delete('/test/:id', defineEventHandler(event => {
  return event.context.params;
}))

export default useBase('/api/router', router.handler)