import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import pizza from '../../assets/burger.jpg'
import colors from '../../theme/colorPalate'
import InputField from '../../components/InputField'
import { registerValidate } from '../../core/Validation';

export default function Register() {

    const [formData,setFormData] = useState({});
    const [errors,setErrors] = useState({});
    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();
    
        const validationErrors = registerValidate(formData);
        setErrors(validationErrors);
    
        // Directly check validationErrors, not errors
        if (
            validationErrors.name === '' &&
            validationErrors.email === '' &&
            validationErrors.password === '' &&
            validationErrors.cPassword === '' &&
            validationErrors.role === ''
        ) {
            try {
                const res = await fetch("http://localhost:5454/auth/signup", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                if (!res.ok) {
                    throw new Error("Failed to register");
                }
    
                const data = await res.json();
                console.log('Registration successful:', data);
                navigate('/login');
            } catch (error) {
                console.error('Registration error:', error);
            }
        }
    };
    
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
                        value={formData.name}
                        setFormData={setFormData}
                        error={errors.name}
                    />
                    <InputField 
                        type={'text'}
                        label={'Email address'}
                        id='email'
                        placeholder='Enter your email'
                        value={formData.email}
                        setFormData={setFormData}
                        error={errors.email}
                    />
                    <InputField 
                        type={'password'}
                        label={'Password'}
                        id='password'
                        placeholder={'Enter your password'}
                        value={formData.password}
                        setFormData={setFormData}
                        error={errors.password}
                        icon={true}
                    />
                    <InputField 
                        type={'password'}
                        label={'Confirm Password'}
                        id='cPassword'
                        placeholder={'Confirm your password'}
                        value={formData.cPassword}
                        setFormData={setFormData}
                        error={errors.cPassword}
                        icon={true}
                    />
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold mb-1">
                            Select Role
                        </label>
                        <select
                            id="role"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                            onChange={(e)=>{
                                setFormData({...formData,
                                    [e.target.id] : e.target.value.trim()
                                });
                            }}
                            style={{
                                borderColor:errors.role ? 'red':''
                            }}
                        >
                            <option value="" style={{background:colors.primary.white}} className=''></option>
                            <option value="ROLE_CUSTOMER" style={{background:colors.primary.white}} className='hover:text-white hover:bg-green-500'>Customer</option>
                            <option value="ROLE_RESTAURANT_OWNER" style={{background:colors.primary.white}} className=''>Owner</option>
                        </select>
                        {
                        errors.role && (
                            <p className='text-red-600 font-semibold'>{errors.role}</p>
                        )
                    }
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
