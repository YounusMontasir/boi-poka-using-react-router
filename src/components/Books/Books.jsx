import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch("booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data)
        )
    },[])
    return (
        <div>
            <h3>Books: {books.length}</h3>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            {
                books.map((book)=> <Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;