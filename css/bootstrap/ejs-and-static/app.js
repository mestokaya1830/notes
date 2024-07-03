import express from 'express'
const app = express()
import path from 'path'

app.use(express.json())
app.use(express.static('dist'))
app.use(express.static(path.resolve("node_modules/bootstrap/dist/")));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'))
})


app.listen(3000, () => console.log('Server is running...'))