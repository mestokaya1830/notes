import express, {Application, Request, Response, NextFunction, ErrorRequestHandler} from 'express'
const app: Application =  express()



app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({message: 'Hello typescript'})
})


app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.json(error)
  next(error)
})

app.listen(3000, () => console.log('Server is running...'))