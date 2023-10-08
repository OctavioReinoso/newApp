import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList';
import { getProducts } from '../../../assets/data';

export const ItemContainer = () => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts()
        .then((res) => {
            setItems(res)
        })
    }, [])

    return (
        <div>
            <ItemList items={items}/>
        </div>
    )
}
