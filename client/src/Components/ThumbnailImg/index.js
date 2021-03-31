import React from 'react'
import styled from 'styled-components'

const ThumbnailImg = ({ className, imgSource }) => {
  return (
    <div className={className}>
      <img src={imgSource} alt='thumbnail' />
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
    width: 100%;
    object-fit: cover;
  }
`

export default StyledThumbnailImg
