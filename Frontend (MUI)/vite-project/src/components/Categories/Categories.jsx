

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
    Divider,
    CardActionArea,
} from '@mui/material';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('http://localhost:3008/api/v1/productsCategory/all-categories');
                setCategories(res.data.obj[0]);
            } catch (error) {
                console.error('Error getting categories', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <>
            <Box sx={{ p: 2, pl: 8, backgroundColor: '#f5f5f5', mb: 5, mt: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 5 }}>
                    Categories
                </Typography>
                <Divider />

                <Grid container spacing={3}>
                    {Array.isArray(categories) &&
                        categories.map((category) => (
                            <Grid item xs={12} sm={6} md={4} key={category.proCatId}>
                                <CardActionArea sx={{ cursor: 'pointer' }}>
                                    <Card sx={{ width: 240, marginBottom: 2, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={category.image}
                                            title={category.catName}
                                        />
                                        <CardContent sx={{ textAlign: 'center', color: 'black' }}>
                                            <Link to={`/products/${category.proCatId}`} style={{ textDecoration: 'none' }}>
                                                <Typography variant="body2" component="div">
                                                    {category.catName}
                                                </Typography>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </>
    );
}

export default Categories;
