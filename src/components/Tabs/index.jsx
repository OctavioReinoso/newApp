import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';

export const TabsMenu = () => {

    const [selected, setSelected] = React.useState('calzado');
    console.log(selected)

    const handleChange = (_, value) => {
        setSelected(value);
    };

    const handleTab = () => {
        console.log('hola')
        return(
            <div>
                <p>HOLA</p>
            </div>
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selected} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Calzado" value={'calzado'} onMouseOver={handleTab}/>
                    <Tab label="Indumentarias" value={'indumentaria'} />
                    <Tab label="Hombre" value={'hombre'} />
                </Tabs>
            </Box>
            
            {
                selected === 'calzado' ?  
                    <p>Calzado</p>
                : null
            }
            {
                selected === 'indumentaria' ?  
                    <p>Indumentaria</p>
                : null
            }
            {
                selected === 'hombre' ?  
                    <p>Accesorios</p>
                : null
            }
            
        </Box>
    );
}