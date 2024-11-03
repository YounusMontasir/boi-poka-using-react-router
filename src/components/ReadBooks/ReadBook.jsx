import React from 'react';

const ReadBook = ({singleRead}) => {
    return (
        <div className='border-2 border-yellow-700 p-6 mb-6'>
            <p>{singleRead.author}</p>
            <p>{singleRead.rating}</p>
            <p>{singleRead.totalPages}</p>
            
        </div>
    );
};

export default ReadBook;