import React from 'react'
import styled from 'styled-components'

import TimeStamp from '../TimeStamp'
import SourceIcon from '../SourceIcon'

const FeedItem = ({ data, className }) => {
  const { body, source, title, timeCreated } = data
  return (
    <div className={className}>
      <div className='left-side'></div>
      <div className='right-side'>
        <div className='top-row'>
          <div className='post-title'>{title}</div>
          <TimeStamp time={timeCreated} />
          <SourceIcon source={source} />
        </div>
        <div className='bottom-row'>
          <div>{body}</div>
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
    display: grid;
    grid-template-columns: 70% 20% 10%;
    margin-right: 10px;
  }
  div.bottom-row {
    font-size: 0.75em;
    overflow-y: scroll;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.post-title {
    flex: 3;
    font-size: 1em;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
export default StyledFeedItem
