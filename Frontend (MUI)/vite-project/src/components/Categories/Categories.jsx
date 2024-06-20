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
        <Box sx={{ p: 2, pl: 6, backgroundColor: '#f5f5f5', mb: 5, mt: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 5 }}>
                Categories
            </Typography>

            <Grid container spacing={3}>
                {Array.isArray(categories) &&
                    categories.map((category) => (
                        <Grid item xs={12} sm={6} md={4} key={category.proCatId}>
                            <CardActionArea sx={{ cursor: 'pointer' }}>
                                <Link to={`/products/${category.proCatId}`} style={{ textDecoration: 'none' }}>
                                    <Card sx={{  marginBottom: 2, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', color: 'black' }}>
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={category.image}
                                            title={category.catName}
                                        />
                                        <CardContent sx={{ textAlign: 'center', color: 'black' }}>
                                            <Typography variant="body2" component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
                                                {category.catName}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>

                            </CardActionArea>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}

export default Categories;
