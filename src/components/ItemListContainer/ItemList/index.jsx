import React from 'react'
import { CardItem } from '../Item'
// import { Box } from '@mui/material';
import styled from 'styled-components';
import { fetchProducts } from '../../../sdk/products';

export const ItemList = ({props}) => {
    
    const [ items, setItems ] = React.useState([]);

    React.useEffect(() => {
        fetchProducts()
        .then((res) => {
            return res.json()})
        .then((response) => {
            console.log(response)
            setItems(response)
        })
        .catch(error => console.log(error))
    }, [])
    

    return (
        <ContainerProducts>
            {
                items.map((item, index) => {
                    return ( 
                        <CardItem key={index + item.title} id={item.id} title={item.title} price={item.price} imgURL={item.image} stock={10} />
                    )
                })
            }
        </ContainerProducts>

    )
}

const ContainerProducts = styled.div`
    display: flex;
    flex-direction: row;
`