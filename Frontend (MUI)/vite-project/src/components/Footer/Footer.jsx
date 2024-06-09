

import React from 'react';
import { Box, Grid, Typography, Avatar, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { centeredTextStyle, centeredSocialIcons } from './Style';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', p: 5 }} >
            <Grid container spacing={2}  >
                <Grid item xs={12} sm={12} md={7} sx={{ backgroundColor: '#f5f5f5', mb: 3 }}>
                    <Grid
                        container
                        sx={{
                            ...centeredTextStyle
                        }}
                    >
                        <Grid item xs={4}>
                            <Box>
                                <Typography variant="p" gutterBottom>
                                    Blogs
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Typography variant="p" gutterBottom>
                                    FAQs
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Typography variant="p" gutterBottom>
                                    Contact Us
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    sx={{
                        ...centeredSocialIcons
                    }}
                >
                    <Typography variant="p" gutterBottom>
                        Follow Us
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{ bgcolor: '#3b5998' }}>
                            <FacebookIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: '#E1306C' }}>
                            <InstagramIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: '#1DA1F2' }}>
                            <TwitterIcon />
                        </Avatar>
                    </Stack>
                </Grid>

                <Typography sx={{ p: 4, color: 'grey' }}>
                    ©2024 All Rights Reserverd. Made with by Colorlib & distributed by ThemeWagon
                </Typography>
            </Grid>
        </Box>
    )
}

export default Footer;
