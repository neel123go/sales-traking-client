import React from 'react';
import { Link } from 'react-router-dom';
import useInventoryItems from '../../../hooks/useInventoryItems';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items] = useInventoryItems();

    return (
        <div className='pt-md-5'>
            <h2 className='my-5'>Our <span className='text-danger'>Inventory Items</span></h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-lg-4 g-md-3 g-2 container mx-auto mb-4">
                {
                    items.slice(0, 6).map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                }
            </div>
            <Link className='fs-4' to='/manageItems'><button type="button" className="btn btn-primary">Manage Inventories</button></Link>
        </div>
    );
};

export default InventoryItems;