import React from 'react'

import colors from '../theme/colorPalate'

export default function Logo() {
    return (
        <div className='flex flex-row items-center font-bold text-xl'>
            {/* <img src={logo} className='h-10'/> */}
            <span className=''>
                Food
            </span>
            <p className='' style={{color:colors.primary.green}}>
                ies
            </p>
        </div>
    )
}
