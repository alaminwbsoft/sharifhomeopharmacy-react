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
      dropdown: [
        {
          category: "REGULAR MEDICINE",
          items: [],
        },
        {
          category: "COMBINATIONS",
          items: [
            "R Series (Dr. Reckwage)",
            "Adel Series (Peckana)",
            "HM Series (Harbamed-Swiss)",
            "Kent Series",
            "SBL Drop",
            "Rax No",
          ],
        },
        {
          category: "DILUTION POTENCY (SEALED PACKED)",
          items: [],
        },
      ],
    },
    {
      title: "DILUTIONS & POTENCIES",
      dropdown: [
        {
          category: "REGULAR MEDICINE",
          items: [],
        },
        {
          category: "COMBINATIONS",
          items: [
            "R Series (Dr. Reckwage)",
            "Adel Series (Peckana)",
            "HM Series (Harbamed-Swiss)",
            "Kent Series",
            "SBL Drop",
            "Rax No",
          ],
        },
        {
          category: "DILUTION POTENCY (SEALED PACKED)",
          items: [],
        },
      ],
    },
    {
      title: "MOTHERTINCTURES",
      dropdown: [
        {
          category: "REGULAR MOTHER TINCTURES",
          items: [
            "PENTARKEN (Willmar Schwabe)",
            "R Series (Dr. Reckwage)",
            "Adel Series (Pekana)",
          ],
        },
        {
          category: "MOTHER COMBINATIONS",
          items: ["HM Series (Harbamed-Swiss)", "SBL Drop", "Kent Series"],
        },
        {
          category: "MOTHER TINCTURES (SEALED PACKED)-20mL",
          items: [],
        },
      ],
    },
    {
      title: "BIOCHEMICS",
      dropdown: [
        {
          category: "REGULAR BIOCHEMICS",
          items: [],
        },
        {
          category: " BIOCHEMICS COMBINATIONS",
          items: [
            "R Series (Dr. Reckwage)",
            "Adel Series (Peckana)",
            "HM Series (Harbamed-Swiss)",
            "Kent Series",
            "SBL Drop",
            "Rax No",
          ],
        },
        {
          category: "BIOCHEMICS (SEALED PACKED)-20GM",
          items: [
            "R Series (Dr. Reckwage)",
            "Adel Series (Peckana)",
            "HM Series (Harbamed-Swiss)",
            "Kent Series",
            "SBL Drop",
            "Rax No",
          ],
        },
      ],
    },
    {
      title: "SPECIAL ITEMS",
      dropdown: [
        {
          category: "ORAL DROPS",
          items: [],
        },
        {
          category: "TABLETS",
          items: ["HM Series (Harbamed-Swiss)", "SBL Drop", "Kent Series"],
        },
        {
          category: "SYRUP",
          items: ["HM Series (Harbamed-Swiss)", "SBL Drop", "Kent Series"],
        },
        {
          category: "OINTMENT",
          items: ["HM Series (Harbamed-Swiss)", "SBL Drop", "Kent Series"],
        },
        {
          category: "COSMETICS",
          items: ["HM Series (Harbamed-Swiss)", "SBL Drop", "Kent Series"],
        },
      ],
    },
    {
      title: "PRODUCTS",
      dropdown: [
        {
          category: "REGULAR MEDICINE",
          items: [],
        },
        {
          category: "COMBINATIONS",
          items: [],
        },
        {
          category: "DILUTION POTENCY (SEALED PACKED)",
          items: [],
        },
        {
          category: "DILUTION POTENCY (SEALED PACKED)",
          items: [],
        },
      ],
    },
    {
      title: "DOCTOR'S DIARY",
      dropdown: [],
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
      <nav className="relative bg-gray-100 text-primary border-b border-gray-200">
        {/* Top Section for Mobile */}
        <div className="flex items-center hover:bg-primary hover:text-white justify-between px-4 py-2 md:py-0 md:justify-center">
          <span className="font-bold text-lg block md:hidden">MENU</span>
          <button className="font-bold text-xl md:hidden" onClick={toggleMenu}>
            {menuOpen ? <FaMinus /> : <FaPlus />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <ul className="flex justify-center divide-x divide-gray-300">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="px-4 py-3 text-primary hover:bg-primary hover:text-white font-medium cursor-pointer"
              >
                {menu.title}
                {/* Dropdown for desktop */}
                {menu.dropdown?.length > 0 && (
                  <div className="absolute left-0 w-full top-full bg-white shadow-md border-t border-gray-200 hidden group-hover:block z-50 ">
                    <div className="container mx-auto py-4">
                      <div className="flex flex-row gap-16 pr-32 py-5">
                        {menu.dropdown.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="w-full md:w-1/3 lg:w-1/4"
                          >
                            <h4 className="font-bold text-gray-800 mb-2">
                              {subItem.category}
                            </h4>
                            {subItem.items.length > 0 ? (
                              <ul className="list-disc list-inside">
                                {subItem.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-primary py-1 hover:bg-gray-100"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-600">
                                No items available
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar */}
        {menuOpen && (
          <div className="block md:hidden overflow-hidden transition-all duration-500 ease-in-out">
            <ul className="divide-y divide-gray-300">
              {menuItems.map((menu, index) => (
                <li key={index} className="py-2 px-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSubcategory(index)}
                  >
                    <span>{menu.title}</span>
                    {menu.dropdown?.length > 0 && (
                      <span className="font-bold">
                        {activeIndex === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    )}
                  </div>

                  {/* Subcategories for mobile */}
                  {menu.dropdown?.length > 0 && activeIndex === index && (
                    <ul className="ml-4 mt-2">
                      {menu.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-4">
                          <h4 className="font-bold text-gray-800 mb-2">
                            {subItem.category}
                          </h4>
                          {subItem.items.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {subItem.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="text-black py-1 hover:text-gray-700"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">No items available</p>
                          )}
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
        <button>Contact</button>
        <span>|</span>
        <button>Sitemap</button>
      </div>
    </div>
  );
};

export default Navbar;
