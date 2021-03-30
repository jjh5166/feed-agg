import React from 'react'
import styled from 'styled-components'

const SourceIcon = ({ source, className }) => {
  return (
    <div className={className}>
      <div className='img-container'>
        <img
          className='source-logo'
          src={`${source === 'twitter' ? '/twitterLogo.png' : '/logo192.png'}`}
          alt='social feed'
        />
      </div>
    </div>
  )
}

const StyledSourceIcon = styled(SourceIcon)`
  flex: 1;
  div.img-container {
    border-radius: 30px;
    height: 20px;
    width: 20px;
    float: right;
  }
  img.source-logo {
    height: 100%;
  }
`
export default StyledSourceIcon
