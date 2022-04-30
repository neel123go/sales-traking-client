import React from 'react';
import LoadingImg from '../../../../Images/Loading/loading-img.gif';

const Loading = () => {
    return (
        <div className='d-flex py-5 my-5 justify-content-center align-items-center'>
            <img className='w-25 mx-auto my-5' src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;