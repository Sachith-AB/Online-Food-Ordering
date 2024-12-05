import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import home from '../../assets/home.jpg'
import pizza from '../../assets/pizza.jpg'
import burger from '../../assets/burger.jpg'
import PrimaryButton from '../../components/PrimaryButton'
import SecondryButton from '../../components/SecondryButton'
import FoodCard from '../../components/FoodCard'
import RestuarantCard from '../../components/RestuarantCard'

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-col md:flex-row  items-center justify-start'>
                <div className='flex flex-col w-full md:w-1/2 text-start items-center lg:justify-start'>
                    <div className='ml-5 sm:ml-10 md:ml-16 lg:ml-20'>
                        <p className="text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-start">
                            Where taste meets the myth
                        </p>
                        <p className='mt-5 text-gray-400 font-semibold'>Eat away at hunger.Lend a hand, give a can.You can help beat hunger!</p>
                        <div className='flex flex-row mt-5 gap-3 lg:justify-start md:justify-center sm:justify-center'>
                            <PrimaryButton text={'Get Started'}/>
                            <SecondryButton text={'Explore Menu'}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/2 md:w-full text-start items-center lg:justify-start sm:mt-10">
                    <div className="relative max-w-xs mx-auto mt-10">
                        <div className="relative rounded-full overflow-hidden w-52 h-52 md:w-96 md:h-96">
                            <img src={home} alt="Food Image" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-row absolute top-0 ml-40 shadow-lg text-white bg-white bg-opacity-50 px-2 py-1 rounded-full">
                            <span className="text-sm font-bold text-gray-700">5.0 Ratings</span>
                            <div className="flex">
                                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 sm:bottom-1 ml-28 md:ml-60 mt-5 left-5 w-full  sm:w-64 bg-white bg-opacity-50 p-4 rounded-lg shadow-lg flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <img className="w-12 h-12 rounded-full" src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg" alt="Profile Image" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Italian Pasta</h3>
                                <p className="text-gray-500 text-sm">Today at 12:00 PM</p>
                                <p className="mt-2 text-gray-700 text-sm">You can help beat hunger!</p>
                            </div>
                        </div>
                        <div className="absolute hidden md:flex bottom-10 mr-60  right-5 w-full sm:w-64 bg-white bg-opacity-50 p-4 rounded-lg shadow-lg  items-center space-x-3">
                            <div className="flex-shrink-0">
                                <img className="w-12 h-12 rounded-full" src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg" alt="Profile Image" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Italian Pasta</h3>
                                <p className="text-gray-500 text-sm">Today at 12:00 PM</p>
                                <p className="mt-2 text-gray-700 text-sm">It’s time for hunger to can it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row sm:flex-col items-center justify-start mt-10'>
                <div className='ml-5 sm:ml-10 md:ml-16 lg:ml-20'>
                    <p className='text-xl font-bold'>
                        Pick Your Meal Here
                    </p>
                    <div className="flex flex-row flex-wrap w-full gap-3 mt-5 overflow-x-auto">
                        <FoodCard image={home} name="desset" />
                        <FoodCard image={burger} name="burger" />
                        <FoodCard image={pizza} name="pizza" />
                        <FoodCard image={home} name="desset" />
                        <FoodCard image={home} name="desset" />
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row sm:flex-col items-center justify-start mt-10'>
                <div className='ml-5 sm:ml-10 md:ml-16 lg:ml-20'>
                    <p className='text-xl font-bold'>
                        Pick From Your Favorite Restuarant
                    </p>
                    <div className='flex flex-row flex-wrap justify-center  gap-3 mt-5'>
                        <RestuarantCard image={home} name={'desset'} description={"To create an auto-sliding effect for your food menu, you can To create an auto-sliding effect for your food menu, you can use Tailwind CSS along with a simple JavaScript interval for automatic sliding. Since Flowbit"}/>
                        <RestuarantCard image={burger} name={'burger'}/>
                        <RestuarantCard image={pizza} name={'pizza'}/>
                        <RestuarantCard image={home} name={'desset'}/>
                        <RestuarantCard image={pizza} name={'desset'}/>
                        <RestuarantCard image={home} name={'desset'}/>
                        <RestuarantCard image={home} name={'desset'}/>
                        <RestuarantCard image={home} name={'desset'}/>
                        <RestuarantCard image={home} name={'desset'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
