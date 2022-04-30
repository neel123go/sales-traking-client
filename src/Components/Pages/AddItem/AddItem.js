import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../Firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const itemInfo = { name, image, description, price, quantity, supplierName: user?.displayName, email: user?.email };

        if (name === '' || image === '' || description === '' || price === '' || quantity === '') {
            setError('Field must not be empty');
        } else {
            setError('');
            fetch('https://cryptic-woodland-81029.herokuapp.com/addItem', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(itemInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success('Item added successfully');
                        e.target.reset();
                    }
                });
        }
    };

    return (
        <div>
            <h2 className='my-5'>Add New Inventory Item</h2>
            <div className='w-50 mx-auto border border-secondary rounded-3 p-5 mt-5 text-start'>
                <Form onSubmit={handleAddItem}>
                    <p className='text-danger text-center fs-5'>{error}</p>
                    <Form.Group className="mb-3">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control autoComplete='off' name="name" type="text" placeholder="Enter item name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Item Image URL</Form.Label>
                        <Form.Control autoComplete='off' name="image" type="text" placeholder="Enter item image url" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Item Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            autoComplete='off'
                            name="description"
                            placeholder="Item short description"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Item Price</Form.Label>
                        <Form.Control autoComplete='off' name="price" type="number" placeholder="Enter item price" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Item Quantity</Form.Label>
                        <Form.Control autoComplete='off' name="quantity" type="number" placeholder="Enter item quantity" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Add New Item</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItems;