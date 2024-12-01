import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import RestuarantDetails from '../pages/Restuarant/RestuarantDetails'

import FoodPage from '../pages/Food/FoodPage'
import Profile from '../pages/Profile/Profile'
import Cart from '../pages/Cart/Cart'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'
import Login from '../pages/Login/Login'


export default function AppRoute() {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/restuarant' element={<RestuarantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/food' element={<FoodPage/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
