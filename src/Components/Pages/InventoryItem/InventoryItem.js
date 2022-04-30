import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description.slice(0, 70) + ' ....'}</p>
                    <div className='text-start'>
                        <p className='fs-5'>Price: $<span className='fs-3 fw-bolder text-success'>{item.price}</span></p>
                        <p className='fs-5'>Supplier: {item.supplierName}</p>
                        <p className='fs-5'>Quantity: {item.quantity}</p>
                    </div>
                    <Link to={`/inventory/${item._id}`}><button className='w-100 btn btn-success'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;