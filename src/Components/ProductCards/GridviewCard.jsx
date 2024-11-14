import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function GridviewCard({ product }) {
  const { description, status } = product;
  const [cardHover, setCardHover] = useState(false);

  return (
    <div>
      <div
        className="p-4 shadow-lg border mb-10"
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <div className="relative z-30">
          <img
            src={product.image}
            alt="Image not available"
            className="w-[300px] p-10 border-2"
          />
          {cardHover && (
            <div className="bg-primary bg-transparent/75 font-medium text-white py-2 text-lg absolute w-full max-w-[300px] bottom-1">
              {product.price}
            </div>
          )}
        </div>
        <div>
          <p className="text-lg text-primary my-5">{product.name}</p>
          <div className="relative">
            <p className="text-primary text-xl my-2 font-semibold">
              {product.price}
            </p>
            {cardHover && (
              <div className="absolute flex justify-evenly w-full bg-white bottom-1">
                <button className="my-3 p-2 bg-blue-400 hover:bg-blue-500 block rounded-sm text-white font-semibold">
                  Add to cart
                </button>
                <button className="my-3 py-2 px-4 bg-customGray-100 border-2 hover:bg-customGray-300 block rounded-sm text-black font-semibold">
                  More
                </button>
              </div>
            )}
          </div>
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
        <div className="relative">
          {cardHover && (
            <div className="flex justify-between w-full mt-4 mb-0 absolute">
              <p className="text-secondary/80 text-xs my-3 flex gap-2 cursor-pointer hover:text-primary">
                <FaRegHeart className="text-lg" />
                Add to Wishlist
              </p>
              <p className="text-secondary/80 text-xs my-3 flex gap-2 cursor-pointer hover:text-primary">
                <IoMdAdd className="text-xl" />
                Add to Compare
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GridviewCard;
