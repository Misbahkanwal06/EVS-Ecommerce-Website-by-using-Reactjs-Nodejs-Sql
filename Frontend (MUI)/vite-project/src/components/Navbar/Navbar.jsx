

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     AppBar,
//     Box,
//     Toolbar,
//     IconButton,
//     Typography,
//     Container,
//     Avatar,
//     Button,
//     Tooltip,
//     MenuItem,
//     Menu,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Divider
// } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PersonIcon from '@mui/icons-material/Person';
// import { logo, myAccountIconButton, activeStyle } from './Style';

// function Navbar({ toggleSidebar }) {


//     // const pages = ['Home', 'Categories', 'Products'];
//     const NavItems = ['Home', 'Categories', 'Products', 'My Account'];
//     const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);
//     const [mobileAccountAnchorEl, setMobileAccountAnchorEl] = useState(null);
//     const [activePage, setActivePage] = useState('Home');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);


//     const handleDrawerOpen = () => {
//         setDrawerOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setDrawerOpen(false);
//     };

//     const handleAccountMenuOpen = (event) => {
//         setAccountMenuAnchorEl(event.currentTarget);
//     };

//     const handleAccountMenuClose = () => {
//         setAccountMenuAnchorEl(null);
//     };

//     // const handleMobileAccountOpen = (event) => {
//     //     setMobileAccountAnchorEl(event.currentTarget);
//     // };

//     // const handleMobileAccountClose = () => {
//     //     setMobileAccountAnchorEl(null);
//     // };

//     const handlePageClick = (page) => {
//         if (page !== 'Home') {
//             setActivePage(page);
//         }
//     };

//     // const toggleSidebar = () => {
//     //     setIsSidebarOpen(!isSidebarOpen);
//     // };


//     const storageResponse = localStorage.getItem("userdata");
//     let customer = JSON.parse(storageResponse);
//     let { fName, lName } = customer && customer || {};


//     return (

//         <Box>
//             <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
//                 <Container maxWidth="xl">
//                     <Toolbar>
//                         <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="menu"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleDrawerOpen}
//                                 color="inherit"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                         </Box>

//                         {/* Up and Down Icons */}
//                         {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
//                             <Tooltip title="Toggle sidebar">
//                                 <IconButton
//                                     sx={{ p: 0 }}
//                                     onClick={toggleSidebar}
//                                 >
//                                     <Avatar sx={{ backgroundColor: 'deeppink' }}>
//                                         <ExpandMoreIcon sx={{ color: 'white' }} />
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box> */}

//                         <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
//                             <Tooltip title="Toggle sidebar">
//                                 <IconButton
//                                     sx={{ p: 0 }}
//                                     onClick={toggleSidebar}
//                                 >
//                                     <Avatar sx={{ backgroundColor: 'deeppink' }}>
//                                         {isSidebarOpen ? <ExpandLessIcon sx={{ color: 'white' }} /> : <ExpandMoreIcon sx={{ color: 'white' }} />}
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box>

//                         {/* LOGO */}
//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href="#"
//                             sx={{
//                                 ...logo   // styles
//                             }}
//                         >
//                             <span style={{ color: 'deeppink' }}>SHOPIE</span>
//                             <span style={{ color: 'black' }}>FAST</span>
//                         </Typography>

//                         {/* Desktop Navigation */}
//                         {/* <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
//                             {pages.map((page) => (
//                                 <Button
//                                     key={page}
//                                     onClick={() => handlePageClick(page)}
//                                     sx={{
//                                         my: 2,
//                                         color: activePage === page ? 'deeppink' : 'black',
//                                         display: 'block',
//                                         ...(activePage === page && { borderBottom: '2px solid deeppink' }),
//                                     }}
//                                 >
//                                     {page}
//                                 </Button>
//                             ))}
//                         </Box> */}

