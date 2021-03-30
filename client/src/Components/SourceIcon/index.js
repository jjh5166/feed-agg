import React from 'react'
import styled from 'styled-components'

const SourceIcon = ({ source, className }) => {
  return (
    <div className={className}>
      <img
        className='source-logo'
        src={`${source === 'twitter' ? '/twitterLogo.png' : '/logo192.png'}`}
        alt='social feed'
      />
    </div>
  )
}

const StyledSourceIcon = styled(SourceIcon)`
  border-radius: 30px;
  height: 20px;
  width: 20px;
  img.source-logo {
    height: 100%;
  }
`
export default StyledSourceIcon
