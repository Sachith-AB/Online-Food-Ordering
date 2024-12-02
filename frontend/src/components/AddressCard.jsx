import React from 'react'

import colors from '../theme/colorPalate';
import SecondryButton from '../components/SecondryButton';
import { AiFillHome } from 'react-icons/ai';

export default function AddressCard() {
    return (
        <div className='w-52 h-52 shadow-lg rounded-lg'>
            <div className='flex  gap-2 m-3'>
                <AiFillHome size={50} style={{color:colors.primary.green}}/>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg mt-3'>Home</p>
                    <p className=' text-gray-400 text-sm mt-5'>Weliwa Junction,Morawaka india morawaka sri lanka</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <SecondryButton
                text='SELECT'
                className='m-4'/>
            </div>
        </div>
    )
}
