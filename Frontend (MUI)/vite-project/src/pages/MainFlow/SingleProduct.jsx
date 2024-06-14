
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Typography } from '@mui/material';
// import ImageZoom from './ImageZoom';
import SingleProdCard from '../../components/SingleProductCard/SingleProdCard';

function SingleProduct() {

    return (
        <div>
            <Navbar />
            <SingleProdCard />
        </div>
    )
}

export default SingleProduct;
