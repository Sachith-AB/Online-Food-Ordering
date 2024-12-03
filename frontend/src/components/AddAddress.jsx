import React, { useState } from 'react'

import {CiLocationOn} from 'react-icons/ci'
import colors from '../theme/colorPalate';

export default function AddAddress() {

    
    const [isModalOpen , setisModalOpen] = useState(false);

    const openModel = () => setisModalOpen(true);
    const closeModel = () => setisModalOpen(false);

    return (
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
                onClick={openModel}
                >
                Add
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-bold text-gray-700 mb-4">Add New Address</h2>
                        <form>
                            {/* Address Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Address Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300"
                                    placeholder="e.g., Home, Office"
                                />
                            </div>
                            {/* Address */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300"
                                    placeholder="Enter your address"
                                />
                            </div>
                            {/* City */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">City</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300"
                                    placeholder="Enter your city"
                                />
                            </div>
                            {/* Postal Code */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Postal Code</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-gray-300 focus:outline-none focus:ring-0"
                                    placeholder="Enter your postal code"
                                />
                            </div>
                            {/* Buttons */}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 w-1/8 bg-gray-300 hover:bg-gray-400 text-white rounded-lg"
                                    onClick={closeModel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 w-1/8  text-white rounded-lg transition-colors"
                                    style={{
                                        background:colors.primary.green,
                                        transition: 'background-color 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondry.darkGreen}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary.green}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
