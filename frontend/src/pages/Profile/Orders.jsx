import React, { useState } from 'react';

import pizza from '../../assets/burger.jpg';
import colors from '../../theme/colorPalate';
import SideBar from '../../components/SideBar';
import { MdMenu } from 'react-icons/md';

export default function Orders() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className='flex flex-col sm:flex-row min-h-screen w-full'>
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
                    <p className=' font-semibold text-3xl mb-5'>Orders</p>
                    <button
                        onClick={toggleSidebar}
                        className="sm:hidd rounded-lg mb-4"
                        style={{color:colors.primary.green}}
                        
                        >
                        <MdMenu size={30}/>
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th className="px-4 py-2 rounded-l-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Food</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Time</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>QTY</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Price</th>
                        <th className="px-4 py-2 rounded-r-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='border-b-2  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <td className="px-4 py-2 flex flex-col justify-center items-center" >
                            <img src={pizza} alt="" className='h-20 w-20 rounded-full' />
                            <td class="px-4 py-2 font-semibold text-center first-letter:capitalize"  >Burger</td>
                        </td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >10.00 PM</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >10</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >$20</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >$200</td>
                    </tr>
                    <tr className='border-b-2  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <td className="px-4 py-2 flex flex-col justify-center items-center" >
                            <img src={pizza} alt="" className='h-20 w-20 rounded-full' />
                            <td class="px-4 py-2 font-semibold text-center first-letter:capitalize"  >Burger</td>
                        </td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >10.00 AM</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >10</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >$20</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >$200</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
