import { useState } from "react";

const Navbar2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { title: "NEW ARRIVAL", link: "/new-arrival" },
    { title: "POPULAR", link: "/popular" },
    { title: "SPECIAL", link: "/special" },
    { title: "BEST SELLER", link: "/best-seller" },
  ];

  const handleNavigation = (index) => {
    setActiveIndex(index);
    // Logic to navigate to the page (e.g., using a router)
    window.location.href = menuItems[index].link;
  };

  return (
    <div className="flex flex-1 md:flex justify-start">
      <ul className="flex divide-x divide-slate-400">
        {menuItems.map((menu, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`px-4 py-2 font-semibold ${
              activeIndex === index ? "bg-blue-700 text-white" : "bg-black text-white"
            }`}
          >
            <li>{menu.title}</li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Navbar2;
