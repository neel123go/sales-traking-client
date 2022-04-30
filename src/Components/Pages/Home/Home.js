import React from 'react';
import AskQuestion from '../AskQuestion/AskQuestion';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import PricePlan from '../PricePlan/PricePlan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <PricePlan></PricePlan>
            <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;