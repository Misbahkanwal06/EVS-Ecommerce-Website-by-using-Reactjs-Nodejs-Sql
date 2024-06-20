// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// // import ProCategories from '../../components/Categories/ProCategories';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Footer from '../../components/Footer/Footer';
// import Sidebar from '../../components/Navbar/Sidebar';
// import Slider from '../../components/Slider/Slider';

// function Home() {
//     return (
//         <>
//             <Navbar />
//             <Box sx={{ p: 2, }}>
//                 <Grid container spacing={2}>
//                     <Grid item sm={5} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
//                         <Sidebar />
//                     </Grid>
//                     <Grid item sm={7} xs={12} md={9}>
//                         <Box><Slider /></Box>
//                     </Grid>
//                 </Grid>
//             </Box>

//             <Footer />
//         </>
//     );
// }

// export default Home;




import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Navbar/Sidebar';
import Slider from '../../components/Slider/Slider';
import ShopWithUs from '../../components/ShopWithUs/ShopWithUs';
import Categories from '../../components/Categories/Categories';

function Home() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    {isSidebarVisible && (
                        <Grid item sm={5} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Sidebar />
                        </Grid>
                    )}
                    <Grid item sm={isSidebarVisible ? 7 : 12} xs={12} md={isSidebarVisible ? 9 : 12}>
                        <Box><Slider /></Box>
                    </Grid>
                </Grid>
            </Box>
            <Categories />
            <ShopWithUs />
            <Footer />
        </>
    );
}
export default Home;





// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Footer from '../../components/Footer/Footer';
// import Sidebar from '../../components/Navbar/Sidebar';
// import Slider from '../../components/Slider/Slider';
// import ShopWithUs from '../../components/ShopWithUs/ShopWithUs';
// import Categories from '../../components/Categories/Categories';

// function Home() {
//     return (
//         <>
//             <Box sx={{ p: 2 }}>
//                 <Grid container spacing={2}>
//                     <Grid item sm={12} xs={12} md={12}>
//                         <Box><Slider /></Box>
//                     </Grid>
//                 </Grid>
//             </Box>
//             <Categories />
//             <ShopWithUs />
//         </>
//     );
// }

// export default Home;
