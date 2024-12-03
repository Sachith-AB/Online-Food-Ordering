import React from 'react';

import restuarant from '../../assets/restuarant.jpeg';
import colors from '../../theme/colorPalate';
import SideBar from '../../components/SideBar';

export default function Favorite() {
    return (
        <div className='flex flex-col sm:flex-row min-h-screen w-full'>
            <div className="flex justify-center sm:justify-start w-full sm:w-1/4">
                <SideBar/>
            </div>
            <div className='p-5 flex flex-col flex-1'>
                <p className=' font-semibold text-3xl mb-5'>Favorites</p>
                <table>
                    <thead>
                        <tr>
                        <th className="px-4 py-2 rounded-l-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Food</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Start Time</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Type</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Address</th>
                        <th className="px-4 py-2 rounded-r-lg" style={{background:colors.primary.green,color:colors.primary.white}}>contact</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='border-b-2  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <td className="px-4 py-2 flex flex-col justify-center items-center" >
                            <img src={restuarant} alt="" className='h-20 w-20 rounded-full' />
                            <td class="px-4 py-2 font-semibold text-center first-letter:capitalize" >Avintha Food</td>
                        </td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >Monday - Sunday: 9:00 AM - 11:00 PM</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >Italian</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >123 Main Street, Colombo, Sri Lanka</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >+94 77 123 4567</td>
                    </tr>
                    <tr className='border-b-2  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                    <td className="px-4 py-2 flex flex-col justify-center items-center" >
                            <img src={restuarant} alt="" className='h-20 w-20 rounded-full' />
                            <td class="px-4 py-2 font-semibold text-center first-letter:capitalize" >Avintha Food</td>
                        </td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >Monday - Sunday: 9:00 AM - 11:00 PM</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >Italian</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >123 Main Street, Colombo, Sri Lanka</td>
                        <td className="px-4 py-2 font-semibold text-center items-center" >+94 77 123 4567</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}