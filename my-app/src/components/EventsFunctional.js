import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log('clicked functional button')
    }
  return (
    <div>
        {/* All events in react are passed to their elements  as JSX attributes such as onClick here, and their  
values will be specified in curly braces. */}
        <button onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctional
