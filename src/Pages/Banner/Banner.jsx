import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/baaner2.png"; // Add more images as needed
import banner3 from "../../assets/banner3.jpg";
import cardPhoto from "../../assets/cardPhoto.png";

const Banner = () => {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const images = [banner1, banner2, banner3];

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center gap-4">
      {/* Carousel Section */}
      <div className="relative w-2/3">
        <div className="overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="Banner Slide"
            className="w-full h-auto"
          />
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -bottom-4 right-[50px] transform -translate-y-1/2 bg-gray-700 opacity-50 border-2 text-white p-2 rounded shadow-lg hover:bg-gray-800 transition"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -bottom-4 right-2 transform -translate-y-1/2 bg-gray-700 opacity-50 border-2 text-white p-2 rounded shadow-lg hover:bg-gray-800 transition"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Card Section */}
      <div className="bg-gray-200  max-w-sm mx-auto rounded shadow-md">
        <div className="bg-gray-400 py-2 mb-4 rounded-t-md text-center">
          <p className="text-white text-2xl font-bold">Our Consultent</p>
        </div>

        <div className="flex justify-center space-x-6 mb-4 items-center">
          <div className="border-2 border-gray-400 p-1 rounded-md">
            <img
              src={cardPhoto}
              alt="Dr. Abu Taleb Mollah"
              className="rounded-md w-18 h-22"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Dr. Abu Taleb Mollah
            </h3>
            <p className="text-sm font-semibold text-gray-700">BHMS, DU</p>
            <p className="text-sm text-gray-600">Medical Officer</p>
            <p className="text-sm text-gray-600">
              Dhaka University Medical Centre
            </p>
          </div>
        </div>

        <div className="bg-gray-300 p-4 mt-4 rounded-3xl border text-center">
          <p className="text-gray-700 text-sm">
            Dr. Taleb, an experienced homeopathy doctor & specialized in
            medicine. He has done his BHMS (Bachelor of Homeopathy Medicine &
            Surgery) degree from Dhaka University in the year of 1997 (1st
            Batch). In his professional life, currently working as a Medical
            Officer at the Medical Center of Dhaka University. Besides that, he
            regularly practices Homeopathy at the Sharif Homeo Pharmacy.
          </p>
        </div>

        <div className="flex justify-center items-center text-center bg-gray-500 py-2 mt-4 rounded-b-sm mx-auto">
          <p className="text-white text-sm font-bold mr-2">For Appointment:</p>
          <p className="text-white text-xl font-bold">01827 603 607</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
