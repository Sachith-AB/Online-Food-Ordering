import React from 'react'
import {useNavigate} from 'react-router-dom'

import colors from '../theme/colorPalate.js'
import Logo from '../components/Logo.jsx'
import user from '../assets/user.jpg'


import{AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'

export default function Header() {

    const navigate = useNavigate();

    const goToCart = () => {
        navigate('cart')
    }

    return (
        <div className='flex px-5 z-50 py-[.8rem] lg:px-20 justify-between' style={{background:colors.primary.white}}>
            <a href='/' className='flex lg:mr-10 sm:mr-4 cursor-pointer space-x-4 text-black items-center'>
                <Logo/>
            </a>
            <div className='flex lg:ml-10 sm:ml-4 space-x-4 items-center'>
                <button className="w-12 h-10 bg-white">
                    <AiOutlineSearch className='text-xl'/>
                </button>
                <a href='/profile' className='w-10 h-10 rounded-full text-white font-bold cursor-pointer'>
                    <img src={user} alt="" className='object-cover rounded-full w-full h-full'/>
                </a>
                <div className="relative inline-block space-x-0">
                    <button onClick={goToCart} className="w-12 h-10 bg-white relative">
                        <FaShoppingCart className="text-xl" />
                        <span className="absolute top-0 right-0  text-white text-xs font-bold px-2 py-1 rounded-full -translate-y-1/4" style={{background:colors.primary.green}}>
                        {5} 
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
