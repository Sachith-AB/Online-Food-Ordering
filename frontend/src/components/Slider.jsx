import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/effect-coverflow'; // Coverflow effect
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import FoodCard from './FoodCard';
import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import './FoodSlider.css'; // Custom styles
import { getFoodsDetails } from '../core/user';

// Dummy Data for Cards
// const foodItems = [
//     { id: 1, image: pizza, name: 'Burger', price: 10, rating: 4.5 },
//     { id: 2, image: burger, name: 'Fish Curry', price: 12, rating: 4.6 },
//     { id: 3, image: pizza, name: 'Pane Cake', price: 15, rating: 4.8 },
//     { id: 4, image: burger, name: 'Vanilla Cake', price: 20, rating: 4.7 },
//     { id: 5, image: pizza, name: 'Cheese Pizza', price: 18, rating: 4.9 },
// ];




const FoodSlider = ({jwt}) => {

    const [foodItems,setFoodItem] = useState([]);

    useEffect(()=>{
        const fetchDetails = async () => {
            try {
                const foods = await getFoodsDetails(jwt);
                //console.log(foods)
                setFoodItem(foods || []);
            } catch (error) {
                console.error("Error fetching user details:", error); 
                setFoodItem([]);
            }
        }
        fetchDetails();
    },[])
    //console.log(foodItems)
    return (
        <div className="max-w-xl md:max-w-7xl mx-auto mt-10">

            <Swiper
                effect={'coverflow'} // Add Coverflow effect
                grabCursor={true}    // Cursor grab effect
                centeredSlides={true} // Center the active slide
                loop={false}         // No infinite loop
                slidesPerView={'auto'} // Adjust slides dynamically
                coverflowEffect={{
                    rotate: 0, // No rotation
                    stretch: 0, // No stretch
                    depth: 100, // 3D depth effect
                    modifier: 2, // Effect multiplier
                    slideShadows: true, // Slide shadows
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                }}
                navigation={true} // Previous/Next buttons
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                {Array.isArray(foodItems) && foodItems.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: '300px' }}>
                        <FoodCard
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FoodSlider;
