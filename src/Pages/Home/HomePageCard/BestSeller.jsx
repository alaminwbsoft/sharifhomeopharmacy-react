import React from "react";
import bestSellerImg from "../../../assets/homeCardImg/bestSeller.jpg";
const productData = [
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
  {
    id: 1,
    title: "Dr. Reckeweg Borax 3X",
    image: bestSellerImg,
    price: 450,
    originalPrice: 520,
    badge: "BEST SELLER",
  },
];

const BestSeller = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
      {productData.map((product) => (
        <div
          key={product.id}
          className="w-full h-[380px] border rounded-md bg-white shadow-md relative group overflow-hidden"
        >
          {/* Badge */}
          <div className="absolute -top-2 -left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
            {product.badge}
          </div>

          {/* Image */}
          <div className="flex justify-center border">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-[200px]"
            />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Title */}
          <h2 className="mt-8 text-center font-semibold text-gray-800">
            {product.title}
          </h2>

          {/* Normal Price */}
          <div className="flex justify-center items-baseline mt-8 space-x-2 group-hover:hidden">
            <span className="text-xl font-bold text-gray-900">
              {product.price} BDT
            </span>
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice} BDT
            </span>
          </div>

          {/* Hover Elements */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Quick View Button */}
            <span className="bg-white text-gray-700 px-3 mt-28 py-1 rounded shadow-md cursor-pointer">
              Quick view
            </span>
            {/* Price Option Hover */}
            <div className="flex justify-center items-baseline bg-black opacity-40 mt-14 space-x-2 px-6 py-2">
              <span className="text-xl font-bold text-white">
                {product.price} BDT
              </span>
              <span className="text-sm text-white line-through">
                {product.originalPrice} BDT
              </span>
            </div>
            {/* Buttons */}
            <div className="flex space-x-4 pt-20">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to cart
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSeller;
