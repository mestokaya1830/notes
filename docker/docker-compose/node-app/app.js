import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.json({message:'Hello Docker App1'})
})

app.listen(3000, () => {
  console.log('Server is running...')
})
