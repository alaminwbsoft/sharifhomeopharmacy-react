import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  // Define submenu items for each menu
  const menuItems = [
    {
      title: "ZOHA HOMEO HALL",
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
      subcategories: ["Rare Items", "Custom Formulations"],
    },
    {
      title: "PRODUCTS",
      subcategories: ["New Arrivals", "Best Sellers", "Discounted"],
    },
    {
      title: "DOCTOR'S DIARY",
      subcategories: ["Tips", "Case Studies", "Patient Testimonials"],
    },
  ];

  const handleMouseEnter = (index) => {
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto flex justify-center">
        <ul className="flex flex-col divide-y border md:flex-row divide-x divide-slate-300">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="relative text-gray-700 font-semibold hover:text-white hover:bg-black py-3 px-3 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {menu.title}
              {dropdown === index && (
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 z-50">
                  <div className="container mx-auto py-4 px-6 z-50">
                    {/* Display submenu items dynamically */}
                    {menu.subcategories.map((subItem, subIndex) => (
                      <p
                        key={subIndex}
                        className="text-gray-700 py-1 px-2 hover:bg-gray-100"
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
    </nav>
  );
};

export default Navbar;
