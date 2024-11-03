// ListedBooks.js
import React, { useContext, useState } from "react";
import BookContext from "../BookContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from "../ReadBooks/ReadBook";
import Wishlist from "../WishList/Wishlist";

const ListedBooks = () => {
  const { wishlist, read } = useContext(BookContext);
  console.log(read);
  
  
  const [sort, setSort] = useState('')
  const [sorterRead, setSortedRead] = useState(read)
  const [sortedWishList, setSortedWishList] = useState(wishlist)
  
  const handleSort = (sortType) =>{
    setSort(sortType)
    if (sortType === "ratings") {
      setSortedRead([...read].sort((a, b) => b.rating - a.rating));
      setSortedWishList([...wishlist].sort((a, b) => b.rating - a.rating));
      

    } else if (sortType === "pages") {
      setSortedRead([...read].sort((a, b) => b.totalPages - a.totalPages));
      setSortedWishList([...wishlist].sort((a, b) => b.totalPages - a.totalPages));
    }
    else{
      setSortedRead(read);
      setSortedWishList(wishlist);

    } 
        
  }
  

  

  return (
   <div>
    <p>Books</p>
    <div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">{sort || "sort By"}</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=> handleSort("ratings")}><a>Sort by Ratings</a></li>
    <li onClick={()=> handleSort("pages")}><a>Sort by Pages</a></li>
  </ul>
</div>
    {/* two tabs */}
     <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
     <p>Read {read.bookId}</p>
     {
        sorterRead.map(singleRead => <ReadBook key={singleRead.bookId} singleRead={singleRead}></ReadBook>)
     }
     
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      {
        sortedWishList.map(singleWishList => <Wishlist key={singleWishList.bookId} singleWishList={singleWishList}></Wishlist>)
     }
    </TabPanel>
  </Tabs>
   </div>

    
  );
};

export default ListedBooks;
