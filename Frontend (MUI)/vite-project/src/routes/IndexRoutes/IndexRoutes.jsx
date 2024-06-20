

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../../pages/Home/Home';
// import Signup from '../../pages/AuthFlow/Signup/Signup';
// import Login from '../../pages/AuthFlow/Login/Login';
// import ProductsPage from '../../pages/MainFlow/ProductsPage';
// import SingleProduct from '../../pages/MainFlow/SingleProduct';
// import CartPage from '../../pages/MainFlow/CartPage';
// import OrderPage from '../../pages/MainFlow/OrderPage';
// import UnProtectedRoutes from './UnProtectedRoutes';

// const allowedRoutes = [
//     '/',
//     '/signup',
//     '/login',
//     '/products/:selectedProCatId',
//     '/products-one/:prodId'
// ];

// function IndexRoutes() {
//     return (
//         <Routes>
//             <Route path='/' element={<UnProtectedRoutes Component={<Home />} allowedRoutes={allowedRoutes} />} />
//             <Route path='/signup' element={<UnProtectedRoutes Component={<Signup />} allowedRoutes={allowedRoutes} />} />
//             <Route path='/login' element={<UnProtectedRoutes Component={<Login />} allowedRoutes={allowedRoutes} />} />
//             <Route path='/products/:selectedProCatId' element={<UnProtectedRoutes Component={<ProductsPage />} allowedRoutes={allowedRoutes} />} />
//             <Route path='/products-one/:prodId' element={<UnProtectedRoutes Component={<SingleProduct />} allowedRoutes={allowedRoutes} />} />
//             <Route path='/cart' element={<UnProtectedRoutes Component={<CartPage />} allowedRoutes={allowedRoutes} />} />
//             <Route path='/order' element={<UnProtectedRoutes Component={<OrderPage />} allowedRoutes={allowedRoutes} />} />
//         </Routes>
//     )
// }

// export default IndexRoutes;





import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Signup from '../../pages/AuthFlow/Signup/Signup';
import Login from '../../pages/AuthFlow/Login/Login';
import ProductsPage from '../../pages/MainFlow/ProductsPage';
import SingleProduct from '../../pages/MainFlow/SingleProduct';
import CartPage from '../../pages/MainFlow/CartPage';
import OrderPage from '../../pages/MainFlow/OrderPage';
import UnProtectedRoutes from './UnProtectedRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const unprotectedRoutes = [
    { path: '/', component: <Home /> },
    { path: '/signup', component: <Signup /> },
    { path: '/login', component: <Login /> },
    { path: '/products/:selectedProCatId', component: <ProductsPage /> },
    { path: '/products-one/:prodId', component: <SingleProduct /> },
];

const protectedRoutes = [
    { path: '/cart', component: <CartPage /> },
    { path: '/order', component: <OrderPage /> },
];

function IndexRoutes() {
    return (
        <Routes>
            {unprotectedRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<UnProtectedRoutes Component={route.component} allowedRoutes={unprotectedRoutes.map(r => r.path)} />}
                />
            ))}
            {protectedRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<ProtectedRoutes Component={route.component} />}
                />
            ))}
        </Routes>
    );
}

export default IndexRoutes;
