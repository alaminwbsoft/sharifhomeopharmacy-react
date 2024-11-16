import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
  const [activeIndex, setActiveIndex] = useState(null); // For toggling subcategories in mobile

  // Menu items
  const menuItems = [
    {
      title: "PRODUCT OF ZOHA HOMEO HALL",
      subcategories: ["About Us", "Our Services", "Contact"],
    },
    {
      title: "DILUTIONS & POTENCIES",
      subcategories: ["Low Potency", "Medium Potency", "High Potency"],
    },
    {
      title: "MOTHERTINCTURES",
      subcategories: ["Herbal Extracts", "Animal Products", "Mineral Extracts"],
    },
    {
      title: "BIOCHEMICS",
      subcategories: [
        "Single Biochemic",
        "Combination Biochemic",
        "Special Biochemic",
      ],
    },
    {
      title: "SPECIAL ITEMS",
      subcategories: [
        "Single Biochemic",
        "Combination Biochemic",
        "Special Biochemic",
      ],
    },
    {
      title: "PRODUCTS",
      subcategories: [
        "Single Biochemic",
        "Combination Biochemic",
        "Special Biochemic",
      ],
    },
    {
      title: "DOCTOR'S DIARY", // No subcategories for this menu item
    },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Toggle subcategories in mobile
  const toggleSubcategory = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-100 text-primary border-b border-gray-200">
        {/* Top Section for Mobile */}
        <div className="flex items-center hover:bg-primary hover:text-white  justify-between px-4 py-2 md:py-0 md:justify-center">
          <span className="font-bold text-lg  block md:hidden">MENU</span>
          <button className="font-bold text-xl md:hidden" onClick={toggleMenu}>
            {menuOpen ? <FaMinus /> : <FaPlus />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <ul className="flex justify-center  divide-x divide-gray-300">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="relative px-4 py-3 text-primary hover:bg-primary hover:text-white font-medium  cursor-pointer group"
              >
                {menu.title}
                {/* Dropdown for desktop */}
                {menu.subcategories && (
                  <div className="absolute left-0 w-full top-full bg-white shadow-md border-t border-gray-200 hidden group-hover:block z-50 transition-all duration-300 ease-in-out">
                    <div className="container mx-auto py-4 px-6">
                      {menu.subcategories.map((subItem, subIndex) => (
                        <p
                          key={subIndex}
                          className="text-primary py-1 hover:bg-gray-100"
                        >
                          {subItem}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar */}
        {menuOpen && (
          <div
            className={`block md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ul className="divide-y divide-gray-300">
              {menuItems.map((menu, index) => (
                <li key={index} className="py-2 px-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSubcategory(index)}
                  >
                    <span>{menu.title}</span>
                    {menu.subcategories && (
                      <span className="font-bold">
                        {activeIndex === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    )}
                  </div>

                  {/* Subcategories for mobile */}
                  {menu.subcategories && activeIndex === index && (
                    <ul className="ml-4 mt-2">
                      {menu.subcategories.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-1 text-sm">
                          <a
                            href={`#${subItem
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            className="text-black hover:text-gray-700"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Bottom Links */}
      <div className="flex justify-end px-4 py-2 text-sm text-gray-600 space-x-2">
        <button>contact</button>
        <span>|</span>
        <button>sitemap</button>
      </div>
    </div>
  );
};

export default Navbar;
