

import React from 'react';
import SlickSlider from 'react-slick';
import { Box, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slider() {
    const settings = {

        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // fade: true

    };

    const images = [
        'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/Top-10-Women-Clothing-Brands-in-Pakistan.jpg?alt=media&token=f02274b6-8874-4bdb-9786-65791d05005e',
        'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/ss2.webp?alt=media&token=fc506c74-9644-464a-b656-ced342f8ece0',
        'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/ss3.jpg?alt=media&token=d57ae41c-6ebd-4733-80a1-62e1554526f8'
    ];

    return (
        <Box sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'white' }}>
            <SlickSlider {...settings}>
                {images.map((src, index) => (
                    <Box key={index}>
                        <CardMedia
                            component="img"
                            image={src}
                            alt={`Slide ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                ))}
            </SlickSlider>
        </Box>
    );
}

export default Slider;
