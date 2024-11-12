
import { useState } from 'react';

const Navbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItems = [
        { title: "Product of Zoha Homeo Hall", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"] },
        { title: "DILUTIONS & POTENCIES", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"] },
        { title: "MOTHERTINCTURES", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"] },
        { title: "BIOCHEMICS", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"] },
        { title: "SPECIAL ITEMS", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"] },
        { title: "PRODUCTS", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"] },
        { title: "DOCTOR'S DIARY", dropdown: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    ];

    return (
        <div className="flex justify-center bg-gray-100 border-b w-full max-w-screen-xl mx-auto">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className="relative px-4 py-2 border-l-2 border-r-2 cursor-pointer text-gray-700 hover:bg-primary hover:text-white"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Main menu item */}
                    <span className="font-semibold" title={item.title}>{item.title}</span>

                    {/* Full-width Dropdown menu */}
                    {hoveredIndex === index && (
                        <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 z-50">
                            <div className="mx-auto max-w-screen-xl p-4 grid grid-cols-2 gap-4 text-primary">
                                {item.dropdown.map((option, idx) => (
                                    <div
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Navbar;
