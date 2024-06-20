
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Box,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Divider
} from '@mui/material';
import numeral from 'numeral';



function Order() {
    const storageResponse = localStorage.getItem("userdata");
    let customer = JSON.parse(storageResponse);
    console.log("customer", customer);
    let { cstId } = customer;

    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`http://localhost:3008/api/v1/order/getorderNo/${cstId}`);
                console.log("res", res.data.obj);
                setOrderList(res.data.obj);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }
        fetchOrders();
    }, []);

    const [orderDetails, setOrderDetails] = useState([]);
    console.log("orderdetails", orderDetails);
    const showOrderData = async (ordNo) => {
        try {
            const res = await axios.get(`http://localhost:3008/api/v1/order/getorderdata/${ordNo}`);
            console.log("order deatils  res", res.data.obj);
            setOrderDetails(res.data.obj);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    const newarr = orderDetails.map((e) => {
        return e.price;
    })
    let TotalPrice = newarr.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);
    console.log("TotalPrice:", TotalPrice);

    return (
        <>
            <Container>
                <Typography variant="h5"
                    sx={{ color: 'deeppink' }} gutterBottom>
                    Your Order Details!
                </Typography>
                <Box display="flex" mt={5} backgroundColor={"#f0f0f0"}>
                    <Box bgcolor="#f0f0f0" >
                        <Typography variant="h6"
                            sx={{ color: 'deeppink' }} gutterBottom>
                            Order Id!
                        </Typography>
                        <Divider />
                        <List>
                            {Array.isArray(orderList) &&
                                orderList.map((e) => (
                                    <ListItem key={e.ordNo}>
                                        <ListItemButton onClick={() => showOrderData(e.ordNo)}>
                                            <ListItemText primary={e.ordNo} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                        </List>
                    </Box>
                    <Box flex={1} ml={2}>
                        <Container>
                            {Array.isArray(orderDetails) && orderDetails.map((e, index) => (
                                <Card key={index} sx={{ mb: 2, display: 'flex', alignItems: 'center', p: 2, backgroundColor: "#f0f0f0" }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 110, height: 80 }}
                                        image={e.prodImages}
                                        alt={`Product ${e.prodId}`}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" fontWeight="bold">
                                            Total Quantity: {e.totalQty}
                                        </Typography>
                                        <Typography variant="body1" color="error">
                                            Total Amount: {numeral(e.price).format('0,0')}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Container>
                        {orderDetails.length > 0 && (
                            <Card sx={{ p: 2, mt: 2, display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                <Typography variant="body1" color="error">
                                    Total Amount: {numeral(TotalPrice).format('0,0')}
                                </Typography>
                            </Card>
                        )}
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Order;
