import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function ListViewCard({ product }) {
  // {
  //     id: 1,
  //     name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
  //     image: "/src/assets/p1.jpg",
  //     reference: "Dr.Ginkgo.B",
  //     condition: "New product",
  //     description:
  //       "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
  //     KeyIngredients: "Ginkgo Biloba (leaves)",
  //     status: "available",
  //     price: "450BDT",
  //   }

  const { description, status } = product;
  return (
    <div className="m-5">
      <div className="grid grid-cols-3 gap-2">
        <div>
          <img
            src={product.image}
            alt="Image not available"
            className="w-[300px] p-10 border-2"
          />
        </div>
        <div>
          <p className="text-lg text-primary my-5">{product.name}</p>
          <p className="text-sm text-secondary/80 my-2">
            {description.length > 200
              ? `${description.slice(0, 170)}...`
              : description}
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
        <div className="m-6 border-s-4 p-4 text-start">
          <p className="text-primary text-xl my-2 text-start font-semibold">
            {product.price}
          </p>
          <button className="my-3 p-2 bg-blue-400 hover:bg-blue-500 block rounded-sm text-white font-semibold">
            Add to cart
          </button>
          <button className="my-3 py-2 px-4 bg-customGray-100 border-2 hover:bg-customGray-300 block rounded-sm text-black font-semibold">
            More
          </button>

          <p className="text-secondary/80 text-sm my-3 flex gap-4 cursor-pointer hover:text-primary">
            <FaRegHeart className="text-lg" />
            Add to Wishlist
          </p>
          <p className="text-secondary/80 text-sm my-3 flex gap-4 cursor-pointer hover:text-primary">
            <IoMdAdd className="text-xl" />
            Add to Compare
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListViewCard;
