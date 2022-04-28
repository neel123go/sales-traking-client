import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../../Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, hookError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    let errorMessageElement;

    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (name === '' || email === '' || password === '') {
            setError('Field must not be empty');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('');
            setError('Invalid email. Please provide a valid email');
        } else if (password.length < 8) {
            setError('');
            setError('Your password must be at least 8 characters or longer');
        } else {
            setError('');
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
        }
    };

    // Navigate User
    useEffect(() => {
        if (user) {
            navigate('/');
        };
    }, [user]);

    // Handle Loading
    if (loading || updating) {
        return <Loading></Loading>
    }

    // Handle Error
    if (hookError || updateProfileError) {
        errorMessageElement = <div className='text-center text-danger'>
            <h5>{hookError?.message} {updateProfileError?.message}</h5>
        </div>
    }

    return (
        <div>
            <h2 className='my-5'>Create an account</h2>
            <div className='w-50 mx-auto border border-secondary rounded-3 p-5 mt-5 text-start'>
                <Form onSubmit={handleSignUp}>
                    {errorMessageElement}
                    <div className='text-center text-danger'>
                        <h5>{error}</h5>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control autoComplete='off' name="name" type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete='off' name="email" type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Create an account</Button>
                    <h6 className='mt-4'>Already have an account? <Link to='/login'>Login</Link></h6>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;