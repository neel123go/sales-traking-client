import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const InventoryItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [restockErr, setRestockErr] = useState('');
    const [sold, setSold] = useState(false);

    useEffect(() => {
        const url = `https://cryptic-woodland-81029.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);

    const handleUpdateItem = (quantity) => {
        const newQuantity = quantity - 1;
        if (newQuantity < 0) {
            toast.error('This product is sold out');
            setSold(true);
        } else {
            const updateItem = { newQuantity };

            const url = `https://cryptic-woodland-81029.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount > 0) {
                        toast.success('Item delivered successfully');
                    }
                });
        }
    }

    const handleRestockItem = (e) => {
        e.preventDefault();
        const restock = e.target.restock.value;

        if (restock === '') {
            setRestockErr('Field must not be empty');
        } else if (restock < 0) {
            setRestockErr('');
            setRestockErr('Please enter a valid number');
        } else {
            setRestockErr('');
            setSold(false);
            const quantity = item.quantity;
            const newQuantity = parseInt(restock) + parseInt(quantity);
            const updateItem = { newQuantity };

            const url = `https://cryptic-woodland-81029.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount > 0) {
                        e.target.reset();
                        toast.success('Restock item successfully');
                    }
                });
        }
    }

    return (
        <div className='min-vh-100'>
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
                        <p className='mt-3 fs-5 text-start text-danger'>{sold ? 'This product is sold out' : ''}</p>
                        <button onClick={() => handleUpdateItem(item.quantity)} className='btn btn-primary mt-4'>Delivered</button>
                    </div>
                </div>
            </div>

            <div className='w-25 mx-auto my-5'>
                <Form onSubmit={handleRestockItem}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h3 className='mb-4'>Restock the items</h3>
                        <p className='text-danger text-center'>{restockErr}</p>
                        <Form.Control type="number" name="restock" placeholder="Enter restock item" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Restock</Button>
                </Form>
            </div>
            <Link className='fs-4' to='/manageItems'><button type="button" className="btn btn-primary">Manage Inventories</button></Link>
        </div>
    );
};

export default InventoryItemDetails;