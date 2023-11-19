import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {

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
                {/* в компонентах для условного рендеринга нужно создать стейт */}
                <h1>{this.state.isLoaded ? 'Data loaded' : 'Loading..'}</h1>

                {/* если нужно возращать многостроковые условия */}
                {/* { this.state.isLoggedIn ? () : () } */}
                {/* // первая (true) вторая (false)  */}
                {this.state.isLoggedIn ? (
          <div>
            <p>Welcome to the site! Please complete the steps below:</p>
            <ol>
              <li>Confirm your email</li>
              <li>Complete your profile</li>
              <li>Subscribe to the newsletter</li>
            </ol>
          </div>
        ) : (
          <p>Please sign in</p>
        )}
      </div>
    );
  }
}

export default ConditionalRenderingClass
