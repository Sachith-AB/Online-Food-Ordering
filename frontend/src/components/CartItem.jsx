import React from 'react'

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import colors from '../theme/colorPalate';
import pizza from '../assets/pizza.jpg'

export default function CartItem({name,image,price,ing}) {
    return (
        <div className=' border-t-2 w-full '>
            <div className="flex flex-col md:flex-row m-2  justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <img src={pizza} alt="food" className="h-20 w-20" />
                    <div>
                        <p className="first-letter:capitalize m-2 text-lg font-bold">briyani</p>
                        <div className="flex items-center m-2 space-x-4">
                            <button>
                                <IoIosAddCircleOutline 
                                    size={24} 
                                    style={{ color: colors.primary.green }}
                                />
                            </button>
                            <p className="text-lg font-semibold">6</p>
                            <button>
                                <IoIosRemoveCircleOutline 
                                    size={24} 
                                    style={{ color: colors.primary.green }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="text-right">
                    <p className="text-gray-400 font-semibold">LKR 120</p>
                </div>
            </div>
            <div className='flex gap-2 m-2'>
                <div className='px-2 py-1 bg-gray-100 rounded-full'>
                    <p className='text-sm font-semibold'>Walnuts</p>
                </div>
                <div className='px-2 py-1 bg-gray-100 rounded-full'>
                    <p className='text-sm font-semibold'>Cashews</p>
                </div>
            </div>
        </div>
    )
}
