import React from 'react'

import colors from '../theme/colorPalate'

export default function PrimaryButton({text,onclick}) {
    return (
        <button className='w-40 h-12 rounded-lg text-white font-semibold'
            style={{
                background:colors.primary.green,
                transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondry.darkGreen}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary.green}
            onClick={onclick}
        >
            {text}
        </button>
    )
}
