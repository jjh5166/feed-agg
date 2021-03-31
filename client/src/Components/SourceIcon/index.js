import React from 'react'
import styled from 'styled-components'

function showLogo(source){
  switch (source) {
    case 'twitter':
      return '/twitterLogo.png'
    case 'youtube':
      return 'youtubeLogo.png'
    default:
      return '/logo192.png'
  }
}

const SourceIcon = ({ source, className }) => {
  return (
    <div className={className}>
      <div className='img-container'>
        <img className='source-logo' src={showLogo(source)} alt='social feed' />
      </div>
    </div>
  )
}

const StyledSourceIcon = styled(SourceIcon)`
  flex: 1;
  div.img-container {
    border-radius: 30px;
    height: 20px;
    float: right;
  }
  img.source-logo {
    height: 100%;
  }
`
export default StyledSourceIcon
