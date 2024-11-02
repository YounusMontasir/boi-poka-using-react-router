import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const backNavigate = useNavigate()
    const handleBack = () =>{
        backNavigate(-1);
    }
    return (
        <div>
            <p>404 Not Found</p>
            <button onClick={handleBack}  className='btn btn-warning'>Go Back</button>
        </div>
    );
};

export default ErrorPage;