import React, { useState } from 'react';
import { IoIosArrowForward,  IoIosArrowBack } from "react-icons/io";

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/baaner2.png'; // Add more images as needed
import banner3 from '../../assets/banner3.jpg';
import bannerCard from '../../assets/bannerCard.png';

const Banner = () => {
    // State to track the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of images for the carousel
    const images = [banner1, banner2, banner3];

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex items-center gap-4">
            {/* Carousel Section */}
            <div className="relative w-2/3">
                <div className="overflow-hidden">
                    <img src={images[currentIndex]} alt="Banner Slide" className="w-full h-auto" />
                </div>

                {/* Carousel Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute bottom-1 right-14 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded shadow-lg hover:bg-gray-800 transition"
                >
                    <IoIosArrowBack  size={24}/>

                </button>
                <button
                    onClick={nextSlide}
                    className="absolute bottom-1 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded shadow-lg hover:bg-gray-800 transition"
                >
                 
                    <IoIosArrowForward size={24}/>
                </button>
            </div>

            {/* Static Card Section */}
            <div>
                <img src={bannerCard} alt="Banner Card" className="w-96 h-[450px]" />
            </div>
        </div>
    );
};

export default Banner;
