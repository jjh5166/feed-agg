import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FeedItem from './Components/FeedItem'

const App = ({ className }) => {
  const [data, setData] = useState([])
  const updateData = (newData) => {
    setData((prevData) =>
      [...prevData, ...newData].sort(function (a, b) {
        return new Date(b.timeCreated) - new Date(a.timeCreated)
      })
    )
  }
  useEffect(() => {
    fetch('/api/twitter')
      .then((res) => res.json())
      .then((res) => {
        updateData(res.data)
      })
  }, [])
  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => res.json())
      .then((res) => {
        updateData(res.data)
      })
  }, [])

  return (
    <div className={className}>
      <div className='title'>Framstore Social Feed</div>
      <div className='feed-container'>
        <div className='feed'>
          {data &&
            !!data.length &&
            data.map((item, i) => <FeedItem key={i} data={item} />)}
        </div>
      </div>
    </div>
  )
}

const StyledApp = styled(App)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div.title {
    height: 10%;
    font-size: 3em;
  }
  div.feed-container {
    height: 90%;
    width: 75%;
    padding: 5px 0;
  }
  div.feed {
    max-height: 99%;
    overflow-y: scroll;
  }
`
export default StyledApp
