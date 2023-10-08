import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getProducts } from '../../assets/data'
import { ItemList } from '../ItemListContainer/ItemList'
import { CarrouselItems } from '../CarrouselItems'

export const Home = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
    }, [])
    
    
    return (
        <MainContainer>  
            <CarrouselItems />
            
            <ItemList products={products} />
            
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`