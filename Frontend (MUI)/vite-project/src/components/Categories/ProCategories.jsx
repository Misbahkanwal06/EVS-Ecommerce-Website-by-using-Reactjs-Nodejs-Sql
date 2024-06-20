

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Box, Card, CardHeader, Avatar, IconButton } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// function ProCategories() {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await axios.get('http://localhost:3008/api/v1/productsCategory/all-categories');
//                 setCategories(res.data.obj[0]);
//             } catch (error) {
//                 console.error('Error getting categories', error);
//             }
//         };
//         fetchCategories();
//     }, []);


//     return (
//         <>

//             <Box component="section" sx={{ p: 2, backgroundColor: '#f5f5f5', height: 'auto' }}>
//                 {Array.isArray(categories) &&
//                     categories.map((e) => (
//                         <Card sx={{ maxWidth: 350, mb: 3 }} key={e.proCatId}>
//                             <Link to={`/products/${e.proCatId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <CardHeader
//                                     avatar={
//                                         <Avatar src={e.image} alt={e.catName} aria-label="category" />
//                                     }
//                                     action={
//                                         <IconButton aria-label="settings">
//                                             <ExpandMoreIcon />
//                                         </IconButton>
//                                     }
//                                     title={e.catName}
//                                 />
//                             </Link>
//                         </Card>
//                     ))}
//             </Box>
//         </>
//     )
// }
// export default ProCategories;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListItem, ListItemText, Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

function ProCategories({ setSidebarCategories }) {
    const [categories, setCategories] = useState([]);

    console.log("categories", categories);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('http://localhost:3008/api/v1/productsCategory/all-categories');
                setCategories(res.data.obj[0]);
                setSidebarCategories(res.data.obj[0]);
            } catch (error) {
                console.error('Error getting categories', error);
            }
        };
        fetchCategories();
    }, [setSidebarCategories]);

    
    return (
        <>
            {categories.map((category) => (
                <React.Fragment key={category.proCatId}>
                    <Link to={`/products/${category.proCatId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItem button sx={{ pl: 4 }}>
                            <Avatar src={category.image} alt={category.catName} />
                            <ListItemText primary={category.catName} />
                        </ListItem>
                    </Link>
                    <Divider />
                </React.Fragment>
            ))}
        </>
    );
}

export default ProCategories;
