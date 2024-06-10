// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import {
// //     Grid,
// //     Card,
// //     CardActionArea,
// //     CardMedia,
// //     CardContent,
// //     Typography,
// //     Button,
// //     Box,
// //     CardHeader,
// // } from '@mui/material';

// // function ProductCards() {
// //     const [products, setProducts] = useState([]);
// //     const { selectedProCatId } = useParams();
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         const fetchProducts = async () => {
// //             try {
// //                 const res = await axios.get(`http://localhost:3008/api/v1/products/all-products/${selectedProCatId}`);
// //                 setProducts(res.data.obj);
// //             } catch (error) {
// //                 console.error('Error getting products', error);
// //             }
// //         };
// //         fetchProducts();
// //     }, [selectedProCatId]);

// //     const handleAddToCart = (prodId) => {
// //         const storageResponse = localStorage.getItem("userdata");
// //         let customer = JSON.parse(storageResponse);
// //         let custId = customer && customer.cstId;
// //         let quantity = 1;
// //         localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }))
// //         if (!customer) navigate('/signup');
// //         else {
// //             const payloads = { prodId, custId, quantity };
// //             console.log("payloads", payloads);
// //             const addToCartBtn = async () => {
// //                 try {
// //                     const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads)
// //                     console.log("addtocartdata", res.data);
// //                     navigate('/cart');
// //                 } catch (error) {
// //                     console.error('Error getting categories', error);
// //                 }
// //             };
// //             addToCartBtn();
// //         }
// //     };

// //     return (
// //         <Grid container spacing={2}>
// //             {products.map((product) => (
// //                 <Grid item xs={12} sm={6} md={4} key={product.proID}>
// //                     <Card>
// //                         <CardActionArea onClick={() => navigate(`/product/${product.proID}`)}>
// //                             <CardMedia
// //                                 component="img"
// //                                 height="140"
// //                                 image={product.prodImages}
// //                                 alt={product.proName}
// //                             />
// //                             <CardContent>
// //                                 {/* Removed CardTitle, replaced with custom heading */}
// //                                 <Typography variant="h5" component="div">
// //                                     {product.proName}
// //                                 </Typography>
// //                                 <Typography variant="body2" color="text.secondary">
// //                                     {product.price}
// //                                 </Typography>
// //                             </CardContent>
// //                         </CardActionArea>
// //                         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// //                             <Button variant="contained" size="small" onClick={() => handleAddToCart(product.proID)}>
// //                                 Add to Cart
// //                             </Button>
// //                         </Box>
// //                     </Card>
// //                 </Grid>
// //             ))}
// //         </Grid>
// //     );
// // }
// // export default ProductCards;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//     Grid,
//     Card,
//     CardActionArea,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     Box,
//     CardHeader,
// } from '@mui/material';

// function ProductCards() {
//     const [products, setProducts] = useState([]);
//     const { selectedProCatId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:3008/api/v1/products/all-products/${selectedProCatId}?min=${2}&max=${2}`);
//                 setProducts(res.data.obj);
//                 console.log("price", res.data.obj);
//             } catch (error) {
//                 console.error('Error getting products', error);
//             }
//         };

//         fetchProducts();
//     }, [selectedProCatId]);

//     const handleAddToCart = (prodId) => {
//         const storageResponse = localStorage.getItem("userdata");
//         let customer = JSON.parse(storageResponse);
//         let custId = customer && customer.cstId;
//         let quantity = 1;
//         localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }))

//         if (!customer) navigate('/signup');
//         else {
//             const payloads = { prodId, custId, quantity };
//             console.log("payloads", payloads);

//             const addToCartBtn = async () => {
//                 try {
//                     const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads)
//                     console.log("addtocartdata", res.data);
//                     navigate('/cart');
//                 } catch (error) {
//                     console.error('Error getting categories', error);
//                 }
//             };
//             addToCartBtn();
//         }
//     };


//     return (
//         <Grid container spacing={4}>
//             {products.map((product) => (
//                 <Grid item xs={12} sm={4} md={3} key={product.proID}>
//                     <Card sx={{ '&:hover': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}> {/* Added box-shadow on hover */}
//                         <CardActionArea onClick={() => navigate(`/product/${product.proID}`)}>
//                             <CardMedia
//                                 component="img"
//                                 height="230"
//                                 image={product.prodImages}
//                                 alt={product.proName}
//                             />
//                             <CardContent>
//                                 <Typography variant="p" component="div"
//                                     sx={{ fontWeight: 'bold' }}>
//                                     {product.proName}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary"
//                                     sx={{ color: 'red' }}>
//                                     Rs. {product.price}
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
//                         <Box sx={{
//                             display: 'flex', justifyContent: 'center', backgroundColor: 'pink',

//                         }}> {/* Center the button */}
//                             <Button size="block"
//                                 sx={{ color: 'white', '&:hover': { backgroundColor: 'pink' } }}
//                                 onClick={() => handleAddToCart(product.proID)}>
//                                 Add to Cart
//                             </Button>
//                         </Box>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// }

// export default ProductCards;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

function ProductCards({ min, max }) {
    const [products, setProducts] = useState([]);
    const { selectedProCatId } = useParams();
    const navigate = useNavigate();

    console.log("in productCards", min, max);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = `http://localhost:3008/api/v1/products/all-products/${selectedProCatId}` +
                    (min && max ? `?min=${min}&max=${max}` : '');
                const res = await axios.get(url);
                // const res = await axios.get(`http://localhost:3008/api/v1/products/all-products/${selectedProCatId}?min=${min}&max=${max}`);
                setProducts(res.data.obj);
                console.log("price", res.data.obj);
            } catch (error) {
                console.error('Error getting products', error);
            }
        };

        fetchProducts();
    }, [selectedProCatId, min, max]);

    const handleAddToCart = (prodId) => {
        const storageResponse = localStorage.getItem("userdata");
        let customer = JSON.parse(storageResponse);
        let custId = customer && customer.cstId;
        let quantity = 1;
        localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }));

        if (!customer) navigate('/signup');
        else {
            const payloads = { prodId, custId, quantity };
            console.log("payloads", payloads);

            const addToCartBtn = async () => {
                try {
                    const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads);
                    console.log("addtocartdata", res.data);
                    navigate('/cart');
                } catch (error) {
                    console.error('Error getting categories', error);
                }
            };
            addToCartBtn();
        }
    };

    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={12} sm={4} md={3} key={product.proID}>
                    <Card sx={{ '&:hover': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}>
                        <CardActionArea onClick={() => navigate(`/product/${product.proID}`)}>
                            <CardMedia
                                component="img"
                                height="230"
                                image={product.prodImages}
                                alt={product.proName}
                            />
                            <CardContent>
                                <Typography variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                                    {product.proName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: 'red' }}>
                                    Rs. {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'pink' }}>
                            <Button size="block" sx={{ color: 'white', '&:hover': { backgroundColor: 'pink' } }} onClick={() => handleAddToCart(product.proID)}>
                                Add to Cart
                            </Button>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductCards;
