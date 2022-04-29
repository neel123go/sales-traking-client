import React, { useEffect } from 'react';
import GoogleImg from '../../../../Images/Social/google.png';
import auth from '../../../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessageElement;
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Navigate User
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        };
    }, [user]);

    // Handle Loading
    if (loading) {
        return <div className='text-center mt-3'>
            <Spinner animation="border" variant="primary" />
        </div>;
    }

    // Handle Error
    if (error) {
        errorMessageElement = <div className='text-center text-danger mt-3'>
            <h5>{error?.message}</h5>
        </div>
    }

    return (
        <div>
            {errorMessageElement}
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div className='text-center mt-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light border border-primary me-3'><img style={{ width: '25px' }} src={GoogleImg} alt="" /> Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;