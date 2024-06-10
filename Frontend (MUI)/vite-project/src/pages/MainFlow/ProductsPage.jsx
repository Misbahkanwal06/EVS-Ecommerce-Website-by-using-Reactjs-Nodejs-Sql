

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Navbar/Sidebar';
import ProductCards from '../../components/ProductsCards/ProductCards';
import Price from '../../components/Price/Price';



function ProductsPage() {

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Price setMin={setMin} setMax={setMax} />

            <Box sx={{ p: 2, mt: 2 }}>
                <Grid container spacing={2}>
                    {isSidebarVisible && (
                        <Grid item sm={5} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Sidebar />
                        </Grid>
                    )}
                    <Grid item sm={isSidebarVisible ? 7 : 12} xs={12} md={isSidebarVisible ? 9 : 12}>
                        <Box>
                        <ProductCards min={min} max={max} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )
}

export default ProductsPage;
