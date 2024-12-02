import React from 'react'

import pizza from '../../assets/burger.jpg'
import colors from '../../theme/colorPalate'

export default function Register() {
    return (
        <div className='flex min-h-screen'>
            <div className='w-1/2 hidden md:flex items-center justify-center'>
                <img 
                    src={pizza}
                    alt='image'
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-8 bg-white'>
                <form className='w-full max-w-md'>
                    <h2 className='text-3xl font-bold text-center'>Create an Account</h2>
                    <p className='text-lg text-center mb-6 text-gray-400 font-semibold'>
                        Enter your personal details join with us.
                    </p>
                    <div className="mb-4">
                        <label htmlFor="full-name" className="block text-sm font-semibold mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your Full name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                        />
                    </div>
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
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold mb-1">
                            Select Role
                        </label>
                        <select
                            id="role"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                        >
                            <option value="customer" style={{background:colors.primary.white}} className='hover:text-white hover:bg-green-500'>Customer</option>
                            <option value="admin" style={{background:colors.primary.white}} className=''>Admin</option>
                            <option value="user" style={{background:colors.primary.white}} className=''>User</option>
                            <option value="manager" style={{background:colors.primary.white}} className=''>Manager</option>
                        </select>
                    </div>
                    <a href='#' className=' text-sm hover:underline cursor-pointer font-semibold' style={{color:colors.primary.green}}>Forgot Password</a>
                    <button 
                        className='w-full px-2 py-3 text-white rounded-lg mt-2' 
                        style={{
                            background:colors.primary.green,
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondry.darkGreen}
                        onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary.green}
                    >
                        Register
                    </button>
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Already have an account?{" "}
                        <a href="login" className="hover:underline font-semibold" style={{color:colors.primary.green}}>
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}
