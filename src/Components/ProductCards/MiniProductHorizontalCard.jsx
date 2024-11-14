import React from "react";

function MiniProductHorizontalCard({ product }) {
  const { image, name, description, price } = product;
  return (
    <div>
      <div className="flex justify-start gap-6 items-center">
        <img src={image} className="w-[100px] border-2 p-2 rounded-md" alt="" />
        <div>
          <div className="text-base text-secondary my-5">{name}</div>
          <div className="text-sm text-secondary/80 my-2">
            {description.length > 100
              ? `${description.slice(0, 45)}...`
              : description}
          </div>
          <div className="my-3 text-secondary/80 font-semibold">{price}</div>
        </div>
      </div>
      <hr className="border-1 border-secondary/50" />
    </div>
  );
}

export default MiniProductHorizontalCard;
