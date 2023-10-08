import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { data } from '../../assets/data';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const SliderImage = () => {

    const [ indexImage, setIndexImage] = useState(0); 
    const listRef = useRef();

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[indexImage];
        
        if(imgNode){
            imgNode.scrollIntoView({
                behavior:'auto'
            });
        }
    }, [indexImage]);

    const scrollToImage = (direction) => {
        if(direction === 'left'){
            setIndexImage(current => {
                const leftSlide = indexImage === 0;
                return leftSlide ? data.lenght -1 : current - 1  
            })
        }else {
            const rightSlide = indexImage === data.lenght - 1;
            if(!rightSlide){
                setIndexImage(current => current + 1)
            }
        }
        // else if(direction === 'right'){
            // setIndexImage((current) => {
            //     const rightSlide = indexImage === data.length - 1;
            //     return rightSlide ? 0 : current + 1;
            // }); 
        // }
    }

    return (
        <MainContainer>
            <div className='sliderContainer'>
                <div className="leftArrow" onClick={() => scrollToImage('left')} > <KeyboardArrowLeftIcon /> </div>
                <div className="rightArrow" onClick={() => scrollToImage('right')} > <KeyboardArrowRightIcon /> </div>

                <div className='imageContainer'>
                    <ul ref={listRef}>
                        {
                            data.map((item) => {
                                return<li key={item.id}>
                                    <img src={item.imgURL} alt={item.imgURL} width={370} height={440} />
                                </li> 
                            })
                        }
                    </ul>
                </div>
            </div>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    height: 64vh;
    width: 30vw;
    /* width: 700px;
    height: 500px; */
    margin: 4rem auto;

    .sliderContainer{
        position: relative;
        height: 100%;
    }
    .imageContainer{
        width: 100%;
        height: 100%;
        margin: 1px 6px 1px 1px;
        border: 2px solid grey;
        border-radius: 20px;
        overflow: hidden;
    }

    ul, li {
        list-style: none;
        white-space: nowrap;
    }
    li {
        display: inline;
    }
    img {
        /* width: 100%;
        height: 100%; */
        /* transition: margin-right 2s; */
        
    }
    
    .leftArrow{
        position: absolute;
        top: 50%;
        transform: translate(0, -33%);
        transition: margin-right 4s ease-in-out 1s;
        left: 25px;
        font-size: 50px;
        font-weight: 700;
        color: black;
        z-index: 1;
        cursor: pointer;
    }
    .rightArrow{
        position: absolute;
        top: 50%;
        transform: translate(0, -33%);
        transition: all;
        right: 25px;
        font-size: 50px;
        font-weight: 700;
        color: black;
        z-index: 1;
        cursor: pointer;
    }
`