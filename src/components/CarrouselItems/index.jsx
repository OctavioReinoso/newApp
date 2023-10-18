import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import { fetchProducts } from '../../sdk/products';
//install react-swipeable views

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const CarrouselItems = () => {

    const [items, setItems] = useState([]);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = fetchProducts.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    }

    useEffect(() => {
        fetchProducts()
        .then((res) => {
            setItems(res)
        })
    }, [])

    return (
        <ContainerCarrousel  >
            {/* <Paper square elevation={0} sx={{
                display: 'flex', alignItems: 'center', height: 50, pl: 2, bgcolor: 'background.default'}}>
                <Typography>{images[activeStep].label}</Typography>
            </Paper> */}
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
                {
                items.map((step, index) => (
                <div key={step.id}>
                    {Math.abs(activeStep - index) <= 0 ? (
                    <Box component="img"sx={{
                        height: 425,
                        // display: 'block',
                        maxWidth: 435,
                        overflow: 'hidden',
                        width: '100vw'}}
                        src={step.image} alt={step.title}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps + 4}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    
                </Button>
                }
            />
        </ContainerCarrousel>
    )
}

const ContainerCarrousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    flex-grow: 1;
    margin: 3rem 0rem;
`