
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
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
// import LogoutIcon from '@mui/icons-material/Logout';
// import { logo, myAccountIconButton, activeStyle } from './Style';


// function Navbar({ toggleSidebar, sum }) {
//     const NavItems = ['Home', 'Categories', 'Products', 'My Account'];
//     const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
//     const navigate = useNavigate();

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

//     const handleLogout = () => {
//         localStorage.removeItem("userdata");
//         navigate('/');
//         handleAccountMenuClose();
//     };

//     const storageResponse = localStorage.getItem("userdata");
//     let customer = JSON.parse(storageResponse);
//     let { fName, lName } = customer || {};

//     const handleCartClick = () => {
//         const storageResponse = localStorage.getItem("userdata");
//         let customer = JSON.parse(storageResponse);
//         if (customer) {
//             navigate('/cart');
//         } else {
//             navigate('/login');
//         }
//     };
//     console.log("sum is", sum);

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

//                         <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
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

//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href="#"
//                             sx={{
//                                 ...logo
//                             }}
//                         >
//                             <span style={{ color: 'deeppink' }}>SHOPIE</span>
//                             <span style={{ color: 'black' }}>FAST</span>
//                         </Typography>

//                         {customer ? (
//                             <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
//                                 <IconButton
//                                     sx={{
//                                         ...myAccountIconButton,
//                                     }}
//                                     onClick={handleAccountMenuOpen}
//                                 >
//                                     <Avatar sx={{ mr: 1, backgroundColor: '#f6f6f6' }}>
//                                         <PersonIcon sx={{ color: 'black' }} />
//                                     </Avatar>
//                                     <Typography sx={{ mr: 1 }}>{`${fName} ${lName}`}</Typography>
//                                     {accountMenuAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                                 </IconButton>
//                                 <Menu
//                                     anchorEl={accountMenuAnchorEl}
//                                     open={Boolean(accountMenuAnchorEl)}
//                                     onClose={handleAccountMenuClose}
//                                     anchorOrigin={{
//                                         vertical: 'bottom',
//                                         horizontal: 'right',
//                                     }}
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                 >
//                                     <MenuItem onClick={handleLogout}>
//                                         <LogoutIcon sx={{ mr: 1 }} />
//                                         <Typography color="inherit">Logout</Typography>
//                                     </MenuItem>
//                                 </Menu>
//                             </Box>
//                         ) : (
//                             <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
//                                 <IconButton
//                                     sx={{
//                                         ...myAccountIconButton,
//                                     }}
//                                     onClick={handleAccountMenuOpen}
//                                 >
//                                     <Avatar sx={{ mr: 1, backgroundColor: '#f6f6f6' }}>
//                                         <PersonIcon sx={{ color: 'black' }} />
//                                     </Avatar>
//                                     <Typography sx={{ mr: 1 }}>My Account</Typography>
//                                     {accountMenuAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                                 </IconButton>
//                                 <Menu
//                                     anchorEl={accountMenuAnchorEl}
//                                     open={Boolean(accountMenuAnchorEl)}
//                                     onClose={handleAccountMenuClose}
//                                     anchorOrigin={{
//                                         vertical: 'bottom',
//                                         horizontal: 'right',
//                                     }}
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                 >
//                                     <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         <MenuItem onClick={handleAccountMenuClose}>
//                                             <LoginIcon sx={{ mr: 1 }} />
//                                             <Typography color="inherit">Login</Typography>
//                                         </MenuItem>
//                                     </Link>
//                                     <Divider />
//                                     <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         <MenuItem onClick={handleAccountMenuClose}>
//                                             <PersonAddIcon sx={{ mr: 1 }} />
//                                             <Typography color="inherit">Sign up</Typography>
//                                         </MenuItem>
//                                     </Link>
//                                 </Menu>
//                             </Box>
//                         )}

//                         {/* <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open cart">
//                                 <IconButton
//                                     sx={{
//                                         p: 0,
//                                         '&:hover svg': { color: 'black' }
//                                     }}
//                                 >
//                                     <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
//                                         <ShoppingCartIcon sx={{ color: 'deeppink' }} />
//                                     </Avatar>
//                                 </IconButton>
//                             </Tooltip>
//                         </Box> */}

//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open cart">
//                                 <IconButton
//                                     onClick={handleCartClick}
//                                     sx={{
//                                         p: 0,
//                                         '&:hover svg': { color: 'black' }
//                                     }}
//                                 >
//                                     <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
//                                         <ShoppingCartIcon sx={{ color: 'deeppink' }} />
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
    Divider,
    Badge
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

function Navbar({ toggleSidebar, sum }) {
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
    let { fName, lName } = customer || {};

    const handleCartClick = () => {
        const storageResponse = localStorage.getItem("userdata");
        let customer = JSON.parse(storageResponse);
        if (customer) {
            navigate('/cart');
        } else {
            navigate('/login');
        }
    };
    console.log("sum is", sum);

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

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
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

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                ...logo
                            }}
                        >
                            <span style={{ color: 'deeppink' }}>SHOPIE</span>
                            <span style={{ color: 'black' }}>FAST</span>
                        </Typography>

                        {customer ? (
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

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open cart">
                                <IconButton
                                    onClick={handleCartClick}
                                    sx={{
                                        p: 0,
                                        '&:hover svg': { color: 'black' }
                                    }}
                                >
                                    <Badge badgeContent={sum} color="secondary">
                                        <Avatar sx={{ backgroundColor: '#f6f6f6' }}>
                                            <ShoppingCartIcon sx={{ color: 'deeppink' }} />
                                        </Avatar>
                                    </Badge>
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
