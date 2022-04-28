import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div>
            <h2 className='my-5'>Create an account</h2>
            <div className='w-50 mx-auto border border-secondary rounded-3 p-5 mt-5 text-start'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control autoComplete='off' type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete='off' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' type="password" placeholder="Password" />
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