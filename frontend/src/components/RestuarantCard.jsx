import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { IoFastFood } from "react-icons/io5";
import { FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import colors from '../theme/colorPalate';

export default function RestaurantCard({ 
    image, 
    name, 
    address, 
    description, 
    openHours,
    type,
    open,
    phone, 
    email, 
    twitter 
}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg w-full md:w-1/4 overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <span
                    className={`absolute top-2 left-2 text-sm font-semibold text-white px-3 py-1 rounded-full`}
                    style={{ background: open ? colors.natural.lime : 'red' }}
                >
                    {
                        open ? 'Open': 'Closed'
                    }
                </span>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold capitalize">{name}</h3>
                        <p className="text-sm text-gray-500 font-semibold flex items-center">
                            <MdLocationOn className="mr-1" /> {address}
                        </p>
                        <p className="text-sm text-gray-500 font-semibold flex items-center">
                            <IoFastFood className='mr-1'/>
                            {type}
                        </p>
                    </div>
                    <button 
                        onClick={toggleFavorite} 
                        className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-400'} transition-colors`}
                    >
                        <AiOutlineHeart />
                    </button>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-semibold">
                    {description && description.length > 80 
                        ? `${description.slice(0, 80)}...` 
                        : description}
                </p>
                <div className="mt-4 text-sm text-gray-700">
                    <div className="flex items-center">
                        <AiOutlineClockCircle className="mr-2 text-gray-500" />
                        <span className="font-medium">Openin At&nbsp;: &nbsp;</span> {openHours}
                    </div>
                </div>
                {/* Contact Details */}
                <div className="mt-4 text-sm text-gray-700 border-t pt-2">
                    <div className="flex items-center mt-2">
                        <FaPhoneAlt className="mr-2 text-gray-500" />
                        <span className="font-medium">Phone: </span> {phone}
                    </div>
                    <div className="flex items-center mt-2">
                        <HiOutlineMail className="mr-2 text-gray-500" />
                        <span className="font-medium">Email: </span> 
                        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
                    </div>
                    {twitter && (
                        <div className="flex items-center mt-2">
                            <FaTwitter className="mr-2 text-gray-500" />
                            <span className="font-medium">Twitter: </span> 
                            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {twitter}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
