import React, { useState } from 'react'

import { AiOutlineDown } from "react-icons/ai";

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
        <div className='w-full bg-white shadow-lg rounded-lg h-full'>
            <div className='flex justify-between items-center mr-3'>
                <div className='flex justify-between items-center mr-3'>
                    <img src={image} alt="food image" className='sm:h-44 lg:h-52 sm:w-40 lg:w-52  rounded-l-lg object-cover'/>
                    <div className='m-5'>
                        <div className='flex flex-wrap items-center gap-3'>
                            <h1 class='first-letter:capitalize font-bold text-lg'>
                                {name}
                            </h1>
                            <p className='font-semibold text-gray-400'>{price}</p>
                        </div>
                        <p className="text-sm">
                            {description && (
                                <>
                                    {isExpanded ? description : truncateDescription}
                                    {description.length > 250 && (
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
                <AiOutlineDown />
            </div>
        </div>
    )
}
