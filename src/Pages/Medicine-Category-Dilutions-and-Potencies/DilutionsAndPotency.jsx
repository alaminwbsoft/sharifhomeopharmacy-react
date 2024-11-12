import React from "react";
// import dilutionsBanner from "../../assets/Capture.jpg";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";
import SubCategoryCard from "../../Components/ProductCards/SubCategoryCard";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa";

function DilutionsAndPotency() {
  const dummySubCat = [
    {
      title: "REGULAR MEDICINE",
      image: "/src/assets/p8.jpg",
    },
    {
      title: "COMBINATIONS",
      image: "/src/assets/p7.jpg",
    },
    {
      title: "DILUTION POTENCY",
      image: "/src/assets/p8.jpg",
    },
  ];

  return (
    <div className="lg:m-2">
      {/* ------------------------ first section top banner with line at top ------------- */}
      <div>
        <HorizontalLine />
        {/* <img src={dilutionsBanner} alt="medicine image" /> */}
      </div>

      {/* ------------------------ second section page title ------------------ */}
      <div className="lg:flex-col lg:items-center lg:justify-start ">
        <div className="text-secondary/75 font-semibold mt-7 text-xl">
          DILUTIONS & POTENCIES
        </div>
        <div className="text-secondary/75 font-medium text-sm">
          (There are 502 products)
        </div>
        <hr className="my-5 border-secondary/60 border" />
      </div>

      {/* ----------------------------- subCategories --------------------------- */}
      <div>
        <div className="text-sm text-primary font-semibold text-start mb-3">
          Subcategories
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 ">
          {dummySubCat.map((card, index) => (
            <SubCategoryCard key={index} card={card}></SubCategoryCard>
          ))}
        </div>
      </div>

      {/* ----------------------------- sorting and Viewing (grid / list) -------- */}
      <div className="flex justify-between items-center my-8">
        <div>sort by and show</div>
        <div className="flex items-center justify-between gap-3">
          <div>view:</div>
          <BiSolidGridAlt className="cursor-pointer text-2xl" />
          <FaList className="cursor-" />
        </div>
      </div>

      {/* ---------------------------- viewing info list -------------------- */}
      <div className="my-8">
        <hr />
        <div className="flex justify-evenly items-center">
          <div>showing 1-12 of 502 items</div>
          <div>pagination</div>
          <div>
            <button>show all</button>
            <button>Compare(0)</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default DilutionsAndPotency;
