import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book
    return (
        <Link to={`books/${bookId}`}>
        <div>
            <div class="card bg-base-100 border-2 border-gray-100">
  <figure className = "  mt-6  w-[340px] h-[326px] mx-auto bg-[#F3F3F3] rounded-md">
    <img className ='w-[130px] h-[180px] object-cover' src={image}
      alt=""
      class="rounded-xl" />
  </figure>
  <div class="card-body ">
    <div className='flex gap-4 justify-start'>
    {
        tags.map((tag,index) => <button key={index} className='btn btn-xs'>{tag}</button>)
    }
    </div>
    <h2 class="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <hr />
    <div className='flex justify-between'>
        <p>{category} </p>
        <p className='text-right'>{rating}</p>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default Book;