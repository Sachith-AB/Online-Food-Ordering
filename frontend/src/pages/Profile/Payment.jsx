import React from 'react';

import pizza from '../../assets/burger.jpg';
import colors from '../../theme/colorPalate';
import SideBar from '../../components/SideBar';

export default function Payment() {
    return (
        <div className='flex flex-col sm:flex-row min-h-screen w-full'>
            <div className="flex justify-center sm:justify-start w-full sm:w-1/4">
                <SideBar/>
            </div>
            <div className='p-5 flex flex-col flex-1'>
                <p className=' font-semibold text-3xl mb-5'>Payments</p>
                <table>
                    <thead>
                        <tr>
                        <th className="px-4 py-2 rounded-l-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Food</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Date</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>QTY</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Price</th>
                        <th className="px-4 py-2 rounded-r-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-2 shadow-lg'>
                            <td className="px-4 py-2 flex flex-col justify-center items-center" >
                                <img src={pizza} alt="" className='h-20 w-20 rounded-full' />
                                <td className="px-4 py-2 font-semibold text-center" >Burger</td>
                            </td>
                            <td className="px-4 py-2 font-semibold text-center" >2024.11.01</td>
                            <td className="px-4 py-2 font-semibold text-center" >10</td>
                            <td className="px-4 py-2 font-semibold text-center" >$20</td>
                            <td className="px-4 py-2 font-semibold text-center" >$200</td>
                        </tr> 
                        <tr className='border-b-2 shadow-lg'>
                            <td className="px-4 py-2 flex flex-col justify-center items-center" >
                                <img src={pizza} alt="" className='h-20 w-20 rounded-full' />
                                <td className="px-4 py-2 font-semibold text-center" >Burger</td>
                            </td>
                            <td className="px-4 py-2 font-semibold text-center" >2024.11.01</td>
                            <td className="px-4 py-2 font-semibold text-center" >10</td>
                            <td className="px-4 py-2 font-semibold text-center" >$20</td>
                            <td className="px-4 py-2 font-semibold text-center" >$200</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    )
}
