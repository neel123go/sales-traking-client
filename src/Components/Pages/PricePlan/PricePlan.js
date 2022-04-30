import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/solid';
import './PricePlan.css';
import { Link, useNavigate } from 'react-router-dom';

const PricePlan = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2 className='pt-5 my-5'>Find a plan <span className='text-danger'>that's right for your business</span></h2>
            <div className='container'>
                <div className="row row-cols-3 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fs-4">Basic</h5>
                                <h4 className='text-primary'>$400 <span className='fs-6 text-dark'>/month</span></h4>
                            </div>
                            <ul className="list-group list-group-flush text-start">
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 3 Users</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 1M+ Products</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 20000+ Customers</li>
                                <li className="list-group-item"><XCircleIcon className='uncheck-icon'></XCircleIcon> Custom order count</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Unlimited Suppliers</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Oversell & stockout protection</li>
                                <li className="list-group-item"><XCircleIcon className='uncheck-icon'></XCircleIcon> Client Portal</li>
                                <li className="list-group-item"><XCircleIcon className='uncheck-icon'></XCircleIcon> Advanced Client Management</li>
                            </ul>
                            <Link to='/checkout'><button className='btn w-50 mx-auto my-3 text-light' style={{ backgroundColor: '#1F2943' }}>Purchase</button></Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fs-4">Premium <span className='text-danger fs-6'>Popular</span></h5>
                                <h4 className='text-primary'>$800 <span className='fs-6 text-dark'>/month</span></h4>
                            </div>
                            <ul className="list-group list-group-flush text-start">
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 5 Users</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 5M+ Products</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 100000+ Customers</li>
                                <li className="list-group-item"><XCircleIcon className='uncheck-icon'></XCircleIcon> Custom order count</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Unlimited Suppliers</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Oversell & stockout protection</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Client Portal</li>
                                <li className="list-group-item"><XCircleIcon className='uncheck-icon'></XCircleIcon> Advanced Client Management</li>
                            </ul>
                            <Link to='/checkout'><button className='btn w-50 mx-auto my-3 text-light' style={{ backgroundColor: '#1F2943' }}>Purchase</button></Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fs-4">Ultimate</h5>
                                <h4 className='text-primary'>$1200 <span className='fs-6 text-dark'>/month</span></h4>
                            </div>
                            <ul className="list-group list-group-flush text-start">
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 5 Users</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 5M+ Products</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> 100000+ Customers</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Custom order count</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Unlimited Suppliers</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Oversell & stockout protection</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Client Portal</li>
                                <li className="list-group-item"><CheckCircleIcon className='check-icon'></CheckCircleIcon> Advanced Client Management</li>
                            </ul>
                            <Link to='/checkout'><button className='btn w-50 mx-auto my-3 text-light' style={{ backgroundColor: '#1F2943' }}>Purchase</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricePlan;