import express, {Express, Request, Response, NextFunction} from 'express'
const app: Express = express()
import 'dotenv/config'


app.use(express.json())
app.use(express.static('dist'))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})

app.listen(process.env.PORT, () => console.log('Server is running...'))