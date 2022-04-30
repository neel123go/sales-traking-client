import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const address = e.target.homeAddress.value;
        const phoneNumber = e.target.phoneNumber.value;

        // form validation
        if (address === '' || phoneNumber === '') {
            setError('Field must not be empty');
        } else {
            setSubmit(true);
            setError('');
        }
    }

    return (
        <div className='container'>
            <div className='w-50 mx-auto text-start'>
                {
                    submit ? <p className='fs-3 text-center pt-5 text-success' style={{ height: '70vh' }}>Thank you for Purchasing from us</p>
                        :
                        <div className='border border-secondary rounded-3 p-5 mt-5 text-start'>
                            <form onSubmit={handleSubmit}>
                                <h2 className='mb-4'>Please Purchase</h2>
                                <p className='text-danger'>{error}</p>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input value={user?.displayName} readOnly type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input value={user?.email} readOnly type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" autoComplete='off' name='homeAddress' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="number" name='phoneNumber' className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Purchase</button>
                            </form>
                        </div>
                }
            </div>
        </div>
    );
};

export default CheckOut;