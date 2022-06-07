import React, { useEffect, useState } from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        api();
    }, []);
    const [items,setitems]=useState([]);
    const api = async () => {
        const data = await fetch(`https://random-d.uk/api/v2`);
        const items = await data.json();
        console.log(items.message);
        setitems(items.message);
    }

    return (
        <div className="Apptwo">
            <h1>{items.message}</h1>
        </div>
    );
}

export default Shop;