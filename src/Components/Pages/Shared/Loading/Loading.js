import React from 'react';
import LoadingImg from '../../../../Images/Loading/loading-img.gif';

const Loading = () => {
    return (
        <div className='w-50 mx-auto' style={{ height: '100vh' }}>
            <img className='w-50 mx-auto mt-5' src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;