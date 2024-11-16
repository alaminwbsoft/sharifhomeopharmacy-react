import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.jpg";
import cardPhoto from "../../assets/cardPhoto.png";

const Banner = () => {
  const images = [banner1, banner2, banner3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Slider Section */}
      <div className="relative w-full md:w-3/4 h-[620px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[620px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/4 h-[620px] flex items-center">
        <div className="bg-gray-200 rounded shadow-md w-full h-full flex flex-col justify-between">
          <div className="bg-gray-400 py-2 rounded-t-md text-center">
            <p className="text-white text-2xl font-bold">Our Consultant</p>
          </div>

          <div className="flex justify-center space-x-6 items-center px-4">
            <div className="border-2 border-gray-400 p-1 rounded-md">
              <img
                src={cardPhoto}
                alt="Dr. Abu Taleb Mollah"
                className="rounded-md w-20 h-24 object-cover"
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

          <div className="bg-gray-300 p-4 mx-4 mt-4 rounded-3xl text-center">
            <p className="text-gray-700 text-sm font-semibold">
              Dr. Taleb, an experienced homeopathy doctor & specialized in
              medicine. He has done his BHMS (Bachelor of Homeopathy Medicine &
              Surgery) degree from Dhaka University in the year of 1997 (1st
              Batch). Currently working as a Medical Officer at the Medical
              Center of Dhaka University. He also practices Homeopathy at the
              Sharif Homeo Pharmacy.
            </p>
          </div>

          <div className="flex justify-center items-center text-center bg-gray-500 py-2 rounded-b-md">
            <p className="text-white text-sm font-bold mr-2">
              For Appointment:
            </p>
            <p className="text-white text-xl font-bold">01827 603 607</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-1 right-14 z-10 transform -translate-y-1/2 bg-gray-700 opacity-75 text-white p-2 rounded border cursor-pointer hover:opacity-100 transition"
      onClick={onClick}
    >
      <IoIosArrowBack size={24} />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-1 right-4 z-10 transform -translate-y-1/2 bg-gray-700 opacity-75 text-white p-2 rounded border cursor-pointer hover:opacity-100 transition"
      onClick={onClick}
    >
      <IoIosArrowForward size={24} />
    </div>
  );
};

export default Banner;
