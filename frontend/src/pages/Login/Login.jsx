import React from 'react'

import pizza from '../../assets/pizza.jpg'
import PrimaryButton from '../../components/PrimaryButton'
import colors from '../../theme/colorPalate'

export default function Login() {
    return (
        <div className='flex h-screen '>
            <div className='w-1/2 hidden md:flex items-center justify-center'>
                <img 
                    src={pizza}
                    alt='image'
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-8 bg-white'>
                <form className='w-full max-w-md'>
                    <h2 className='text-3xl font-bold text-center'>Welcome Back!</h2>
                    <p className='text-lg text-center mb-6 text-gray-400 font-semibold'>Enter your email and password</p>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                        />
                    </div>
                    <a href='#' className=' text-sm hover:underline cursor-pointer' style={{color:colors.primary.green}}>Forgot Password</a>
                    <button 
                        className='w-full px-2 py-3 text-white rounded-lg mt-2' 
                        style={{
                            background:colors.primary.green,
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondry.darkGreen}
                        onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary.green}
                    >
                        Sign In
                    </button>
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Don't have an account?{" "}
                        <a href="#" className="hover:underline" style={{color:colors.primary.green}}>
                            Sign Up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}
