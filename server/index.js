if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const twitter = require('./feeds/twitter')
const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

app.get('/api/twitter', async (req, res) => {
  const tweets = await twitter.getTweets()
  res.json({
    data: tweets,
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
