import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import SideBar from '../../components/SideBar';
import InputField from '../../components/InputField';
import SecondryButton from '../../components/SecondryButton'
import colors from '../../theme/colorPalate';
import user from '../../assets/user.jpg'
import { MdMenu } from 'react-icons/md';
import { getUserDetails } from '../../core/user';

export default function Profile() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const {currentUser} = useSelector((state)=>state.user);
    const [data,setData] = useState({});

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    useEffect(()=>{
        const fetchDetails = async () => {
            try {
                const data = await getUserDetails(currentUser.jwt); 
                setData(data);
            } catch (error) {
                console.error("Error fetching user details:", error); 
            }
        }
        fetchDetails();
    },[currentUser])
    console.log(data)

    return (
        <div className="flex flex-col sm:flex-row h-screen w-full">
            {/* Sidebar Section */}
            <div className="flex justify-center sm:justify-start w-full sm:w-1/4">
                <>
                    {isSidebarVisible && (
                        <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden"
                        onClick={toggleSidebar} // Closes sidebar when clicking outside
                        ></div>
                    )}
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-20 transform transition-transform duration-300 ${
                        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
                        } sm:relative sm:translate-x-0`}
                    >
                        <SideBar />
                    </div>
                </>
            </div>
            <div className="flex flex-col flex-1">
                <div className='flex flex-row justify-between mt-5 px-5'>
                    <h1 className="font-semibold text-3xl">Profile</h1>
                    <button
                        onClick={toggleSidebar}
                        className="flex sm:hidden sm:hidd rounded-lg mb-4"
                        style={{color:colors.primary.green}}
                        
                        >
                        <MdMenu size={30}/>
                    </button>
                </div>
                <p className=" mt-5 px-5 text-sm text-gray-400">
                        Please ensure all information entered is accurate and correct. Incorrect details may result in delays or rejection of your submission.
                </p>
                <div className="mt-5 px-5 flex flex-col justify-start w-full">
                    <form className="w-full max-w-4xl ">
                        <div className='flex flex-col md:flex-row gap-3 w-full '>
                            <div className='w-full md:w-1/3 flex flex-col gap-3 justify-center'>
                                <img src={user} className='h-40 w-40 md:h-60 md:w-60  object-cover rounded-full' alt="profile photo" />
                                <input type="file" name="profile" id="profile" />
                                <SecondryButton text={'Upload '}/>
                            </div>
                            <div className='w-full md:2/3 '>
                                <InputField 
                                    type={'text'}
                                    label={'Full name'}
                                    id='name'
                                    placeholder='Enter your full name'
                                    value={data.name}
                                />
                                <InputField 
                                    type={'email'}
                                    label={'Email address'}
                                    id='email'
                                    placeholder='Enter your email'
                                    value={data.email}
                                />
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-semibold mb-1">
                                        Select Role
                                    </label>
                                    <select
                                        id="role"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
                                        value={data.role}
                                    >
                                        <option value="" style={{background:colors.primary.white}} className=''></option>
                                        <option value="ROLE_CUSTOMER" style={{background:colors.primary.white}} className='hover:text-white hover:bg-green-500'>Customer</option>
                                        <option value="ROLE_RESTAURANT_OWNER" style={{background:colors.primary.white}} className=''>Owner</option>
                                    </select>
                                </div>
                                <div className='mt-0 md:mt-14'>
                                    <SecondryButton text={'Update Details'}/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form className="w-full max-w-4xl mt-5">
                        <h1 className="font-semibold text-3xl mb-5">Change Password</h1>
                        <InputField
                            type={'password'}
                            label={'Current Password'}
                            id='password'
                            placeholder='Enter your current password'
                            icon={true}
                        />
                        <InputField
                            type={'password'}
                            label={'New Password'}
                            id='password'
                            placeholder='Enter your new password'
                            icon={true}
                        />
                        <InputField
                            type={'password'}
                            label={'Confirm new Password'}
                            id='password'
                            placeholder='Confirm your new password'
                            icon={true}
                        />
                        <div className='mt-0 mt-5'>
                            <SecondryButton text={'Change Password'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
