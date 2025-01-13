import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import colors from '../theme/colorPalate.js'
import Logo from '../components/Logo.jsx'
import user from '../assets/user.jpg'


import{AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'

export default function Header() {

    const navigate = useNavigate();
    const [visible,setVisible] = useState(false);

    const changeVisibility = () => {
        setVisible((prev)=>!prev);
    }

    const goToCart = () => {
        navigate('cart')
    }

    return (
        <div className='fixed w-full flex px-5 z-50 py-[.8rem] lg:px-20 justify-between' style={{background:colors.primary.white}}>
            <a href='/' className='flex lg:mr-10 sm:mr-4 cursor-pointer space-x-4 text-black items-center'>
                <Logo/>
            </a>
            <div className='flex lg:ml-10 sm:ml-4 space-x-4 items-center'>
                <button className="w-12 h-10 bg-white">
                    <AiOutlineSearch className='text-xl'/>
                </button>
                <div onClick={changeVisibility} className='w-10 h-10 rounded-full text-white font-bold cursor-pointer'>
                    <img src={user} alt="" className='object-cover rounded-full w-full h-full'/>
                </div>
                <div className="relative inline-block space-x-0">
                    <button onClick={goToCart} className="w-12 h-10 bg-white relative">
                        <FaShoppingCart className="text-xl" />
                        <span className="absolute top-0 right-0  text-white text-xs font-bold px-2 py-1 rounded-full -translate-y-1/4" style={{background:colors.primary.green}}>
                        {5} 
                        </span>
                    </button>
                </div>
                {
                    visible && (
                        <div className='absolute w-36 h-full bg-white shadow-lg rounded-md mt-32'>
                            <ul className='p-3 text-black font-semibold'>
                                <div className='border-b-2'>
                                    <a className='cursor-pointer' href='/profile'>
                                        Profile
                                    </a>
                                </div>
                                <li>
                                    Sign Out
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
