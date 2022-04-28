import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div>
            <h2 className='my-5'>Please Login</h2>
            <div className='w-50 mx-auto border border-secondary rounded-3 p-5 mt-5 text-start'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete='off' name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                    <h6 className='mt-4'>Don't have any account? <Link to='/signup'>Sign Up</Link></h6>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;