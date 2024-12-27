import React, { useState } from 'react';

import AddAddress from '../../components/AddAddress'
import AddressCard from '../../components/AddressCard'
import CartItem from '../../components/CartItem';
import colors from '../../theme/colorPalate';

export default function Cart() {

    return ( 
        <div className="min-h-screen flex flex-col md:flex-row ">
            {/* Left Section */}
            <div className="w-full md:w-1/3 p-4 border-r-2  mt-24">
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
                                <p className="font-semibold text-sm">Restaurant Charges</p>
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
            <div className="flex-1 lg:w-2/3 p-4  mt-24">
                <div>
                    <p className="font-semibold text-lg mb-3">Choose Delivery Address</p>
                    <div className='flex flex-wrap items-center justify-center gap-3'>
                        <AddressCard/>
                        <AddressCard/>
                        <AddressCard/>
                        <AddressCard/>
                        <AddAddress/>
                    </div>
                </div>
            </div>
        </div>
    );
}
