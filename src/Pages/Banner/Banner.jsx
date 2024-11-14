
import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/baaner2.png";
import banner3 from "../../assets/banner3.jpg";
import cardPhoto from "../../assets/cardPhoto.png";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [banner1, banner2, banner3];

  // Autoplay effect that only moves from right to left
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center  gap-6">
      {/* Carousel Section */}
      <div className="relative w-full md:w-[1110px] h-[620px] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ minWidth: "100%" }}
            />
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
          className="absolute bottom-0 right-[50px] transform -translate-y-1/2 bg-gray-700 opacity-50 border-2 text-white p-2 rounded shadow-lg hover:bg-gray-800 transition"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute bottom-0 right-2 transform -translate-y-1/2 bg-gray-700 opacity-50 border-2 text-white p-2 rounded shadow-lg hover:bg-gray-800 transition"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Card Section */}
      <div className=" md:w-[390px] h-[620px] flex items-center">
        <div className="bg-gray-200 rounded shadow-md w-full h-full flex flex-col justify-between">
          <div className="bg-gray-400 py-2 rounded-t-md text-center">
            <p className="text-white text-2xl font-bold">Our Consultant</p>
          </div>

          <div className="flex justify-center space-x-6 items-center px-4">
            <div className="border-2 border-gray-400 p-1 rounded-md">
              <img
                src={cardPhoto}
                alt="Dr. Abu Taleb Mollah"
                className="rounded-md w-18 h-22 object-cover"
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

          <div className="bg-gray-300 p-4 mx-4 mt-4 rounded-3xl text-center relative custom-corner-borders">
            <p className="text-gray-700 text-sm font-semibold">
              Dr. Taleb, an experienced homeopathy doctor & specialized in
              medicine. He has done his BHMS (Bachelor of Homeopathy Medicine &
              Surgery) degree from Dhaka University in the year of 1997 (1st
              Batch). In his professional life, currently working as a Medical
              Officer at the Medical Center of Dhaka University. Besides that, he
              regularly practices Homeopathy at the Sharif Homeo Pharmacy.
            </p>
          </div>

          <div className="flex justify-center items-center text-center bg-gray-500 py-2 rounded-b-md">
            <p className="text-white text-sm font-bold mr-2">For Appointment:</p>
            <p className="text-white text-xl font-bold">01827 603 607</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