//                         {/* My Account */}
//                         <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
//                             <IconButton
//                                 sx={{
//                                     ...myAccountIconButton,
//                                 }}
//                                 onClick={handleAccountMenuOpen}
//                             >
//                                 <Avatar sx={{ mr: 1, backgroundColor: '#f6f6f6' }}>
//                                     <PersonIcon sx={{ color: 'black' }} />
//                                 </Avatar>
//                                 <Typography sx={{ mr: 1 }}>My Account</Typography>
//                                 {accountMenuAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                             </IconButton>
//                             <Menu
//                                 anchorEl={accountMenuAnchorEl}
//                                 open={Boolean(accountMenuAnchorEl)}
//                                 onClose={handleAccountMenuClose}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'right',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                             >
//                                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                     <MenuItem onClick={handleAccountMenuClose}>
//                                         <LoginIcon sx={{ mr: 1 }} />
//                                         <Typography color="inherit">
//                                             Login
//                                         </Typography>
//                                     </MenuItem>
//                                 </Link>
//                                 <Divider />
//                                 <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                     <MenuItem onClick={handleAccountMenuClose}>
//                                         <PersonAddIcon sx={{ mr: 1 }} />
//                                         <Typography color="inherit">Sign up</Typography>
//                                     </MenuItem>
//                                 </Link>
//                             </Menu>
//                         </Box>

//                         {/* Shopping cart icon */}
//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open cart">
//                                 <IconButton
//                                     sx={{
//                                         p: 0,
//                                         '&:hover svg': { color: 'grey' }
//                                     }}
//                                 >
//                                     <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
//                                         <ShoppingCartIcon sx={{ color: 'black' }} />
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box>

//                         {/* Person avatar */}
//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="My Account">
//                                 <IconButton
//                                     sx={{
//                                         p: 0,
//                                         '&:hover svg': { color: 'grey' }
//                                     }}
//                                     onClick={handleAccountMenuOpen}
//                                 >
//                                     <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
//                                         <PersonIcon sx={{ color: 'black' }} />
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box>


//                         {/* Shopping cart icon */}
//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open cart">
//                                 <IconButton
//                                     sx={{
//                                         p: 0,
//                                         '&:hover svg': { color: 'grey' }
//                                     }}
//                                 >
//                                     <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
//                                         <ShoppingCartIcon sx={{ color: 'black' }} />
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>

//             <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={handleDrawerClose}
//             >
//                 <Box
//                     sx={{ width: 250 }}
//                     role="presentation"
//                     onClick={handleDrawerClose}
//                     onKeyDown={handleDrawerClose}
//                 >
//                     <List>
//                         {NavItems.map((item) => (
//                             <ListItem button key={item} onClick={() => handlePageClick(item)}>
//                                 <ListItemText primary={item} />
//                                 {item === 'My Account' &&
//                                     (mobileAccountAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
//                             </ListItem>
//                         ))}
//                     </List>
//                     <Divider />
//                 </Box>
//             </Drawer>
//         </Box>
//     );
// }

// export default Navbar;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     AppBar,
//     Box,
//     Toolbar,
//     IconButton,
//     Typography,
//     Container,
//     Avatar,
//     Button,
//     Tooltip,
//     MenuItem,
//     Menu,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Divider
// } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PersonIcon from '@mui/icons-material/Person';
// import { logo, myAccountIconButton, activeStyle } from './Style';

// function Navbar({ toggleSidebar }) {
//     const NavItems = ['Home', 'Categories', 'Products', 'My Account'];
//     const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);
//     const [mobileAccountAnchorEl, setMobileAccountAnchorEl] = useState(null);
//     const [activePage, setActivePage] = useState('Home');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const handleDrawerOpen = () => {
//         setDrawerOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setDrawerOpen(false);
//     };

//     const handleAccountMenuOpen = (event) => {
//         setAccountMenuAnchorEl(event.currentTarget);
//     };

//     const handleAccountMenuClose = () => {
//         setAccountMenuAnchorEl(null);
//     };

