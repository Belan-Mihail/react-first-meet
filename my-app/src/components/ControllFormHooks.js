import React, { useState } from "react";

function ControllFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, category, comments)
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Please fill out the form below</h2>
            <div>
              <label htmlFor='id-name'>You name</label>
              <input 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  type='text' 
                  name='name' 
              />
            </div>
            <div>
              <label htmlFor='id-category'>Query Category</label>
              <select 
                id='id-category' 
                name='category'
                category={category} 
                onChange={(e) => setCategory(e.target.value)}
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
                comment={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
              <input type='submit' value='submit' />
          </form>
        </div>
      )
}

export default ControllFormHooks