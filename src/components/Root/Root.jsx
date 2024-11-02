import React, { createContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { BookProvider } from '../BookContext';





const Root = () => {
    
    return (
       <BookProvider>
         <div className="flex flex-col min-h-screen" >
        
       <div className='w-10/12 mx-auto flex-grow'>
       <Navbar></Navbar>
       <Outlet></Outlet>
       </div>
        <Footer ></Footer>
    
    </div>
       </BookProvider>
    );
};

export default Root;