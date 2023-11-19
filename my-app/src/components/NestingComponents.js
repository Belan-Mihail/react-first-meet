import React, { Component } from 'react'
import NestingUserMessage from './NestingUserMessage'
import NestingUserData from './NestingUserData'

class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            isLoggedIn: true,
        }
    }
    render() {
        return (
            <div>
                <NestingUserData isLoaded={this.state.isLoaded}/>
                <NestingUserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default NestingComponents