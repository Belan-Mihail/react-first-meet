import React from "react";

class EventBinding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        // The difference is by doing  it in the constructor, it only happens once,  
// instead of on every render, which is better  for performance in large applications. 
        // this.handleClick = this.handleClick.bind(this)
    }
    
    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //     });
    //     console.log(this.state.introduction);
    // }

    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                {/* когда при событии изменяется значение элемента 
                нужно использовать один из 4 нижеуказанных способов, иначе this будет не определено */}
                {/* 1 varian - use arrow function */}
                {/* <button onClick={() => this.handleClick()}> */}

                {/* 2 varaint - use bind(this) */}
                {/* <button onClick={this.handleClick.bind(this)}> */}

                {/* 3 varian bind(this) in constructor - 13  */}
                {/* <button onClick={this.handleClick}> */}

                {/* 4 varian define handleClick as arrow function - 23  */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>

                {/* чаще всего используют 4 вариант (когда не нужно передавать параметры и аргументы) */}
                {/* и первый вариант когда нужно переждавать в функцию параметры */}
            </div>
        )
    }
}

export default EventBinding;