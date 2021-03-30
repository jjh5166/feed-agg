const axios = require('axios')

const url = `https://api.twitter.com/2/users/${process.env.twitterId}/tweets`

const getTweets = async () => {
  const tweets = await axios
    .get(url, {
      params: { 'tweet.fields': 'created_at', 'expansions': 'author_id', 'user.fields': 'username' },
      headers: { Authorization: `Bearer ${process.env.twitterBearerToken}` },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err))
  tweets.data.forEach((el) => (el.source = 'twitter', el.username = tweets.includes.users[0].username))
  return tweets.data
}

exports.getTweets = getTweets
