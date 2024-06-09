// // import React from 'react';
// // import { Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

// // function ShopWithUs() {

// //     const images = [
// // {
// //     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/smart%20watch.jpg?alt=media&token=5cafd571-4ce2-4010-95a0-bd2a64857afb',
// //     description: 'Smart Watch'
// // },
// // {
// //     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/smart%20phone.jpg?alt=media&token=61e70ab4-42fe-4b79-a97a-d8487e0c8d3d',
// //     description: 'Smart Phone'
// // },
// // {
// //     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/watch.jpg?alt=media&token=69ea54e5-a925-4a98-8e1d-f3d0bf56f735',
// //     description: 'Casual'
// // }
// // ,
// // {
// //     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/men%20dress.jpg?alt=media&token=8a58a40f-c5a4-41c9-b689-db76e1afe49e',
// //     description: 'Men Dress'
// // },
// // {
// //     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/girls%20dress.jpg?alt=media&token=578c8033-15cd-4a11-9a21-167e054dac23',
// //     description: 'Woman Dress'
// // },
// // {
// //     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/beauty%20products.jpg?alt=media&token=3c29842d-d95e-49e0-ac88-1e3b416f83aa',
// //     description: 'Beauty Products'
// // }
// //     ];



// //     return (
// //         <Box sx={{ p: 2, pl: 10, backgroundColor: '#f5f5f5', mb: 5 }}>
// //             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
// //                 Shop with Us
// //             </Typography>

// //             <Grid container spacing={3}>
// //                 {images.map((image, index) => (
// //                     <Grid item xs={12} sm={6} md={1.9} key={index}>
// //                         {/* <Card sx={{ height: '80%', mt: 5, backgroundColor:'#f5f5f5' }}>
// //                             <CardMedia
// //                                 component="img"
// //                                 height="200"
// //                                 image={image.url}
// //                                 alt={image.description}
// //                             />
// //                             <CardContent>
// //                                 <Typography gutterBottom variant="subtitle1"
// //                                 >
// //                                     {image.description}
// //                                 </Typography>
// //                             </CardContent>
// //                         </Card> */}

// //                         <Card sx={{ height: '80%', mt: 5, backgroundColor: '#f5f5f5' }}>
// //                             <CardMedia
// //                                 component="img"
// //                                 height="200"
// //                                 image={image.url}
// //                                 alt={image.description}
// //                             />
// //                             <CardContent sx={{ textAlign: 'center' }}> {/* Added style */}
// //                                 <Typography gutterBottom variant="subtitle1">
// //                                     {image.description}
// //                                 </Typography>
// //                             </CardContent>
// //                         </Card>
// //                     </Grid>
// //                 ))}
// //             </Grid>
// //         </Box>
// //     );
// // }

// // export default ShopWithUs;




// import React from 'react';
// import { Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

// function ShopWithUs() {

//     const images = [
// {
//     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/smart%20watch.jpg?alt=media&token=5cafd571-4ce2-4010-95a0-bd2a64857afb',
//     description: 'Smart Watch'
// },
// {
//     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/smart%20phone.jpg?alt=media&token=61e70ab4-42fe-4b79-a97a-d8487e0c8d3d',
//     description: 'Smart Phone'
// },
// {
//     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/watch.jpg?alt=media&token=69ea54e5-a925-4a98-8e1d-f3d0bf56f735',
//     description: 'Casual'
// },
// {
//     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/men%20dress.jpg?alt=media&token=8a58a40f-c5a4-41c9-b689-db76e1afe49e',
//     description: 'Men Dress'
// },
// {
//     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/girls%20dress.jpg?alt=media&token=578c8033-15cd-4a11-9a21-167e054dac23',
//     description: 'Woman Dress'
// },
// {
//     url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/beauty%20products.jpg?alt=media&token=3c29842d-d95e-49e0-ac88-1e3b416f83aa',
//     description: 'Beauty Products'
// }
//     ];

//     return (
//         <Box sx={{ p: 2, pl: 10, backgroundColor: '#f5f5f5', mb: 5 }}>
//             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                 Shop with Us
//             </Typography>

//             <Grid container spacing={3}>
//                 {images.map((image, index) => (
//                     <Grid item xs={12} sm={6} md={1.9} key={index}>
//                         <Card sx={{ height: '80%', mt: 5, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'translateY(-5px)' } }}> {/* Apply hover transform and transition */}
//                             <CardMedia
//                                 component="img"
//                                 height="200"
//                                 image={image.url}
//                                 alt={image.description}
//                             />
//                             <CardContent sx={{ textAlign: 'center' }}>
//                                 <Typography gutterBottom variant="subtitle1">
//                                     {image.description}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// }
// export default ShopWithUs;



import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

function ShopWithUs() {

    const images = [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/smart%20watch.jpg?alt=media&token=5cafd571-4ce2-4010-95a0-bd2a64857afb',
            description: 'Smart Watch'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/smart%20phone.jpg?alt=media&token=61e70ab4-42fe-4b79-a97a-d8487e0c8d3d',
            description: 'Smart Phone'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/watch.jpg?alt=media&token=69ea54e5-a925-4a98-8e1d-f3d0bf56f735',
            description: 'Casual'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/men%20dress.jpg?alt=media&token=8a58a40f-c5a4-41c9-b689-db76e1afe49e',
            description: 'Men Dress'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/girls%20dress.jpg?alt=media&token=578c8033-15cd-4a11-9a21-167e054dac23',
            description: 'Woman Dress'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/beauty%20products.jpg?alt=media&token=3c29842d-d95e-49e0-ac88-1e3b416f83aa',
            description: 'Beauty Products'
        }
    ];

    return (
        <Box sx={{ p: 2, pl: 10, backgroundColor: '#f5f5f5', mb: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Shop with Us
            </Typography>

            <Grid container spacing={3}>
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={1.9} key={index}>
                        <Card sx={{ height: '80%', mt: 5, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(0.98)' } }}> {/* Apply hover transform and transition */}
                            <CardMedia
                                component="img"
                                height="200"
                                image={image.url}
                                alt={image.description}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="subtitle1">
                                    {image.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ShopWithUs;
