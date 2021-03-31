if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')

const twitter = require('./feeds/twitter')
const youtube = require('./feeds/youtube')

const PORT = process.env.PORT || 3001

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

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

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
