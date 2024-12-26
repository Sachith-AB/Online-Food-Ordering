import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import colors from '../theme/colorPalate';

export default function RestaurantCard({ 
    image, 
    name, 
    address, 
    description, 
    startDate, 
    closeDate, 
    startTime, 
    closeTime 
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
                    className="absolute top-2 left-2 text-sm text-white px-3 py-1 rounded-full"
                    style={{ background: colors.natural.lime }}
                >
                    Open
                </span>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold capitalize">{name}</h3>
                        <p className="text-sm text-gray-500 flex items-center">
                            <MdLocationOn className="mr-1" /> {address}
                        </p>
                    </div>
                    <button 
                        onClick={toggleFavorite} 
                        className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-400'} transition-colors`}
                    >
                        <AiOutlineHeart/>
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
                        <span className="font-medium">Start&nbsp;: &nbsp;</span> {startDate} at {startTime}
                    </div>
                    <div className="flex items-center mt-1">
                        <AiOutlineClockCircle className="mr-2 text-gray-500" />
                        <span className="font-medium">Close : &nbsp;</span> {closeDate} at {closeTime}
                    </div>
                </div>
            </div>
        </div>
    );
}
