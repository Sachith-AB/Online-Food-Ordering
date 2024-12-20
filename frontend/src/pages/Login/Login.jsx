import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import pizza from '../../assets/pizza.jpg'
import colors from '../../theme/colorPalate'
import InputField from '../../components/InputField'
import { loginValidate } from '../../core/Validation';
import { signInFailure, signInStart, signInSucess } from '../../theme/userSlice';

export default function Login() {

    const [formData,setFormData] = useState({});
    const [errors,setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSubmit = async (e) => {
        e.preventDefault();
        setErrors(loginValidate(formData));
        if(errors.email === '' && errors.password === ''){
            try{
                dispatch(signInStart());
                const res = await fetch('http://localhost:5454/auth/signin',{
                    method:"POST",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(formData),
                })
                const data = await res.json();
                if(data.success === false){
                    return dispatch(signInFailure(data.message));
                }
                console.log(data);
                if(res.ok){
                    dispatch(signInSucess(data));
                    navigate('/')
                }
            }catch(error){
                console.log(error);
            }
        }else{
            dispatch(signInFailure());
        }
        console.log(errors);
    }
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
                </form>
            </div>
        </div>
    )
}
