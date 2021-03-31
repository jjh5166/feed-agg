const axios = require('axios')

const url = `https://api.twitter.com/2/users/${process.env.twitterId}/tweets`

const findThumbnail = (obj) => {
  return obj.type === 'photo'
    ? obj.url
    : obj.type === 'animated_gif'
    ? obj.preview_image_url
    : null
}

const getTweets = async () => {
  const tweets = await axios
    .get(url, {
      params: {
        'tweet.fields': 'created_at',
        expansions: 'author_id,attachments.media_keys',
        'user.fields': 'username',
        'media.fields': 'media_key,url,type,preview_image_url',
        max_results: 30,
      },
      headers: { Authorization: `Bearer ${process.env.twitterBearerToken}` },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return tweets.data.map((tweet) => {
        const tn = tweets.includes.media.find((obj) => {
          return obj.media_key === tweet.attachments?.media_keys[0]
        }) || null
    return {
      id: tweet.id,
      title: `@${tweets.includes.users[0].username}`, //set title to twitter handle
      body: tweet.text,
      timeCreated: tweet.created_at,
      thumbnail: tn ? findThumbnail(tn) : null,
      source: 'twitter', // source determines which logo to show
    }
  })
}

module.exports = {
  getTweets: getTweets,
}
