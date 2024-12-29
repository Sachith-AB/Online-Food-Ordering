import React from 'react'
import pizza from '../assets/pizza.jpg'


export default function FoodCard({image,name,price,rating}) {

    // Dynamically import the image
    const imageSrc = new URL(`../assets/${image}`, import.meta.url).href;

    return (
        <div className='relative flex flex-col items-center text-center justify-center'>
            <img src={imageSrc}  alt="" className='h-96 w-80 rounded-lg object-cover'/>
            
            <p class="absolute top-2 right-2 first-letter:capitalize font-bold text-lg text-white">LKR{price}</p>
            <div className="absolute bottom-2 left-2 flex flex-col items-start space-y-1">
                <p className="first-letter:capitalize font-bold text-lg text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg">
                    {name}
                </p>
                <div className='flex'>
                    <span className="text-sm font-bold text-gray-200 bg-black bg-opacity-50 px-2 py-1 rounded-lg">
                        5.0 Ratings
                    </span>
                    <div className="flex">
                        <span className="text-yellow-400 bg-black bg-opacity-50 px-2 py-1 rounded-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
