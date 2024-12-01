import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
