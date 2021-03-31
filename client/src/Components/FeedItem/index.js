import React from 'react'
import styled from 'styled-components'

import TimeStamp from '../TimeStamp'
import SourceIcon from '../SourceIcon'
import EmbedVideo from '../EmbedVideo'
import ThumbnailImg from '../ThumbnailImg'

const FeedItem = ({ data, className }) => {
  const { body, source, title, timeCreated, thumbnail, id } = data
  const linkAddress =
    source === 'twitter' ? `https://twitter.com/Framestore/status/${id}` : '#'
  return (
    <div className={className}>
      <div className='left-side'>
        {source === 'youtube' ? (
          <EmbedVideo videoId={id} />
        ) : (
          <ThumbnailImg imgSource={thumbnail} />
        )}
      </div>
      <div className='right-side'>
        <div className='top-row'>
          <div className='post-title'>{title}</div>
          <TimeStamp time={timeCreated} />
          <SourceIcon source={source} />
        </div>
        <div className='bottom-row'>
          <a
            href={linkAddress}
            target='_blank'
            rel='noreferrer'
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
            }}
          >
            <div>{body}</div>
          </a>
        </div>
      </div>
    </div>
  )
}

const StyledFeedItem = styled(FeedItem)`
  height: 140px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: 25% 75%;
  overflow: hidden;
  div.left-side {
  }
  div.right-side {
    display: flex;
    flex-direction: column;
    margin-left: 17px;
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
