import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
          isLoggedIn: true,
        });
        console.log(this);
      };
    
      handleSignOut = () => {
        this.setState({
          isLoggedIn: false,
        });
        console.log(this);
      };

    //   one handle for sign in and sign out
      handleS = () => {
        if (this.state.isLoggedIn) {
            this.setState({
                isLoggedIn: false,
              });
            console.log(this)
        } else {
            this.setState({
                isLoggedIn: true,
              });
            console.log(this)
        }
      }

      // alternarive single method that handles both SignIn and SignOut
  toggleIsLoggedIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    // handleSignIn={this.handleSignIn}
                    // handleSignOut={this.handleSignOut}
                    isLoggedIn={this.state.isLoggedIn} 
                    handleS={this.handleS}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent