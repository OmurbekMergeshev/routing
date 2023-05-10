import React, { useState } from 'react'

const MyLibrary = () => {
  const [myBooks, setMyBooks] = useState([])


  const handleAddBook = (book) => {
    setMyBooks(prevBooks => [...prevBooks, book])
  };



  return (
    <div className='my-library-container'>
      <h1>Моя библиотека</h1>
      <button onClick={handleAddBook}>Добавить книгу</button>
      {myBooks.map((book) => (
        <li key={book.id}>
          <img src={book.thumbnailUrl} alt={book.title} />
          <h3>{book.title}</h3>
        </li>
      ))}
    </div>
  )
}

export default MyLibrary