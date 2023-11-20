import React from 'react'

function Books(props) {
    const book = props.book
  return (
    <div>
        <div>
            <h5>Title: {book.title}</h5>
            <p>Author: {book.author}</p>
            <p>Number of pages: {book.pages}</p>
        </div>
    </div>
  )
}

export default Books