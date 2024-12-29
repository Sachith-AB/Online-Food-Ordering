import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { useSelector } from 'react-redux';

import PrimaryButton from '../../components/PrimaryButton';
import SecondryButton from '../../components/SecondryButton';
import RestaurantCard from '../../components/RestuarantCard';
import FoodSlider from '../../components/Slider';
import restuarantImage from '../../assets/restuarant.jpeg';
import { getRestaurantDetails, getUserDetails } from '../../core/user';
import logo from '../../../public/logo.svg'

export default function Home() {
    const { currentUser } = useSelector((state) => state.user);
    const [data,setData] = useState({});
    const [restaurants,setRestaurants] = useState({});
    const [token,setToken] = useState("");

    useEffect(()=>{
        const fetchDetails = async () => {
            try {
                setToken(currentUser.jwt);
                const data = await getUserDetails(token); 
                const restaurant = await getRestaurantDetails(token)
                setData(data);
                setRestaurants(restaurant);
            } catch (error) {
                console.error("Error fetching user details:", error); 
            }
        }
        fetchDetails();
    },[currentUser])
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 py-10 mt-20">
                <div className="flex flex-col w-full md:w-1/2 text-start items-center lg:items-start">
                    <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-start">
                        Where taste meets the myth
                    </p>
                    <p className="mt-4 text-gray-400 font-semibold text-center lg:text-start">
                        Eat away at hunger. Lend a hand, give a can. You can help beat hunger!
                    </p>
                    <div className="flex flex-row mt-6 gap-4 justify-center lg:justify-start">
                        <PrimaryButton text="Get Started" />
                        <SecondryButton text="Explore Menu" />
                    </div>
                </div>
                <img src={logo} alt="" />
                <div className="flex flex-col items-center w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative rounded-full w-80 h-80 md:w-96 md:h-96">
                        <img src={restuarantImage} alt="Food Image" className="object-cover w-full h-full rounded-full" />
                        <div className="absolute top-0   transform -translate-x-1/2 bg-white bg-opacity-50 px-3 py-2 rounded-full shadow-md">
                            <span className="text-sm font-bold text-gray-700">5.0 Ratings</span>
                            <span className="text-yellow-400 ml-2">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="absolute top-60 left-0 hidden  transform -translate-x-1/2 bg-white bg-opacity-50 p-4 rounded-lg shadow-lg md:flex items-center space-x-3">
                            <img
                                className="w-12 h-12 rounded-full"
                                src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                                alt="Profile"
                            />
                            <div>
                                <h3 className="font-semibold text-sm">Italian Pasta</h3>
                                <p className="text-gray-500 text-sm">Today at 12:00 PM</p>
                                <p className="text-gray-700 text-sm">You can help beat hunger!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                token && (
                    <>
                    <div className="px-4 md:px-10 lg:px-20 py-10">
                        <p className="text-xl font-bold mb-6">Pick Your Meal Here</p>
                        <FoodSlider jwt={currentUser.jwt}/>
                    
                    </div>
                    <div className="px-4 md:px-10 lg:px-20 py-10">
                        <p className="text-xl font-bold mb-6">Pick From Your Favorite Restaurant</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            {
                                Array.isArray(restaurants) && restaurants.map((restaurant)=>(
                                    <RestaurantCard
                                    key={restaurant.id}
                                    image={restaurant.images}
                                    name={restaurant.name}
                                    address="123 Foodie Lane, Flavor Town"
                                    description={restaurant.description}
                                    openHours={restaurant.openingHours}
                                    phone={restaurant.contactInformation.mobile}
                                    email={restaurant.contactInformation.email}
                                    twitter={restaurant.contactInformation.twitter}
                                    open={restaurant.open}
                                    type={restaurant.cuisineType}
                                />
                                ))
                            }
                        </div>
                    </div>
                </>
                )
            }
        </div>
    );
}
