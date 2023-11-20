import React from 'react'
import Books from './Books'

function RenderingLists() {
    const bookList = [
        "to kill",
        "the greate",
        "catcher"
    ]

    const books = [
    {
        title: "to kill",
        author: "bill",
        pages: 122
    },
    {
        title: "the greate",
        author: "anton",
        pages: 234
    },
    {
        title: "catcher",
        author: "aaron",
        pages: 342
    },
]
    return (
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr></hr>
            {
                books.map(book => {
                    return <Books key={book.title} book={book} />
                })
            }
        </div>
    )
}

export default RenderingLists
