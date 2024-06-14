


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trash2, ArrowLeft } from 'react-feather';
// import axios from 'axios';
// import { Container, Box, Typography, Grid, IconButton, Button, Card, CardContent, CardMedia, Avatar } from '@mui/material';
// import Navbar from '../Navbar/Navbar';
// import { styled } from '@mui/material/styles';
// import BackToShop from '../BackToShop/BackToShop';

// const StyledButton = styled(Button)({
//     backgroundColor: "pink",
//     '&:hover': {
//         backgroundColor: "rgb(214, 210, 199)",
//         color: "grey",
//     },
// });


// function CartCards() {

//     const navigate = useNavigate();

//     const storageResponse = localStorage.getItem("userdata");
//     let customer = JSON.parse(storageResponse);
//     let { cstId } = customer;
//     const [products, setProducts] = useState([]);
//     const [count, setCount] = useState([]);
//     const [hovered, setHovered] = useState(false);
//     const [cartData, setCartData] = useState([]);
//     const [payload, setPayload] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = cstId && await axios.get(`http://localhost:3008/api/v1/cart/getcart/${cstId}`);
//                 setProducts(res.data.obj);
//                 setCount(res.data.obj);
//             } catch (error) {
//                 console.error('Error getting products', error);
//             }
//         };
//         fetchProducts();
//     }, [cstId]);

//     const handleAddClick = (index) => {
//         setCount((prevCount) => {
//             let updatedCounter = [...prevCount];
//             updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) + 1;
//             updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
//             return updatedCounter;
//         });
//     }

//     const handleMinusClick = (index) => {
//         setCount((prevCount) => {
//             let updatedCounter = [...prevCount];
//             updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) - 1;
//             updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
//             return updatedCounter;
//         });
//     }

//     const updateProductQuantity = async (proID, updatedVal, custId) => {
//         try {
//             const res = count && await axios.post(`http://localhost:3008/api/v1/cart/updatecart/${custId}/${proID}`, { updateQuan: updatedVal });
//         } catch (error) {
//             console.error('Error Updating products', error);
//         }
//     }

//     const newarr = count.map((e) => {
//         return e.price;
//     })
//     let TotalPrice = newarr.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);

//     const deleteCustomerCart = async (custId, proID) => {
//         try {
//             const res = await axios.delete(`http://localhost:3008/api/v1/cart/deletecart/${custId}/${proID}`);
//             window.location.reload();
//         } catch (error) {
//             console.error('Error in deleting card', error);
//         }
//     }

//     const submitCart = () => {
//         const newData = [];
//         products.forEach((product) => {
//             const { proName, TotalQuantity, price } = product;
//             const cartItem = { proName, TotalQuantity, price };
//             newData.push(cartItem);
//         });
//         setCartData(newData);
//     }

//     const confirmOrder = () => {
//         const newData = [];
//         count.forEach((product) => {
//             const { custId, proID, price, TotalQuantity } = product;
//             const cartItem = { custId, proID, price, TotalQuantity };
//             newData.push(cartItem);
//         });
//         setPayload(newData);
//     }

//     useEffect(() => {
//         const postDataToOrder = async () => {
//             try {
//                 const res = await axios.post('http://localhost:3008/api/v1/order/createorder', payload);
//                 navigate('/order');
//             } catch (error) {
//                 console.error('Error in sending Data to Order', error);
//             }
//         }
//         if (payload.length > 0) {
//             postDataToOrder();
//         }
//     }, [payload]);

//     return (
//         <>
//             <Navbar sum={products.length} />
//             {!customer && (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//                     <Container>
//                         <Typography variant="h4">Your account is not currently logged in.</Typography>
//                         <Typography>Please login to your account.</Typography>
//                         <StyledButton component={Link} to={'/login'}>
//                             Login
//                         </StyledButton>
//                     </Container>
//                 </Box>
//             )}

