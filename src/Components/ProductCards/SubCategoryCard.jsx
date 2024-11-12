import React from "react";

function SubCategoryCard({ card }) {
  return (
    <div className="cursor-pointer">
      <img
        src={card.image}
        alt={card.title}
        className="border border-secondary"
      />
      <div className="text-secondary/75 font-semibold mt-7 text-xl">
        {card.title}
      </div>
    </div>
  );
}

export default SubCategoryCard;
