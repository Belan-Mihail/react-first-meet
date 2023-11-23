import React, { Component } from 'react'
import names from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: names
      }
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>found: {this.state.names.length}</p>
        <form>
            <input placeholder='Search Name'></input>
            <div style={{margin: 'auto'}}>
            {
                names.map(name => {
                    return <p key={name}>{name}</p>
                })
            }
            </div>
        </form>
            
      </div>
    )
  }
}

export default SearchBar