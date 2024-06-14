

// import React, { useState, useEffect } from 'react';
// import { Box } from '@mui/material';
// import './ImageZoom.css';

// const ImageZoom = ({ src, alt }) => {
//     const [isZoomed, setIsZoomed] = useState(false);
//     const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

//     useEffect(() => {
//         setBackgroundPosition('0% 0%'); // Reset background position on src change
//     }, [src]);

//     const handleMouseEnter = () => setIsZoomed(true);
//     const handleMouseLeave = () => setIsZoomed(false);

//     const handleMouseMove = (e) => {
//         const { left, top, width, height } = e.target.getBoundingClientRect();
//         const x = ((e.pageX - left) / width) * 100;
//         const y = ((e.pageY - top) / height) * 100;
//         setBackgroundPosition(`${x}% ${y}%`);
//     };

//     return (
//         <Box
//             className="zoom-container"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             onMouseMove={handleMouseMove}
//             style={{
//                 backgroundImage: `url(${src})`,
//                 backgroundSize: isZoomed ? '200%' : 'contain',
//                 backgroundPosition: backgroundPosition,
//             }}
//         >
//             <img src={src} alt={alt} className="zoom-image" />
//         </Box>
//     );
// };
// export default ImageZoom;



import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './ImageZoom.css';

const ImageZoom = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

    // useEffect(() => {
    //     setBackgroundPosition('0% 0%'); // Reset background position on src change
    // }, [src]);

    useEffect(() => {
        console.log("Image source updated:", src); // Add this line
        setBackgroundPosition('0% 0%');
    }, [src]);


    const handleMouseEnter = () => setIsZoomed(true);
    const handleMouseLeave = () => setIsZoomed(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <Box
            className="zoom-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: isZoomed ? '200%' : 'contain',
                backgroundPosition: backgroundPosition,
            }}
        >
            <img src={src} alt={alt} className="zoom-image" />
        </Box>
    );
};

export default ImageZoom;
