import express from 'express'
const Router = express.Router()
import axios from 'axios'
import Users from '../modules/usersSC.js'
import tryCatch from '../middleware/tryCatch.js'

let access_token = "";
Router.get('/clientid', tryCatch(async(req, res) =>{
  res.json({clientId: process.env.Github_ClientID});
}))

Router.get('/auth', tryCatch(async(req, res) => {//redirected from github
  const requestToken = req.query.code
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.Github_ClientID}&client_secret=${process.env.Github_ClientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token
    res.redirect('/githubdashboard');
  })
}))

Router.get('/githubdashboard', tryCatch(async(req, res) =>{
  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((response) => {
    res.json({ userData: response.data });
  })
}))

export default Router