import React from "react";

// declaration f
// function FunctionalGreeting1 () {
//   return <h1>Hello from React!</h1>
// }

// arrow f
let FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello {props.name}! I see you are {props.age}. {props.greeting}</h1>
    // return is used in arrow functions when the function consists of several lines of code
}


export default FunctionalGreetingWithProps