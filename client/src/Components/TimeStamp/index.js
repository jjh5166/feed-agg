import React from 'react'
import styled from 'styled-components'
import TimeAgo from 'timeago-react'

const TimeStamp = ({ time, className }) => {
  return (
    <div className={className}>
      <span>
        <TimeAgo datetime={new Date(time)} />
      </span>
    </div>
  )
}

const StyledTimeStamp = styled(TimeStamp)`
  flex: 2;
`
export default StyledTimeStamp
