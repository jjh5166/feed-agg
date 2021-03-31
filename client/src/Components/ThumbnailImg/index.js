import React from 'react'
import styled from 'styled-components'

const ThumbnailImg = ({ className, imgSource }) => {
  return (
    <div className={className}>
      {imgSource ? (
        <img src={imgSource} alt='thumbnail' />
      ) : (
        <div className='twitter-placeholder' alt='placeholder' />
      )}
    </div>
  )
}

const StyledThumbnailImg = styled(ThumbnailImg)`
  height: 139px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
  div.twitter-placeholder {
    height: 100%;
    width: 100%;
    background-image: url('./twitterLogo.png');
    background-blend-mode: multiply;
    background-size: contain;
    background-color: rgb(140 135 137 / 40%);
    background-repeat: no-repeat;
  }
`

export default StyledThumbnailImg
