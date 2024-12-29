import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import colors from '../theme/colorPalate';

export default function RestaurantFood({ name, image, description, price }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateDescription = description && description.length > 250
        ? `${description.slice(0, 250)}...` 
        : description;

    return (
        <div className="bg-white shadow-lg rounded-lg w-full md:w-72 h-auto p-4 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-40 h-40 md:h-40 relative rounded-lg overflow-hidden">
                <img src={image} alt="food" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-xl font-semibold capitalize">{name}</h1>
                        <p className="text-lg font-semibold text-gray-500">{price}</p>
                    </div>
                    <button className="w-12 h-12 flex justify-center items-center bg-green-500 rounded-full hover:bg-green-600 transition-all">
                        <FaShoppingCart className="text-white text-xl" />
                    </button>
                </div>
                <div>
                    <p className="text-sm text-gray-600 mt-2 overflow-hidden">
                        {description && (
                            <>
                                {isExpanded ? description : truncateDescription}
                                {description.length > 250 && (
                                    <span
                                        onClick={toggleExpand}
                                        className="cursor-pointer ml-1 text-green-600 hover:underline"
                                    >
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                    </span>
                                )}
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
