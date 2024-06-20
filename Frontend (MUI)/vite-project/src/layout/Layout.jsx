

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';

// function Layout({ children }) {
//     const location = useLocation();
//     const [isSidebarVisible, setIsSidebarVisible] = useState(true);
//     const toggleSidebar = () => {
//         setIsSidebarVisible(!isSidebarVisible);
//     };
//     return (
//         <>
//             <Navbar toggleSidebar={toggleSidebar} />
//             <main>
//                 {children}
//             </main>
//         </>
//     );
// }
// export default Layout;




// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';
// import Sidebar from '../components/Navbar/Sidebar'; // Make sure this path is correct
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Footer from '../components/Footer/Footer'; // Make sure this path is correct

// function Layout({ children }) {
//     const [isSidebarVisible, setIsSidebarVisible] = useState(true);

//     const toggleSidebar = () => {
//         setIsSidebarVisible(!isSidebarVisible);
//     };

//     return (
//         <>
//             <Navbar toggleSidebar={toggleSidebar} />
//             <Box sx={{ p: 2 }}>
//                 <Grid container spacing={2}>
//                     {isSidebarVisible && (
//                         <Grid item sm={5} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
//                             <Sidebar />
//                         </Grid>
//                     )}
//                     <Grid item sm={isSidebarVisible ? 7 : 12} xs={12} md={isSidebarVisible ? 9 : 12}>
//                         {children}
//                     </Grid>
//                 </Grid>
//             </Box>
//             <Footer />
//         </>
//     );
// }

// export default Layout;