//             {customer && (
//                 <>
//                     <Container sx={{ mt: 4 }}>
//                         <Typography variant="h3" color="textPrimary"> Your Shopping Cart!</Typography>
//                         <Grid container spacing={2}>
//                             <Grid item xs={8} sx={{ mt: 5 }} >
//                                 {/* <Container sx={{ mt: 5, boxShadow: 3 , backgroundColor:'pink'}}> */}
//                                 {products.map((product, index) => (
//                                     <Grid container key={index} alignItems="center" sx={{ mb: 3, p: 2, boxShadow: 1, backgroundColor: "#f5f5f5" }}>
//                                         <Grid item xs={2}>
//                                             <Avatar
//                                                 src={product.prodImages}
//                                                 sx={{ width: 80, height: 80, borderRadius: '50%' }}
//                                             />
//                                         </Grid>
//                                         <Grid item xs={4}>
//                                             <Typography className="fw-bold">{product.proName}</Typography>
//                                             <Typography color="error">Rs.{product.price}</Typography>
//                                         </Grid>

//                                         <Grid item xs={4} textAlign="right">
//                                             <Box display="flex" alignItems="center" justifyContent="flex-end">
//                                                 <StyledButton onClick={() => handleMinusClick(index)}>-</StyledButton>
//                                                 <Box mx={1}>{product.TotalQuantity}</Box>
//                                                 <StyledButton onClick={() => handleAddClick(index)}>+</StyledButton>
//                                             </Box>
//                                         </Grid>
//                                         <Grid item xs={2} textAlign="center">
//                                             <IconButton onClick={() => deleteCustomerCart(product.custId, product.proID)}>
//                                                 <Trash2 />
//                                             </IconButton>
//                                         </Grid>
//                                     </Grid>
//                                 ))}
//                                 {/* </Container> */}
//                             </Grid>

//                             {cartData.length > 0 && (
//                                 <Grid item xs={4} display="flex" justifyContent="end">
//                                     <Container sx={{ mt: 1, boxShadow: 3 }}>
//                                         <Typography variant="h3" color="black">Cart Details</Typography>
//                                         <hr />
//                                         <Card sx={{ boxShadow: 'none' }}>
//                                             {cartData.map((e, index) => (
//                                                 <CardContent key={index} sx={{ height: 45 }}>
//                                                     <Typography>{e.proName} X {e.TotalQuantity} = {e.price}</Typography>
//                                                 </CardContent>
//                                             ))}
//                                             <CardContent sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
//                                                 <Typography>Total</Typography>
//                                                 <Typography>Rs. {TotalPrice}</Typography>
//                                             </CardContent>
//                                             <StyledButton variant="contained" fullWidth onClick={confirmOrder}>
//                                                 Confirm Order
//                                             </StyledButton>
//                                         </Card>
//                                     </Container>
//                                 </Grid>
//                             )}
//                         </Grid>
//                         <Grid container>
//                             <Grid item xs={5}>
//                                 <StyledButton
//                                     variant="contained"
//                                     onClick={submitCart}
//                                     style={{
//                                         display: cartData.length > 0 ? 'none' : 'block',
//                                     }}
//                                 >
//                                     Submit Cart!
//                                 </StyledButton>
//                             </Grid>
//                         </Grid>
//                     </Container>

//                     <BackToShop />
//                 </>
//             )}
//         </>
//     )
// }

// export default CartCards;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft } from 'react-feather';
import axios from 'axios';
import { Container, Box, Typography, Grid, IconButton, Button, Card, CardContent, Avatar } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { styled } from '@mui/material/styles';
import BackToShop from '../BackToShop/BackToShop';
import { yellow } from '@mui/material/colors';

const StyledButton = styled(Button)({
    backgroundColor: "pink",
    '&:hover': {
        backgroundColor: "rgb(214, 210, 199)",
        color: "grey",
    },
});

