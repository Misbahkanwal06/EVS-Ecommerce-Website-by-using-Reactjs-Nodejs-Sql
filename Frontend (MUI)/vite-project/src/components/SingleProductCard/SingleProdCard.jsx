



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Card, CardContent, Typography, Button } from '@mui/material';
// import ImageZoom from '../ImageZoomEffect/ImageZoom';
// import numeral from 'numeral';


// const SingleProdCard = () => {
//     const [singleProduct, setSingleProduct] = useState({});
//     const { prodId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSingleProduct = async () => {
//             try {
//                 const url = `http://localhost:3008/api/v1/products/single-product/${prodId}`;
//                 const res = await axios.get(url);
//                 setSingleProduct(res && res.data.obj);
//             } catch (error) {
//                 console.error('Error getting products', error);
//             }
//         };
//         fetchSingleProduct();
//     }, [prodId]);

//     const handleCancel = () => {
//         navigate(`/products/${singleProduct.categoryId}`);
//     };

//     const handleAddToCart = (prodId) => {
//         const storageResponse = localStorage.getItem("userdata");
//         let customer = JSON.parse(storageResponse);
//         let custId = customer && customer.cstId;
//         let quantity = 1;
//         localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }));
//         if (!customer) navigate('/signup');
//         else {
//             const payloads = { prodId, custId, quantity };
//             const addToCartBtn = async () => {
//                 try {
//                     const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads);
//                     // res && res.data &&
//                     navigate('/cart');
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
//                             {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
//                         </Typography>
//                         <Typography component="div" variant="body1" sx={{ textDecoration: 'line-through', mt: 2 }}>
//                             {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
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
//                                 onClick={handleCancel}
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





// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
// import ImageZoom from '../ImageZoomEffect/ImageZoom';
// import numeral from 'numeral';

// const SingleProdCard = () => {
//     const [singleProduct, setSingleProduct] = useState({});
//     const { prodId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSingleProduct = async () => {
//             try {
//                 const url = `http://localhost:3008/api/v1/products/single-product/${prodId}`;
//                 const res = await axios.get(url);
//                 setSingleProduct(res && res.data.obj);
//             } catch (error) {
//                 console.error('Error getting product', error);
//             }
//         };
//         fetchSingleProduct();
//     }, [prodId]);

//     const handleCancel = () => {
//         navigate(`/products/${singleProduct.categoryId}`);
//     };

//     const handleAddToCart = (prodId) => {
//         const storageResponse = localStorage.getItem('userdata');
//         const customer = JSON.parse(storageResponse);
//         const custId = customer && customer.cstId;
//         const quantity = 1;
//         localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }));
//         if (!customer) navigate('/signup');
//         else {
//             const payloads = { prodId, custId, quantity };
//             const addToCartBtn = async () => {
//                 try {
//                     await axios.post('http://localhost:3008/api/v1/cart/create', payloads);
//                     navigate('/cart');
//                 } catch (error) {
//                     console.error('Error adding to cart', error);
//                 }
//             };
//             addToCartBtn();
//         }
//     };

//     return (
//         <Box p={2} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//             <Grid container justifyContent="center">
//                 <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
//                     <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//                         <Box sx={{ display: 'flex', justifyContent: 'center', p: 1.5, }}>
//                             <ImageZoom src={singleProduct.prodImages} alt="Product Image" sx={{ maxWidth: '100%' }} />
//                         </Box>
//                         <CardContent sx={{ flex: 1 }}>
//                             <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>
//                                 {`Women Collection Of ${singleProduct.proName}`}
//                             </Typography>
//                             <Typography variant="h5" sx={{ color: 'red', textAlign: 'center', mt: 2 }}>
//                                 {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
//                             </Typography>
//                             <Typography variant="body1" sx={{ textDecoration: 'line-through', textAlign: 'center', mt: 2 }}>
//                                 {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
//                             </Typography>
//                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//                                 <Button
//                                     variant="contained"
//                                     sx={{
//                                         color: 'white',
//                                         backgroundColor: 'pink',
//                                         '&:hover': { backgroundColor: 'pink' },
//                                         height: '50px',
//                                         flex: '1 1 auto',
//                                         maxWidth: '200px',
//                                         m: 1
//                                     }}
//                                     onClick={() => handleAddToCart(singleProduct.proID)}
//                                 >
//                                     Add to Cart
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     sx={{ height: '50px', flex: '1 1 auto', maxWidth: '200px', m: 1 }}
//                                     onClick={handleCancel}
//                                 >
//                                     Cancel
//                                 </Button>
//                             </Box>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default SingleProdCard;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
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
                console.error('Error getting product', error);
            }
        };
        fetchSingleProduct();
    }, [prodId]);

    const handleCancel = () => {
        navigate(`/products/${singleProduct.categoryId}`);
    };

    const handleAddToCart = (prodId) => {
        const storageResponse = localStorage.getItem('userdata');
        const customer = JSON.parse(storageResponse);
        const custId = customer && customer.cstId;
        const quantity = 1;
        localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }));
        if (!customer) navigate('/signup');
        else {
            const payloads = { prodId, custId, quantity };
            const addToCartBtn = async () => {
                try {
                    await axios.post('http://localhost:3008/api/v1/cart/create', payloads);
                    navigate('/cart');
                } catch (error) {
                    console.error('Error adding to cart', error);
                }
            };
            addToCartBtn();
        }
    };

    return (
        <Box p={2} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10} lg={8}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', p: 1.5 }}>
                        <Grid container spacing={2}>
                            {/* Image Section */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <ImageZoom src={singleProduct.prodImages} alt="Product Image" sx={{ maxWidth: '100%' }} />
                                </Box>
                            </Grid>
                            {/* Product Details Section */}
                            <Grid item xs={12} md={6}>
                                <CardContent>
                                    <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>
                                        {`Women Collection Of ${singleProduct.proName}`}
                                    </Typography>
                                    <Typography variant="h5" sx={{ color: 'red', textAlign: 'center', mt: 2 }}>
                                        {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
                                    </Typography>
                                    <Typography variant="body1" sx={{ textDecoration: 'line-through', textAlign: 'center', mt: 2 }}>
                                        {`Rs. ${numeral(singleProduct.price).format('0,0')}`}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                color: 'white',
                                                backgroundColor: 'pink',
                                                '&:hover': { backgroundColor: 'pink' },
                                                height: '50px',
                                                flex: '1 1 auto',
                                                maxWidth: '200px',
                                                m: 1
                                            }}
                                            onClick={() => handleAddToCart(singleProduct.proID)}
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{ height: '50px', flex: '1 1 auto', maxWidth: '200px', m: 1 }}
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleProdCard;
