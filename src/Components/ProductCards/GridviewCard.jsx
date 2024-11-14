import React, { useState } from "react";

function GridviewCard({ product }) {
  const { description, status } = product;
  const [cardHover, setCardHover] = useState(false);

  return (
    <div>
      <div
        className="p-4 shadow-lg border"
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <div className="relative z-30">
          <img
            src={product.image}
            alt="Image not available"
            className="w-[300px] p-10 border-2"
          />
          <div className="bg-primary/80 bg-transparent text-white py-2 text-lg">
            {product.price}
          </div>
        </div>
        <div>
          <p className="text-lg text-primary my-5">{product.name}</p>
          <p className="text-primary text-xl my-2 font-semibold">
            {product.price}
          </p>
          <button
            className={`p-2 rounded-md shadow-md  ${
              status === "available"
                ? "bg-green-400 border border-green-900 hover:bg-green-500"
                : "bg-gray-300 disabled"
            }`}
          >
            {product.status}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GridviewCard;
