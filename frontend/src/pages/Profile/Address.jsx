import React from 'react';

import pizza from '../../assets/burger.jpg';
import colors from '../../theme/colorPalate';
import SideBar from '../../components/SideBar';
import AddressCard from '../../components/AddressCard';
import AddAddress from '../../components/AddAddress';

export default function Address() {
    return (
        <div className='flex flex-col sm:flex-row min-h-screen w-full'>
            <div className="flex justify-center sm:justify-start w-full sm:w-1/4">
                <SideBar/>
            </div>
            <div className='p-5 flex flex-col flex-1'>
                <p className=' font-semibold text-3xl mb-5'>Addreses</p>
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
