
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Signup from '../../pages/AuthFlow/Signup/Signup';
import Login from '../../pages/AuthFlow/Login/Login';
import ProductsPage from '../../pages/MainFlow/ProductsPage';
import SingleProduct from '../../pages/MainFlow/SingleProduct';
import CartPage from '../../pages/MainFlow/CartPage';

function IndexRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products/:selectedProCatId' element={<ProductsPage />} />
            <Route path='/products-one/:prodId' element={<SingleProduct />} />
            <Route path='/cart' element={<CartPage />} />

        </Routes>
    )
}

export default IndexRoutes;
