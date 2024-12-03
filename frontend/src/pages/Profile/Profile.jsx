import React from 'react';

import SideBar from '../../components/SideBar';
import InputField from '../../components/InputField';
import SecondryButton from '../../components/SecondryButton'
import colors from '../../theme/colorPalate';
import user from '../../assets/user.jpg'

export default function Profile() {
    return (
        <div className="flex flex-col sm:flex-row min-h-screen w-full">
            {/* Sidebar Section */}
            <div className="flex justify-center sm:justify-start w-full sm:w-1/4">
                <SideBar />
            </div>
            <div className="flex flex-col flex-1">
                <div className="mt-5 px-5">
                    <h1 className="font-semibold text-3xl">Profile</h1>
                    <p className="text-sm text-gray-400">
                        Please ensure all information entered is accurate and correct. Incorrect details may result in delays or rejection of your submission.
                    </p>
                </div>
                <div className="mt-5 px-5 flex justify-start w-full">
                    <form action="" className="w-full max-w-4xl ">
                        <div className='flex flex-col md:flex-row gap-3 w-full '>
                            <div className='w-full md:w-1/3 flex flex-col gap-3 justify-center'>
                                <img src={user} className='h-60 w-60 object-cover rounded-lg' alt="profile photo" />
                                <input type="file" name="profile" id="profile" />
                                <SecondryButton text={'Upload '}/>
                            </div>
                            <div className='w-full md:2/3 '>
                                <InputField 
                                    type={'text'}
                                    label={'Full name'}
                                    id='name'
                                    placeholder='Enter your full name'
                                />
                                <InputField 
                                    type={'email'}
                                    label={'Email address'}
                                    id='email'
                                    placeholder='Enter your email'
                                />
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
                                <div className='mt-0 md:mt-14'>
                                    <SecondryButton text={'Update Details'}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
