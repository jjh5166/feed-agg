import React from 'react'
import styled from 'styled-components'

import TimeStamp from '../TimeStamp'
import SourceIcon from '../SourceIcon'

const FeedItem = ({ data, className }) => {
  const { text, source, username, created_at } = data
  return (
    <div className={className}>
      <div className='left-side'></div>
      <div className='right-side'>
        <div className='top-row'>
          <div className='post-title'>{`@${username}`}</div>
          <TimeStamp time={created_at} />
          <SourceIcon source={source} />
        </div>
        <div className='bottom-row'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

const StyledFeedItem = styled(FeedItem)`
  height: 130px;
  width: 100%;
  outline: solid blue 2px;
  display: inline-grid;
  grid-template-columns: 25% 75%;
  overflow: hidden;
  div.left-side {
  }
  div.right-side {
    display: flex;
    flex-direction: column;
  }
  div.top-row {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
  }
  div.bottom-row {
    p {
      margin: 6px;
    }
  }
  div.post-title {
    flex: 3;
    font-size: 1.5em;
    font-weight: 500;
  }
`
export default StyledFeedItem
