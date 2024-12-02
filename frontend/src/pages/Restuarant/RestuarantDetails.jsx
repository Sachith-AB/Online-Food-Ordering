import React, { useState } from 'react'

import { AiOutlineFileText } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";

import colors from '../../theme/colorPalate'
import FeedbackForm from '../../components/FeedbackForm';

export default function RestuarantDetails() {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex lg:flex-row sm:flex-col items-center justify-start mt-10'>
                <div className='flex flex-col flex-wrap lg:w-1/2 sm:w-full text-start items-center lg:justify-start'>
                    <div className='ml-5 sm:ml-10 md:ml-16 lg:ml-20'>
                        <div className='flex flex-wrap items-center'>
                            <p className="text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-start">
                                Welcome to
                            </p>
                            <p className='text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-start'
                                style={{color:colors.primary.green}}    
                            >
                                Avintha Hotel
                            </p>
                        </div>
                        <p className='mt-5 text-gray-400 font-semibold'>We provide the most delicious food based on high quality ingridients that are maintained by high machines and cooked by our experts.</p>
                        <p className="text-gray-400  font-semibold mt-5">
                            We specialize in a variety of cuisines to satisfy your cravings, including:
                        </p>
                        <ul className="mt-3 list-disc ml-5 text-gray-700 font-semibold">
                            <li>Italian</li>
                            <li>Chinese</li>
                            <li>Indian</li>
                            <li>Mexican</li>
                            <li>Continental</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col lg:w-1/2 sm:w-full text-start items-center lg:justify-start sm:mt-10'>
                    <div className='relative'>
                        <div className='rounded-full w-96 h-96 overflow-hidden'>
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" 
                                alt="restuarant image" 
                                className='object-cover w-full h-full' 
                            />
                        </div>
                        <div className="flex flex-row absolute bottom-2 ml-52 shadow-lg text-white bg-white bg-opacity-50 px-2 py-1 rounded-full">
                            <span className="text-sm font-bold text-gray-700">5.0 Ratings</span>
                            <div className="flex">
                                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            </div>
                        </div>
                        <div className="absolute top-10">
                            <span
                            className={`text-lg font-bold px-4 py-2 rounded-full ${
                                isOpen
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                            >
                            {isOpen ? "Open Now" : "Closed"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-col items-center justify-start mt-10'>
                <div className='ml-5 sm:ml-10 md:ml-16 lg:ml-20'>
                    <p className='text-xl font-bold text-center'>
                        How To Order
                    </p>
                    <p className='text-center text-gray-400'>
                        Follow each of these easy steps to order the menu you want, wait and we are ready to do it for you to be ready to enjoy.
                    </p>
                    <div className='flex lg:flex-row sm:flex-col flex-wrap justify-center items-center gap-3 mt-5'>
                        <div className='h-52 w-52 rounded-xl shadow-lg' style={{background:colors.primary.green}}>
                            <div className='flex flex-col flex-wrap m-5'>
                                <AiOutlineFileText size={30} style={{color:colors.primary.white}}/>
                                <h2 className='font-bold mt-5  text-lg text-white'>Choose Your Menu</h2>
                                <p className='font-semibold mt-2  text-sm text-white'>Select the food or drink menu you wand.please enter it into your shopping cart</p>
                            </div>
                        </div>
                        <FaCircleArrowRight size={30} style={{color:colors.primary.green}} className='hidden lg:block'/>
                        <div className='h-52 w-52 rounded-xl shadow-lg' style={{background:colors.primary.green}}>
                            <div className='flex flex-col flex-wrap m-5'>
                                <IoWalletOutline size={30} style={{color:colors.primary.white}}/>
                                <h2 className='font-bold mt-5  text-lg text-white'>Checkout Order</h2>
                                <p className='font-semibold mt-2  text-sm text-white'>Orders that are in your cart shopping cart now just to checkout, to be ready for processing.</p>
                            </div>
                        </div>
                        <FaCircleArrowRight size={30} style={{color:colors.primary.green}} className='hidden lg:block'/>
                        <div className='h-52 w-52 rounded-xl shadow-lg' style={{background:colors.primary.green}}>
                            <div className='flex flex-col flex-wrap m-5'>
                                <BsCartCheck size={30} style={{color:colors.primary.white}}/>
                                <h2 className='font-bold mt-5  text-lg text-white'>Wait For Delivery</h2>
                                <p className='font-semibold mt-2  text-sm text-white'>So from here we are ready to prepare and deliver orders to your residence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row sm:flex-col flex-wrap w-full justify-center items-center space-x-10 sm:gap-5 sm:items-center mt-5">
                <div className='flex flex-col w-80'>
                    <h2 className="text-2xl font-bold mb-3">Visit Us</h2>
                    <p className="text-gray-500">123 Main Street, Colombo, Sri Lanka</p>
                </div>
                <div className='flex flex-col flex-wrap w-80'>
                    <h2 className="text-2xl font-bold mb-3">Opening Hours</h2>
                    <p className="text-gray-500">Monday - Sunday: 9:00 AM - 11:00 PM</p>
                </div>
                <div className='flex flex-col w-80'>
                    <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                    <p className="text-gray-500">Phone: +94 77 123 4567</p>
                    <p className="text-gray-500">Email: info@avintha-hotel.com</p>
                    <p className="text-gray-500">Twitter: @avintha-hotel.com</p>
                </div>
            </div>
            <div className='items-center justify-center'>
                <FeedbackForm/>     
            </div>
        </div>
    )
}
