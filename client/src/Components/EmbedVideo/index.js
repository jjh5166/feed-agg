import React from 'react'
import styled from 'styled-components'

const EmbedVideo = ({ className, videoId }) => (
  <div className={className}>
    <iframe
      title='video'
      allow='encrypted-media'
      allowFullScreen
      src={`https://www.youtube.com/embed/${videoId}`}
    />
  </div>
)

const StyledEmbedVideo = styled(EmbedVideo)`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export default StyledEmbedVideo
