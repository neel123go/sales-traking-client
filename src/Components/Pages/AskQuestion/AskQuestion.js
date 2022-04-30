import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './AskQuestion.css';

const AskQuestion = () => {
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const question = e.target.question.value;

        if (email === '' || question === '') {
            setMessage('Field must not be empty');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setMessage('');
            setMessage('Invalid email. Please provide a valid email');
        } else {
            setMessage('Thanks for your question. We replay your question by email');
            e.target.reset();
            await fetch('http://localhost:5000/question', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, question })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                });
        }
    }

    return (
        <div className='ask-question-section mt-5 d-flex justify-content-center align-items-center'>
            <div className='w-50 mx-auto'>
                <h2 className='text-light mb-5'><b>Have any question?</b></h2>
                <p className='text-light fs-5 mb-3'>{message}</p>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control autoComplete='off' name='email' type="text" placeholder="Enter your email address" />
                    </Form.Group>

                    <FloatingLabel controlId="floatingTextarea2" label="Describe your question here">
                        <Form.Control
                            name="question"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '120px' }}
                        />
                    </FloatingLabel>
                    <button className='btn btn-light mt-4 w-50'>SUBMIT</button>
                </Form>
            </div>
        </div >
    );
};

export default AskQuestion;