import express from 'express'
const app = express()
import hb from 'handbrake-js'
import fs from 'fs'

app.get('/', (req, res) => {
  hb.spawn({input: '1.avi', output: '1.mp4'})
  .on('error',err=>{
    console.log(err);
  })
  .on('progress',progress=>{
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    );
    let stream = fs.createReadStream('1.avi')
    stream.pipe(res);
  });
})

app.listen(3000, () => console.log('Server is running...'))