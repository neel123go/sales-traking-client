import React from 'react';
import NotFoundImg from '../../../../Images/NotFound/3819740.jpg';

const NotFound = () => {
    return (
        <div className='my-5 p-2'>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <img className='w-50 my-4' src={NotFoundImg} alt="" />
            </div>
            <h3>The page you are looking for is not found</h3>
        </div>
    );
};

export default NotFound;