import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ItemList } from '../ItemListContainer/ItemList'
// import { CarrouselItems } from '../CarrouselItems'
import { fetchProducts } from '../../sdk/products'

export const Home = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        fetchProducts()
        .then(response => {
            setProducts(response)
        })
    }, [])
    
    
    return (
        <MainContainer>  
            {/* <CarrouselItems /> */}
            
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