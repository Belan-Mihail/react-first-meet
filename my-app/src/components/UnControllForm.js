import React, { Component } from 'react'

export class UnControllForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef()
      this.selectCategory = React.createRef()
      this.textareaComments = React.createRef()
    }


    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.inputName.current.value)
      console.log(this.selectCategory.current.value)
      console.log(this.textareaComments.current.value)

      // return current DOM element (input)
      // console.log(this.inputName.current)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Please fill out the form below</h2>
          <div>
            <label htmlFor='id-name'>You name</label>
            <input 
                type='text' 
                name='name'
                defaultValue='Mike Mook' 
                ref={this.inputName}
            />
          </div>
          <div>
            <label htmlFor='id-category'>Query Category</label>
            <select 
              id='id-category' 
              name='category'
              ref={this.selectCategory}
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
              ref={this.textareaComments}
            />
          </div>
            <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default UnControllForm