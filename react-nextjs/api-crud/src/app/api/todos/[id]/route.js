const url = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(req) {
  const id = await req.url.slice(req.url.lastIndexOf('/') + 1)
  const result = await fetch(`${url}/${id}`)
  const todos = await result.json()
  return Response.json(todos)
}
