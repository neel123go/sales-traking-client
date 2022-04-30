import { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-woodland-81029.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [items, setItems];
}

export default useInventoryItems;