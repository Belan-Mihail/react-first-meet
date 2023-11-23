import React, { Component } from 'react'

export class ControllForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         category: 'website',
         comment: '',
      }
    }

    handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({
        name: event.target.value
      })
    }

    handleCategoryChange = (event) => {
      console.log(event.target.value)
      this.setState({
        category: event.target.value
      })
    }

    handleCommentChange = (event) => {
      console.log(event.target.value)
      this.setState({
        comment: event.target.value
      })
    }

    // handleChange = (event) => {
    //   const {name, value} = event.target
    //   this.setState({
    //     [name]: value
    //   })
    // }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Please fill out the form below</h2>
          <div>
            <label htmlFor='id-name'>You name</label>
            <input 
                value={this.state.name} 
                // alt
              // onChange={this.handleChange}
                onChange={this.handleNameChange}
                type='text' 
                name='name' 
            />
          </div>
          <div>
            <label htmlFor='id-category'>Query Category</label>
            <select 
              id='id-category' 
              name='category'
              category={this.state.category} 
              onChange={this.handleCategoryChange}
            >
                <option value='webiste'>Website Issue</option>
                <option value='order'>Order Issue</option>
                <option value='general'>General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor='id-comments'>Comments</label>
            <textarea 
              id='id-comments' 
              name='comments'
              comment={this.state.comment}
              onChange={this.handleCommentChange}
              // alt
              // onChange={this.handleChange}
            />
          </div>
            <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default ControllForm