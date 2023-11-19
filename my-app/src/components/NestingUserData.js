import React from 'react'

function NestingUserData(props) {
  return (
    <div>
        <h1>{props.isLoaded ? 'Data loaded!' : 'Loading ...'}</h1>
    </div>
  )
}

export default NestingUserData