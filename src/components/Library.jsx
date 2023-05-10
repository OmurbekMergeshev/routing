import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Library = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then((data) => setBooks(data.slice(0, 10)))
  }, [])

  return (
    <div className='library-container '>
      <h1>Библиотека</h1>
      {books.map(book => (
        <div key={book.id}>
          <Link>
            <img src={book.thumbnailUrl} alt={book.title} />
            <h2>{book.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Library