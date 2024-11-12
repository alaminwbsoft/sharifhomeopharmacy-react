import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t-4 border-secondary/95 rounded-sm">
      {/* Header Section */}
      <button
        onClick={toggleCollapse}
        className="w-full text-left px-4 py-2 text-black font-medium  focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <div>{isOpen ? <FiMinus /> : <FaPlus />}</div>
        </div>
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        } bg-gray-100`}
        style={{ overflow: "hidden" }}
      >
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
