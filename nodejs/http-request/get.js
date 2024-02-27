import cors from 'cors'
import https from 'https' //this built-in function
import fetch from 'fetch'
import request from 'sync-request'
import axios from 'axios'

//sync request with sync-request
(() => {
  try {
    const res =  request('get','https://jsonplaceholder.typicode.com/users',{json: {results: 'results'}})
    const final = JSON.parse(res.getBody('utf8'))
    console.log(final)
    // const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    // console.log('Status Code:', res.statusCode);
    // console.log('Date in Response header:', headerDate);
  } catch (error) {
    console.error(error)
  }
})()

//request with built-in function https
// (() => {
//   https.get('https://jsonplaceholder.typicode.com/users', res => {
//     let data = [];
//     // const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//     // console.log('Status Code:', res.statusCode);
//     // console.log('Date in Response header:', headerDate);
  
//     res.on('data', chunk => {
//       data.push(chunk);
//     });
//     res.on('end', () => {
//       const users = JSON.parse(Buffer.concat(data).toString());
//       console.log(users)
//     });
//   }).on('error', err => {
//     console.log('Error: ', err.message);
//   });
// })()

//async request with built-in function fetch
// (async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await res.json();
//     console.log(users)
//     // const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
//     // console.log('Status Code:', res.status);
//     // console.log('Date in Response header:', headerDate);
//   } catch (err) {
//     console.log(err.message); //can be console.error
//   }
// })()

//async request with axios
// (async () => {
//   await axios.get('https://jsonplaceholder.typicode.com/users').then(res => {//axios promise
//     // const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//     // console.log('Status Code:', res.status);
//     // console.log('Date in Response header:', headerDate);
//     console.log(res.data)
//   }).catch(err => {
//     console.log('Error: ', err.message);
//   });
// })()