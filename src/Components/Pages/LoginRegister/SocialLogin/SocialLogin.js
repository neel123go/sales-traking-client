import React from 'react';
import GoogleImg from '../../../../Images/Social/google.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-light border border-primary me-3'><img style={{ width: '25px' }} src={GoogleImg} alt="" /> Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;