import React from "react"

// 2 rules
// So far we have talked about two crucial  rules for updating the state of a component.
// First, never update the state directly.  Always use the setState method. Second,  
// whenever you have code that must be  executed after the state update is complete,  
// put it in a callback function passed as the  second parameter to the setState method. 

// alternative
// import React { Component } from "react"

// class StatefullGreeting extends Component  


// render() required
// props not passed as an argument (because this is already a class and not a function)
// you need to use the keyword this for props
class StatefullGreetingPreState extends React.Component {

    // I'm going to add a constructor, which is a special method that is always 
    //  called when the class is first instantiated. Add props so that 
    // it becomes available in the constructor
    constructor(props) {
        
        // call React.Component class with the props 
        super(props)
        
        // To define the state in the  constructor, we can simply define this.state,  
        // and set it equal to an empty object. That  means as soon as this class is instantiated,  
        // it will automatically have a property called state  which we can access and manipulate as required.  
        // this.state = {};

        this.state = {
            // These values are called the initial state,  and they will represent the initial values of  
            // anything the component might change either on its  own or due to user interaction.
            introduction: 'Hello',
            buttonText: 'Exit',
            count: 0, 
        }
    }

    // deifine handleClick for onClick method
    // The handleClick() method can be named whatever you want, but it's a  good practice to stick to naming your methods and  
    // variables for what they actually are. Here it's  a click handler, so I'll call it handleClick.
    // here we can not use key word FUNCTION to define function 
    handleClick() {
        
        // kann man nicht machen. Only need setUp method use
        // this.state.introduction = "Goodbay"

        // update correctly
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbay" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        }, () => {
        console.log('new state', this.state.introduction)
        console.log('new state', this.state.buttonText)
        })
        // If you place it after the setState call  
// like we did in the previous component, the code  may execute before the state update is finished.
        console.log(this.state.introduction)
        console.log(this.state.buttonText)

    }

//     When dealing with state updates that depend  on the previous state of the component,  
// there is a third form of the  setState method you must always use.
// This third form takes a function  as the first parameter to setState.  
// The function can take two parameters,  previous state, and previous props,  
// and returns the object that will be used to  create the new state. In the same component we  
// used in the last video, let's update our increment  function with a new call to this.setState, and as  
// the first parameter pass in an arrow function  that takes previous state and previous props. 
    implementCount() {
        this.setState((prevState, prevProps) => {
            console.log('PrevState:', prevState)
            console.log('PrevProps:', prevProps)
            return {
                count: prevState.count + 1
            }

        })
    }

    render() {
        // lesson before
        // return <h1>Hello {this.props.name} {this.props.greeting} </h1>

        // if more than one line of code is used ()
        // returns one element so everything needs to be placed in one div
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                

                {/* add onClick function/ Must be in camelCase */}
                {/* Since I want to use Javascript code, the value of  this will need to be in curly braces, and inside  
the curly braces, will be an arrow function  that calls a method called this.handleClick().  
The reason we’re using an arrow function rather  than just calling this.handleClick() directly  
will be explained in more detail later  on so don't worry about that for now.   */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.implementCount()}>Implement</button>
                <h2>{this.state.count}</h2>
            </div>
        )
        
    }
}

export default StatefullGreetingPreState