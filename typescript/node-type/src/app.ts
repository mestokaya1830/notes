import express, { Express, Request, Response} from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
const app: Express = express()


app.use(express.json())
app.use(express.static('dist'))

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message:' Helo'})
})


app.listen(process.env.PORT, () => console.log('Server is running...'))