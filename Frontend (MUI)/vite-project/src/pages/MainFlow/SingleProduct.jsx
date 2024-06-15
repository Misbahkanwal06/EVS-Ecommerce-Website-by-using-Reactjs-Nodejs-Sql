
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SingleProdCard from '../../components/SingleProductCard/SingleProdCard';

function SingleProduct() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };


    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <SingleProdCard />
        </div>
    )
}

export default SingleProduct;
