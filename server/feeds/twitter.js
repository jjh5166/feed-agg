const axios = require('axios')

const url = `https://api.twitter.com/2/users/${process.env.twitterId}/tweets`

const getTweets = async () => {
  const tweets = await axios
    .get(url, {
      params: { 'tweet.fields': 'created_at', 'expansions': 'author_id', 'user.fields': 'username', 'max_results': 30 },
      headers: { Authorization: `Bearer ${process.env.twitterBearerToken}` },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return tweets.data.map(tweet => {
    return {
      id: tweet.id,
      title: `@${tweets.includes.users[0].username}`, //set title to twitter handle
      body: tweet.text,
      timeCreated: tweet.created_at,
      thumbnail: null, //need to retrieve media object from twitter api
      source: 'twitter', // source determines which logo to show
    }
  })
}

module.exports = {
  getTweets: getTweets,
}
