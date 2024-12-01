import React from 'react'

import colors from '../theme/colorPalate'

export default function SecondryButton({text}) {
    return (
        <button className='w-40 h-12 rounded-lg font-semibold border-2' outline 
            style={{
                color:colors.primary.green,borderColor:colors.primary.green,
                transition: 'background-color 0.3s ease'
            }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.secondry.darkGreen;
                    e.target.style.color = colors.primary.white}}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.primary.white;
                    e.target.style.color = colors.primary.green
                }}
            >
            {text}
        </button>
    )
}
