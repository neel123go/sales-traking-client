import React from 'react';
import NotFoundImg from '../../../../Images/NotFound/3819740.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-50 my-4' src={NotFoundImg} alt="" />
            <h3>The page you are looking for is not found</h3>
        </div>
    );
};

export default NotFound;