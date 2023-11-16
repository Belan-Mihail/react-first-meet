import React from "react"


// alternative
// import React { Component } from "react"

// class StatefullGreeting extends Component  


// render() required
// props not passed as an argument (because this is already a class and not a function)
// you need to use the keyword this for props
class StatefullGreeting extends React.Component {

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
        }
    }

    // deifine handleClick for onClick method
    // The handleClick() method can be named whatever you want, but it's a  good practice to stick to naming your methods and  
    // variables for what they actually are. Here it's  a click handler, so I'll call it handleClick.
    // here we can not use key word FUNCTION to define function 
    handleClick() {
        
        // kann man nicht machen. Only need setUp method use
        // this.state.introduction = "Goodbay"

        // need to use
        this.setState({
            // Now another nice thing about using setState  is that not only will setState make sure the  
// component rerenders after the state is updated,  but it will also merge the new state with the old one,
// so the other state property, buttonText, will  still be included in the updated state and won’t  
// be modified unless you modify it in the setState  method
            // при таком синтаксисе другое значение (buttonText: 'Exit') которое мы еще не меняли
            // при помощи setState остается в старом значении.
            introduction: 'Goodbay',
            // set up new value to buttonText
            buttonText: 'Enter', 
        })
        console.log(this.state.introduction)
        console.log(this.state.buttonText)

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
            </div>
        )
        
    }
}

export default StatefullGreeting