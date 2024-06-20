
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Card, CardContent, Typography, Button } from '@mui/material';
// import ImageZoom from '../ImageZoomEffect/ImageZoom';


// const SingleProdCard = () => {

//     const [singleProduct, setSingleProduct] = useState({});
//     console.log("variable", singleProduct);
//     const { prodId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSingleProduct = async () => {
//             try {
//                 const url = `http://localhost:3008/api/v1/products/single-product/${prodId}`;
//                 const res = await axios.get(url);
//                 setSingleProduct(res && res.data.obj);
//                 console.log("one product", res.data.obj);
//             } catch (error) {
//                 console.error('Error getting products', error);
//             }
//         };
//         fetchSingleProduct();
//     }, [prodId]);

//     // Define the handleCancel function
//     const handleCancel = () => {
//         navigate(`/products/${singleProduct.categoryId}`);
//     };


//     const handleAddToCart = (prodId) => {
//         console.log("in handle add to cart", prodId);
//         const storageResponse = localStorage.getItem("userdata");
//         let customer = JSON.parse(storageResponse);
//         let custId = customer && customer.cstId;
//         let quantity = 1;
//         localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }));
//         if (!customer) navigate('/signup');
//         else {
//             const payloads = { prodId, custId, quantity };
//             console.log("payloads", payloads);
//             const addToCartBtn = async () => {
//                 try {
//                     const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads);
//                     console.log("addtocartdata", res.data);
//                     res && res.data && navigate('/cart');
//                 } catch (error) {
//                     console.error('Error getting categories', error);
//                 }
//             };
//             addToCartBtn();
//         }
//     };


//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" p={2} sx={{ backgroundColor: '#f5f5f5' }}>
//             <Card sx={{ display: 'flex', width: '100%', maxWidth: 1000, p: 1.5 }}>
//                 <Box sx={{ width: 400 }}>
//                     <ImageZoom src={singleProduct.prodImages} alt="Product Image" />
//                 </Box>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
//                     <CardContent>
//                         <Typography component="div" variant="h4">
//                             {`Women Collection Of ${singleProduct.proName}`}
//                         </Typography>
//                         <Typography component="div" variant="h5" sx={{ color: 'red', mt: 2 }}>
//                             {`Rs. ${singleProduct.price}`}
//                         </Typography>
//                         <Typography component="div" variant="body1" sx={{ textDecoration: 'line-through', mt: 2 }}>
//                             {`Rs. ${singleProduct.price}`}
//                         </Typography>
//                         <Box sx={{ display: 'flex', mt: 5 }}>
//                             <Button
//                                 variant="contained"
//                                 sx={{
//                                     flex: 1,
//                                     m: 1,
//                                     color: 'white',
//                                     backgroundColor: 'pink',
//                                     '&:hover': { backgroundColor: 'pink' },
//                                     height: '50px'
//                                 }}
//                                 onClick={() => handleAddToCart(singleProduct.proID)}
//                             >
//                                 Add to Cart
//                             </Button>
//                             <Button
//                                 variant="contained"
//                                 sx={{ flex: 1, height: '50px', m: 1 }}
//                                 onClick={() => handleCancel}
//                             >
//                                 Cancel
//                             </Button>
//                         </Box>
//                     </CardContent>
//                 </Box>
//             </Card>
//         </Box>
//     );
// };

// export default SingleProdCard;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import ImageZoom from '../ImageZoomEffect/ImageZoom';
import numeral from 'numeral';


const SingleProdCard = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { prodId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const url = `http://localhost:3008/api/v1/products/single-product/${prodId}`;
                const res = await axios.get(url);
                setSingleProduct(res && res.data.obj);
            } catch (error) {
                console.error('Error getting products', error);
            }
        };
        fetchSingleProduct();
    }, [prodId]);

    const handleCancel = () => {
        navigate(`/products/${singleProduct.categoryId}`);
    };

    const handleAddToCart = (prodId) => {
        const storageResponse = localStorage.getItem("userdata");
        let customer = JSON.parse(storageResponse);
        let custId = customer && customer.cstId;
        let quantity = 1;
        localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }));
        if (!customer) navigate('/signup');
        else {
            const payloads = { prodId, custId, quantity };
            const addToCartBtn = async () => {
                try {
                    const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads);
                    // res && res.data &&
                    navigate('/cart');
                } catch (error) {
                    console.error('Error getting categories', error);
                }
            };
            addToCartBtn();
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" p={2} sx={{ backgroundColor: '#f5f5f5' }}>
            <Card sx={{ display: 'flex', width: '100%', maxWidth: 1000, p: 1.5 }}>
                <Box sx={{ width: 400 }}>
                    <ImageZoom src={singleProduct.prodImages} alt="Product Image" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
                    <CardContent>
                        <Typography component="div" variant="h4">
                            {`Women Collection Of ${singleProduct.proName}`}
                        </Typography>
                        <Typography component="div" variant="h5" sx={{ color: 'red', mt: 2 }}>
                            {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
                        </Typography>
                        <Typography component="div" variant="body1" sx={{ textDecoration: 'line-through', mt: 2 }}>
                            {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
                        </Typography>
                        <Box sx={{ display: 'flex', mt: 5 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    flex: 1,
                                    m: 1,
                                    color: 'white',
                                    backgroundColor: 'pink',
                                    '&:hover': { backgroundColor: 'pink' },
                                    height: '50px'
                                }}
                                onClick={() => handleAddToCart(singleProduct.proID)}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ flex: 1, height: '50px', m: 1 }}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default SingleProdCard;
