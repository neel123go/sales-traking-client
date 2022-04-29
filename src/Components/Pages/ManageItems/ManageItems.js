import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const handleDeleteItem = (id) => {
        const deleteStatus = window.confirm('Are you sure to delete this item?');
        if (deleteStatus) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        const remainingItems = items.filter(item => item._id !== id);
                        setItems(remainingItems);
                        toast.success('Item deleted successfully');
                    }
                });
        }
    }

    return (
        <div className='container'>
            <h2 className='my-5'>Manage item Here</h2>
            {
                items.length > 0 ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th className='d-md-table-cell d-none'>SupplierName</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item => <tr key={item._id}>
                                    <td><img style={{ width: '50px' }} src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td className='d-md-table-cell d-none'>{item.supplierName}</td>
                                    <td><button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                    : <h2 className='text-danger text-center'>No Item Found</h2>
            }
        </div>
    );
};

export default ManageItems;