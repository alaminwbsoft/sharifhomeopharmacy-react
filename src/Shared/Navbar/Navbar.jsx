import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto flex justify-center">
        <ul className="flex divide-x divide-slate-300">
          {[
            "ZOHA HOMEO HALL",
            "DILUTIONS & POTENCIES",
            "MOTHERTINCTURES",
            "BIOCHEMICS",
            "SPECIAL ITEMS",
            "PRODUCTS",
            "DOCTOR'S DIARY",
          ].map((menu, index) => (
            <li
              key={index}
              className="relative text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {menu}
              {dropdown === index && (
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 -z-80">
                  <div className="container mx-auto py-4 px-6 z-50">
                    <p className="text-gray-700 ">
                      Dropdown content for {menu}
                    </p>
                    <p className="text-gray-700 ">
                      Dropdown content for {menu}
                    </p>
                    <p className="text-gray-700 ">
                      Dropdown content for {menu}
                    </p>
                    {/* Add more dropdown items here */}
                    <p>kkkkkkkkkkkkkkkkkW</p>
                    <ul>
                      <li>kkkkkkkkk</li>
                      <li>ppppppppppp</li>
                    </ul>
                    <ul>
                      <li>jjjjjjjjjj</li>
                      <li>ddddddddddd</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
