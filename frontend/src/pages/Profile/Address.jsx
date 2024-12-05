import React, { useState } from 'react';

import SideBar from '../../components/SideBar';
import AddressCard from '../../components/AddressCard';
import AddAddress from '../../components/AddAddress';
import { MdMenu } from 'react-icons/md';
import colors from '../../theme/colorPalate';

export default function Address() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className='flex flex-col sm:flex-row h-screen w-full'>
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
            <div className='p-5 flex flex-col flex-1'>
                <div className='flex flex-row justify-between'>
                    <p className=' font-semibold text-3xl mb-5'>Addresses</p>
                    <button
                        onClick={toggleSidebar}
                        className="sm:hidd rounded-lg mb-4"
                        style={{color:colors.primary.green}}
                        
                        >
                        <MdMenu size={30}/>
                    </button>
                </div>
                <div className='flex flex-col md:flex-row gap-3 justify-center items-center'>
                    <AddressCard/>
                    <AddressCard/>
                    <AddressCard/>
                    <AddressCard/>
                    <AddAddress/>
                </div>
            </div>
        </div>
    )
}