//     const handlePageClick = (page) => {
//         if (page !== 'Home') {
//             setActivePage(page);
//         }
//     };

//     const storageResponse = localStorage.getItem("userdata");
//     let customer = JSON.parse(storageResponse);
//     let { fName, lName } = customer && customer || {};

//     return (
//         <Box>
//             <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
//                 <Container maxWidth="xl">
//                     <Toolbar>
//                         <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="menu"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleDrawerOpen}
//                                 color="inherit"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                         </Box>

//                         {/* Up and Down Icons */}
//                         <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
//                             <Tooltip title="Toggle sidebar">
//                                 <IconButton
//                                     sx={{ p: 0 }}
//                                     onClick={toggleSidebar}
//                                 >
//                                     <Avatar sx={{ backgroundColor: 'deeppink' }}>
//                                         {isSidebarOpen ? <ExpandLessIcon sx={{ color: 'white' }} /> : <ExpandMoreIcon sx={{ color: 'white' }} />}
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box>

//                         {/* LOGO */}
//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href="#"
//                             sx={{
//                                 ...logo   // styles
//                             }}
//                         >
//                             <span style={{ color: 'deeppink' }}>SHOPIE</span>
//                             <span style={{ color: 'black' }}>FAST</span>
//                         </Typography>


//                         {/* My Account */}
//                         <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
//                             <IconButton
//                                 sx={{
//                                     ...myAccountIconButton,
//                                 }}
//                                 onClick={handleAccountMenuOpen}
//                             >
//                                 <Avatar sx={{ mr: 1, backgroundColor: '#f6f6f6' }}>
//                                     <PersonIcon sx={{ color: 'black' }} />
//                                 </Avatar>
//                                 <Typography sx={{ mr: 1 }}>My Account</Typography>
//                                 {accountMenuAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                             </IconButton>
//                             <Menu
//                                 anchorEl={accountMenuAnchorEl}
//                                 open={Boolean(accountMenuAnchorEl)}
//                                 onClose={handleAccountMenuClose}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'right',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                             >
//                                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                     <MenuItem onClick={handleAccountMenuClose}>
//                                         <LoginIcon sx={{ mr: 1 }} />
//                                         <Typography color="inherit">
//                                             Login
//                                         </Typography>
//                                     </MenuItem>
//                                 </Link>
//                                 <Divider />
//                                 <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                     <MenuItem onClick={handleAccountMenuClose}>
//                                         <PersonAddIcon sx={{ mr: 1 }} />
//                                         <Typography color="inherit">Sign up</Typography>
//                                     </MenuItem>
//                                 </Link>
//                             </Menu>
//                         </Box>


//                         {/* Shopping cart icon */}
//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open cart">
//                                 <IconButton
//                                     sx={{
//                                         p: 0,
//                                         '&:hover svg': { color: 'grey' }
//                                     }}
//                                 >
//                                     <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
//                                         <ShoppingCartIcon sx={{ color: 'black' }} />
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box>


//                     </Toolbar>
//                 </Container>
//             </AppBar>

//             <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={handleDrawerClose}
//             >
//                 <Box
//                     sx={{ width: 250 }}
//                     role="presentation"
//                     onClick={handleDrawerClose}
//                     onKeyDown={handleDrawerClose}
//                 >
//                     <List>
//                         {NavItems.map((item) => (
//                             <ListItem button key={item} onClick={() => handlePageClick(item)}>
//                                 <ListItemText primary={item} />
//                                 {item === 'My Account' &&
//                                     (mobileAccountAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
//                             </ListItem>
//                         ))}
//                     </List>
//                     <Divider />
//                 </Box>
//             </Drawer>
//         </Box>
//     );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Menu,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { logo, myAccountIconButton, activeStyle } from './Style';

