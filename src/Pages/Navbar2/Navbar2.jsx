import { useState } from "react";
import NewArrivals from "../Home/HomePageCard/NewArrivals";
import Popular from "../Home/HomePageCard/Popular";
import Special from "../Home/HomePageCard/Special";
import BestSeller from "../Home/HomePageCard/BestSeller";

const Navbar2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { title: "NEW ARRIVAL" },
    { title: "POPULAR" },
    { title: "SPECIAL" },
    { title: "BEST SELLER" },
  ];

  const handleNavigation = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      {/* Navbar Menu */}
      <div className="w-full shadow-md">
        <ul className="flex flex-col md:flex-row justify-center md:justify-start rounded-sm divide-x divide-slate-400">
          {menuItems.map((menu, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`px-6 py-2 font-semibold transition-colors duration-300 ${
                activeIndex === index
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {menu.title}
            </button>
          ))}
        </ul>
      </div>

      {/* Dynamic Content Section */}
      <div className="py-0">
        {activeIndex === 0 && <NewArrivals />}
        {activeIndex === 1 && <Popular />}
        {activeIndex === 2 && <Special />}
        {activeIndex === 3 && <BestSeller />}
      </div>
    </div>
  );
};

export default Navbar2;
