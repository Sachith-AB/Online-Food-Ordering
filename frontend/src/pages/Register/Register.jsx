import React, { useState } from 'react'

import pizza from '../../assets/burger.jpg'
import colors from '../../theme/colorPalate'
import InputField from '../../components/InputField'

export default function Register() {

    const [formData,setFormData] = useState({
        name:''
    });

    const handleChange = (e) => {
        console.log(e.target.id, e.target.value);
        setFormData({...formData,
            [e.target.id] : e.target.value.trim() 
        });
        console.log(formData);
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        //console.log(formData);
    }
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
                <form className='w-full max-w-md' onSubmit={formSubmit}>
                    <h2 className='text-3xl font-bold text-center'>Create an Account</h2>
                    <p className='text-lg text-center mb-6 text-gray-400 font-semibold'>
                        Enter your personal details join with us.
                    </p>
                    <InputField 
                        type={'text'}
                        label={'Full name'}
                        id='name'
                        placeholder='Enter your full name'
                        onChange={handleChange}
                    />
                    <InputField 
                        type={'email'}
                        label={'Email address'}
                        id='email'
                        placeholder='Enter your email'
                        onChange={handleChange}
                    />
                    <InputField 
                        type={'password'}
                        label={'Password'}
                        id='password'
                        placeholder={'Enter your password'}
                        onChange={handleChange}
                    />
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold mb-1">
                            Select Role
                        </label>
                        <select
                            id="role"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                            onChange={handleChange}
                        >
                            <option value="customer" style={{background:colors.primary.white}} className='hover:text-white hover:bg-green-500'>Customer</option>
                            <option value="admin" style={{background:colors.primary.white}} className=''>Admin</option>
                            <option value="user" style={{background:colors.primary.white}} className=''>User</option>
                            <option value="manager" style={{background:colors.primary.white}} className=''>Manager</option>
                        </select>
                    </div>
                    <a href='#' className=' text-sm hover:underline cursor-pointer font-semibold' style={{color:colors.primary.green}}>Forgot Password</a>
                    <button 
                        type='submit'
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
                    <p className="text-sm text-center text-gray-500 mt-4 font-semibold">
                        Already have an account?{" "}
                        <a href="login" className="hover:underline font-bold" style={{color:colors.primary.green}}>
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}
