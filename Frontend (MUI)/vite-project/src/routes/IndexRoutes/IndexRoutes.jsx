


import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Signup from '../../pages/AuthFlow/Signup/Signup';
import Login from '../../pages/AuthFlow/Login/Login';
import ProductsPage from '../../pages/MainFlow/ProductsPage';
import SingleProduct from '../../pages/MainFlow/SingleProduct';
import CartPage from '../../pages/MainFlow/CartPage';
import OrderPage from '../../pages/MainFlow/OrderPage';
import Layout from '../../layout/Layout';

function IndexRoutes() {

    return (

        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products/:selectedProCatId' element={<ProductsPage />} />
                <Route path='/products-one/:prodId' element={<SingleProduct />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/order' element={< OrderPage />} />
            </Routes>
        </Layout>

    )
}

export default IndexRoutes;


