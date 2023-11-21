import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constructor called')
      super(props)
    
      this.state = {
         data: 'Loading'
      }
    }


    getData() {
        console.log('getData called')
        setTimeout(() => {
            console.log('data fetched')
            this.setState({
            data: 'Data Loaded!'
          })
        }, 3000)
      }

      componentDidMount() {
        console.log('component Mounted')
        this.getData();
      }


    render() {
        console.log('render called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                < LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM