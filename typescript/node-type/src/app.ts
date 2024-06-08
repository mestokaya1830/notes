import express, {Express, Request, Response, NextFunction, ErrorRequestHandler} from 'express'
const app: Express = express()
import './models/db'
import Users from './models/usersSC'
import 'dotenv/config'


app.use(express.json())
app.use(express.static('dist'))

app.get('/users', async (req: Request, res: Response) => {
  const result = await Users.find({})
  res.status(200).json(result)
})

app.use((req: Request, res: Response) => {
  res.status(404).send('Page Not Found!')
})

app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({error})
  next()
})

app.listen(process.env.PORT, () => console.log('Server is running...'))