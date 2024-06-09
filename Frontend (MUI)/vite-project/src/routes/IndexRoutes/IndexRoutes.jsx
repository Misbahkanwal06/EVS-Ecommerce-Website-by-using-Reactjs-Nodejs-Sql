
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Signup from '../../pages/AuthFlow/Signup/Signup';
import Login from '../../pages/AuthFlow/Login/Login';
import ProductsPage from '../../pages/MainFlow/ProductsPage';


function IndexRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products/:selectedProCatId' element={<ProductsPage />} />
        </Routes>

    )
}

export default IndexRoutes;
