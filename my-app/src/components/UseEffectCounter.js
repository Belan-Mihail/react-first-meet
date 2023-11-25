import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [time, setTime] = useState(0)
    const [count, setCount] = useState(0)
//     The useEffect hook takes, as a parameter,  a function that will be executed after  
// every render of the component. In this way, it  will take care of running whatever function you  
// give it both immediately after the component  mounts, and every time it updates. 
    useEffect (() => {
        console.log('counter effect 1')
        document.title = count
//         Luckily, it takes only a very tiny change to our  existing code to make this work. In our useEffect  
// function, all we need to do is specify a second  argument: an array containing all the properties  
// that this effect should be watching for changes.
// In the array, you can specify props,  state properties, or a mixture of both,  
// and you can specify multiple properties if  the effect depends on more than one thing. 
    }, [count])

    useEffect(() => {
        console.log('Create timer')
        const interval = setInterval(() => {
            console.log("Interval executed")
            setTime(time => time + 1)
        }, 1000)
        // cleaning
        return () => {
            console.log("clean interval")
            clearInterval(interval)
        }
//         Any time you  only want the effect to run one time,  
// you must pass the useEffect hook an  empty array as the second parameter:
    }, [])

    const [count2, setCount2] = useState(0)
    useEffect (() => {
        console.log('counter effect 2')
        document.title = count2
    }, [count2])



  return (
    <div>
        <button onClick={
            ()  => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
        <h2>Time:{time}</h2>

        {/* <button onClick={
            ()  => setCount2(count2 => count2 + 1)
        }>
            Increment Count2 ({count2})
        </button> */}
    </div>
  )
}

export default UseEffectCounter