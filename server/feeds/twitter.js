const axios = require('axios')

const url = `https://api.twitter.com/2/users/${process.env.twitterId}/tweets`

const getTweets = async () => {
  const tweets = await axios.get(
    url,
    { params: { 'tweet.fields': 'created_at' } ,
     headers: { Authorization: `Bearer ${process.env.twitterBearerToken}` } }
  )
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return tweets
}

exports.getTweets = getTweets
