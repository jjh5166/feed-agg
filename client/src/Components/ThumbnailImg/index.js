import React from 'react'
import styled from 'styled-components'

const ThumbnailImg = ({ className, source }) => {
  return (
    <div className={className}>
      <img src={source} alt='thumbnail' />
    </div>
  )
}

const StyledThumbnailImg = styled(ThumbnailImg)`
  height: 128px;
  img {
    height: 100%;
  }
`

export default StyledThumbnailImg
