import React, { useState } from 'react'

import {FaShoppingCart} from 'react-icons/fa'

import colors from '../theme/colorPalate';

export default function RestuarantFood({name,image,description,price}) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateDescription = description && description.length > 250
        ? `${description.slice(0, 250)}...` 
        : description;

    return (
        <div className='w-full bg-white shadow-lg rounded-lg h-52 md:h-52'>
            <div className='flex justify-between  mr-3'>
                <div className='flex flex-row'>
                    <img src={image} alt="food image" className='h-52 md:h-52 w-40 md:w-52  rounded-l-lg object-cover'/>
                    <div className='m-5'>
                        <div className='flex items-center gap-3'>
                            <h1 class='first-letter:capitalize font-bold text-lg'>
                                {name}
                            </h1>
                            <p className='font-semibold text-gray-400'>{price}</p>
                            <button className="w-12 h-10 bg-white relative">
                                <FaShoppingCart className="text-xl" />
                            </button>
                        </div>
                        <p
                        className="text-sm overflow-hidden break-words"
                        style={{ maxWidth: "100%", wordWrap: "break-word" }}
                        >
                        {description && (
                            <>
                            {isExpanded ? description : truncateDescription}
                            {description.length > 250 && (
                                <span
                                onClick={toggleExpand}
                                className="cursor-pointer ml-1 hover:underline"
                                style={{ color: colors.primary.green }}
                                >
                                {isExpanded ? "Read Less" : "Read More"}
                                </span>
                            )}
                            </>
                        )}
</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
