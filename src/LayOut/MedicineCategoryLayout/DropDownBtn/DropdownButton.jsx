import React, { useState, useEffect, useRef } from "react";
import HorizontalLine from "../../../Components/HorizontalLine/HorizontalLine";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="inline-block text-left my-3 w-full" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className=" w-full border-primary border-t-4 py-2 text-2xl font-semibold text-black rounded-sm "
      >
        <div>Options</div>
      </button>

      {isOpen && (
        <div
          className={`mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
