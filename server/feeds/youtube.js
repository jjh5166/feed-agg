const axios = require('axios')

const url = 'https://www.googleapis.com/youtube/v3/'

const getUploadsId = async () => {
  const uploadsId = await axios
    .get(`${url}channels`, {
      params: {
        key: process.env.youtubeApiKey,
        id: process.env.youtubeId,
        part: 'contentDetails',
      },
    })
    .then((res) => res.data.items[0].contentDetails.relatedPlaylists.uploads)
    .catch((err) => console.log(err))
  return uploadsId
}

const getUploads = async () => {
  const uploadsId = await getUploadsId()
  const uploads = await axios
    .get(`${url}playlistItems`, {
      params: {
        key: process.env.youtubeApiKey,
        playlistId: uploadsId,
        part: 'snippet',
        maxResults: 20
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return uploads.items.map(vid => {
      return {
        id: vid.id,
        title: vid.snippet.title,
        body: vid.snippet.description,
        timeCreated: vid.snippet.publishedAt,
        thumbnail: vid.snippet.thumbnails.medium.url,
        source: 'youtube', // source determines which logo to show
      }
  })
}

module.exports = {
  getUploads: getUploads,
}
