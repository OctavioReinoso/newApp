import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { BurgerIcon } from './index2'

export const NavBar = () => {

    const [ clicked, setClicked ] = React.useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <NavContainer>
            <Link to={'/'} className='navLink'>
                <h2>*<span>COMMERCE</span></h2>
            </Link>
            <div className={`Links ${clicked ? 'active' : '' }`}> 
                <Link className='navLink'>
                    <h4>SHOP</h4>
                </Link>
                <Link className='navLink'>
                    <h4>LOGIN</h4>
                </Link>
                <Link className='navLink'>
                    <h4>CONTACT</h4>
                </Link>
                <Link  onClick={handleClick} className='navLink'>
                    <h4>CART</h4>
                </Link>
            </div>

            <div className='containerIcon'>
                <BurgerIcon clicked={clicked} handleClick={handleClick}/>
            </div>

            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>

        </NavContainer>
        
    )
}


const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: black;
    padding: .4rem;
    align-items: center;
    h2{
        color: white;
        span{
            font-weight: bold;
        }
    }
    h4{
        &:hover{
            color: lightblue;
        }
    }
    .navLink{
        color: white;
        text-decoration: none;
        display: inline-block;
        padding: 0rem 1rem;
    }
    
    .Links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        transition: all .5s ease-in-out;
        .navLink{
            display: block;
            color: white;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            margin-right: 1.5rem;
            .navLink{
                display: inline-block;
                color: white;
            }
        }
    }
    .Links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-top: .3rem;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        .navLink{
            color: white;
        }
    }
    .containerIcon{
        margin-right: .2rem;
        @media(min-width: 768px){
            display: none;
        }
    }
    
    
`
const BgDiv = styled.div`
    background-color: #333;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1000px;
    left: -1000px;
    z-index: -1;
    transition: all .5s ease-in-out;
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 80% 0;
    }
`

