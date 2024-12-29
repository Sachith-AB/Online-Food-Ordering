import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiOutlineFileText } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";

import colors from '../../theme/colorPalate';
import FeedbackForm from '../../components/FeedbackForm';
import RestuarantFood from '../../components/RestuarantFood';
import { getResaurant } from '../../core/Restaurant';

export default function RestuarantDetails() {
    const { currentUser } = useSelector((state) => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const [restaurant, setRestaurant] = useState({});
    const [selectedCategories, setSelectedCategories] = useState({
        all: false,
        vegetarian: false,
        nonVegetarian: false,
        seasonal: false,
        pizza: false,
        biriyani: false,
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const restaurantId = queryParams.get('id');

    useEffect(() => {
        const fetchDetails = async () => {
        try {
            const restaurant = await getResaurant(currentUser.jwt, restaurantId);
            setRestaurant(restaurant);
            setIsOpen(restaurant.open);
        } catch (error) {
            console.error("Error fetching restaurant details:", error);
        }
        };
        fetchDetails();
    }, [currentUser, restaurantId]);

    const handleCategoryToggle = (category) => {
        setSelectedCategories(prevState => ({
        ...prevState,
        [category]: !prevState[category]
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
        {/* Restaurant Header Section */}
        <div className="flex md:flex-row flex-col items-center justify-start mt-20">
            <div className="flex flex-col flex-wrap lg:w-1/2 sm:w-full text-start items-center lg:justify-start">
            <div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20">
                <div className="flex flex-wrap items-center">
                <p className="text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-start">
                    Welcome to
                </p>
                <p className="text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-start" style={{ color: colors.primary.green }}>
                    {restaurant.name}
                </p>
                </div>
                <p className="mt-5 text-gray-400 font-semibold">{restaurant.description}</p>
                <p className="text-gray-400 font-semibold mt-5">We specialize in a variety of cuisines to satisfy your cravings, including:</p>
                <ul className="mt-3 list-disc ml-5 text-gray-700 font-semibold">
                <li>{restaurant.cuisineType}</li>
                <li>Chinese</li>
                <li>Indian</li>
                <li>Mexican</li>
                <li>Continental</li>
                </ul>
            </div>
            </div>
            {/* Restaurant Image Section */}
            <div className="flex flex-col lg:w-1/2 sm:w-full text-start items-center lg:justify-start sm:mt-10">
            <div className="relative">
                <div className="rounded-full w-96 h-96 overflow-hidden">
                <img src={restaurant.images} alt="restaurant image" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-row absolute bottom-2 ml-52 shadow-lg text-white bg-white bg-opacity-50 px-2 py-1 rounded-full">
                <span className="text-sm font-bold text-gray-700">5.0 Ratings</span>
                <div className="flex">
                    <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
                </div>
                <div className="absolute top-10">
                <span className={`text-lg font-bold px-4 py-2 rounded-full ${isOpen ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {isOpen ? "Open Now" : "Closed"}
                </span>
                </div>
            </div>
            </div>
        </div>

        {/* How to Order Section */}
        <div className="flex sm:flex-col items-center justify-start mt-10">
            <div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20">
            <p className="text-xl font-bold text-center">How To Order</p>
            <p className="text-center text-gray-400">Follow these easy steps to order the menu you want and wait for it to be delivered.</p>
            <div className="flex lg:flex-row sm:flex-col flex-wrap justify-center items-center gap-3 mt-5">
                <div className="h-52 w-52 rounded-xl shadow-lg" style={{ background: colors.primary.green }}>
                    <div className="flex flex-col flex-wrap m-5">
                        <AiOutlineFileText size={30} style={{ color: colors.primary.white }} />
                        <h2 className="font-bold mt-5 text-lg text-white">Choose Your Menu</h2>
                        <p className="font-semibold mt-2 text-sm text-white">Select food or drink and add to your cart.</p>
                    </div>
                </div>
                <FaCircleArrowRight size={30} style={{ color: colors.primary.green }} className="hidden lg:block" />
                <div className="h-52 w-52 rounded-xl shadow-lg" style={{ background: colors.primary.green }}>
                    <div className="flex flex-col flex-wrap m-5">
                        <IoWalletOutline size={30} style={{ color: colors.primary.white }} />
                        <h2 className="font-bold mt-5 text-lg text-white">Checkout Order</h2>
                        <p className="font-semibold mt-2 text-sm text-white">Proceed to checkout to confirm your order.</p>
                    </div>
                </div>
                <FaCircleArrowRight size={30} style={{ color: colors.primary.green }} className="hidden lg:block" />
                <div className="h-52 w-52 rounded-xl shadow-lg" style={{ background: colors.primary.green }}>
                    <div className="flex flex-col flex-wrap m-5">
                        <BsCartCheck size={30} style={{ color: colors.primary.white }} />
                        <h2 className="font-bold mt-5 text-lg text-white">Wait For Delivery</h2>
                        <p className="font-semibold mt-2 text-sm text-white">Wait for your order to be prepared and delivered to your residence.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row w-full space-x-10 sm:gap-5 sm:items-center mt-5">
            <div className="flex w-full md:w-1/4 gap-5 ml-5 sm:ml-10 md:ml-16 lg:ml-20">
                <div className="bg-white rounded-lg m-2 w-full h-60">
                    <p className="font-bold text-lg m-2">Food Type</p>
                    {['all', 'vegetarian', 'nonVegetarian', 'seasonal'].map((category) => (
                    <div className="flex items-center gap-2 m-2" key={category}>
                        <div
                        className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-300 ${
                            selectedCategories[category] ? 'bg-white border-green-500' : 'bg-white border-green-500'
                        }`}
                        onClick={() => handleCategoryToggle(category)}
                        >
                        {selectedCategories[category] && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                        </div>
                        <label htmlFor={category} className="font-semibold text-gray-700">{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                    </div>
                    ))}
                </div>

                <div className="bg-white m-2 rounded-lg w-full h-60">
                    <p className="font-bold text-lg m-2">Food Category</p>
                    {['pizza', 'biriyani'].map((category) => (
                    <div className="flex items-center gap-2 m-2" key={category}>
                        <div
                        className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-300 ${
                            selectedCategories[category] ? 'bg-white border-green-500' : 'bg-white border-green-500'
                        }`}
                        onClick={() => handleCategoryToggle(category)}
                        >
                        {selectedCategories[category] && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                        </div>
                        <label htmlFor={category} className="font-semibold text-gray-700">{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                    </div>
                    ))}
                </div>
            </div>
        </div>

            {/* Display Food Items */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 ml-5 sm:ml-10 md:ml-16 lg:ml-20">
                <RestuarantFood category={selectedCategories} />
            </div>

            {/* Feedback Form */}
            <div className="mt-10">
                <FeedbackForm />
            </div>
        </div>
    );
}
