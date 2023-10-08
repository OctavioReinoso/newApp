import React from 'react'
import styled from 'styled-components'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
// import { productsShop } from '../../../assets/data'

export const CardItem = ({ id, title, price, imgURL, stock }) => {
    
    return (
        <ItemContainer>
            <Card className='card' >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="230"
                    image={imgURL}
                    alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {`$${price}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {`${stock} unidades`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    background-color: grey;
    display: flex;
    justify-content: center;
    padding: 10% 0;
    width: 100%;
    /* height: 10%; */
    .card{
        width: 340px;
        height: 360px;
        cursor: pointer;

        &:hover{
            border: 2px solid grey;
            box-shadow: 1px 1px 4px black;
            //crear clase active a card para poner boton de comprar
        }
    }
`