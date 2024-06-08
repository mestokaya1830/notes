import express, {Express, Request, Response, NextFunction} from 'express'
const app: Express = express()
import 'dotenv/config'


app.use(express.json())
app.use(express.static('dist'))

console.log('Hello Typescript')

app.listen(process.env.PORT, () => console.log('Server is running...'))