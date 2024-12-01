import React from 'react'

import logo from '../assets/logo.png'
import colors from '../theme/colorPalate'

export default function Logo() {
    return (
        <div className='flex flex-row items-center font-semibold'>
            {/* <img src={logo} className='h-10'/> */}
            <span className=''>
                Food
            </span>
            <p className='py-2 px-4 text-white rounded-lg font-bold' style={{background:colors.primary.green}}>
                Buddy
            </p>
        </div>
    )
}
