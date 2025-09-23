import React, { useState, useEffect } from 'react';

// Mock API call to simulate fetching data
const mockFetchItems = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Item A', value: 10 },
                { id: 2, name: 'Item B', value: 20 },
                { id: 3, name: 'Item C', value: 30 },
                { id: 4, name: 'Item D', value: 40 },
                { id: 5, name: 'Item E', value: 50 },
            ]);
        }, 1000); 
    });
};


const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);


  useEffect(() => {
   //
  }, []);

    return <div>
        <h1>Item List</h1>
        <p>Selected Item: {selectedItemId ? `ID ${selectedItemId}` : 'None'}</p> 
        {/* LISTING */}
    </div>
};

export default ItemList;