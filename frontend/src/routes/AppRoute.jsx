import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'
import RestuarantDetails from '../pages/Restuarant/RestuarantDetails'
import Footer from '../components/Footer'
import Cart from '../pages/Cart'
import FoodPage from '../pages/Food/FoodPage'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/restuarant' element={<RestuarantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/food' element={<FoodPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
