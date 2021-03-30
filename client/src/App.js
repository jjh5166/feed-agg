import React from 'react'
import styled from 'styled-components'

import FeedItem from './Components/FeedItem'

const App = ({className}) => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch('/api/twitter')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })
  }, [])
  return (
    <div className={className}>
      <div className='feed'>
        {data && !!data.length && data.map((item, i) => <FeedItem key ={i} data={item}/>)}
      </div>
    </div>
  )
}


const StyledApp = styled(App)`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 25px 0;
  div.feed {
    width: 75%;
  }
`
export default StyledApp
