import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import pizza from '../../assets/pizza.jpg'
import colors from '../../theme/colorPalate'
import InputField from '../../components/InputField'
import { loginValidate } from '../../core/Validation';
import { signInFailure, signInStart, signInSucess } from '../../theme/userSlice';

export default function Login() {

    const [formData,setFormData] = useState({});
    const [errors,setErrors] = useState({});
    const [errorB,setErrorB] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSubmit = async (e) => {
        e.preventDefault();
    
        // Perform validation and capture errors immediately
        const validationErrors = loginValidate(formData);
    
        if (Object.values(validationErrors).some((error) => error !== "")) {
            // If there are validation errors, update the error state and stop further processing
            setErrors(validationErrors);
            dispatch(signInFailure("Validation errors found."));
            return;
        }
    
        try {
            // Start the sign-in process
            dispatch(signInStart());
    
            // Perform the API request
            const res = await fetch('http://localhost:5454/auth/signin', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            const data = await res.json();
    
            if (!res.ok || data.success === false) {
                // Handle API errors
                dispatch(signInFailure(data.message || "Failed to sign in"));
                return;
            }
    
            // Successful sign-in
            dispatch(signInSucess(data));
            navigate('/');
        } catch (error) {
            // Handle any other errors
            console.error("Error during sign-in:", error);
            setErrorB(error);
            dispatch(signInFailure("An unexpected error occurred."));
        }
    };
    
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
                <form className='w-full max-w-md' onSubmit={formSubmit}>
                    <h2 className='text-3xl font-bold text-center'>Welcome Back!</h2>
                    <p className='text-lg text-center mb-6 text-gray-400 font-semibold'>Enter your email and password</p>
                    <InputField 
                        type={'email'}
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
                        Sign In
                    </button>
                    <p className="text-sm text-center text-gray-500 mt-4 font-semibold">
                        Don't have an account?{" "}
                        <a href="register" className="hover:underline font-bold" style={{color:colors.primary.green}}>
                            Sign Up
                        </a>
                    </p>
                    {
                        errorB && (
                            <span>
                                {errorB}
                            </span>
                        )
                    }
                </form>
            </div>
        </div>
    )
}
