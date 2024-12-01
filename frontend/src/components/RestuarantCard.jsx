import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import colors from '../theme/colorPalate';

export default function RestaurantCard({ image, name, description }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateDescription = description && description.length > 20 
        ? `${description.slice(0, 20)}...` 
        : description;

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg lg:w-1/6 sm:w-1/3">
            <div>
                <img src={image} alt={name} className="h-60 w-full rounded-t-md relative" />
            </div>
            <span className='flex absolute m-2 text-white rounded-full px-2 py-1 justify-center items-center text-center text-sm'style={{background:colors.natural.lime}}>Open</span>
            <div className="flex flex-row items-center justify-between m-3">
                <div>
                    <p className="first-letter:capitalize font-semibold">{name}</p>
                </div>
                <div>
                    <AiOutlineHeart />
                </div>
            </div>
            <div className="m-3">
                <p className="text-sm">
                    {description && (
                        <>
                            {isExpanded ? description : truncateDescription}
                            {description.length > 20 && (
                                <span
                                    onClick={toggleExpand}
                                    className="cursor-pointer ml-1 hover:underline"
                                    style={{color:colors.primary.green}}
                                >
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </span>
                            )}
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
