import React from 'react'

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import burger from '../../assets/burger.jpg'
import colors from '../../theme/colorPalate'
import PrimaryButton from '../../components/PrimaryButton'
import SecondryButton from '../../components/SecondryButton'

export default function FoodPage() {
    return (
        <div className='flex flex-col md:flex-row p-6 rounded-lg max-w-4xl mx-auto min-h-screen'>
            <div className="md:w-1/2 lg:w-full rounded-lg ">
                <img
                    src={burger} 
                    alt="Furious Fried Burger"
                    className="object-cover rounded-lg w-full h-full"
                />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    FURIOUS FRIED <span className="" style={{color:colors.primary.green}}>BURGER</span>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                    Crispy Fried Zinger with deadly combination of our special sauce, fried onions,
                    jalapenos & olives.
                </p>
                <div className="flex items-center gap-4 mb-4">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full text-xl font-semibold">
                        <IoIosAddCircleOutline 
                            size={30} 
                            style={{ color: colors.primary.green }}
                        />
                    </button>
                    <p className="text-lg font-semibold">1</p>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full text-xl font-semibold">
                        <IoIosRemoveCircleOutline 
                            size={30} 
                            style={{ color: colors.primary.green }}
                        />
                    </button>
                </div>
                <div className="flex gap-2 mb-4">
                    {["Burger", "Zinger", "Crispy"].map((tag, index) => (
                        <button
                            key={index}
                            className="px-4 py-2  text-white text-sm rounded-full"
                            style={{background:colors.primary.green}}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className='flex flex-row mt-5 gap-3 lg:justify-start md:justify-center sm:justify-center'>
                    <PrimaryButton text={'Buy Now - Rs.360'}/>
                    <SecondryButton text={'Add To Cart'}/>
                </div>
            </div>
        </div>
    )
}
