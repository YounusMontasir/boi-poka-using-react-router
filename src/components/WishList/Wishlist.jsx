import React from 'react';

const Wishlist = ({singleWishList}) => {
    return (
        <div className='border-2 border-yellow-700 p-6 mb-6'>
            <p>{singleWishList.author}</p>
        </div>
    );
};

export default Wishlist;