import express, { Express, Request, Response , NextFunction, ErrorRequestHandler} from 'express'
import 'dotenv/config'
import helmet from 'helmet'
import path from 'path'
const app: Express = express()


app.use(express.json())
app.use(express.static('dist'))
app.use(helmet())

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve('dist/index.html'))
})

app.get('/users', (req: Request, res: Response) => {
  res.status(200).json({result: 'Hello'})
})



app.use((req, res) => {
  res.status(404).send('Page Not Found')
})

app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): void => {
  console.log(error)
  next()
})

app.listen(3000, () => console.log('Server is running...'))