import express from 'express'
const app = express()
import cors from 'cors'
import 'dotenv/config'


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  const users = [
    {
      id:1,
      name:'Mesto',
      country:'Deutschland'
    },
    {
      id:2,
      name:'Muller',
      country:'Sweiz'
    },
    {
      id:3,
      name:'Hans',
      country:'Deutschland'
    }
  ]
  res.status(200).json({users})
})

app.listen(process.env.PORT, () => console.log('Server is running...'))