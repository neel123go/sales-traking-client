import React from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useInventoryItems from '../../../hooks/useInventoryItems';
import { XCircleIcon } from '@heroicons/react/solid';

const ManageItems = () => {
    const [items, setItems] = useInventoryItems();

    const handleDeleteItem = (id) => {
        const deleteStatus = window.confirm('Are you sure to delete this item?');
        if (deleteStatus) {
            const url = `https://cryptic-woodland-81029.herokuapp.com/inventory/${id}`;
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
        <div className='container min-vh-100'>
            <h2 className='my-sm-5 my-4'>Manage Inventories</h2>
            {
                items.length > 0 ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className='d-sm-table-cell d-none'>Quantity</th>
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
                                    <td className='d-sm-table-cell d-none'>{item.quantity}</td>
                                    <td className='d-md-table-cell d-none'>{item.supplierName}</td>
                                    <td className='d-md-table-cell d-none'><button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger'>Delete</button></td>
                                    <td className='d-md-none d-table-cell' onClick={() => handleDeleteItem(item._id)}><XCircleIcon style={{ width: '20px', color: '#f82d2d' }}></XCircleIcon></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                    : <div className='d-block min-vh-100 mx-auto'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
            <Link className='fs-4' to='/additem'><button type="button" className="btn btn-primary">Add new item</button></Link>
        </div>
    );
};

export default ManageItems;