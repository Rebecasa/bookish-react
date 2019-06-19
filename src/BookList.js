import React from 'react'
function BookList({loading, books}) {
  if(loading) {
     return <div className="loading" />
   }
  return (
    <div className="books">
    {books.map(book => {
        return (<div className="book" key={book.name}>
          <h2 className="title">{book.name}</h2>
        </div>)
      })
    }
  </div>
  )
}
export default BookList
