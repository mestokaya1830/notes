const url = 'https://jsonplaceholder.typicode.com/todos'
console.log(process.env.API_KEY)

export async function GET() {
  const result = await fetch(url)
  const todos = await result.json()
  return Response.json(todos)
}

export async function POST(req) {
  const {userId, title, completed} = await req.json()
  if(!userId || !title) return Response.json({message: "Todo id or title is required"})

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API_KEY': process.env.API_KEY
    },
    body: JSON.stringify({
      userId, title, completed
    })
  })

  const newTodo = await res.json()
  return Response.json(newTodo)
}


export async function PUT(request) {
  const {id, completed} = await request.json()
  if(!id) return Response.json({message: "Todo Id is required"})

  const res = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API_KEY': process.env.API_KEY
    },
    body: JSON.stringify({
      id:id, completed: completed
    })
  })

  const updatedTodo = await res.json()
  return Response.json(updatedTodo)
}

export async function DELETE(request) {
  const {id} = await request.json()
  if(!id) return Response.json({message: "Todo id is required"})
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API_KEY': process.env.API_KEY
    }
  })
  return Response.json({message: 'Deleted'})
}