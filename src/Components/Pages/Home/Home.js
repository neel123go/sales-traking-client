import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import PricePlan from '../PricePlan/PricePlan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <PricePlan></PricePlan>
        </div>
    );
};

export default Home;