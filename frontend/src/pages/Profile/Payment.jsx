import React from 'react';
import {Table} from 'flowbite-react';

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
                        <th className="px-4 py-2 rounded-l-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Name</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>Date</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>QTY</th>
                        <th className="px-4 py-2" style={{background:colors.primary.green,color:colors.primary.white}}>price</th>
                        <th className="px-4 py-2 rounded-r-lg" style={{background:colors.primary.green,color:colors.primary.white}}>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-2" >Burger</td>
                        <td className="px-4 py-2" >2024.11.01</td>
                        <td className="px-4 py-2" >10</td>
                        <td className="px-4 py-2" >$20</td>
                        <td className="px-4 py-2" >$200</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
