import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { data } from '../../assets/data';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const SliderImage = () => {

    const [ indexImage, setIndexImage] = useState(0); 
    const ListRef = useRef();

    useEffect(() => {
        const listNode = ListRef.current;
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
                return leftSlide ? 0 : current - 1  
            })
        }else{
            const rightSlide = indexImage === data.length - 1
            if(rightSlide){
                setIndexImage(indexImage + 1)  
            } 
        }
    }

    return (
        <MainContainer>
            <div className='sliderContainer'>
                <div className="leftArrow" onClick={() => scrollToImage('left')} > <KeyboardArrowLeftIcon /> </div>
                <div className="rightArrow" onClick={() => scrollToImage('rigth')} > <KeyboardArrowRightIcon /> </div>
                <div className='imageContainer'>
                    <ul ref={ListRef}>
                        {
                            data.map((item) => {
                                return<li key={item.id}>
                                    <img src={item.imgURL} alt={item.imgURL} width={500} height={590}/>
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
    height: 24rem;
    width: 50%;
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
        margin-top: 5px;
    }
    
    .leftArrow{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 15px;
        font-size: 50px;
        font-weight: 700;
        color: black;
        z-index: 1;
        cursor: pointer;
    }
    .rightArrow{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 15px;
        font-size: 50px;
        font-weight: 700;
        color: black;
        z-index: 1;
        cursor: pointer;
    }
`