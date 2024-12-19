

import puppeteer from 'puppeteer'
import fs from 'fs'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  let counter = 0
  page.on('response', async (response) => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url())
    if (matches && (matches.length === 2)) {
      const extension = matches[1]
      const buffer = await response.buffer()
      fs.writeFileSync(`media/images/image-${counter}.${extension}`, buffer, 'base64')
      counter += 1
    }
  })

  await page.goto('http://books.toscrape.com/')

  await browser.close()
})()