function CartCards() {
    const navigate = useNavigate();

    const storageResponse = localStorage.getItem("userdata");
    let customer = JSON.parse(storageResponse);
    let { cstId } = customer;
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState([]);
    const [hovered, setHovered] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = cstId && await axios.get(`http://localhost:3008/api/v1/cart/getcart/${cstId}`);
                setProducts(res.data.obj);
                setCount(res.data.obj);
            } catch (error) {
                console.error('Error getting products', error);
            }
        };
        fetchProducts();
    }, [cstId]);

    const handleAddClick = (index) => {
        setCount((prevCount) => {
            let updatedCounter = [...prevCount];
            updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) + 1;
            updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
            return updatedCounter;
        });
    }

    const handleMinusClick = (index) => {
        setCount((prevCount) => {
            let updatedCounter = [...prevCount];
            updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) - 1;
            updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
            return updatedCounter;
        });
    }

    const updateProductQuantity = async (proID, updatedVal, custId) => {
        try {
            const res = count && await axios.post(`http://localhost:3008/api/v1/cart/updatecart/${custId}/${proID}`, { updateQuan: updatedVal });
        } catch (error) {
            console.error('Error Updating products', error);
        }
    }

    const newarr = count.map((e) => {
        return e.price;
    })
    let TotalPrice = newarr.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);

    const deleteCustomerCart = async (custId, proID) => {
        try {
            const res = await axios.delete(`http://localhost:3008/api/v1/cart/deletecart/${custId}/${proID}`);
            window.location.reload();
        } catch (error) {
            console.error('Error in deleting card', error);
        }
    }

    const submitCart = () => {
        const newData = [];
        products.forEach((product) => {
            const { proName, TotalQuantity, price } = product;
            const cartItem = { proName, TotalQuantity, price };
            newData.push(cartItem);
        });
        setCartData(newData);
    }

    const confirmOrder = () => {
        const newData = [];
        count.forEach((product) => {
            const { custId, proID, price, TotalQuantity } = product;
            const cartItem = { custId, proID, price, TotalQuantity };
            newData.push(cartItem);
        });
        setPayload(newData);
    }

    useEffect(() => {
        const postDataToOrder = async () => {
            try {
                const res = await axios.post('http://localhost:3008/api/v1/order/createorder', payload);
                navigate('/order');
            } catch (error) {
                console.error('Error in sending Data to Order', error);
            }
        }
        if (payload.length > 0) {
            postDataToOrder();
        }
    }, [payload]);

    return (
        <>
            <Navbar sum={products.length} />
            {!customer && (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Container>
                        <Typography variant="h4">Your account is not currently logged in.</Typography>
                        <Typography>Please login to your account.</Typography>
                        <StyledButton component={Link} to={'/login'}>
                            Login
                        </StyledButton>
                    </Container>
                </Box>
            )}

            {customer && (
                <>
                    <Container sx={{ mt: 4 }}>
                        <Typography variant="h3" color="textPrimary"> Your Shopping Cart!</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8} sx={{ mt: 5 }} >
                                {products.map((product, index) => (
                                    <Grid container key={index} alignItems="center" sx={{ mb: 3, p: 2, boxShadow: 1, backgroundColor: "#f5f5f5" }}>
                                        <Grid item xs={12} sm={2}>
                                            <Avatar
                                                src={product.prodImages}
                                                sx={{ width: 80, height: 80, borderRadius: '50%' }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Typography className="fw-bold">{product.proName}</Typography>
                                            <Typography color="error">Rs.{product.price}</Typography>
                                        </Grid>

                                        <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'right' }}>
                                            <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-end', backgroundColor: 'red' }}>
                                                <StyledButton onClick={() => handleMinusClick(index)}>-</StyledButton>
                                                <Box mx={1}>{product.TotalQuantity}</Box>
                                                <StyledButton onClick={() => handleAddClick(index)}>+</StyledButton>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={2} textAlign={{ xs: 'center', sm: 'center' }}>
                                            <IconButton onClick={() => deleteCustomerCart(product.custId, product.proID)}>
                                                <Trash2 />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>

                            {cartData.length > 0 && (
                                <Grid item xs={12} md={4} display="flex" justifyContent="end">
                                    <Container sx={{ mt: 1, boxShadow: 3 }}>
                                        <Typography variant="h3" color="black">Cart Details</Typography>
                                        <hr />
                                        <Card sx={{ boxShadow: 'none' }}>
                                            {cartData.map((e, index) => (
                                                <CardContent key={index} sx={{ height: 45 }}>
                                                    <Typography>{e.proName} X {e.TotalQuantity} = {e.price}</Typography>
                                                </CardContent>
                                            ))}
                                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                                <Typography>Total</Typography>
                                                <Typography>Rs. {TotalPrice}</Typography>
                                            </CardContent>
                                            <StyledButton variant="contained" fullWidth onClick={confirmOrder}>
                                                Confirm Order
                                            </StyledButton>
                                        </Card>
                                    </Container>
                                </Grid>
                            )}
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <StyledButton
                                    variant="contained"
                                    onClick={submitCart}
                                    style={{
                                        display: cartData.length > 0 ? 'none' : 'block',
                                    }}
                                >
                                    Submit Cart!
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Container>

                    <BackToShop />
                </>
            )}
        </>
    )
}

export default CartCards;
