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
import Register from '../pages/Register/Register'
import Payment from '../pages/Profile/Payment'
import Orders from '../pages/Profile/Orders'
import Address from '../pages/Profile/Address'
import Favorite from '../pages/Profile/Favorite'


export default function AppRoute() {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                
                <Route path='/restuarant' element={<RestuarantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/food' element={<FoodPage/>}/>

                <Route path='/profile' element={<Profile/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/address' element={<Address/>}/>
                <Route path='/favorite' element={<Favorite/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
