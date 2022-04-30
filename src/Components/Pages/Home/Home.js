import React, { useEffect, useState } from 'react';
import AskQuestion from '../AskQuestion/AskQuestion';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import PricePlan from '../PricePlan/PricePlan';
import Loading from '../Shared/Loading/Loading';

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }

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