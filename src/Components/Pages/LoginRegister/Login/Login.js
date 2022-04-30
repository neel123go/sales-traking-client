import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [error, setError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessageElement;

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email === '' || password === '') {
            setError('Field must not be empty');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('');
            setError('Invalid email. Please provide a valid email');
        } else if (password.length < 8) {
            setError('');
            setError('Your password must be at least 8 characters or longer');
        } else {
            setError('');
            await signInWithEmailAndPassword(email, password);
            fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(from, { replace: true });
                });
        }
    }

    // Handle Loading
    if (loading || sending) {
        return <Loading></Loading>
    }

    // Handle Error
    if (hookError || resetError) {
        errorMessageElement = <div className='text-center text-danger'>
            <h5>{hookError?.message} {resetError?.message}</h5>
        </div>
    }

    // function for reset password
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sent');
        } else {
            toast.error('Please enter your email');
        }
    }

    return (
        <div>
            <h2 className='my-5'>Please Login</h2>
            <div className='w-50 mx-auto border border-secondary rounded-3 p-5 mt-5 text-start'>
                <Form onSubmit={handleLogin}>
                    {errorMessageElement}
                    <div className='text-center text-danger'>
                        <h5>{error}</h5>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} autoComplete='off' type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} autoComplete='off' type="password" placeholder="Password" />
                    </Form.Group>
                    <p onClick={handleResetPassword} className='text-danger mb-3' style={{ cursor: 'pointer' }}>Forgot Password?</p>
                    <Button variant="primary" type="submit">Login</Button>
                    <h6 className='mt-4'>Don't have any account? <Link to='/signup'>Sign Up</Link></h6>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;