import React from 'react';
import { Container, Box, Typography, Link as MuiLink } from '@mui/material';
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';

function BackToShop() {
    return (
        <Container sx={{ mt: 4 }}>
            <MuiLink component={Link} to="/" underline="none">
                <Box display="flex" alignItems="center" sx={{ color: 'black', '&:hover': { color: 'blue' } }}>
                    <ArrowLeft size={16} />
                    <Typography sx={{ ml: 1, '&:hover': { color: 'blue' } }}>Back to Shop</Typography>
                </Box>
            </MuiLink>
        </Container>
    );
}

export default BackToShop;
