import React from 'react'
import { CardItem } from '../Item'
import { getProducts } from '../../../assets/data'
// import { Box } from '@mui/material';
import styled from 'styled-components';

export const ItemList = ({props}) => {
    
    const [ items, setItems ] = React.useState([]);

    React.useEffect(() => {
        getProducts()
        .then((response) => {
            setItems(response)
        })
        .catch(error => console.log(error))
    }, [])
    

    return (
        <ContainerProducts>
            {
                items.map((item, index) => {
                    return ( 
                        <CardItem key={index + item.title} id={item.id} title={item.title} price={item.price} imgURL={item.imgURL} stock={item.stock} />
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