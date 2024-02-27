import fs from 'fs'

// const rs = fs.createReadStream('./movie.mp4')
const readStream = fs.createReadStream('./soccer.json', {highWaterMark: 100})

readStream.on('data', (chunk) => {
  console.log(chunk)
  console.log(chunk.length)
  // console.log(chunk.toString())
})

readStream.on('end', () => {
  const size = fs.statSync('./soccer.json').size
  console.log('Strem is finished KB', Math.floor(size / (1204)).toFixed(0))
})