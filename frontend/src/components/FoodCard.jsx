import React from 'react'

export default function FoodCard({image,name}) {
    return (
        <div className='flex flex-col items-center text-center justify-center'>
            <img src={image} alt="" className='h-52 w-52 rounded-full'/>
            <p class="first-letter:capitalize font-semibold text-sm">{name}</p>
        </div>

    )
}
