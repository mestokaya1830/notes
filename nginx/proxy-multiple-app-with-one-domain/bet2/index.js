const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url == '/bet2' && req.method == 'GET') {
    fs.readFile('index.html', (req, data) => {
      res.end(data)
    })
  }
  if (req.url == '/bet2/home') {
    fs.readFile('home.html', (req, data) => {
      res.end(data)
    })
  }
})
server.listen(4000, () => {
  console.log('Server is running...' + 4000)
})
