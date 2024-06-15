

// import React from 'react'
// import { useLocation } from "react-router-dom";
// // import { logOut } from "../redux/store";
// // import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Navbar from '../components/Navbar/Navbar';

// function Layout({ children }) {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const role = getRole(location.pathname);
//     return (
//         <>
//             <Navbar data={children} role={role} />
//         </>
//     )
// }

// export default Layout;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function Layout({ children }) {
    const location = useLocation();

    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };


    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;
