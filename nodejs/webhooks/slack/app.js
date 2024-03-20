import express from "express";
const app = express()
import helmet from 'helmet'
import Slack from '@slack/bolt'

app.use(helmet())
app.use(express.json())
app.use(express.static('public'))

const slackApp = new Slack.App({
  signingSecret:'497bb5433dacdc128e93625998da6a88',
  token: 'xoxb-6857927736832-6847862489521-TZtiTCv1byLnkQRGG18t969R'
})

await slackApp.client.chat.postMessage({
  token: 'xoxp-6857927736832-6832219994965-6835419064258-d6a017a79cd939c29a133108d621eb35',
  channel:'U06QXRCEDFB',
  text: 'Hello Slack'
})
app.listen(3000, () => console.log('Server is running...'))