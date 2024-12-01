import React, { useEffect, useRef } from "react";

import home from '../assets/home.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import FoodCard from "./FoodCard";

export default function Sliding() {

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let currentIndex = 0;
    
        const slideInterval = setInterval(() => {
          const width = slider.offsetWidth / 3; // Adjust this if needed based on the number of items you want visible at a time
            if (slider) {
            currentIndex = (currentIndex + 1) % 3; // Keep it within 3 slides, you can change this based on number of items
            slider.style.transform = `translateX(-${currentIndex * width}px)`;
            }
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(slideInterval);
        }, []);

    return (
        <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out" ref={sliderRef}>
                <div className="flex flex-row gap-5">
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={burger} name={"burger"} />
                    <FoodCard image={pizza} name={"pizza"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                    <FoodCard image={home} name={"desset"} />
                </div>
            </div>
        </div>
    )
}
