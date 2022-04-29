import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);

    const handleUpdateItem = (quantity, id) => {
        const newQuantity = quantity - 1;
        const updateItem = { newQuantity };

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            });
    }

    return (
        <div>
            <h2 className='my-5'>Inventory Item Details</h2>
            <div className='w-75 mx-auto border border-secondary rounded-3'>
                <div className="d-flex">
                    <div className='w-50'>
                        <img className="rounded-3 card-img-top" src={item.image} alt="" />
                    </div>
                    <div className="w-50 p-5">
                        <h5 className='fs-3 my-2'>{item.name}</h5>
                        <p className='text-secondary mb-4'>Item Id: {item._id}</p>
                        <p className='mt-3 mb-5'>{item.description}</p>
                        <p className='mt-3 fs-5 text-start'>Supplier Name: {item.supplierName}</p>
                        <p className='mt-3 fs-5 text-start'>Price: ${item.price}</p>
                        <p className='mt-3 fs-5 text-start'>Quantity: {item.quantity}</p>
                        <p className='mt-3 fs-5 text-start'>Sold: {item.sold}</p>
                        <button onClick={() => handleUpdateItem(item.quantity, item._id)} className='btn btn-primary mt-4'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemDetails;