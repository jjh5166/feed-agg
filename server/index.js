if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')

const twitter = require('./feeds/twitter')
const youtube = require('./feeds/youtube')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/api/twitter', async (req, res) => {
  const tweets = await twitter.getTweets()
  res.json({
    data: tweets,
  })
})

app.get('/api/youtube', async (req, res) => {
  const uploads = await youtube.getUploads()
  res.json({
    data: uploads,
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
