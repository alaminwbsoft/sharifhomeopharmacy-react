import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="flex space-x-2 text-gray-700">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-400">/</span>}
          {item.isCurrent ? (
            <span className="font-semibold text-gray-900">{item.label}</span>
          ) : (
            <Link to={item.href} className="text-blue-600 hover:text-blue-800">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadCrumb;
