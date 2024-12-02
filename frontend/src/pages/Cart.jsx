import React from 'react';

import { CiLocationOn } from "react-icons/ci";

import AddressCard from '../components/AddressCard';
import CartItem from '../components/CartItem';
import colors from '../theme/colorPalate';

export default function Cart() {
    return (
        <div className="min-h-screen flex ">
            {/* Left Section */}
            <div className="flex-1 lg:w-1/3 p-4 border-r-2">
                <div className="flex flex-col">
                    {/* Cart Items */}
                    <div>
                        <CartItem />
                        <CartItem />
                    </div>
                    {/* Bill Details */}
                    <div className="mt-5 border-t-2 pt-4">
                        <p className="font-semibold mb-2">Bill Details</p>
                        <div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="font-semibold text-sm">Item Total</p>
                                <p className="font-semibold text-sm text-gray-400">LKR 1500</p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="font-semibold text-sm">Delivery Fee</p>
                                <p className="font-semibold text-sm text-gray-400">LKR 21</p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="font-semibold text-sm">Platform Fee</p>
                                <p className="font-semibold text-sm text-gray-400">LKR 5</p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="font-semibold text-sm">GST and Restaurant Charges</p>
                                <p className="font-semibold text-sm text-gray-400">LKR 33</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-5 border-t-2 pt-2">
                            <p className="font-semibold">Total Price</p>
                            <p className="font-semibold text-gray-400">LKR 1559</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 lg:w-2/3 p-4">
                <div>
                    <p className="font-semibold text-lg mb-3">Choose Delivery Address</p>
                    <div className='flex flex-wrap items-center justify-center gap-3'>
                        <AddressCard/>
                        <AddressCard/>
                        <AddressCard/>
                        <AddressCard/>
                        <div className='flex flex-col w-52 h-52 text-center justify-center shadow-lg rounded-lg'>
                            <div className='flex text-center items-center justify-center m-5'>
                                <CiLocationOn size={24} className='' style={{color:colors.primary.green}}/> 
                                <p className='text-lg font-semibold'>Add New Address</p>
                            </div>
                            <button className='px-2 py-2 m-1 text-white rounded-lg w-3/4 self-center' 
                                style={{
                                    background:colors.primary.green,
                                    transition: 'background-color 0.3s ease'
                                }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondry.darkGreen}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary.green}
                                >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