function Navbar({ toggleSidebar }) {
    const NavItems = ['Home', 'Categories', 'Products', 'My Account'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const navigate = useNavigate();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);
    const [mobileAccountAnchorEl, setMobileAccountAnchorEl] = useState(null);
    const [activePage, setActivePage] = useState('Home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleAccountMenuOpen = (event) => {
        setAccountMenuAnchorEl(event.currentTarget);
    };

    const handleAccountMenuClose = () => {
        setAccountMenuAnchorEl(null);
    };

    const handlePageClick = (page) => {
        if (page !== 'Home') {
            setActivePage(page);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("userdata");
        navigate('/');
        handleAccountMenuClose();
    };

    const storageResponse = localStorage.getItem("userdata");
    let customer = JSON.parse(storageResponse);
    let { fName, lName } = customer && customer || {};

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        {/* Up and Down Icons */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
                            <Tooltip title="Toggle sidebar">
                                <IconButton
                                    sx={{ p: 0 }}
                                    onClick={toggleSidebar}
                                >
                                    <Avatar sx={{ backgroundColor: 'deeppink' }}>
                                        {isSidebarOpen ? <ExpandLessIcon sx={{ color: 'white' }} /> : <ExpandMoreIcon sx={{ color: 'white' }} />}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        {/* LOGO */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                ...logo   // styles
                            }}
                        >
                            <span style={{ color: 'deeppink' }}>SHOPIE</span>
                            <span style={{ color: 'black' }}>FAST</span>
                        </Typography>

                        {/* Conditional Rendering Based on Login Status */}
                        {storageResponse ? (
                            <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
                                <IconButton
                                    sx={{
                                        ...myAccountIconButton,
                                    }}
                                    onClick={handleAccountMenuOpen}
                                >
                                    <Avatar sx={{ mr: 1, backgroundColor: '#f6f6f6' }}>
                                        <PersonIcon sx={{ color: 'black' }} />
                                    </Avatar>
                                    <Typography sx={{ mr: 1 }}>{`${fName} ${lName}`}</Typography>
                                    {accountMenuAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                                <Menu
                                    anchorEl={accountMenuAnchorEl}
                                    open={Boolean(accountMenuAnchorEl)}
                                    onClose={handleAccountMenuClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <MenuItem onClick={handleLogout}>
                                        <LogoutIcon sx={{ mr: 1 }} />
                                        <Typography color="inherit">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        ) : (
                            <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
                                <IconButton
                                    sx={{
                                        ...myAccountIconButton,
                                    }}
                                    onClick={handleAccountMenuOpen}
                                >
                                    <Avatar sx={{ mr: 1, backgroundColor: '#f6f6f6' }}>
                                        <PersonIcon sx={{ color: 'black' }} />
                                    </Avatar>
                                    <Typography sx={{ mr: 1 }}>My Account</Typography>
                                    {accountMenuAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                                <Menu
                                    anchorEl={accountMenuAnchorEl}
                                    open={Boolean(accountMenuAnchorEl)}
                                    onClose={handleAccountMenuClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <MenuItem onClick={handleAccountMenuClose}>
                                            <LoginIcon sx={{ mr: 1 }} />
                                            <Typography color="inherit">Login</Typography>
                                        </MenuItem>
                                    </Link>
                                    <Divider />
                                    <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <MenuItem onClick={handleAccountMenuClose}>
                                            <PersonAddIcon sx={{ mr: 1 }} />
                                            <Typography color="inherit">Sign up</Typography>
                                        </MenuItem>
                                    </Link>
                                </Menu>
                            </Box>
                        )}

                        {/* Shopping cart icon */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open cart">
                                <IconButton
                                    sx={{
                                        p: 0,
                                        '&:hover svg': { color: 'grey' }
                                    }}
                                >
                                    <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
                                        <ShoppingCartIcon sx={{ color: 'black' }} />
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <List>
                        {NavItems.map((item) => (
                            <ListItem button key={item} onClick={() => handlePageClick(item)}>
                                <ListItemText primary={item} />
                                {item === 'My Account' &&
                                    (mobileAccountAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </Box>
    );
}

export default Navbar;
